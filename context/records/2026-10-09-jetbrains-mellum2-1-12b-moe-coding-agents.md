# JetBrains, 코딩 에이전트용 12B MoE 오픈 모델 Mellum2.1 공개

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/10/08/jetbrains-releases-mellum2-1-a-12b-moe-open-model-for-coding-agents/
- **소스**: MarkTechPost
- **발행일**: 2026-10-08
- **수집일**: 2026-10-09
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [JetBrains, Mellum2.1, MoE, 오픈 모델, 코딩 에이전트, 강화학습]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 1개(0) + 반응 규모 미확인(0) = 2
- **신선도**: fresh

## 핵심 요약
> MarkTechPost에 따르면 JetBrains는 코딩 에이전트·서브에이전트용 오픈 모델 Mellum2.1을 Apache 2.0으로 공개했다. 총 12B, 토큰당 2.5B 파라미터만 활성화하는 MoE 사고형 모델이며, JetBrains 자체 측정에서 SWE-bench Verified 점수가 2.0에서 47.0으로 올랐다.

## 번역 (한국어)
JetBrains가 코딩 에이전트와 빠른 서브에이전트를 위한 오픈 모델 Mellum2.1을 공개했다. 총 12B 파라미터 중 토큰당 2.5B만 활성화하는 MoE(전문가 혼합) 사고형 모델로, Hugging Face에 Apache 2.0 라이선스로 올라왔다. 아키텍처는 Mellum2와 같고, 개선은 거의 전부 실제 소프트웨어 환경에서의 강화학습(RL)에서 나왔다.

JetBrains는 RL을 학습의 짧은 마지막 단계에서 주된 단계로 옮겼다. 소프트웨어 엔지니어링 과제에서는 모델이 셸과 파일 편집 도구를 들고 실제 저장소에서 학습하며, 테스트를 통과하면 보상을 받는다. 학습 과정에서 수천 개 환경에 걸쳐 수백만 개의 샌드박스가 실행됐다.

JetBrains 자체 측정(모든 점수 자체 보고)에서 에이전트 코딩 성능이 가장 크게 올랐다. SWE-bench Verified는 2.0→47.0, SWE-bench Pro는 0.0→28.0, Terminal-Bench 2.1은 0.6→17.4였다. LiveCodeBench v6에서는 82.0으로 Qwen3.5-9B(75.4)를 앞섰지만, SWE-bench Verified(50.0)·Terminal-Bench 등 어려운 에이전트 과제에서는 여전히 Qwen3.5-9B에 뒤진다. H200 1장 고부하 기준 Qwen3.5-9B보다 약 2배 많은 토큰을 처리한다고 JetBrains는 밝혔다.

## 왜 중요한가?
코딩 에이전트를 회사 내부 서버에서 직접 돌리고 싶은 기업에게, 작고 빠르면서 상업적으로 자유롭게 쓸 수 있는 선택지가 하나 더 생겼습니다. IDE 회사가 직접 만든 모델이라 개발 도구와의 결합도 기대할 수 있습니다.

## 심층 분석

### 기술 의미
아키텍처 변경 없이 사후학습(RL)만으로 SWE-bench Verified를 2.0에서 47.0으로 끌어올린 사례는, 소형 모델의 에이전트 능력이 크기보다 실제 환경 RL 데이터에 좌우된다는 근거로 읽힌다(→ 분석). 2.5B 활성 파라미터와 슬라이딩 윈도 어텐션 조합은 서브에이전트처럼 대량 병렬 호출되는 역할에 처리량 이점이 있다. 다만 모든 점수가 JetBrains 파이프라인 기준 자체 보고이고, Qwen 공식 카드 수치와도 차이가 있어 독립 검증이 필요하다.

### 업계 영향
"메인 에이전트는 대형 모델, 서브에이전트는 소형 자체 호스팅 모델"이라는 계층형 구성이 확산되는 흐름과 맞물린다(→ 분석). Apache 2.0 라이선스와 7GB대 GGUF 빌드는 폐쇄망·온프레미스 기업 수요를 겨냥한다. IDE 벤더가 자체 모델을 보유하면 Cursor 등 AI 네이티브 편집기와의 경쟁에서 모델 비용 통제력을 얻는다(→ 분석).

### 관련 프로젝트
- Hugging Face: https://huggingface.co/JetBrains
- vLLM: https://github.com/vllm-project/vllm

### 관련 뉴스
- [JetBrains 에이전트 프레임워크](../records/2026-07-06-jetbrains-agentic-frameworks-2026.md) — JetBrains의 에이전트 전략

## 원문 발췌
> "Mellum2.1 is a 12B mixture-of-experts thinking model from JetBrains that activates 2.5B parameters per token. It ships under Apache 2.0 on Hugging Face."
> "The architecture is unchanged from Mellum2. The upgrade comes almost entirely from reinforcement learning (RL) in real software environments."
> "SWE-bench Verified rose from 2.0 to 47.0. SWE-bench Pro rose from 0.0 to 28.0."
> "All scores are self-reported by JetBrains."

## 수집 노트
- **선정 이유**: 코딩 에이전트용으로 명시 설계된 Apache 2.0 오픈 모델로, 단일 소스(교차 1)라 ⭐⭐이지만 소형 서브에이전트 모델이라는 아카이브 주제와 직결됨.
- **제외 후보**: Perplexity pplx-embed-v2-late — 임베딩 모델로 에이전트 직접 관련성 낮음. StepFun Step 5 Preview(OpenRouter 등재) — 공식 발표 없이 목록 등재만 확인돼 다음 수집으로 보류.
