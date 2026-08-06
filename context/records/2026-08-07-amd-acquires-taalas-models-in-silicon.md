# AMD, AI 칩 스타트업 Taalas 인수 — 모델 웨이트를 실리콘에 직접 새겨 추론 성능 극대화

## 메타데이터
- **원문 URL**: https://www.theregister.com/systems/2026/08/06/amd-acquires-ai-chip-startup-taalas-to-boost-inference-performance-by-etching-models-into-silicon/5284344
- **소스**: The Register
- **발행일**: 2026-08-06
- **수집일**: 2026-08-07
- **수집자**: 레노버
- **카테고리**: industry
- **태그**: [amd, taalas, ai-chip, inference, silicon, nvidia-competition]
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> AMD가 캐나다 스타트업 Taalas를 인수했다. Taalas는 AI 모델 웨이트를 실리콘에 직접 새겨 넣어(etching) HBM 없이도 초고속 추론을 수행하는 칩을 개발했으며, 테스트 칩에서 Nvidia GPU 대비 48배 빠른 속도를 입증했다.

## 번역 (한국어)
AMD는 Nvidia의 AI 하드웨어 지배력에 도전하기 위해 캐나다 토론토 기반 AI 칩 스타트업 Taalas를 인수했다. Taalas의 핵심 기술은 AI 모델의 가중치(weight)를 하드웨어에 직접 새겨 넣는 방식으로, 기존 GPU 방식처럼 HBM에 가중치를 저장하지 않고도 추론을 수행할 수 있다.

2026년 2월 공개된 첫 테스트 칩 HC1은 TSMC 6nm 공정으로 제작되었으며, Meta Llama 3.1 8B를 초당 16,960 토큰으로 서빙했다. 이는 당시 기준 Nvidia GPU 대비 48배, Cerebras 가속기 대비 8.5배 빠른 속도였다. 칩 구조는 모델 가중치가 새겨진 mask-ROM recall fabric과 KV 캐시 및 LoRA 어댑터를 위한 SRAM recall fabric 두 영역으로 구성된다.

다만, 모델이 칩에 고정되므로 LoRA 수준 이상의 변경이 필요하면 리스핀(재설계)이 필요하다는 단점이 있다. AMD는 이 기술을 자사 Instinct 기반 Helios 랙 시스템과 결합하여, 프롬프트 처리는 GPU에서 토큰 생성은 Taalas 가속기에서 담당하는 분리형 아키텍처를 구축할 계획이다.

## 왜 중요한가?
AI 추론 비용은 모델이 커질수록 기하급수적으로 증가한다. Taalas의 방식은 특정 모델에 대해 한 번 칩을 제작하면 이후에는 HBM 비용 없이 극저비용으로 추론을 수행할 수 있어, 상용 배포된 AI 서비스의 단가를 근본적으로 낮출 잠재력이 있다. AMD가 이를 인수한 것은 AI 칩 경쟁이 GPU 성능 경쟁을 넘어 새로운 패러다임 전쟁으로 진입했음을 의미한다.

## 심층 분석

### 기술 의미
Taalas의 MSIC(Model-Specific Integrated Circuit) 접근은 ASIC과 유사하지만, 가중치가 트랜지스터 레벨에 하드코딩된다는 점이 결정적으로 다르다. 메탈 2층만 변경하면 새 모델에 적용할 수 있다는 주장은 재설계 비용과 시간을 획기적으로 줄일 수 있어 실용성을 높인다. GPU+Taalas 하이브리드 아키텍처는 프롬프트 처리(병렬 컴퓨트)와 토큰 생성(순차 메모리 접근)의 워크로드 특성에 맞게 최적화한 현명한 설계다.

### 업계 영향
Nvidia의 Groq 라이선싱(200억 달러)에 이은 AMD의 Taalas 인수는, 추론 최적화 하드웨어 경쟁이 본격화되고 있음을 보여준다. AI 에이전트가 실시간으로 대량의 토큰을 생성하는 환경에서 추론 비용은 플랫폼 경제성의 핵심 변수다. 한편 모델 고정이라는 본질적 한계로 인해, 초기에는 모델이 안정화된 엔터프라이즈 배포에 주로 적용될 것으로 예상된다.

### 관련 프로젝트
- [Taalas 기술 상세 (The Next Platform)](https://www.nextplatform.com/compute/2026/02/19/taalas-etches-ai-models-onto-transistors-to-rocket-boost-inference/4092140)
- [AMD Helios 랙 시스템](https://www.theregister.com/systems/2026/07/23/amd-attacks-the-rack-with-helios-systems-that-rival-nvidias/5277246)

### 관련 뉴스
- [OpenAI 커스텀 인퍼런스 칩 Jalapeño](../records/2026-08-01-openai-unveils-first-custom-ai-inference-chip-jalapeno-with-broadcom.md) — OpenAI도 자체 추론 칩 개발

## 원문 발췌
> "The startup's chips don't rely on HBM to store the model weights but rather etch them directly into the silicon. In a sense, Taalas' chips are really model-specific integrated circuits or MSICs."
