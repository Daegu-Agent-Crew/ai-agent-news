# AMD Releases Instella-MoE-16B-A3B: Fully Open Mixture-of-Experts LLM

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/08/01/amd-instella-moe-16b-a3b-fully-open-mixture-of-experts-llm/
- **소스**: MarkTechPost
- **발행일**: 2026-08-01
- **수집일**: 2026-08-02
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [AMD, MoE, open-source, GPU, inference, SGLang]
- **중요도**: ⭐⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> AMD가 Instinct MI300X/MI325X GPU로 처음부터 훈련한 완전 오픈소스 MoE 언어모델 Instella-MoE-16B-A3B를 공개했다. 16B 파라미터 중 토큰당 2.8B만 활성화하며, Gated MLA와 FarSkip-Collective라는 두 가지 혁신적 구조를 도입했다.

## 번역 (한국어)

AMD가 자체 Instinct MI300X 및 MI325X GPU로 처음부터 훈련한 Mixture-of-Experts(MoE) 언어모델인 **Instella-MoE-16B-A3B**를 발표했다. 이 모델은 총 16B 파라미터를 보유하지만 토큰당 2.8B 파라미터만 활성화하는 고도로 희소화된 구조를 채택하여, 작은 모델의 효율성과 큰 모델의 성능을 동시에 달성한다.

AMD는 훈련의 모든 단계별 가중치, 데이터 혼합 비율, 훈련 설정, 추론 코드를 모두 공개했다. 두 가지 핵심 혁신 구조로는 어텐션 출력에 학습 가능한 게이트를 추가하는 **Gated MLA(Multi-head Latent Attention)**와 전문가 병렬 통신을 연산과 겹치게 하는 **FarSkip-Collective**가 있다. FarSkip-Collective는 사전훈련 속도 12.7% 향상과 첫 토큰 생성 시간 39.2% 단축을 달성했다.

7.1T 토큰으로 사전훈련되었으며, Nemotron-CC-v2, MegaMath, FineMath 등 다양한 오픈 코퍼스를 활용했다. 4K에서 64K로 컨텍스트 윈도우를 확장하는 긴 컨텍스트 단계도 포함되었다. 사후훈련은 SFT, DPO, RL 단계를 거치며, Multi-Teacher On-Policy Distillation을 통해 RL의 이득을 유지하면서 수학/코딩 성능 저하를 방지했다.

베이스 체크포인트는 완전 오픈 모델 중 최고인 평균 76.7점을 기록했으며, WinoGrande에서 86.5점, HumanEval+에서 65.7점을 달성했다. ResearchRAIL 라이선스로 학술/연구 목적으로만 사용 가능하며, 훈련 코드베이스는 MIT 라이선스다.

## 왜 중요한가?
AMD가 NVIDIA 독점 시장에 도전장을 내밀며, 오픈소스 AI 생태계의 하드웨어 다변화를 이끌고 있다. FarSkip-Collective와 Gated MLA 같은 구조적 혁신은 MoE 모델의 실용적인 배포 장벽을 낮추는 데 기여하며, 완전한 훈련 파이프라인 공개는 연구 커뮤니티의 재현성과 학습 가속에 큰 의미가 있다.

## 심층 분석

### 기술 의미
Instella-MoE는 AMD GPU 생태계에서 end-to-end MoE 훈련 레시피를 증명한 첫 대규모 공개 모델이다. FarSkip-Collective의 구식/부분 활성화를 MoE와 어텐션 레이어에 전달하는 방식은 전문가 병렬 시스템의 통신 병목을 해결하는 독창적 접근이다. Gated MLA가 어텐션 출력에 조건부 게이팅을 추가하는 것은 모델이 토큰별로 어텐션 강도를 조절할 수 있게 하여, 정적 어텐션 패턴의 한계를 극복한다. 64K 컨텍스트 지원과 32GB 메모리의 단일 가속기 배포 가능성은 상용 서비스에 충분한 스펙이다.

### 업계 영향
이 모델은 NVIDIA H100/A100 의존성에서 벗어나려는 기업과 연구소에 현실적 대안을 제공한다. AMD가 가중치, 설정, 코드를 모두 공개한 것은 오픈소스 AI 모델의 투명성 기준을 높이며, Meta의 Llama 시리즈와 경쟁하는 위치에 놓이게 된다. ResearchRAIL 라이선스의 제약은 상업적 배포를 제한하지만, MIT 라이선스의 훈련 코드는 다른 조직이 자체 데이터로 MoE 모델을 훈련하는 강력한 출발점이 된다.

### 관련 프로젝트
- GitHub: https://github.com/AMD-AGI/Instella-MoE
- FarSkip-Collective: https://github.com/AMD-AGI/FarSkip-Collective
- SGLang 추론 프레임워크: https://github.com/sgl-project/sglang

### 관련 뉴스
- (이전 기사와의 교차 링크는 향후 업데이트 예정)

## 원문 발췌
> "The model holds 16B total parameters but activates only 2.8B per token. AMD is publishing weights from every training stage, along with data mixtures, training configs, and inference code."
