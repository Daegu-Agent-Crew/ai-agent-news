# OpenBMB MiniCPM5-2B 공개 — 2.5B 파라미터로 4B급 성능, 온디바이스 에이전트용 Apache 2.0 모델

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/09/07/openbmb-releases-minicpm5-2b-a-2-52b-dense-model-averaging-53-9-across-34-benchmarks-and-built-to-run-on-device/
- **소스**: MarkTechPost
- **발행일**: 2026-09-07
- **수집일**: 2026-09-08
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [MiniCPM5, OpenBMB, on-device, small-LM, tool-use, Apache-2.0, distillation]
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> OpenBMB가 네이티브 128K 컨텍스트의 2.52B 덴스 모델 MiniCPM5-2B를 Apache 2.0으로 공개했다. 34개 벤치마크 평균 53.9점으로 동급 최고이자 더 큰 Qwen3.5-4B(51.1)를 앞섰으며, 특히 도구 호출·코딩 에이전트·장컨텍스트 검색에서 압도적 우위를 보인다. 학습 데이터셋과 중간 체크포인트까지 함께 공개됐다.

## 번역 (한국어)
오픈소스 모델 그룹 OpenBMB가 미니CPM5 시리즈의 두 번째 체크포인트인 MiniCPM5-2B를 공개했다. 약 25억 2천만 파라미터의 덴스 인과 언어모델로, 42개 레이어에 그룹 쿼리 어텐션(쿼리 16헤드·KV 2헤드)을 쓰고 네이티브 컨텍스트 윈도우는 131,072 토큰이다. 아키텍처가 표준 LlamaForCausalLM이라 별도 커스텀 커널이나 모델 코드 포크 없이 vLLM, SGLang, Transformers, llama.cpp, Ollama, LM Studio, MLX, FlagOS 등 주류 추론 엔진에 그대로 올라간다. 가중치는 Apache 2.0이며, 사전학습·SFT·RL 데이터셋과 Base·Midtrain·SFT 중간 체크포인트까지 함께 공개됐다. GGUF 빌드는 1.56GB부터 시작한다.

벤치마크 성적이 이번 공개의 핵심이다. 동일 크기 클래스의 LFM2.5-2.6B, Qwen3.5-2B, Gemma-4-E2B-it과 비교하고 Qwen3.5-4B 등 더 큰 모델을 참조로 둔 34개 항목에서 평균 53.9점을 기록했는데, 최강 경쟁 모델인 Qwen3.5-4B(51.1)를 제치고 1위다. 강점은 뚜렷하다. 도구 사용에서 τ²-Bench Telecom 97.1, BFCL v4 66.6을 기록했고 τ³-Bench Banking에서는 20.8 대 6.8로 3배 가까이 앞선다. 코드 추론에서는 LiveCodeBench v6에서 69.1 대 56.4, SWE-bench Verified에서 46.4 대 33.6으로 차이를 벌렸다. 장컨텍스트 검색(NoLiMa 68.1 대 43.5)도 우위다. 반면 일반 지식(MMLU-Pro 70.8 vs 78.0)에서는 파라미터 격차가 그대로 드러난다.

학습 레시피도 눈에 띈다. UltraData 계층형 데이터 관리 기법에 기반해 베이스 학습과 미드트레이닝을 거친 뒤, 후처리 단계에서 4천억 토큰 규모의 딥씽킹 SFT를 진행했다. 이어 수학·코드·에이전트·작성 영역별로 critic 기반 JustRL II 알고리즘으로 특화 RL 교사 모델들을 훈련하고, 마지막에 온폴리시 디스틸레이션(OPD)으로 16개 RL 전문가 모델(이 중 5개는 에이전트 특화)을 단일 체크포인트로 병합했다. 매 응답 위치에서 학생-교사 로짓 간 전체 어휘 역방향 KL 발산을 어드밴티지로 쓰는 방식이다. RL+OPD 단계만으로 추론·일반 벤치마크에서 평균 10.96점, 에이전트 벤치마크에서 6.96점을 추가로 끌어올렸다고 측정했다.

