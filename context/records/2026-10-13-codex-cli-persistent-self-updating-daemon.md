# Codex CLI 0.157, 기본값으로 상주·자동 업데이트 데몬 설치 — 사용자 "옵트인으로 바꿔라" 이슈 제기

## 메타데이터
- **원문 URL**: https://github.com/openai/codex/issues/48195
- **소스**: GitHub (openai/codex 이슈 #48195)
- **발행일**: 2026-10-12
- **수집일**: 2026-10-13
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [openai, codex-cli, daemon, auto-update, developer-tools, security]
- **소스 권위**: community
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **중요도 산정**: 기본 1 + community 0 + 교차 확인 1개(0) + HN 397pt(1) = 2
- **신선도**: fresh

## 핵심 요약
> GitHub 이슈 작성자에 따르면 Codex CLI 0.157.0부터 대화형 세션을 여는 것만으로 터미널을 닫아도 남는 백그라운드 데몬이 시작되고, 시간마다 업데이트를 확인해 백엔드를 재시작하는 업데이터가 함께 실행된다. 작성자는 `daemon_auto_start`를 기본 꺼짐(옵트인)으로 바꿔 달라고 요청했다.

## 번역 (한국어)
openai/codex 저장소의 이슈 #48195 작성자는 npm으로 설치한 Codex CLI 0.157.0(Linux, WSL2)에서 대화형 세션을 열면 `codex app-server --managed-daemon` 데몬이 자동으로 시작된다고 보고했다. 이 데몬은 TTY 없이 별도 세션에서 돌며, 모든 Codex 창을 닫은 뒤에도 PID 1에 재부모화돼 `daemon stop`이나 재부팅 전까지 계속 실행된다.

작성자에 따르면 Codex는 약 374MB의 플랫폼 패키지 전체를 `~/.codex/packages/app-server-daemon/releases/<version>/`에 복사해 그 사본으로 데몬을 실행한다. 이 때문에 백엔드 버전이 패키지 관리자로 설치한 CLI 버전과 분리된다. 또한 별도의 업데이터가 시작 5분 후, 이후 매시간 업데이트를 확인해 새 릴리스를 내려받고 백엔드를 재시작하며, 이 과정에서 진행 중인 작업이 끊길 수 있다고 작성자는 지적했다(관련 이슈 #40969).

작성자는 데몬이 처음 시작한 세션의 환경 변수(예: HTTPS_PROXY)를 고정해, 이후 다른 설정으로 연 세션도 첫 세션의 프록시를 거쳐 외부와 통신한다고 보고했다. 또 `daemon stop`을 실행해도 업데이터 프로세스는 남아 수동으로 종료해야 했다고 밝혔다.

작성자는 CLI라면 백엔드가 창과 수명을 같이하고, 설치한 바이너리를 실행하며, 백그라운드에서 스스로 업데이트하지 않는 것이 가장 덜 놀라운 기본값이라고 주장했다. 기본값을 유지한다면 마지막 클라이언트 연결 종료 시 데몬을 끄고, 패키지 관리자로 설치된 경우 자체 복사·업데이트를 하지 말아 달라고 요청했다.

## 왜 중요한가?
AI 코딩 도구가 사용자가 모르는 사이 컴퓨터에 상주하며 스스로 업데이트하는 방식으로 바뀌고 있다는 사용자 문제 제기입니다. 개발자 PC에 깊이 접근하는 에이전트 도구일수록 '무엇이 언제 실행되는지'에 대한 통제권이 신뢰의 핵심이 됩니다.

## 심층 분석

### 기술 의미
CLI·데스크톱 앱·원격 제어가 하나의 공유 백엔드를 쓰도록 구조가 바뀌면서, 세션 단위 프로세스 모델이 상주 서비스 모델로 이동한 것으로 보인다(→ 분석). 첫 세션의 환경 변수를 고정하는 문제는 프록시·자격 증명 격리를 세션별로 기대한 사용자에게 보안상 의도치 않은 동작이 될 수 있다(→ 분석). 이는 이슈 작성자의 보고이며 OpenAI의 공식 답변은 수집 시점에 확인되지 않았다.

### 업계 영향
코딩 에이전트가 IDE·터미널·클라우드를 잇는 상시 실행 플랫폼으로 진화하면서, 자동 업데이트와 사용자 통제 사이의 긴장이 커지고 있다(→ 분석). Arch Linux 패키지 실행 실패(#48050) 등 연관 이슈가 여러 건 링크된 점은 배포판 패키저와의 마찰도 시사한다(→ 분석). HN 397pt 반응은 개발자 커뮤니티가 이 문제를 민감하게 받아들이고 있음을 보여준다.

### 관련 프로젝트
- openai/codex: https://github.com/openai/codex
- 관련 이슈: #40969, #41188, #46468, #48050, #42457, #37537

### 관련 뉴스
- [Codex 에이전트 과금 문제](../records/2026-09-26-codex-agents-rogue-billing.md) — Codex 관련 사용자 통제 이슈
- [OpenAI Agents API 관리형 Codex 하네스](../records/2026-09-11-openai-agents-api-managed-codex-harness.md) — Codex 백엔드 구조 변화

## 원문 발췌
> "Please make daemon_auto_start opt-in (default false) for the CLI, or at least ask once before turning it on."
> "It runs in its own session with no TTY and keeps running after every Codex window is closed (reparented to PID 1) until codex app-server daemon stop or a reboot."
> "Starts a detached updater (codex app-server daemon pid-update-loop) that checks for updates 5 minutes after start and then hourly, downloads new releases and restarts the backend"
> "Bug found while turning it off: codex app-server daemon stop stops the app-server but leaves the pid-update-loop updater running"

## 수집 노트
- **선정 이유**: 단일 커뮤니티 소스지만 HN 397pt로 반응이 크고, 레노버도 사용하는 Codex CLI의 동작 변경이라 실무 관련성이 높아 선정.
- **제외 후보**: Launch HN: Agent37(YC F26) — 스타트업 홍보성 런치 포스트, 독립 소스 없음. Epic Games AI 사용 지시(AV Club) — AI 에이전트 생태계와 거리가 있음.
