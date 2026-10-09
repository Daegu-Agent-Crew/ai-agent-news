# Microsoft, 빠른 결정 모델 'Microsoft-Decision-1' 공개 — GPT-6 Sol 대비 35배 빠르다고 주장

## 메타데이터
- **원문 URL**: https://commandline.microsoft.com/microsoft-decision-1-model-foundry/
- **소스**: Microsoft 공식 블로그 (Command Line)
- **발행일**: 2026-10-09
- **수집일**: 2026-10-10
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [microsoft, decision-model, foundry, openrouter, qwen3-5, agent-routing, jev]
- **소스 권위**: official
- **교차 확인**: 1
- **중요도**: ⭐⭐⭐⭐
- **중요도 산정**: 기본 1 + official 2 + 교차 확인 1개(0) + 반응 규모 HN 112pt(1) = 4
- **신선도**: fresh

## 핵심 요약
> Microsoft는 라우팅·분류·검증·워크플로 제어용 결정 모델 Microsoft-Decision-1을 Microsoft Foundry와 OpenRouter로 공개했다. 회사는 36개 벤치마크 비교에서 최고 정확도를 기록했고, 2위 Quyet-1.0-Large보다 4.5배, GPT-6 Sol보다 35배 빠르다고 밝혔다.

## 번역 (한국어)
Microsoft는 결정 모델이 AI의 중요한 새 범주로 빠르게 떠오르고 있다며, 텍스트 생성이나 복잡한 추론용인 LLM과 달리 소프트웨어가 즉시 실행할 수 있는 구조화된 출력을 내도록 설계된 모델이라고 설명했다. 이번에 공개한 Microsoft-Decision-1은 Microsoft Foundry와 OpenRouter에서 사용할 수 있다.

Microsoft에 따르면 이 모델은 Qwen3.5-9B를 단일 패스 결정 채점용으로 후속 학습해 만들었으며, 향후 Microsoft AI(MAI)와 OpenAI 모델 등으로 기반을 바꿀 예정이다. 고정된 선택지가 주어지면 각 선택지에 보정된 확률 점수를 반환하고, 예/아니오·객관식·등급 평가와 AI 응답·에이전트 행동에 대한 루브릭 채점을 지원한다.

회사는 학습에서 제외한 약 15만 문항, 36개 벤치마크 비교에서 최고 정확도를 기록했다고 밝혔다. 견고성 측면에서는 같은 요청을 8가지 방식으로 변형했을 때 결정이 바뀐 비율이 평균 1.3%였고, 선택지 설명을 바꾸거나 순서를 섞었을 때는 한 번도 바뀌지 않았다고 했다. 안전성은 11개 벤치마크 5,250건의 요청으로 시험했다.

내부 적용 사례로 Xbox Research는 1만 건 이상의 피드백 분류에서 GPT-6 Sol과 비슷한 품질에 14배 이상 빠르고 200배 저렴했다고 Microsoft는 전했다. Copilot 팀은 응답 품질 평가에서 GPT5.6 Luna와 대등하면서 100배 빨랐다고 보고했다.

## 왜 중요한가?
AI 에이전트가 "다음에 무엇을 할지" 고르는 작은 결정들을 훨씬 빠르고 싸게 처리할 수 있게 해 주는 모델을 Microsoft가 직접 내놓았습니다. 스타트업이 연 시장에 빅테크가 본격 진입하면서, 이런 결정 전용 AI가 업무 자동화의 표준 부품이 될 가능성이 커졌습니다.

## 심층 분석

### 기술 의미
9B급 오픈 모델을 후속 학습해 결정 전용으로 만든 점은, 결정 모델이 대규모 사전학습 없이도 구축 가능한 영역임을 보여준다(→ 분석). 20단계 순차 결정마다 100ms가 더해지면 전체 2초가 늘어난다는 Microsoft의 설명처럼, 에이전트 루프의 누적 지연을 줄이는 것이 핵심 설계 목표다. 순서 섞기·패러프레이즈에 대한 결정 안정성을 따로 측정한 점은 운영 환경에서의 재현성을 중시한 접근이다.

### 업계 영향
TypeSafe Jev, OpenAI Decisions API, AWS, Cloudflare에 이어 Microsoft까지 진입하면서 주요 클라우드 대부분이 결정 모델을 갖추게 됐다(→ 분석). Microsoft가 JevBench 상위 모델들을 직접 비교 대상으로 삼은 것은 이 범주가 벤치마크 경쟁 단계에 들어섰음을 시사한다. 모든 성능 수치는 Microsoft 자체 벤치마크 결과이며 독립 검증은 아직 없다.

### 관련 프로젝트
- Microsoft Foundry 모델 카탈로그: https://ai.azure.com/catalog/models/Microsoft-Decision-1
- OpenRouter: https://openrouter.ai/microsoft/microsoft-decision-1

### 관련 뉴스
- [TypeSafe 8.7억 달러 유치](../records/2026-10-10-typesafe-jev-870m-series-a-7-5b.md) — 같은 날 원조 결정 모델 기업의 대형 투자
- [Cloudflare Clef 결정 모델](../records/2026-10-01-cloudflare-clef-decision-models.md) — 앞선 클라우드 기업의 진입

## 원문 발췌
> "Today we're introducing Microsoft-Decision-1, our new model for fast decision-scoring, available in Microsoft Foundry and through OpenRouter."
> "Microsoft-Decision-1 achieved the highest accuracy in our 36-benchmark comparison, spanning nearly 150,000 questions across benchmarks kept blind from training."
> "it was the fastest measured: 4.5 times quicker than Quyet-1.0-Large, the runner-up, and 35 times quicker than GPT-6 Sol."
> "To build Microsoft-Decision-1, we post trained Qwen3.5-9B for fast, single-pass decision scoring"

## 수집 노트
- **선정 이유**: 공식 발표에 HN 112pt 반응이 있어 ⭐⭐⭐⭐로 산정되며, 결정 모델 경쟁에 빅테크가 추가 진입한 사건이라 선정.
- **제외 후보**: Alibaba Qwen-Image-2.1-Turbo — 이미지 생성 모델로 에이전트 관련성 낮음. Google Research RRSI 가이드 — 9월 29일 원 발표를 이미 아카이브함.
