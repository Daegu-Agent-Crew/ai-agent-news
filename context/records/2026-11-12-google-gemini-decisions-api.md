# 구글, 제미나이 Decisions API 공개 — 단일 패스 초저지연 의사결정 전용 엔드포인트

## 메타데이터
- **원문 URL**: https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/
- **소스**: Google 공식 블로그 (Google DeepMind)
- **발행일**: 2026-11-11
- **수집일**: 2026-11-12
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [gemini, decisions-api, google-deepmind, low-latency, agent-routing]
- **소스 권위**: official
- **교차 확인**: 1
- **중요도**: ⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> 구글 DeepMind는 예·아니오, 다중선택, 루브릭 채점 등 닫힌 결정을 위해 최대 1,000개 질문을 단일 포워드 패스로 처리하는 Gemini Decisions API와 전용 모델 Gemini Decision 1을 공개했다.

## 번역 (한국어)
구글 DeepMind가 11월 11일 Gemini Decisions API를 발표했다. 도구 선택, 정책 검사, 모델 라우팅, 컨텍스트 등급 판정 같은 '닫힌 선택(bounded choices)'에 특화된 엔드포인트이며, 새 전용 모델 gemini-decision-1로 구동된다. 텍스트·이미지·오디오·비디오·PDF(최대 256K 토큰) 하나에 대해 최대 1,000개의 독립 질문을 던질 수 있다.

핵심 차별점은 토큰 단위 텍스트 생성을 하지 않는다는 것이다. 후보 옵션들을 단일 포워드 패스로 스코어링해 확률과 신뢰도 점수를 반환하며, 엔드투엔드 지연은 150-250ms, 입력 100만 토큰당 $0.10이고 출력 토큰은 과금되지 않는다. 구글은 공유 벤치마크 기준 Gemini 3.5 Flash-Lite 대비 약 5배 저렴하다고 밝혔다.

세 가지 질문 유형(yes/no, 2~255개 선택지, 순서 루브릭 채점)을 한 요청에 섞어 쓸 수 있고, 모든 답변에 0~1 신뢰도 점수가 붙어 모호한 케이스를 폴백·인간 검토로 라우팅할 수 있다.

구글 내부에서는 이미 Gemini Notebook의 실시간 모델 라우터로 쓰여 일반 질의 지연을 최대 40% 낮췄고, Stitch의 디자인 반복 실험에도 활용 중이다.

## 왜 중요한가?
AI 에이전트가 실제 일하려면 '어느 도구를 쓸까', '이 정책에 걸리나' 같은 빠른 판단이 수없이 필요하다. 지금까지는 거대 모델에게 긴 답을 생성시켜 비싸고 느렸는데, 판단만 전담하는 초저가·초저지연 API가 생기면 에이전트 운영 비용 구조 자체가 바뀔 수 있다.

## 심층 분석

### 기술 의미
생성 디코딩을 생략하고 분류기 방식으로 스코어링하는 설계는, 에이전트의 제어 평면(control plane)을 생성 모델과 분리하려는 흐름과 맞닿아 있다 (→ 분석). 1~100개 질문에서 지연이 거의 평평하게 유지된다는 점은 배칭 처리 최적화의 결과로 보인다. 신뢰도 점수를 통한 인간 검토 라우팅은 에이전트 안전장치 설계의 표준 패턴과 부합한다.

### 업계 영향
OpenAI·Anthropic 등 경쟁사도 에이전트용 저비용 판단 프리미티브를 갖추게 될 가능성이 있고 (→ 분석), 커스텀 분류기를 학습·운영하던 스타트업 입장에서는 대형 API가 직접 경쟁자가 되는 국면이다. 모델 라우팅 시장에서 비용 경쟁이 더 치열해질 것이다.

### 관련 프로젝트
- Gemini API / Google AI Studio — Decisions API playground
- Gemini Notebook — 내부 모델 라우팅 사례

### 관련 뉴스
- [Google TPU 8Tx·8i Max](../records/2026-11-11-google-tpu-8tx-8i-max.md) — 같은 날 발표된 구글 인프라 확장
- [Google Gemini for Healthcare](../records/2026-11-11-google-gemini-for-healthcare.md) — 제미나이의 산업 확장 흐름

## 원문 발췌
> Today, we're introducing the Gemini Decisions API, a new endpoint for fast, closed-set decisions powered by our new Gemini Decision 1 model (gemini-decision-1).
> Rather than generating answer text token by token, Gemini Decision 1 scores your candidate options in a single forward pass, returning probabilities and confidence scores in 150-250 ms end-to-end latency at $0.10 per 1M input tokens with zero output tokens billed.
> Gemini Notebook uses the Decisions API as a real-time router to instantly direct incoming queries to the optimal model tier and thinking level for each request.

## 수집 노트
- **선정 이유**: 공식 발표(official)로서 에이전트 제어 평면 비용 구조를 바꿀 수 있는 신제품. 탐색한 후보 중 유일한 1차 공식 소스.
- **제외 후보**: TechCrunch 'CoreWeave 선불 계약' — 인프라 금융 이슈로 에이전트 산업 직접 관련성 낮음. blog.google 'Tabletop' — 협업 캔버스 실험으로 뉴스성 약함.