## 왜 중요한가?
'온디바이스에서 도는 에이전트'라는 흐름의 현 단계 최전선을 보여주는 공개다. 2.5B 크기로 스마트폰·랩톱에 들어가면서도 도구 호출과 코딩 에이전트 능력이 4B급을 넘어서면, 클라우드 API 없이도 개인 기기 위에서 에이전트를 구동하는 비용과 프라이버시 장벽이 크게 낮아진다. 데이터셋과 중간 체크포인트까지 전부 공개된 것은 재현·파생 연구 측면에서도 흔치 않은 수준의 개방성이다.

## 심층 분석

### 기술 의미
이 모델의 기술적 메시지는 '작은 모델의 경쟁력은 범용 지식이 아니라 후처리에서 나온다'는 점이다. 16개 RL 전문가를 역방향 KL 기반 온폴리시 디스틸레이션으로 하나로 융합하는 OPD 레시피는, 크기를 늘리지 않고 에이전트 역량을 주입하는 검증된 경로를 제시한다. 표준 LlamaForCausalLM 아키텍처 유지도 전략적이다. 커스텀 코드 없이 llama.cpp·MLX 등 저사양 런타임에 즉시 탑재되므로, GGUF 1.56GB라는 경량 배포와 결합해 엣지 디바이스 실사용 진입 장벽이 사실상 사라진다. 다만 MMLU-Pro·HLE 같은 광역 지식 벤치마크에서 열세인 것은 근본 파라미터 한계로, 장기 실행 에이전트가 외부 지식에 의존하는 구조를 전제로 설계됐음을 시사한다.

### 업계 영향
τ³-Bench Banking(20.8 vs 6.8)과 τ²-Bench Telecom(97.1) 성적은 소형 모델이 도구 오케스트레이션 영역에서 대형 모델을 대체할 수 있음을 수치로 입증한 것으로, 온디바이스 AI 에이전트·로컬 퍼스널 비서 시장의 경쟁 구도를 바꿀 수 있다. Apache 2.0 + 데이터셋 + 중간 체크포인트 공개는 Qwen·Gemma 계열 소형 모델과의 경쟁에서 '개방성'을 차별화 무기로 삼는 수순이며, 파인튜닝·도메인 특화 파생 모델 생태계가 빠르게 형성될 것이다. 스마트폰·PC 벤더 입장에서는 클라우드 비용 없이 차별화된 온디바이스 에이전트 기능을 내놓을 선택지가 늘어난다. 반대로 경쟁 모델들도 후처리(RL+디스틸레이션) 경쟁으로 이동하면서, 벤치마크 평균 점수 경쟁의 의미가 '학습 레시피 경쟁'으로 재정의될 것이다.

### 관련 프로젝트
- [openbmb/MiniCPM5-2B (Hugging Face)](https://huggingface.co/openbmb/MiniCPM5-2B)
- [OpenBMB 공식 사이트](https://openbmb.cn/)
- [원문 리서치 (arXiv, UltraData)](https://arxiv.org/pdf/2602.09003)

### 관련 뉴스
- [Liquid AI LFM2-230M 엣지 에이전트 모델](2026-06-26-liquid-ai-lfm2-230m-edge-agents.md) — 온디바이스 에이전트용 소형 모델 경쟁의 선행 사례
- [2026 에이전트 벤치마크 총정리](2026-06-18-agentic-benchmarks-2026.md) — τ²-Bench·BFCL 등 도구 사용 벤치마크의 의미

## 원문 발췌
> Post-training pairs 400B tokens of deep-thinking SFT with RL teachers and on-policy distillation that merges 16 expert models into one checkpoint. The weights ship under Apache 2.0 alongside the pre-training, SFT and RL datasets and the intermediate Base, Midtrain and SFT-only checkpoints.
