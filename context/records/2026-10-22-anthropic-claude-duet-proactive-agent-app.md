# Anthropic, 능동형 에이전트 앱 'Claude Duet' 리서치 프리뷰 공개 — 아침 브리핑·백그라운드 작업·승인 기반 실행

## 메타데이터
- **원문 URL**: https://claude.com/resources/articles/claude-duet
- **소스**: Anthropic (claude.com)
- **발행일**: 2026-10-21
- **수집일**: 2026-10-22
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [anthropic, claude-duet, proactive-agent, opus-5-5, personal-assistant, prompt-injection]
- **소스 권위**: official
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐⭐⭐
- **중요도 산정**: 기본 1 + official 2 + 교차 확인 2개(Anthropic 공식, Reuters)(1) + HN 313pt(1) = 5
- **신선도**: fresh

## 핵심 요약
> Anthropic은 Claude가 능동형 에이전트로 일하는 새 앱 Claude Duet을 리서치 프리뷰로 공개했다. Opus 5.5 기반으로 매일 아침 브리핑을 보내고, 사용자가 자리를 비워도 작업을 이어가며, 대신 행동하기 전에는 사용자에게 확인을 받는다.

## 번역 (한국어)
Anthropic이 Claude Duet 리서치 프리뷰를 열었다. Claude Duet은 사용자에게 먼저 주의가 필요한 일을 알려주고, 요청받은 작업을 완료하며, 사용자가 자리를 비워도 계속 일하고, 사용자를 대신해 행동하기 전에는 확인을 받는 앱이다. Anthropic은 처리할 일이 감당할 수 있는 양보다 많은 전문직 종사자와 소상공인을 위해 만들었다고 밝혔다.

iOS·Android 독립 앱과 claude.ai 웹으로 제공되며, 프리뷰 기간에는 미국의 Pro·Max 요금제 가입자가 대기자 명단을 통해 쓸 수 있다. Team·Enterprise 요금제는 아직 포함되지 않았다. 사용량 한도는 Claude의 나머지 기능과 공유하며, 백그라운드 점검도 한도에 포함된다.

Claude Duet은 Claude Opus 5.5를 중심으로 설계됐다. 연결된 앱에서 가장 중요한 항목을 아침마다 짧게 브리핑하고, 하루 동안 그 앱들을 지켜보다 주의가 필요할 때만 메시지를 보낸다. 회의 일정 잡기 같은 단순 업무부터 대시보드 구축, 재무·영업 예측, 프로토타입·웹앱 제작까지 맡길 수 있다. 제품 페이지는 6,000개 이상의 커넥터·플러그인과 연동된다고 소개한다.

보안 측면에서 Anthropic은 자격 증명 처리에 Claude Managed Agents 설계를 따라 비밀번호·로그인 토큰을 Duet이 직접 보지 않으며, 행동은 auto mode 분류기가 승인하고, 프롬프트 인젝션 방어는 브라우저 사용 연구에서 왔다고 설명했다. 또한 신용카드 번호·신분증 같은 최고 민감 등급 정보의 공유 요청을 거부하는 전용 분류기와 안전 시스템 프롬프트를 함께 출시했다. 레드팀과 외부 업체가 침투 테스트를 수행했다.

Anthropic은 프리뷰 단계의 한계도 명시했다. Duet은 스레드를 잘못 읽거나 긴급도를 잘못 판단할 수 있고, 사용자와 확인하는 사이에 도착한 내용을 놓칠 수 있다.

## 왜 중요한가?
지금까지 AI 비서는 사람이 말을 걸어야 움직였지만, Claude Duet은 먼저 할 일을 챙기고 알아서 일을 진행하다 중요한 순간에만 허락을 구합니다. 메일·일정·결제까지 맡기는 '진짜 비서형 에이전트'가 대형 AI 회사의 정식 앱으로 나왔다는 점에서 일반 사용자의 AI 사용 방식이 바뀌는 신호입니다.

## 심층 분석

### 기술 의미
대화 시작을 사용자가 아닌 에이전트가 하는 'push' 구조로 전환하면서, 핵심 난제가 모델 능력보다 "언제 말을 걸지"의 판단(긴급도 보정)으로 이동했다(→ 분석). 자격 증명을 에이전트가 직접 보지 않는 구조와 정보 등급별 유출 차단 분류기는, 메일을 읽고 메시지를 보내는 에이전트의 정보 흐름 문제를 별도 계층으로 다루려는 설계로 보인다(→ 분석). 백그라운드 점검이 사용량 한도를 소모한다는 점은 상시 구동 에이전트의 비용 구조가 사용자에게 직접 전가되는 방식을 보여준다(→ 분석).

### 업계 영향
Meta Muse 등 소비자 에이전트와의 경쟁에서 Anthropic이 소상공인·전문직이라는 업무 중심 세그먼트를 겨냥한 것으로 해석된다(→ 분석). OpenClaw 같은 셀프호스팅 상시 에이전트가 해오던 아침 브리핑·하트비트 패턴이 대형 사업자의 1급 제품 기능이 됐다(→ 분석). 승인 기반 실행과 침투 테스트·버그바운티 공개는 향후 능동형 에이전트의 보안 기준선 역할을 할 수 있다(→ 분석).

### 관련 프로젝트
- Claude Duet (claude.com/product/claude-duet)
- Claude Managed Agents, Claude Code auto mode

### 관련 뉴스
- [Meta Muse Wonder 프런티어 모델](../records/2026-10-13-meta-muse-wonder-frontier-model.md) — 경쟁 소비자 에이전트 진영
- [Claude Code 팀 대규모 코드 리뷰](../records/2026-10-17-claude-code-team-code-review-at-scale.md) — Anthropic 에이전트 제품군

## 원문 발췌
> "Today, we're opening a research preview of Claude Duet, a new app where Claude works as a proactive agent. It comes to you with what needs your attention, completes tasks you ask of it, keeps working even when you step away, and checks with you before it acts on your behalf."
> "We designed it around Claude Opus 5.5 and built it to be resourceful and to decide what needs you, what can wait, and when to check with you first."
> "Claude Duet's handling of credentials follows the design we use for Claude Managed Agents, so it never directly sees your passwords or sign-in tokens."
> "Claude Duet is a research preview. It may misread a thread or miscalibrate what's urgent, and it can miss something that arrives between checking in with you."

## 수집 노트
- **선정 이유**: 공식 발표 + Reuters 보도 + HN 313pt로 오늘 후보 중 신호가 가장 강하고, 에이전트 산업의 '능동형 비서' 전환을 대표하는 출시라 선정.
- **제외 후보**: Mistral Large 4(HN 2044pt) — 기존 레코드에 동일 URL 수집 완료. Meta Muse 1,000만 사용자(TechCrunch) — 사용자 수 업데이트로 신규성 낮음.
