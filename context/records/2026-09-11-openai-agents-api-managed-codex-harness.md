# OpenAI, Codex 하네스를 API로 노출하는 'Agents API' 공개 — 세션·샌드박스·멀티에이전트 관리형 제공

## 메타데이터
- **원문 URL**: https://developers.openai.com/api/docs/guides/agents-api/overview
- **소스**: OpenAI 공식 개발자 문서 / Hacker News (93 points)
- **발행일**: 2026-09-10
- **수집일**: 2026-09-11
- **수집자**: 레노버
- **카테고리**: framework
- **태그**: [OpenAI, Agents-API, Codex, multi-agent, sandbox, MCP, sessions, gpt-6-astra]
- **소스 권위**: official
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> OpenAI가 Codex 하네스를 OpenAI 관리형 API로 제공하는 'Agents API' 문서를 공개했으며, 세션·오케스트레이션·컨텍스트 압축·복구를 OpenAI가 관리하고 애플리케이션은 도구와 실행 환경만 제공하는 구조로, 에이전트가 코드 실행·파일 편집·MCP 서버 연결이 가능한 샌드박스에서 동작한다.

## 번역 (한국어)
OpenAI의 Agents API는 애플리케이션이 OpenAI 관리형 API를 통해 Codex 하네스에 접근할 수 있게 해준다. 세션 관리, 오케스트레이션, 컨텍스트 압축, 복구는 OpenAI가 담당하고, 애플리케이션은 도구를 제공하고 실행 환경을 선택하는 역할만 한다. 에이전트는 샌드박스 안에서 코드를 실행하고, 파일을 편집하고, MCP 서버에 연결하고, 산출물(artifact)을 만들 수 있다.

API는 네 가지 핵심 개념을 중심으로 설계됐다. 모델·지침·도구·MCP 서버의 묶음인 '에이전트', 파일에 접근하고 스킬을 로드하며 명령을 실행하는 샌드박스 또는 컴퓨터인 '환경', 작업을 수행하고 입력에 응답하는 에이전트의 지속 인스턴스인 '세션', 그리고 세션에 보내는 입력과 작업 중 생산되는 출력을 다루는 '이벤트와 아이템'이다. 전형적인 흐름은 세션 생성 → 작업 부여 → 출력 스트리밍 또는 웹훅으로 완료 감지 → 같은 세션에 추가 작업이나 실시간 조향(steering) 순이다.

관리형 하네스가 제공하는 기능에는 샌드박스에서의 명령·코드 실행, 관련 스킬과 지침 적용, 도구·MCP를 통한 외부 데이터 연결, 작업 중 에이전트 조향, 컨텍스트 윈도우 관리를 위한 이전 작업 요약, 하위 작업 분할과 서브에이전트 위임, 세션 재개가 있다. 문서의 예시 코드에서는 `client.beta.agents.sessions.create`로 `gpt-6-astra` 모델에 웹 검색·프로그램형 도구 호출·MCP 도구를 붙이고, `multi_agent: { enabled: true, max_concurrent_subagents: 4 }`로 동시 서브에이전트 4개까지 구성하는 모습이 보인다.

과금은 모델 사용량이 해당 모델의 API 요율, OpenAI 내장 도구는 표준 요율, OpenAI 호스팅 샌드박스는 컨테이너 요율로 이뤄진다. 환경은 OpenAI 호스팅 샌드박스와 자체 호스팅(self_hosted)을 선택할 수 있다. 공식 쇼케이스에는 장애 대응 에이전트, Slack 봇, 읽기 전용 SQL 데이터 애널리스트, GitHub 이슈 재현·보고 에이전트, 문서 검토 에이전트 등 5개 완성 애플리케이션 예제가 공개됐다.

## 왜 중요한가?
지금까지 에이전트를 서비스에 넣으려면 각사가 직접 세션 지속성, 컨텍스트 압축, 오류 복구, 서브에이전트 조율 같은 '하네스' 엔지니어링을 구현해야 했다. OpenAI가 이 계층을 API로 팔기 시작했다는 것은 에이전트 개발의 진입 장벽을 애플리케이션 레이어까지 낮추는 것이며, 에이전트 인프라가 모델 API 다음의 과금·경쟁 전장이 됐다는 신호다. 같은 날 TechCrunch가 보도한 'Astra 수요로 Pro 구독 신규 접수 중단'과 겹쳐 보면, 이 API가 소비자용이 아니라 기업용 에이전트 수요를 겨냥한 것임도 읽힌다.

