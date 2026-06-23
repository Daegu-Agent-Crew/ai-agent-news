# Cisco AI Introduces FAPO: Pipeline-Aware Prompt Optimization With Step-Level Failure Attribution

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/06/20/cisco-ai-introduces-fapo-pipeline-aware-prompt-optimization-with-step-level-failure-attribution-and-claude-code-orchestration/
- **소스**: MarkTechPost
- **발행일**: 2026-06-20
- **수집일**: 2026-06-23
- **수집자**: 대구루
- **카테고리**: framework
- **태그**: [prompt-optimization, claude-code, langgraph, cisco, open-source]
- **신선도**: fresh

## 핵심 요약
> Cisco AI가 멀티스텝 LLM 파이프라인의 프롬프트를 자동 최적화하는 오픈소스 프레임워크 FAPO를 발표했다. Claude Code가 오케스트레이션을 담당하며, 프롬프트→파라미터→구조 변경까지 3단계로 에스컬레이션하여 최적화를 수행한다.

## 번역 (한국어)
Cisco AI가 "FAPO(Fully Automated Prompt Optimization)"를 공개했다. FAPO는 Claude Code 기반의 자동 프롬프트 최적화 시스템으로, 베이스라인 프롬프트에서 시작해 목표 정확도에 도달할 때까지 반복적으로 최적화를 수행한다. Apache 2.0 라이선스로 오픈소스로 공개되었으며, Codex도 최적화 에이전트로 지원한다.

핵심 작동 방식은 6단계 폐루프이다: 평가(Evaluate) → 원인 귀인(Attribute) → 제안(Propose) → 검토(Review) → 비교(Compare) → 반복(Iterate). 각 사이클에서 실패 케이스를 단계별로 분석하여 근본 원인을 분류하고, 이를 해결하는 변형을 생성·검증한다.

FAPO의 가장 큰 차별점은 3수준 에스컬레이션이다. 가장 비용이 낮은 프롬프트 수정을 먼저 시도하고, 충분한 개선이 없으면 파라미터 변경(예: temperature, retrieval_k), 마지막으로 체인 구조 자체를 변경한다(예: self-reflection 노드 추가, ReAct 패턴 전환). 기존 프롬프트 최적화 도구인 GEPA 대비 18개 모델-벤치마크 비교 중 15개에서 승리했으며, 평균 +14.1pp 향상을 기록했다.

특히 HoVer와 IFBench에서는 구조적 변경까지 에스컬레이션하여 +33.8pp의 평균 향상을 달성했다. 과적합 방지를 위해 학습 분할 데이터만 검사하고, 검증/테스트는 집계 점수만 노출하는 등 안전장치를 마련했다.

## 심층 분석

### 기술 의미
FAPO는 프롬프트 엔지니어링을 "수동 공예"에서 "자동화된 엔지니어링"으로 전환하는 의미가 있다. 기존 프롬프트 최적화가 진화적 탐색(genetic search)에만 의존했다면, FAPO는 실패 원인을 단계별로 귀인(attribution)하여 구조적 문제인지 프롬프트 문제인지 자동으로 판별한다. 이는 에이전트 파이프라인 디버깅의 가장 큰 병목인 "어느 단계에서 실패했는가"를 체계적으로 해결한다.

LangGraph 상태 그래프를 체인 정의로 사용한다는 점도 주목할 만하다. 이는 이미 LangGraph로 구축된 에이전트 시스템에 FAPO를 드롭인으로 적용할 수 있음을 의미한다.

### 업계 영향
- **에이전트 프레임워크 경쟁 가속**: 프롬프트 최적화 자동화는 에이전트 개발의 운영 비용을 크게 낮춘다. FAPO가 오픈소스라는 점에서 생태계 전체에 널리 퍼질 가능성이 높다.
- **Claude Code 생태계 강화**: Anthropic의 Claude Code를 오케스트레이터로 사용한다는 것은 Claude가 단순 채팅 모델이 아닌 개발 도구로서의 입지를 강화한다.
- **평가 프레임워크 표준화**: 단계별 실패 분류(Retrieval / Cascade / Format / Reasoning)는 업계에서 사실상 표준으로 채택될 가능성이 있다.

### 관련 프로젝트
- FAPO GitHub: <https://github.com/cisco-foundation-ai/fully-automated-prompt-optimization>
- LangGraph: <https://langchain-ai.github.io/langgraph/>
- GEPA (비교 대상): Evolutionary prompt optimization framework

### 관련 뉴스
- [Gemini 3.1 Pro](../records/2026-06-18-gemini-31-pro-agentic-model.md) — 벤치마크 비교 모델
- [Agentic AI Benchmarks 2026](../records/2026-06-18-agentic-benchmarks-2026.md) — 평가 체계 동향
- [Vercel agent-browser](../records/2026-06-20-vercel-agent-browser-tool.md) — 도구 호출 최적화 맥락

## 원문 발췌
> "Small wording changes can swing accuracy by 20 percent. What works on a few examples often breaks at scale."

> "FAPO escalates through three levels — prompt, parameter, then chain structure — using step-level failure attribution to decide what to change next."
