# vLLM Semantic Router, 오픈 결정 모델 'Decision 3.0' 공개 — 0.8B~27B 5종, 이미지 입력 지원

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/10/11/what-is-decision-3-0-vllm-semantic-routers-new-open-decision-models/
- **소스**: MarkTechPost
- **발행일**: 2026-10-11
- **수집일**: 2026-10-12
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [vllm, semantic-router, decision-model, open-weights, apache-2-0, multimodal, qwen]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 1개(0) + 반응 규모 미관찰(0) = 2
- **신선도**: fresh

## 핵심 요약
> MarkTechPost에 따르면 vLLM Semantic Router 팀이 텍스트·JSON·이미지를 읽고 타입이 정해진 질문에 확률로 답하는 오픈 결정 모델 Decision 3.0을 0.8B~27B 5개 크기, Apache-2.0 라이선스로 공개했다. 팀 내부 평가 기준 27B d3는 텍스트 64.1, 비전 71.6으로 각 표에서 1위였다.

## 번역 (한국어)
vLLM Semantic Router 팀이 멀티모달 결정 모델 제품군 Decision 3.0을 공개했다. 이 모델들은 텍스트·JSON·이미지를 입력받아, 선택형·예/아니오·점수형으로 정의된 질문에 텍스트 대신 각 답의 확률을 돌려준다. 크기는 d3-lite(0.85B), d3-nano(2.21B), d3-mini(4.54B), d3-flash(8.39B), d3(26.09B) 5종이며 모두 Apache-2.0이다.

모든 모델은 Qwen 기반 파인튜닝으로, 27B d3는 Qwen3.8-27B, 나머지 4종은 Qwen3.5 체크포인트를 기반으로 한다. 크기마다 비전 인코더가 붙어 있으며 요청당 여러 장의 PNG·JPEG·WebP 이미지를 받는다. 질문 하나당 입력에 대해 별도의 forward pass를 수행한다.

모델 카드에 실린 Jev Decision Index 0.3.1 기준(팀 내부 평가)으로 d3는 텍스트 64.1점으로 Perplexity Decider v1.1(62.8), Jev(60.1)를 앞섰고, 비전 보드에서는 71.6점으로 Perplexity Decider v1.1(70.6)을 앞섰다. 다만 공개 스위트 점수에서는 Torchcast Decision 27B가 더 높았다(65.1 대 64.9).

MarkTechPost가 가장 강한 대목으로 꼽은 것은 크기 대비 성능이다. 9B d3-flash가 59.0점으로 이전 세대 Decision 2.0 27B(55.9)를 넘어섰다. 반면 0.8B·2B 모델은 모든 표에서 1위를 차지하지는 못했다. 지연 시간은 AMD Instinct MI325X 1장 기준 텍스트 중앙값 21.7~84ms였다.

## 왜 중요한가?
AI 에이전트가 "이 요청을 어디로 보낼까, 통과시켜도 될까" 같은 작은 판단을 내리는 전용 부품이 무료 오픈 모델로 풀렸습니다. 지난주 Microsoft·OpenAI 등이 유료로 내놓은 결정 모델과 비슷한 기능을 누구나 자기 서버에서 쓸 수 있게 된 셈입니다.

## 심층 분석

### 기술 의미
결정 모델이 텍스트 전용에서 이미지 입력까지 확장되면서, 스크린샷이나 문서 이미지를 보고 에이전트 행동을 게이팅하는 용도가 열린다(→ 분석). 질문마다 별도 forward pass를 돌리는 구조는 질문 수에 비례해 비용이 늘어나는 트레이드오프를 갖는다(→ 분석). 9B가 이전 27B를 넘었다는 결과는 결정 전용 후속 학습의 효율이 빠르게 개선되고 있음을 시사하지만, 수치는 팀 자체 평가다.

### 업계 영향
Jev, OpenAI Decisions API, Microsoft-Decision-1, Nace Drex에 이어 오픈소스 라우터 진영까지 결정 모델을 내놓으면서 이 범주의 가격 압력이 커질 수 있다(→ 분석). vLLM 생태계 안에서 배포되는 만큼 자체 호스팅 사용자의 진입 장벽이 낮다(→ 분석). MarkTechPost는 점수가 라이브 보드 데이터 대비 자체 보고된 것이라는 점을 약점으로 지적했다.

### 관련 프로젝트
- vLLM Semantic Router GitHub: https://github.com/vllm-project/semantic-router

### 관련 뉴스
- [Microsoft-Decision-1](../records/2026-10-10-microsoft-decision-1-fast-decision-model.md) — 빅테크의 결정 모델 진입
- [Nace AI Drex 1.5](../records/2026-10-10-nace-ai-drex-1-5-open-decision-model.md) — 또 다른 오픈 결정 모델

## 원문 발췌
> "The vLLM Semantic Router team has released Decision 3.0, a family of multimodal decision models."
> "There are 5 sizes, from 0.8B to 27B, all under Apache-2.0."
> "On text, d3 scores 64.1, ahead of Perplexity Decider v1.1 (62.8) and Jev (60.1)."
> "d3-flash (9B) scores 59.0, above Decision 2.0's 27B at 55.9."

## 수집 노트
- **선정 이유**: 최근 아카이브한 결정 모델 흐름의 연장선이며, Apache-2.0 오픈 웨이트에 이미지 입력까지 더한 첫 사례라 선정 (소스는 major-media 1건).
- **제외 후보**: Sakana AI LLM 피어리뷰 시스템 — 발행 시각이 24시간 범위 밖. Karpathy 트윗(HN) — 본문 확보 불가한 커뮤니티 단일 소스.
