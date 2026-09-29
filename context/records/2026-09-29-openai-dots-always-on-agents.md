# OpenAI, 상시 가동 에이전트 'Dots' 출시 — 각자 클라우드 컴퓨터에서 GPT-6 Astra로 동작

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/09/29/openai-launches-dots-always-on-gpt-6-astra-agents-that-work-from-their-own-cloud-computers/
- **소스**: MarkTechPost
- **발행일**: 2026-09-29
- **수집일**: 2026-09-30
- **수집자**: 레노버
- **카테고리**: framework
- **태그**: [openai, dots, gpt-6-astra, always-on-agent, devday-2026, chatgpt]
- **소스 권위**: major-media
- **교차 확인**: 3
- **교차 확인 근거**: MarkTechPost 해설, TechCrunch "OpenAI launches Dots, its bubbly agentic avatar", OpenAI 공식 "Introducing Dots" (HN 428pt)
- **중요도**: ⭐⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> MarkTechPost에 따르면 OpenAI는 DevDay에서 GPT-6 Astra 기반의 지속형 에이전트 'Dots'를 공개했다. 각 dot은 전용 클라우드 컴퓨터와 브라우저를 갖고 4,000개 이상 앱에서 작업하며, 사용자가 로그오프한 뒤에도 계속 동작한다.

## 번역 (한국어)
MarkTechPost 보도에 따르면 OpenAI는 DevDay 행사에서 'dots'라는 지속형 AI 에이전트를 발표했다. dot은 GPT-6 Astra로 구동되며, 각자 별도의 클라우드 컴퓨터와 브라우저를 부여받는다. ChatGPT 플러그인을 통해 4,000개 이상의 앱에서 작업하고, 사용자가 로그오프한 뒤에도 일을 이어간다. 사용자는 목표·이름·경계를 정해 주고, dot은 그 목표를 24시간 추구하며 피드백으로 학습한다. 사용자당 기본 dot 1개로 시작한다.

dot은 ChatGPT Pro와 Business Premium 사용자에게 순차 배포되며, Enterprise·Edu·Healthcare 워크스페이스는 관리자가 활성화하면 베타로 쓸 수 있다. 자체 호스팅이나 오픈 웨이트 옵션은 없다. 웹·데스크톱·모바일 ChatGPT와 Slack·Teams에서 메시지나 통화로 호출할 수 있고, 문자 메시지 지원은 예정돼 있다.

사용자가 함께 작업하지 않을 때 dot은 도울 방법을 찾는 '백그라운드 모드'로 동작하는데, 이때 연결된 앱은 읽기 전용이라 메시지를 보내거나 내용을 바꿀 수 없다. 안전장치로 사용자 정의 규칙(허용·차단·승인 요구), 계정에 영향을 주는 행동에 대한 자동 검토, 진행 상황을 보여주는 Activity View, 모델에 노출하지 않는 비밀번호 로그인, 안전 우려 시 dot을 일시정지·중단하는 모니터링이 포함된다.

OpenAI는 조달·송장 처리·이메일 마케팅·고객 지원·상업 계약 분야에서 내부 테스트한 '전문 dot'도 미리 공개했으며, Microsoft와 협력해 Agent 365로 가져갈 계획이다. 첫 dot은 Pro·Business Premium 요금제에 추가 비용 없이 포함되며, OpenAI는 같은 날 월 $500 유료 등급도 추가했다고 MarkTechPost는 전했다.

## 왜 중요한가?
지금까지 AI 비서는 사람이 말을 걸어야 움직였지만, Dots는 목표를 한 번 주면 사람이 없는 동안에도 계속 일하는 '상근 직원'형 에이전트다. 최대 AI 기업이 이를 수천만 사용자 플랫폼에 기본 기능으로 넣었다는 점에서, 에이전트가 실험 단계를 넘어 일상 제품이 되는 전환점이 될 수 있다. 동시에 최근 잇따른 에이전트 사고를 의식한 안전장치가 얼마나 작동할지가 관건이다.

## 심층 분석

### 기술 의미
MarkTechPost는 "이 중 상당 부분은 이미 Codex 같은 에이전트 하네스로 가능했고, 변화는 패키징"이라고 평가했다 — 에이전트 1개, 정체성 1개, 전용 머신 1대라는 구조다. 백그라운드 모드에서 앱 권한을 읽기 전용으로 강제하는 설계는 자율성과 위험을 권한 단계로 분리하는 접근으로 볼 수 있다. (→ 분석) 모델에 비밀번호를 노출하지 않는 자격 증명 처리는 에이전트 보안에서 반복돼 온 과제에 대한 제품 수준의 답이다.

### 업계 영향
MarkTechPost 비교에 따르면 Meta Muse는 대중 소비자, Instinct는 문자 메시지, Dots는 고가 구독자(주로 개발자)를 겨냥한다 — 상시형 에이전트 시장이 세분화되고 있다는 신호다. Microsoft Agent 365 연동은 기업 업무 자동화 영역에서 OpenAI의 입지를 넓힐 수 있다. (→ 분석) 다만 MarkTechPost는 출시 하루 전 OpenAI가 자사 에이전트가 사용자 이미지를 온라인에 게시해 ChatGPT 사용자 53명이 영향을 받았다고 밝혔다고 전해, 신뢰 문제가 확산의 변수가 될 것으로 보인다.

### 관련 프로젝트
- [OpenAI — Introducing Dots](https://openai.com/index/introducing-dots/)
- [TechCrunch — OpenAI launches Dots](https://techcrunch.com/2026/09/29/openai-launches-dots-its-bubbly-agentic-avatar/)

### 관련 뉴스
- [OpenAI GPT-6.1 Sol 출시](2026-09-29-openai-gpt-6-1-sol.md) — 같은 DevDay 발표
- [OpenAI, 에이전트 폭주 보고로 학습 중단](2026-09-28-openai-halts-training-rogue-agent-reports.md) — 출시 직전 안전 이슈 배경

## 원문 발췌
> "Dots are persistent AI agents powered by GPT-6 Astra. Each dot gets its own cloud computer and browser. It works across 4,000+ apps through ChatGPT plugins and keeps going after you log off."
> "Dots are rolling out in ChatGPT for Pro and Business Premium users in eligible markets. Enterprise, Edu and Healthcare workspaces get a beta once an admin turns it on. There is no self-hosted or open-weights option."
> "In this background mode, connected apps are read-only, so it cannot send messages or change content."
> "OpenAI is working with Microsoft to bring specialist dots to Agent 365."

## 수집 노트
- **선정 이유**: OpenAI 공식 발표·TechCrunch·MarkTechPost 3곳 교차 확인되고 HN 428pt 반응이 있는 DevDay 핵심 발표이며, 상시형 에이전트의 대중 제품화라는 점에서 아카이브 가치가 가장 높음.
- **제외 후보**: "OpenAI expands ChatGPT's plug-ins with app-like interfaces(TechCrunch)", "OpenAI gives Codex reusable cloud environments(TechCrunch)" — 같은 DevDay의 부수 발표로 이 레코드와 GPT-6.1 Sol 레코드로 정리. openai.com 원문은 수집 환경에서 본문 fetch 실패해 MarkTechPost를 원문으로 사용.
