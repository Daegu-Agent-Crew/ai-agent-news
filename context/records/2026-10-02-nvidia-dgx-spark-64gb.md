# NVIDIA, 로컬 AI 에이전트용 'DGX Spark 64GB' 공개 — 2대 클러스터로 128GB

## 메타데이터
- **원문 URL**: https://blogs.nvidia.com/blog/local-ai-dgx-spark-64gb-sync/
- **소스**: NVIDIA Blog (교차: MarkTechPost, Tom's Hardware)
- **발행일**: 2026-10-02
- **수집일**: 2026-10-03
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [nvidia, dgx-spark, gb10, local-ai, hardware, agents, clustering]
- **소스 권위**: official
- **교차 확인**: 3
- **중요도**: ⭐⭐⭐⭐⭐
- **신선도**: fresh
- **중요도 산정**: 기본 1 + official 2 + 교차 확인 3개(2) + 반응 규모 HN 10pt 미만(0) = 5

## 핵심 요약
> NVIDIA는 64GB 통합 메모리를 탑재한 DGX Spark 구성을 이번 달 Acer·ASUS·Dell·Gigabyte·HP·MSI를 통해 출시한다고 발표했다. NVIDIA 테스트(Qwen 3.8 27B)에서 64GB 2대 클러스터는 단일 시스템 대비 최대 1.7배 성능을 냈다.

## 번역 (한국어)
NVIDIA는 공식 블로그에서 GB10 Grace Blackwell 슈퍼칩 기반 데스크톱 AI 시스템 DGX Spark에 64GB 통합 메모리 구성을 추가한다고 밝혔다. 이 구성은 제조 파트너를 통해서만 판매되며, 기존 128GB 모델과 같은 GB10 칩, DGX OS, NVIDIA AI 소프트웨어 스택을 유지한다. NVIDIA는 이 구성이 최대 1,000억 파라미터 모델과 그 위의 에이전트 애플리케이션을 기기 안에서 돌릴 수 있다고 설명했다.

두 대를 QSFP 케이블로 직접 연결하면 메모리가 128GB로 합쳐지고 최대 2,000억 파라미터 모델까지 지원하며, 메모리 대역폭은 2배, 성능은 최대 1.7배가 된다고 NVIDIA는 밝혔다. 클러스터 구성은 NVIDIA Sync의 Cluster Assistant가 자동으로 처리하며, 이달 말에는 클릭 몇 번으로 Qwen3.8 27B를 띄우고 OpenCode까지 연결해 주는 Sync Model Launcher가 나온다.

MarkTechPost는 GB10 GPU가 희소성 적용 시 FP4 기준 최대 1 PetaFLOP을 낸다고 전했다. 또 DGX OS에 PyTorch·Jupyter·Ollama가 기본 탑재되고, OpenClaw 에이전트에 보안·프라이버시 통제를 더하는 NVIDIA NemoClaw를 명령 한 줄로 설치할 수 있다고 보도했다. MarkTechPost는 에이전트의 토큰 소비가 2026년 초 이후 14배 늘었다는 수치를 제시하며, 자체 하드웨어에서는 토큰당 과금이 없다는 점을 강조했다.

Tom's Hardware는 기사 제목에서 새 GB10 구성의 시작 가격을 $4,999로 전했다.

## 왜 중요한가?
AI 에이전트는 하루 종일 돌아가며 토큰을 쓰기 때문에, 클라우드 API 요금이 계속 쌓입니다. 책상 위에 둘 수 있는 '개인용 AI 서버'의 진입 가격을 낮춘 이번 제품은, 회사나 개인이 데이터를 밖으로 보내지 않고 에이전트를 상시 운영하는 선택지를 넓혀 줍니다.

## 심층 분석

### 기술 의미
64GB 구성은 메모리를 절반으로 줄이는 대신 같은 GB10 칩과 ConnectX-7 네트워킹을 유지해, '작게 시작해 클러스터로 확장'하는 경로를 제품 구조로 만들었다. 통합 메모리 덕분에 라우터 모델·메인 추론 모델·KV 캐시·도구 프로세스가 하나의 주소 공간을 공유한다는 점이 멀티모델 에이전트 구성에 유리하다(MarkTechPost 설명). 다만 BF16 원본 30B급 모델은 64GB에서 컨텍스트 여유가 거의 없어 양자화 빌드가 실질적 선택이 된다는 점도 MarkTechPost가 지적했다.

### 업계 영향
NVIDIA가 OpenClaw·NemoClaw·Hermes 같은 에이전트 하네스를 하드웨어 마케팅의 중심에 둔 것은, 로컬 상시 에이전트가 하나의 하드웨어 시장으로 자리 잡고 있다는 해석을 가능하게 한다. 메모리 가격 상승기(Tom's Hardware 표현 'rampocalypse')에 더 싼 구성을 내놓은 점은 진입 장벽을 낮추려는 전략으로 읽힌다(→ 분석). 클라우드 API 업체 입장에서는 30B급 오픈 모델+로컬 하드웨어 조합이 일부 에이전트 워크로드를 가져갈 경쟁 요인이 된다.

### 관련 프로젝트
- [MarkTechPost 해설](https://www.marktechpost.com/2026/10/02/nvidia-announces-dgx-spark-64gb-a-1-petaflop-grace-blackwell-desktop-for-local-ai-agents-fine-tuning-and-inference/)
- [Tom's Hardware 보도](https://www.tomshardware.com/pc-components/gpus/nvidia-introduces-64gb-dgx-spark-to-throw-local-ai-fans-a-lifeline-amid-the-rampocalypse-new-gb10-config-starts-at-usd4999-for-those-who-can-work-with-less)
- NVIDIA NemoClaw, NVIDIA Sync

### 관련 뉴스
- [Perplexity, DGX Spark 기반 Portable Computer](../records/2026-08-25-perplexity-portable-computer.md) — DGX Spark 위 로컬 에이전트 사례
- [Meta Muse Glimmer 30B 오픈 모델](../records/2026-08-10-meta-muse-glimmer-30b-open-agentic-model.md) — 64GB 구성의 대표 탑재 모델로 언급
- [NVIDIA Nemotron 3.5 Lightning](../records/2026-08-12-nvidia-nemotron-3-5-lightning-nemo-switchyard.md) — DGX Spark 최적화 모델

## 원문 발췌
> "Coming this month, NVIDIA DGX Spark will be available with 64GB of unified memory from top manufacturer partners — Acer, ASUS, Dell, Gigabyte, HP and MSI"
> "In NVIDIA's Qwen 3.8 27B test, two clustered 64 GB systems delivered up to 1.7x performance compared with a single system"
> "It supports up to 100-billion-parameter models and the agentic applications built on them, fully on device." (NVIDIA)
> "The GPU delivers up to 1 petaFLOP of FP4 AI compute, with sparsity." (MarkTechPost)

## 수집 노트
- **선정 이유**: NVIDIA 공식 발표에 MarkTechPost·Tom's Hardware가 교차 보도(독립 소스 3개)해 산정상 최고점이며, 로컬 상시 에이전트라는 아카이브 주제와 직접 연결됨.
- **제외 후보**: Amazon의 Nvidia 칩 $8B 매각 추진(Reuters, HN) — FT 인용 2차 보도이고 에이전트와 직접 관련성이 약해 제외.
