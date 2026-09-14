# 에이전트 하네스 vs 프레임워크 vs MCP — 루프·상태·도구·권한·복구의 소유자를 가르는 3계층 지도

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/09/14/agent-harness-vs-agent-framework-vs-mcp-which-layer-owns-the-loop-state-tools-permissions-and-recovery/
- **소스**: MarkTechPost (Michal Sutter)
- **발행일**: 2026-09-14
- **수집일**: 2026-09-15
- **수집자**: 레노버
- **카테고리**: framework
- **태그**: [agent-harness, agent-framework, MCP, 아키텍처, 권한모델]
- **소스 권위**: major-media
- **교차 확인**: 2
- **중요도**: ⭐⭐
  - 산정 근거: 중요도 산정: 기본 1 + major-media 1 + 교차 확인 0 + 반응 규모 0
- **신선도**: fresh

## 핵심 요약
> MarkTechPost가 하네스(harness)·프레임워크·MCP를 "실행 루프, 상태, 도구 전송, 권한, 복구를 누가 소유하는가"라는 하나의 질문으로 구분하는 3계층 분석을 발표했다. 원문은 OpenAI Codex 플랫폼 문서, Anthropic Claude Agent SDK 문서, MCP 2026-07-28 사양을 인용해 각 계층의 소유권 매트릭스를 제시한다.

## 번역 (한국어)

에이전트 아키텍처 논의에서 하네스, 프레임워크, MCP가 같은 것처럼 쓰이지만 실제로는 서로 다른 계층에 있고 다른 책임을 진다고 MarkTechPost가 정리했다. 하네스는 모델을 감싸 실제 동작하는 에이전트로 만드는 실행 시스템이다. OpenAI의 Codex 플랫폼 문서와 Anthropic의 Claude Agent SDK 문서가 이를 정의하며, 하네스는 대화 상태 관리, 실행 스트리밍, 도구 사용, 샌드박스·승인 정책 강제를 한 단위로 제공한다.

프레임워크는 에이전트를 조립하기 위한 라이브러리다. LangGraph, OpenAI Agents SDK, 2026년 4월 1.0 GA에 도달한 Microsoft Agent Framework 등이 여기 속하며, 모델 클라이언트·도구 추상화·그래프 오케스트레이션·메모리 인터페이스를 부품으로 제공하고 정책 결정은 사용자의 몫으로 남긴다. MCP는 런타임이 아니라 와이어 프로토콜로, 호스트가 서버가 노출하는 도구·리소스·프롬프트를 발견하고 호출하는 방식을 JSON-RPC 2.0으로 표준화한다. 2025년 12월부터 Linux Foundation 산하 Agentic AI Foundation이 goose, AGENTS.md, A2A와 함께 MCP를 거버넌스하고 있다.

소유권 매트릭스에 따르면 실행 루프는 하네스가 "제품 수준의 고정 루프"로, 프레임워크는 "구성 가능한 골격"으로 소유하며 MCP는 루프가 없다. 에이전트 상태·메모리는 하네스가 소유(세션 재개, 포크, 파일 체크포인팅)하고 프레임워크는 체크포인터·스레드 ID를 노출만 한다. 권한·승인은 하네스가 권한 모드·훅·샌드박스로 소유하고, MCP는 호스트에 위임해 강제할 수 없다. 복구는 하네스가 세션 재개·체크포인트 되감기를, 프레임워크가 내구성 실행·재시도를 노출하며, MCP는 장기 실행 호출용 Tasks 확장으로 부분적으로만 대응한다.

흥미로운 변화는 MCP 사양 쪽에 있다. 2026-07-28 사양부터 `initialize`/`initialized` 교환과 `Mcp-Session-Id` 헤더가 폐기되어 프로토콜 수준의 세션 개념이 사라졌고, 모든 요청이 `_meta`에 프로토콜 버전과 클라이언트 기능을 담아 단독으로 전송된다. 즉 MCP는 에이전트와 도구 사이의 "계약"만 소유하며, 언제 `tools/call`을 부를지는 호스트의 루프가 결정한다.

