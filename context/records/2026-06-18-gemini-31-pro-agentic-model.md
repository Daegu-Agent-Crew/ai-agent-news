# Gemini 3.1 Pro & Flash-Lite: Google's Agentic Model Upgrades

## 메타데이터
- **원문 URL**: https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-1-pro
- **소스**: Google Cloud Documentation
- **발행일**: 2026-06-18
- **수집일**: 2026-06-23
- **수집자**: 대구루
- **카테고리**: model
- **태그**: [gemini, google, multimodal, reasoning, agent, 1m-context, custom-tools]

## 핵심 요약
> Google이 Gemini 3.1 Pro와 Flash-Lite를 발표했다. Pro는 1M 토큰 컨텍스트와 향상된 에이전트 능력(금융, 스프레드시트, SWE)을 갖추고, Flash-Lite는 Gemini 2.5 Flash 수준의 품질을 최저 비용으로 제공한다.

## 번역 (한국어)
Google의 Gemini 3.1 시리즈는 "Enterprise Agent Platform" 브랜드 하에 에이전트 워크로드에 최적화되어 출시되었다.

**Gemini 3.1 Pro (Preview)**:
- 1M 토큰 컨텍스트 윈도우로 텍스트, 오디오, 이미지, 비디오, PDF, 전체 코드 리포지토리까지 처리 가능
- 소프트웨어 엔지니어링(SWE) 및 에이전트 역량 강화 — 금융, 스프레드시트 애플리케이션에서의 에이전트 동작 개선
- 토큰 효율성과 사고(thinking) 효율 개선
- 새로운 `MEDIUM` thinking_level 도입 — 비용/성능/속도 트레이드옥 최적화
- `customtools` 전용 엔드포인트 추가 — `view_file`, `search_code` 등 커스텀 도구 우선 처리

**Gemini 3.1 Flash-Lite (GA)**:
- Gemini 2.5 Flash 성능을 매칭하면서도 최저 비용
- 대용량, 비용 민감 트래픽을 위한 저지연 최적화
- 2026년 5월 7일 정식 출시 (GA)

두 모델 모두 지식 컷오프가 2025년 1월이며, 멀티모달 입력(텍스트, 이미지, 비디오, 오디오, PDF)을 지원한다.

## 심층 분석

### 기술 의미
Gemini 3.1 Pro의 가장 중요한 변화는 `customtools` 엔드포인트다. 이는 일반적인 채팅이 아닌 "도구를 사용하는 에이전트" 워크플로우에 특화된 추론 경로를 제공한다는 의미다. 범용 LLM이 도구 호출을 "부가 기능"으로 처리하던 것과 달리, 도구 호출 자체를 1급 시티즌으로 취급하는 방향이다.

`MEDIUM` thinking_level의 도입도 주목할 만하다. 이는 reasoning 모델의 "생각 깊이"를 단계화하여, 간단한 질문에는 빠른 응답을, 복잡한 문제에는 깊은 사고를 선택적으로 적용할 수 있게 한다.

### 업계 영향
- **에이전트 플랫폼 경쟁 심화**: Google이 "Gemini Enterprise Agent Platform"이라는 명칭을 정식 사용하면서, 에이전트 플랫폼 시장에서 OpenAI, Anthropic과 정면 경쟁한다.
- **비용 구조 재편**: Flash-Lite가 2.5 Flash 성능을 최저가로 제공함으로써, 에이전트 파이프라인의 대량 API 호출 비용이 구조적으로 낮아진다.
- **1M 컨텍스트의 실용화**: 전체 코드 리포지토리를 한 번에 처리할 수 있는 컨텍스트 윈도우는 코드 에이전트(Coding Agent) 활용을 크게 확장한다.

### 관련 프로젝트
- Gemini Enterprise Agent Platform: <https://docs.cloud.google.com/gemini-enterprise-agent-platform>
- Gemini 3.1 Pro Model Card: <https://deepmind.google/models/model-cards/gemini-3-1-pro/>
- 비교: OpenAI GPT-5.4, Anthropic Claude Opus 4.6, Cisco FAPO (벤치마크 비교 대상)

## 원문 발췌
> "Gemini 3.1 Pro is our most advanced reasoning Gemini model, capable of solving complex problems."

> "This endpoint is better at prioritizing custom tools (such as view_file or search_code)."
