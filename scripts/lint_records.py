#!/usr/bin/env python3
"""ai-agent-news 레코드 린트.

- 2026-09-11 이후 수집분(신규): 현행 템플릿 전체 강제 (error)
- 이전 수집분(legacy): 소급 수정 금지 원칙에 따라 경고만 (CI 실패 없음)

사용: python3 scripts/lint_records.py  (error 있으면 exit 1)
       python3 scripts/lint_records.py --verbose  (경고까지 전체 출력)
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

RECORDS_DIR = Path(__file__).resolve().parent.parent / "context" / "records"
EFFECTIVE_DATE = "2026-09-11"  # 이 날짜 이후 수집분부터 현행 템플릿 강제

CATEGORIES = {"framework", "model", "tool", "industry", "research"}
FRESHNESS = {"fresh", "updated", "stale"}
SOURCE_AUTHORITY = {"official", "major-media", "community"}

REQUIRED_META = [
    "원문 URL", "소스", "발행일", "수집일", "수집자",
    "카테고리", "태그", "중요도", "신선도",
]
NEW_META = ["소스 권위", "교차 확인"]
REQUIRED_SECTIONS = ["## 핵심 요약", "## 번역 (한국어)", "## 원문 발췌"]
NEW_SECTIONS = ["## 수집 노트"]

FILENAME_RE = re.compile(r"^(\d{4}-\d{2}-\d{2})-[a-z0-9][a-z0-9-]*$")


def meta_value(text: str, field: str) -> str | None:
    m = re.search(rf"^- \*\*{re.escape(field)}\*\*: (.+)$", text, re.M)
    return m.group(1).strip() if m else None


def lint_file(path: Path, errors: list[str], warnings: list[str]) -> None:
    name = path.name
    if name == "_template.md":
        return
    stem = path.stem
    m = FILENAME_RE.match(stem)
    date = m.group(1) if m else None
    if not m:
        errors.append(f"{name}: 파일명 규칙 위반 (YYYY-MM-DD-slug.md)")

    try:
        text = path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        errors.append(f"{name}: UTF-8 디코딩 실패")
        return

    is_new = bool(date and date >= EFFECTIVE_DATE)

    def report(is_err: bool, msg: str) -> None:
        (errors if is_err else warnings).append(f"{name}: {msg}")

    # 메타데이터 필드 (형식: `- **필드**: 값`)
    for field in REQUIRED_META:
        v = meta_value(text, field)
        if v is None:
            near = re.search(rf"^[^\n]*{re.escape(field)}[^\n]*$", text, re.M)
            if near and "**" in near.group(0):
                report(is_new, f"메타데이터 형식 오류 — {field}: `- **{field}**: 값` 이어야 함 "
                               f"(실제: {near.group(0)[:70]})")
            else:
                report(is_new, f"메타데이터 누락 — {field}")

    # 값 검증 (값이 있는 경우만)
    cat = meta_value(text, "카테고리")
    if cat is not None and cat not in CATEGORIES:
        report(is_new, f"카테고리 값 오류 — {cat}")
    fresh = meta_value(text, "신선도")
    if fresh is not None and fresh not in FRESHNESS:
        report(is_new, f"신선도 값 오류 — {fresh}")
    url = meta_value(text, "원문 URL")
    if url is not None and not re.match(r"^https?://", url):
        report(is_new, f"원문 URL 형식 오류 — {url}")
    stars = meta_value(text, "중요도")
    if stars is not None and not re.match(r"^\u2b50{1,5}$", stars):
        report(is_new, f"중요도 형식 오류 — {stars} (⭐ 1~5개)")

    # 신규 증거 필드
    for field in NEW_META:
        v = meta_value(text, field)
        if v is None:
            report(is_new, f"신규 필드 없음 — {field}")
    auth = meta_value(text, "소스 권위")
    if auth is not None and auth not in SOURCE_AUTHORITY:
        errors.append(f"{name}: 소스 권위 값 오류 — {auth} ({'|'.join(sorted(SOURCE_AUTHORITY))})")
    cross = meta_value(text, "교차 확인")
    if cross is not None and not re.match(r"^\d+$", cross):
        errors.append(f"{name}: 교차 확인 값 오류 — {cross} (숫자)")

    # 섹션
    for sec in REQUIRED_SECTIONS:
        if not re.search(rf"^{re.escape(sec)}\s*$", text, re.M):
            report(is_new, f"섹션 누락 — {sec}")
    for sec in NEW_SECTIONS:
        if not re.search(rf"^{re.escape(sec)}\s*$", text, re.M):
            report(is_new, f"신규 섹션 누락 — {sec}")

    # 발췌·요약 내용: 블록인용 최소 1줄 (신규만)
    if is_new:
        for sec in ["## 핵심 요약", "## 원문 발췌"]:
            m2 = re.search(rf"^{re.escape(sec)}\s*\n+(.*?)(?=^## |\Z)", text, re.M | re.S)
            if m2 and ">" not in m2.group(1):
                errors.append(f"{name}: {sec}에 인용문(>) 없음")
        m3 = re.search(r"^## 수집 노트\s*\n+(.*?)(?=^## |\Z)", text, re.M | re.S)
        if m3 and "**선정 이유**" not in m3.group(1):
            errors.append(f"{name}: 수집 노트에 선정 이유 없음")


def main() -> int:
    verbose = "--verbose" in sys.argv
    errors: list[str] = []
    warnings: list[str] = []
    files = sorted(RECORDS_DIR.glob("*.md"))
    for f in files:
        lint_file(f, errors, warnings)
    lines = [f"검사 {len(files)}개 파일 — error {len(errors)}건, legacy 경고 {len(warnings)}건"]
    lines += [f"  [ERROR] {e}" for e in errors]
    if verbose:
        lines += [f"  [warn]  {w}" for w in warnings]
    elif warnings:
        lines.append(f"  (legacy 경고 상세: --verbose)")
    lines.append("lint 통과" if not errors else "lint 실패")
    print("\n".join(lines))
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
