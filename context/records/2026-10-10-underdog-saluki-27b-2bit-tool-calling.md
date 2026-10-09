# Underdog Saluki 27B 공개 — 2비트 Qwen3.8-27B가 도구 호출에서 원본 모델을 앞서

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/10/09/meet-the-underdog-saluki-27b-a-2-bit-qwen3-8-27b-that-beats-the-original-at-tool-calling/
- **소스**: MarkTechPost
- **발행일**: 2026-10-09
- **수집일**: 2026-10-10
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [underdog, saluki, qwen3-8, quantization, gguf, llama-cpp, tool-calling, on-device]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 1개(0) + 반응 규모 미확인(0) = 2
- **신선도**: fresh

## 핵심 요약
> MarkTechPost에 따르면 Conway Research의 온디바이스 비서 Underdog이 Qwen3.8-27B의 2비트 GGUF인 Saluki 27B를 Apache 2.0으로 공개했다. 파일 크기는 7.89GB(BF16 원본 54GB)이며, Underdog 벤치에서 도구 호출 88점으로 원본 84점을 앞섰다.

## 번역 (한국어)
MarkTechPost는 Conway Research의 온디바이스 비서 Underdog이 Saluki 27B를 Apache 2.0 라이선스로 공개했다고 전했다. Saluki 27B는 Qwen3.8-27B를 2비트 GGUF로 압축한 모델로 7.89GB에 들어가며, 원본 BF16 모델은 54GB가 필요하다. Underdog은 챗 모델을 에이전트로 만드는 핵심 능력인 도구 호출을 보호하도록 압축을 조정했다.

이 모델은 세 단계 작업을 쌓아 만들어졌다. 기반은 Qwen 팀의 27B 밀집 모델 Qwen3.8-27B이고, 그 위에 ISTA-DASLab의 GSQ-RCO GGUF(가장 작은 파일 8.4GB)를 거쳐 Underdog이 자체 압축 패스로 7.89GB까지 줄였다. Underdog은 이 마지막 단계의 전체 레시피는 공개하지 않았다.

같은 하네스에서 비교한 결과, BFCL v4에서 뽑은 120개 과제로 구성된 Underdog 벤치에서 Saluki는 88점, 원본은 84점, PrismML의 Bonsai 2는 70점을 기록했다. 병렬 도구 호출 100개 과제에서는 Saluki 42, 원본 35였다. SWE-bench Verified 50개 이슈에서는 Saluki가 30개, 원본이 33개를 해결했다.

반면 수학·추론은 손실이 컸다. AIME 2025에서 Saluki는 79.2점으로 원본 공개 점수 96.7점의 약 82% 수준이었다. 매체는 9개 벤치마크 평균 유지율이 96%이며, 개조 없는 llama.cpp에서 그대로 실행된다는 점을 PrismML 포크가 필요한 Bonsai 2와의 차이로 꼽았다. 다만 각 업체가 서로 다른 하네스를 써 업체 간 점수는 직접 비교할 수 없다고 덧붙였다.

## 왜 중요한가?
원래 54GB짜리 AI 모델을 8GB 이하로 줄여 일반 PC나 노트북에서도 돌릴 수 있게 만들었는데, 오히려 도구를 다루는 능력은 더 좋아졌습니다. 클라우드 없이 내 기기에서 동작하는 AI 에이전트가 현실에 한 걸음 더 가까워졌다는 뜻입니다.

## 심층 분석

### 기술 의미
압축 과정에서 일반 성능 유지가 아니라 특정 능력(도구 호출)을 우선 보호하도록 최적화한 것은 "용도별 양자화"라는 방향을 보여준다(→ 분석). 도구 호출은 개선되고 수학·다단계 추론은 12~18점 하락한 결과는 에이전트용 모델에서 능력 간 트레이드오프를 명시적으로 선택할 수 있음을 시사한다. 마지막 압축 단계의 레시피가 비공개라 재현성은 제한된다.

### 업계 영향
8GB 이하 파일이 표준 llama.cpp에서 돌아가면서 소비자 GPU·노트북에서 27B급 로컬 에이전트를 운용할 수 있는 선택지가 늘었다(→ 분석). Bonsai 2·ISTA GSQ 등 Qwen3.8-27B 압축판 경쟁이 활발해, 오픈 모델 생태계에서 "기반 모델 + 커뮤니티 압축" 분업 구조가 자리 잡는 모습이다(→ 분석). 성능 수치는 Underdog 자체 측정이며 독립 평가는 아직 없다.

### 관련 프로젝트
- Saluki 27B (Hugging Face 모델 카드, MarkTechPost 기사 링크 참조)
- llama.cpp: https://github.com/ggml-org/llama.cpp

### 관련 뉴스
- [Bottlecap ThinkingCap Qwen3.8-27B](../records/2026-09-25-bottlecap-thinkingcap-qwen3-8-27b.md) — 같은 기반 모델의 파생 빌드
- [JetBrains Mellum 2.1 코딩 에이전트 모델](../records/2026-10-09-jetbrains-mellum2-1-12b-moe-coding-agents.md) — 에이전트용 소형 오픈 모델

## 원문 발췌
> "Underdog Saluki 27B is a 2-bit GGUF of Qwen3.8-27B that fits in 7.89 GB. The full BF16 model needs 54 GB."
> "Underdog tuned the compression to protect tool calling, the skill that turns a chat model into an agent."
> "Saluki scores 88, the full model 84, and PrismML's Bonsai 2 scores 70."
> "Each vendor uses its own harness, so cross-vendor scores are not directly comparable."

## 수집 노트
- **선정 이유**: 단일 소스(교차 1)라 ⭐⭐이지만, 도구 호출을 보존 목표로 삼은 로컬 에이전트 모델이라 에이전트 온디바이스 주제와 직결됨.
- **제외 후보**: HN "Why Are Coding Agents So Dumb?" — 개인 블로그 의견 글로 신규 사실 부족. Python 3.15 출시 — AI 에이전트 무관.
