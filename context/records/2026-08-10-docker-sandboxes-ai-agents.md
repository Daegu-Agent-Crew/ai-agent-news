# Docker Sandboxes: Disposable Isolated Environments for AI Agents

## 메타데이터
- **원문 URL**: https://www.docker.com/products/docker-sandboxes/
- **소스**: Docker (공식)
- **발행일**: 2026-08-10
- **수집일**: 2026-08-10
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [Docker, sandbox, AI-agent, microVM, security, Claude Code, coding-agent]
- **중요도**: ⭐⭐⭐⭐ (1~5)
- **신선도**: fresh

## 핵심 요약
> Docker가 Claude Code, Gemini CLI, Copilot CLI 등 AI 코딩 에이전트를 위한 일회용 격리 샌드박스 환경인 Docker Sandboxes를 출시했다. microVM 기반 격리로 호스트 시스템을 보호하면서 에이전트에게 자율성을 부여한다.

## 번역 (한국어)

Docker는 AI 코딩 에이전트가 안전하게 실행될 수 있는 일회성 격리 환경인 Docker Sandboxes를 출시했다. Claude Code, Gemini CLI, Copilot CLI, Codex, OpenCode, Kiro 등 주요 코딩 에이전트를 지원하며, 각 에이전트는 전용 microVM 내에서 개발 환경과 프로젝트 워크스페이스만 마운트된 상태로 실행된다.

이 솔루션의 핵심 가치는 "YOLO 모드, 안전하게"라는 슬로건에 담겨 있다. 에이전트는 `--dangerously-skip-permissions` 같은 관대한 모드를 사용하더라도 microVM 격리로 인해 호스트 시스템이 보호된다. 에이전트는 패키지 설치, 설정 변경, 심지어 자체적으로 Docker 컨테이너를 실행할 수 있지만, 호스트 파일시스템과 네트워크에는 접근할 수 없다.

Docker AI Governance와 통합하면 조직 전체에 걸쳐 네트워크 정책, 파일시스템 규칙, MCP 거버넌스를 중앙에서 정의하고 일관되게 강제할 수 있다. 현재 macOS와 Windows를 지원하며, Docker Desktop 설치 없이도 독립적으로 동작한다.

## 왜 중요한가?
AI 코딩 에이전트의 자율성과 보안 사이의 근본적인 트레이드오프를 인프라 수준에서 해결한다. Anthropic이 Claude Code의 자동 모드를 기본값으로 설정하는 것과 맞물려, "AI에게 더 많은 권한을 줘도 안전하다"는 생태계의 핵심 인프라로 자리잡을 가능성이 높다.

## 심층 분석

### 기술 의미
microVM 기반 샌드박스는 전통적인 VM보다 가볍고, 컨테이너보다 강력한 격리를 제공한다. 이는 에이전트가 커널 수준에서 호스트와 분리되면서도, 에이전트 내부에서 다시 Docker 컨테이너를 실행할 수 있는 네스팅(nesting) 기능을 지원하는 것이 핵심이다. 파일시스템과 네트워크의 egress를 제어할 수 있으므로, 에이전트가 외부 API를 호출하거나 데이터를 반출하는 것도 정책으로 통제할 수 있다.

### 업계 영향
이는 AI 에이전트 인프라 시장의 첫 번째 주요 플레이어 등장을 의미한다. NanoClaw, Warp 등 에이전트 관련 스타트업들이 이미 Docker Sandboxes를 지원하겠다고 선언했으며, AI 코딩 에이전트가 기업 환경에 도입될 때 필수적인 보안 계층으로 자리잡을 것이다. 특히 조직 단위의 거버넌스(MCP 정책, 네트워크 제어)를 제공한다는 점에서 기업용 AI 에이전트 도입의 가장 큰 장애물인 보안 책임 문제를 해결하는 방향이다.

### 관련 프로젝트
- [Docker Sandboxes 공식 페이지](https://www.docker.com/products/docker-sandboxes/)
- [Docker AI Governance](https://www.docker.com/products/ai-governance/)

### 관련 뉴스
- [Anthropic Claude Code Auto Mode](../records/2026-08-10-anthropic-claude-code-auto-mode-default.md) — Docker Sandboxes와 결합하면 자율성+안전 달성

## 원문 발췌
> "Each agent runs inside a dedicated microVM with your dev environment and only your project workspace mounted in. Agents can install packages, modify configs, and spin up their own Docker containers. Your host stays untouched. No manual review, no permission prompts, no supervision required."
