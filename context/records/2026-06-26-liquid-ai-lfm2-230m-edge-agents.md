# Liquid AI LFM2.5-230M — 에지 환경에서 에이전트를 실행하는 초소형 모델

## 메타데이터
- **원문 URL**: https://venturebeat.com/technology/liquid-ais-smallest-model-yet-lfm2-5-230m-beats-models-4x-its-size-at-data-extraction-can-run-anywhere/
- **소스**: VentureBeat
- **발행일**: 2026-06-25
- **수집일**: 2026-06-26
- **수집자**: 대구루
- **카테고리**: model
- **태그**: [liquid-ai, lfm2, edge-ai, small-model, on-device, data-extraction, agentic]
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> 전 MIT 연구진이 창업한 Liquid AI가 2억 3천만 파라미터의 초소형 모델 LFM2.5-230M을 공개했다. 자체적 LFM2 하이브리드 아키텍처를 사용해 스마트폰, 라즈베리파이, 휴머노이드 로봇 등 에지 환경에서 직접 에이전트 워크플로우를 실행할 수 있으며, 데이터 추출 벤치마크에서 자신보다 4배 큰 모델들을 능가한다.

## 번역 (한국어)
전 MIT 컴퓨터 과학자들이 창업한 Liquid AI가 사상 가장 작은 언어 모델인 LFM2.5-230M을 발표했다. 2억 3천만 파라미터로 설계된 이 모델은 온디바이스 에이전트 워크플로우를 위해 명시적으로 구축되었으며, "어디서든 실행" 가능하다는 점을 핵심 장점으로 내세운다. 특히 데이터 추출 작업에서 8억 파라미터의 Alibaba Qwen3.5-0.8B 및 10억 파라미터의 Google Gemma 3 1B보다 뛰어난 성능을 보여준다.

이 모델의 가장 큰 차별점은 표준 트랜스포머 아키텍처에서 벗어난 LFM2 하이브리드 구조다. 게이트 기반 단거리 합성골(gated short-range convolution)과 그룹화 쿼리 어텐션(grouped-query attention)을 교차 배치하여, 순수 어텐션 메커니즘의 이차적 메모리 비용 없이도 긴 문맥과 순차 데이터를 효율적으로 처리한다. 32K 컨텍스트 윈도우를 지원하며, 메모리 발자국은 400MB 미만이다.

실제 성능 지표도 인상적이다. 삼성 Galaxy S25 Ultra(Snapdragon Gen4 CPU)에서 초당 213 토큰의 디코드 속도를 기록했고, 제약이 심한 라즈베리파이 5에서도 초당 42 토큰을 유지한다. 또한 BFCLv3 도구 사용 벤치마크에서 43.26점을 기록하여 IBM Granite 4.0-350M(39.58)과 Google Gemma 3 1B IT(16.61)를 크게 앞섰다.

엔터프라이즈 관점에서 이 모델은 'AI ETL'의 게임 체인저가 될 수 있다. 기존 ETL 스크립트는 문서 레이아웃 변경이나 스키마 업데이트만으로도 전체 파이프라인이 깨지는 취약성을 가지고 있었다. LFM2.5-230M은 비싼 클라우드 API 호출 없이 로컬 하드웨어에서 직접 비정형 데이터를 구조화된 JSON으로 변환할 수 있다. Claude Opus 4.6(백만 입력 토큰당 $5)을 일일 청구서 파싱에 쓰는 것은 경제적으로 비현실적이기 때문이다.

또한 Liquid AI는 Unitree G1 휴머노이드 로봇에 이 모델을 배포하는 시연을 선보였다. 로봇의 온보드 NVIDIA Jetson Orin 모듈에서 완전히 온디바이스로 실행되며, "2초간 가만히 서 있다가 1미터/초 속도로 3미터 앞으로 걸어가라"와 같은 자연어 명령을 처리할 수 있다.

## 왜 중요한가?
AI가 꼭 거대한 클라우드 컴퓨터에서만 동작해야 한다는 편견을 깼습니다. 스마트폰이나 로봇 같은 작은 기기에서도 직접 AI 에이전트가 실행될 수 있다는 것은, 통신 비용과 지연 시간을 없애고 개인정보 보호도 강화할 수 있음을 뜻합니다. 이는 AI의 활용 범위를 일상 기기로 크게 넓히는 전환점이 될 수 있습니다.

## 심층 분석

### 기술 의미
LFM2.5-230M의 핵심 기여는 19조 토큰의 사전 학습을 2억 3천만 파라미터라는 극도로 압축된 공간에 담아낸 것이다. LFM2 아키텍처는 트랜스포머의 어텐션 메커니즘을 합성곱과 교차 배치하여 메모리 오버헤드를 대폭 줄이면서도 32K 컨텍스트를 유지한다. 초당 213 토큰(Snapdragon)과 42 토큰(라즈베리파이)이라는 디코드 속도는 실시간 에이전트 응답이 에지 환경에서도 가능함을 입증한다. 도구 호출 벤치마크 BFCLv3에서 43.26점을 기록한 것은, 이 모델이 추론보다는 구조화된 도구 실행과 에이전트 파이프라인 유지에 최적화되어 있음을 보여준다.

### 업계 영향
에지 AI 모델 경쟁이 새로운 국면에 진입하고 있다. Google Gemma 4 E2B(20억), Weibo VibeThinker-3B(30억) 등이 경량 모델로 주목받아 왔으나, LFM2.5-230M은 그보다 한 자릿수 작은 2억 3천만 파라미터로 경쟁한다. 이는 비용에 민감한 엔터프라이즈의 ETL 자동화, 모바일 에이전트, 로봇공학 분야에서 즉각적인 실용 가치를 갖는다. 듀얼 사용 라이선스(매출 $10M 미만 무료)를 통해 스타트업과 소규모 기업의 진입 장벽도 낮췄다. Anthropic Fable 5 수출 통제 이후, 유럽 기업들이 미국 모델 의존도를 낮추려는 움직임 속에서 온디바이스 모델의 가치가 더욱 부각되고 있다.

### 관련 프로젝트
- [LFM2.5-230M 블로그 포스트](https://www.liquid.ai/blog/lfm2-5-230m)
- [Liquid AI 공식 홈페이지](https://www.liquid.ai/)
- [BFCLv3 도구 사용 벤치마크](https://gorilla.cs.berkeley.edu/leaderboard.html)

### 관련 뉴스
- [Xiaomi HarnessX](../records/2026-06-25-xiaomi-harnessx-self-rewriting.md) — 소규모 모델 성능 향상 프레임워크
- [Agentic Benchmarks 2026](../records/2026-06-18-agentic-benchmarks-2026.md) — 에이전트 벤치마크 동향
- [June 2026 AI Model War](../records/2026-06-24-june-2026-ai-model-war.md) — 2026년 모델 경쟁 현황

## 원문 발췌
> "This is a 230-million-parameter foundation model explicitly designed for on-device agentic workflows, and as Liquid states in its release blog post, that small size makes it possible to run nearly 'anywhere.'"

> "LFM2.5-230M proves that while 3-billion-parameter models like VibeThinker are solving advanced calculus, a 230-million-parameter model is the superior, highly optimized choice for executing structured tool calls and keeping agentic pipelines running efficiently on constrained hardware."
