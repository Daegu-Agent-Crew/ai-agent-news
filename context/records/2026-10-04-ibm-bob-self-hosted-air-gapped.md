# IBM, 에이전트 개발 플랫폼 'Bob' 자체 호스팅·폐쇄망 버전 정식 출시

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/10/02/ibm-brings-bob-to-self-hosted-and-air-gapped-environments/
- **소스**: MarkTechPost
- **발행일**: 2026-10-02
- **수집일**: 2026-10-04
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [ibm, bob, coding-agent, self-hosted, air-gapped, enterprise, mainframe]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **신선도**: fresh
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 1개(0) + 반응 규모 미확인(0) = 2

## 핵심 요약
> MarkTechPost에 따르면 IBM이 에이전트형 소프트웨어 개발 플랫폼 Bob의 자체 호스팅 배포 옵션을 정식 출시해, 기업이 온프레미스·사설/주권 클라우드·폐쇄망(air-gapped)에서 Bob을 운영할 수 있게 됐다. 모델은 번들되지 않아 고객이 지원 목록에서 직접 조달해야 한다.

## 번역 (한국어)
MarkTechPost는 IBM이 에이전트형 소프트웨어 개발 플랫폼 IBM Bob의 자체 호스팅 배포 옵션을 정식(GA) 출시했다고 보도했다. Bob은 코드 이해, 작업 계획, 변경 실행, 결과 검증까지 개발 생애주기 전체를 다룬다. 새 옵션으로 기업은 Bob을 온프레미스, 사설·주권 클라우드, 인터넷과 분리된 폐쇄망에서 실행할 수 있다.

자체 호스팅 Bob에는 모델이 포함되지 않으며, 고객이 IBM 지원 목록에서 모델을 직접 조달·라이선스·호스팅해야 한다. 이 선택이 코드와 맥락이 어디서 처리되는지를 결정하며, 자체 호스팅 모델을 쓰면 코드·개발 맥락·빌드 산출물이 고객 환경 안에 머물 수 있다. IBM은 가격을 공개하지 않았고 데모 요청으로 안내한다.

IBM이 든 예시로, 은행은 핵심 뱅킹 애플리케이션에는 온프레미스 추론을 쓰고 덜 민감한 작업은 승인된 외부 모델로 보낼 수 있다. 개발자는 두 경우 모두 같은 Bob 경험을 쓰고, 플랫폼·보안팀이 아키텍처를 통제한다. IBM은 모델 포트폴리오 확대와 멀티모델 라우팅 추가를 계획 중이라고 밝혔으며, MarkTechPost는 이를 출시 기능이 아닌 로드맵으로 봐야 한다고 지적했다.

## 왜 중요한가?
은행·공공기관처럼 코드를 회사 밖으로 한 줄도 내보낼 수 없는 곳은 그동안 AI 코딩 에이전트를 쓰기 어려웠습니다. IBM이 인터넷이 끊긴 환경에서도 돌아가는 버전을 내놓으면서, 보안이 가장 엄격한 조직에도 코딩 에이전트가 들어갈 길이 열렸습니다.

## 심층 분석

### 기술 의미
에이전트 런타임과 모델을 분리하고 모델을 '고객 조달'로 둔 구조는, 에이전트 플랫폼이 특정 LLM에 묶이지 않는 하네스 계층으로 분화하고 있음을 보여준다(→ 분석). 워크로드 민감도에 따라 내부·외부 모델을 나눠 쓰는 IBM의 은행 예시는 사실상 정책 기반 모델 라우팅의 수동 버전이며, 예고된 멀티모델 라우팅이 이를 자동화할 것으로 보인다(→ 분석). 폐쇄망 지원은 업데이트·텔레메트리·도구 호출이 모두 내부에서 닫혀야 하므로 일반 SaaS 에이전트보다 운영 난도가 높다.

### 업계 영향
MarkTechPost는 GitLab·GitHub가 자사 DevOps 플랫폼에, Mistral이 자사 오픈 웨이트 모델에 에이전트를 붙이는 반면 IBM은 Java·IBM i·메인프레임 같은 오래된 시스템의 현대화를 공용 인터넷에 닿을 수 없는 환경에서 수행하는 데 초점을 둔다고 분석했다. 규제 산업의 레거시 현대화 시장은 규모가 크고 전환 비용이 높아, 먼저 진입한 공급사가 오래 자리를 지킬 가능성이 있다(→ 분석). 같은 날 공개된 Aleph Alpha Kolibri 같은 온프레미스용 오픈 모델과 결합하는 수요도 예상된다.

### 관련 프로젝트
- IBM Bob, GitLab Duo, Mistral Vibe, GitHub Copilot

### 관련 뉴스
- [Aleph Alpha Kolibri 주권형 오픈 모델](../records/2026-10-04-aleph-alpha-kolibri-sovereign-open-weight-model.md) — 온프레미스 배포용 모델 수요
- [Mistral OCR 4](../records/2026-06-26-mistral-ocr-4-document-intelligence.md) — 엔터프라이즈 자체 호스팅 AI 흐름

## 원문 발췌
> "IBM has made a self-hosted deployment option for IBM Bob generally available. Bob is IBM's agentic software development platform."
> "The new option lets enterprises run Bob on premises, in private or sovereign clouds, and in air-gapped networks."
> "Bob self-hosted does not bundle a model. Customers bring one from IBM's supported list."

## 수집 노트
- **선정 이유**: 코딩 에이전트의 폐쇄망 정식 지원이라는 새 배포 형태로, 단일 소스(교차 1)라 중요도는 낮지만 엔터프라이즈 에이전트 도입 장벽이라는 아카이브 주제와 직접 연결됨.
- **제외 후보**: Offrun 코딩 에이전트 통합 워크스페이스(Show HN) — 개인 프로젝트 단일 소개. 텍스트 메시지 속 AI 에이전트 모음(TechCrunch) — 신규 발표 없는 정리 기사.
