# Google, AI 에이전트의 Workspace 접근을 MCP 서버로 강제

## 메타데이터
- **원문 URL**: https://techstackups.com/articles/google-workspace-ai-agents-mcp/
- **소스**: TechStackUps (커뮤니티 미디어, Google 공식 약관 원문 인용)
- **발행일**: 2026-11-26
- **수집일**: 2026-11-27
- **수집자**: 레노버
- **카테고리**: framework
- **태그**: [Google, MCP, Workspace, AI Agent, API 정책]
- **소스 권위**: community
- **교차 확인**: 3
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Google은 2026-11-24 Workspace MCP 서버 8종을 일반 공개(GA)하고 API 약관에 신규 조항을 추가했다. 2027-02-01부터 AI 에이전트가 Gmail·Drive·Calendar 등 Workspace에 접근하려면 Google MCP 서버를 사용해야 한다.

## 번역 (한국어)
2026년 11월 24일, 구글은 Workspace용 MCP 서버 8종을 정식 출시(GA)하고 API 이용약관에 'Workspace AI Tools Addendum'이라는 신규 조항을 발표했다. 이 조항에 따르면 2027년 2월 1일부터 "AI 에이전트이거나 AI 에이전트가 구동하는 도구"는 Gmail, Drive, Calendar 등 Workspace 서비스에 반드시 구글의 MCP 서버를 통해 접속해야 한다.

에이전트를 위장해 분류를 회피하는 행위도 명시적으로 금지됐으며, 위반 시 구글은 해당 도구의 접근을 제거하거나 계정을 정지할 수 있다. 같은 날짜부터 에이전트가 REST API를 직접 호출하면 프로젝트가 결제한 등급과 무관하게 'Standard' 등급 할당량으로 제한받는다. AI가 개입하지 않는 앱, 예컨대 정기 백업 작업이나 결정적 스크립트는 영향을 받지 않는다.

약관에는 메모리를 가진 에이전트에 중요한 데이터 규칙도 추가됐다. Workspace 데이터는 "활성 상태의 사용자 승인 작업" 수행 목적으로만 처리할 수 있고, 사용자 연결 해제 시 삭제해야 한다. 구글은 벡터 임베딩, 메모리 인덱스, 사용자 프로필, 조직 그래프를 포함하는 'Google Technical Information'의 보관 기간을 30일로 상한할 수 있으며, 해당 데이터로의 학습·파인튜닝·평가·증류는 금지된다.

기술적 커버리지는 고르지 않다. Docs·Slides·Tasks는 REST API에 준하는 수준이지만 Gmail MCP 서버는 검색·읽기·초안 생성만 가능하고 메일 발송·답장·전달은 '파트너 액세스'가 필요해 일반 이용자는 쓸 수 없다. Drive도 파일 이동, 이름 변경, 공유가 MCP에서 빠져 있다.

## 왜 중요한가?
AI 비서가 회사 이메일과 문서를 다루는 방식의 룰이 구글이 정한 단일 관문으로 모이는 첫 대형 사례다. 2027년 2월까지 이메일 비서나 코딩 에이전트의 구글 플러그인을 쓰는 개발자·기업은 구조를 바꿔야 하고, 30일 데이터 보관 상한은 "지난해 계약을 기억하는 AI 비서" 같은 장기 기억 제품을 직접 제약한다.

## 심층 분석

### 기술 의미
MCP(Model Context Protocol)가 사실상의 산업 표준 자리를 넘어, 플랫폼 사업자가 자사 데이터 접근을 MCP로 '법적으로' 강제한 첫 사례라는 점이 핵심이다(→ 분석). 구글은 REST API 병렬 유지 대신 MCP를 프리미엄 경로로 만들었고, 파트너 전용 Gmail 발송 도구는 접속 승인 자체가 사업 협상 지렛대가 될 수 있다(→ 분석). 발췌된 커버리지 격차(초안 생성 가능, 수정 불가)는 "초안 작성→피드백→수정→발송" 에이전트 워크플로를 구조적으로 깨뜨린다.

### 업계 영향
에이전트 스타트업들은 2개월 안에 Google 의존 기능을 재설계하거나 파트너 지위를 확보해야 한다. 장기 기억·메모리 제품군은 30일 상한과 쌍벽을 이루는 재설계 압박을 받는다. 구글이 성공하면 다른 데이터 플랫폼(마이크로소프트, 세일즈포스 등)도 유사 조항을 따를 유인이 생긴다(→ 분석, 아직 관측되지 않음).

### 관련 프로젝트
- Google Workspace AI Tools Addendum: https://workspace.google.com/terms/ai-tools
- Gmail MCP 도구 가이드: https://developers.google.com/workspace/tools-safety
- Anthropic Google Workspace 커넥터(파트너 사례): https://support.claude.com/en/articles/10166901-use-google-workspace-connectors

### 관련 뉴스
- (해당 없음)

## 원문 발췌
> "On 24 November, Google made its eight Workspace MCP servers generally available and published a new clause in its API terms. From 1 February 2027, any tool that \"is or is driven by an AI Agent\" must reach Gmail, Drive, Calendar and the rest of Workspace through those servers."
> "The GWS Access Tool must use a Google MCP where the GWS Access Tool is or is driven by an AI Agent, an AI Harness or an AI model or service employing an AI model."
> "Google can cap retention of what it calls \"Google Technical Information\" at 30 days. Its definition includes vector embeddings, memory indexes, user profiles and organisational graphs built from Workspace data."
> "It can't send a message, reply, forward, or change a draft after creating it."

## 수집 노트
- **선정 이유**: 공식 약관 변경에 근거한 대형 플랫폼의 에이전트 접근 정책 전환으로, 커뮤니티 소스지만 구글 원문 약관·Anthropic 문서와 교차 확인이 가능해 중요도 ⭐⭐⭐⭐로 산정. MCP 생태계 전반에 직접 영향.
- **제외 후보**: "Anthropic IPO" 관련 TechCrunch 기사 — IPO 루머 성격이 강하고 본 탐색에서 교차 확인 부족. AMD llama.cpp fork — 하드웨어 특화 팁으로 산업 파급이 좁음(별도 후보로 남김).
