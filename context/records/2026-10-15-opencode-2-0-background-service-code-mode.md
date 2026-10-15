# OpenCode 2.0 출시 — 상시 백그라운드 서비스, MCP '코드 모드', 백그라운드 서브에이전트

## 메타데이터
- **원문 URL**: https://anoma.ly/notes/opencode-2-0/
- **소스**: Anomaly(OpenCode 개발사) 공식 노트
- **발행일**: 2026-10-14
- **수집일**: 2026-10-15
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [opencode, coding-agent, mcp, code-mode, subagents, plugins, sdk]
- **소스 권위**: official
- **교차 확인**: 1
- **중요도**: ⭐⭐⭐⭐
- **중요도 산정**: 기본 1 + official 2 + 교차 확인 1개(0) + HN 299pt(1) = 4
- **신선도**: fresh

## 핵심 요약
> 오픈소스 코딩 에이전트 OpenCode가 2.0을 내고, 서버를 기기당 단일 백그라운드 프로세스로 상시 실행하도록 바꿨다. 모든 MCP 서버가 기본으로 '코드 모드'에 들어가 에이전트가 도구 호출을 스크립트로 묶어 실행하며, 백그라운드 서브에이전트와 비동기 셸 명령이 추가됐다.

## 번역 (한국어)
Anomaly는 OpenCode 2.0을 "수백만 일일 사용자의 경험을 바탕으로 한 대대적 개편"이라고 소개했다. 가장 큰 변화는 서비스 구조다. OpenCode는 처음부터 클라이언트/서버 모델이었지만 기본으로 활용되지 않았는데, 2.0에서는 서버가 기기에서 단일 백그라운드 프로세스로 자동 실행되고 TUI·웹·데스크톱 앱이 모두 같은 중앙 프로세스와 통신한다. `opencode pair`로 다른 호스트나 앱과 연결할 수도 있다.

API도 처음부터 다시 만들었다. Anomaly는 기존 API가 "나빴다"고 인정하며 새 API가 거의 모든 작업을 지원한다고 밝혔다. OpenCode는 자기 API를 인식해, 새 작업을 시작할 때 현재 세션을 git worktree로 옮기는 등 스스로 호출한다.

'코드 모드'는 @opencode/codemode 패키지의 최소 JavaScript 인터프리터로, MCP 서버나 OpenAPI 엔드포인트를 함수로 바꿔 에이전트가 스크립트 안에서 호출하게 한다. 도구를 하나씩 부르는 대신 한 번의 왕복으로 여러 도구를 조합할 수 있으며, 2.0에서는 모든 MCP 서버가 기본으로 코드 모드에 들어가 "수천 개를 추가해도 컨텍스트 부담이 적다"고 회사는 설명했다.

이 밖에 주 에이전트가 다른 모델의 서브에이전트에게 일을 맡기고 계속 진행하는 백그라운드 서브에이전트, 비동기 셸 명령, 80개 이상의 내부 플러그인으로 재구성된 플러그인 시스템, 핫 리로드, 라이브러리로 쓰는 @opencode/sdk가 추가됐다. 1.0 플러그인은 2.0에서 동작하지 않고 서버 API도 완전히 바뀌는 등 호환성이 깨지는 변경이 있다.

## 왜 중요한가?
코딩 AI가 "창 하나 띄워 대화하는 도구"에서 "컴퓨터에 상주하며 여러 일을 동시에 처리하는 작업자"로 바뀌고 있습니다. 수백만 명이 쓰는 오픈소스 도구가 이 방향으로 전면 개편했다는 점에서, 개발자 작업 방식의 기본값이 달라지고 있음을 보여줍니다.

## 심층 분석

### 기술 의미
상시 서비스 + 자기 API 호출 구조는 에이전트가 자기 실행 환경(세션·worktree·탭)을 스스로 관리하는 방향이다(→ 분석). MCP 도구를 코드로 합성하는 '코드 모드'를 기본값으로 둔 것은 도구 수가 늘수록 커지는 컨텍스트 비용 문제에 대한 하네스 차원의 해법으로 볼 수 있다(→ 분석). 기능 대부분을 내부 플러그인으로 구현한 것은 플러그인 API의 품질을 강제하는 설계 선택이라고 Anomaly는 설명했다.

### 업계 영향
이틀 전 보도된 Codex CLI의 상주형 데몬과 같은 흐름으로, 코딩 에이전트들이 백그라운드 상주형으로 수렴하는 모습이다(→ 분석). 백그라운드 서브에이전트에서 다른 모델을 지정할 수 있어, 모델 혼합 오케스트레이션이 일상 기능이 되고 있다(→ 분석). 호환성이 깨지는 변경은 1.x 플러그인 생태계에 이전 비용을 남긴다(→ 분석).

### 관련 프로젝트
- OpenCode (anomalyco/opencode)
- @opencode/client, @opencode/codemode, @opencode/sdk
- OpenTUI

### 관련 뉴스
- [Codex CLI 상주형 자기 업데이트 데몬](../records/2026-10-13-codex-cli-persistent-self-updating-daemon.md) — 코딩 에이전트 상주화 흐름
- [Liquid LFM2.5-24B-A2B](../records/2026-10-15-liquid-lfm2-5-24b-a2b-on-device-agents.md) — OpenCode 하네스 안에서 RL 학습된 모델

## 원문 발췌
> "In 2.0 this server now automatically runs as a single background process on your machine."
> "All MCP servers in 2.0 are opted into code mode by default. This means you can add a thousand of them with minimal context bloat and your agent will discover and compose them to get things done."
> "First, we've added background subagents. This allows the primary agent to kick off some work to another one while it continues."
> "1.0 plugins will not work in 2.0"

## 수집 노트
- **선정 이유**: 공식 출시 노트 + HN 299pt로 오늘 도구 후보 중 반응이 가장 컸고, 코딩 에이전트 구조 변화를 직접 보여줘 선정.
- **제외 후보**: Jev 1.14.0(HN 185pt) — 실험 기능 공지로 에이전트 산업 관련성 불명확. Neckbeard DevOps 플러그인(HN) — 개인 프로젝트, 반응 규모 작음.
