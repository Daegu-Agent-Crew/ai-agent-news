#!/usr/bin/env python3
"""위키 롤링 아카이브: 각 개요 위키에서 최근 KEEP개 차수 섹션만 남기고 오래된 차수는 archive/로 이동(append).

사용: python3 scripts/wiki_archive_rotate.py [KEEP=8]
메타데이터·요약·아카이브 안내 섹션은 이동하지 않는다. 내용 삭제 없음.
"""
import os, re, sys

KEEP = int(sys.argv[1]) if len(sys.argv) > 1 else 8
WIKI = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "context", "wiki")
FILES = ["frameworks-overview.md", "models-overview.md", "research-overview.md",
         "tools-overview.md", "industry-trends.md"]
DATED = re.compile(r"## 2026년 \d+월 \d+차")

for name in FILES:
    path = os.path.join(WIKI, name)
    text = open(path, encoding="utf-8").read()
    parts = re.split(r"(?m)^(?=## )", text)
    head, blocks = parts[0], parts[1:]
    dated = [i for i, b in enumerate(blocks) if DATED.match(b)]
    move = set(dated[:-KEEP]) if len(dated) > KEEP else set()
    if not move:
        print(f"{name}: 이동 없음 (차수 {len(dated)}개)")
        continue
    arch_path = os.path.join(WIKI, "archive", f"{name[:-3]}-archive.md")
    with open(arch_path, "a", encoding="utf-8") as fa:
        fa.write("".join(b if b.endswith("\n") else b + "\n" for i, b in enumerate(blocks) if i in move))
    kept = "".join(b for i, b in enumerate(blocks) if i not in move)
    open(path, "w", encoding="utf-8").write(head + kept)
    print(f"{name}: {len(move)}개 차수 → archive")
