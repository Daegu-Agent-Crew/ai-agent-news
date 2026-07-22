# 구글 Gemini 작업 자동화: 스마트폰에서 AI 에이전트가 앱 대신 사용자 조작

## 메타데이터
- **원문 URL**: https://www.theverge.com/tech/898282/gemini-task-automation-uber-doordash-hands-on
- **소스**: The Verge
- **발행일**: 2026-07-22
- **수집일**: 2026-07-23
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [google, gemini, task-automation, mobile-agent, android, samsung, pixel]
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> 구글이 삼성 갤럭시 S26 울트라와 픽셀 10 프로에서 Gemini 작업 자동화를 정식 론칭했다. Uber, DoorDash 등 배달/라이드쉐어 앱을 AI가 사용자 대신 조작하여 주문을 완료하는 등, 스마트폰에서 처음으로 실제 작동하는 AI 에이전트 경험을 제공한다.

## 번역 (한국어)
구글이 Gemini 작업 자동화(Task Automation) 기능을 삼성 갤럭시 S26 울트라와 픽셀 10 프로에서 정식 출시했다. 이 기능은 Gemini가 사용자의 휴대전화에서 앱을 직접 조작하여 작업을 수행하는 것으로, 현재 Uber Eats, DoorDash, Uber 등 배달 및 라이드쉐어 서비스 일부에 한정되어 베타로 제공된다.

The Verge의 5일간 실사용 테스트 결과, Gemini는 사용자의 자연어 지시를 받아 메뉴를 탐색하고 항목을 선택하며 주문을 구성할 수 있었다. 예를 들어 "치킨 테리야키 콤보"를 주문하면, 메뉴가 반인분 단위로 되어 있음을 스스로 파악해 두 번 추가하고, 사용자 일정의 비행 정보를 읽어 적절한 시간에 타는 차량을 예약하는 등 맥락 이해 능력을 보여주었다. 다만 전체 주문 프로세스는 약 9분이 소요되어 인간 직접 조작보다 현저히 느렸다.

작업 자동화는 기본적으로 백그라운드에서 실행되며, 사용자가 다른 작업을 하거나 휴대전화를 보지 않는 동안에도 계속 진행된다. 최종 확인 단계에서는 사용자가 직접 주문을 승인해야 하므로, Gemini가 임의로 결제를 진행하는 일은 없었다. 실패하는 경우 대부분 초기 1~2분 이내에 발생하며(위치 권한 요청 등), 문제를 해결하면 자동화를 재시작할 수 있었다.

핵심적인 한계는 현재 Gemini가 "사람을 위해 설계된 UI"를 통해 작업을 수행한다는 점이다. 광고 배너나 시각적 요소에 영향을 받지 않지만, 인간 중심의 앱 인터페이스를 AI가 탐색하는 것은 본질적으로 비효율적이다. 구글은 모델 컨텍스트 프로토콜(MCP)이나 Android 앱 함수(App Functions) 같은 더 구조화된 접근법으로의 전환을 업계가 추진할 것으로 예상하고 있다.

## 왜 중요한가?
Gemini 작업 자동화는 스마트폰에서 AI 에이전트가 처음으로 "진짜 일"을 하는 것을 보여주는 이정표적 사건이다. 발표장 데모가 아닌 실제 기기에서, 실제 앱을 조작하며, 실제 주문과 예약을 완료하는 경험을 제공한다는 점에서, AI 에이전트가 일상 생활에 스며드는 방향성을 명확하게 보여준다. 느리고 불완전하지만, "AI 비서의 미래"를 체감하게 하는 첫 번째 진지한 시도다.

## 심층 분석

### 기술 의미
Gemini 작업 자동화는 AI 에이전트가 사람용 UI(GUI)를 추론을 통해 탐색하고 조작하는 접근법을 채택했다. 이는 모델 컨텍스트 프로토콜(MCP)이나 Android 앱 함수(App Functions) 같은 구조화된 API 방식이 아직 널리 도입되지 않은 상황에서의 "중간 단계" 해결책이다. Gemini는 화면의 시각적 요소를 이해하고, 앱 내 네비게이션 논리를 유추하며, 자연어 지시를 단계별 UI 조작으로 변환해야 한다.

자연어 처리가 UI 조작으로 이어지는 능력(예: "콤보"를 "반인분 2개"로 해석, 비행 일정에서 출발 시간을 계산해 탑승 시간 추론)은 에이전트 추론의 실제 활용 가능성을 입증한다. 특히 달력과 이메일 연동을 통한 맥락 이해는 단일 앱 조작을 넘어 여러 시스템 간의 의미 있는 연결을 보여준다.

### 업계 영향
이 기능의 출시는 AI 에이전트가 모바일 환경에서 어떻게 작동해야 하는지에 대한 실질적인 기준점을 제시한다. 느린 속도와 가끔 발생하는 오류는 AI 에이전트가 직면한 근본적 한계(사람용 UI 탐색의 비효율성)를 명확히 드러내며, 이는 개발자들이 MCP나 앱 함수 같은 AI 친화적 인터페이스를 채택하도록 유도하는 촉매제가 될 수 있다.

삼성과 구글의 파트너십을 통한 정식 론칭은 모바일 AI 에이전트 경쟁의 시작을 알리는 신호다. 애플의 Apple Intelligence, 삼성의 자체 AI 기능과 함께, 스마트폰이 단순한 앱 런처에서 "에이전트 플랫폼"으로 진화하는 추세가 가속화될 것이다. 배달/라이드쉐어에만 한정된 현재 지원 범위가 확대되면, 모바일 커머스와 서비스 산업 전반에 파급 효과가 클 것으로 예상된다.

### 관련 프로젝트
- [Gemini Task Automation (The Verge)](https://www.theverge.com/tech/898282/gemini-task-automation-uber-doordash-hands-on)
- [Model Context Protocol (MCP)](https://www.theverge.com/ai-artificial-intelligence/841156/ai-companies-aaif-anthropic-mcp-model-context-protocol)

### 관련 뉴스
- [OpenAI Presence 엔터프라이즈 에이전트](./2026-07-23-openai-presence-enterprise-agent-platform.md) — 기업용 음성/채팅 에이전트 플랫폼
- [삼성 ChatGPT Codex 배포](./2026-07-16-samsung-chatgpt-codex-deployment.md) — 삼성의 AI 도입 확대

## 원문 발췌
> "It's the first time I've seen a true AI assistant actually working on a phone — not in a keynote presentation or a carefully controlled demo inside a convention hall."
> "If you were designing an application for AI to use, it would look nothing like the ones we have today. An AI assistant won't be tempted by a big ad in the middle of a page to save 30 percent on your order. You would give it a database, not a bunch of clutter to weed through."
