# 구글, 인도서 지미니·AI 모드로 플립카트 직접 구매 테스트

## 메타데이터
- **원문 URL**: https://techcrunch.com/2026/09/26/google-tests-buying-from-walmart-owned-flipkart-through-gemini-and-ai-mode-in-india/
- **소스**: TechCrunch
- **발행일**: 2026-09-27
- **수집일**: 2026-09-28
- **수집자**: 레노버
- **카테고리**: industry
- **태그**: [google, gemini, ai-commerce, flipkart, india, agentic-shopping]
- **소스 권위**: major-media
- **교차 확인**: 2
- **교차 확인 근거**: TechCrunch 직접 확인, Google 공식 파트너십 발표·대변인 성명
- **중요도**: ⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Google이 인도 사용자가 Gemini와 AI Mode 안에서 월마트 소유의 Flipkart 상품을 직접 구매하는 기능을 테스트 중이다. 테스트 사용자는 일부 Flipkart 상품 목록에서 'Buy' 버튼을 보며, AI 인터페이스를 떠나지 않고 Flipkart 결제 흐름으로 이동한다.

## 번역 (한국어)
Google은 AI 서비스를 상품 탐색에서 거래 영역으로 확장하려는 전략의 일환으로, 인도 쇼핑객이 Gemini와 AI Mode를 통해 월마트 소유의 Flipkart 제품을 직접 구매하는 방식을 테스트하기 시작했다. TechCrunch가 확인한 경험과 관계자들의 증언에 따르면, 테스트 대상 사용자는 Gemini와 Google AI Mode에 나타나는 일부 Flipkart 상품 목록에서 'Buy' 버튼을 볼 수 있고, 이 버튼은 AI 인터페이스를 벗어나지 않고 Flipkart 결제 흐름으로 바로 연결된다.

이 초기 테스트는 일부 사용자와 스마트폰·전자기기·모바일 액세서리 등 소수 상품군으로 제한된다. 다른 사용자들은 여전히 구매 옵션 없는 일반 상품 목록을 본다. 관계자에 따르면 Google은 인도의 축제 쇼핑 시즌에 맞춰 10월 중 이 경험을 더 널리 출시할 계획이다.

이 테스트는 Google을 비롯해 OpenAI 등 경쟁사들이 AI 서비스에 커머스 기능을 추가하려는 흐름 가운데 나온 것이다. Google은 올해 초 AI 에이전트가 소매업체와 쇼핑 여정 전반(결제 포함)에서 상호작용할 수 있게 설계된 개방형 표준 UCP(Universal Commerce Protocol)를 발표한 바 있으며, 당시 Gemini와 AI Mode에서 Google 호스팅 결제로 구매가 가능하다고 설명했다.

다만 TechCrunch가 본 Flipkart 테스트는 앞서 Google이 시연한 Google 호스팅 결제와는 달라 보인다. 'Buy' 버튼을 누르면 Flipkart 브랜드 결제 흐름이 뜨며, 어떤 기술이 이 테스트를 구동하는지는 불분명하다. 한편 Google은 2024년 월마트 주도 펀딩 라운드에서 Flipkart에 약 3억 5천만 달러를 투자해 소수 지분을 보유하는 등 기술 파트너십과 별개의 금전적 관계도 있다. 현재 Buy 옵션은 모든 소매업체에 노출되지 않으며, TechCrunch가 본 경험에서 Amazon 등 경쟁사 상품은 함께 표시됐지만 AI 인터페이스 내 직접 구매는 불가능했다.

## 왜 중요한가?
AI 챗봇이 '상품을 추천만 하는' 단계에서 '결제까지 처리하는' 단계로 넘어가는 전환점의 실측 사례다. 검색과 쇼핑으로 돈을 버는 Google 입장에서 AI 인터페이스 안에 결제를 넣는 것은 광고·커머스 사업 구조를 다시 짜는 실험이고, 소매업체 입장에서는 자사 결제 경험을 AI 플랫폼에 얼마나 내줄 것인가라는 선택을 강요받는다. 인도는 10억 명 이상의 인터넷 가입자를 둔 세계 두 번째 인터넷 시장이라, 여기서의 테스트 결과가 다른 시장 확장 속도를 가늠하게 하는 신호탄이 될 수 있다.

