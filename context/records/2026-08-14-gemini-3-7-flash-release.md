# Google Gemini 3.7 Flash 출시: 코딩·에이전트 특화 모델, 1M 토큰당 $0.75

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/08/13/google-ai-just-released-gemini-3-7-flash/
- **소스**: MarkTechPost
- **발행일**: 2026-08-13
- **수집일**: 2026-08-14
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [google, gemini, flash, coding, agent, pricing, multimodal]
- **중요도**: ⭐⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Google이 Gemini 3.7 Flash를 출시했다. 3.6 Flash의 3주 뒤에 이어진 이번 업데이트는 코딩과 문서 처리 성능을 크게 향상시켰으며, 1M 토큰당 $0.75라는 파격적인 도입 가격을 제공한다.

## 번역 (한국어)

Google은 Gemini 3.7 Flash를 출시하며, 코딩·에이전트 워크로드에 특화된 모델 라인업을 강화했다. 이번 모델은 완전히 새로운 사전 학습이 아닌, 3.6 Flash의 추론 코어에 대한 알고리즘적 개선이다. 1M 토큰 컨텍스트 윈도우를 지원하며, 텍스트·이미지·오디오·비디오를 모두 처리할 수 있고 최대 64K 토큰까지 출력한다.

벤치마크 결과가 눈에 띈다. FrontierCode 1.1에서 34.4%에서 43.6%로, DeepSWE v1.1에서 48.6%에서 65.3%로 성능이 크게 향상되었다. AutomationBench에서는 17.0%에서 30.4%로 뛰어올랐으며, 이는 Claude Sonnet 5(10.7%)와 GPT-5.6 Terra(23.6%)를 모두 앞서는 수치다.

가장 큰 화제는 가격이다. 입력 1M 토큰당 $0.75, 출력 1M 토큰당 $3.75로, Claude Sonnet 5나 GPT-5.6 Terra의 약 1/3 수준이다. 이 도입 가격은 2026년 12월 31일까지 유효하며, 이후 두 배로 인상된다. 자체 호스팅은 불가하며 API와 엔터프라이즈 전용이다.

## 왜 중요한가?
Gemini 3.7 Flash는 "지능 대비 가성비"의 기준을 다시 쓴다. 코딩 에이전트를 항상 켜두어야 하는 스타트업들에게 1/3 가격으로 동급 성능을 제공하는 것은 실질적인 비용 혁명이다. 또한 GPT-5.6 Terra가 여전히 터미널·컴퓨터 사용 에이전트에서 앞서지만, 엔터프라이즈 워크플로우 벤치마크에서는 Google이 역전을 이루었다.

## 심층 분석

### 기술 의미
3.7 Flash는 새로운 사전 학습이 아닌 추론 코어 알고리즘 개선이라는 점이 주목할 만하다. 이는 post-training 알고리즘만으로도 유의미한 성능 향상이 가능함을 보여주며, 모델 개발 사이클이 크게 단축되고 있음을 시사한다. 3.6 Flash 출시 3주 만에 후속 모델이 나온 것도 이런 흐름의 일환이다. 커스터마이징 가능한 thinking 설정으로 품질·비용·지연 시간 간의 트레이드오프를 사용자가 제어할 수 있게 한 점도 실용적이다.

### 업계 영향
$0.75/1M 토큰이라는 가격은 Claude Sonnet 5($2.00)와 GPT-5.6 Terra($2.00)에 직접적인 가격 압박을 가한다. 에이전트 인프라에서 토큰 비용은 가장 큰 운영 지출 중 하나이므로, 이 가격 차이는 스타트업들이 플랫폼을 전환하게 만들 만한 동력이다. 다만 자체 호스팅이 불가하므로 데이터 주권이 중요한 규제 산업에서는 한계가 있다.

### 관련 프로젝트
- [Gemini 3.7 Flash Model Card](https://deepmind.google/models/model-cards/gemini-3-7-flash)
- [Google Keyword 공식 발표](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/)
- [FrontierCode 1.1 벤치마크](https://cognition.com/frontiercode)

### 관련 뉴스
- (없음 — 신규 수집)

## 원문 발췌
> Gemini 3.7 Flash ships at $0.75 per 1M input tokens and $3.75 per 1M output tokens — half the original 3.6 Flash list rate, and roughly a third the blended cost of Claude Sonnet 5 or GPT-5.6 Terra.

> For teams running agents at volume, the intelligence-per-dollar gap is the reason to evaluate, not the individual eval wins.
