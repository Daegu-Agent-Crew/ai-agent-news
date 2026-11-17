# OpenAI Releases GPT-6.2 Astra and Sol With a 20% Cheaper Astra API

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/11/17/openai-gpt-6-2-astra-sol-release/
- **소스**: Marktechpost
- **발행일**: 2026-11-17
- **수집일**: 2026-11-18
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [OpenAI, GPT-6.2, API 가격]
- **소스 권위**: major-media
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> OpenAI가 GPT-6.2 Astra와 GPT-6.2 Sol 두 모델을 공개했고, Astra 토큰 가격이 20% 내렸다. 두 모델은 API에서 각각 gpt-6.2-astra, gpt-6.2-sol로 사용 가능하다.

## 번역 (한국어)
OpenAI가 전문·에이전트 작업용 폐쇄형 모델 두 종을 내놨다. GPT-6.2 Astra는 어렵고 장기 진행되는 작업용 최상위(프론티어) 등급이며, GPT-6.2 Sol은 빠른 일상 작업용 효율 등급이다. 개발자에게 핵심은 작업당 비용으로, Astra의 토큰 가격이 20% 인하됐고 두 모델 모두 더 적은 출력 토큰으로 작업을 끝낸다고 OpenAI는 밝혔다.

컨텍스트 창은 1,050,000 토큰(입력 최대 922,000, 출력 최대 128,000)이며 OpenAI 호스티드 API와 ChatGPT Work, Codex에서만 동작한다. Astra의 지식 컷오프는 2026년 5월 18일, Sol은 6월 1일이다.

가격은 1M 토큰당 Astra 입력 $8.00/출력 $40.00, Sol 입력 $2.00/출력 $10.00다. 캐시 입력은 Astra $0.40으로 60% 저렴하다. 272K 입력 초과 요청은 입력·캐시 요금이 2배, 출력은 1.5배다.

성능은 Artificial Analysis 지수에서 Astra가 62점으로 Claude Fable 5.2(65점)에 이어 2위다. 반면 AA-Omniscience 환각률은 Astra 59%, Sol 55%로 여전히 높고, Sol의 코딩 에이전트 지수는 3점 하락했다.

## 왜 중요한가?
AI 사용 비용이 구조적으로 내려가는 흐름이 프론티어 모델에서도 확인됐다. 같은 예산으로 더 어려운 작업을 맡길 수 있게 되어, 에이전트 서비스를 만드는 회사들의 원가 계산이 달라진다.

## 심층 분석

### 기술 의미
가격 인하와 출력 토큰 절감이 결합되어 '작업당 비용' 최적화가 모델 경쟁의 주축이 됐음을 보여준다(→ 분석). 캐시 입력 60% 할인은 긴 프롬프트 접두사를 재사용하는 에이전트 워크로드에 유리한 설계다. 프론티어 성능과 환각률의 괴리는 여전히 과제로 남아 있다.

### 업계 영향
Fable 5.2와의 가격 대비 성능 경쟁이 치열해지면서 2위 모델도 '비용 효율'을 내세우는 국면이 됐다(→ 분석). 벤치마크 주도권이 Artificial Analysis 등 독립 평가로 이동한 점도 업계 구조 변화의 신호다.

### 관련 프로젝트
- OpenAI API 문서: gpt-6.2-astra / gpt-6.2-sol

### 관련 뉴스
- 없음

## 원문 발췌
> OpenAI has released GPT-6.2 Astra and GPT-6.2 Sol, twp closed models aimed at professional and agentic work. ... Astra's token prices fall 20%, and OpenAI says both models finish tasks with fewer output tokens. Both are live in the OpenAI API as gpt-6.2-astra and gpt-6.2-sol.
> Astra scores 62 on the Artificial Analysis Intelligence Index, second behind Claude Fable 5.2 (65).
> Astra posts a 59% AA-Omniscience hallucination rate (Sol: 55%).

## 수집 노트
- **선정 이유**: OpenAI의 신규 프론티어 모델 출시 + 20% 가격 인하라는 에이전트 원가에 직접 영향을 주는 사건. 주요 매체 보도 + 공식 릴리스로 교차 확인 가능해 선정.
- **제외 후보**: "NVIDIA Open-Sources NVKE/NVKR" — 인프라 특화 소식으로 오늘 슬롯 내 우선순위에서 밀림. "Sarvam Token Factory" — 인도 내수 인퍼런스 플랫폼, 글로벌 영향 제한적.
