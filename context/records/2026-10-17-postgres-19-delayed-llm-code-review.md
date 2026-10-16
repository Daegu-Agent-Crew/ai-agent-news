# PostgreSQL 19 출시 연기 — LLM 코드 리뷰가 찾은 결함에 기능 8~10개 철회

## 메타데이터
- **원문 URL**: https://www.theregister.com/databases/2026/10/16/postgres-19-delayed-after-ai-reviewers-find-more-bugs-than-humans-can-fix/5303471
- **소스**: The Register (Peter Eisentraut 블로그 인용)
- **발행일**: 2026-10-16
- **수집일**: 2026-10-17
- **수집자**: 레노버
- **카테고리**: industry
- **태그**: [postgresql, llm-code-review, open-source, release, software-quality]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐⭐
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 1개(0) + HN 167pt(1) = 3
- **신선도**: fresh

## 핵심 요약
> PostgreSQL 글로벌 개발 그룹이 PostgreSQL 19 출시를 11월 19일경으로 미루고 주요 기능 8~10개를 철회했다. The Register에 따르면 핵심 커미터 Peter Eisentraut는 그 원인의 일부를 LLM 지원 코드 리뷰가 결함을 훨씬 많이 찾아낸 데 돌렸다.

## 번역 (한국어)
PostgreSQL 글로벌 개발 그룹이 오픈소스 데이터베이스 PostgreSQL 19의 출시를 연기하고, 이례적으로 많은 기능을 보류했다. 원래 9월 말~10월 초 출시 예정이던 PostgreSQL 19는 이제 11월 19일 전후 정식 출시될 예정이며, 8~10개의 주요 기능이 빠졌다. 이들은 내년 PostgreSQL 20으로 미뤄진다.

EDB 부사장이자 핵심 커미터인 Peter Eisentraut는 블로그에서 철회된 기능 중 일부는 베타 중 빠르게 고치기 어려운 심각한 구조적 결함이 있었다고 밝혔다. 동시에 LLM 지원 코드 리뷰가 "다양한 엣지 케이스와 관련된 비교적 무해한 문제들"의 긴 꼬리를 드러냈다고 말했다. 과거라면 출시 후 5년에 걸쳐 고쳐졌을 문제들이다. 그는 "LLM 지원 코드 리뷰로 이런 것들을 훨씬 빨리 찾게 되고, 40개의 결함 보고서를 마주하게 된다. 평균 3줄짜리 수정이라도 건마다 고정 비용이 있어 결국 시간이 부족해진다"고 설명했다.

Eisentraut는 "기능이 작성·커밋된 이후 실질적인 품질 기준이 높아졌다"며, LLM 리뷰 역량이 현재 속도로 계속 개선되지 않는 한 이후 개발 주기에서는 자연스럽게 해소될 것이라고 봤다. 그는 철회가 '바이브 코딩' 때문이 아니라는 점도 강조했는데, 대부분의 기능이 작성될 당시 그런 기법은 없었기 때문이다.

철회된 기능에는 2023년 SQL 표준이 된 SQL 속성 그래프 쿼리(SQL/PGQ) 지원이 포함된다. 그럼에도 Eisentraut는 PostgreSQL 19가 테이블 잠금 없이 디스크 공간을 회수하는 REPACK CONCURRENTLY 등을 담은 "훌륭한 릴리스"이며 "추가 검증 덕분에 매우 견고할 것"이라고 말했다.

## 왜 중요한가?
AI가 코드의 숨은 버그를 사람보다 훨씬 많이 찾아내면서, 세계적으로 널리 쓰이는 데이터베이스의 출시 일정까지 바뀌었습니다. AI가 소프트웨어를 '더 안전하게' 만들지만, 찾아낸 문제를 고칠 사람 시간은 여전히 부족하다는 새로운 병목을 보여줍니다.

## 심층 분석

### 기술 의미
LLM 리뷰가 '발견'의 비용은 거의 0으로 낮췄지만 '수정·검증'의 건당 고정 비용은 그대로라는 비대칭이 드러났다(→ 분석). 이는 리뷰 산출물을 자동으로 분류·우선순위화·수정까지 연결하는 파이프라인의 필요성을 보여준다(→ 분석). 같은 날 Anthropic이 공개한 '검증 투표로 노이즈 제거' 방식이 바로 이 병목을 겨냥한 설계로 볼 수 있다(→ 분석).

### 업계 영향
보수적인 대형 오픈소스 프로젝트가 LLM 리뷰 결과를 출시 결정의 근거로 삼았다는 점은 AI 코드 리뷰가 실험 단계를 넘었음을 시사한다(→ 분석). 단기적으로는 일정 지연이지만, 장기적으로는 출시 후 버그 수정 부담을 앞당겨 처리하는 효과가 있다(→ 분석). 다른 오픈소스 프로젝트들도 메인테이너 처리 용량이 새 병목이 되는 상황을 겪을 가능성이 크다(→ 분석).

### 관련 프로젝트
- PostgreSQL 19 / 20
- SQL/PGQ (SQL Property Graph Queries)
- REPACK CONCURRENTLY

### 관련 뉴스
- [Claude Code 팀의 코드 리뷰 방식](../records/2026-10-17-claude-code-team-code-review-at-scale.md) — 같은 날 공개된 대규모 AI 리뷰 운영 사례
- [리누스 토르발스 첫 LLM 지원 패치](../records/2026-10-15-linus-torvalds-first-llm-assisted-patch.md) — 대형 오픈소스의 AI 도입 흐름

## 원문 발췌
> "Once slated for release in late September or early October, PostgreSQL 19 is now expected to be generally available around November 19. Developers have also dropped between eight and 10 significant features."
> "With LLM-assisted code review, these kinds of things can get found much faster, and then you're staring at a list of forty defect reports. Even if each of them requires only a three-line fix on average, there is a fixed overhead to dealing with each of these, and then you run out of time."
> "The effective quality bar has been raised after the time the feature was written and committed."

## 수집 노트
- **선정 이유**: 주요 기술 매체 보도 + HN 167pt로, AI 코드 리뷰가 대형 오픈소스 출시 일정에 실제 영향을 준 첫 사례급 사건이라 선정.
- **제외 후보**: OpenBSD 37년 된 커널 버그 익스플로잇(calif.io) — AI 연관성 불명확. Llama.cpp PS5 포팅(GitHub) — 커뮤니티 해킹 프로젝트로 산업 영향 제한적.
