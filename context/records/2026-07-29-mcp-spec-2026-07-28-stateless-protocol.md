# MCP 2026-07-28 스펙: 무상태 프로토콜 코어 전환

## 메타데이터
- **원문 URL**: https://blog.modelcontextprotocol.io/posts/2026-07-28/
- **소스**: MCP Official Blog
- **발행일**: 2026-07-28
- **수집일**: 2026-07-29
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [mcp, specification, stateless, protocol, model-context-protocol]
- **중요도**: ⭐⭐⭐⭐⭐ (1~5)
- **신선도**: fresh

## 핵심 요약
> MCP(Model Context Protocol)가 2026-07-28 버전의 스펙을 발표했다. 가장 큰 변화는 양방향 상태 유지 프로토콜에서 요청/응답 무상태 프로토콜로의 전환으로, 로드 밸런서 뒤의 어떤 인스턴스에도 요청이 라우팅될 수 있게 되었다.

## 번역 (한국어)
MCP 프로토콜이 가장 큰 아키텍처 변화를 맞이했다. **무상태 프로토콜 코어**로의 전환이 핵심이다. 기존의 `initialize/initialized` 핸드셰이크와 `Mcp-Session-Id` 헤더가 공식적으로 제거되었다. 모든 요청이 자체 설명적(self-describing)이 되며, 프로토콜 버전, 클라이언트 ID, 클라이언트 기능 정보를 `_meta` 필드에 포함한다. 이제 일반 라운드 로빈 로드 밸런서 뒤의 어떤 서버 인스턴스에도 요청이 무작위로 라우팅될 수 있다.

**MRTR(Multi Round-Trip Requests)**이 서버 주도 요청(sampling, elicitation 등)을 대체한다. 서버가 사용자 입력이 필요할 때 `resultType: "input_required"`를 반환하고, 클라이언트가 답변을 첨부하여 원래 호출을 재시도하는 방식이다. 상태 유지 스트림이 필요 없어져 확장성이 크게 향상되었다.

보안 측면에서 RFC 9207 발급자 검증이 도입되었고, Dynamic Client Registration(DCR)이 Client ID Metadata Documents(CIMD)로 대체되었다. 리스트 응답에 캐시 힌트(`ttlMs`, `cacheScope`)가 추가되어 클라이언트 캐싱 전략이 개선되었다. Tasks는 실험적 코어에서 `io.modelcontextprotocol/tasks` 확장으로 이동했다. 12개월 최소 지원 기간의 정식 지원 중단 정책도 수립되었다.

## 왜 중요한가?
MCP는 AI 에이전트가 외부 도구와 시스템에 연결하는 사실상의 표준 프로토콜이 되었다. 월간 5억 다운로드를 기록하는 가운데, 무상태 전환은 엔터프라이즈급 확장성을 위한 필수적인 아키텍처 개선이다. 이번 변화로 MCP 서버를 쿠버네티스 등 컨테이너 환경에서 더 쉽게 배포하고 확장할 수 있게 되어, AI 에이전트 생태계의 성장을 한 단계 더 가속할 것이다.

## 심층 분석

### 기술 의미
MCP의 무상태 전환은 프로토콜 설계에서 근본적인 패러다임 변화다. 상태 유지 연결에 대한 의존도를 제거함으로써, 서버는 순수한 HTTP 요청/응답으로 동작할 수 있게 되었다. `Mcp-Method`와 `Mcp-Name` HTTP 헤더를 통해 게이트웨이가 JSON 본문 파싱 없이 라우팅 및 인가를 수행할 수 있어, API 게이트웨이 및 WAF 통합이 크게 단순화되었다. MRTR은 상태 유지 스트림 없이도 사용자와의 대화형 상호작용을 가능하게 하는 우아한 설계 패턴이다.

### 업계 영향
무상태 설계는 클라우드 네이티브 환경에서 MCP 서버 배포를 극적으로 쉽게 만든다. Kubernetes, 서버리스, CDN 엣지 등 상태 비저장 아키텍처에서 원활히 동작하므로, 기업이 MCP 기반 도구 서버를 프로덕션에 배포하는 실질적 장벽이 낮아진다. 보안 강화(RFC 9207, CIMD 전환)는 엔터프라이즈 도입을 위한 신뢰 기반을 구축한다. 12개월 지원 중단 정책은 안정적인 업그레이드 계획을 가능하게 하여, 기업이 MCP를 장기 인프라로 채택할 수 있는 확신을 제공한다. TypeScript, Python, Go, C# SDK가 동시 업데이트된 점도 생태계의 성숙도를 보여준다.

### 관련 프로젝트
- [MCP GitHub 저장소](https://github.com/modelcontextprotocol/modelcontextprotocol)
- [TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [Python SDK](https://github.com/modelcontextprotocol/python-sdk)

### 관련 뉴스
- [Gemini Managed Agents 3.6 Flash 및 Hooks 업데이트](./2026-07-29-gemini-managed-agents-3-6-flash-hooks.md) — Google의 에이전트 플랫폼이 MCP와 함께 에이전트 생태계를 확장

## 원문 발췌
> "The highlight of this release is a stateless protocol core - MCP is transforming from a bidirectional stateful protocol into a request/response stateless protocol. It was one of the most highly-requested features from developers who were eager to get better reliability and scalability for their MCP servers."
