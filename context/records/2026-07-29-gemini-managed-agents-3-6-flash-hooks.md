# Gemini API Managed Agents: 3.6 Flash, Hooks 및 예산 통제 기능 추가

## 메타데이터
- **원문 URL**: https://blog.google/innovation-and-ai/technology/developers-tools/expanding-managed-agents-gemini-api-3-6-flash-hooks/
- **소스**: Google Blog
- **발행일**: 2026-07-28
- **수집일**: 2026-07-29
- **수집자**: 레노버
- **카테고리**: framework
- **태그**: [gemini, managed-agents, hooks, google, agentic-workflow]
- **중요도**: ⭐⭐⭐⭐⭐ (1~5)
- **신선도**: fresh

## 핵심 요약
> Google가 Gemini API의 Managed Agents에 환경 훅(Hooks), 모델 선택, 예산 통제, 예약 실행 기능을 추가했다. 기본 모델이 Gemini 3.6 Flash로 업그레이드되며, 무료 티어에서도 에이전트 워크플로우를 실험할 수 있게 되었다.

## 번역 (한국어)
Google DeepMind는 Gemini API의 Managed Agents 기능을 대폭 확장했다. 가장 중요한 변화는 **환경 훅(Hooks)**의 도입이다. 개발자는 `.agents/hooks.json` 설정 파일을 통해 에이전트의 모든 툴 호출 전후에 커스텀 스크립트를 실행할 수 있다. 예를 들어 `pre_tool_execution` 훅으로 코드 실행 전 보안 검사를 수행하거나, `post_tool_execution` 훅으로 자동 코드 포매팅을 적용할 수 있다. HTTP 타입 훅도 지원하여 외부 엔드포인트와 통합이 가능하다.

기본 에이전트 모델이 **Gemini 3.6 Flash**로 업그레이드되었다. 기존 코드 변경 없이 자동 적용되며, 필요에 따라 Gemini 3.5 Flash-Lite 등 더 저렴한 모델로 명시적 선택도 가능하다. 모델 선택은 `agent_config.model` 파라미터를 통해 제어한다.

**예산 통제 기능**이 추가되어 `max_total_tokens` 설정으로 토큰 소비 상한을 지정할 수 있다. 상한에 도달하면 실행이 안전하게 일시 정지되고, 이후 새로운 예산으로 이어서 작업을 재개할 수 있다. 또한 **예약 실행(Triggers)** 기능으로 크론 스케줄에 에이전트 작업을 바인딩하여 주기적 자동화가 가능하다. 이번 업데이트로 Managed Agents가 **무료 티어 프로젝트**에서도 사용 가능하게 되어, 결제 설정 없이도 에이전트 개발을 시작할 수 있다.

## 왜 중요한가?
Google이 에이전트 개발을 위한 프로덕션 등급 인프라를 공식적으로 제공하기 시작했다는 점에서 매우 중요하다. 특히 환경 훅은 실제 운영 환경에서 에이전트의 동작을 제어하고 감사할 수 없었던 핵심 결여 사항이었으며, 이제 보안 검사, 품질 검증, 자동 포매팅 등을 에이전트 실행 파이프라인에 직접 통합할 수 있다. 무료 티어 지원으로 진입 장벽이 크게 낮아졌다.

## 심층 분석

### 기술 의미
Gemini Managed Agents의 훅 시스템은 클라우드 샌드박스 내에서 에이전트 동작을 프로그래밍 방식으로 제어하는 패러다임을 도입했다. 정규식 매처로 특정 툴이나 전체 툴을 타겟팅할 수 있고, deny 결정을 모델 컨텍스트에 전달하여 에이전트가 스스로 대안을 찾도록 유도할 수 있다. 이는 에이전트 안전성과 제어 가능성에 있어 중요한 진전이다. 예산 통제와 예약 실행은 에이전트를 실제 프로덕션 워크플로우에 안정적으로 통합하는 데 필수적인 기능이다.

### 업계 영향
Google이 에이전트 플랫폼을 공격적으로 확장하면서 Claude Code, OpenAI Codex 등과의 경쟁이 가속화되고 있다. 훅 시스템은 기업이 에이전트를 도입할 때 가장 우려하는 안전성과 감사 가능성 문제를 직접적으로 해결한다. 무료 티어 지원은 개발자 생태계를 빠르게 확보하기 위한 전략으로, MCP 기반 에이전트 시장에서 Google의 입지를 강화할 것으로 예상된다. OffDeal 같은 실제 기업이 이미 프로덕션에 훅을 활용하고 있다는 점도 주목할 만하다.

### 관련 프로젝트
- [Gemini API Managed Agents 공식 문서](https://ai.google.dev/gemini-api/docs/agents)
- [Environment Hooks 문서](https://ai.google.dev/gemini-api/docs/agent-hooks)
- [이전 Managed Agents 확장 발표](https://blog.google/innovation-and-ai/technology/developers-tools/expanding-managed-agents-gemini-api/)

### 관련 뉴스
- [MCP 2026-07-28 스펙 업데이트](./2026-07-29-mcp-spec-2026-07-28-stateless-protocol.md) — Google Managed Agents와 함께 에이전트 프로토콜 표준화 가속

## 원문 발췌
> "Environment hooks let you run your custom scripts before or after every tool call the agent makes inside its sandbox. Add a .agents/hooks.json into your environment and the runtime executes your handlers on pre_tool_execution or post_tool_execution events."
