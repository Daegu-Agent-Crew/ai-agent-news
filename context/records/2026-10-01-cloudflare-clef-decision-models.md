# Cloudflare, 오픈소스 결정 모델 'Clef'·'Clef-flash' 공개 — Jev API 호환, RL 미세조정 플랫폼도 출시

## 메타데이터
- **원문 URL**: https://blog.cloudflare.com/clef-decision-models/
- **소스**: Cloudflare Blog
- **발행일**: 2026-10-01
- **수집일**: 2026-10-02
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [cloudflare, clef, decision-model, jev, workers-ai, open-source, reinforcement-learning]
- **소스 권위**: official
- **교차 확인**: 1
- **중요도**: ⭐⭐⭐
- **신선도**: fresh
- **중요도 산정**: 기본 1 + official 2 + 교차 확인 1개(0) + 반응 규모 미확인(0) = 3

## 핵심 요약
> Cloudflare는 자체 학습한 결정 모델 Clef와 Clef-flash를 Workers AI에 공개하고 Hugging Face에 Apache 2.0으로 오픈소스화했으며, 두 모델은 Jev API와 완전 호환된다. 고객이 Clef를 자기 용도에 맞게 미세조정할 수 있는 강화학습(RL) 제품도 함께 선보였다.

## 번역 (한국어)
Cloudflare는 공식 블로그에서 최근 몇 주간 TypeSafe AI의 Jev System One 같은 '결정 모델'이 화제가 됐다고 짚었다. Cloudflare의 설명에 따르면 결정 모델은 워크플로 안에서 결정이 필요할 때 끼워 넣을 수 있도록, 범위가 정해진 구조화 출력을 싸고 빠르고 일관되게 내놓는 모델이다. 이는 비결정적이지만 자유롭게 추론·생성하는 LLM과 대비된다.

Cloudflare는 이날 Workers AI에서 호스팅되는 Clef와 Clef-flash 두 모델을 공개했다. 회사는 Clef가 Jev Decision Index 평가에서 현재 선두이며, 두 모델 모두 Jev API와 완전 호환된다고 밝혔다. 모델은 Hugging Face에 Apache 2.0 라이선스로 공개돼 로컬 실행도 가능하다.

Cloudflare가 꼽은 차별점은 세 가지다. 이미지를 분류할 수 있는 비전 인코더를 갖췄고(Jev는 현재 텍스트만 지원), 컨텍스트 창이 64k로 Jev의 32k보다 넓으며, 여러 벤치마크에서 경쟁력 있는 점수를 냈다는 것이다. 회사가 공개한 표에서 Clef는 BFCL 98.47, BANKING77 macro-F1 94.20을 기록했고, 지연 시간 중앙값은 Clef 209.3ms, Clef-flash 38.8ms로 Jev의 524.1ms보다 짧았다.

사내 활용 사례로 Cloudflare 위협 인텔리전스 팀은 Clef로 웹사이트 도메인을 분류하고 있다고 밝혔다. 회사에 따르면 한 도메인을 가져와 렌더링하고 분류하는 데 Clef는 2.2초가 걸렸고, 가장 빠른 범용 LLM인 gpt-oss-120b는 같은 워크플로에서 4.7초가 걸리며 분류도 두 개만 반환했다.

## 왜 중요한가?
AI 에이전트가 일하다 보면 "이 문의는 긴급한가?", "어느 팀에 넘길까?" 같은 짧은 판단을 수없이 해야 하는데, 매번 큰 AI를 부르면 느리고 비쌉니다. 대형 인프라 회사가 이런 '판단 전용' 모델을 무료 오픈소스로 내놓으면서, 에이전트가 빠르고 싸게 스스로 결정하는 구조가 더 많은 서비스에 퍼질 가능성이 커졌습니다.

## 심층 분석

### 기술 의미
Clef는 결정 모델 카테고리에 비전 입력과 64k 컨텍스트를 더해, 텍스트 전용이던 Jev의 적용 범위를 이미지 분류까지 넓힌다. (→ 분석) Jev API 호환을 택한 것은 결정 모델 생태계에서 Jev 인터페이스가 사실상 표준으로 굳어지고 있음을 시사한다. 다만 공개된 벤치마크는 Cloudflare 자체 측정이며, When2Call·BRIGHT 등 일부 항목에서는 Jev가 더 높은 점수를 기록해 모든 영역의 우위는 아니다.

### 업계 영향
OpenAI Decisions API, AWS Strands Decider에 이어 Cloudflare까지 같은 주에 결정 모델을 내놓으며 이 카테고리가 빠르게 범용화되고 있다. (→ 분석) 엣지 GPU에서 호스팅되는 저지연 결정 모델은 에이전트의 '핫 패스'에 판정 단계를 넣는 설계를 현실적으로 만든다. RL 미세조정 제품까지 묶은 것은 모델 자체보다 맞춤화·호스팅으로 수익을 내려는 전략으로 읽힌다.

### 관련 프로젝트
- [Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai/)
- [TypeSafe AI — Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev)

### 관련 뉴스
- [OpenAI Decisions API — Jev 클론](2026-09-30-openai-decisions-api-jev-clone.md) — 같은 주 OpenAI의 결정 모델 API
- [TypeSafe Jev System One 모델](2026-09-20-typesafe-jev-system-one-model.md) — 원조 결정 모델
- [AWS Strands Decider 2B](2026-10-01-aws-strands-decider-2b.md) — 같은 날 공개된 AWS 오픈소스 결정 모델

## 원문 발췌
> "Today, we're releasing two Cloudflare-trained decision models, Clef and Clef-flash, hosted on Workers AI."
> "These models are smarter, faster, and fully Jev-API compatible, so you can experiment with these hosted models easily. We're fully open-sourcing these models on Hugging Face under an Apache 2.0 license"
> "Lastly, we're excited to debut our new reinforcement learning (RL) product, which allows customers to fine-tune Clef to suit their use cases as well."
> "our model has a 64k context window (compared to Jev's 32k)"

## 수집 노트
- **선정 이유**: 공식 발표(official)이자 비전 입력·오픈소스·RL 미세조정까지 갖춘 결정 모델로, 이번 수집 창에서 공식 소스 권위가 가장 높은 에이전트 인프라 건.
- **제외 후보**: "Google releases Gemini 4 Argon(TechCrunch)" — 2026-09-30 레코드로 이미 아카이브되어 중복 제외. "Brian Chesky interview: AI agents need their own operating system(TechCrunch)" — CEO 의견 인터뷰로 새 발표·사실이 적어 제외.
