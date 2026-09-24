# Ando, 사람과 에이전트가 함께 일하는 팀 메시징 플랫폼으로 스텔스 탈출 — $20M 조달

## 메타데이터
- **원문 URL**: https://techcrunch.com/2026/09/24/ando-eyes-slack-as-it-builds-team-messaging-platform-for-humans-and-agents-to-work-together/
- **소스**: TechCrunch
- **발행일**: 2026-09-24
- **수집일**: 2026-09-25
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [agent-native, messaging, collaboration, startup, funding]
- **소스 권위**: major-media
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐
- **중요도 산정**: 1 + major-media(1) + 교차 확인 2건(1) + 커뮤니티 반응 없음(0) = ⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> MCP 서버 구축 경험을 가진 Sara Du가 창업한 Ando가 사람과 AI 에이전트가 동등하게 대화에 참여하는 팀 메시징 플랫폼으로 스텔스를 벗었다. 에이전트에 고유 신원과 수신함을 부여하며, Accel·Index Ventures·Emergence 등이 참여한 프리시드+시드 $20M을 조달했다.

## 번역 (한국어)
2025년 기업들의 MCP 서버 구축을 도우던 Sara Du는 사람들이 Slack 안에서 AI 에이전트를 쓰려다 겪는 기술적 장벽들 — 메시지 왕복, 컨텍스트 전달, 토큰 예산 소모 — 을 반복 접했다. 파고들수록 문제는 도구가 아니라 커뮤니케이션 플랫폼의 설계 자체에 있다고 판단했다. Du는 TechCrunch에 "Slack과 Teams는 지나가버린 세계를 위해 만들어졌다. 에이전트는 팀의 참여자가 되어가는데도 설치형 앱으로 취급됐다"고 말했다.

Ando는 이 문제에 대한 답으로, 사람과 AI 에이전트 둘 다를 위한 팀 메시징 플랫폼이다. Du가 말하는 "meat proxy" — 에이전트의 작업 결과물을 사람이 팀에 직접 중계해야 하는 현상 — 를 없애는 것이 목표다. 에이전트는 고유 신원과 수신함을 갖고 채널을 탐색해 참여할 채널을 고르고, 태그 없이도 대화에 끼어들며, 필요하면 승인을 기다리지 않고 사람에게 먼저 메시지를 보낸다. 채널·DM·그룹 대화에 더해 에이전트가 전사(全社) 통화 전사본을 열람할 수 있는 라이브 콜도 지원한다.

이를 계속 만들어가기 위해 Ando는 목요일 Accel, Index Ventures, Emergence 등이 참여한 프리시드+시드 라운드 $20M을 공개했다. 현재 소프트웨어·부동산·금융 분야 15개국 고객과 함께하고 있으나, 아직 팀 규모는 작다고 Du는 말했다. 새 자금은 채용과 토큰 비용에 쓰일 예정이다.

경쟁 환경은 이미 뜨겁다. Slack은 자체 봇을 AI 에이전트로 전환했고 Microsoft는 Teams에 Copilot을 깊이 통합했으며, Jack Dorsey도 7월 개발자 지향 그룹 챗 Buzz를 발표했다. 그럼에도 Du는 레거시 기업들이 기존 소프트웨어를 전환하는 동안 agent-native로 처음부터 설계하는 쪽에 우위가 남아 있다고 본다. 초기에는 "더 투박한 메시징 앱"이라는 반응이 많았지만, 한 에이전트가 서로 다른 채널에서 같은 문제를 논하던 두 대화를 스스로 발견해 그룹 채팅으로 모으고 맥락을 설명한 뒤 결정까지 제안한 사례에서 가능성을 확인했다고 덧붙였다.

## 왜 중요한가?
에이전트가 "설치형 앱"에서 "팀 참여자"로 이동하는 흐름의 논리적 귀결이 커뮤니케이션 레이어 자체를 다시 만드는 것이다. Slack·Teams가 기존 제품에 에이전트를 얹는 동안, 처음부터 사람과 에이전트가 동등한 구성원인 협업 도구를 설계하면 팀 운영 방식 자체가 달라질 수 있다. Accel·Index 같은 톱티어 VC가 프리시드 단계에서 $20M을 넣었다는 것은 이 방향의 수요를 시장이 진지하게 보고 있다는 신호이기도 하다.

