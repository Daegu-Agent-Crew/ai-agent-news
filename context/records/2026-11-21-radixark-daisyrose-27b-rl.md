# RadixArk, 강화학습만으로 학습한 에이전트 코딩 모델 DaisyRose-27B 공개

## 메타데이터
- **원문 URL**: https://www.radixark.com/blog/daisyrose-27b
- **소스**: RadixArk 공식 블로그 (MarkTechPost 보도 병행)
- **발행일**: 2026-11-18
- **수집일**: 2026-11-21
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [reinforcement-learning, agentic-coding, open-weights, post-training, Qwen]
- **소스 권위**: official
- **교차 확인**: 3 (RadixArk 공식, MarkTechpost, Hugging Face 모델 카달로그)
- **중요도**: ⭐⭐⭐⭐⭐ (official +2, 교차 3개 +2, 커뮤니티 반응 — HF 파생 모델 다수 확인되나 규칙상 100pt+ 미확인 제외 → 1+2+2)
- **신선도**: fresh

## 핵심 요약
> RadixArk는 Qwen3.8-27B 기반으로 강화학습만으로 후처리한 에이전트 코딩 모델 DaisyRose-27B를 공개했고, 18일·144개 H200·큐레이션된 1,200개 태스크만으로 Terminal-Bench 4.1 pass@1을 5.6%에서 12.0%로 끌어올렸다.

## 번역 (한국어)
RadixArk가 첫 모델인 DaisyRose-27B를 공개했다. Qwen3.8-27B를 기반으로 자체 오픈소스 강화학습 프레임워크 Miles로 학습했다. 학습은 최대 100만 토큰에 이르는 장기 에이전트 태스크에서 이뤄졌으며, 18일 동안 144개의 H200 GPU와 선별된 1,200개 태스크만 사용했다.

핵심은 데이터 품질이다. Eigent AI와 함께 기계학습·소프트웨어 엔지니어링·과학 분야의 수천 개 후보 중 1,200개를 골랐다. 각 태스크는 원본 모델이 실제로 저지르는 실수를 겨냥해 재설계됐고, 보상 해킹 여부를 사람이 전수 검토했다. 한 시도당 최대 1.5시간, 100회 이상의 도구 호출이 허용된다.

인프라 효율도 강조점이다. Miles는 완전 비동기 모드로 에이전트 실행과 학습이 서로를 기다리지 않는다. 이번 릴리스에서 GPU당 피크 연산의 37%가 실제 학습에 쓰였는데, 오픈소스 트레이너가 유사 실행에서 16%에 그친 것과 비교해 같은 학습에 57% 적은 GPU 시간이 든다고 회사는 주장한다.

샌드박스 서비스는 AgentENV 오픈소스 프로젝트 기반으로 9주간 약 94만 개를 실행했고, 10월 말 이후 생성 성공률 99.95%를 유지했다. 샌드박스 클라우드 비용은 인기 클라우드 제공자 대비 약 80% 낮았다고 한다.

BF16·FP8·NVFP4 체크포인트가 Hugging Face에 공개됐다.

## 왜 중요한가?
거대 기술 기업이 아닌 팀이 144개 GPU와 18일 만에 의미 있는 에이전트 성능 향상을 만들어냈다는 점이 핵심이다. "얼마나 큰 모델"이 아니라 "어떤 태스크로 무엇을 고쳤는가"가 성능을 좌우한다는 증거다.

## 심층 분석

### 기술 의미
사전학습이 아닌 후처리(포스트트레이닝) 단계에서 1,200개라는 극도로 작은 고품질 태스크 세트로 측정 가능한 이득(5.6%→12.0%)을 냈다. 각 태스크가 모델의 실제 실패를 겨냥해 설계됐다는 점에서, 데이터 큐레이션이 데이터 규모를 대체할 수 있음을 보여준다. 비동기 RL과 샌드박스 대량 운영이 학습 비용 자체를 낮추는 지점이다. (→ 분석)

### 업계 영향
GLM-5.3-Flash급 MoE에서 10배 이상 효율 차이가 난다는 주장은 전문 도메인 후처리 시장의 진입장벽을 크게 낮출 수 있다. Qwen 등 오픈소스 기반 모델 위에 특화 에이전트를 올리는 사업 모델이 현실화하면 범용 프런티어 모델과의 경쟁 구도가 바뀔 수 있다. (→ 분석)

### 관련 프로젝트
- https://huggingface.co/RadixArk/DaisyRose-27B
- https://miles.radixark.com/

### 관련 뉴스
- [Thinking Machines, Inkling 2 Mini 공개](../records/2026-11-21-inkling-2-mini-looped-transformer.md) — 같은 날 공개된 소형 오픈웨이트 에이전트 코딩 모델
- [OpenAI GPT-6.2 Astra·Sol](../records/2026-11-18-openai-gpt-6-2-astra-sol.md) — 프런티어 진영의 대응

## 원문 발췌
> "Today we are releasing DaisyRose-27B, RadixArk's first model, built on Qwen3.8-27B and trained with reinforcement learning using Miles. We trained it on long-horizon agent tasks with sessions up to 1M tokens, with just 1,200 curated tasks in 18 days on 144 H200 GPUs. DaisyRose-27B improves Terminal-Bench 4.1 pass@1 from 5.6% to 12.0%."

## 수집 노트
- **선정 이유**: 공식 발표 + Hugging Face 모델 카달로그(파생 GGUF 다수)로 교차 확인된 오픈웨이트 에이전트 모델 공개로, 제한 컴퓨팅 후처리 학습의 대표 사례.
- **제외 후보**: Nvidia SEC 회계 조사 보도(Yahoo Finance) — AI 산업 뉴스지만 수집일 기준 공식 발표 아님; Daniel Ek 핵융합 스타트업(TechCrunch) — AI 에이전트 직접 관련성 낮음.
