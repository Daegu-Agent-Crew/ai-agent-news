# 엔비디아 공식 블로그: GLM-5.3 753B를 vLLM으로 두 DGX 스테이션에서 607.8 tok/s 서빙

## 메타데이터
- **원문 URL**: https://developer.nvidia.com/blog/when-one-gpu-isnt-enough-serving-glm-5-3-across-two-nvidia-dgx-stations-with-vllm/
- **소스**: NVIDIA Developer Blog
- **발행일**: 2026-11-14
- **수집일**: 2026-11-15
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [GLM-5.3, vLLM, DGX, inference, NVFP4]
- **소스 권위**: official
- **교차 확인**: 1
- **중요도**: ⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> 엔비디아 개발자 블로그가 Z.ai의 MoE 모델 GLM-5.3(NVFP4 양자화, 753B 파라미터)을 두 대의 DGX 스테이션에 텐서 병렬(TP=2)로 나눠 vLLM 서빙하는 튜토리얼을 공개했다. 제목 기준 초당 607.8 토큰 처리 성능이 소개됐다.

## 번역 (한국어)
프론티어급 모델을 로컬에서 돌리려면 전체 가중치가 GPU 메모리에 들어가야 하는데, 가장 큰 모델들은 이제 한 대의 장비에 맞지 않는다. 이 포스트는 두 대의 DGX 스테이션을 ConnectX-8 RDMA로 연결하고, 텐서 병렬(TP=2)로 가중치와 연산을 두 GB300 GPU에 나눠 하나의 엔드포인트로 서빙하는 방법을 다룬다.

대상 모델은 NVIDIA GLM-5.3 NVFP4다. Z.ai의 mixture-of-experts 모델을 양자화한 버전으로 총 파라미터 753B, 토큰당 활성 40B다. 희소 활성으로 연산량은 줄지만 모든 가중치가 메모리에 있어야 하므로, 약 464GB 체크포인트는 단일 GB300의 HBM3e 252GB를 초과한다. 이에 CPU 오프로드 없이 두 스테이션에 나눠 적재한다.

요구 조건은 양쪽 스테이션에 동일 리눅스 계정의 SSH·sudo 접근, 체크포인트용 464GB 여유 디스크, Hugging Face 게이트 데이터셋(hle) 접근 동의 등이다. 튜토리얼은 컨테이너 준비부터 요청 전송, 동시 부하 상황의 성능 측정(SPEED-Bench)까지 단계별로 안내한다.

스테이션 A(rank 0)가 API를 호스팅하고 스테이션 B(rank 1)는 워커만 구동하는 구조에서, OpenAI 호환 API로 응답을 반환한다.

## 왜 중요한가?
거대 AI 모델을 구독 없이 자체 장비에서 운용하는 방법이 공식 문서로 정리됐다. 기업이 데이터를 밖으로 내보내지 않고 최신 오픈 모델을 쓰려 할 때 참고하는 표준 경로가 될 전망이다.

## 심층 분석

### 기술 의미
NVFP4 양자화 + RDMA 텐서 병렬 조합은 '단일 GPU 메모리 한계'를 넘는 실용적 패턴을 보여준다. 체크포인트 464GB vs HBM 252GB라는 수치는 향후 모델 크기와 하드웨어 메모리의 격차가 벌어지는 상황에서 멀티 노드 서빙이 기본값이 되리다는 신호다(→ 분석).

### 업계 영향
GLM-5.3처럼 오픈 웨이트 초거대 모델의 자체 호스팅 사례가 늘면, 클라우드 API 의존도가 낮아지고 기업 인프라 투자 패턴이 바뀔 수 있다(→ 분석). HN 등 커뮤니티에서도 화제가 된 튜토리얼로, 로컬 LLM 운영 관심의 방증이다.

### 관련 프로젝트
- vLLM: https://docs.vllm.ai
- GLM-5.3 NVFP4: https://huggingface.co/nvidia/GLM-5.3-NVFP4

### 관련 뉴스
- [Memorilla 에이전트 메모리 모듈](../records/2026-11-15-stanford-memorilla-16-memory-tokens.md) — 로컬 모델 효율화 연구

## 원문 발췌
> Two NVIDIA DGX Stations connected over ConnectX-8 RDMA serve one model through a single endpoint, with tensor parallelism splitting the model weights and computation across both GPUs.
> The NVIDIA GLM-5.3 NVFP4 model, a quantized version of Z.ai's mixture-of-experts (MoE) model, has 753 billion parameters, with 40 billion activated per token. At about 464 GB, the checkpoint exceeds the 252 GB of HBM3e on a single GB300 GPU.

## 수집 노트
- **선정 이유**: 엔비디아 공식 발표로 GLM 계열 모델 서빙 실무 가이드. HN 50pt+ 커뮤니티 반응 확인. 교차 확인 소스는 공식 단일.
- **제외 후보**: DeepSeek V3 in Jax — 개인 실험 코드 수준.
