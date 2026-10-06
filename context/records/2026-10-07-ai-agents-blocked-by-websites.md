# AI 에이전트의 다음 장벽: 웹사이트 차단 — Amazon·항공사·Yelp 등과 충돌

## 메타데이터
- **원문 URL**: https://techcrunch.com/2026/10/06/the-next-hurdle-for-ai-agents-getting-websites-to-let-them-in/
- **소스**: TechCrunch
- **발행일**: 2026-10-06
- **수집일**: 2026-10-07
- **수집자**: 레노버
- **카테고리**: industry
- **태그**: [AI에이전트, 에이전트커머스, 봇차단, Meta Muse, 오픈표준]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **신선도**: fresh

## 핵심 요약
> TechCrunch는 Meta Muse 같은 개인 AI 에이전트가 Amazon, 항공사, Yelp 등 웹사이트의 의도적 차단이나 기존 봇 방지 장치에 막히는 사례가 늘고 있다고 보도했다. Meta·Walmart·Stripe 등은 에이전트-비즈니스 통신을 위한 오픈 표준 작업을 시작했다.

## 번역 (한국어)
TechCrunch 보도에 따르면 Meta Muse, Instinct, ChatGPT Dots 같은 개인 AI 에이전트는 항공권 예약, 식당 예약, 장보기 같은 일을 사용자 대신 처리한다. 하지만 요청을 받는 웹사이트가 AI를 막아 작업이 실패하는 일이 잦다. 최근에는 Amazon이 Meta Muse의 자사 쇼핑몰 접근을 차단했다.

차단 중에는 Amazon처럼 의도적인 것도 있고, 스팸 방지용 기존 봇 차단 장치 때문에 생기는 것도 있다. Walmart 대변인은 TechCrunch에 Muse 구매 실패가 의도한 것이 아니며, Walmart는 Muse의 파트너라고 밝혔다. 문제는 '사람인지 확인' 버튼 단계가 끊기면서 에이전트가 쫓겨나는 데 있었다.

Delta 측은 승인되지 않은 자동화 활동으로부터 고객을 보호하고 있으며, 현재 제3자 AI 에이전트가 예약할 수 있게 하는 제휴는 없다고 답했다. United는 로봇 사용을 금지하는 이용약관 조항을 안내했다. 소셜미디어에서는 Yelp, eBay, Zillow, Pizza Hut, Adidas 등이 에이전트를 막는다는 불만이 나왔고, Yelp는 TechCrunch에 사람이 아닌 이용을 허용하지 않는다고 답했다.

이 문제를 풀기 위해 Meta, Walmart, Stripe, Sierra, Genesys, Rocket, NiCE, Decagon 등은 AI 에이전트가 기업과 소통하는 방식을 정하는 오픈 표준 작업을 시작했다. Meta 블로그에 따르면 이 프로토콜은 온라인 상거래를 위한 에이전트 간 통신에 초점을 둔다.

## 왜 중요한가?
AI 비서가 아무리 똑똑해도 쇼핑몰이나 항공사가 문을 닫으면 아무 일도 할 수 없다. 앞으로 에이전트의 쓸모는 모델 성능보다 '어느 사이트가 받아 주느냐'로 결정될 수 있다.

## 심층 분석

### 기술 의미
CAPTCHA와 '사람 확인'처럼 사람과 봇을 가르는 기존 장치는 '사용자 대신 움직이는 선의의 봇'이라는 범주를 고려하지 않았다. 신원이 인증된 에이전트를 구별하는 프로토콜(에이전트 ID, 에이전트 간 통신)이 이 간극을 메우는 수단으로 떠오르고 있다(→ 분석).

### 업계 영향
Walmart처럼 제휴로 문을 여는 곳과 Amazon·Yelp처럼 닫는 곳으로 나뉘면, 에이전트 커머스는 '열린 웹'보다 제휴 네트워크 중심으로 재편될 수 있다(→ 분석). 플랫폼이 고객 접점을 지키려고 차단하는 동기도 크기 때문에, 표준이 만들어져도 참여 여부는 사업적 이해관계에 달려 있다. OpenClaw 같은 자가 호스팅 에이전트도 같은 차단 문제를 겪는다.

### 관련 프로젝트
- Meta 주도 에이전트 커머스 오픈 프로토콜 (Walmart, Stripe, Sierra 등 참여)

### 관련 뉴스
- [Amazon, Meta Muse 에이전트 차단](../records/2026-09-22-amazon-blocks-meta-muse-agent.md) — 이번 기사의 발단 사건
- [RSA Agent ID 에이전트 신원 보안](../records/2026-09-30-rsa-agent-id-agentic-identity-security.md) — 에이전트 신원 인증 흐름

## 원문 발췌
> "Most recently, Amazon began blocking Meta's Muse AI agent from its retail site, meaning that the agent could no longer browse or make purchases from its product catalog."
> "To address this problem, industry partners including Meta, Walmart, Stripe, Sierra, Genesys, Rocket, NiCE, and Decagon have begun working on an open standard that would dictate how AI agents can communicate with businesses."

## 수집 노트
- **선정 이유**: 주요 언론 보도이고, 기업 측(Walmart·Delta·United·Yelp) 공식 답변을 직접 담고 있어 에이전트 커머스의 현실적 제약을 기록할 가치가 있다.
- **제외 후보**: Mirror Particle 인간 행동 월드모델 — 초기 스타트업 단일 보도 / Pinterest 뷰티 핀 AI — 에이전트 관련성 낮음
