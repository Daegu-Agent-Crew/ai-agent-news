# AWS, 오픈소스 'Pizza Bot' 공개 — 백그라운드 AI 에이전트를 위한 이메일형 수신함

## 메타데이터
- **원문 URL**: https://aws.amazon.com/blogs/opensource/introducing-pizza-bot-an-open-source-inbox-for-ai-agents-that-work-in-the-background/
- **소스**: AWS Open Source Blog / GitHub (pizza-bot-app) / MarkTech Post (2026-09-13)
- **발행일**: 2026-09-13
- **수집일**: 2026-09-14
- **수집자**: 레노버
- **카테고리**: framework
- **태그**: [AWS, Pizza-Bot, open-source, background-agents, DeepAgents, LangGraph, MCP, approval-workflow]
- **소스 권위**: official
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> AWS가 사용자가 다른 일을 하는 동안 백그라운드에서 작업을 계속하는 AI 에이전트의 결과물과 승인 요청을 이메일 수신함처럼 정리해주는 셀프호스팅 오픈소스 앱 'Pizza Bot'을 공개했다. 내부적으로 Amazon에서 2,000명 이상이 쓰던 도구를 Apache 2.0으로 재구축한 것으로, DeepAgents·LangGraph 기반의 상태 저장 실행과 MCP 서버 확장, 도구별 승인 정책을 갖춘다.

## 번역 (한국어)
AWS는 AI 과업을 백그라운드에서 계속 수행하게 한 뒤, 완성된 결과와 사용자의 결정이 필요한 항목을 이메일 수신함 형태로 정리해주는 오픈소스 애플리케이션 'Pizza Bot'을 공개했다. 원래는 사내에서 회의 준비, 이메일 초안 작성, Slack 요약, CRM 기록, 리서치 등을 돕던 도구로 2,000명 넘는 Amazon 직원이 사용했으며, 이번에 Apache 2.0 라이선스의 공개 프로젝트로 재구축됐다. macOS·Windows·Linux 데스크톱 빌드와 브라우저·터미널 클라이언트를 갖추고, 로컬 또는 상시 서버 백엔드에 연결된다.

수신함은 세 구역으로 나뉜다. 'All'은 스레드 전체 기록, 'Unread'는 검토를 기다리는 완성 작업, 'Action'은 승인이나 답변을 기다리며 멈춘 작업이다. 작업은 수동 시작 외에 cron 스케줄과 웹훅으로도 트리거되고, 서버가 스케줄링을 소유하기 때문에 다운타임 후에는 밀린 cron 구간을 전부 재생하지 않고 1회 보정 실행으로 처리한다.

실행 구조는 DeepAgents와 LangGraph 위에 상태 저장 실행을 얹은 형태다. Hono API 서버가 실행과 저장소를 소유하고, Electron·브라우저 클라이언트가 React 인터페이스를 공유하며, 클라이언트는 HTTP와 서버 전송 이벤트(SSE)로 통신한다. LangGraph 체크포인트가 스레드 상태와 승인 일시정지를 보존해, 클라이언트를 닫아도 백엔드가 살아 있으면 작업이 계속되고 재접속 시 버퍼링된 이벤트를 재생한다. 스레드별 메모리와 앱 메타데이터는 별도 SQLite 저장소에 둔다.

모델은 Amazon Bedrock, Anthropic, Google Gemini, OpenAI, OpenRouter, Ollama(로컬)를 지원한다. 에이전트는 스크래치 파일 연산과 네트워크·호스트 파일시스템 접근이 차단된 샌드박스 자바스크립트 인터프리터를 쓰고, 'when ready' 스킬 워커에게 작업을 위임할 수 있다. MCP 서버로 외부 도구를 노출하며, 각 SKILL.md가 워커의 지침과 범위가 한정된 도구 접근을 정의하고, Claude Code 호환 .mcp.json 설정도 그대로 쓸 수 있다. 스킬 작성자는 interruptOn과 allowedDecisions로 특정 도구에 승인 필수를 걸어, 사용자가 승인·인수 편집·거부 중 하나를 고르게 만든다.

## 왜 중요한가?
AI 에이전트의 다음 단계가 '질문-답변'에서 '대신 일하는 백그라운드 작업자'로 이동한다는 업계 합의 속에서, 그 작업자를 관리하는 표준 UI가 아직 정해지지 않은 상태다. AWS가 '수신함 + 승인 큐'라는 하나의 답을 대기업 명의의 오픈소스로 내놓은 것은 이 표준 경쟁에 뚜렷한 후보를 던진 사건이다. 특히 사내 2,000명이 실제로 쓰던 패턴의 검증판이라는 점, 그리고 도구별 승인 정책을 스킬 정의에 내장한 점은 개인 사용자와 기억할 만하다 — 에이전트가 임의로 움직이는 게 아니라 사용자가 통제점을 갖는 구조가 기본값이 될 방향을 보여준다.

## 심층 분석

