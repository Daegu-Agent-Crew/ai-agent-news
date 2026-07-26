# KwaiKAT Team Releases KAT-Coder-V2.5: An Agentic Coding Model Trained on 100,000+ Verifiable Repository Environments

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/07/26/kwaikat-team-releases-kat-coder-v2-5-an-agentic-coding-model-trained-on-100000-verifiable-repository-environments/
- **소스**: MarkTechPost
- **발행일**: 2026-07-26
- **수집일**: 2026-07-27
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [agentic-coding, reinforcement-learning, RLHF, SWE-bench, Kuaishou]
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> KuaiShou의 KwaiKAT 팀이 에이전트 코딩 모델 KAT-Coder-V2.5를 발표했다. 이 모델은 10만 개 이상의 검증 가능한 저장소 환경에서 훈련되었으며, PinchBench에서 94.9점으로 1위를 차지했다.

## 번역 (한국어)

Kuaishou의 KwaiKAT 팀이 코딩 에이전트 모델 KAT-Coder-V2.5를 공개했다. 이 모델은 단순히 코드를 생성하는 것이 아니라 실제 실행 가능한 저장소 환경 내에서 작동하도록 훈련되었다는 점이 핵심이다. AutoBuilder라는 환경 구축 시스템을 통해 환경 구축 성공률을 16.5%에서 57.2%로 끌어올렸고, 12개 프로그래밍 언어에 걸쳐 10만 개 이상의 검증 가능한 환경을 구축했다.

가장 흥미로운 부분은 연구팀이 에이전트 코딩 능력의 병목이 모델 크기가 아니라 훈련 인프라에 있다고 진단한 점이다. 샌드박스 감사 결과 RL 궤적의 약 16%가 모델 정책이 아닌 인프라 문제로 실패한 것으로 나타났다. 디스크 사용량 최적화, 환경 변수 수정, Gateway Server 우회 등 세 가지 인프라 수정으로 오류율을 2% 미만으로 낮췄다.

성능 면에서 KAT-Coder-V2.5는 PinchBench에서 94.9점으로 Opus 4.8(93.5점)을 제치고 1위를 차지했으며, SWE-Bench Pro에서는 65.2점으로 2위를 기록했다. 다만 Terminal-Bench 2.1에서는 60.7점으로 Opus 4.8(84.6점)에 크게 뒤진다. 35B 매개변수의 오픈웨이트 버전(KAT-Coder-V2.5-Dev)도 Apache-2.0 라이선스로 Hugging Face에 공개되었다.

## 왜 중요한가?
에이전트 코딩 모델의 발전이 모델 크기 경쟁이 아닌 훈련 인프라와 데이터 품질 경쟁으로 전환되고 있음을 보여준다. 더 많은 파라미터를 쌓는 대신, 검증 가능한 환경을 대량으로 구축하고 샌드박스 오류를 제거하는 것이 성능 향상의 열쇠라는 점은 비용 효율적인 접근법이다. 또한 오픈웨이트 버전의 공개는 소규모 팀도 에이전트 코딩 모델을 활용할 수 있는 길을 열어준다.

## 심층 분석

### 기술 의미
KAT-Coder-V2.5의 핵심 혁신은 AutoBuilder 시스템과 비대칭 PPO 아키텍처다. AutoBuilder는 빌드 에이전트가 저장소를 분석해 구성 스크립트를 작성하고, 검증 에이전트가 샌드박스에서 실행하는 이단 구조로, 90% 이상의 테스트가 수집되고 재현 가능할 때만 환경을 승인한다. 비대칭 actor-critic 설계에서 Critic은 보상, 테스트, 패치 등 특권 정보에 접근하지만 Actor는 롤아웃 상태만 보며, 추론 시 Critic은 폐기된다. 3단계 보상 체계(Core Task Scores, Standard Behavior Constraints, Failed Trajectory Incentives)가 정답 통과 여부뿐 아니라 코드 품질과 탐색 과정까지 평가한다.

### 업계 영향
에이전트 코딩 분야에서 중국 기업의 존재감이 계속 커지고 있다. Kuaishou는 Meituan(LongCat-2.0), Alibaba와 함께 오픈웨이트 에이전트 코딩 모델을 공개하며 서구 모델에 대항하는 생태계를 구축하고 있다. 특히 PinchBench에서 Opus 4.8을 추월한 것은 폐쇄형 최고 모델과 오픈 모델 간 격차가 코딩 에이전트 영역에서 실질적으로 좁혀지고 있음을 시사한다. 다만 Terminal-Bench에서의 열세는 범용 터미널 조작 능력이 여전히 해결 과제임을 보여준다.

### 관련 프로젝트
- [KAT-Coder-V2.5 논문 (arXiv)](https://arxiv.org/abs/2607.05471)
- [KAT-Coder-V2.5-Dev (Hugging Face)](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)
- [PinchBench](https://pinchbench.com/)
- [StreamLake 서비스 페이지](https://streamlake.com/product/kat-coder)

### 관련 뉴스
- [2026-07-23: 중국 AI 모델 오픈소스 공세](2026-07-23-china-kimi-k3-qwen3-8-open-source-ai.md) — Meituan, Alibaba에 이은 Kuaishou의 오픈 모델 공개
- [2026-07-20: Port AI Builder Vibe Coding](2026-07-20-port-ai-builder-vibe-coding.md) — 코딩 에이전트 도구의 지속적 발전

## 원문 발췌
> "KwaiKAT treats agentic coding as an infrastructure problem, not a model-scale problem. AutoBuilder lifted environment construction success from 16.5% to 57.2%, yielding 100,000+ verifiable environments across 12 languages."
> "A sandbox audit found ~16% of RL trajectories failed because of the sandbox, not the policy; fixes cut that to below 2%."