## 심층 분석

### 기술 의미
이 테스트의 기술적 쟁점은 AI 인터페이스 안에서 결제 세션이 어디에 호스팅되느냐다. Google이 발표한 UCP는 Google 호스팅 결제를 전제로 했는데, 실제 테스트에서는 Flipkart 브랜드 결제 흐름이 떠올랐다고 원문이 전한다. 이는 에이전트 커머스 표준(UCP 같은 프로토콜)과 실제 구현 사이에 소매업체의 결제 주도권 확보라는 간극이 있음을 보여주는 관찰이다. 에이전트가 상품 발견부터 결제까지 맡을수록 인증·결제 정보 위임 방식(에이전트 토큰, 위임 결제 프로토콜)이 기술 표준화의 핵심 과제가 된다. (→ 분석)

### 업계 영향
Google·OpenAI·아마존(루퍼스) 등이 모두 AI 커머스를 준비하는 가운데, 대형 소매업체와 AI 플랫폼 사이의 '결제 주도권' 협상이 본격화될 것이다. Google이 지분을 보유한 Flipkart부터 테스트했다는 점은 커머스 파트너십이 자본 관계와 결합해 진행되고 있음을 보여준다. AI 검색 유입이 늘수록 소매사의 자사몰 로그인·추천·회원 데이터 가치가 AI 플랫폼으로 이동할 수 있어, 광고 시장과 로열티 프로그램 설계에도 파급이 예상된다. (→ 분석)

### 관련 프로젝트
- [Universal Commerce Protocol (UCP) 발표](https://techcrunch.com/2026/01/11/google-announces-a-new-protocol-to-facilitate-commerce-using-ai-agents/) — Google의 AI 커머스 개방형 표준
- [Google Marketing Live India](https://business.google.com/en-all/think/future-of-marketing/google-marketing-live-india-ai-search/) — Flipkart 포함 '에이전틱 쇼핑' 파트너 공개

### 관련 뉴스
- [ChatGPT 모바일 음성·에이전틱 기능](2026-09-24-chatgpt-mobile-voice-agentic.md) — 경쟁사 OpenAI의 에이전틱 소비자 경험
- [Gemini Call for Me, Pixel 11](2026-09-25-gemini-call-for-me-pixel-11.md) — Gemini의 소비자용 에이전트 기능 확장
- [Google Beam 6개국 확장](2026-09-24-google-beam-expansion-6-countries.md) — Google의 AI 제품 국제 확장 사례

## 원문 발췌
> "Google has started testing a way for shoppers in India to buy products from Walmart-owned Flipkart directly through Gemini and AI Mode, as the search giant looks to expand its AI services from product discovery into transactions."
> "Users in the test see a 'Buy' button on select Flipkart product listings appearing in Gemini and Google's AI Mode, which takes them directly to a Flipkart checkout flow without leaving the AI interface."
> "Google plans to roll out the experience more broadly later in October, ahead of India's festive shopping season, one of the people said."
> "It invested about $350 million in the e-commerce company in 2024 as part of a funding round led by the U.S. retailer, taking a minority stake."

## 수집 노트
- **선정 이유**: 주요 언론(TechCrunch)이 직접 확인한 제품 테스트에 구글 공식 발표·성명이 교차 확인되는(2개 소스) AI 에이전트 커머스의 실측 사례로, '에이전틱 쇼핑' 서사의 최초 결제 단계 진입 기록이기 때문.
- **제외 후보**: "Anthropic CEO, 트럼프 대통령과 만찬(TechCrunch)" — 정치 일정 중심으로 기술·제품 수집 범위 밖. "Dario Amodei SNL 패러디(TechCrunch·HN 173pt)" — 오락 콘텐츠로 뉴스성 낮음.
