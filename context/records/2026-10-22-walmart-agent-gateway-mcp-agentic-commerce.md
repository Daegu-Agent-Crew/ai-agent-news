# 아마존이 막을 때 월마트는 문을 열었다 — AI 쇼핑 에이전트용 MCP 서버 'Agent Gateway'·Agent Profiles 공개

## 메타데이터
- **원문 URL**: https://techcrunch.com/2026/10/21/while-amazon-blocks-ai-agents-walmart-rolls-out-the-welcome-mat/
- **소스**: TechCrunch
- **발행일**: 2026-10-21
- **수집일**: 2026-10-22
- **수집자**: 레노버
- **카테고리**: industry
- **태그**: [walmart, agentic-commerce, mcp, agent-gateway, amazon, ai-shopping-agent]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 1개(0) + 반응 미확인(0) = 2
- **신선도**: fresh

## 핵심 요약
> TechCrunch에 따르면 월마트는 AI 에이전트 거래를 관리하는 자체 MCP 서버 Agent Gateway와 에이전트별 권한·지출 한도를 설정하는 Agent Profiles를 발표했다. 이는 경쟁사 아마존이 AI 에이전트의 대리 구매를 차단하기 시작한 직후다.

## 번역 (한국어)
월마트가 수요일 AI 에이전트 거래를 관리하는 자체 Agent Gateway와 AI 에이전트를 쓰는 고객을 위한 새 기능들을 발표했다. 월마트 CEO John Furner는 샌프란시스코 Masters of Scale Summit에서 AI 에이전트가 주류가 되는 세상에 대비하는 기술이라고 말했다. 이 기술은 월마트와 창고형 할인점 Sam's Club 모두의 에이전트 쇼핑을 지원한다.

Agent Gateway는 승인된 에이전트가 MCP(Model Context Protocol)로 월마트에 연결하도록 돕는 새 MCP 서버다. 에이전트는 이를 통해 월마트 온라인 재고를 검색하고 사용자를 대신해 구매할 수 있다. 월마트는 고객이 개인정보나 구매 이력을 에이전트에 직접 공유하지 않고도 평소 쓰는 브랜드·상품을 살 수 있게 돕는다고 밝혔다.

다음 달 도입되는 Agent Profiles로 고객은 사용하는 AI 에이전트마다 전용 프로필을 승인해 에이전트의 구매를 본인 구매와 따로 볼 수 있다. 거래마다 승인을 요구하거나, 설정한 지출 한도 안에서만 허용할 수 있다. 월마트는 이를 신용카드에 가족을 추가 사용자로 등록하는 것에 비유했다.

월마트는 AI 에이전트용 별도 '약관'도 도입했다. 에이전트가 의도대로 동작하지 않은 경우에도 반품 절차가 적용되며, 에이전트는 쇼핑객의 의도를 넘어서는 행동을 할 수 없고 결제 정보에 접근할 수 없으며 작업에 필요한 정보만 접근할 수 있다. 약관을 따르지 않는 에이전트는 차단된다.

## 왜 중요한가?
앞으로는 사람이 아니라 AI 비서가 대신 장을 보는 시대가 오는데, 세계 최대 유통사 둘이 정반대 길을 택했습니다. 월마트는 에이전트별 지출 한도와 오작동 시 반품 보장까지 마련해, 'AI에게 결제를 맡겨도 되나'라는 소비자 불안에 대한 첫 실무 답안을 내놓았습니다.

## 심층 분석

### 기술 의미
MCP가 개발자 도구를 넘어 대형 유통사의 커머스 인터페이스 표준으로 채택된 사례다(→ 분석). Agent Profiles는 에이전트를 별도 주체로 식별하고 위임 범위·한도를 부여하는 '에이전트 신원·권한' 모델을 소비자 계정 수준에서 구현한 것이다(→ 분석). 에이전트가 결제 정보에 접근하지 못하게 한 설계는 결제 실행을 플랫폼 측에 남겨 에이전트 탈취 시 피해를 줄이는 구조다(→ 분석).

### 업계 영향
TechCrunch는 아마존뿐 아니라 여러 여행·예약 사이트도 AI 에이전트를 차단해 왔다고 전해, 월마트의 개방 전략이 차별화 요소라고 평가했다. 플랫폼별로 에이전트 허용·차단이 갈리면 에이전트 개발사는 '어디서 살 수 있는가'라는 유통 접근성 경쟁에 놓이게 된다(→ 분석). 월마트는 이미 Meta Muse와 제휴하고 ChatGPT·Gemini 등과 통합을 제공하고 있어, 에이전트 사업자와 유통사 간 제휴 지형이 재편되고 있다.

### 관련 프로젝트
- Walmart Agent Gateway (MCP 서버)
- Walmart Agent Profiles (다음 달 도입 예정)

### 관련 뉴스
- [RSA Agent ID 에이전트 신원 보안](../records/2026-09-30-rsa-agent-id-agentic-identity-security.md) — 에이전트 신원·권한 관리
- [Meta Muse Wonder 프런티어 모델](../records/2026-10-13-meta-muse-wonder-frontier-model.md) — 월마트 제휴 에이전트 Muse

## 원문 발췌
> "Walmart is embracing agentic commerce with the launch of its own Agent Gateway to manage transactions and other new features aimed at customers using AI agents, the retailer announced on Wednesday. The move comes shortly after Walmart's top competitor, Amazon, began blocking AI agents from making purchases on behalf of online shoppers."
> "It starts with Walmart's Agent Gateway, the company's new MCP server, which is designed to help approved agents connect to Walmart over the model context protocol (MCP)."
> "Of note, Walmart says that its returns process applies, including when an agent doesn't act as intended."

## 수집 노트
- **선정 이유**: 대형 유통사가 MCP 기반 에이전트 커머스 인프라와 권한 모델을 공식화한 사례로, 단일 소스지만 에이전트 생태계의 실사용 확장 관점에서 선정.
- **제외 후보**: Meta Muse 1,000만 사용자(TechCrunch) — 월마트 기사에 맥락으로 포함. AI 생산성 관리자 설문(TechCrunch) — 설문 기사로 에이전트 직접 관련성 낮음.
