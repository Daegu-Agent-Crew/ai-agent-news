# 에이전트 프레임워크 동향 — 2026년 7월

## 메타데이터
- **카테고리**: frameworks
- **관련 뉴스 수**: 22
- **최종 업데이트**: 2026-07-17 (7차 갱신)

## 요약
2026년 6월 현재, 에이전트 프레임워크 생태가 8개 주력 SDK로 정리되었다. Microsoft Agent Framework(MAF)가 BUILD 2026에서 Agent Harness·CodeAct·Foundry Hosted Agents를 발표하며 프로덕션 배포 인프라를 통합했고, Anthropic은 Claude Agent SDK를 별도 월간 크레딧 과금제로 전환했다. Cisco의 FAPO는 파이프라인 단계별 자동 디버깅을, 화웨이는 OS 수준 통합이라는 각기 다른 접근을 보여준다. MCP가 200+ 서버를 확보하며 사실상 표준 도구 프로토콜로 자리 잡았고, ACP가 A2A로 통합되며 Linux Foundation 산하로 이관되었다.

## 주요 프레임워크

### Microsoft Agent Framework (MAF) — BUILD 2026
- **상태**: 1.0 GA (2026-04-02), .NET + Python
- **핵심 업데이트 3종** (BUILD 2026 발표):
  1. **Agent Harness**: 컨텍스트 압축, 파일 기반 세션 메모리, Todo 추적, 계획/실행 모드 분리, human-in-the-loop 승인을 내장. `AsHarnessAgent()` 한 번으로 모든 챗 클라이언트를 완전한 에이전트로 전환
  2. **Foundry Hosted Agents**: 로컬 MAF 에이전트를 컨테이너로 패키징하여 Foundry에 배포. scale-to-zero, 세션 상태 영속성, VM 단위 격리, OpenTelemetry 관측성 기본 제공
  3. **CodeAct**: 모델이 짧은 Python 프로그램을 작성해 `call_tool()`로 여러 도구를 한 번에 호출, Hyperlight 마이크로 VM에서 실행. 모델 턴 수와 토큰 사용량을 획기적으로 절감
- **의미**: AutoGen + Semantic Kernel 통합 완료, 프로덕션 배포에 필요한 모든 인프라를 단일 프레임워크에 제공
- **링크**: <https://github.com/microsoft/agent-framework>

### Claude Agent SDK (Anthropic)
- **상태**: 별도 월간 크레딧 과금제 시행 (2026-06-15부터)
- **과금 구조**: Pro $20 / Max 5x $100 / Max 20x $200 크레딧 (기존 대화 한도와 분리)
- **핵심 설계**: 파일 시스템(Read/Write/Edit), 셸(Bash), 웹 검색을 기본 도구 제공, `query()` 비동기 제너레이터 핵심 프리미티브
- **생명주기 훅**: PreToolUse, PostToolUse, Stop, SessionStart 등 프로덕션 제어
- **서브에이전트**: 작업 위임을 자식 에이전트로 분산, 독립 컨텍스트 윈도우
- **한계**: TypeScript/Python만 지원, Claude 모델에만 종속
- **의미**: 대화형 사용과 에이전트 사용을 분리 과금하는 선례 설정

### Cisco FAPO (Fully Automated Prompt Optimization)
- **상태**: 오픈소스 (Apache 2.0)
- **오케스트레이터**: Claude Code / Codex
- **체인 정의**: LangGraph 상태 그래프
- **핵심**: 6단계 폐루프 (Evaluate → Attribute → Propose → Review → Compare → Iterate)
- **성과**: GEPA 대비 15/18 승, 평균 +14.1pp 향상
- **링크**: <https://github.com/cisco-foundation-ai/fully-automated-prompt-optimization>

### 화웨이 Agent Framework 2.0
- **상태**: HarmonyOS 7 내장 (상용)
- **핵심**: OS 커널 수준 통합, 2,100+ 시스템 기능 제어
- **성능**: 복합 작업 성공률 90%+ 주장
- **의미**: 소프트웨어 에이전트 프레임워크가 아닌 OS 자체가 에이전트 프레임워크로 작동
- **관련 위키**: [산업 동향](industry-trends.md)

