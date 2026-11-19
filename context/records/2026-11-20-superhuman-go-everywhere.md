# Superhuman pushes its Go assistant everywhere

## 메타데이터
- **원문 URL**: https://techcrunch.com/2026/11/19/superhuman-pushes-its-go-assistant-everywhere/
- **소스**: TechCrunch
- **발행일**: 2026-11-19
- **수집일**: 2026-11-20
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [[Superhuman, Go 어시스턴트, 생산성, 에이전트 통합]]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **중요도 산정**: (기본 1 + major-media 1; 단일 소스)
- **신선도**: fresh

## 핵심 요약
> Superhuman(구 Grammarly)이 개인화 Go 어시스턴트를 Docs·메일 전반으로 확장하고 DeepL·Databricks 등 20개 연동 에이전트를 추가했다. Go 활성 사용자는 100만 명을 넘었다고 CEO가 밝혔다.

## 번역 (한국어)
Superhuman(작년 리브랜딩 전 Grammarly)이 맞춤형 Go 어시스턴트 롤아웃, Docs 에이전트 탑재, 서드파티 에이전트 통합 등의 기능 확대를 발표했다. 새 롤아웃으로 Go는 서로 다른 앱에서 맥락을 학습해 프롬프트에 더 나은 개인화 제안을 준다.

온보딩 흐름도 개편돼 사용자가 선호 도구를 연결하고 업무 맥락을 미리 불러올 수 있다. 어시스턴트는 Grammarly처럼 커서 위치에서 인라인으로 작동하며 다른 에이전트들을 관리한다. 일정을 살피고 이메일을 모니터링해 답장 초안까지 만드는 능동적(proactive) 동작도 추가됐다.

Go SDK를 통해 DeepL, Legora, Amplitude, Databricks, Blackboard 등 20개 신규 연동 에이전트가 들어온다. Docs에서는 모든 Go 에이전트가 네이티브로 동작해 여러 작업을 배경에서 진행할 수 있고, 이벤트 기반 워크플로 루틴 설정도 가능하다. 9월 인수한 노트테이커 Fathom의 기술로 팀 공유 실시간 협업 노트와 회의 후 제안서 초안 작성 같은 결정 지원도 추가됐다.

CEO Shishir Mehrotra는 Go가 활성 사용자 100만 명을 넘어 성장세를 보이고 있다고 말했다. 업무용 성격이 강하지만 개인 이메일과 일정에도 쓸 수 있다고 봤다.

## 왜 중요한가?
이메일·문서 같은 매일 쓰는 도구 속으로 AI 에이전트가 깊이 파고드는 사례라서다. 문서 작성 교정 도구였던 회사가 일정·메일·회의까지 아우르는 통합 비서로 전환하는 과정을 보여줘, 생산성 앱 시장의 방향을 가늠하게 한다.

## 심층 분석

### 기술 의미
'하나의 개인화 에이전트가 서드파티 에이전트 20개를 지휘하는 오케스트레이션' 구조로, 에이전트 간 연합이 단일 앱 안에서 구현된 사례다. (→ 분석) SDK 공개는 외부 에이전트의 생태계 유입 경로를 여는 것으로 확장성 관점에서 주목된다. (→ 분석)

### 업계 영향
Grammarly→Superhuman 전환의 성패를 가늠하는 지표로 활성 사용자 100만이 제시됐다. (→ 분석) 생산성 앱들이 각자 AI를 다는 대신 맥락 공유·에이전트 관리 기능으로 차별화하는 흐름이 두드러진다. (→ 분석)

### 관련 프로젝트
- [Superhuman](https://superhuman.com/)

### 관련 뉴스
- [Snapchat Easy Lens CLI](../records/2026-11-19-snapchat-easy-lens-cli.md) — 플랫폼의 에이전트 통합 전략
- [Proton Lumo 데스크톱 출시](../records/2026-11-18-proton-lumo-desktop-launch.md) — 생산성 AI 경쟁

## 원문 발췌
> Superhuman (formerly Grammarly) is going in the same direction with the rollout of features, including a personalized Go assistant, making agents available in Docs, and third-party agent integrations.
> The company is adding 20 new connected agents, including DeepL, Legora, Amplitude, Databricks, and Blackboard, through its Go SDK.
> The company's CEO, Shishir Mehrotra, said that Go has had good momentum with over 1 million active users.

## 수집 노트
- **선정 이유**: major-media 단독 보도라 중요도는 낮게 산정했으나, 에이전트 오케스트레이션·생산성 통합이라는 카테고리 대표 사례로 아카이브.
- **제외 후보**: Meta Muse 혼선·개인정보 노출 보도 — 'report says' 전제로 사실 소급 불안정해 보류.
