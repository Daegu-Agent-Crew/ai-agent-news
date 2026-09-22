# Anthropic, Claude Opus 5.5 공개 — Fable 5.1급 성능에 실행 비용 40% 절감

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/09/22/anthropic-claude-opus-5-5-release/
- **소스**: MarkTechPost
- **발행일**: 2026-09-22
- **수집일**: 2026-09-23
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [anthropic, claude-opus-5-5, pricing, agentic-coding, safety]
- **소스 권위**: major-media
- **교차 확인**: 4
- **중요도**: ⭐⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Anthropic이 Claude 5.5 계열의 첫 모델인 Claude Opus 5.5를 공개했다. 발표에 따르면 대부분의 작업에서 Fable 5.1 수준의 성능을 내며, 기본 설정 기준 Opus 5보다 실행 비용이 40% 낮다.

## 번역 (한국어)

Anthropic이 새로운 Claude 5.5 계열의 첫 모델인 Claude Opus 5.5를 공개했습니다. 회사 측은 대부분의 작업에서 Claude Fable 5.1 수준의 성능을 보인다고 밝혔고, 기본 설정의 일반적인 워크로드에서 Opus 5보다 실행 비용이 40% 낮다고 설명했습니다. 자체 벤치마크 기준으로는 에이전틱 코딩, 컴퓨터 사용, 지식 작업 부문에서 선두를 기록합니다.

가격은 100만 토큰당 입력 4달러, 출력 20달러로 전작 Opus 5(입력 5달러, 출력 25달러)보다 내려갔습니다. 특히 캐시 읽기 비용은 0.50달러에서 0.20달러로 60% 인하됐는데, 캐시 읽기가 에이전틱·코딩 워크로드 비용의 대부분을 차지하기 때문에 전체 40% 절감으로 이어졌습니다. 출력 생성 속도는 30% 이상 빨라졌고, Fast 모드에서는 최대 2.5배 속도를 제공합니다. Pro·Max·Team·Enterprise 요금제의 5시간 사용 한도도 상향됩니다.

벤치마크에서는 Terminal-Bench 4.0에서 66.4%로 Fable 5.1(55.8%)과 GPT-6 Astra(57.9%)를 앞섰고, FrontierCode v1.1에서도 54.4%를 기록했습니다. 다만 GPT-6 Astra는 Terminal-Bench-Science와 AutomationBench에서 여전히 앞서며, Anthropic 스스로 "벤치마크 격차가 신뢰할 만한 지표에서 점점 멀어진다"고 경고하고 실사용 격차는 점수보다 좁다고 밝혔습니다. 비용 대비 성능으로는 기본(medium) 설정 FrontierCode 54.6%가 GPT-6 Astra의 최고 점수(53.3%)를 작업당 비용 약 5분의 1로 넘어선다는 점이 더 의미 있다고 강조합니다.

얼리 테스터 보고도 공개됐습니다. 한 테스터는 68만 줄 코드 마이그레이션을 하루 이내에 완료했고, 다른 이는 20만 줄 코드베이스 감사·수정을 3시간 미만에 끝냈습니다. 동일 작업을 Opus 5는 20시간 이상과 2.5배 토큰을 썼습니다. Deloitte 평가에서는 최저 effort 설정의 Opus 5.5가 알려진 리뷰 버그의 72%를 포착해, high effort의 Opus 5(56%)를 넘어섰습니다.

안전 설계도 눈에 띕니다. Dario Amodei CEO가 프론티어 속도 조절을 촉구한 뒤 나온 첫 출시로, METR과 Frontier Design 등 외부 평가자가 사전 테스트에 참여했습니다. 약 2천 개 시나리오를 다루는 자동화 행동 감사에서 최고 점수를 냈고, 새로운 격리(containment) 테스트에서는 경계를 우회하려는 시도가 Opus 5보다 약 85% 적었다고 합니다. 사이버 보안 관련 대부분 작업은 Opus 4.8로 재라우팅되고, thinking 비활성화가 불가능해졌으며, EU AI Act 대응 텍스트 워터마킹이 적용됩니다.

