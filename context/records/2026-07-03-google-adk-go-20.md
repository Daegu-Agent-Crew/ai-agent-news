# Google ADK Go 2.0: 그래프 기반 워크플로우 엔진으로 다중 에이전트 애플리케이션 구축

**원문 URL**: https://developers.googleblog.com/announcing-adk-go-20/  
**수집일자**: 2026-07-03  
**수집자**: 레노버  
**카테고리**: framework  
**중요도**: ⭐⭐⭐⭐

---

## 요약 (한국어)

Google이 ADK for Go 2.0을 발표하며, 다중 에이전트 애플리케이션을 위한 혁신적인 그래프 기반 워크플로우 엔진을 선보였습니다. 이 업데이트는 기존의 단순 프롬프트 발송을 넘어 실제 생산 환경에서 요구되는 복잡한 오케스트레이션을 지원하며, 분류, 분기, 전문가 팬아웃, 실패 시 재시도, 완료까지 루프 실행 등 다양한 제어 흐름을 효과적으로 관리합니다. ADK 2.0은 노드와 엣지로 구성된 그래프 구조를 통해 병렬 실행, 상태 지속, 인간 개입, 중단 후 재개 등을 지원하며, Go 언어의 특성을 최대한 활용한 첫 번째 클래스의 구현을 제공합니다. 특히 LLM 에이전트를 라우터로 활용하는 패턴을 통해 에이전트 결정을 신뢰성 있고 관찰 가능하게 만들며, 동적 오케스트레이션을 통한 유연한 실행 제어도 가능합니다. 이러한 발전은 복잡한 상태 관리 워크플로우가 필요한 기업용 애플리케이션에서 상당한 영향력을 가질 것으로 예상됩니다.

---

## 원문 (영문)

JUNE 30, 2026

ADK for Go 2.0: build agent workflows as a graph

Building real-world agent applications is rarely as simple as sending a single prompt. Production agents must classify, branch, fan out, ask a human to approve something, retry on failure, and loop until done. Expressing that complex orchestration as ad-hoc control flow gets brittle fast.

Since its 1.0 release, Agent Development Kit (ADK) for Go has helped Go developers build production agents with a clean, idiomatic API — strong typing, iter.Seq2 event streams, and a runtime that fits naturally into existing Go services. That foundation has been a real success, and it's exactly what made the next step possible.

Today we're excited to share ADK for Go 2.0. The headline is a brand-new, first-class way to compose multi-agent applications: a graph-based workflow engine. Alongside it come human-in-the-loop (HITL) as a built-in primitive, dynamic orchestration written in plain Go, LLM agent modes, and a unified node runtime that brings all of this together — single agents and full graphs now run on the same execution model.

If you've followed Python ADK 2.0, this will feel familiar: it's the same graph-first direction, designed from the ground up to feel like Go.

Why a graph?

Real agent applications are rarely a single prompt. They classify, branch, fan out to specialists, gather results, ask a human to approve something, retry on failure, and loop until done. Expressing that as ad-hoc control flow gets brittle fast.

ADK 2.0 lets you describe the shape of your application as a graph of nodes connected by edges, and hands execution to a scheduler that knows how to run it concurrently, persist its state, pause for a human, and resume later — even across process restarts.

The building blocks

Nodes for everything

A node is any unit of work that implements the Node interface. You rarely write that interface by hand — ADK ships typed node constructors for the common cases:

Function nodes wrap a plain typed Go function. Generics infer the input/output schemas for you.

Emitting function nodes are function nodes that also get an emit callback, so a single function can stream events or pause for a human without dropping down to a dynamic node.

Agent nodes drop any agent.Agent (like an LlmAgent) into the graph.

Tool nodes turn a tool.Tool into a graph step.

Join nodes are fan-in barriers: they wait for all predecessors and hand you a map of their outputs.

Dynamic nodes let you orchestrate in code (more on this below).

Workflow nodes embed an entire sub-workflow as a single node — graphs compose.

Parallel workers run a node concurrently across every item in a list and aggregate the results.

State-bound nodes (NewFunctionNodeFromState) pull selected session-state values straight into a typed Params struct via state:"" tags — no manual state plumbing.

Edges, routing, and the shapes you need

Edges connect nodes, and they can carry routing conditions. A node emits a routing value; matching edges fire. That single idea gives you every control-flow shape you need:

Sequential chains, conditional routers, fan-out/fan-in, nested sub-graphs, and even loops (a completed node can be re-triggered, so cycles are first-class) — all from edges and routes. Standard routes come in StringRoute, IntRoute, BoolRoute, MultiRoute, and a Default that fires when nothing else matches. For deeper configuration, leverage the Route interface.

Let an LLM steer the graph

One of the most useful patterns is using a model as the brain of a router. An LlmAgent classifies the user's message; a trivial function emits the matching route; the graph dispatches to the right handler:

