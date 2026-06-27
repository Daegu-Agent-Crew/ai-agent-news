# MRAgent: 에이전트 메모리 토큰 27배 절감하는 능동적 메모리 재구성 프레임워크

## 메타데이터
- **원문 URL**: https://venturebeat.com/orchestration/new-agentic-memory-framework-uses-118k-tokens-per-query-langmem-burns-through-3-26m
- **소스**: VentureBeat
- **발행일**: 2026-06-26
- **수집일**: 2026-06-27
- **수집자**: 대구루
- **카테고리**: research
- **태그**: [MRAgent, memory-framework, token-optimization, NUS, LangMem, agentic-memory, long-horizon, LLM]
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> 싱가포르 국립대(NUS) 연구진이 개발한 MRAgent는 AI 에이전트의 메모리 검색 방식을 "능동적 재구성"으로 전환하여, LangMem 대비 최대 27배의 토큰 절감과 절반의 실행 시간을 달성한 혁신적 메모리 프레임워크다.

## 번역 (한국어)

장기 추론(long-horizon reasoning)은 AI 에이전트의 핵심 약점을 드러낸다: 컨텍스트 윈도우가 빠르게 가득 차고, 검색 파이프라인은 노이즈를 반환한다. 싱가포르 국립대(National University of Singapore) 연구진은 이 문제를 해결하기 위해 **MRAgent**(Memory Reasoning Architecture for LLM Agents)를 개발했다. 기존의 정적인 "검색 후 추론(retrieve-then-reason)" 방식을 버리고, 축적되는 증거를 바탕으로 에이전트가 메모리를 동적으로 발전시키는 메커니즘을 사용한다.

MRAgent의 핵심 혁신은 인지신경과학에서 영감을 받은 "능동적·연상적 재구성(active and associative reconstruction)" 개념이다. 전통적인 시스템이 벡터 검색이나 그래프 순회로 문서를 한 번에 가져오는 것과 달리, MRAgent는 작은 단서(cue)에서 시작해 단계적으로 증거를 수집한다. 사용자가 "Nate가 세 번째 게임 대회에서 상금으로 무엇을 했나?"라고 물으면, MRAgent는 "Nate", "비디오 게임 대회", "우승" 같은 미세한 단서를 추출하고, 연관 태그(Tag)를 따라가며 관련 없는 경로를 가지치기(pruning)한다.

이를 위해 MRAgent는 **Cue-Tag-Content** 구조의 다층 연상 그래프를 사용한다. LLM이 먼저 단서에서 태그로 이동한 후, 태그의 요약을 평가하여 유망한 경로만 선택한다. 무거운 메모리 콘텐츠에 접근하기 전에 관련성을 판단하므로, 컨텍스트 윈도우가 노이즈로 가득 차는 것을 방지한다.

LoCoMo 및 LongMemEval 산업 벤치마크에서 MRAgent는 Gemini 2.5 Flash와 Claude Sonnet 4.5를 백본으로 사용하여 모든 기준선(A-MEM, MemoryOS, LangMem, Mem0)을 큰 차이로 능가했다. 특히 주목할 만한 것은 비용 효율성이다: LongMemEval 테스트에서 MRAgent는 샘플당 118K 토큰만 사용한 반면, A-MEM은 632K, LangMem은 326만 토큰을 소비했다. 실행 시간도 A-Mem의 1,122초에서 586초로 절반 가까이 단축되었다.

## 왜 중요한가?
AI 에이전트가 오랫동안 대화하거나 복잡한 작업을 수행할수록, "기억"을 관리하는 비용이 기하급수적으로 늘어납니다. MRAgent는 인간의 뇌가 기억을 떠올리는 방식을 본떠, 필요한 기억만 똑똑하게 찾아오는 기술을 제안합니다. 이는 AI 에이전트의 운영 비용을 획기적으로 낮추어 더 많은 기업이 실제 서비스에 AI 에이전트를 도입할 수 있게 만듭니다.

## 심층 분석

### 기술 의미
MRAgent의 "능동적 메모리 재구성" 패러다임은 기존 RAG(Retrieval-Augmented Generation)의 근본적 한계를 지적한다. 전통적 RAG는 검색과 추론이 분리되어 있어, 에이전트가 중간 발견을 바탕으로 새 검색 전략을 세울 수 없다. MRAgent는 LLM의 추론 능력을 검색 과정 자체에 통합하여, 각 단계에서 증거를 평가하고 다음 검색 방향을 결정한다. Cue-Tag-Content 구조는 태그 수준에서 관련성을 평가한 후에만 무거운 콘텐츠에 접근하므로, 토큰 소비를 극적으로 줄인다. 이는 에이전트 메모리 설계에 있어 "얼마나 많이 저장하느냐"가 아니라 "어떻게 똑똑하게 접근하느냐"가 핵심임을 증명한다.

### 업계 영향
에이전트 메모리 최적화는 기업용 AI 도입의 핵심 병목 중 하나다. LangMem이 샘플당 326만 토큰을 소비한다는 데이터는, 메모리 관리 없이 장기 에이전트를 운영하는 것이 얼마나 비싼지를 여실히 보여준다. MRAgent의 27배 토큰 절감은 API 비용 관점에서 직접적인 ROI 개선을 의미한다. A-MEM, MemoryOS, Mem0, LangMem 등 다양한 메모리 프레임워크가 경쟁하는 가운데, MRAgent의 능동적 재구성 접근법은 새로운 설계 철학을 제시했다. 향후 이 개념이 상용 에이전트 플랫폼에 통합될 경우, 장기 대화형 에이전트의 경제성이 크게 개선될 것이다.

### 관련 프로젝트
- [MRAgent 논문 (arXiv)](https://arxiv.org/abs/2606.06036)
- [A-MEM 그래프 기반 에이전트 메모리](https://venturebeat.com/ai/how-the-a-mem-framework-supports-powerful-long-context-memory-so-llms-can-take-on-more-complicated-tasks)
- [Mem0 확장 가능 메모리](https://venturebeat.com/ai/mem0s-scalable-memory-promises-more-reliable-ai-agents-that-remembers-context-across-lengthy-conversations)

### 관련 뉴스
- [Shopify 모델 비의존 AI 스택](../records/2026-06-26-shopify-model-agnostic-ai-stack.md) — 모델 교체와 비용 최적화 전략
- [Xiaomi HarnessX 자가 재작성](../records/2026-06-25-xiaomi-harnessx-self-rewriting.md) — 에이전트 스캐폴딩 자동 최적화
- [Cisco FAPO 프롬프트 최적화](../records/2026-06-20-cisco-fapo-prompt-optimization.md) — 프롬프트 기반 비용 절감

## 원문 발췌
> Researchers at the National University of Singapore developed MRAgent, a framework that abandons the static "retrieve-then-reason" approach. Instead, it uses a mechanism that allows an agent to dynamically develop its memory based on accumulating evidence.
> 
> MRAgent slashed prompt token consumption to just 118k per sample. By comparison, A-Mem consumed 632k tokens, and LangMem burned through 3.26 million tokens per query.
