# Google, 코딩 에이전트가 취약점을 찾고·재현하고·패치하는 오픈소스 툴킷 'Mantis' 공개

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/09/09/google-open-sources-mantis-a-modular-skills-toolkit-that-lets-coding-agents-find-reproduce-and-patch-vulnerabilities/
- **소스**: MarkTechPost
- **발행일**: 2026-09-09
- **수집일**: 2026-09-10
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [Google, Mantis, AI-agent-security, vulnerability, open-source, Gemini-CLI, sandbox, gVisor, coding-agents]
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Google이 AI 코딩 에이전트가 취약점 발견부터 재현, 패치, 재공격 검증, 위험도 점수화까지 전체 수명주기를 수행하도록 돕는 스택 비종속(stack-agnostic) 보안 스킬 툴킷 'Mantis'를 Apache 2.0으로 오픈소스화했다.

## 번역 (한국어)
Google이 코딩 에이전트용 보안 리뷰 스킬 툴킷 'Mantis'를 공개했다. Mantis는 저장소를 향해 스캔만 하고 끝나는 기존 스캐너가 아니라, 기존 코딩 에이전트가 불러오는 슬래시 명령어 모음과 에이전트가 코드를 실행할 수 있는 위치에 대한 엄격한 규칙의 집합이다. 에이전트는 의심 취약점을 찾고, 오탐을 걸러내고, 샌드박스에서 버그를 재현하고, 최소 패치를 작성한 뒤, 그 패치를 다시 공격해 남은 위험도를 점수화한다. 라이선스는 Apache 2.0이며 문서상으로는 데모 전용(demonstration-only)으로 명시되어 있다.

파이프라인의 각 단계는 별도의 스킬 디렉터리로 공개되며 슬래시 명령으로 호출되어 순차적으로 연결된다. 감독자 스킬 `/mantis-meta-agent`가 장기 세션에서 전체 루프를 구동할 수 있다. 초기 단계는 대상 코드베이스를 학습한다. `/mantis-history`는 버전 관리 이력에서 과거 보안 수정 사항을 채굴하고, `/mantis-summarize`는 디렉터리 요약을 작성하며, `/mantis-architecture`는 마크다운 지식 베이스를 만들고, `/mantis-threat-model`은 신뢰 경계를 도출하고, `/mantis-plan`은 표적화된 리뷰 로드맵을 생성한다.

중간 단계는 발견과 필터링을 담당한다. `/mantis-researcher`가 계획에 따라 파일을 훑으며 의심 항목을 구조화된 finding으로 남기면, `/mantis-dedupe`, `/mantis-review`, `/mantis-critic`이 중복을 통합하고 네거티브 규칙을 적용해 릴리스 빌드에서 발생할 수 없는 이슈를 제거한다. AI 스캐닝을 쓸모없게 만드는 오탐을 걷어내는 것이 핵심이다.

후반 단계는 증명과 수정이다. `/mantis-reproduce`는 네트워크가 차단된 gVisor 컨테이너나 VM에서 페이로드를 실행해 실제 크래시를 확인하고, `/mantis-chain`은 개별 확인된 finding들을 다단계 익스플로잇 체인으로 조립하며, `/mantis-patch`는 수정을 적용·검증하고, `/mantis-calibrate`는 1~10 위험 점수를 매기고, `/mantis-reflect`는 다음 패스를 위한 학습을 기록하고, `/mantis-report`는 사람이 읽을 수 있는 리뷰 패킷을 만든다. 최근 추가된 `/mantis-advise`는 흐름을 뒤집어, 코드를 작성하기 전에 누적된 위협 모델과 과거 버그 계보, 검증된 패치 패턴을 조회해 같은 계열의 버그가 반복되지 않도록 돕는다.

Gemini CLI, Antigravity CLI, Google ADK 등 유사 에이전트 프레임워크에서 오늘 바로 실행할 수 있지만, Google은 자율 코드 생성·실행이 이루어지는 만큼 프로덕션이 아니라 격리된 환경에서만 돌리고, 모든 finding을 보안 전문가가 검증하도록 권고한다.

## 왜 중요한가?
AI 코딩 에이전트가 코드를 스스로 짜는 시대에 보안 검증도 에이전트에게 맡기는 흐름이 본격화되고 있음을 보여주는 첫 대형 오픈소스 사례다. 특히 "찾기만 하는 스캐너"가 아니라 재현→패치→재공격→점수화까지 닫힌 루프를 돌린다는 점이 기존 SAST/DAST 도구와 결정적으로 다르다. Google이 직접 설계를 공개함으로써 에이전트 기반 보안 점검의 사실상 표준 패턴이 만들어질 가능성이 있다.

## 심층 분석

### 기술 의미
Mantis의 구조는 "거대한 단일 에이전트"가 아니라 "단일 책임을 가진 스킬들의 체인"이라는 설계 철학을 보여준다. 컨텍스트 윈도우를 아끼기 위해 저장소 전체를 모델에 넣지 않고 디렉터리·루트 수준 요약 트리를 먼저 만드는 점, finding의 신뢰도를 dedupe→negative rule→viability critic→샌드박스 PoC라는 다단 검증으로 쌓아 올리는 점이 주목할 만하다. gVisor·네트워크 차단 VM 같은 강제 격리를 전제로 한 실행 모델은 자율 에이전트의 안전한 코드 실행에 대한 레퍼런스 아키텍처로 재사용 가능하다.

### 업계 영향
AI 에이전트 보안 시장(침투 테스트 자동화, 코드 감사)에 Google이 무료 오픈소스로 진입하면서 스타트업들의 유료 스캐너는 가격·차별화 압력을 받게 된다. 반대로 에이전트 프레임워크 진영(Claude Code, Gemini CLI, OpenCode 등)에는 "스킬 패키지" 생태계의 대표 사례가 생긴 셈이어서, 에이전트 기능을 마켓플레이스처럼 확장하는 흐름이 가속될 것이다. 기업 보안팀 입장에서는 오탐 필터링과 재현 기반 검증이라는 점이 도입 검토의 핵심 기준이 될 것으로 보인다.

### 관련 프로젝트
- https://github.com/google/mantis — Mantis 본 저장소 (Apache 2.0)
- https://github.com/google-gemini/gemini-cli — 실행 환경 예시 중 하나

### 관련 뉴스
- [2026-09-09-meta-muse-personal-ai-agent.md](2026-09-09-meta-muse-personal-ai-agent.md) — 에이전트 스킬/툴 확장 흐름의 다른 사례

## 원문 발췌
> "Mantis is not a scanner you aim at a repository and walk away from. It is a set of slash commands your existing coding agent loads, plus a strict set of rules about where that agent is allowed to execute code."
