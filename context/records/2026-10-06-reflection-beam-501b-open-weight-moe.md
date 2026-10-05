# Reflection AI, 첫 오픈웨이트 모델 'Beam' 공개 — 501B MoE, 활성 23B

## 메타데이터
- **원문 URL**: https://reflection.ai/blog/introducing-beam
- **소스**: Reflection AI 공식 블로그 (TechCrunch·MarkTechPost 보도, HN 50pt+ 피드 진입)
- **발행일**: 2026-10-05
- **수집일**: 2026-10-06
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [reflection-ai, beam, open-weight, moe, reinforcement-learning, coding-agent]
- **소스 권위**: official
- **교차 확인**: 3
- **중요도**: ⭐⭐⭐⭐⭐
- **신선도**: fresh
- **중요도 산정**: 기본 1 + official 2 + 교차 확인 3개(Reflection 공식, TechCrunch, MarkTechPost) 2 + 반응 규모 HN 100pt 미확인 0 = 5

## 핵심 요약
> Reflection AI는 첫 오픈웨이트 모델 Beam을 공개했다. 총 501B·활성 23B 파라미터의 희소 MoE 모델로 코딩·추론·에이전트 작업용이며, 고급 추론 벤치마크에서 GLM-5.2와 비슷한 점수를 3~4배 적은 추론 연산으로 낸다고 회사는 주장한다. 가중치·기술 보고서는 이달 중 공개 예정이다.

## 번역 (한국어)
Reflection AI는 자사 최초의 오픈웨이트 모델 Beam을 발표했다. Beam은 총 5,010억 파라미터 중 230억 개가 활성화되는 희소 전문가 혼합(MoE) 모델로, 코딩·추론·에이전트 워크로드를 위해 만들어졌다. 회사는 웹과 라이선스 데이터셋에서 고른 23.8조 토큰으로 사전학습했다고 밝혔다.

강화학습(RL)에 대규모 연산을 투입한 것이 핵심이다. Reflection에 따르면 NVIDIA GB300 GPU 1만 500개로 4주 동안 1억 건 이상의 롤아웃을 생성했고, 학습·채점에 약 13억 개의 샌드박스를 썼으며, 100만 개의 코딩·에이전트·STEM 환경을 확보했다. 회사는 RL 연산을 늘릴수록 성능이 정체 없이 계속 올랐다고 설명했다.

회사가 공개한 벤치마크에서 Beam은 SWE-Bench Verified 80.9, Terminal Bench v2.1 80.1, GPQA Diamond 90.5를 기록했다. Reflection은 Beam이 GLM 5.2 같은 더 큰 오픈 모델과 경쟁하고 코딩·에이전트 작업에서 Qwen 3.8-Max에 근접하지만, Kimi K3 같은 최상위 오픈 모델은 순수 성능에서 여전히 앞선다고 인정했다. Beam의 강점은 추론 시점 효율이라는 것이다.

TechCrunch는 Beam이 1M 토큰 컨텍스트 창을 지닌 텍스트 전용 모델이며, 성능 주장은 아직 독립 검증되지 않았다고 보도했다. 같은 보도에 따르면 Reflection은 2024년 전 Google DeepMind 연구자 두 명이 설립했고, PitchBook 기준 약 47억 달러를 유치했다. Reflection은 가중치와 기술 세부사항을 이달 중 공개하고 하이퍼스케일러·네오클라우드를 통해 배포할 계획이다.

## 왜 중요한가?
미국 스타트업이 중국산 오픈 모델(DeepSeek·Qwen·GLM)에 맞설 '서방형 오픈 모델'을 내놓은 것입니다. 성능은 비슷하게 유지하면서 돌리는 비용을 3~4배 줄였다고 주장해, 기업이 자체 서버에서 AI 에이전트를 운영하는 비용이 더 낮아질 수 있습니다.

## 심층 분석

### 기술 의미
Reflection의 발표는 사전학습보다 RL 연산 규모를 핵심 성능 축으로 삼은 사례다. 하루 이상 지난 롤아웃(107개 가중치 버전 차이)으로도 안정적으로 학습했다는 비동기 RL 기법 주장은, 사실이라면 대규모 에이전트 RL의 병목을 푸는 기술이다(→ 분석). 활성 파라미터 23B로 GLM-5.2(활성 약 40B, TechCrunch 기준)와 맞먹는다는 주장은 '토큰당 지능' 효율 경쟁이 오픈 모델의 새 전선임을 보여준다(→ 분석).

### 업계 영향
Beam은 Thinking Machines의 Inkling에 이은 미국 오픈웨이트 대형 모델로, 중국 랩이 주도해 온 오픈 모델 시장에 서방 대안을 추가한다(→ 분석). Reflection이 내세운 'AI 팩토리'(기관이 자체 데이터로 모델을 재학습해 로컬 운영) 구상은 신세계그룹과의 소버린 AI 시험 협력처럼 한국 기업과도 연결돼 있다. 다만 벤치마크가 자체 발표이고 가중치가 아직 공개되지 않았으므로, 실제 평가는 이달 말 공개 이후에 가능하다.

### 관련 프로젝트
- Reflection AI Beam 얼리 액세스 신청 (reflection.ai)
- Thinking Machines Lab Inkling (경쟁 미국 오픈 모델)
- Z.ai GLM-5.2 / Alibaba Qwen 3.8-Max / Moonshot Kimi K3 (비교 대상)

### 관련 뉴스
- [GLM-5.3 오픈웨이트 공개](../records/2026-08-28-glm-5-3-openweight.md) — 비교 대상 중국 오픈 모델
- [Kimi K3·Qwen 3.8 중국 오픈소스 AI](../records/2026-07-23-china-kimi-k3-qwen3-8-open-source-ai.md) — 중국 오픈 모델 경쟁 구도
- [DeepSeek Harness v0.2 데스크톱 앱](../records/2026-10-05-deepseek-harness-v0-2-desktop-app.md) — 오픈 에이전트 생태계

## 원문 발췌
> "Beam is a sparse Mixture-of-Experts model with 501 billion total parameters, 23 billion active, built for coding, reasoning, and agentic workloads."
> "On advanced reasoning benchmarks, it achieves scores comparable to GLM-5.2 while using 3–4× less inference compute."
> "Our high-compute RL run generated over 100 million rollouts on 10.5K NVIDIA GB300 GPUs over 4 weeks of training."
> "We will release the weights, technical report, model card, and developer artifacts later this month."

## 수집 노트
- **선정 이유**: 공식 발표에 TechCrunch·MarkTechPost가 같은 날 교차 보도하고 HN 피드에도 올라, 이번 탐색 후보 중 산정 점수가 가장 높음.
- **제외 후보**: MarkTechPost 'Beam' 별도 기사 — 같은 발표의 재보도라 교차 확인으로만 반영. Aleph Alpha Kolibri 78.1B(MarkTechPost) — 10월 4일 게시로 24시간 범위 밖.
