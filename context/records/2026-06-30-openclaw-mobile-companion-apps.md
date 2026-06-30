# OpenClaw iOS/Android 컴패니언 앱: 폰을 AI 에이전트 노드로

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/06/29/openclaw-releases-ios-and-android-companion-node-apps-that-connect-a-phone-to-a-self-hosted-ai-agent-gateway/
- **소스**: MarkTechPost
- **발행일**: 2026-06-29
- **수집일**: 2026-06-30
- **수집자**: 대구루
- **카테고리**: tool
- **태그**: [OpenClaw, mobile, iOS, Android, self-hosted, agent-node, privacy]
- **중요도**: ⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> OpenClaw가 iOS와 Android 컴패니언 앱을 출시했다. 이 앱들은 독립적인 챗봇이 아니라, 자가 호스팅된 AI 에이전트 Gateway에 폰을 '노드'로 연결하는 방식이다. 폰의 카메라, 위치, 음성 등 하드웨어 기능을 에이전트가 사용할 수 있게 한다.

## 번역 (한국어)

OpenClaw가 iOS와 Android 네이티브 컴패니언 앱을 출시했다. iOS 앱은 'OpenClaw – AI that does things', Android 앱은 'OpenClaw node'로 등록되어 있으며 둘 다 무료다. 핵심은 이 앱들이 독립적인 챗봇이 아니라는 점이다. 각 폰은 자가 호스팅된 에이전트 네트워크의 노드가 된다. AI 어시스턴트 자체는 별도의 Gateway에서 실행된다. 이 분리가 전체 설계의 핵심이다.

Gateway-노드 아키텍처에서 Gateway가 단일 제어 평면이다. 세션, 라우팅, 채널, 도구, 이벤트를 모두 관리한다. macOS, Linux, Windows(WSL2)에서 하나의 Gateway 프로세스를 실행한다. 사용자는 WhatsApp, Telegram, Discord, Slack, Signal, iMessage 등 기존 채팅 앱을 통해 대화한다. 노드는 WebSocket(기본 포트 18789)을 통해 Gateway에 연결되며, role: "node"로 페어링된다. 노드는 camera.*, device.*, notifications.* 등의 명령을 통해 폰의 하드웨어를 에이전트에 노출한다.

모바일 앱은 에이전트에게 '몸'을 제공한다. iOS 앱은 QR 코드 또는 설정 코드로 페어링하며, 채팅, 실시간/백그라운드 대화 모드, 승인 기능을 지원한다. 카메라, 화면, 위치, 사진, 연락처, 캘린더 등을 옵션으로 연결할 수 있다. Android 앱은 스트리밍 채팅 응답, 이미지 첨부, 전체 세션 히스토리를 제공하며, ElevenLabs 또는 시스템 TTS를 사용하는 대화 모드, 라이브 Canvas 서피스를 지원한다.

보안 측면에서 카메라와 화면 캡처는 포그라운드에서만 작동한다. 프라이버시 관련 명령(camera.snap, screen.record 등)은 기본적으로 비활성화되어 있으며, gateway.nodes.allowCommands를 통해 명시적으로 활성화해야 한다. deny 목록이 항상 allow 목록보다 우선한다. 공용 또는 Tailscale 엔드포인트에는 TLS가 필수이고, cleartext ws://는 LAN 및 .local 호스트로만 제한된다.

## 왜 중요한가?
AI 에이전트가 클라우드나 PC뿐만 아니라 모바일 기기의 센서와 기능을 직접 활용할 수 있게 되었다. 자가 호스팅 기반이라 데이터가 외부로 나가지 않으면서도 폰의 카메라, GPS, 알림을 에이전트 워크플로에 통합할 수 있다. 이는 프라이버시를 중시하는 사용자와 기업에게 의미 있는 대안이 된다.

## 심층 분석

### 기술 의미
OpenClaw의 Gateway-노드 아키텍처는 에이전트 로직과 디바이스 하드웨어를 명확히 분리하는 설계다. Gateway가 모든 의사결정과 도구 실행을 담당하고, 노드(폰)는 센서 및 액추에이터 역할만 한다. 이는 로봇 공학의 센서-제어부 분리와 유사한 패턴이다. WebSocket 기반 페어링과 명시적 권한 승인 시스템은 보안을 강화하면서도 확장성을 유지한다. mDNS/Bonjour를 통한 로컬 발견과 Tailscale을 통한 원격 접근 지원은 실사용 시나리오를 잘 고려한 것이다.

### 업계 영향
개인용 AI 에이전트 시장에서 자가 호스팅과 프라이버시는 중요한 차별화 요소다. ChatGPT, Gemini 등 클라우드 기반 AI가 시장을 주도하는 가운데, OpenClaw는 데이터 통제권을 사용자에게 두는 대안을 제시한다. 특히 기업 환경에서 민감한 데이터가 외부 클라우드로 나가지 않아야 하는 요구사항에 부응한다. 이 모바일 앱 출시는 개인용 AI 에이전트가 '데스크톱 한정'에서 '주머니 속'으로 확장하는 의미가 있다. 향후 웨어러블, 스마트홈 기기 등도 노드로 추가될 수 있는 확장성을 시사한다.

### 관련 프로젝트
- [OpenClaw GitHub](https://github.com/openclaw/openclaw) — 오픈소스 AI 에이전트 프로젝트
- [OpenClaw iOS](https://apps.apple.com/us/app/openclaw-ai-that-does-things/id6780396132) — App Store
- [OpenClaw Android](https://play.google.com/store/apps/details?id=ai.openclaw.app) — Google Play

### 관련 뉴스
- [Mindstone Rebel 로컬 에이전트 OS](../records/2026-06-26-mindstone-rebel-local-agent-os.md) — 로컬 우선 AI 에이전트 접근
- [Shopify 모델 비구속 AI 스택](../records/2026-06-26-shopify-model-agnostic-ai-stack.md) — 자가 호스팅과 유사한 통제권 중시
- [Huawei HarmonyOS 7 AI 에이전트](../records/2026-06-13-huawei-harmonyos-7-ai-agents.md) — OS 수준의 에이전트 통합

## 원문 발췌
> Each phone becomes a node in a self-hosted agent network. The assistant itself runs on a separate Gateway. That separation is the whole design.
>
> Nodes are peripherals, not gateways. Privacy-heavy commands stay off until you allowlist them.