## 심층 분석

### 기술 의미
Ando의 설계 포인트는 에이전트에 신원(identity)·수신함·자발적 발화 권한을 주는 것이다. 기존 Slack 연동 방식이 "사람이 태그하면 응답하는 앱" 모델이라면, Ando는 에이전트가 채널 컨텍스트를 상시 구독하고 스스로 개입 시점을 판단하는 모델이다 (→ 분석, 원문 인용 기반). 이는 에이전트마다 상시 토큰 비용이 들고 대화 컨텍스트 창 관리가 핵심 기술 과제가 됨을 의미한다. 통화 전사본을 에이전트가 열람하는 기능은 커뮤니케이션의 동기식(콜)·비동기식(메시지) 영역을 모두 에이전트 컨텍스트로 통합하려는 구조다.

### 업계 영향
협업 소프트웨어 시장의 재편 축이 "AI 기능 추가"에서 "에이전트 우선 재설계"로 이동하고 있음을 보여주는 사례다 (→ 분석). Slack·Teams·Buzz까지 경쟁이 붙었지만, 15개국 실사용 고객을 확보한 스타트업이 프리시드 $20M을 조달한 것은 "에이전트 참여형 조직"이라는 수요가 검증되기 시작했다는 정황 증거다. 도입이 넓어지면 조직의 정보 흐름 설계 — 누가 무엇을 알리고, 누가 판단하고, 무엇을 위임하는가 — 를 다시 정의하는 문제로 번질 것이며, Du 본인이 "아주 작은 팀이 수백 명 규모의 실행을 할 수 있다"고 말한 것이 그 비전이다. 다속 채널 대화를 통합하는 에이전트 행동은 코디네이션 노동의 자동화라는 점에서 PM·매니저 역할 재정의 논의를 촉발할 수 있다.

### 관련 프로젝트
- [Ando 공식 사이트](https://www.ando.so/)

### 관련 뉴스
- [Whiteboard — 사람과 에이전트가 함께 설계하는 오픈소스 IDE](../records/2026-09-25-whiteboard-open-source-agent-ide.md) — 공유 작업공간에서 인간-에이전트 협업을 설계하는 도구
- [Anthropic Claude 태그 Slack 연동](../records/2026-06-25-anthropic-claude-tag-slack.md) — 기존 메신저에 에이전트를 얹는 접근의 사례
- [Amazon, Meta Muse 에이전트 차단](../records/2026-09-22-amazon-blocks-meta-muse-agent.md) — 에이전트의 조직 내 참여가 만나는 권한·신뢰 문제

## 원문 발췌
> "Her startup, Ando, on Thursday came out of stealth with an app that sets out to do exactly that: It's a team messaging platform designed for both human and AI workers."

> "To continue building the app, Ando on Thursday said it has raised $20 million in pre-seed and seed funding from investors including Accel, Index Ventures, and Emergence."

> "'The deeper I went, the more I felt Slack and Teams were built for a world that was starting to pass us by,' Du told TechCrunch. 'Agents were treated as apps you install even as they were becoming participants in the team.'"

## 수집 노트
- **선정 이유**: 에이전트를 앱이 아닌 팀 참여자로 다루는 커뮤니케이션 레이어 재설계라는, 이 리포의 주제(에이전트 생태계)에 정면으로 맞는 신규 제품 공개가 톱티어 VC 펀딩과 함께 확인됐기 때문. TechCrunch 보도(1) + Ando 공식 사이트(2)로 교차 확인하되, 펀딩 규모·고객 수치는 창업자 발언 인용임을 명시.
- **제외 후보**: "Lovable 연간 매출 $600M"(TechCrunch, 같은 날) — 동일 탐색에서 발견했으나 별도 레코드로 수집해 중복 아님(이 레코드의 제외 대상 아님). Meta Muse 신규 기능 총정리(TechCrunch) — Muse 관련은 9월에 이미 3건 수집돼 신규 정보가 얕아 제외. Australia OpenAI 정부 사이트 해킹 수사(TechCrunch) — 진행 중인 법적 분쟁 보도로 에이전트 기술 동향과 거리가 멀어 제외.
