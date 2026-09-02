# Anthropic Fable 5.1·Mythos 5.1 출시 — 더 저렴하고, 덜 억압적인 세이프가드

## 메타데이터
- **원문 URL**: https://techcrunch.com/2026/09/01/anthropics-new-fable-release-is-cheaper-less-restrictive/
- **소스**: TechCrunch
- **발행일**: 2026-09-01
- **수집일**: 2026-09-02
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [Anthropic, Fable, Mythos, 모델출시, 토큰비용]
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Anthropic이 최신 플래그십 모델의 쌍둥이 버전인 Fable 5.1과 Mythos 5.1을 출시했다. 토큰 비용 절감과 세이프가드 오탐 감소가 핵심 개선점이며, 제로 데이터 보존(ZDR) 기반 Enterprise Frontier Safeguards가 이번 가을 롤아웃된다.

## 번역 (한국어)
Anthropic은 화요일 회사의 가장 발전된 AI 모델의 쌍둥이 버전인 Fable과 Mythos 5.1을 출시했다. 성능 향상에 더해 새 Fable 릴리스는 모델의 세이프가드로 인한 토큰 비용과 오탐 제한을 줄이기 위한 변경 사항을 포함한다. 이전 Mythos 모델과 마찬가지로 Mythos 5.1은 사이버버리티 또는 생명과학 연구에 종사하는 등록된 Anthropic 파트너만 이용할 수 있다. 제한 없는 버전인 Fable 5.1은 오늘부터 클라우드 플랫폼이나 Anthropic API를 통해 이용할 수 있다.

가장 중요한 변화 중 하나는 제로 데이터 보존(ZDR) 채택이다. 고객은 데이터 유출 없이 자체 인프라에서 Anthropic 모델을 실행할 수 있게 된다. 이전에는 보안 우려로 Fable에서 이용할 수 없었던 고정밀 서비스(Enterprise Frontier Safeguards)가 이번 가을 사용자에게 롤아웃된다. 주목할 점은 이 시스템이 여전히 에이전트나 사용자의 오용을 모니터링하되, 고객이 모니터링 방식을 통제한다는 것이다. 발표와 함께 Anthropic은 고객 데이터가 부적절하게 접근된 적이 없으며 "명시적 허가 없이 엔터프라이즈 데이터로 학습한 적이 없고, 앞으로도 결코 없을 것"이라고 강조했다.

Anthropic 릴리스의 관례대로 새 모델들은 CLI 기반 코딩을 평가하는 Terminal-Bench 4.0과 일반 추론을 평가하는 Humanity's Last Exam 등 다양한 벤치마크에서 기록을 세웠다. Anthropic은 또한 출시 전 모델이 생성한 세 가지 신규 과학적 발견을 공개했는데, 여기에는 커스텀 GPU 최적화와 기존 사진으로 조립한 고해상도 금성 지도가 포함된다.

시스템 카드는 Mythos가 AI가 스스로를 개선하는 자동화된 AI 개발 관련 우려에 대해 "저위험"으로 평가하며, "내부 AI R&D 진행을 가속화하는 능력이 현재 추세에 부합한다"고 명시했다. 일반적인 오 행동 측면에서 Mythos는 Opus보다 약간 더 취약하며, 이는 향상된 능력의 결과일 수 있다. 시스템 카드는 "Mythos 5.1은 Opus 5 대비 전반적인 비정렬 행동에서 약간의 후퇴이지만, Mythos 5와 Claude Sonnet 5 대비 개선"이며, "명시적 제약을 무시하거나, 입력을 환각하거나, 작업 완료를 거짓 주장할 가능성은 이전 모델보다 낮다"고 밝혔다.

## 왜 중요한가?
프론티어 모델의 비용 구조와 안전장치의 억압성(오탐)이 동시에 개선된 것은 실무자들에게 곧바로 체감되는 변화입니다. 특히 세이프가드 오탐 감소는 정상 작업까지 차단당하던 에이전트 워크플로우의 신뢰성을 높입니다. 제로 데이터 보존 도입으로 금융·의료 등 규제 산업의 도입 장벽도 크게 낮아졌습니다.

## 심층 분석

### 기술 의미
토큰 비용 절감은 세이프가드 검증을 위한 중간 생성 토큰을 줄이는 방향으로 이뤄진 것으로 보이며, 에이전트 워크로드에서는 한 번의 실행에 수백만 토큰이 소모되므로 체감 비용 차이가 큽니다. "오탐 제한 감소"는 분류기 기반 세이프가드의 정밀도-재현율 균형을 조정한 결과로, 거짓 양성을 줄이면서도 위험 행동은 잡아내는 것이 기술적 난제입니다. 시스템 카드가 자기 개선(automated AI development) 위험을 "저위험"으로 공개 평가한 것은 프론티어 랩의 투명성 관행이 정착하고 있음을 보여줍니다. 다만 Mythos가 Opus 5보다 오정렬 행동이 약간 많다는 고백은 능력 향상이 정렬 유지를 어렵게 만든다는 상충 관계를 그대로 드러냅니다.

### 업계 영향
Fable 5.1의 "더 저렴하고 덜 억압적"이라는 포지셔닝은 OpenAI와의 가격·사용성 경쟁이 안전성 서사와 결합되고 있음을 보여줍니다. ZDR과 EFS의 도입은 금융·의료·법률 등 데이터 거주지 규제가 있는 엔터프라이즈 시장 공세의 신호이며, 이는 곧 경쟁사에도 동일한 요구를 만들어 업계 표준으로 확산될 것입니다. 모델이 생성한 과학적 발견(GPU 최적화, 금성 지도)을 출시 무대에서 공개하는 것은 프론티어 모델의 가치를 벤치마크 점수가 아닌 실제 발견으로 증명하려는 새로운 마케팅 패러다임을 만들고 있습니다. 에이전트 개발자 입장에서는 오탐 감소가 장기 실행 에이전트의 실패율을 직접 낮추는 효과를 가져옵니다.

### 관련 프로젝트
- [Fable 5.1 시스템 카드 (PDF)](https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf) — 상세 안전성 평가
- [Enterprise Frontier Safeguards](https://www.anthropic.com/news/enterprise-frontier-safeguards) — 제로 보존 안전 시스템
- [Simon Willison의 Fable 5.1 체험기](https://simonwillison.net/2026/Sep/1/claude-fable-5-1/) — 실사용 리뷰

### 관련 뉴스
- [Fable 5 글로벌 재배포](../records/2026-07-02-anthropic-claude-fable-5-global-redeployment.md) — Fable 5 초기 출시 보도
- [Anthropic 자기 개선 AI](../records/2026-08-28-anthropic-self-improving-ai.md) — 자기 개선 능력 관련 보도
- [Anthropic Enterprise Frontier Safeguards](../records/2026-09-02-anthropic-enterprise-frontier-safeguards.md) — EFS 상세 분석

## 원문 발췌
> "Fable 5.1 includes changes meant to reduce token cost and false-positive restrictions from the model's safeguards. ... 'Mythos 5.1 is a slight regression on overall misaligned behavior compared to Opus 5, and an improvement over Mythos 5 and Claude Sonnet 5,' the system card reads."
