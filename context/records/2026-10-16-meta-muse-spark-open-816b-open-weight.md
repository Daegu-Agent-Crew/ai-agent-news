# Meta, 오픈 웨이트 'Muse Spark Open' 공개 — 816B(활성 42B)·1M 컨텍스트, Mac Studio 2대로 로컬 구동

## 메타데이터
- **원문 URL**: https://research.meta.ai/blog/muse-spark-open
- **소스**: Meta AI Research 공식 블로그 (교차: TechCrunch, 9to5Mac, Engadget)
- **발행일**: 2026-10-15
- **수집일**: 2026-10-16
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [meta, muse-spark-open, open-weight, moe, apple-silicon, mlx, coding-agent, muse-code]
- **소스 권위**: official
- **교차 확인**: 4
- **중요도**: ⭐⭐⭐⭐⭐
- **중요도 산정**: 기본 1 + official 2 + 교차 확인 4개(2) + HN 546pt(1) = 6 → 상한 5
- **신선도**: fresh

## 핵심 요약
> Meta가 총 816B·활성 42B 파라미터, 100만 토큰 컨텍스트의 네이티브 멀티모달 모델 Muse Spark Open의 가중치를 공개했다. Meta는 이를 "미국 최고 성능 오픈 웨이트 모델"이라 칭했으며, M5 Ultra Mac Studio 2대와 MLX로 데스크톱에서 구동할 수 있다고 밝혔다.

## 번역 (한국어)
Meta는 Muse Spark Open의 가중치를 공개하며 이를 "지금까지 가장 뛰어난 미국 오픈 웨이트 모델"이라고 소개했다. 총 816B 파라미터 중 토큰당 42B가 활성화되는 네이티브 멀티모달 모델로, 100만 토큰 컨텍스트 창을 갖췄다. Meta는 코딩과 에이전트 작업을 위해 만들었으며 장기 과제, 복잡한 소프트웨어 엔지니어링, 다단계 추론에 강하다고 설명했다.

Meta에 따르면 이 모델은 동급 최초로 M5 Ultra Mac Studio 두 대와 최신 MLX 프레임워크로 데스크톱에서 구동된다. M5 Ultra의 통합 메모리는 대당 최대 512GB를 GPU가 쓸 수 있어 두 대로 모델 전체를 담을 수 있고, 1.2TB/s 메모리 대역폭이 토큰마다 필요한 일부만 빠르게 읽어낸다는 설명이다. TechCrunch는 Engadget을 인용해 로컬 구동에 최소 1TB RAM이 필요하다고 전했다.

Meta는 자사 코딩 터미널 Muse Code와 결합해 오픈소스 Mastodon 클라이언트 Ice Cubes에 버그 수정·신기능·전체 빌드까지 실제 iOS 변경을 반영하고, DaVinci Resolve를 프레임 단위로 검토해 하이라이트를 세로로 잘라내는 작업을 완전히 온디바이스로 수행했다고 밝혔다.

API는 Baseten, Fireworks AI, Groq, Modal, Nebius, OpenRouter, Together AI에서, 가중치는 Hugging Face·SageMaker·Google Cloud Model Garden·Microsoft Foundry에서 받을 수 있다. 라이선스는 "제한적 상업 조건"의 Muse Model License이며, Meta는 추가 안전 후학습을 거쳤고 Meta Superintelligence Scaling Framework의 공개 기준을 충족했다고 밝혔다.

## 왜 중요한가?
최상위권 AI 모델을 회사 서버가 아닌 책상 위 컴퓨터 두 대로 돌릴 수 있는 시대가 열렸다는 신호입니다. 민감한 코드나 데이터를 외부로 보내지 않고도 강력한 코딩·에이전트 AI를 쓸 수 있는 선택지가 생겼습니다.

## 심층 분석

### 기술 의미
816B 총 파라미터에 활성 42B라는 극단적 희소 MoE 구조는, 메모리 용량은 크지만 대역폭이 상대적으로 제한된 통합 메모리 기기에 맞춘 설계로 읽힌다(→ 분석). 1M 컨텍스트와 멀티모달을 함께 갖춘 오픈 웨이트 모델이 상용 하드웨어에서 돈다는 점은 로컬 에이전트의 상한을 끌어올린다(→ 분석). 벤치마크 수치는 Meta 자체 평가이며 전체 평가 보고서는 아직 공개되지 않았다.

### 업계 영향
Meta가 "미국 오픈 웨이트" 프레이밍을 내세운 것은 중국계 오픈 모델(Qwen·GLM 등)과의 경쟁 구도를 의식한 것으로 보인다(→ 분석). 7개 추론 사업자 동시 출시는 오픈 모델 유통이 이제 클라우드 API 생태계와 동시에 이뤄진다는 점을 보여준다(→ 분석). 다만 "제한적 상업 조건" 라이선스는 Apache 2.0 계열 경쟁 모델 대비 기업 도입 시 검토 부담이 될 수 있다(→ 분석).

### 관련 프로젝트
- Hugging Face: meta-models/Muse-Spark-Open-816B-A42B
- Apple MLX (mlx-lm), SGLang Helion 커널, vLLM, llama.cpp
- Muse Code (Meta 코딩 터미널)

### 관련 뉴스
- [Meta Muse Wonder 프런티어 모델](../records/2026-10-13-meta-muse-wonder-frontier-model.md) — 같은 Muse 제품군의 폐쇄형 프런티어 모델
- [Meta Muse Mac 데스크톱 에이전트](../records/2026-09-19-meta-muse-mac-desktop-agent.md) — Mac 중심 전략의 연장선
- [Meta Muse Code 코딩 에이전트](../records/2026-08-05-meta-muse-code-coding-agent.md) — 이번 데모에 쓰인 코딩 터미널

## 원문 발췌
> "Muse Spark Open is a natively multimodal model with 816B total parameters (42B active) and a 1M-token context window."
> "Muse Spark Open is the first model in its class to run on your desktop using two Apple M5 Ultra Mac Studios with the latest MLX framework."
> "We're releasing the weights under the Muse Model License with limited commercial terms, which allow many developers to use the model for free."
> TechCrunch: "you will still need a lot of power to run the model locally, with a requirement of at least 1 terabyte of RAM, per Engadget."

## 수집 노트
- **선정 이유**: 공식 발표 + TechCrunch·9to5Mac·Engadget 교차 + HN 546pt로 오늘 후보 중 산정 점수 최고.
- **제외 후보**: NVIDIA Nemotron 3.5 Super VL(MarkTechPost) — 원문 본문 fetch 실패(Cloudflare 차단)로 발췌 확보 불가, 다음 수집에 재시도. Fish Audio Drama 3 — 전일 이미 제외된 TTS 모델.
