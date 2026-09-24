# 화이트보드(YC W26), 인간과 에이전트가 함께 설계하는 오픈소스 IDE 공개

## 메타데이터
- **원문 URL**: https://whiteboard.dev.fast/
- **소스**: Whiteboard 공식 사이트 + Hacker News (Show HN, YC W26)
- **발행일**: 2026-09-24
- **수집일**: 2026-09-25
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [ide, agentic-coding, open-source, code-review, ycombinator, cognitive-debt]
- **소스 권위**: community
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐
- **중요도 산정**: 1 + community(0) + 교차 확인 2건(1) + HN 158pt(1) = ⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> YC W26 배치 스타트업 /dev/fast가 인간과 코딩 에이전트가 한 캔버스에서 소프트웨어를 설계하는 오픈소스 데스크톱 앱 'Whiteboard'를 공개했다. 시퀀스 다이어그램·ER 다이어그램 수준에서 diff를 검토하고, 에이전트의 자율적 결정 궤적을 추적 감사할 수 있는 것이 특징이다.

## 번역 (한국어)
화이트보드는 개발자와 AI 에이전트가 공통 작업 공간에서 함께 아키텍처를 설계할 수 있는 오픈소스 데스크톱 앱이다. MIT 라이선스로 배포되며 macOS와 리눅스를 지원하고, Claude Code·Codex 같은 기존 코딩 에이전트에 연결해 에이전트가 앱 내 캔버스에 작업 내용을 그림으로 설명할 수 있는 SDK를 제공한다.

핵심 기능 세 가지가 눈에 띈다. 첫째, CodeOSS 기반으로 만들어져 다이어그램의 특정 노드를 클릭하면 곧바로 해당 코드로 이동할 수 있고, VSCode의 키바인딩과 LSP 지원을 그대로 쓸 수 있다. 둘째, Rust로 작성된 AST 기반 '의미론적 diff 뷰어'를 제공한다. 긴 함수는 의사코드로 요약해 보여주고, 단위 테스트나 대규모 문서 변경은 접어서 숨기는 식이다. 셋째, '결정 로그(Decision Log)'로 에이전트가 자율적으로 내린 결정들을 조회하고 자기 궤적을 화이트보드에 연결할 수 있게 한다.

개발 동기도 공개됐다. 창업자 네 명은 대학 동기로, 에이전틱 코딩이 업계 표준이 되기 직전 테크 리드 자리를 그만두고 창업했다. 에이전트가 만든 PR이 이해 없이 병합되면서 '인지 부채(cognitive debt)'가 쌓여 시스템에 기여하기 어려워진 경험을 풀기 위해 이 도구를 만들었다고 설명한다. Salesforce, Modal 같은 회사에서 이미 아키텍처 수준 변경 검토 도구로 쓰고 있다고 밝혔다.

에이전트가 만든 프로토타입에 화이트보드 세션을 붙여 설계를 반복하거나, 자동 코드 리뷰어를 작은 변경에 돌리고 판단이 필요한 변경만 화이트보드 세션으로 에스컬레이션하는 식의 활용법을 제시한다. 향후에는 세션 저장·멀티플레이어 리뷰를 갖춘 호스티드 웹 버전으로 기업 과금을 계획하고 있으며, 셀프호스팅은 항상 가능하게 하겠다고 밝혔다.

## 왜 중요한가?
AI가 코드를 대량 생산하는 시대의 진짜 병목이 '작성'이 아니라 '이해와 검토'라는 문제의식을 도구로 구체화한 사례다. 에이전트의 결정 궤적을 감사하는 기능은 에이전트 도입이 늘수록 중요해지는 신뢰·책임 문제에 대한 실무적 답이다. 오픈소스로 공개돼 에이전트 협업 워크플로를 직접 실험해볼 수 있다는 점에서 에이전트 개발 커뮤니티에 즉시 쓸모가 있다.

## 심층 분석

### 기술 의미
AST 기반 의미론적 diff는 라인 단위 텍스트 비교가 가진 노이즈 문제를 구조 수준 요약으로 우회하는 접근이다 (→ 분석). 에이전트에게 캔버스 SDK를 제공해 '그림으로 설명하게' 만드는 방향은, 에이전트 산출물의 검토 인터페이스가 코드 리뷰에서 아키텍처 리뷰로 이동하고 있음을 보여준다. 결정 로그가 에이전트 궤적을 세션에 연결하는 구조는 궤적 가시화(trajectory observability)가 별도 제품 계층으로 자리 잡는 흐름의 일환이다.

### 업계 영향
에이전틱 코딩의 확산과 함께 '병합 속도는 빨라졌는데 이해는 뒤처지는' 팀이 늘면서, 검토·감사 레이어가 새로운 툴체인 전장이 되고 있다 (→ 분석). YC 배치 스타트업이 이 영역을 MIT 라이선스로 풀어놓은 것은 GitHub Copilot류 '생성' 도구와 대비되는 '검증' 도구 카테고리의 성장 신호다. Salesforce·Modal 등에서 실사용 중이라는 주장이 사실이라면, 대규모 조직의 에이전트 도입 가이드라인에 리뷰 도구가 포함되는 단계로 넘어가고 있음을 시사한다.

### 관련 프로젝트
- [GitHub: devdotfast/whiteboard](https://github.com/devdotfast/whiteboard) — 공식 저장소 (MIT)
- [diffr](https://github.com/devdotfast/diffr) — Rust AST 기반 diff 라이브러리

### 관련 뉴스
- [2026-09-24-claude-ai-3x-faster-agent-sprint.md](2026-09-24-claude-ai-3x-faster-agent-sprint.md) — 에이전트 코딩 속도 경쟁, 검토 병목은 남는 구조
- [2026-09-22-aws-strands-harness.md](2026-09-22-aws-strands-harness.md) — 에이전트 실행 프레임워크 생태계

## 원문 발췌
> "We're building Whiteboard (https://whiteboard.dev.fast/), an open-source desktop app where humans and agents can architect software together in a common workspace."
> "In Whiteboard, when you click on visualizations like a sequence diagram, an entity relationship diagram, or a quote from the agent's trace, you can jump to the underlying code directly."
> "As more PRs were merged without our understanding, we felt a 'cognitive debt' begin to seep in, until it became difficult for us to even contribute to the system."
> "Folks at companies like Salesforce and Modal are using Whiteboard today as a review tool for architecture or spec-level changes."
> "Points: 158, # Comments: 68" (Hacker News 메타데이터)

## 수집 노트
- **선정 이유**: 에이전트 산출물 검토·감사라는 에이전트 생태계의 공백을 노리는 도구가 YC 배치로 정식 공개됐고, 커뮤니티 반응(HN 158pt)으로 실수요가 확인되는 유일한 툴 후보였기 때문. 중요도 산정: 1+0(community)+1(교차 2건)+1(HN 100pt+) = ⭐⭐⭐.
- **제외 후보**: Koi.rest(가상 잉어연몰) — AI로 만든 개인 프로젝트일 뿐 AI 산업 뉴스가 아니라 제외. Opus 5.5 설명영상 데모 — 단일 제품 홍보성 포스트로 근거가 얇아 제외.
