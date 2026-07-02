# Morgan Stanley FIXR: '덜 자율적인' 에이전트로 P&L 조정 작업 시간 절반으로 단축

## 메타데이터
- **원문 URL**: https://venturebeat.com/orchestration/morgan-stanley-cut-its-riskiest-reconciliation-job-in-half-by-making-its-agents-less-autonomous/
- **소스**: VentureBeat
- **발행일**: 2026-06-30
- **수집일**: 2026-07-02
- **수집자**: 대구루
- **카테고리**: industry
- **태그**: [Morgan-Stanley, FIXR, enterprise, reconciliation, finance, human-in-the-loop, orchestration]
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Morgan Stanley가 내부 에이전트 시스템 'FIXR'을 통해 은행업에서 가장 정확도가 중요한 워크플로우인 손익(P&L) 조정 작업을 절반으로 단축했다. 핵심은 에이전트를 더 자율적으로 만드는 것이 아니라, 오히려 인간의 통제를 강화하면서 점진적으로 자동화를 확장하는 것이었다.

## 번역 (한국어)

대부분의 엔터프라이즈 AI 배포는 코딩 어시스턴트와 고객 서비스 봇에 집중되어 왔다. 그러나 Morgan Stanley는 은행업에서 정확도와 마감 시간이 가장 중요한 워크플로우인 손익(P&L) 조정(reconciliation)에 에이전트를 배포했으며, 작업량을 절반으로 줄였다. 흥미로운 점은 시스템을 더 자율적으로 만든 것이 아니라, 오히려 덜 자율적으로 설계하여 성공을 달성했다는 것이다.

FIXR이라 불리는 이 내부 프로덕션 에이전트 시스템은 매일 거래 데스크의 P&L을 재무, 리스크, 운영, 거래 포착 시스템 간에 조정한다. 수십만 건의 속성이 자주 불일치하며, 컨트롤러는 각 불일치(또는 '브레이크')를 수동으로 조사해야 했다. 이전에는 단일 장부당 최대 6시간이 소요되었으나, 이제 FIXR이 2~3시간 만에 완료한다. 약 100명의 컨트롤러를 기준으로 주당 약 1,500시간이 절약된다.

FIXR은 여러 에이전트가 협력하여 작동한다. 하나는 과거 가이던스를 해석하여 일일 시작 시점의 해결책을 개발하고, 다른 하나는 컨트롤러의 행동을 학습하여 적용한 규칙을 문서화하며, 세 번째는 반복되는 패턴을 영구적인 자동화 로직으로 변환한다. 시간이 지남에 따라 시스템은 이전에 해결한 브레이크를 자동 처리하고, 덜 익숙한 것은 해결책을 제안하며, 확신이 없으면 도움을 요청한다.

가장 중요한 것은 인간이 루프에서 완전히 벗어나지 않는다는 점이다. 컨트롤러는 모든 추천을 검토하고 승인 또는 수정하며, 그 결정은 다음 실행을 개선하는 데 피드백된다. Morgan Stanley의 Todd Johnson 이사는 "자율성은 많은 신뢰를 필요로 한다"며, "모든 것이 정확한지 일일이 확인한다면 효율성 향상을 볼 수 없을 것"이라고 말했다. 또한 그는 확정적이고 반복 가능한 작업은 LLM의 판단에 맡기지 않고 고정 규칙으로 변환하여 비용과 통제 가능성을 모두 개선했다고 설명했다.

## 왜 중요한가?
AI 에이전트가 실제 금융 회사의 핵심 업무에 적용되어 주당 1,500시간을 절감한 실제 사례입니다. 특히 에이전트를 "최대한 자율적으로" 만드는 대신, 인간 검토를 필수로 하면서 점진적으로 자동화를 늘리는 전략이 더 안전하고 효과적이라는 점이 다른 업계에도 중요한 교훈을 줍니다.

## 심층 분석

### 기술 의미
FIXR의 핵심 혁신은 '확정성(determinism)'과 '확률적 판단(probabilistic judgment)'의 경계를 명확히 구분한 것이다. 반복되는 패턴은 LLM의 판단에서 제거하고 고정 규칙으로 변환하여, 토큰 소비를 줄이고 결과의 일관성과 통제 가능성을 높였다. 다중 에이전트 협업 구조(해석 에이전트, 학습 에이전트, 규칙 변환 에이전트)는 복잡한 엔터프라이즈 워크플로우에서 에이전트 오케스트레이션의 모범 사례를 보여준다. 또한 인간-에이전트 피드백 루프를 통해 컨트롤러의 암묵지를 점진적으로 시스템 규칙으로 코딩화하는 접근법은, 전통적인 RPA와 AI 에이전트의 중간 지점을 제시한다.

### 업계 영향
이 사례는 에이전트의 자율성을 '전부 아니면 전무'로 프레이밍하는 것의 위험성을 보여준다. VentureBeat의 VB Pulse 조사에 따르면 기업 AI 프로젝트의 74%가 ROI를 보여주지 못하는 '샌드박스 무덤' 상태이며, 이는 맞춤형 모델 파인튜닝보다 프로세스 중심의 점진적 접근이 더 지속 가능함을 시사한다. 금융업에서 검증된 이 패턴은 의료, 법무, 제조 등 정확도가 중요한 다른 산업으로 확산될 가능성이 높다. 또한 38%의 기업이 "책임 소재 불명"을 프로덕션 AI의 최대 장벽으로 꼽은 점에서, FIXR의 "인간이 행동을 소유한다"는 원칙은 거버넌스 설계의 핵심 원칙이 될 것이다.

### 관련 프로젝트
- [VB AI Impact Event - Morgan Stanley 발표](https://venturebeat.com/orchestration/morgan-stanley-cut-its-riskiest-reconciliation-job-in-half-by-making-its-agents-less-autonomous/)
- [VB Pulse: 엔터프라이즈 AI ROI 조사](https://venturebeat.com/orchestration/morgan-stanley-cut-its-riskiest-reconciliation-job-in-half-by-making-its-agents-less-autonomous/)

### 관련 뉴스
- [Amazon 신뢰 가능 에이전트 프레임워크](../records/2026-06-27-amazon-trustworthy-agent-framework.md) — 에이전트 안전성과 통제에 대한 또 다른 접근
- [Cisco FAPO 프롬프트 최적화](../records/2026-06-20-cisco-fapo-prompt-optimization.md) — 에이전트 성능 최적화 기술
- [Agentic Benchmarks 2026](../records/2026-06-18-agentic-benchmarks-2026.md) — 에이전트 성능 평가의 표준화 동향

## 원문 발췌
> "It's much more like a co-worker than a copilot. We think that's where the opportunity is to really unlock more complex work in the organization."

> "If you have an opportunity to make things very prescribed and repeatable, that's cheaper in terms of token consumption, it's more repeatable in terms of controls — and have the LLM do the stuff where you don't need that kind of deterministic workflow."