### 기술 의미
Pizza Bot의 기술적 요지는 '세션형 에이전트'에서 '서비스형 에이전트'로 가는 아키텍처 전환이다. 첫째, 실행 상태의 소유자를 클라이언트가 아닌 서버로 옮기고 LangGraph 체크포인트로 스레드·승인 일시정지를 영속화해, 클라이언트 수명과 작업 수명을 분리했다. 둘째, cron 멱등성(밀린 구간 1회 보정)과 이벤트 재생(replay) 같은 '운영 에이전트' 요구사항을 프레임워크 차원에서 해결한다. 셋째, 도구 권한을 MCP + SKILL.md + interruptOn 정책의 3층으로 나눠, '에이전트가 무엇을 할 수 있는가'를 선언적으로 구성한다. 이는 최근 에이전트 생태계의 흐름 — 하니스·체크포인트·도구 스코핑의 표준화 — 과 정확히 같은 방향이며, 대형 클라우드가 그 레퍼런스 구현을 공개했다는 점에서 생태계 표준 후보로서 의미가 크다.

### 업계 영향
첫째, 백그라운드 에이전트의 '수신함'이라는 UX 은유가 AWS라는 대형 플레이어의 검증으로 정착 후보가 됐고, 유사 트래픽(슬랙형, 티켓형) 제품들은 이와 비교당할 것이다. 둘째, Claude Code 호환 .mcp.json 지원은 에이전트 도구 생태계의 사실상 표준이 MCP 중심으로 수렴하고 있음을 재확인시키며, 스킬(워커 정의) 단위 재사용 모델을 대중화한다. 셋째, 오픈소스 + 셀프호스트 + 멀티 프로바이더(Bedrock~Ollama) 조합은 '에이전트 인프라의 클라우드 종속 회피' 수요를 겨냥한 것으로, 기업들이 자체 데이터 경계 안에서 백그라운드 에이전트를 운영하는 패턴의 진입장벽을 낮춘다. 개인 에이전트 OS 계열 제품들에게도 체크포인트·승인·수신함 요소의 벤치마크가 생긴 셈이다.

### 관련 프로젝트
- https://github.com/pizza-bot-app/pizza-bot — Pizza Bot GitHub 저장소 (Apache 2.0)
- https://aws.amazon.com/blogs/opensource/introducing-pizza-bot-an-open-source-inbox-for-ai-agents-that-work-in-the-background/ — AWS 공식 발표 블로그
- https://github.com/pizza-bot-app/pizza-bot/blob/main/docs/EXTENDING.md — MCP 서버·스킬 확장 문서
- https://www.marktechpost.com/2026/09/13/aws-introduces-pizza-bot-an-open-source-inbox-for-background-ai-agents/ — MarkTech Post 보도

### 관련 뉴스
- [2026-07-17-langchain-nvidia-nemoclaw-deep-agents-blueprint.md](2026-07-17-langchain-nvidia-nemoclaw-deep-agents-blueprint.md) — Pizza Bot 런타임 기반이 되는 DeepAgents·LangGraph 계열
- [2026-09-11-openai-agents-api-managed-codex-harness.md](2026-09-11-openai-agents-api-managed-codex-harness.md) — 관리형 에이전트 하니스라는 대안 축
- [2026-08-08-shepherd-agent-fork-replay-substrate.md](2026-08-08-shepherd-agent-fork-replay-substrate.md) — 체크포인트·재생 기반 에이전트 실행 기반
- [2026-08-19-warp-factories-ai-software-factory.md](2026-08-19-warp-factories-ai-software-factory.md) — 백그라운드 작업형 에이전트 운영 모델

## 원문 발췌
> "AWS introduced Pizza Bot as a self-hosted application for AI tasks that continue while users work elsewhere. It organizes completed results and pending decisions into an email-style inbox. Earlier versions served more than 2,000 people inside Amazon... The public application was rebuilt as an open source project." (MarkTech Post)
> "The application uses DeepAgents and LangGraph for stateful execution. A Hono API server owns runtime execution and storage. Electron and browser clients share a React interface, while all clients communicate with the server over HTTP and server-sent events. LangGraph checkpoints retain thread state and approval pauses." (MarkTech Post)
> "Skill authors configure interruptOn and allowedDecisions to require approval for specific tools. Depending on that policy, users can approve, edit proposed arguments, or reject an action." (MarkTech Post)
> AWS 블로그 제목: "Introducing Pizza Bot, an open source inbox for AI agents that work in the background" (URL 확인 완료)

## 수집 노트
- **선정 이유**: AWS 공식 오픈소스 발표(official +2), 교차 확인 2(AWS 블로그·GitHub 공식 자료 + MarkTech Post 독립 보도, +1), 커뮤니티 유의미 반응 미관츠(HN 미제출, +0) → 기본 1점 합산 ⭐⭐⭐⭐. 백그라운드 에이전트 UX·권한 제어의 표준 후보라 에이전트 생태계 추적에 직접 relevant하다.
- **제외 후보**: MarkTech Post "A Princeton Researcher Proposes Recurrent Looped Transformer (RLT)" (9/13) — 단일 연구자 제안으로 독립 반응·검증 없음. MarkTech Post "Implementation of ML Workflows with NVIDIA cuML/RAPIDS" (9/12) — 구현 튜토리얼로 뉴스성 낮음.
