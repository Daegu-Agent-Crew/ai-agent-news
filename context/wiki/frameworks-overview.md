# 에이전트 프레임워크 동향 — 2026년 7월

## 메타데이터
- **카테고리**: frameworks
- **관련 뉴스 수**: 15
- **최종 업데이트**: 2026-07-05

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

### 7월 핵심 트렌드
1. **그래프 기반 오케스트레이션 부상**: LangGraph + ADK 2.0 모두 그래프 모델 채택
2. **MCP 표준화 가속**: 프레임워크 간 상호운용성 향상
3. **HITL 내장화**: 별도 기능에서 핵심 프리미티브로 승격
4. **프로덕션 준비성 중시**: 관찰성, 오류 복구, 결정론적 제어가 필수
5. **Go 언어 진출**: Python 독점 구도 변화 가능성

## 관련 뉴스 (7월 추가)
- [KDnuggets 10대 에이전트 프레임워크](../records/2026-07-05-10-agentic-ai-frameworks-2026.md)
- [LangChain 프레임워크 비교](../records/2026-07-05-langchain-ai-agent-frameworks.md)
- [프로덕션 비교 (Towards AI)](../records/2026-07-05-production-frameworks-comparison.md)
- [Alibaba SkillWeaver 프레임워크](../records/2026-07-03-alibaba-skillweaver-token-routing.md)
- [JetBrains 애젠트 프레임워크 가이드](../records/2026-07-04-jetbrains-agentic-frameworks.md)
- [AlphaCorp 프레임워크 8선](../records/2026-07-04-alphacorp-ai-agent-frameworks.md)
- [Alice Labs 프레임워크 순위](../records/2026-07-03-ai-agent-frameworks-2026.md)
- [Google ADK Go 2.0](../records/2026-07-03-google-adk-go-20.md)

## 분석
프레임워크 경쟁이 "어떤 모델을 쓰느냐"에서 "어떤 조합을 쓰느냐"로 전환되었다. MAF가 프로덕션 배포 인프라(Harness + Foundry)를 통합하며 "실험에서 프로덕션까지"의 간극을 메웠고, CodeAct는 도구 호출 효율성의 패러다임 전환을 보여준다. Claude Agent SDK의 별도 과금제는 에이전트 사용을 "대화형 사용"과 구분하여 수익화하려는 Anthropic의 전략으로, 다른 프레임워크에도 선례가 될 수 있다. 프로토콜 표준화(MCP 200+, ACP→A2A 통합)가 벽을 허물고 있으며, 라우팅 레이어를 구축하는 팀이 단일 모델에 베팅하는 팀보다 유리한 위치를 점할 것이다.

7월 들어 LangGraph의 1위 지위가 Alice Labs·AlphaCorp 양쪽에서 재확인되었고, 오케스트레이션 패러다임이 그래프·역할·체인 3축으로 정식화되었다. Google ADK Go 2.0으로 Go 생태계가 본격 합류하면서 언어 다양성도 확대되고 있다.
