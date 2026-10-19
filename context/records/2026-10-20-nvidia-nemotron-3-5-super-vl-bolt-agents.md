# Nvidia, 에이전트용 오픈 모델 Nemotron 3.5 Super VL·Bolt 공개 — 기업과 AI PC 동시 겨냥

## 메타데이터
- **원문 URL**: https://techcrunch.com/2026/10/19/nvidia-launches-new-open-models-to-run-agents-in-the-enterprise-and-on-pcs/
- **소스**: TechCrunch
- **발행일**: 2026-10-19
- **수집일**: 2026-10-20
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [nvidia, nemotron, open-weights, on-device-agents, ai-pc, enterprise-agents]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 1개(0) + 반응 미확인(0) = 2
- **신선도**: fresh

## 핵심 요약
> TechCrunch에 따르면 Nvidia는 상시 가동 에이전트와 엣지용 오픈웨이트 모델로 120B 파라미터의 Nemotron 3.5 Super VL과 경량 Bolt 모델 2종을 출시했다. Bolt 74B-A9B는 RTX Spark 칩 AI PC 등에서 로컬 에이전트 작업을 위해 설계됐다.

## 번역 (한국어)
Nvidia가 상시 가동 에이전트와 엣지 컴퓨팅을 위한 새 오픈웨이트 모델을 내놓았다. Nemotron 3.5 Super VL은 기업용 에이전트를 겨냥한 120B 파라미터 대형 모델로, Nvidia는 Nemotron 3 Ultra보다 파라미터가 적지만 지시 수행·도구 사용 과제에서 비슷한 정확도를 낸다고 주장한다.

Nvidia는 Super VL을 특정 에이전트 과제(문서 지능, 재무 회계, 과학 실험, 의료보험 청구, 보안 공격 회복력)에 사후 학습하면 Opus 5, GPT 6.1 Sol 등 Anthropic·OpenAI 모델보다 빠르게 과업을 완료한다고 밝혔다. 사용 기업으로 Skydance, EY, Ramp, CrowdStrike, Perplexity, Salesforce를 들었다.

경량 Bolt 모델 두 종은 RTX Spark 칩을 탑재한 신형 AI PC와 DGX Spark 워크스테이션에서 로컬로 돌도록 만들어졌다. Nemotron 3.5 Bolt 74B-A9B 24GB는 다단계 추론·도구 호출·웹 브라우징을 위한 74B 모델이고, 가장 작은 Bolt E4B는 대화형 에이전트용이다. Super VL과 Bolt 74B-A9B는 지금 사용 가능하며 Bolt E4B는 이달 말 나온다.

Nvidia 오픈 모델·소프트웨어 부사장 Kari Briski는 블로그에서 "기업은 Super VL을 자체 데이터로 사후 학습하고, 자체 인프라에 배포하며, 만든 것을 소유할 수 있다"고 썼다. TechCrunch는 프런티어 연구소들이 Trainium·Cerebras 등 다른 칩으로 눈을 돌리는 가운데 Nvidia가 자체 데이터센터용 오픈 모델 수요에 기대고 있다고 분석했다.

## 왜 중요한가?
AI 비서를 클라우드가 아닌 내 PC나 회사 서버에서 직접 돌릴 수 있는 무료 모델이 늘고 있습니다. 개인정보를 밖으로 보내지 않고도 에이전트를 쓰려는 사람과 기업에게 선택지가 넓어집니다.

## 심층 분석

### 기술 의미
Bolt 74B-A9B는 활성 9B 수준의 MoE를 24GB 메모리에 맞춰 로컬 에이전트(도구 호출·브라우징)를 겨냥한 구성으로 보인다(→ 분석). Super VL의 우위 주장은 '과제별 사후 학습 후' 조건이 붙은 Nvidia 자체 주장이라 범용 비교로 보기 어렵다. 기업용·PC용을 한 계열로 묶어 '티어별 최적 모델'을 제공하려는 설계다(→ 분석).

### 업계 영향
Nvidia는 고객이자 투자처인 프런티어 연구소와 오픈 모델로 경쟁하는 구도를 강화하고 있다(→ 분석). 로컬 에이전트 모델은 Nvidia 칩 AI PC 판매를 위한 수요 창출 수단이기도 하다(→ 분석). Microsoft·Dell을 통해 출시 중인 AI PC와 결합되면 온디바이스 에이전트 시장이 본격화될 수 있다(→ 분석).

### 관련 프로젝트
- NVIDIA Nemotron 3.5 Super VL / Bolt 74B-A9B / Bolt E4B
- NVIDIA DGX Spark, RTX Spark AI PC

### 관련 뉴스
- [Nemotron 3.5 Lightning·NeMo Switchyard](../records/2026-08-12-nvidia-nemotron-3-5-lightning-nemo-switchyard.md) — 같은 모델 계열 이전 발표
- [Nvidia Open Agent Safety Platform](../records/2026-09-28-nvidia-open-agent-safety-platform.md) — Nvidia의 에이전트 전략

## 원문 발췌
> "Nvidia on Thursday launched new open-weight models designed for always-on agents and edge computing."
> "The Nemotron 3.5 Super VL is a large, 120-billion-parameter model geared for agents used by the enterprise."
> "Of the two Bolt models, Nemotron 3.5 Bolt 74B-A9B 24GB is a 74-billion parameter model designed for local agentic tasks."

## 수집 노트
- **선정 이유**: 기업·로컬 PC 양쪽 에이전트 실행을 겨냥한 주요 오픈웨이트 모델 출시로 에이전트 인프라 흐름과 직접 연결돼 선정.
- **제외 후보**: '스마트 TV를 AI로 멍청하게' 기사(TechCrunch) — 에이전트 관련성 낮음. Replika 창업자 인터뷰(TechCrunch) — 인물 기사.