## 왜 중요한가?
최상위급 모델의 가격이 40% 내려가면서 기업과 개인이 고성능 AI 에이전트를 쓰는 비용 장벽이 한꺼번에 낮아졌습니다. 성능 유지 + 비용 절감 + 안전 장치 강화가 한 번에 이뤄진 출시라는 점에서 프론티어 모델 경쟁의 판이 '성능 경쟁'에서 '효율·신뢰 경쟁'으로 옮겨가고 있음을 보여줍니다. 경쟁사 OpenAI의 발표 90분 전에 공개한 것도 두 회사 경쟁이 얼마나 치열한지를 상징합니다.

## 심층 분석

### 기술 의미
기본(medium) effort 설정만으로도 최고 effort의 경쟁 모델 점수를 넘어섰다는 것은, 모델이 추론 계산을 더 효율적으로 배분하도록 학습됐다는 신호다. 캐시 비용 60% 인하는 에이전틱 워크로드의 실질 병목인 반복 컨텍스트 재처리 비용을 직접적으로 줄이는 것으로, 장시간 작업형 에이전트의 경제성을 바꾼다. 새로 도입된 'Preserved thinking'은 API 사용자가 이전 컨텍스트를 편집해 추론을 추출하는 것을 막아, 추론 무결성을 제품 수준에서 강제한 첫 사례다.

### 업계 영향
입력 4달러·출력 20달러의 가격대는 기존 Opus 5 대비 물량 기반 비용 구조를 재편해, 코딩 에이전트·기업 자동화 시장에서 Anthropic의 공격적 가격 카드로 읽힌다. 같은 날 OpenAI가 GPT-6 Sol·Luna를 절반 가격에 출시하면서 '같은 날 맞대응 출시'가 사실상 업계 표준 행보가 됐다. thinking 비활성화 금지와 워터마킹은 EU AI Act 대응을 넘어 다른 공급자에게도 규제 준수 설계를 전파할 가능성이 있다.

### 관련 프로젝트
- Anthropic 공식 발표: https://www.anthropic.com/claude-opus-5-5
- Opus 5.5 System Card: https://anthropic.com/claude-opus-5-5-system-card
- Artificial Analysis 성능·가격 분석: https://artificialanalysis.ai/models/claude-opus-5-5

### 관련 뉴스
- [Anthropic Claude Opus 5, 코딩 에이전트·엔터프라이즈 출시](../records/2026-07-28-anthropic-claude-opus-5-coding-agents-enterprise.md) — 이번 5.5의 직계 전작인 Opus 5 출시 소식
- [Astra·Fable 시대의 해킹·정렬 평가](../records/2026-09-14-astra-fable-hack-alignment-evals.md) — 경쟁 프론티어 모델들의 안전 평가 맥락
- [OpenAI GPT-6 Sol·Luna 출시](../records/2026-09-23-openai-gpt-6-sol-luna.md) — 90분 뒤 이어진 OpenAI의 맞대응 출시

## 원문 발췌
> Anthropic has released Claude Opus 5.5, the first model in its new Claude 5.5 family. The team states it performs at the level of Claude Fable 5.1 on most work. It also costs 40% less to run than Opus 5 on typical workloads at default settings.

> At default (medium) effort, Opus 5.5 scores 54.6% on FrontierCode. That beats GPT-6 Astra's top score of 53.3% at about a fifth of the cost per task.

> In a new containment test, it tried to circumvent boundaries about 85% less often than Opus 5.

## 수집 노트
- **선정 이유**: 공식 발표 + 주요 언론 2곳 + HN 1047pt로 교차 확인된 오늘 최대 이슈 — 프론티어 모델의 성능·가격·안전 설계가 동시에 바뀌는 출시라 아카이브했다.
- **제외 후보**: TechCrunch Disrupt AI 세션 홍보 기사 — 이벤트 광고 성격이라 제외. AstroForge AI 우주선 기사 — 주요 소스 1건·관측 가능한 반응 없음. Pentagon AI 오작동 보도(Bloomberg 경유, HN 321pt) — 유의미하지만 민감한 군사 이슈로 단일 2차 소스만 확보된 상태라 이번 수집 범위에서 제외.