### 프레임워크 비교 요약 (2026년 6월)
| 프레임워크 | 강점 | 약점 | 적용 시나리오 |
|------------|------|------|---------------|
| Claude Agent SDK | MCP 최심 통합, 파일/셸 기본 | Claude 종속, TS/Py만 | 코딩, CI 자동화 |
| MAF (Microsoft) | .NET/Py, Harness 내장, Foundry 배포 | Azure 생태계 편향 | 엔터프라이즈, .NET |
| OpenAI Agents SDK | 가벼운 핸드오프 | 단순 체인에 적합 | 빠른 프로토타이핑 |
| Google ADK | 4개 언어(Py/TS/Java/Go) | Google Cloud 의존 | 다국어 엔터프라이즈 |
| LangGraph | 상태 저장 워크플로우 | 학습 곡면 | 복잡한 파이프라인 |
| CrewAI | 빠른 프로토타이핑 (52k 스타) | 대규모 시스템 제한 | MVP, 소규모 팀 |
| Pydantic AI | 타입 안정성 | 생태계 작음 | 타입 중심 개발 |

### 프로토콜 표준화
- **MCP (Model Context Protocol)**: 200+ 서버 구현체, 사실상 표준 도구 프로토콜
- **A2A (Agent-to-Agent)**: ACP가 Linux Foundation 산하에서 A2A로 통합
- **효과**: MCP + A2A 함께 사용 시 40~60% 빠른 워크플로우 개발 속도 (2026 채택 트렌드 분석)

### 실패 분류 체계 (FAPO)
FAPO가 도입한 4가지 실패 유형은 향후 프레임워크 표준으로 자리잡을 가능성이 있다:
1. **Retrieval 실패**: 검색 결과가 비었거나 관련 없음 → 구조적 해결
2. **Cascading 실패**: 초기 단계 빈 출력이 후속 단계로 전파 → 구조적 해결
3. **Format 실패**: 정답이 파싱 불가한 형식에 숨겨져 있음 → 프롬프트 해결 가능
4. **Reasoning 실패**: 충분한 입력에도 잘못된 결론 → 프롬프트 해결 가능

> 💡 **교차 참조**: MAF의 CodeAct는 [도구 생태계](tools-overview.md)의 MCP 표준화와 맞물려 도구 호출 패러다임을 바꾸고 있다. FAPO의 실패 분류 체계는 [평가 벤치마크 동향](research-overview.md)의 다단계 평가 체계(Terminal-Bench, OSWorld)와 같은 맥락이다. Claude Agent SDK 과금 변화는 [산업 동향](industry-trends.md)의 프레임워크 시장 수익화 전략과 연결된다.

## 관련 뉴스
- [Microsoft Agent Framework BUILD 2026](../records/2026-06-24-microsoft-agent-framework-build-2026.md)
- [Claude Agent SDK 구독제 변화 — 2026 프레임워크 총정리](../records/2026-06-24-claude-agent-sdk-credit-2026.md)
- [Cisco AI Introduces FAPO](../records/2026-06-20-cisco-fapo-prompt-optimization.md)
- [Huawei HarmonyOS 7](../records/2026-06-13-huawei-harmonyos-7-ai-agents.md) (Agent Framework 2.0)

## 관련 위키 문서
- [평가 벤치마크](research-overview.md) — FAPO 실패 분류와 벤치마크 다단계 평가 공통점
- [도구 생태계](tools-overview.md) — MCP 기반 도구 호출이 프레임워크에 미치는 영향
- [산업 동향](industry-trends.md) — 화웨이 Agent Framework 2.0, 프레임워크 시장 경쟁
- [모델 동향](models-overview.md) — 프레임워크별 최적 모델 조합

## 2026년 7월 2차 업데이트: 시장 다극화 및 프로덕션 검증 심화
### 시장 확장: 120+ 도구 시대
2026년 상반기 에이전트 프레임워크 시장이 11개 카테고리 120개 이상의 도구로 팽창했다 ([Towards AI 분석](../records/2026-07-05-production-frameworks-comparison.md)). 헬스케어·물류·핀테크 등 7개 기업 배포 경험을 바탕으로 한 프로덕션 검증 결과가 추가되었다.

**프레임워크 선택의 핵심 기준 변화:**
- 프로토타입 속도 → 프로덕션 신뢰성, 실패 모드 대응, 비용 예측성
- 단일 모델 성능 → 오케스트레이션 품질, 도구 통합, 관찰 가능성

