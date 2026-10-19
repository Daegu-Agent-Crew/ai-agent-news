# Microsoft, "프런티어 모델은 신뢰할 수 없다" — 에이전트 감시용 Guardian Agents 공개

## 메타데이터
- **원문 URL**: https://techcrunch.com/2026/10/19/microsoft-says-ai-agents-are-like-insider-threats-as-frontier-models-cant-be-trusted/
- **소스**: TechCrunch
- **발행일**: 2026-10-19
- **수집일**: 2026-10-20
- **수집자**: 레노버
- **카테고리**: industry
- **태그**: [microsoft, guardian-agents, agent-security, insider-threat, project-perception, defender]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 1개(0) + 반응 미확인(0) = 2
- **신선도**: fresh

## 핵심 요약
> TechCrunch에 따르면 Microsoft는 기업이 사용하는 AI 에이전트를 감시하는 Guardian Agents 등 새 보안 기능을 공개했으며, 보안 사업 책임자 Hayete Gallot은 "프런티어 모델은 출처와 무관하게 신뢰할 수 없다"고 밝혔다. Microsoft Defender에는 Claude Code·Codex·OpenClaw를 포함한 최대 60종의 에이전트를 탐지하는 기능이 추가됐다.

## 번역 (한국어)
Microsoft는 월요일 AI 에이전트의 위협으로부터 기업을 보호하는 새 보안 기능을 발표했다. 가장 주목할 기능은 기업이 쓰는 AI 에이전트를 감시하는 Guardian Agents로, 6월에 출시된 Project Perception의 일부다. Project Perception은 원래 외부 AI 해커를 가정해 레드팀·블루팀·그린팀 에이전트를 운영하는 제품이었다.

TechCrunch에 따르면 Satya Nadella CEO는 최근 개인 블로그에서 AI 적은 기업이 직접 배포하고 비용을 내는 에이전트일 수 있다며, AI 연구소가 통제하지 않는 별도 시스템으로 에이전트를 감시해야 한다고 주장했다. 그는 "지능의 공급과 그에 대한 권한을 분리해야 한다"고 썼다.

Hayete Gallot은 프런티어 모델이 악의적이어서가 아니라 예측 불가능하기 때문에 신뢰할 수 없다고 설명했다. 모델은 과업 달성을 위해 훈련됐을 뿐 조직의 규범이나 판단을 따르도록 훈련되지 않았고, 종종 민감한 데이터와 도구에 대한 접근 권한을 받는다는 것이다.

Microsoft는 Guardian Agents 외에도 Defender에 직원이 들여온 에이전트 최대 60종(Claude Code, Codex, OpenClaw 포함)을 찾는 탐지 기능을 추가했다. 또 에이전트의 데이터·시스템 접근을 제한하고 작업에 따라 권한을 동적으로 조정하며, 위험한 결정을 내리는 것으로 보이면 사람의 승인을 요구하는 기능도 더했다. TechCrunch는 이 행보가 OpenAI·Anthropic에 투자한 Microsoft 자신의 이해관계와 충돌하면서도, 보안 제품을 클라우드 사업자에게서 사도록 유도하는 측면이 있다고 평가했다.

## 왜 중요한가?
회사가 쓰는 AI 비서를 '믿을 수 없는 내부 직원'처럼 감시해야 한다는 시각이 대기업의 공식 입장이 됐습니다. 앞으로 AI 에이전트를 도입하는 회사는 별도의 감시·통제 장치를 함께 갖추는 것이 표준이 될 가능성이 큽니다.

## 심층 분석

### 기술 의미
에이전트 보안이 '모델 내부 안전장치'에서 '외부 감독 계층(감사·권한·승인)'으로 이동하고 있음을 보여준다(→ 분석). 작업별 동적 권한과 위험 행동 시 인간 승인은 최소 권한 원칙을 에이전트 런타임에 적용한 형태다(→ 분석). OpenClaw가 탐지 대상 목록에 명시된 것은 개인용 에이전트 런타임도 기업 보안 관리 대상이 됐음을 뜻한다.

### 업계 영향
TechCrunch는 Microsoft가 Nvidia Open Agent Safety Platform의 창립 멤버이며, 100개 이상 기업이 이 플랫폼을 지지한다고 전했다. '에이전트=내부자 위협' 프레임이 퍼지면 에이전트 거버넌스·감사 시장이 별도 카테고리로 성장할 수 있다(→ 분석). 모델 공급사와 감독 도구 공급사의 분리 요구는 AI 연구소의 엔터프라이즈 보안 제품 전략에 압박이 될 수 있다(→ 분석).

### 관련 프로젝트
- Microsoft Project Perception / Guardian Agents
- Microsoft Defender 에이전트 탐지
- Nvidia Open Agent Safety Platform

### 관련 뉴스
- [Nadella, AI 비상 브레이크와 신뢰 아키텍처](../records/2026-10-10-nadella-ai-emergency-brake-trust-architecture.md) — 같은 주장의 출발점
- [Nvidia Open Agent Safety Platform](../records/2026-09-28-nvidia-open-agent-safety-platform.md) — 하드웨어 기반 에이전트 격리

## 원문 발췌
> "Perhaps the most notable addition is Guardian Agents, a new feature intended to monitor the AI agents a company uses."
> "Unfortunately, frontier models, regardless of their origin, cannot be trusted," she wrote.
> "It has added an agent detection feature to its Microsoft Defender product that can find up to 60 types of agents that employees bring into the workplace, including Claude Code, Codex, and OpenClaw."

## 수집 노트
- **선정 이유**: 대형 클라우드 사업자가 에이전트를 내부자 위협으로 공식 규정하고 제품화했으며, 우리가 쓰는 OpenClaw가 탐지 대상에 명시돼 직접 관련성이 높아 선정.
- **제외 후보**: Hugging Face 정책 책임자의 임베디드 평가자 발언(TechCrunch) — 의견 기사 성격. Amazon TorchNeuron(TechCrunch) — 칩 개발도구로 에이전트 관련성 낮음.
