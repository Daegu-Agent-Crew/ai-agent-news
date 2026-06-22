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

## 라이선스

Daegu Agent Crew © 2026