### KDnuggets 10대 프레임워크 (2026년 7월)
KDnuggets가 선정한 2026년 필수 10개 프레임워크 ([원문](../records/2026-07-05-10-agentic-ai-frameworks-2026.md)). 기존 순위와 일치하며 다음이 추가 확인됨:
- **LangGraph**: 상태 그래프 모델링, 체크포인트/재개로 장시간 에이전트에 최적
- **CrewAI**: 빠른 역할 기반 프로토타이핑 (52k 스타)
- **OpenAI Agents SDK**: 가벼운 핸드오프
- **Google ADK**: 4개 언어 지원 (Py/TS/Java/Go)
- **PydanticAI**: 타입 안전, FastAPI 스타일 DX

### LangChain 주도 비교 분석
LangChain이 발표한 7개 프레임워크 비교 ([원문](../records/2026-07-05-langchain-ai-agent-frameworks.md))에서 **프로덕션 준비성**을 최우선 기준으로 평가했다:
- 평가 축: 개발자 경험, 프로덕션 신뢰성, 관찰 가능성/디버깅, 생태계 통합, 가격 투명성
- 핵심 통찰: API 타임아웃, 컨텍스트 창 오버플로우, 도구 실패 시 대응 능력이 결정적
- 비교 대상: LangChain, CrewAI, Microsoft Agent Framework, LlamaIndex Workflows, Google ADK, OpenAI Agents SDK, Mastra

### Alibaba SkillWeaver — 프레임워크 관점
SkillWeaver는 도구 최적화뿐 아니라 프레임워크 설계에도 시사점을 준다 ([프레임워크 분석](../records/2026-07-03-alibaba-skillweaver-token-routing.md)):
- **조합형 스킬 라우팅**: 작업 분해 → 도구 매칭 → 실행 그래프 생성
- **그래프 기반 오케스트레이션**: LangGraph·ADK 2.0과 동일한 방향성
- **MCP 통합**: 표준 프로토콜 기반의 선택적 도구 로딩

> 💡 **교차 참조**: SkillWeaver의 토큰 절감 성과는 [도구 생태계](tools-overview.md)에서 상세히 다룬다. AutoTool의 그래프 기반 도구 선택 연구([연구 동향](research-overview.md))와도 같은 맥락이다.

## 2026년 7월 3차 업데이트: Google ADK 2.0 — 결정론적 워크플로우의 완성

Google이 2026년 7월 1일 **ADK 2.0**을 발표하며, 프로토타입에서 프로덕션으로의 전환을 위한 새로운 패러다임을 제시했다 ([원문](../records/2026-07-08-google-adk-20.md)).

### 핵심 변화: 결정론적 + 자율 에이전트 하이브리드
ADK 2.0의 혁신은 **워크플로우 런타임**을 도입하여 실행 라우팅을 언어 처리에서 분리한 것이다:
- **결정론적 단계**: 도구 호출, HITL(human-in-the-loop), 데이터베이스 쿼리 — 전통적 코드로 처리
- **개방형 단계**: LLM 호출, 전문 에이전트 호출 — 인지적 추론이 필요한 영역에만 사용
- **그래프 기반 구조**: 노드-엣지 모델로 비즈니스 프로세스를 시각적 모델링, 각 노드가 특정 작업 수행

### 기존 접근법의 한계 극복
기존 LLM 루프 기반 에이전트는 라우팅·스케줄링·에러 처리까지 LLM에 위임하여 비효율적이고 비용이 많이 들었다. ADK 2.0은 전통적 코드가 이미 잘 수행하는 영역은 결정론적 코드로, 인지가 필요한 영역만 LLM로 처리하여 **토큰 비용과 지연 시간을 크게 줄인다**.

### 프레임워크 비교표 업데이트 (ADK 2.0 반영)
| 프레임워크 | 강점 | 약점 | 적용 시나리오 |
|------------|------|------|---------------|
| LangGraph 1.0 | 상태 그래프, 체크포인트/재개, 타임트래블 | 학습 곡면 | 복잡한 파이프라인, 프로덕션 |
| **Google ADK 2.0** | **결정론적+자율 하이브리드, 그래프 런타임, Py/Go** | **Google Cloud 의존** | **엔터프라이즈 워크플로우, 금융/의료** |
| Claude Agent SDK | MCP 최심 통합, 파일/셸 기본 | Claude 종속, TS/Py만 | 코딩, CI 자동화 |
| MAF (Microsoft) | .NET/Py, Harness 내장, Foundry 배포 | Azure 생태계 편향 | 엔터프라이즈, .NET |
| CrewAI 1.14 | 빠른 역할 기반 프로토타이핑 (52k 스타) | 대규모 시스템 제한 | MVP, 소규모 팀 |
| Pydantic AI V2 | 타입 안정성, FastAPI 스타일 DX | 생태계 작음 | 타입 중심 개발 |

