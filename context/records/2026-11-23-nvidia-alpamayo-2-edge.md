# NVIDIA, 차량용 2B 추론 VLA 'Alpamayo 2 Edge' 공개

## 메타데이터
- **원문 URL**: https://huggingface.co/nvidia/Alpamayo2-Edge
- **소스**: Hugging Face 공식 모델 카드 (marktechpost 보도)
- **발행일**: 2026-11-10 (HF 게시) / 보도 2026-11-22
- **수집일**: 2026-11-23
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [nvidia, vla, autonomous-driving, robotics, open-weights]
- **소스 권위**: official
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> NVIDIA가 2B 파라미터 추론형 비전-언어-행동(VLA) 모델 Alpamayo 2 Edge를 공개했다. 6대 카메라 영상으로 주행 계획과 인과 설명을 생성하며 DRIVE AGX Thor 차량 탑재용이다.

## 번역 (한국어)
Alpamayo 2 Edge는 적응적 추론으로 주행 궤적과 인과적 설명을 생성하는 2B 파라미터급 VLA 모델이다. NVIDIA Cosmos 3 Edge의 Nemotron 기반 백본 위에 확산 기반 행동 디코더를 얹은 구조로, NVIDIA DRIVE AGX Thor 상의 차량 내 효율 배포와 파인튜닝을 지원한다.

백본은 총 2.45B 파라미터(언어모델 1.96B, SigLIP2 비전 인코더 0.41B, 프로젝터 0.08B)이고 행동 전문가(expert)가 0.2B다. 궤적 예측 시 6개 카메라·관측당 22프레임과 내비게이션 지시문, 0.1초 간격 20개 자세 이력을 입력받는다.

모델 가중치는 OpenMDW-1.1 라이선스로, 소스코드는 Apache 2.0으로 공개되었다. 배포 지역은 전 세계다. marktechpost 보도에 따르면 폐루프 강화학습 사후학습을 AlpaGym 시뮬레이터에서 수행하며, 6.4초짜리 주행 계획을 만들어낸다.

## 왜 중요한가?
자율주행의 두뇌가 클라우드 초대형 모델에서 차량 안에 들어가는 소형 추론 모델로 옮겨오고 있음을 보여준다. 가중치가 개방 라이선스로 공개되어 연구자·후방 개발사가 직접 파인튜닝할 수 있다는 점에서 자율주행 AI 진입장벽이 낮아진다.

## 심층 분석

### 기술 의미
VLA 구조를 로봇에서 자율주행으로 확장하며, 궤적 생성과 자유형 질의응답·인과 설명을 한 모델에서 처리한다. 2.45B 백본 + 0.2B 행동 전문가라는 경량 구성은 차량용 칩(Thor)의 전력·연산 예산에 맞춘 설계로 읽힌다. (→ 분석)

### 업계 영향
NVIDIA가 칩(DRIVE Thor)과 모델·시뮬레이터(AlpaGym)·레시피를 한데 묶는 플랫폼 전략을 이어간다. 개방 가중치 공개는 테슬라 등 폐쇄형 스택과의 대비를 만든다. (→ 분석) 국내 자율주행·로봇 업계의 파인튜닝 출발점으로 활용 가능성이 있다.

### 관련 프로젝트
- 모델: https://huggingface.co/nvidia/Alpamayo2-Edge
- 코드: https://github.com/NVlabs/alpamayo2-edge
- 알파짐: https://github.com/NVlabs/alpagym

### 관련 뉴스
- [OpenAI 퍼플렉시티 제안](../records/2026-11-23-openai-perplexity-pacing-metric.md) — AI 진척도 측정 논의
- [NVIDIA VLA 모델 공개](../records/2026-11-23-nvidia-alpamayo-2-edge.md) — 본 기사

## 원문 발췌
> "NVIDIA Alpamayo 2 Edge is a 2B-parameter reasoning vision-language-action model that uses adaptive reasoning to generate driving trajectories and causal explanations."
> "Model weights: The model weights are released under the OpenMDW-1.1 license. Source code: Apache License 2.0."

## 수집 노트
- **선정 이유**: 공식 모델 카드 + 전문매체 보도 교차 확인. 개방 가중치 차량용 VLA라는 구체적 공개.
- **제외 후보**: HN "Show HN: LLM subagent 게임" — 커뮤니티 위주, 산업 영향 제한.