## 왜 중요한가?
AI 에이전트를 만들거나 도입하는 조직에게 "어느 계층에서 무엇을 결정하는가"는 보안·감사·장애 복구 책임 소재를 가르는 실무 질문입니다. 이 글은 감이 아닌 각 벤더의 공식 문서를 인용해 계층을 구분해 주는 참조 지도 역할을 합니다. 특히 권한과 복구가 하네스 소유임을 명확히 한 것은 에이전트 제품의 신뢰성 설계에 직접적인 가이드가 됩니다.

## 심층 분석

### 기술 의미
이 글의 핵심 기여는 모호하게 뒤섞인 용어를 "소유권(owns) vs 노출(exposes)" 축으로 정밀하게 분리한 점이다. 하네스는 Claude Agent SDK의 5단계 루프(프롬프트 수신 → 평가·응답 → 도구 실행 → 반복 → 결과 반환)처럼 제품 단위의 고정 루프를 강제하는 반면, 프레임워크는 `max_turns` 초과 시 `MaxTurnsExceeded`를 던지는 OpenAI Agents SDK나 그래프로 컨트롤 플로우를 정의하는 LangGraph처럼 골격만 준다. MCP의 무상태화(stateless 전환)는 프로토콜이 세션·상태 책임을 완전히 호스트 측으로 떠넘겼음을 의미하며, 이는 MCP 클라이언트를 만드는 모든 팀이 상태 관리를 자체 하네스/프레임워크에서 풀어야 한다는 뜻이다 (→ 분석).

### 업계 영향
에이전트 스택의 책임 경계가 문서로 정리되면 기업 도입 시 보안 심사와 감사 요구사항을 계층별로 매핑할 수 있게 된다 (→ 분석). 하네스가 권한·샌드박스·복구를 소유한다는 정의는 OpenAI·Anthropic·Microsoft가 하네스 레이어를 제품 차별화의 핵심으로 밀고 있음을 보여주며, 순수 프레임워크 진영은 정책 레이어 부재를 보완하는 방향으로 진화할 압력을 받는다. Linux Foundation의 Agentic AI Foundation 거버넌스 하에 MCP·A2A·AGENTS.md가 한 텐트에 모인 것은 표준 경쟁이 프로토콜 계층에서 수렴하고 있음을 시사한다.

### 관련 프로젝트
- [MCP 사양 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28) — 세션 개념 폐기된 최신 와이어 프로토콜
- [Claude Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview) — 하네스 루프·도구·컨텍스트 관리를 노출하는 SDK
- [OpenAI Codex app-server](https://developers.openai.com/codex/app-server) — 하네스 루프를 문서화된 클라이언트 프로토콜로 노출
- [Microsoft Agent Framework 1.0](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/) — 2026년 4월 GA 프레임워크

### 관련 뉴스
- [AWS, 오픈소스 'Pizza Bot' 공개 — 백그라운드 AI 에이전트를 위한 이메일형 수신함](../records/2026-09-14-aws-pizza-bot-open-source-agent-inbox.md) — 하네스 레이어 위에서 동작하는 에이전트 제품 사례
- [프린스턴 '섀도우 평가' 연구 — AI 에이전트, 개방형 연구 수행 불능 확인](../records/2026-09-14-shadow-evaluation-agents-fail-open-ended-research.md) — 하네스·프레임워크 역량의 실측 한계를 다룬 연구

## 원문 발췌
> "Harness, framework, and MCP get used interchangeably in agent architecture discussions. They are not the same thing. They sit at different layers, own different responsibilities, and increasingly overlap at the edges."
>
> "The harness manages conversation state, streams execution, and uses tools. It also enforces sandbox and approval policies and carries work across turns."
>
> "MCP owns no loop and no agent state. It owns the contract between the agent and its tools."

## 수집 노트
- **선정 이유**: 하네스·프레임워크·MCP의 책임 경계를 벤더 공식 문서 인용으로 정리한 유일한 체계적 분석이라, 에이전트 스택을 다루는 팀의 참조 지도로 아카이브 가치가 높다.
- **제외 후보**: "Anthropic 3단계 'Pace the Frontier' 계획 지원 확산" — 핵심 선언은 2026-09-13-anthropic-pace-the-frontier.md로 이미 수집 완료된 후속 반응 보도. "OpenAI, Glass Imaging 3억 달러 인수" — 단일 소스(report says) 보도로 교차 확인 불충분.