### 순위 영향
ADK 2.0으로 Google ADK의 위상이 크게 상승했다. Alice Labs 순위(7/6)에서는 Google ADK가 5위였으나 ([원문](../records/2026-07-06-alice-frameworks-ranking.md)), ADK 2.0의 결정론적 워크플로우 혁신으로 LangGraph(1위)와의 격차가 크게 좁혀졌다. AlphaCorp 가이드(7/6)도 LangGraph를 1위로 평가하면서 ADK의 생산 환경 적합성을 강조했다 ([원문](../records/2026-07-06-alphacorp-frameworks-guide.md)).

> 💡 **교차 참조**: ADK 2.0의 결정론적 워크플로우는 Berkeley 연구진의 [데이터 시스템 재설계 제안](research-overview.md)과 맞물려, 에이전트 인프라 전반의 재구조화를 시사한다. 또한 [EmulatRx](tools-overview.md)의 감독자-설계자-정보학자-의사-통계학자 구조는 ADK 2.0의 전문 에이전트 호출 모델과 같은 맥락이다.

## 2026년 7월 4차 업데이트: Omnigent — 메타-하네스로 거버넌스 간극 해결

**출처**: [Help Net Security — Omnigent](../records/2026-07-09-omnigent-open-source-ai-agent.md) ⭐⭐⭐⭐

### 등장 배경: 멀티 에이전트 사용의 거버넌스 간극
개발팀이 Claude Code, Codex, Cursor 등 여러 코딩 에이전트를 동시 사용하면서, 각 도구마다 고유한 CLI·자격증명·셸 실행 방식이 달라 **거버넌스 간극**(어디서 어떤 액션이 일어나는지, 비용은 얼마나 드는지 추적 불가)이 발생했다.

### Omnigent 핵심 설계
- **메타-하네스**: Claude Code, Codex, Cursor, OpenCode, Hermes, Pi 등을 단일 인터페이스로 통합. YAML 설정 한 줄로 에이전트 교체/조합 가능
- **정책 중심 보안**: 셸 명령어·파일 편집·토큰 소비를 허용/차단/승인 보류로 제어. 프롬프트 내 규칙 회피(drift) 방지
- **OS 샌드박스**: Bubblewrap(Linux)/Seatbelt(macOS)으로 파일 시스템·네트워크 접근 제한. 크레덴셜을 에이전트로부터 숨기고 중개 접근 제공
- **세션 연속성**: 터미널→브라우저→폰까지 동기화, 메시지·서브에이전트·파일 상태 유지

### 프레임워크 생태계에서의 의미
Omnigent는 기존 프레임워크와 **직교하는 계층**이다. LangGraph·ADK 2.0이 워크플로우 오케스트레이션을 다룬다면, Omnigent는 **다양한 에이전트 도구 자체를 오케스트레이션**하는 상위 계층이다. 이는 120+ 도구 시대에 거버넌스·보안·비용 추적이 핵심 과제로 부상함을 시사한다.

> 💡 **교차 참조**: Omnigent의 정책 엔진은 [도구 생태계](tools-overview.md)의 MCP 표준화와 보완적이다. MCP가 도구 호출 표준을 제공한다면, Omnigent는 도구 사용에 대한 거버넌스를 제공한다. ADK 2.0([연구 동향](research-overview.md))의 결정론적 HITL과도 같은 맥락이다.

## 2026년 7월 6차 업데이트: Google Gemini Enterprise Agent Platform — 기업용 에이전트 플랫폼 전쟁 개막

**출처**: [Google DeepMind — Gemini Enterprise Agent Platform](../records/2026-07-15-google-gemini-enterprise-platform.md) ⭐⭐⭐⭐

### 핵심 설계
Google이 **Gemini Enterprise Agent Platform**을 출시하며 대규모 기업용 에이전트 시장에 본격 진입했다. 기업이 자체 AI 에이전트를 구축·관리하는 전체 솔루션을 제공하며, 기존 Google Cloud와의 깊은 통합이 핵심 경쟁력이다.

**핵심 기술 3축:**
1. **Enterprise Memory System**: 기업의 DB·문서 시스템·업무 애플리케이션을 실시간 연동 → AI 에이전트가 완전한 비즈니스 맥락 이해
2. **Multi-Agent Orchestration**: 여러 AI 에이전트가 협업하여 복잡한 업무 처리 — ADK 2.0의 그래프 런타임 기반
3. **Dynamic Learning Loop**: 실제 비즈니스 피드백을 통해 AI 에이전트가 지속적으로 학습·개선

