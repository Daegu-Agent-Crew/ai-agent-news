# OpenAI Decisions API 공개 베타 — Responses API보다 약 10배 빠른 타입형 답변

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/10/09/openai-decisions-api-hits-public-beta-with-10x-faster-typed-answers/
- **소스**: MarkTechPost
- **발행일**: 2026-10-09
- **수집일**: 2026-10-10
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [openai, decisions-api, gpt-6-luna, decision-model, typed-output, jev]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 1개(0) + 반응 규모 미확인(0) = 2
- **신선도**: updated

## 핵심 요약
> MarkTechPost에 따르면 OpenAI는 텍스트·이미지를 받아 코드가 분기할 수 있는 타입형 답변을 돌려주는 Decisions API를 공개 베타로 출시했다. OpenAI는 Responses API보다 약 10배 빠르다고 밝혔고, 가격은 gpt-6-luna 기준 입력 100만 토큰당 $0.10이며 출력 요금은 없다.

## 번역 (한국어)
MarkTechPost는 OpenAI가 Decisions API를 공개 베타로 출시했다고 전했다. 이 API는 텍스트나 이미지를 평가해 산문 대신 타입이 정해진 답을 돌려준다. 요청은 model, input, questions 세 필드로 구성되며 현재 지원 모델은 gpt-6-luna 하나다. OpenAI는 수 주 내 정식 출시(GA)를 예상한다.

질문 유형은 세 가지다. predicate는 조건을 검사해 0~1 확률을, choice는 사용자가 준 선택지 중 하나와 선택지별 확률·신뢰도를, score는 순서가 있는 등급에 대한 확률 가중 평균을 반환한다. OpenAI는 확률·선택·점수가 필요하면 Decisions를, 자체 JSON 스키마를 채우거나 설명을 쓰려면 Structured Outputs를 쓰라고 구분했다.

MarkTechPost에 따르면 OpenAI 문서는 Responses API 대비 약 10배 빠르다고 주장하며, DevDay 보도에서는 결정 한 건이 약 150ms, 일반 Luna 호출은 약 1.6초로 언급됐다. 다만 OpenAI는 이 엔드포인트의 정확도나 보정 데이터를 공개하지 않았고, 문서는 사용자 자체 라벨 예시로 임계값을 정하라고 권고한다.

가격은 입력 100만 토큰당 $0.10이며 출력·캐시 요금은 없다. 매체는 9월 15일 출시된 TypeSafe Jev가 입력 100만 토큰당 $0.042로 OpenAI 기본 요금이 약 2.4배 높다고 비교했다. OpenAI의 강점으로는 이미지 입력, 무보존(ZDR)·HIPAA 등 컴플라이언스 옵션, 공개 베타 접근성을 꼽았다.

## 왜 중요한가?
OpenAI의 "선택지 고르기 전용" 기능을 이제 누구나 써 볼 수 있게 됐습니다. 출력 요금이 없고 응답이 빨라서, AI 에이전트가 수많은 작은 판단을 내려야 하는 업무 자동화 비용이 크게 낮아질 수 있습니다.

## 심층 분석

### 기술 의미
Decisions API는 프론티어 LLM(gpt-6-luna)을 결정 전용 인터페이스로 감싼 형태로, 별도 소형 모델을 쓰는 Jev·Microsoft 방식과 구조가 다르다(→ 분석). 출력 토큰 과금을 없앤 것은 결정 결과가 생성 텍스트가 아니라 확률 벡터라는 점을 가격 구조에 반영한 것이다. 정확도·보정 데이터가 공개되지 않아 사용자가 직접 임계값을 보정해야 한다는 점은 운영 도입의 부담으로 남는다.

### 업계 영향
OpenAI가 공개 베타로 문을 열면서 결정 모델 시장에서 가격·지연·컴플라이언스 경쟁이 본격화됐다(→ 분석). Jev보다 비싸지만 이미지 입력과 규제 대응 옵션으로 엔터프라이즈를 겨냥하는 차별화 전략으로 보인다(→ 분석). 같은 날 Microsoft-Decision-1 공개와 TypeSafe 대형 투자가 겹치며 이 범주의 경쟁 구도가 빠르게 형성되고 있다.

### 관련 프로젝트
- OpenAI API: https://platform.openai.com/

### 관련 뉴스
- [OpenAI Decisions API 최초 공개](../records/2026-09-30-openai-decisions-api-jev-clone.md) — DevDay 발표 당시 보도
- [Microsoft-Decision-1](../records/2026-10-10-microsoft-decision-1-fast-decision-model.md) — 같은 날 공개된 경쟁 결정 모델

## 원문 발췌
> "OpenAI has released the Decisions API in public beta. It turns text and images into typed answers your code can branch on."
> "OpenAI team states the OpenAI Decisions API runs about 10x faster than the Responses API."
> "With gpt-6-luna, input costs $0.10 per 1M tokens. There are no output-token, cache-read or cache-write charges."
> "OpenAI has not published accuracy or calibration data for the endpoint."

## 수집 노트
- **선정 이유**: 9월 30일 아카이브한 DevDay 발표의 후속(공개 베타·가격 확정)이라 신선도 updated로 기록하며, 단일 소스(교차 1)라 ⭐⭐.
- **제외 후보**: Google Cloud Gemini Agent(MarkTechPost) — 10월 9일 이미 아카이브. Alibaba Qwen-Image-2.1-Turbo — 이미지 모델로 에이전트 관련성 낮음.
