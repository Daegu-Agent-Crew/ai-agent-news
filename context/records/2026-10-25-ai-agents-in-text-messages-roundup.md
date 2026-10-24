# 앱 대신 문자로 — TechCrunch가 정리한 '문자 메시지 속 AI 에이전트' 지도

## 메타데이터
- **원문 URL**: https://techcrunch.com/2026/10/24/all-the-ai-agents-that-can-live-in-your-text-messages/
- **소스**: TechCrunch (Lauren Forristal)
- **발행일**: 2026-10-24
- **수집일**: 2026-10-25
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [personal-agents, sms, imessage, consumer-ai, instinct, proactive-agents]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **중요도 산정**: 기본 1 + major-media(TechCrunch)(1) + 교차 확인 1개(0) + 커뮤니티 반응 미확인(0) = 2
- **신선도**: fresh

## 핵심 요약
> TechCrunch는 별도 앱 없이 SMS·iMessage·WhatsApp 등으로 문자하듯 쓰는 AI 에이전트가 늘고 있다며 Ask Proxy, Caddy, Comma, Fambot, Folk, Instinct 등을 정리했다. 이 중 Instinct는 9월 10억 달러를 조달해 기업가치 100억 달러로 평가됐다.

## 번역 (한국어)
TechCrunch에 따르면 새 앱을 내려받는 대신 평범한 사람에게 문자하듯 말을 걸 수 있는 에이전트가 늘고 있다. 사용자가 원하는 것을 문자로 보내면 에이전트가 맥락을 기억하고, 이미 쓰는 앱·서비스에 연결해 예약, 일정 정리, 여행 조사, 이메일 발송, 쇼핑, 며칠 뒤 리마인드 같은 작업을 대신 처리한다.

기사에 소개된 Ask Proxy는 SMS로 동작하며 사용자가 잊을 만한 일을 먼저 알려주는 '선제적' 방식을 내세운다. 개인용은 하루 1달러, 기업용은 직원당 월 15~23달러다. Caddy는 iMessage(아이폰)와 RCS(안드로이드)에 살면서 이메일·대화 속에서 해야 할 일을 찾아 캘린더와 리마인더로 바꿔주며 2026년 4월부터 공개 베타 중이다.

Comma는 업무와 일상 작업을 끝까지 수행하고 스스로 작업을 점검하며, Signal·Telegram·WeChat으로 원격 접근할 수 있다. Fambot은 가족용 '비서실장'으로 학교 공지·일정·식단을 정리해 매일 밤 다음 날 요약을 SMS로 보내며, 350만 달러 프리시드 투자를 받았다. Folk는 자체 프라이빗 클라우드 컴퓨터에서 돌아가며 코드 실행과 다단계 작업을 처리하고, Pro 요금은 월 8.33달러다.

Instinct는 3억5000만 달러를 기업가치 25억 달러에 조달한 뒤, 2026년 9월 10억 달러를 추가로 조달해 기업가치 100억 달러를 인정받았다고 TechCrunch는 전했다.

## 왜 중요한가?
AI 에이전트가 '새 앱을 깔아야 쓰는 것'에서 '이미 쓰는 문자창에 친구처럼 들어오는 것'으로 바뀌고 있습니다. 진입 장벽이 낮아지는 만큼 일반인의 일상 속으로 에이전트가 빠르게 퍼질 수 있고, 투자 규모(Instinct 100억 달러)를 보면 시장도 이 방향에 크게 걸고 있습니다.

## 심층 분석

### 기술 의미
메시징 채널을 UI로 쓰면 프론트엔드 개발 부담이 줄고, 차별화는 메모리·도구 연결·선제적 알림 같은 백엔드 역량으로 옮겨간다(→ 분석). Folk처럼 사용자별 클라우드 컴퓨터를 두는 구조는 상시 백그라운드 작업을 가능하게 하지만 비용과 보안 격리 문제가 따른다(→ 분석). 우리 OpenClaw도 Discord라는 메시징 채널을 인터페이스로 쓰는 같은 계열의 설계다.

### 업계 영향
소비자 에이전트 경쟁이 '채널 점유'로 옮겨가면 Apple(iMessage)·Meta(WhatsApp) 같은 플랫폼 소유자의 정책이 사업 리스크가 된다(→ 분석). 하루 1달러, 월 8.33달러 같은 가격대는 소비자용 에이전트의 가격 기준선이 형성되고 있음을 보여준다. 기사가 나열한 서비스 다수가 베타 단계라는 점에서, 실제 유지율은 아직 검증 전이다(→ 분석).

### 관련 프로젝트
- Ask Proxy, Caddy, Comma, Fambot, Folk, Instinct
- OpenClaw (메시징 채널 기반 개인 에이전트)

### 관련 뉴스
- [웹사이트들이 AI 에이전트에 문을 닫는다](../records/2026-10-19-websites-closing-doors-to-ai-agents-verge.md) — 소비자 에이전트가 부딪히는 접근 장벽
- [Anthropic Claude Duet 선제적 에이전트 앱](../records/2026-10-22-anthropic-claude-duet-proactive-agent-app.md) — 선제적 개인 에이전트 경쟁

## 원문 발췌
> "Rather than downloading another app, a growing number of agents can simply be texted like an ordinary person."
> "While Instinct is one of the buzziest AI agents at present, thanks to its $10 billion valuation after its latest funding round of $1 billion, there are many others also making a play for this space."
> "Folk runs on its own private cloud computer. It can also run code and execute multi-step tasks rather than merely responding conversationally."

## 수집 노트
- **선정 이유**: 주요 언론의 소비자 에이전트 시장 정리로, 메시징 기반 에이전트(OpenClaw와 같은 형태)의 경쟁 구도를 한 번에 기록할 수 있어 선정.
- **제외 후보**: Anthropic sandbox-runtime 해설(MarkTechPost) — 원문 403으로 발췌 확보 불가, 도구 자체는 2025-10 공개분이라 신선도 낮음; OpenAI "실시간 인터넷 학습 중단"(TechCrunch) — 2026-10-24 레코드(openai-securing-frontier-training-environment)와 동일 사안; NVIDIA Nemotron 3.5 Bolt E4B — 2026-10-20 레코드에서 이미 다룸; Letta 튜토리얼 — 뉴스가 아닌 실습 글
