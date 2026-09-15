# Salesforce, Nvidia Nemotron 기반 첫 자체 추론 모델 'Koa' 공개

## 메타데이터
- **원문 URL**: https://techcrunch.com/2026/09/15/salesforce-and-nvidias-new-reasoning-model-is-everything-the-ai-labs-should-fear/
- **소스**: TechCrunch
- **발행일**: 2026-09-15
- **수집일**: 2026-09-16
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [salesforce, nvidia, nemotron, enterprise-ai]
- **소스 권위**: major-media
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Salesforce가 Dreamforce에서 첫 자체 추론 모델 'Koa'를 공개했다. Nvidia 오픈웨이트 모델 Nemotron 기반으로 영업·마케팅·고객지원 업무에 맞게 포스트트레이닝 됐으며, 실제 고객 데이터를 사용하지 않았다고 Salesforce와 Nvidia 관계자가 TechCrunch에 밝혔다.

## 번역 (한국어)
Salesforce가 자사 최대 컨퍼런스 Dreamforce의 핵심 발표로 첫 추론 모델 Koa를 공개했다. Nvidia의 오픈웨이트 모델 Nemotron을 기반으로 두 회사가 함께 포스트트레이닝을 진행해 영업, 마케팅, 고객지원 태스크에 특화시켰다.

TechCrunch는 Koa를 "엔터프라이즈의 AI 니즈가 프런티어 랩의 공급과 갈라지는 사례"로 소개했다. Salesforce가 고객에게 제공하는 것은 폐쇄형 프런티어 모델의 오픈웨이트 대안, 수학 난제 대신 실무 과제에 맞춘 학습, 고객 데이터를 전혀 섭취하지 않아 유출이 불가능한 구조, 같은 작업을 더 적은 토큰으로 처리하는 비용 절감, AI 게이트웨이를 통한 자동 라우팅 등이다.

Salesforce AI의 제이예시 고빈다라잔(Jayesh Govindarajan) EVP는 "그동안 추론은 프런티어 모델 제공사에 의존했다"며 "Nemotron 이전에는 이용 가능하고, 최신 성능이며, 데이터 출처가 명확한 미국의 주권 기반 사전학습 모델이 없었다"고 설명했다. Nvidia의 카리 앤 브리스키(Kari Ann Briski) VP는 "주권 AI, 첫 토큰까지의 시간, 효율적 추론의 트리펙타"라고 말했다.

학습 데이터로는 실제 고객 데이터를 쓰지 않고, 화가 난 고객부터 딜을 마감하려는 영업사원까지 페르소나를 시뮬레이션한 합성 데이터를 만들었다. Koa는 Agentforce 플랫폼에서 기존 모델들의 대안으로 제공된다. 한편 Salesforce는 데이터를 자사 시스템에 둔 채 Claude를 AI 인터페이스로 쓰는 'Claudeforce' 파트너십도 함께 발표해, 완전한 디커플링이 아닌 모델 포트폴리오 전략임을 보여줬다.

## 왜 중요한가?
에이전트를 파는 기업소프트웨어 회사가 '추론'까지 자체 모델로 가져온 것은 프런티어 랩 의존을 줄이려는 엔터프라이즈의 움직임이 본격화됐다는 뜻이다. 오픈웨이트 기반 + 업무 특화 + 고객 데이터 비사용이라는 조합은 비용과 규제에 민감한 기업 고객에게 직접적인 어필이 된다.

## 심층 분석

### 기술 의미
Nemotron 같은 오픈웨이트 모델이 '주권·데이터 출처 명확성'을 이유로 상용 후보가 되는 흐름을 보여준다. 고객 데이터 미사용 제약 아래 합성 페르소나 데이터로 도메인 포스트트레이닝을 한다는 접근은 엔터프라이즈의 표준 해법이 될 수 있다 (→ 분석). Nvidia 측이 추론 효율을 아키텍처 차원의 특징으로 내세운 것은 엔터프라이즈 추론의 경쟁 축이 순수 품질에서 '토크노믹스(토큰 경제성)'로 이동하고 있음을 시사한다.

### 업계 영향
Agentforce 같은 에이전트 플랫폼이 자체 모델과 게이트웨이 라우팅을 갖추면, 프런티어 모델은 '예외적으로 어려운 요청'만 받는 수요 분층이 진행될 수 있다 (→ 분석). 고빈다라잔이 알리바바 Qwen의 학습 데이터 출처에 대한 우려를 공개적으로 언급한 것은 오픈웨이트 채택 기준이 '성능'에서 '출처·컴플라이언스'로 확장되고 있음을 드러낸다. 동시에 Claudeforce 발표는 랩 의존 탈피가 아니라 모델 포트폴리오 관리 전략임을 보여준다.

### 관련 프로젝트
- Salesforce Koa: http://salesforce.com/koa
- Claudeforce 파트너십: https://www.salesforce.com/claudeforce/

### 관련 뉴스
- [Garry Tan 오픈웨이트 증류 논쟁](../records/2026-09-12-garry-tan-open-weight-distillation.md) — 오픈웨이트 생태계를 둘러싼 산업 논쟁
- [Cognition SWE-2 코딩 모델](../records/2026-09-14-cognition-swe-2-coding-model.md) — 특화 작업형 자체 모델의 다른 사례

## 원문 발췌
> "Koa is the company's first reasoning model, built on Nvidia's open-weight Nemotron model. The two companies worked together to post-train Koa to excel at sales, marketing, and customer-support-related tasks."
>
> "Until Nemotron came along, there was no sovereign American pre-trained model that was available, one, and two, that was state of the art, and, three, that had clear data provenance," Govindarajan said.
>
> "It's kind of the trifecta of things that you need to have: sovereign AI, time to first token, efficient reasoning, for the tokenomics of it all," Kari Ann Briski, Nvidia's VP of Generative AI Software for Enterprise, told TechCrunch.

## 수집 노트
- **선정 이유**: major-media의 심층 보도에 Salesforce·Nvidia 양사 관계자의 확인 발언까지 갖춘 모델 발표로, '오픈웨이트 기반 엔터프라이즈 추론 모델'이라는 흐름을 대표하기 때문.
- **중요도 산정**: 기본 1 + major-media +1 + 교차 확인 2개(TechCrunch 보도, 양사 관계자 확인 발언) +1 + 커뮤니티 반응 미관측 +0 = 3.
- **제외 후보**: "Profound $180M Series D 유니콘 달성 (TechCrunch)" — 투자 소식으로 에이전트 기술 관련성이 낮음. "AI 데이터센터와 산업 도시의 갈등 / 2035년 천연가스 소비 전망 (TechCrunch 2건)" — 인프라·정책 이슈로 이번 탐색 주제(모델·도구)에서 제외.
