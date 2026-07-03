# AutoTool: 대규모 언어 모델 에이전트를 위한 효율적인 도구 선택

**원문 URL**: [https://arxiv.org/html/2511.14650v1](https://arxiv.org/html/2511.14650v1)  
**수집일자**: 2026-07-04  
**수집자**: 레노버  
**카테고리**: research  
**중요도**: ⭐⭐⭐⭐

---

## 요약 (한국어)

대규모 언어 모델(LLM) 에이전트는 복잡한 작업 자동화를 위해 LLM의 추론 및 의사결정 능력을 활용하는 강력한 도구로 부상하고 있습니다. 그러나 현재 에이전트 프레임워크의 주요 병목 현상은 도구 선택에 대한 높은 추론 비용에 있습니다. 특히 ReAct와 같은 접근 방식에서 LLM을 반복적으로 호출하여 각 단계에서 사용할 도구를 결정하는 경우 비용이 크게 증가합니다.

이 연구에서는 AutoTool이라는 새로운 그래프 기반 프레임워크를 제안합니다. AutoTool은 '도구 사용 관성(tool usage inertia)'이라는 핵심 경험적 관찰을 활용하여 반복적인 LLM 추론을 우회합니다. 도구 사용 관성이란 도구 호출이 예측 가능한 순차적 패턴을 따르는 경향을 의미합니다. AutoTool은 과거 에이전트 궤적에서 방향성 그래프를 구축하며, 노드는 도구를 나타내고 엣지는 전환 확률을 포착하여 도구 선택의 관성을 모델링합니다.

실험 결과 AutoTool은 최대 30%의 추론 비용 절감을 달성하면서도 경쟁력 있는 작업 완료율을 유지했습니다. 이는 추론 중심 프레임워크에 대한 실용적이고 확장 가능한 향상을 제공합니다. 연구는 LLM 에이전트 설계에 통계적 구조를 통합하여 성능을 희생하지 않고 더 큰 효율성을 달성할 수 있음을 보여줍니다.

---

## 원문 (영문)

###### Abstract

Large Language Model (LLM) agents have emerged as powerful tools for automating complex tasks by leveraging the reasoning and decision-making abilities of LLMs. However, a major bottleneck in current agent frameworks lies in the high inference cost of tool selection, especially in approaches like ReAct that repeatedly invoke the LLM to determine which tool to use at each step. In this work, we propose AutoTool, a novel graph-based framework that bypasses repeated LLM inference by exploiting a key empirical observation: tool usage inertia—the tendency of tool invocations to follow predictable sequential patterns. AutoTool constructs a directed graph from historical agent trajectories, where nodes represent tools and edges capture transition probabilities, effectively modeling the inertia in tool selection. It further integrates parameter-level information to refine tool input generation. By traversing this structured representation, AutoTool efficiently selects tools and their parameters with minimal reliance on LLM inference. Extensive experiments across diverse agent tasks demonstrate that AutoTool reduces inference costs by up to 30% while maintaining competitive task completion rates, offering a practical and scalable enhancement for inference-heavy frameworks.

Code — https://github.com/jiajingyyyyyy/AutoTool

In this work, we empirically identify and analyze the phenomenon of tool usage inertia in LLM-based agents, both in tool selection and parameter filling. We design a method to construct an inertia-aware tool graph that captures sequential patterns and data flow in agent behavior. We develop a graph-based selection algorithm that efficiently determines the next tool and its parameters with minimal LLM intervention. We conduct extensive experiments showing that AutoTool achieves significant reductions in LLM inference cost while preserving task performance.

LLM agents have significant potential in solving complex problems, primarily through effective task planning, reasoning, and interaction with external tools. The seminal work ReAct introduces the core paradigm of driving agent decisions through interleaved "Thought-Act-Observe" cycles, which has become a cornerstone for numerous open-source frameworks, including Langchain and MetaGPT.

However, a shared limitation across these powerful frameworks is that the fundamental decision of which tool to use at each step still predominantly relies on a costly LLM inference. This reliance creates a significant computational bottleneck, which is the primary issue our work aims to address.

---

## 심층 분석

### 기술 의미
- '도구 사용 관성'이라는 새로운 개념을 도구 선택 최적화에 적용한 혁신적 접근
- 그래프 기반 접근 방식으로 전통적인 LLM 중심 도구 선택의 효율성 문제 해결
- 파라미터 수준 정보 통합을 통한 정교한 도구 입력 생성 구현
- 역사적 데이터 기반의 통계적 패턴 활용으로 실시간 추론 비용 절감

### 업계 영향
- LLM 에이전트 운영 비용 절감에 실질적인 기여
- 기존 ReAct 기반 프레임워크와의 호환성 유지하며 성능 향상
- 오픈소스 기반으로 산업계 채용 용이성 제공
- 연구 결과와 코드 공개를 통해 학술-산업계 연계 강화

### 전망
- 도구 선택 최적화 분야에서 새로운 연구 방향 제시
- 다양한 에이전트 작업 유형으로의 적용 가능성 확대
- 기존 프레임워크와의 통합을 통한 시장 점유율 증가 예상
- 추론 효율성 향상은 전체 에이전트 시스템의 실용성을 크게 향상시킬 것

---

## 참고 자료
- [AutoTool GitHub 저장소](https://github.com/jiajingyyyyyy/AutoTool)
- [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2303.11366)
- [LangChain 프레임워크](https://github.com/langchain-ai/langchain)
- [MetaGPT 프레임워크](https://github.com/geekan/MetaGPT)