## 심층 분석

### 기술 의미
이 API의 본질은 '하네스의 제품화'다. 세션을 지속 인스턴스로 다루고 웹훅·스트리밍·중간 조향을 일급 시민으로 제공하는 것은 장기 실행 작업형 에이전트의 표준 인터페이스 설계이며, 컨텍스트 압축과 세션 재개를 서버 측이 맡는다는 점이 기존 stateless 챗 컴플리션류 API와 결정적으로 다르다. `beta` 네임스페이스임에도 멀티 에이전트 위임(최대 동시 서브에이전트 4), 스킬(capability_directories), MCP 연결, 자체 호스팅 환경 옵션까지 갖춘 것은 Codex CLI에서 검증된 하네스 설계를 서버 API로 이식한 것으로 보인다 (→ 분석). 모델명 gpt-6-astra가 예제에 쓰인 것도 플래그십 모델과 하네스의 번들 판매 전략을 보여준다.

### 업계 영향
Anthropic(Claude Agent SDK), Google(ADK) 등도 유사 하네스를 제공 중이므로, 이번 공개는 '관리형 에이전트 하네스' 시장의 본격 경쟁 선언이다. LangChain·LlamaIndex 같은 오케스트레이션 프레임워크와 E2B·Modal 같은 샌드박스 인프라 스타트업은 모델 벤더의 수직 통합과 직접 겹치는 영역이 넓어진다. 반대로 기업 입장에서는 하네스 운영 부담이 줄어드는 대신 컨텍스트·세션 데이터가 벤더 서버에 쌓이는 종속성 질문에 직면한다. 자체 호스팅 환경 옵션이 그 완충 장치로 제공된다.

### 관련 프로젝트
- https://developers.openai.com/api/docs/guides/agents-api/quickstart — 퀵스타트 (샌드박스에서 디렉터리 트리 스크립트 실행)
- https://developers.openai.com/api/docs/guides/agents-api/multi-agent — 서브에이전트로 릴리스 노트 비교 예제
- https://developers.openai.com/showcase/agents-api-github-issues — GitHub 이슈 재현 에이전트 쇼케이스

### 관련 뉴스
- [2026-09-10-google-mantis-agent-security-toolkit.md](2026-09-10-google-mantis-agent-security-toolkit.md) — Google의 에이전트 보안 툴킷, 하네스 경쟁의 보안 측면
- [2026-09-10-openai-paul-christiano-foundation-board.md](2026-09-10-openai-paul-christiano-foundation-board.md) — OpenAI 재단 이사회 변화, 에이전트 확장과 안전 거버넌스의 동반 진행

## 원문 발췌
> "The Agents API gives your application access to the Codex harness through an OpenAI-managed API. OpenAI manages sessions, orchestration, context compaction, and recovery while your application provides tools and chooses its execution environment."
> "Agents can operate in a sandbox where they can execute code, edit files, connect to MCP servers, and produce artifacts."
> "The Agents API is built around four main concepts: **Agent:** The model, instructions, tools, and MCP servers available to the agent. **Environment:** An optional sandbox or computer where the agent accesses files, loads skills, and runs commands. **Session:** A durable instance of an agent that works on tasks and responds to input."

## 수집 노트
- **선정 이유**: 에이전트 하네스의 API화라는 생태계 구조 변화를 공식 문서(소스 권위 official)로 직접 확인할 수 있고, HN 93pt로 커뮤니티 관심이 확인된 오늘 핵심 프레임워크 소식이다.
- **제외 후보**: TechCrunch 'OpenAI puts Pro subscriptions on hold due to Astra demand' — 구독 정책 뉴스로 성격이 다르지만 Astra 수요 맥락을 본 레코드에서 상호 참조. Pocket FM AI 오디오 (TechCrunch) — 미디어 버티컬이라 에이전트 생태계 관련도가 낮아 제외.
