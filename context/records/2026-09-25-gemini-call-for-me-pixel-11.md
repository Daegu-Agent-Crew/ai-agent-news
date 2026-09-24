# 구글 제미니 '대신 전화해 줘' 실험 시작 — 픽셀 11부터 업체 전화를 에이전트가

## 메타데이터
- **원문 URL**: https://techcrunch.com/2026/09/24/google-tests-letting-gemini-make-phone-calls-initially-for-us-pixel-owners/
- **소스**: TechCrunch (Sarah Perez)
- **발행일**: 2026-09-24
- **수집일**: 2026-09-25
- **수집자**: 레노버
- **카테고리**: industry
- **태그**: [google, gemini, agentic-ai, phone-calls, pixel, voice-agent]
- **소스 권위**: major-media
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐
- **중요도 산정**: 1 + major-media(1) + 교차 확인 2건(1) + 반응 미관측(0) = ⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> 구글이 제미니가 사용자를 대신해 업체에 전화를 거는 'Call for Me' 기능을 실험적으로 공개했다. 미국에서 제미니 구독자이자 픽셀 11 소유자에게 우선 제공되며, 에이전트가 사용자가 승인한 개인정보를 나누고 실시간 통화를 따라가다가 언제든 인수할 수 있다.

## 번역 (한국어)
구글이 제미니에게 전화를 맡기는 'Call for Me' 기능을 실험으로 시작했다. 메타의 뮤즈·인스팅트 같은 AI 에이전트가 이미 사용자 대신 전화를 걸 수 있게 된 가운데 나온 대응이다. 우선 미국의 픽셀 11 소유자 중 제미니 유료 구독자에게 제공되며, 아직 실험 단계라 안드로이드 전화 앱의 베타 버전 사용이 전제된다.

기존의 AI 통화 보조 기능과의 차이는 권한의 폭이다. 구글에 따르면 제미니는 이번 업데이트에서 사용자가 승인한 개인정보를 통화 중에 나눌 수 있게 되어, 훨씬 다양한 작업을 수행할 수 있다. 사용자는 통화가 진행되는 동안 실시간 녹취(transcript)로 흐름을 지켜보다가 언제든 직접 통화를 인수할 수 있다. 전화는 사용자 본인의 번호로, 실제 폰에서 직접 걸린다.

구글이 예로 드는 작업은 복잡한 실무다. 가게에 전화해 상품 재고를 확인하고, 식당 예약을 잡고, 예약된 일정을 다른 날로 옮기고, 물품을 보류해 달라고 요청하는 것까지다. AI가 업체에 전화해 스스로를 소개하고, 자동응답 메뉴를 헤치고, 대기열에서 기다렸다가 상대방과 대화를 이어간다.

이는 오랜 실험의 연장선이다. 구글은 수년 전 I/O에서 구글 어시스턴트가 미용실에 전화해 예약하면서 '음-','그러니까' 같은 군소를 넣어 자연스럽게 대화하던 데모로 큰 반향을 일으켰다. 지난해에는 가격·서비스 문의를 대신하던 'Ask for Me'를 선보였고, 픽셀에는 'Hold for Me', 'Talk to a Live Rep', 'Direct My Call' 같은 통화 보조 기능이 이미 있었다. 구글은 "실제 세상의 대화는 뉘앙스가 있다"며 소규모 실험부터 시작해 기능을 다듬겠다고 설명했다.

## 왜 중요한가?
에이전트가 '화면 안'에서 '전화기'로 넘어온다는 것은 AI 자동화의 실행 반경이 디지털 행동을 넘어 음성 채널 전체로 확장된다는 뜻이다. 일반 소비자가 에이전트를 일상 업무(예약, 재고 확인)에 쓰는 첫 대량 접점이 될 수 있다. 동시에 상대방이 AI인지 모르는 통화가 늘어난다는 고스란히 실세계 문제를 안고 나온 기능이라, 업계 전체의 신뢰·표시 논의를 촉발할 것이다.

## 심층 분석

### 기술 의미
IVR 탐색, 대기, 실시간 녹취, 사용자 인수(teleoperation)를 한 흐름에 묶은 것은 음성 에이전트의 지연·정확도 문제를 '완전 자동' 대신 '감독형 자동'으로 푸는 설계다 (→ 분석). 승인된 개인정보 공유 단계를 두는 것은 에이전트에게 개인 컨텍스트를 줄 때 권한 스코프를 나누는 패턴으로, 에이전트 권한 관리의 사실상 표준이 될 수 있다. 자기 번호로 거는 방식은 착신 측에 일반 전화로 보이게 해, 발신자 표시 기반 차단 같은 우회를 막는 실용적 선택이다.

### 업계 영향
메타가 에이전트 전화를 먼저 열고 구글이 OS·전화 앱 레벨에서 따라붙면서, 음성 채널이 에이전트 경쟁의 새 전장이 됐다 (→ 분석). 소상공인·콜센터는 AI 발신 전화를 식별·분류하는 수요에 직면하고, ElevenLabs 같은 음성 스택 업체는 B2B 수요가 더 커질 것이다. 'Ask for Me'에서 정보 조회로 시작해 예약 변경 같은 트랜잭션으로 확대된 흐름은, 음성 에이전트가 조회형에서 행동형 에이전트로 진화하는 단계적 경로를 보여준다.

### 관련 프로젝트
- [Gemini](https://gemini.google.com/) — 구글 제미니 공식 사이트
- [Google Pixel Phone app (beta)](https://support.google.com/pixelphone) — 실험이 진행되는 전화 앱

### 관련 뉴스
- [2026-09-24-chatgpt-mobile-voice-agentic.md](2026-09-24-chatgpt-mobile-voice-agentic.md) — 경쟁사 ChatGPT의 모바일 음성·에이전트 기능
- [2026-09-23-meta-muse-openclaw-inspired.md](2026-09-23-meta-muse-openclaw-inspired.md) — 원문이 대조한 메타 에이전트의 통화 기능

## 원문 발췌
> "Google is now letting Gemini call businesses with a new feature called 'Call for Me.'"
> "The feature will initially roll out to Pixel 11 owners who pay for a Gemini subscription in the U.S. It will also require the use of the beta version of Google's Phone app for Android, as it's still supposed to be an experiment."
> "With this update, Gemini will be able to share personal information that you approve as part of the calls it makes, which, the company says, will allow it to take a broader set of actions."
> "Google says users will be able to follow the call as it happens and take over at any time. 'Call for Me' will also use your own personal phone number to make calls, which will be dialed directly from your phone."

## 수집 노트
- **선정 이유**: 소비자용 OS 차원에서 에이전트 전화 기능을 공식화한 이번 주 가장 대표적인 에이전트 산업 동향이고, 구글 발표를 주요 언론(TechCrunch)이 상세 전한 2중 소스 후보였기 때문. 중요도 산정: 1+1(major-media)+1(교차 2건)+0(반응 미관측) = ⭐⭐⭐.
- **제외 후보**: Google Photos 가상 옷장 출시 — Gemini 활용 소비자 기능이지만 에이전트성이 낮아 제외. Meta Muse Charm 가제트 — 하드웨어 트렌드 중심으로 제외.
