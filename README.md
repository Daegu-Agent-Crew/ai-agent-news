# ai-agent-news

최신 AI 에이전트 관련 뉴스를 에이전트가 수집하고 번역·심층 분석하여 체계적으로 정리하는 시스템.

## 구조 (Karpathy LLM Wiki 3계층)

```
context/
├── records/          ← 데이터 소스 (원본 수집 뉴스)
│   └── YYYY-MM-DD-{slug}.md
├── wiki/             ← 위키 계층 (주제별 컴파일)
│   ├── frameworks.md
│   ├── models.md
│   ├── tools.md
│   └── industry.md
└── registry/
    └── sources/      ← 소스 레지스트리
        └── {source}.yml
```

## 수집 파이프라인

1. **탐색** — 에이전트가 웹 검색으로 최신 AI 에이전트 뉴스 탐색
2. **수집** — 원문 fetch, 핵심 내용 추출
3. **번역** — 한국어 핵심 번역
4. **심층 분석** — 기술 의미, 업계 영향, 관련 프로젝트
5. **저장** — `context/records/`에 구조화 마크다운 저장
6. **위키 컴파일** — 주제별 `context/wiki/`로 정리

## 사용 방법

OpenClaw 에이전트에게 "뉴스 수집해줘"라고 요청하면 됩니다.

## 증거 기준 (2026-09-11~)

Comp AI CRM의 증거 장부(evidence ledger) 패턴을 축소 적용. 상세 규칙은 `AGENTS.md`와 `context/records/_template.md` 참조.

- **사실/해석 분리** — 요약의 사실 문장은 원문 발췌로 소급 가능해야 함. 소급 불가 주장은 `(→ 분석)` 표기
- **중요도 ⭐ 산정표** — 자기 평가 금지. 소스 권위 + 교차 확인 + 반응 규모로 계산
- **수집 노트** — 선정 이유와 제외 후보 기록. 이유 없는 선정은 커밋 금지
- 2026-09-10 이전 레코드는 소급 수정하지 않음

린트: `python3 scripts/lint_records.py` (push 시 CI에서도 실행)

## 라이선스

Daegu Agent Crew © 2026
