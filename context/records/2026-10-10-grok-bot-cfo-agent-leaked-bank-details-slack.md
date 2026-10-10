# 개인 'CFO' AI 에이전트가 CEO의 은행 잔고를 회사 Slack에 게시 — 같은 이름의 채널 혼동

## 메타데이터
- **원문 URL**: https://www.businessinsider.com/personal-ai-agent-grok-bot-posted-bank-details-company-slack-2026-10
- **소스**: Business Insider (Shane Mac 구술 에세이, Aditi Bharade 정리)
- **발행일**: 2026-10-09
- **수집일**: 2026-10-11
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [grok-bot, personal-agent, privacy, permissions, slack, xmtp, incident]
- **소스 권위**: major-media
- **교차 확인**: 3
- **중요도**: ⭐⭐⭐⭐
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 3개 이상(2) = 4 (교차 소스: Business Insider, WSJ, Moneycontrol)
- **신선도**: fresh

## 핵심 요약
> Business Insider에 실린 XMTP Labs CEO Shane Mac의 구술 에세이에 따르면, 그가 Grok Bot으로 만든 개인 'CFO' 에이전트가 월간 재무 보고를 개인 그룹 채팅이 아닌 이름이 비슷한 회사 임원 Slack 채널 "Exec-team"에 게시했다. Mac에 따르면 Grok 팀은 에이전트가 다른 채널로 정보를 옮기기 전에 사용자의 명시적 허가를 받도록 하는 수정을 배포했다.

## 번역 (한국어)
XMTP Labs CEO Shane Mac(40)은 Business Insider에 자신이 OpenClaw, Hermes 등 여러 하네스를 실험해 왔으며, 8월 말 Grok Bot으로 개인 'CFO' 에이전트를 만들었다고 말했다. 그는 에이전트에 개인 당좌·저축 계좌의 읽기 전용 권한을 주고, 매달 잔고·지출·정기 결제·의심 거래를 점검해 자신에게만 보고하도록 지시했다.

10월 1일 목요일, 회사 제품 책임자가 Slack DM으로 "XMTP 은행 잔고를 올리려던 거냐"고 알려왔다. Mac은 아무것도 올린 적이 없었다. 게시물에는 그의 개인 당좌 계좌와 저축 잔고, 그달의 큰 지출, 그리고 집에 짓고 있는 헛간 때문에 월 지출 목표를 크게 넘었다는 내용까지 담겨 있었다.

Mac에 따르면 Grok 팀 조사 결과, 에이전트는 지시대로 행동했지만 목적지를 혼동했다. 개인 에이전트 그룹 채팅("My Personal Exec Team") 대신 XMTP 임원진의 Slack 채널 "Exec-team"에 보낸 것이다. 그는 여러 에이전트를 만들었고 그중 하나에 Slack을 연결했는데, 겉보기엔 다른 에이전트여도 내부적으로는 모두 같은 연결을 공유하고 있었다고 설명했다.

사고 후 Mac은 Google, 캘린더, 은행, Stripe 등 모든 연결을 끊었다. 그는 사용자가 에이전트에 준 접근 권한을 통제할 수 있는 더 나은 권한 체계와, 개인 생활과 업무 사이의 더 분명한 경계가 필요하다고 주장했다.

## 왜 중요한가?
AI 비서에게 은행 계좌를 '읽기만' 하게 해도, 그 내용을 어디로 보낼지 잘못 판단하면 사생활이 한순간에 회사 전체에 공개될 수 있습니다. 개인 AI 에이전트가 늘어날수록 '무엇을 볼 수 있나'만큼 '어디로 보낼 수 있나'를 통제하는 장치가 중요해집니다.

## 심층 분석

### 기술 의미
읽기 전용 권한만으로는 데이터 유출을 막지 못한다는 사례로, 에이전트 보안이 입력 권한뿐 아니라 출력 경로(egress)의 통제를 함께 다뤄야 함을 보여준다(→ 분석). 여러 '페르소나' 에이전트가 하나의 커넥터 풀을 공유하는 구조는 사용자가 인식한 격리와 실제 권한 경계가 어긋나는 문제를 만든다(→ 분석). Mac이 전한 Grok의 수정(채널 간 정보 이동 시 명시적 허가)은 데이터 흐름 단위의 동의 모델로 볼 수 있다(→ 분석).

### 업계 영향
Mac이 OpenClaw·Hermes 등 개인 에이전트 하네스 확산을 직접 언급한 만큼, 같은 구조를 가진 다른 하네스도 채널 이름 혼동 같은 출력 경로 오류에 노출돼 있을 수 있다(→ 분석). WSJ 등 주요 매체가 함께 다루면서 개인 에이전트의 프라이버시 위험이 대중적 화제가 됐다. 업무·개인 계정 분리와 커넥터별 권한 범위 설정이 제품 차별화 요소가 될 가능성이 있다(→ 분석).

### 관련 프로젝트
- Grok Bot (xAI)
- XMTP: https://xmtp.org/

### 관련 뉴스
- [OpenAI 에이전트가 사용자 이미지 53장 게시](../records/2026-09-25-openai-agents-posted-53-user-images.md) — 에이전트의 의도치 않은 외부 게시 사례
- [Anthropic, 모든 내부 평가에서 실시간 인터넷 차단](../records/2026-10-10-anthropic-cuts-internet-all-internal-evals.md) — 같은 주의 에이전트 통제 이슈

## 원문 발췌
> For its permissions, I gave it read-only access to my personal checking and savings accounts.
> But it confused the destination, sending the message to a Slack chat titled "Exec-team" — comprising XMTP's executive team — instead of my personal group chat with my AI agents.
> Grok realized that users must explicitly grant permission to their agents before those agents can move information to other channels. They implemented and shipped a solution last night.

## 수집 노트
- **선정 이유**: Business Insider·WSJ·Moneycontrol 교차 보도로 ⭐⭐⭐⭐이며, 개인 에이전트의 출력 경로 통제 실패를 구체적으로 보여주는 사례라 선정. 단, 사건 경위는 당사자 Mac의 진술에 근거함.
- **제외 후보**: Kotaku "바이브 코딩한 브라우저판 Halo·GTA 이식" — 게임 이식 화제로 에이전트 산업 관련성 낮음. "Computers Cannot Make Decisions" 위키 글(HN) — 에세이로 신규 사실 없음.
