# 2026년 맞춤형 추론 엔진 붐과 그 함정

## 메타데이터
- **원문 URL**: https://devnull.land/amd-specific-llama-cpp
- **소스**: devnull.land (개인 기술 블로그)
- **발행일**: 2026-11-26
- **수집일**: 2026-11-27
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [llama.cpp, AMD, 추론 엔진, RDNA, 오픈소스]
- **소스 권위**: community
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> 2026년 11월 기준 특정 하드웨어·모델에 특화된 추론 엔진 포크가 폭증했다. 글쓴이는 llama.cpp 기반 AMD 패치셋 llama-cpp-rdna-boosts로 토큰 생성 35→55 t/s, 프리필 700→1300 t/s 개선을 보고했다.

## 번역 (한국어)
2026년 11월 현재, 맞춤형 추론 엔진의 폭발적 증가가 일어났다고 글쓴이는 전한다. llama.cpp, SGLang, vLLM 등 기존 엔진에서 영감을 받은 Strata, Basalt, RustingStrata 같은 신규 프로젝트들이 그 예다. 이들의 공통점은 세 가지다: 특정 모델·하드웨어 부분집합에 집중, 프론티어 모델로 전체를 '바이브 코딩', 그리고 더 높은 토큰 생성 속도 추구.

글쓴이의 관찰에 따르면 이 중 Strata는 양자화된 Qwen 3.8 Flash Next 180B 모델을 16GB VRAM 그래픽카드와 16GB 시스템 RAM에서 높은 속도로 구동한다. 다만 속도 추구가 "모델이 어떻게 생각하는지를 바꿔서" 빨라지는 방향으로 흘렀다고 지적한다. 예컨대 Strata는 본래 선택됐을 다른 전문가(expert) 대신 VRAM에 로드된 전문가를 선호해 처리한다는 것이다.

글쓴이는 자신의 철학에 맞는 대안으로 llama-cpp-rdna-boosts를 소개한다. llama.cpp의 고정 커밋에 적용하는 최소 패치셋 형태로, AMD 전용 개선을 담고 있다. R9700을 eGPU로 연결한 환경에서 Swift-1.5-Qwen3.8-27B(Q6_K_L, MTP 활성) 구동 시 프리필 약 700→1300 t/s, 토큰 생성 약 35→55 t/s로 개선됐다고 보고한다. 구체적 수치는 하드웨어에 따라 다를 수 있다(YMMV)고 명시했다.

## 왜 중요한가?
"AI 코딩 도구로 AI 인프라 도구를 만든다"는 2026년 오픈소스 생태계의 실험이 실제 성과를 내고 있음을 보여준다. 동시에 속도 경쟁이 정확성(전문가 선택 왜곡 같은)을 희생할 수 있다는 경고도 담고 있어, 무료로 AI를 돌리는 사용자들에게 실질적 선택 기준을 준다.

## 심층 분석

### 기술 의미
LLM 코드베이스가 LLM의 도움으로 포크·패치되는 재귀적 개발 구조가 정착했다. Strata식 '전문가 선호' 최적화는 MoE(전문가 혼합) 모델의 라우팅을 하드웨어 상태에 맞춰 왜곡하는 것으로, 출력 분포 자체가 바뀔 수 있어 품질 검증 없이 쓰기엔 위험하다(→ 분석). 반면 rdna-boosts는 상위 llama.cpp에 재적용되는 패치셋이라 유지보수 부담이 낮다는 구조적 장점이 있다.

### 업계 영향
하드웨어 특화 추론 최적화가 AMD 등 비-쿠다 진영에서도 활발해진 것은 GPU 공급 불균형 상황에서 의미 있다(→ 분석). 바이브 코딩으로 만든 인프라가 주류가 되면 감사·검증 도구 수요도 함께 커질 것으로 본다(→ 분석).

### 관련 프로젝트
- llama-cpp-rdna-boosts: https://github.com/stew675/llama-cpp-rdna-boosts
- vllm-radiance (AMD vLLM 포크): https://codeberg.org/StillDeadcode/vllm-radiance/

### 관련 뉴스
- (해당 없음)

## 원문 발췌
> "As of November 2026, an explosion in the number of bespoke inference engines has taken place."
> "Strata specifically has taken to preferring to poll experts loaded in VRAM even if other experts (pushed to system RAM/disk) would have been normally chosen."
> "It's lean, and increased my token generation from 35 to 55 tokens/second, and my prefill from 700 to 1300 tokens per second. YMMV."

## 수집 노트
- **선정 이유**: 추론 엔진 생태계의 구조적 변화(포크 폭증·바이브 코딩·속도 왜곡 논란)를 1차 관찰로 담은 글로, 로컬 LLM 사용자에게 실용 정보. 교차 확인 2건에 그쳐 ⭐⭐⭐ 산정.
- **제외 후보**: "Tracking Diseases Cured by AI" — 흥미롭지만 단일 사이트 확인만 가능. "45°C inlets" — HPC 냉각 이슈로 AI 직접 관련성 낮음.
