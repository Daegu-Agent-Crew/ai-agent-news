# Liquid AI, 멀티모달 결정 모델 'd1-ultra' 출시 — AA Decision Index 65점, 출력 토큰 0개

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/10/15/liquid-ai-d1-ultra-decision-model/
- **소스**: MarkTechPost (Liquid AI 공식 블로그·문서 인용)
- **발행일**: 2026-10-15
- **수집일**: 2026-10-17
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [liquid-ai, d1-ultra, decision-model, routing, classification, multimodal, artificial-analysis]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 1개(0) + 반응 미확인(0) = 2
- **신선도**: fresh

## 핵심 요약
> Liquid AI가 텍스트·이미지를 읽고 유형화된 질문에 답별 확률을 한 번의 순전파로 돌려주는 결정 모델 d1-ultra를 출시했다. Liquid는 Artificial Analysis Decision Index 1위(65점)를 보고했으며, 가격은 입력 100만 토큰당 $0.042다.

## 번역 (한국어)
Liquid AI가 지금까지 가장 강력한 결정 모델(decision model)인 d1-ultra를 공개했다. d1-ultra는 텍스트, 이미지 또는 둘 다를 읽고, 유형화된 질문에 대해 가능한 답마다 확률을 돌려준다. 단 한 번의 순전파(forward pass)로 처리하며 출력 토큰을 생성하지 않는다. MarkTechPost는 개발자 입장에서 분류·라우팅·채점 호출을 생성 텍스트 비용 없이 할 수 있다는 뜻이라고 설명했다. Liquid API에서 입력 100만 토큰당 $0.042에 바로 쓸 수 있다.

Liquid 문서에 따르면 결정 모델은 세 가지 질문 유형을 지원한다. 0~1 확률을 돌려주는 예/아니오형, 라벨 집합 중 하나를 고르는 선택형, 순서형 루브릭 위의 확률 가중 위치를 돌려주는 점수형이다. 문서는 라우팅, 모더레이션, 가드레일, 분류(triage), LLM-as-judge 대체에 결정 모델을 권장하고, 요약·채팅·코드 생성에는 언어 모델을 권장한다.

Liquid는 d1-ultra가 d1보다 큰 오픈 웨이트 백본에 Liquid 고유의 대규모 커스터마이징을 더했다고 밝혔다. 112개 평가에서 d1과 TypeSafe Jev 1.14와 비교했으며, 같은 가격대에서 모든 과제에서 Jev 1.14를 앞섰다고 주장했다. Artificial Analysis Decision Index(지식·추론·도구 호출·안전 분류 4개 평가 평균)에서는 65점으로 1위라고 Liquid가 보고했다. MarkTechPost는 10월 13일 Artificial Analysis 출시 기사에서 Jev 1.13이 58점으로 1위였다고 덧붙였다.

파라미터 수와 컨텍스트 길이는 공개되지 않았고, 가중치 다운로드 없이 호스팅 API로만 제공된다. 과금은 입력 토큰만 계산하며, 이미지는 32×32 픽셀 패치당 1.5토큰(1024×1024 이미지 = 1,536토큰)이다. Liquid는 Vercel AI Gateway와 OpenRouter 지원이 곧 추가된다고 밝혔다.

## 왜 중요한가?
AI 에이전트 시스템에서 "이 요청을 어디로 보낼까", "이 답이 안전한가" 같은 판단을 아주 싸고 빠르게 처리하는 전용 모델 경쟁이 본격화되고 있습니다. 긴 답을 생성하지 않으니 비용이 크게 줄어드는 구조입니다.

## 심층 분석

### 기술 의미
출력 토큰 없이 확률 분포를 직접 반환하는 방식은 생성형 LLM을 분류기로 쓸 때의 지연·비용·파싱 오류를 동시에 줄인다(→ 분석). 확률이 그대로 나오므로 라우팅 임계값을 정량적으로 조정할 수 있으며, Liquid가 보정 오차(calibration error) 최저를 주장한 것도 이 용도를 겨냥한 것으로 보인다(→ 분석). 다만 벤치마크 수치는 Liquid 자체 보고이며 개별 벤치마크 세부 결과와 파라미터 수는 공개되지 않았다.

### 업계 영향
TypeSafe Jev, OpenAI Decisions API, Microsoft-Decision-1, Fastino GLiDE에 이어 Liquid까지 가세하며 '결정 모델'이 독립 제품 카테고리로 굳어지고 있다(→ 분석). Jev와 동일한 $0.042 가격을 책정한 것은 정면 가격 경쟁 신호로 읽힌다(→ 분석). 멀티모달 입력 지원은 결함 검사·보험 사진 대조 같은 현장 업무 판단을 에이전트 파이프라인에 넣기 쉽게 만든다(→ 분석).

### 관련 프로젝트
- Liquid API `/decisions/v1/systemone` (model: d1-ultra)
- Artificial Analysis Decision Index
- TypeSafe Jev, Microsoft-Decision-1, Fastino GLiDE

### 관련 뉴스
- [TypeSafe Jev, 8.7억 달러 시리즈 A](../records/2026-10-10-typesafe-jev-870m-series-a-7-5b.md) — 직접 비교 대상 결정 모델
- [OpenAI Decisions API 공개 베타](../records/2026-10-10-openai-decisions-api-public-beta.md) — 결정 모델 카테고리 경쟁
- [Liquid LFM2.5 24B-A2B 온디바이스 에이전트](../records/2026-10-15-liquid-lfm2-5-24b-a2b-on-device-agents.md) — Liquid의 직전 발표

## 원문 발췌
> "The Liquid AI d1-ultra decision model reads text, images, or both. It answers typed questions with a probability for each possible answer. It does this in one forward pass and generates no output tokens."
> "It is available now on the Liquid API at $0.042 per million input tokens."
> "On the independent Artificial Analysis Decision Index, Liquid reports d1-ultra ranks #1 with a score of 65."
> "Size, backbone and weights remain undisclosed; access is API-only."

## 수집 노트
- **선정 이유**: 최근 아카이브가 추적 중인 결정 모델 카테고리의 신규 1위 주장으로, 가격·과금 구조까지 구체적으로 기술된 보도라 선정.
- **제외 후보**: Meta Muse Spark Open(MarkTechPost) — 2026-10-16 공식 원문으로 이미 수집. FLUX 3 Image Klein(HN) — 이미지 생성 모델로 에이전트 주제와 거리.
