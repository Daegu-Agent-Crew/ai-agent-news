# Models Are Getting Dumber on Purpose: AI 모델의 지식-추론 트레이드오프

## 메타데이터
- **원문 URL**: https://w4g1.dev/blog/models-are-getting-dumber-on-purpose
- **소스**: Hacker News (w4g1.dev)
- **발행일**: 2026-08-16
- **수집일**: 2026-08-17
- **수집자**: 레노버
- **카테고리**: research
- **태그**: [model-scaling, knowledge-distillation, hallucination, reasoning, harness, efficiency]
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> AI 모델이 점점 더 작아지면서도 벤치마크 성능은 좋아지고 있지만, 이는 지식이 아닌 추론 능력만 개선한 결과다. 사실적 질문에 대한 환각률은 여전히 심각하며, 이는 지식을 가중치에서 외부 검색(harness)으로 이관하는 의도적 설계 선택이다.

## 번역 (한국어)

GLM-5.2는 AIME 2026에서 99.2%를 기록하면서 토큰당 약 400억 개의 활성 파라미터만 사용한다. Qwen3.5는 170억 개로 91.3%, DeepSeek V4-Flash는 130억 개로 유사한 성능을 보인다. 반면 2023년 GPT-4는 2,800억 개 활성 파라미터로 AIME 문제 하나를 풀기도 어려웠다. 벤치마크만 보면 모델이 놀라운 속도로 스마워지고 있다.

하지만 동일한 모델에게 단순한 사실 질문을 하면 그림이 뒤집힌다. SimpleQA에서 최고 성적은 Gemini 2.5 Pro의 53%로, 돈으로 살 수 있는 최고의 기억력도 절반의 질문에 틀린다. 소형 모델은 더 심각하다. Qwen3.5 4B와 9B의 환각률은 80~82%에 달한다. 모르는 사실이 대부분인데도 자신 있게 그럴듯한 거짓말을 한다.

이는 우연이 아닌 의도적 트레이드오프다. 연구에 따르면 파라미터당 약 2비트의 사실적 지식이 저장되며, 세상의 모든 사실을 가중치에 담으려면 모델이 수조 파라미터가 필요하다. 반면 추론은 알고리즘적 절차의 반복이므로 훨씬 효율적으로 압축된다. 즉, 연구소들은 세계 지식을 버리고 추론 능력만 남기는 방향으로 모델을 설계하고 있다.

이 접근의 핵심 장점은 세 가지다. 첫째, 사실은 썩지만 절차는 썩지 않는다 — 대수학은 1970년이나 지금이나 같으며, 문제 분해나 모순 발견 능력도 마찬가지다. 둘째, 모델이 모르는 것은 외부에서(harness를 통해) 검색하면 되며, 코딩 에이전트는 이미 이 방식으로 작동한다. 셋째, 환각 문제가 근본적으로 해결된다 — 사실이 가중치가 아니라 문서에 있으면, 틀린 답이 나와도 소스를 확인하고 수정할 수 있다.

## 왜 중요한가?
AI 모델이 "더 똑똑해지는 것"과 "더 많이 아는 것"이 다르다는 통찰은 AI 에이전트 설계의 기본 철학을 바꾼다. 에이전트가 모든 것을 기억할 필요 없이, 검색과 도구 호출을 통해 필요한 정보를 실시간으로 가져오면 된다. 이는 에이전트 아키텍처에서 harness(검색, 도구, 문서 기반)가 모델 자체만큼 중요해진다는 것을 의미한다.

## 심층 분석

### 기술 의미
"Physics of Language Models" 연구 시리즈에 따르면, 지식 용량은 파라미터 수에 비례하며 약 2비트/파라미터다. 반면 추론은 합성 데이터와 RLHF로 소형 모델에 효율적으로 전이된다. 이 트레이드오프는 모델 아키텍처 설계의 의도적 방향 전환을 의미한다: MoE에서 expert 레이어는 주로 지식 저장용이므로, 지식을 외부로 이관하면 전체 크기가 활성 크기(13~40B)로 수축하여 단일 소비자 GPU에서 실행 가능해진다. DeepSeek V4-Flash의 130억 활성 파라미터는 이미 24GB VRAM에 4-bit 양자화로 수용 가능한 범위다.

### 업계 영향
이 트레이드오프는 AI 에이전트 생태계에 깊은 영향을 미친다. 첫째, 모델 벤더의 가치 제안이 "더 똑똑한 모델"에서 "더 나은 harness + 추론 모델"로 이동한다. 둘째, 로컬 에이전트 실행이 현실화되면서 클라우드 의존도가 감소한다. 셋째, 지식 관리(RAG, 벡터 DB, 문서 시스템)가 핵심 인프라로 부상한다. Databricks의 최근 50억 달러 funding, Google의 Gemini API Managed Agents 확장, 그리고 다양한 RAG 플랫폼의 성장은 모두 이 방향과 일치한다.

### 관련 프로젝트
- [GLM-5.2](https://benchlm.ai/best/reasoning-models) — 99.2% AIME 2026, 40B 활성 파라미터
- [DeepSeek V4-Flash](https://www.morphllm.com/deepseek-v4-flash) — 13B 활성 파라미터
- [SimpleQA Benchmark](https://pricepertoken.com/leaderboards/benchmark/simpleqa) — 사실적 회상 벤치마크

### 관련 뉴스
- [Writer introduces new AI model on GLM-5.2](../records/) — Z.ai 기반 효율적 모델 출시 (동일한 지식-추론 트레이드오프 활용)

## 원문 발췌
> Ask the same models a plain factual question and the picture flips. On SimpleQA, a benchmark of factual recall with no tools allowed, the current leader is Gemini 2.5 Pro at 53%, so the best recall money can buy still misses half the questions. Labs are trading world knowledge for reasoning skill, and the trade is deliberate.
