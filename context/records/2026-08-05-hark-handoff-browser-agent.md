# Hark Handoff: 브라우저 작업 자동화 AI 에이전트 공개

## 메타데이터
- **원문 URL**: [https://techcrunch.com/2026/08/05/hark-previews-its-browser-use-agent-for-completing-tasks/](https://techcrunch.com/2026/08/05/hark-previews-its-browser-use-agent-for-completing-tasks/)
- **소스**: TechCrunch
- **발행일**: 2026-08-05
- **수집일**: 2026-08-06
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [hark, browser-agent, computer-use, task-automation, brett-adcock]
- **중요도**: ⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Hark가 API가 없는 웹사이트(Target, Walmart, OpenTable 등)도 자유롭게 탐색해 작업을 완수하는 브라우저 기반 AI 에이전트 Hark Handoff를 프리뷰했다. 웹사이트 구조와 시각 데이터를 분석해 클릭과 입력을 자동 수행하며, GPT 5.5나 Opus 4.8보다 빠르고 저렴하다고 주장한다.

## 번역 (한국어)
Hark는 5월에 7억 달러의 시리즈 A를 유치한 스타트업으로, CEO Brett Adcock이 이끌고 있다. 이번에 공개한 Handoff 에이전트는 공식 API가 없는 웹사이트도 구조와 시각 데이터를 분석해 버튼 클릭, 정보 입력 등의 작업을 자동으로 수행한다.

주문, 예약, 쇼핑, 리서치 등 다양한 작업을 명령어 하나로 처리할 수 있다고 한다. 현재는 포스트트레인된 모델을 사용하며, 연말에는 프리트레인 모델로 전환할 계획이다. 특히 일반 LLM이 다음 토큰을 예측하는 것과 달리, Hark의 모델은 '다음 행동' — 특정 위치의 클릭이나 키보드 입력 — 을 예측한다고 주장한다.

Google, OpenAI, Anthropic, Browser Use, Polar, Strawberry, Aside 등 이미 다수의 기업이 컴퓨터 사용 에이전트를 개발 중인 치열한 경쟁 시장이다. Hark는 속도와 비용 경쟁력을 차별화 포인트로 삼고 있으며, 여름 끝에 정식 출시를 계획하고 있다.

## 왜 중요한가?
브라우저 에이전트는 AI가 실제 세계의 디지털 환경에서 직접 작업을 수행하는 가장 직관적인 인터페이스다. API가 없는 수많은 웹사이트와 상호작용할 수 있다는 것은 AI 에이전트의 활용 범위를 기존 통합 방식의 한계를 넘어 확장하는 것을 의미한다. Hark가 7억 달러의 투자를 유치한 만큼 시장이 기대하는 크기도 상당하다.

## 심층 분석

### 기술 의미
Hark가 일반 LLM의 "다음 토큰 예측"이 아닌 "다음 행동 예측"을 내세운 것은 컴퓨터 사용 에이전트 설계의 핵심 논쟁을 보여준다. 토큰 수준의 예측을 거쳐 행동으로 변환하는 간접적 방식과, 행동을 직접 예측하는 방식 간의 효율성 차이가 실제 성능으로 이어질지가 관건이다. 포스트트레인 → 프리트레인 전환 계획은 데이터 파이프라인을 먼저 안정화한 뒤 모델 규모를 키우는 전략으로 보인다.

### 업계 영향
컴퓨터 사용 에이전트 시장은 이미 과잉 상태로, Browser Use, Google Mariner, OpenAI Operator, Anthropic Computer Use, 그리고 신생 스타트업들까지 쟁세를 벌이고 있다. Hark의 차별화는 비용 경쟁력과 Brett Adcock의 실적(Previously Figure)에 대한 시장 신뢰에 있다. 하지만 시연 영상이 부분적으로만 공개된 점은 신뢰성 검증이 아직 필요함을 시사한다. AI 에이전트 생태계 전체로 보면, 브라우저 에이전트는 MCP와 같은 프로토콜 기반 통합이 보편화되기 전까지 중요한 브릿지 역할을 할 것이다.

### 관련 프로젝트
- [Hark](https://hark.com/) — 공식 웹사이트
- [Vercel Agent Browser](https://github.com/vercel-labs/agent-browser)

### 관련 뉴스
- [Meta Muse Code](../records/2026-08-05-meta-muse-code-coding-agent.md) — 코드베이스 전용 에이전트
- [Prime Agent](../records/2026-08-05-prime-agent-self-improving-rlm.md) — 코딩 에이전트의 자가 개선 아키텍처

## 원문 발췌
> "Unlike large language models (LLMs) predicting the next token, its model can predict the next action — which could be a click or a keyboard input at a specific place."

> "Hark said that its Handoff agent is faster than the competition and also costs much less than other models like GPT 5.5 and Opus 4.8."
