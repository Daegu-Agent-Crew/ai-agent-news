# Google introduces Gemini 4 Neon

## 메타데이터
- **원문 URL**: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/
- **소스**: Google Blog
- **발행일**: 2026-11-18
- **수집일**: 2026-11-19
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [[Gemini, Google, 프론티어 모델]]
- **소스 권위**: official
- **교차 확인**: 3
- **중요도**: ⭐⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> 구글이 Gemini 4 Neon을 공개했다. Artificial Analysis 지능지수 61점으로 전체 3위이며, 100만 토큰 컨텍스트와 함께 API·Antigravity 등에 즉시 배포된다.

## 번역 (한국어)
구글은 11월 18일 프론티어급 지능과 빠른 종단 작업 완료를 겸한 Gemini 4 Neon을 발표했다. 대상 영역은 복잡한 소프트웨어 엔지니어링, 지식 노동, 과학 워크플로다.

벤치마크에서 Neon은 xhigh 사고 수준에서 Artificial Analysis 지능지수 61점으로 동급 모델을 앞서고 전체 3위를 기록했다. Vals 지수에서는 2위이며 파레토 프론티어에 위치한다. 새로운 Agent Arena 지수의 조종성(steerability) 부문에서도 2위로, 작업 중간의 사용자 정정을 깔끔하게 반영한다고 한다.

가격은 입력 100만 토큰당 3달러(캐시 입력은 95% 할인된 0.15달러), 출력 100만 토큰당 15달러이며 컨텍스트 창은 100만 토큰이다. 구글은 내부 Antigravity 테스트에서 지금까지 중 최저 환각(fabrication) 비율을 기록했다고 밝혔다.

Gemini 4 Neon은 Google AI Studio의 Gemini API, 비즈니스용 Gemini(API·모델 드롭다운), 유료 AI Pro/Ultra 구독자용 Antigravity에 오늘부터 순차 제공된다.

## 왜 중요한가?
검색·업무용 AI를 쓰는 일반 사용자와 기업에게 '더 똑똑하면서도 저렴한 모델' 선택지가 하나 늘었다. 가격 인하와 100만 토큰 컨텍스트는 AI 서비스 요금과 품질 경쟁을 더욱 치열하게 만든다.

## 심층 분석

### 기술 의미
포인트는 지능지수 상위권과 낮은 가격($3/$15 per M 토큰)의 결합이다. 캐시 입력 95% 할인은 긴 컨텍스트를 재사용하는 에이전트 워크로드의 비용 구조를 크게 바꾼다. 조종성·다단계 지시 이행·환각 억제 등 에이전트 운용 품질 지표를 발표 축에 두고 있다는 점도 주목할 만하다. (→ 분석)

### 업계 영향
OpenAI·Anthropic·Microsoft와의 프론티어 가격 경쟁이 격화된다. 특히 코딩 에이전트·기업 지식 작업 시장에서 파레토 프론티어 배치는 '비용 대비 성능' 구매 기준을 강화한다. Antigravity 등 구글 자체 에이전트 제품과의 즉시 결합은 배포 우위로 이어진다. (→ 분석)

### 관련 프로젝트
- [Gemini API / AI Studio](https://aistudio.google.com/)
- [Google Antigravity](https://antigravity.google)

### 관련 뉴스
- [2026-11-19 Microsoft Ignite 7종 신모델](../records/2026-11-19-microsoft-ignite-seven-models.md) — 같은 주 가격-성능 경쟁

## 원문 발췌
> Neon ranks ahead of comparable models and #3 overall with a score of 61 on the Artificial Analysis Intelligence Index at its xhigh thinking level, landing just behind larger, slower models.

> The model is priced at $3 per million input tokens ($0.15 per million cached input tokens, a 95% discount) and $15 per million output tokens, with a 1 million-token context window.

> Neon also excels at multi-step instruction following and builds on our ongoing progress to curb fabrication, recording our lowest fabrication rate yet in internal Google Antigravity testing.

## 수집 노트
- **선정 이유**: 구글 공식 발표 + HN 프론트페이지 등 커뮤니티 유의미 반응 + 복수 매체 보도로 교차 확인 3 이상, 산정 규칙 최고 등급.
- **제외 후보**: Gemini 앱 저사양 Android 지원 — 제품 배포 소식으로 프론티어 모델 뉴스 대비 중요도 낮음