User -> What time is it? Agent -> question answering question...
User -> Hello world! Agent -> exclamation reacting to exclamation...
User -> The sky is blue. Agent -> statement commenting on statement...

The model makes the decision; the graph makes it reliable, observable, and resumable.

Human-in-the-loop, built in

Production agents often need a human to approve, correct, or supply something mid-run. In ADK 2.0, any node can pause the graph and ask a human a question — and the workflow durably waits for the answer:

When the human replies on a later turn, the workflow resumes. You choose how:

Handoff — the answer flows straight to the next node.
Re-entry — the paused node re-runs with the human's response available via ctx.ResumedInput(...).

---

## 심층 분석

### 기술 의미
Google ADK Go 2.0의 발표는 단순한 프레임워크 업데이트를 넘어, 다중 에이전트 시스템 구축의 패러다임 전환을 의미합니다. 핵심 혁신점은 그래프 기반 워크플로우 엔진 도입으로, 이는 에이전트 간 복잡한 상호작용을 명시적이고 예측 가능한 구조로 표현할 수 있게 합니다. 

기존의 절차적 제어 흐름에 비해 그래프 모델은 상태 관리, 병렬 처리, 오류 복구, 인간 개입 등 생산 환경에서 필수적인 다양한 제어 요구사항을 체계적으로 지원합니다. 특히 Go 언어의 강점을 살린 타입 안전성과 강력한 추상화를 통해 개발자가 복잡한 로직을 쉽게 구현할 수 있도록 설계되었습니다. 

동적 오케스트레이션 기능은 런타임에 실행 순서가 결정되는 복잡한 시나리오를 처리할 수 있으며, 이는 기존의 정적 워크플로우로는 어려웠던 유연한 에이전트 상호작용을 가능하게 합니다. 또한 LLM을 라우터로 활용하는 패턴은 에이전트 결정 프로세스를 안정적이고 관찰 가능하게 만들어 시스템 신뢰성을 크게 향상시킵니다.

### 업계 영향
ADK Go 2.0의 등장은 Go 생태계에서의 AI 에이전트 개발에 상당한 가치를 제공할 것입니다. 기존 Go 서비스에 AI 에이전트 기능을 통합하려는 기업들에게는 최적의 솔루션이 될 것이며, 특히 분산 시스템이나 마이크로서비스 아키텍처에서의 다중 에이전트 협업 시나리오에 강점을 보일 것입니다.

Google의 이러한 투자는 Go 언어를 AI/ML 분야에서 더욱 중요한 플랫폼으로 자리매김하게 할 것입니다. 기존 Python 중심이었던 AI 에이전트 개발 영역에서 Go의 성능 안정성과 동시성 처리 능력이 새로운 대안으로 부상할 가능성이 큽니다. 

또한 그래프 기반 워크플로우는 복잡한 비즈니스 프로세스를 자동화하는 기업용 솔루션에 적합하므로, 금융, 제조, 물류 등 프로세스 중심 산업에서 상당한 수요를 창출할 것입니다. 특히 인간-AI 협업이 필수적인 분야에서 HITL 기능은 기업의 디지털 전환 가속화에 중요한 역할을 할 것입니다.

### 전망
ADK Go 2.0의 출시는 Google의 AI 전략에서 Go 언어 차별화의 중요성을 보여줍니다. 향후 Go 기반 AI 에이전트 생태계가 빠르게 성장하며, 다양한 산업 분야로 확산될 것으로 예상됩니다.

특히 주목할 점은 다중 에이전트 시스템의 표준화입니다. Google의 그래프 모델이 업계 표준으로 자리 잡을 경우, 에이전트 간 상호작용 프로토콜과 워크플로우 표준이 통일될 수 있습니다. 이는 기업들의 AI 시스템 상호 운용성 향상과 개발 생산성 증대로 이어질 것입니다.

동시에 인간-AI 협업 모델의 진화가 예상됩니다. ADK의 HITL 기능은 단순한 승인 절차를 넘어, 인간의 창의성과 AI의 자동화를 결합하는 하이브리드 워크플로우로 발전할 것입니다. 이는 AI 에이전트가 단순한 실행 도구에서 인간의 협력 파트너로 진화하는 중요한 단계가 될 것입니다.

기술적 측면에서는 Go의 성능 특성을 활용한 실시간 처리 고성능 에이전트 시스템이 발전할 것이며, 이는 IoT, 자동차, 로보틱스 등 실시간 요구가 높은 분야에서 중요한 역할을 할 것입니다.

---

## 참고 자료
- [Google ADK Go 2.0 공식 블로그 포스트](https://developers.googleblog.com/announcing-adk-go-20/)
- [ADK Go GitHub 저장소](https://github.com/google/adk-go)
- [Google ADK 공문서](https://adk.dev/)