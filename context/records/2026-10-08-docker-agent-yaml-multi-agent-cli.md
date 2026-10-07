# Docker, YAML로 멀티에이전트를 정의·실행·공유하는 'Docker Agent' 공개

## 메타데이터
- **원문 URL**: https://github.com/docker/docker-agent
- **소스**: Docker 공식 GitHub 저장소 (HN 151pt)
- **발행일**: 2026-10-07
- **수집일**: 2026-10-08
- **수집자**: 레노버
- **카테고리**: framework
- **태그**: [Docker, 멀티에이전트, MCP, YAML, CLI, OCI]
- **소스 권위**: official
- **교차 확인**: 1
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Docker의 `docker-agent`는 선언형 YAML 설정과 MCP 도구, 멀티에이전트 오케스트레이션으로 AI 에이전트를 만들고 실행·공유하는 docker CLI 플러그인이다. 에이전트를 OCI 레지스트리에 push·pull할 수 있다.

## 번역 (한국어)
Docker Agent는 "선언형 YAML 설정, 풍부한 도구 생태계, 멀티에이전트 오케스트레이션으로 AI 에이전트를 만들고, 실행하고, 공유하는" 도구다. 코드 없이 YAML로 에이전트를 정의하고 도구를 붙여 실행하며, `docker` CLI 플러그인이라 `docker agent` 명령으로 쓴다.

주요 기능은 전문화된 에이전트들이 작업을 자동으로 위임하는 멀티에이전트 구조, 내장 도구와 로컬·원격·Docker 기반 MCP 서버 연결, OpenAI·Anthropic·Gemini·AWS Bedrock·Mistral·xAI·Docker Model Runner 등 공급자 무관 모델 지원이다. think·todo·memory 같은 추론 보조 도구와 BM25·임베딩·하이브리드 검색·리랭킹을 지원하는 RAG도 내장했다.

에이전트는 OCI 레지스트리에 push해 어디서든 pull·실행할 수 있다. Docker Desktop 4.63 이상에는 플러그인이 기본 설치돼 있고, Homebrew(`brew install docker-agent`)나 GitHub Releases 바이너리로도 설치할 수 있다. 로컬 모델은 Docker Model Runner로 API 키 없이 돌릴 수 있다.

## 왜 중요한가?
컨테이너를 이미지로 포장해 어디서든 실행하게 만든 Docker가, 이제 AI 에이전트도 같은 방식으로 포장·배포하게 만든다. 개발자가 만든 에이전트를 회사 저장소에 올리고 팀원이 명령어 한 줄로 내려받아 쓰는 흐름이 가능해진다.

## 심층 분석

### 기술 의미
에이전트 정의를 YAML 선언으로 표준화하고 OCI 아티팩트로 배포하는 방식은 "에이전트 = 배포 가능한 패키지"라는 관점을 기존 컨테이너 인프라 위에 올린 것이다. MCP를 도구 연결 표준으로 채택해 별도 SDK 없이 기존 MCP 서버 생태계를 그대로 쓸 수 있다. 공급자 무관 설계와 로컬 모델 지원은 특정 클라우드 모델에 대한 종속을 줄인다.

### 업계 영향
Docker Desktop에 기본 탑재되면 수백만 개발자 환경에 별도 설치 없이 에이전트 런타임이 깔리는 효과가 있다(→ 분석). LangGraph, CrewAI 같은 코드 중심 프레임워크와 달리 설정 중심 접근이라 운영·DevOps 팀이 에이전트를 관리하기 쉬워질 수 있다. 앞서 공개된 Docker Sandboxes와 결합하면 에이전트 작성→격리 실행→배포까지 Docker가 한 흐름으로 묶으려는 전략으로 보인다(→ 분석).

### 관련 프로젝트
- 문서: https://docker.github.io/docker-agent/
- Model Context Protocol: https://modelcontextprotocol.io/

### 관련 뉴스
- [Docker Sandboxes for AI Agents](../records/2026-08-10-docker-sandboxes-ai-agents.md) — Docker의 에이전트 격리 실행 환경

## 원문 발췌
> "Build, run, and share AI agents with a declarative YAML config, rich tool ecosystem, and multi-agent orchestration."
> "`docker-agent` is a `docker` CLI plugin and can be run with `docker agent`."
> "Package & share — Push agents to any OCI registry, pull and run them anywhere"
> "Docker Desktop (4.63+) — docker-agent CLI plugin is pre-installed."

## 수집 노트
- **선정 이유**: Docker 공식 저장소이고 HN에서 151pt 반응을 얻은 에이전트 프레임워크로, 오늘 후보 중 유일한 framework 카테고리라 선정했다 (1+2+1=4).
- **제외 후보**: Liquid AI d1-3B·d1-omni-600M (MarkTechPost) — 원문이 봇 차단(403)으로 본문 확보 불가, 다음 수집에서 재시도. Meta Rebalancer 오픈소스 — 할당 최적화 솔버로 에이전트 관련성 낮음.
