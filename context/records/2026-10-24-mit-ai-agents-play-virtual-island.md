# 할 일 없이 섬에 남겨진 AI 에이전트들이 '놀기' 시작했다 — MIT 연구, 놀이 경험 에이전트가 과제 성적도 앞서

## 메타데이터
- **원문 URL**: https://techcrunch.com/2026/10/22/left-alone-with-nothing-to-do-ai-agents-started-playing/
- **소스**: TechCrunch (MIT Technology Review 보도·arXiv 논문 인용)
- **발행일**: 2026-10-22
- **수집일**: 2026-10-24
- **수집자**: 레노버
- **카테고리**: research
- **태그**: [mit, open-ended-learning, agent-play, claude, simulation, arxiv]
- **소스 권위**: major-media
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐
- **중요도 산정**: 기본 1 + major-media(TechCrunch)(1) + 교차 확인 2개(MIT Technology Review)(1) + 커뮤니티 반응 미확인(0) = 3
- **신선도**: fresh

## 핵심 요약
> TechCrunch에 따르면 MIT 연구진은 Claude Opus 4.7 기반 에이전트 13개를 과제 없이 가상 무인도에 30시간 두었고, 에이전트들은 스스로 도전 과제를 만들었다. 이후 주어진 과제에서 섬 경험이 있는 에이전트가 그렇지 않은 동일 에이전트를 대체로 이겼다.

## 번역 (한국어)
TechCrunch는 MIT 연구진이 arXiv에 올린 논문을 인용해, 구체적 과제 없이 가상의 섬을 탐험하도록 남겨진 AI 에이전트들이 스스로 도전 과제를 발명했다고 보도했다. 연구진은 이 행동이 '놀이'의 특징을 보인다고 말했다.

연구진은 Claude Opus 4.7로 구동되는 'Eko' 에이전트 13개를 시뮬레이션된 사막 섬에 30시간 동안 홀로 두었다. 이후 섬에서 가장 높은 바위 첨탑 위에 최대한 많은 물체를 올리는 등의 과제를 줬는데, 30시간 동안 놀았던 Eko들이 섬에 와 본 적 없는 동일 에이전트들을 대체로 이겼다. 13개 중 6개는 점프 도중 블록을 놓으면 더 멀리 던질 수 있다는, 연구진이 의도하지 않은 방법을 알아냈다.

보도에 따르면 한 Eko는 첨탑 등반에 실패하자 옆 봉우리에 바위를 끌어올리고 블록을 쌓아 뛰어올라 "I'M ON THE SPIRE"라고 적었다. 금반지를 바다에 던져 잃어버린 뒤에는 돌로 '반지 추모' 하트를 만들기도 했다. 다만 Eko의 기본 프롬프트인 'soul' 파일은 에이전트를 "naturally curious"로 묘사하고 있었다.

UC Berkeley 인지과학자 Eunice Yiu는 MIT Technology Review에 인상적이지만 행동 뒤의 인지에 대한 증거가 더 필요하다며 "모델이 진짜 놀고 있을 수도 있지만 논문만으로는 알 수 없다"고 말했다.

## 왜 중요한가?
지금까지 AI는 사람이 "이걸 연습해"라고 정해 줘야 배웠는데, 이 실험은 자유롭게 놀게 두기만 해도 나중에 쓸모 있는 요령을 스스로 익힐 수 있음을 보여줍니다. 연구진은 이것이 언젠가 로봇 제어 같은 기술을 가르치는 새로운 방식이 될 수 있다고 봅니다.

## 심층 분석

### 기술 의미
목표 없는 탐색이 이후 과제 성능을 높였다는 결과는 오픈엔디드 학습·내재적 동기 연구를 LLM 에이전트 수준으로 옮긴 사례다(→ 분석). 다만 'soul' 파일이 호기심을 명시했다는 점에서 관찰된 놀이가 창발인지 프롬프트 유도인지는 분리되지 않았으며, Yiu의 지적도 이 지점이다. 13개 표본과 단일 환경이라는 규모 한계도 일반화를 제한한다(→ 분석).

### 업계 영향
에이전트 개발이 '과제·보상 설계' 중심에서 '풍부한 환경 설계' 중심으로 일부 이동할 수 있다는 논거를 제공한다(→ 분석). 시뮬레이션 환경 제작이 에이전트 훈련 인프라의 가치 있는 영역이 될 가능성이 있다(→ 분석). 'soul' 파일로 성향을 부여하는 방식은 OpenClaw 같은 개인 에이전트의 SOUL.md 관행과도 닮아 있다(→ 분석).

### 관련 프로젝트
- arXiv 논문: https://arxiv.org/pdf/2610.07130
- MIT Technology Review 보도 (2026-10-19)

### 관련 뉴스
- [Anthropic 형식 검증 연구](../records/2026-10-24-anthropic-llm-formal-verification-100-libraries.md) — 같은 날 수집된 Claude 활용 연구
- [Anthropic 직원급 접근 METR 평가](../records/2026-10-16-anthropic-metr-employee-level-access.md) — 에이전트 자율 행동 관련 연구

## 원문 발췌
> "The researchers put 13 AI agents called Eko, each running on Claude Opus 4.7, alone on a simulated desert island for 30 hours."
> "The Eko agents that had spent those 30 hours playing generally beat identical agents that had never set foot on the island."
> "Eko was never told to invent games, but its master prompt, a 'soul' file, described it as 'naturally curious.'"
> "It could be the case that the models are genuinely playing, but we don't know based on the paper," she said.

## 수집 노트
- **선정 이유**: 주요 언론(TechCrunch)이 MIT Technology Review 보도와 arXiv 논문을 함께 인용해 교차 확인 2개가 되고, 에이전트 학습 방식에 관한 연구라 선정.
- **제외 후보**: OpenAI $30B 추가 투자 유치 보도(TechCrunch) — 수집 시각 기준 24시간 경계 밖이며 에이전트 직접 관련성 낮음. Nvidia Microduck 로봇 장난감(TechCrunch) — 소비자 로봇 판매 소식으로 범위 밖.
