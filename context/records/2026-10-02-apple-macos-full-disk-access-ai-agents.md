# Apple, AI 에이전트 위험 이유로 macOS 'Full Disk Access' 통제 강화

## 메타데이터
- **원문 URL**: https://developer.apple.com/news/?id=p6zjojqw
- **소스**: Apple Developer News (교차: TechCrunch)
- **발행일**: 2026-10-02
- **수집일**: 2026-10-03
- **수집자**: 레노버
- **카테고리**: industry
- **태그**: [apple, macos, full-disk-access, privacy, desktop-agent, security, meta-muse]
- **소스 권위**: official
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh
- **중요도 산정**: 기본 1 + official 2 + 교차 확인 2개(1) + 반응 규모 HN 75pt(100 미만, 0) = 4

## 핵심 요약
> Apple은 일부 개발자가 Full Disk Access를 사용자 모르게 시스템 전체를 노출하는 방식으로 쓰고 있다며, 앞으로 이 권한은 "매우 명시적인 사용자 행동"으로만 부여되도록 추가 통제를 도입하겠다고 밝혔다. Apple은 AI 에이전트가 더 자율적으로 될수록 이 수준의 접근 위험이 크게 커진다고 설명했다.

## 번역 (한국어)
Apple은 개발자 공지에서 Full Disk Access가 원래 Mac에서 백업 앱이 제대로 동작하도록 하기 위한 것으로, 사용자의 개인 데이터를 보호하는 여러 통제 장치를 상당 부분 우회한다고 설명했다. Apple에 따르면 일부 개발자는 이 권한을 파일·메일·메시지·브라우징 기록까지 사용자가 충분히 알지 못한 채 노출하는 방식으로 사용하고 있으며, 메신저 앱의 경우 대화 상대의 프라이버시까지 위협할 수 있다.

Apple은 앞으로 이런 "이례적인 수준의 접근"을 정말 원하는 사용자만 "매우 명시적인 사용자 행동"을 통해 권한을 줄 수 있도록 추가 통제를 도입하겠다고 밝혔다. 구체적인 적용 시점과 UI는 공지에 포함되지 않았다.

TechCrunch는 이번 발표가 Inc. 칼럼니스트 Jason Aten이 Meta의 Mac용 Muse 앱이 자신의 비공개 메시지 내용을 알고 있었다고 보도한 지 며칠 만에 나왔다고 전했다. Meta는 이 주장을 반박했다. TechCrunch는 또 Wired가 ChatGPT Mac 앱의 결함으로 해커가 민감 데이터에 접근할 수 있었다고 보도한 사례도 언급했다.

TechCrunch에 따르면 Muse는 사용자가 선택적으로 Full Disk Access를 켤 수 있게 하고 있다. Apple은 TechCrunch의 추가 문의에는 답하지 않았다.

## 왜 중요한가?
컴퓨터를 대신 조작하는 AI 에이전트가 늘면서, 앱 하나에 "내 컴퓨터 전부"를 열어주는 일이 흔해졌습니다. 운영체제를 만드는 Apple이 직접 AI 에이전트를 이유로 권한 규칙을 조이겠다고 나선 것은, 앞으로 데스크톱 에이전트가 무엇을 볼 수 있는지가 회사 정책이 아니라 OS 차원에서 결정되기 시작했다는 신호입니다.

## 심층 분석

### 기술 의미
Full Disk Access는 macOS의 TCC(투명성·동의·통제) 체계에서 개별 폴더·데이터 권한을 한 번에 건너뛰는 가장 넓은 권한이다. 데스크톱 에이전트는 메일·메시지·파일을 넘나들어야 유용하기 때문에 이 권한을 요구하는 유인이 크다. Apple이 예고한 "매우 명시적인 사용자 행동"은 시스템 설정 깊숙이 들어가야 하는 추가 확인 절차나 경고 화면 형태가 될 가능성이 있으나, 구체 방식은 공개되지 않았다(→ 분석).

### 업계 영향
Meta Muse, ChatGPT 등 Mac 데스크톱 에이전트 제공사는 광범위한 디스크 접근 대신 Apple의 세분화된 API 권한 위주로 설계를 바꿔야 할 압력을 받을 수 있다. OS 업체가 에이전트 권한의 '관문' 역할을 강화하면, 에이전트 경쟁에서 Apple 자체 기능(Siri 등)이 유리해진다는 해석도 가능하다. 이는 OpenClaw 같은 로컬 에이전트 하네스에도 권한 설계 재점검을 요구하는 흐름으로 볼 수 있다.

### 관련 프로젝트
- [TechCrunch 보도](https://techcrunch.com/2026/10/02/apple-says-its-tightening-macos-full-disk-access-controls-due-to-new-risks-from-ai-agents/)
- Meta Muse (Mac 데스크톱 에이전트)

### 관련 뉴스
- [Meta Muse Mac 데스크톱 에이전트](../records/2026-09-19-meta-muse-mac-desktop-agent.md) — 논란의 대상이 된 Mac 앱
- [Amazon, Meta Muse 에이전트 차단](../records/2026-09-22-amazon-blocks-meta-muse-agent.md) — 플랫폼 사업자의 에이전트 견제 사례
- [LLM의 호스트 머신 장악 가능성](../records/2026-08-24-llms-could-control-their-host-machines-by-exploiti.md) — 로컬 에이전트 권한 위험

## 원문 발췌
> "Some developers are using Full Disk Access in ways that could put users at risk, exposing everything on their systems—including files, mail, messages, and even browsing history—without users' full knowledge and understanding."
> "Going forward, we will introduce additional controls to ensure that users who genuinely wish to grant an app this extraordinary level of access can only do so with very explicit user action."
> "As AI agents become increasingly capable and autonomous, the risks associated with this level of access will grow substantially."

## 수집 노트
- **선정 이유**: Apple 공식 개발자 공지(official)이고 TechCrunch가 맥락(Meta Muse 논란)과 함께 교차 보도해 오늘 후보 중 근거가 가장 단단함.
- **제외 후보**: Google 'September 2026 AI 업데이트' 정리 글 — Gemini 4 Argon 등 이미 아카이브된 발표의 월간 재요약이라 제외. Datalab OmniExtractBench(MarkTechPost) — 스폰서 표기 기사이고 단일 소스라 제외.
