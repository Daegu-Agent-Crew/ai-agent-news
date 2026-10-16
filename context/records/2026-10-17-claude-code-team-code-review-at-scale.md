# Anthropic Claude Code 팀의 코드 리뷰 방식 공개 — 머지 PR 2배↑, 리버트 비율 40%↓

## 메타데이터
- **원문 URL**: https://claude.dev/blog/solving-code-review-at-anthropic/
- **소스**: claude.dev 블로그 (Anthropic 공식)
- **발행일**: 2026-10-16
- **수집일**: 2026-10-17
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [anthropic, claude-code, code-review, ci, agentic-coding, devops, risk-tiering]
- **소스 권위**: official
- **교차 확인**: 1
- **중요도**: ⭐⭐⭐⭐
- **중요도 산정**: 기본 1 + official 2 + 교차 확인 1개(0) + HN 176pt(1) = 4
- **신선도**: fresh

## 핵심 요약
> Anthropic은 Claude Code 팀이 리뷰의 대부분을 기계에 맡기고 위험도 기반으로 사람의 승인을 배치한 결과, 6~9월 머지된 PR이 두 배 이상 늘면서도 리버트 비율은 40% 넘게 줄었다고 밝혔다. Anthropic 모노레포의 일일 변경은 5월 약 2,500건에서 9월 3만 건 이상으로 늘었다.

## 번역 (한국어)
Anthropic은 Claude가 Claude Code 자체 코드의 약 90%를 작성한다고 밝혀왔다. 이번 글은 이 속도로 생산되는 코드를 어떻게 리뷰하는지 설명한다. Anthropic에 따르면 6월부터 9월까지 Claude Code 코드베이스의 머지된 PR은 두 배 이상 늘었고, 리버트된 비율은 40% 넘게 줄었다. 회사 모노레포에 하루 반영되는 변경은 5월 약 2,500건에서 9월 3만 건 이상으로 증가했다.

팀은 리뷰를 없애지 않았지만 읽기의 대부분을 기계로 옮기고, 사람의 시간과 주의를 최적화하며, 실수를 빠르고 쉽게 되돌리는 데 투자했다고 설명한다. 리뷰는 이제 마지막 관문이 아니라 "글을 쓰는 동안 돌아가는 맞춤법 검사"처럼 지속적으로 실행된다. 목표는 대부분의 PR이 최대 한 명(작성자 본인일 수도 있음)의 사람만 거쳐 머지되면서도 리버트와 장애가 늘지 않는 것이다.

PR마다 Claude 리뷰가 먼저 돈다. 여러 에이전트가 병렬로 버그를 찾고, 별도 그룹이 각 발견에 투표해 충분히 동의를 얻은 것만 게시하며, 스타일·정리성 지적은 제거된다. 보안 리뷰는 별도로 돌며, 어느 쪽이든 미해결 발견이 있으면 머지가 막힌다. 공개 버전 도입 후 내부 PR 중 실질적 리뷰 코멘트를 받는 비율이 16%에서 54%로 올랐다고 Anthropic은 밝혔다.

분류기가 변경의 위험 등급을 정해 사람 승인을 0명·1명·2명으로 나눈다. 문서·카피·플래그 뒤의 추가 변경은 자동 리뷰가 통과하면 사람 승인이 필요 없고, 일부 민감 경로와 CI 워크플로 파일은 항상 사람이 봐야 한다. 에이전트의 승인은 사람 승인으로 치지 않는다. 머지 후에는 플래그 뒤 사내 우선 배포, 점진 릴리스, 온콜 모니터링으로 실수를 빠르게 잡는다. 팀은 과거 장애를 일으킨 PR들로 평가 세트를 만들어 리뷰어를 매일 검증한다.

## 왜 중요한가?
AI가 코드를 대부분 쓰는 시대에 "사람이 일일이 다 읽어야 한다"는 기존 방식은 더 이상 버틸 수 없다는 걸, AI를 만드는 회사가 직접 데이터로 보여준 사례입니다. 사람은 위험한 변경에만 집중하고 나머지는 AI 검증과 빠른 되돌리기로 관리하는 방식이 새 표준이 될 수 있습니다.

## 심층 분석

### 기술 의미
'사람이 코드를 읽었는가'를 '어떤 검사가 이 위험을 잡기에 적절한가'로 바꾼 것은 리뷰를 품질 보증 프로세스 전체의 한 계층으로 재정의한 것이다(→ 분석). 다수 에이전트 탐색 + 투표 검증 구조는 거짓 양성(노이즈)을 줄이는 앙상블 기법으로, 리뷰 신뢰도의 핵심 병목을 다룬다(→ 분석). 과거 장애 PR로 만든 회귀 평가 세트는 리뷰어 자체를 지속적으로 테스트하는 'eval 주도 개발'의 실제 적용 사례다(→ 분석).

### 업계 영향
Anthropic 스스로 리버트·장애율 기반 서킷 브레이커가 아직 없다고 인정한 점은, 완전 무인 머지로 가는 데 남은 과제가 무엇인지 공개적으로 보여준다. 위험 등급별 승인 정책은 다른 기업이 AI 코딩 도입 시 거버넌스 템플릿으로 참고할 가능성이 크다(→ 분석). Claude Code Review 제품 판매와 맞물린 공개라는 점에서 마케팅 성격도 함께 고려해야 한다(→ 분석).

### 관련 프로젝트
- Claude Code Review (Team·Enterprise 플랜 GA)
- 오픈소스 security review GitHub Action
- CLAUDE.md / REVIEW.md 기반 리뷰 지침

### 관련 뉴스
- [Postgres 19, AI 리뷰어가 찾은 버그로 출시 연기](../records/2026-10-17-postgres-19-delayed-llm-code-review.md) — 같은 날 AI 코드 리뷰가 실제 일정에 영향을 준 사례
- [AI 코딩 에이전트: 코드는 늘고 소프트웨어는 아니다](../records/2026-10-13-ai-coding-agents-more-code-not-more-software.md) — 코드량 폭증의 맥락
- [GPT-6 Astra, OpenRouter 코드 리뷰](../records/2026-09-05-gpt-6-astra-openrouter-code-review.md) — 경쟁 코드 리뷰 흐름

## 원문 발췌
> "From June to September, merged pull requests to Claude Code's codebase more than doubled while the share that had to be reverted fell by more than 40 percent."
> "In Anthropic's monorepo, changes landing per day went from about 2,500 in May to more than 30,000 in September this year."
> "Several agents look for bugs at the same time. Then a separate group votes on each finding, and it only gets posted if enough of them agree it's real."
> "An agent's approval never counts as a person's, either."

## 수집 노트
- **선정 이유**: Anthropic 공식 1차 자료에 구체 수치가 있고 HN 176pt·168댓글로 반응이 커서 오늘 후보 중 산정 점수 최고.
- **제외 후보**: Anthropic "Claude로 효율적 양자 회로 설계" 연구 — 에이전트 실무 영향이 상대적으로 적음. Mercor "미국 근로시간 90%가 AI 벤치마크 밖" — 리서치 흥미롭지만 수집 상한 초과로 보류.
