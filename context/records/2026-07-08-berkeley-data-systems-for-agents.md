# 데이터 시스템의 미래: 에이전트를 위한, 에이전트의, 에이전트에 의한 데이터 시스템

## 메타데이터
- **원문 URL**: https://bair.berkeley.edu/blog/2026/07/07/intelligence-is-free-now-what/
- **소스**: Berkeley AI Research Blog
- **발행일**: 2026-07-07
- **수집일**: 2026-07-08
- **수집자**: 레노버
- **카테고리**: research
- **태그**: [Berkeley, 데이터 시스템, 에이전트, 가상 무료 지능, 미래 예측]
- **중요도**: ⭐⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> UC Berkeley 연구진이 AI 지능 비용이 거의 무료가 되는 시대의 데이터 시스템이 어떻게 변화해야 하는지에 대한 새로운 프레임워크를 제시하며, 에이전트 지원 데이터 시스템, 에이전트 관리 데이터 시스템, 에이전트에 의한 데이터 시스템 세 가지 핵심 개념을 발표했습니다.

## 번역 (한국어)
UC Berkeley AI Research 연구진은 2026년 7월 7일, AI 지능 비용이 급격히 하락하면서 우리가 곧 거의 무료 지능 시대에 접어들게 될 것이라고 예측하며 이에 따른 데이터 시스템의 미래에 대한 새로운 관점을 제시했습니다. 연구진에 따르면, GPT-4 수준의 기능 비용은 2023년 초에는 약 300만 토큰당 30달러였지만, 현재는 1달러 미만으로 떨어졌으며, 일부 제공업체에서는 0.1달러 이하로 추진하고 있습니다.

이러한 가상 무료 지능 시대에 데이터 시스템은 세 가지 새로운 도전 과제와 기회에 직면하게 됩니다. 첫째는 '에이전트를 위한 데이터 시스템'으로, 에이전트의 특성을 고려해 데이터 시스템을 재설계해야 합니다. 둘째는 '에이전트의 데이터 시스템'으로, 수많은 에이전트를 효율적으로 실행하고 관리하기 위한 새로운 기반 시스템이 필요합니다. 셋째는 '에이전트에 의한 데이터 시스템'으로, 에이전트가 자체적으로 맞춤형 데이터 시스템을 합성할 수 있는 능력입니다.

연구진은 이러한 변화가 에이전트 추측(agentic speculation)이라는 개념으로 나타나며, 데이터베이스 스키마 내성, 열 탐색, 부분적 그리고 전체 쿼리 형성 등 다양한 작업을 수행하는 에이전트들의 대량 데이터 요청 패턴이 될 것이라고 분석했습니다.

## 왜 중요한가?
이 연구는 AI 에이전트 기술 발전의 다음 단계를 위한 청사진을 제시합니다. 단순히 AI 모델의 성능 향상에만 집중하던 기술 패러다임에서 벗어나, 에이전트들이 효율적으로 작동할 수 있는 데이터 인프라 전체를 재구축하는 사고방식의 전환을 알립니다.

## 심층 분석

### 기술 의미
Berkeley 연구진이 제시하는 핵심 기술적 개념은 '에이전트 추측(agentic speculation)'입니다. 이는 단일 사용자 요청에 대해 수천 개의 개별 SQL 쿼리를 생성할 수 있는 에이전트들의 대량이고 다양한 작업 스트림을 의미합니다. 전통적인 쿼리 인터페이스와 달리, 에이전트들은 쿼리의 결과를 받기 전에 다음 쿼리를 예측하여 발생할 수 있는 수십만 가지의 가설 공간을 동시에 탐색합니다.

데이터 시스템은 이러한 에이전트 특성을 활용해 최적화할 수 있습니다. 예를 들어, 다중 쿼리 최적화(multi-query optimization)와 공유 스캔(shared scan) 개념을 적용하여 중복된 하위 계획 결과를 재사용하거나, 대답이 '충분히 좋은(approximate answers)' 경우 근사 답변을 제공하여 에이전트의 진행을 가속화할 수 있습니다. 또한, 데이터 시스템을 수동적인 쿼리 실행자에서 능동적인 조력자로 전환하여, 관련 쿼리 결과를 준비하거나 성능 피드백을 제공할 수 있습니다.

### 업계 영향
이 연구는 데이터베이스 및 데이터 시스템 업계에 파장을 일으킬 것입니다. 전통적인 데이터베이스 업체들은 단순히 쿼리를 처리하는 시스템에서 벗어나, 에이전트와의 협업을 최적화하는 새로운 아키텍처를 개발해야 할 것입니다. 이는 데이터베이스 설계 및 쿼리 언어의 근본적인 변화를 의미합니다.

또한, 에이전트를 위한 데이터 시스템은 DBT 스타일의 Jinja 매크로와 같은 고수준 프리미티브 지원을 통해, 에이전트가 각 SQL 쿼리를 명시적으로 나열하는 대신 루핑 기반 프리미티브를 사용하여 데이터 시스템과 상호작용할 수 있게 할 것입니다. 이는 데이터 시스템 개발자와 AI 에이전트 개발자 사이의 새로운 협업 패러다임을 만들 것입니다.

### 관련 프로젝트
- [Agentic Speculation Research](https://arxiv.org/abs/2509.00997)
- [Multi-query Optimization Literature](https://dl.acm.org/doi/10.1145/42201.42203)
- [Approximate Query Processing](https://dl.acm.org/doi/10.1561/1900000004)
- [Proactive Data Systems](https://arxiv.org/abs/2502.13016)

### 관련 뉴스
- [2026-07-08-google-adk-20.md] — Google ADK 2.0의 결정론적 워크플로우 접근법
- [2026-07-08-weill-cornell-clinical-trial.md] — AI 에이전트를 활용한 임상 시험 설계 가속화 연구

## 원문 발췌
> "The cost of AI is dropping rapidly. GPT-4-class capabilities cost roughly $30 per million tokens in early 2023; today the same runs under $1, and some providers are pushing costs below $0.10."
> 
> "So, what does this new era of near-free intelligence mean for data systems? We believe three new challenges—and opportunities—stem from near-zero inference costs: Data Systems For Agents, Data Systems Of Agents, and Data Systems By Agents."