**보안**: Zero-Trust Architecture 채택 — 모든 인터랙션을 철저히 검증·감시. 금융·의료·제조 등 규제 업종 도입 지원.

### 엔터프라이즈 플랫폼 경쟁 지형 변화
Gemini Enterprise Agent Platform의 출시로 관리형 엔터프라이즈 플랫폼 경쟁이 격화되었다:

| 플랫폼 | 강점 | 상태 |
|--------|------|------||
| **Google Gemini Enterprise** | Enterprise Memory, Zero-Trust, Cloud 통합 | 신규 진입 |
| **AWS Bedrock AgentCore** | 모델·프레임워크 무관, Managed KB | 상용 |
| **Microsoft Copilot Studio + MAF** | .NET 통합, Foundry 배포, Harness | GA |
| **OpenAI Agent Platform** | GPT-5.6 네이티브, ChatGPT Work | 상용 |
| **Salesforce Agentforce 360** | CRM 통합 | GA |

Google의 진입은 가격·기능 경쟁을 촉발하며 기업 AI 에이전트 도입을 가속할 것이다. 특히 기업용 에이전트 전문 개발자 수요 급증이 예상된다.

> 💡 **교차 참조**: Gemini Enterprise의 Multi-Agent Orchestration은 [Google ADK 2.0](#google-adk-20--결정론적-워크플로우의-완성)의 그래프 런타임 기술을 기반으로 한다. Zero-Trust Architecture는 [Omnigent](#2026년-7월-4차-업데이트-omnigent--메타-하네스로-거버넌스-간극-해결)의 정책 중심 보안과 같은 방향성. 기업용 에이전트 시장 경쟁은 [산업 동향](industry-trends.md)의 클라우드 플랫폼 전쟁과 직결된다. ChatGPT Work([도구 생태계](tools-overview.md))와 GPT-5.6×M365 Copilot([모델 동향](models-overview.md))이 각각 소비자·엔터프라이즈 시장을 겨냥하는 가운데, Google이 플랫폼 레벨에서 직접 대응한 셈이다.

## 2026년 7월 업데이트: 오케스트레이션 패러다임 정립 및 순위 합의

### 오케스트레이션 3대 패러다임 (JetBrains 분석)
JetBrains는 2026년 에이전트 오케스트레이션을 3가지 패러다임으로 체계화했다 ([원문](../records/2026-07-04-jetbrains-agentic-frameworks.md)):

| 패러다임 | 특징 | 적용 사례 |
|----------|------|----------|
| **그래프 기반** | 방향성 그래프, 최대 제어력, 체크포인트/디버깅 우수 | 복잡한 상태 관리, 금융/의료 |
| **역할 기반** | "플래너/리서처/빌더" 역할 중심, 빠른 프로토타이핑 | 다중 에이전트 프로토타입 |
| **체인 기반** | 동적 체인/루프, 최대 유연성 | 크리에이티브 작업 |

에이전트 작동 원리는 **PRAR 사이클**(Perceive → Reason → Act → Reflect)로 정식화되었다.

### 프레임워크 순위 합의 (Alice Labs + AlphaCorp)
Alice Labs(18개 프로덕션 배포 기반)와 AlphaCorp(개발자 가이드) 모두 **LangGraph를 종합 1위**로 평가했다. ([Alice Labs 원문](../records/2026-07-03-ai-agent-frameworks-2026.md) / [AlphaCorp 원문](../records/2026-07-04-alphacorp-ai-agent-frameworks.md))

**2026년 7월 종합 순위:**
1. **LangGraph** ⭐⭐⭐⭐⭐ — 복잡한 상태 관리 워크플로우 최강. 체크포인트/재개/타임트래블 디버깅
2. **Claude Agent SDK** — Anthropic 네이티브, MCP 통합, Claude Code와 동일 아키텍처
3. **CrewAI** — 역할 기반 다중 에이전트 프로토타입 최단 경로
4. **AutoGen / AG2** — 대화형 오케스트레이션 (MS v0.2 → AG2 포크, v0.4+는 MS 주도)
5. **Google ADK Go 2.0** — Go 특화 그래프 엔진, HITL 내장, 동적 오케스트레이션 ([원문](../records/2026-07-03-google-adk-go-20.md))
6. **Semantic Kernel** — .NET/Microsoft 스택 최적
7. **LlamaIndex Agents** — RAG 기반 검색 에이전트 특화
8. **Pydantic AI** — 타입 안전 Python, FastAPI 스타일 DX

**스택 기반 선택 가이드:**
- M365/Azure → Copilot Studio + Semantic Kernel
- AWS → Bedrock AgentCore + LangGraph
- Google Cloud → Vertex AI Agent Builder + ADK
- Salesforce CRM → Agentforce 360
- 커스텀 코드 → LangGraph 또는 Claude Agent SDK

### Google ADK Go 2.0 상세
Google이 ADK Go 2.0을 발표하며 그래프 기반 워크플로우 엔진을 도입했다:
- **노드-엣지 구조**: 함수 노드, 에이전트 노드, 도구 노드, 조인 노드, 동적 노드, 워크플로우 노드
- **HITL 내장**: 모든 노드가 그래프를 일시정지하고 인간 응답 대기 가능 (Handoff / Re-entry 방식)
- **LLM 라우터 패턴**: LlmAgent가 분류 → 함수가 라우트 발행 → 그래프가 디스패치
- **Go 이점**: 강한 타입, iter.Seq2 이벤트 스트림, 기존 Go 서비스와 자연스러운 통합

### 프레임워크 버전 추적 (Q2 2026)
Alice Labs 배포 보고서 기반 주요 프레임워크 Q2 2026 업데이트 ([원문](../records/2026-07-06-alice-frameworks-ranking.md)):

| 프레임워크 | Q2 2026 업데이트 | 의미 |
|-----------|------------------|------|
| **LangGraph 1.0** | 노드별 타임아웃, DeltaChannel, v2 스트리밍 | 장기 실행 워크플로우 안정성 강화 |
| **Claude Agent SDK** | 계층적 서브에이전트 생성 + 폴백 모델 체인 | 모델 장애 대응, 작업 위임 고도화 |
| **CrewAI 1.14** | 플러그 가능 백엔드 + Chat API | 백엔드 교체 가능, 채팅 인터페이스 내장 |
| **LlamaIndex Workflows 1.0** | 2026-06-22 GA | RAG 기반 에이전트 프로덕션 준비 완료 |
| **Pydantic AI V2** | 2026-06-23, 헤네스 우선 재설계 | 타입 안전 + 에이전트 런타임 통합 |

### TCO 및 거버넌스 (AlphaCorp 분석)
AlphaCorp 개발자 가이드는 **총소유비용(TCO)**을 핵심 선택 기준으로 추가했다 ([원문](../records/2026-07-06-alphacorp-frameworks-guide.md)). Airbyte·Let's Data Science·Firecrawl의 독립 분석과 교차 검증하여 다음을 확인:
- 초기 설정 속도 ≠ 장기적 최적 (LangGraph는 설정이 느리지만 프로덕션 신뢰성 최고)
- 모델 종속성(lock-in) 비용이 TCO에 큰 영향
- MCP/A2A 프로토콜 지원이 모든 주요 프레임워크에서 표준화되어 전환 비용 하락

또한 Alice Labs 보고서에서 **엔터프라이즈 플랫폼 vs 오픈소스 SDK** 이원화가 확인되었다:
- **관리형 엔터프라이즈 플랫폼**: Copilot Studio, Bedrock AgentCore, Vertex AI Agent Builder, OpenAI Agent Platform, Salesforce Agentforce 360, ServiceNow AI Agents, IBM watsonx Orchestrate, UiPath Agentic Automation
- **오픈소스 SDK**: LangGraph, Claude Agent SDK, CrewAI, AutoGen/AG2, Semantic Kernel, LlamaIndex, Pydantic AI
- 모든 엔터프라이즈 플랫폼이 **NIST AI RMF, ISO/IEC 42001, EU AI Act** 거버넌스 프레임워크와 정렬 중

### 7월 핵심 트렌드
1. **그래프 기반 오케스트레이션 부상**: LangGraph + ADK 2.0 모두 그래프 모델 채택
2. **MCP 표준화 가속**: 프레임워크 간 상호운용성 향상 — 7개 주요 프레임워크 모두 네이티브 MCP 지원
3. **HITL 내장화**: 별도 기능에서 핵심 프리미티브로 승격
4. **프로덕션 준비성 중시**: 관찰성, 오류 복구, 결정론적 제어가 필수 — TCO 분석으로 확장
5. **Go 언어 진출**: Python 독점 구도 변화 가능성
6. **거버넌스 정렬**: 엔터프라이즈 플랫폼이 규제 프레임워크(NIST, ISO, EU AI Act)와 표준 정렬
7. **플랫폼 이원화**: 관리형 엔터프라이즈 플랫폼 vs 오픈소스 SDK 구조화

## 2026년 7월 7차 업데이트: LangChain × NVIDIA NemoClaw — 풀스택 에이전트 최적화 패러다임

**출처**: [LangChain — NemoClaw Deep Agents Blueprint](../records/2026-07-17-langchain-nvidia-nemoclaw-deep-agents-blueprint.md) ⭐⭐⭐⭐⭐

### 핵심 설계
LangChain과 NVIDIA가 협력하여 **NemoClaw for LangChain Deep Agents 블루프린트**를 발표했다. 이는 오픈 모델(Nemotron 3 Ultra), 조정된 에이전트 하네스(LangChain Deep Agents), 거버넌스 런타임(NVIDIA OpenShell)을 결합한 **풀스택 에이전트 시스템 구축 경로**를 제시한다.

**3개 레이어 아키텍처:**
1. **개방형 모델 레이어** (Nemotron 3 Ultra): 기업이 실행·커스터마이징·워크로드 최적화가 가능한 모델
2. **조정된 에이전트 하네스 레이어** (LangChain Deep Agents Code): 장기 실행 에이전트를 위한 계획·도구 사용·메모리·작업 실행. Nemotron 3 Ultra에 맞춰 조정된 프로파일 포함
3. **거버런스 런타임 레이어** (NVIDIA OpenShell): 샌드박스 에이전트 실행을 위한 안전한 환경, 도구·시스템·데이터 상호작용에 대한 정책 적용

### 성과: 10배 비용 효율
Nemotron 3 Ultra 조정 랭체인 딥 에이전트는 종합 점수 **0.86**을 달성하며, 비용은 **$4.48**로 경쟁 모델($43.48) 대비 **약 10배 저렴**한 추론 비용으로 동등한 성능을 보여주었다. 이는 에이전트 성능이 모델 선택뿐 아니라 전체 스택(모델·하네스·평가·런타임)을 함께 조정할 때 개선됨을 입증한다.

### 프레임워크 생태계에서의 의미
NemoClaw 블루프린트는 **'레고 블록식' 에이전트 구축**이라는 새로운 패러다임을 제시한다. 기업은 특정 워크로드에 맞춰 필요한 기능만 선택적으로 조합할 수 있다. 이는 Omnigent의 메타-하네스 개념과 함께, 120+ 도구 시대에 **컴포넌트 기반 조립**이 프레임워크 설계의 새로운 기준이 됨을 시사한다. EY, Basenten, PowerWorks 등 주요 파트너사의 참여는 규제 업종에서의 에이전트 도입 신뢰도를 높이고 있다.

> 💡 **교차 참조**: NemoClaw의 3개 레이어 아키텍처는 [모델 동향](models-overview.md)의 NVIDIA Nemotron 3 Embed(검색 품질 혁신)와 함께 NVIDIA의 에이전트 풀스택 전략을 구성한다. OpenShell 거버넌스 런타임은 [Omnigent](#2026년-7월-4차-업데이트-omnigent--메타-하네스로-거버넌스-간극-해결)의 정책 중심 보안과 같은 방향성이며, LangChain Deep Agents는 본 문서의 LangGraph 기반 오케스트레이션 패러다임과 직결된다. [Google ADK 2.0](#google-adk-20--결정론적-워크플로우의-완성)의 결정론적+자율 하이브리드 모델과도 상호 보완적이다.

## 관련 뉴스 (7월 추가)
- [LangChain × NVIDIA NemoClaw Deep Agents 블루프린트](../records/2026-07-17-langchain-nvidia-nemoclaw-deep-agents-blueprint.md) ⭐NEW (7/17)
- [Omnigent 메타-하네스 — 다중 에이전트 거버넌스](../records/2026-07-09-omnigent-open-source-ai-agent.md)
- [Google ADK 2.0 — 결정론적 워크플로우](../records/2026-07-08-google-adk-20.md) ⭐NEW
- [Alice Labs 프레임워크 순위 (18개 배포 기반)](../records/2026-07-06-alice-frameworks-ranking.md) ⭐NEW
- [AlphaCorp 8대 프레임워크 개발자 가이드](../records/2026-07-06-alphacorp-frameworks-guide.md) ⭐NEW
- [JetBrains PyCharm 에이전트 프레임워크 가이드](../records/2026-07-06-jetbrains-agentic-frameworks-2026.md) ⭐NEW
- [KDnuggets 10대 에이전트 프레임워크](../records/2026-07-05-10-agentic-ai-frameworks-2026.md)
- [LangChain 프레임워크 비교](../records/2026-07-05-langchain-ai-agent-frameworks.md)
- [프로덕션 비교 (Towards AI)](../records/2026-07-05-production-frameworks-comparison.md)
- [Alibaba SkillWeaver 프레임워크](../records/2026-07-03-alibaba-skillweaver-token-routing.md)
- [JetBrains 애젠트 프레임워크 가이드](../records/2026-07-04-jetbrains-agentic-frameworks.md)
- [AlphaCorp 프레임워크 8선](../records/2026-07-04-alphacorp-ai-agent-frameworks.md)
- [Alice Labs 프레임워크 순위](../records/2026-07-03-ai-agent-frameworks-2026.md)
- [Google ADK Go 2.0](../records/2026-07-03-google-adk-go-20.md)
- [Google Gemini Enterprise Agent Platform](../records/2026-07-15-google-gemini-enterprise-platform.md) ⭐NEW (7/15)

## 분석 (7월 17일 7차 갱신)
**Google Gemini Enterprise Agent Platform**의 등장으로 엔터프라이즈 에이전트 플랫폼 경쟁이 본격화되었다. Google은 Enterprise Memory System, Multi-Agent Orchestration, Dynamic Learning Loop, Zero-Trust Architecture라는 4대 축으로 기업용 에이전트 시장을 공략한다. 이는 AWS Bedrock AgentCore, Microsoft Copilot Studio+MAF, OpenAI Agent Platform이 이미 확보한 자리에 Google이 직접 경쟁 카드를 던진 것으로, 기업 AI 에이전트 도입이 '선택'이 아닌 '필수'로 전환되는 분기점이 될 것이다. 규제 업종(금융·의료·제조)을 겨냥한 Zero-Trust 설계는 기업용 에이전트 시장의 보안·컴플라이언스 기준을 한 단계 끌어올릴 전망이다.

프레임워크 경쟁이 "어떤 모델을 쓰느냐"에서 "어떤 조합을 쓰느냐"로 전환되었다. MAF가 프로덕션 배포 인프라(Harness + Foundry)를 통합하며 "실험에서 프로덕션까지"의 간극을 메웠고, CodeAct는 도구 호출 효율성의 패러다임 전환을 보여준다. Claude Agent SDK의 별도 과금제는 에이전트 사용을 "대화형 사용"과 구분하여 수익화하려는 Anthropic의 전략으로, 다른 프레임워크에도 선례가 될 수 있다. 프로토콜 표준화(MCP 200+, ACP→A2A 통합)가 벽을 허물고 있으며, 라우팅 레이어를 구축하는 팀이 단일 모델에 베팅하는 팀보다 유리한 위치를 점할 것이다.

7월 들어 LangGraph의 1위 지위가 Alice Labs·AlphaCorp 양쪽에서 재확인되었고, 오케스트레이션 패러다임이 그래프·역할·체인 3축으로 정식화되었다. **Google ADK 2.0**은 결정론적 워크플로우 런타임을 도입하여 '프로토타입 → 프로덕션' 전환의 핵심 과제를 해결하며 LangGraph의 1위 지위를 위협하고 있다. **Omnigent**는 다중 코딩 에이전트 통합 관리라는 새로운 계층(메타-하네스)을 제시하며, 120+ 도구 시대의 거버넌스·보안 문제에 실용적 해법을 제공한다. **LangChain × NVIDIA NemoClaw** 블루프린트는 모델·하네스·런타임 3개 레이어를 통합 최적화하여 10배 비용 효율을 달성하며, 컴포넌트 기반 조립이라는 새로운 프레임워크 설계 기준을 제시한다. Google ADK Go 2.0으로 Go 생태계가 본격 합류하면서 언어 다양성도 확대되고 있다. **새로운 7월 트렌드**: 모델 레벨(GPT-5.6 Ultra, Meta Spark 1.1)과 프레임워크 레벨(Omnigent, NemoClaw) 모두에서 멀티에이전트 내장과 풀스택 최적화가 가속화되고 있다 ([모델 동향](models-overview.md) 참조).
