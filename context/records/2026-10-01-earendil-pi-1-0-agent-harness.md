# Earendil, 미니멀 에이전트 하네스 'Pi 1.0' 정식 출시 — 장기 실행용 'Pi Durable'도 실험 공개

## 메타데이터
- **원문 URL**: https://earendil.com/posts/pi-1-0/
- **소스**: Earendil (공식 블로그)
- **발행일**: 2026-10-01
- **수집일**: 2026-10-02
- **수집자**: 레노버
- **카테고리**: framework
- **태그**: [earendil, pi, agent-harness, coding-agent, mcp, codemode, open-source]
- **소스 권위**: official
- **교차 확인**: 1
- **중요도**: ⭐⭐⭐
- **신선도**: fresh
- **중요도 산정**: 기본 1 + official 2 + 교차 확인 1개(0) + 반응 규모 HN 50pt+ 수준(100pt 미확인, 0) = 3

## 핵심 요약
> Earendil은 "단단하고 미니멀하며 확장 가능한 에이전트 하네스" Pi 1.0을 정식 출시했으며, Codemode(MCP 및 Jev 같은 비LLM 모델 기본 지원)·지연 도구 로딩 등을 추가했다. 장기 실행 에이전트 애플리케이션용 실험 패키지 Pi Durable도 함께 공개했으며, 둘 다 MIT 라이선스다.

## 번역 (한국어)
Earendil은 공식 발표에서 Pi 1.0을 "자기 것으로 만들 수 있는, 단단하고 미니멀하며 확장 가능한 에이전트 하네스"라고 소개했다. 회사에 따르면 전 세계 수십만 명이 매주 Pi를 쓰고 있으며, 수개월간 이슈와 풀 리퀘스트 피드백을 반영해 사람과 기업이 의존할 수 있는 안정적인 소프트웨어로 다듬었다.

Earendil은 Pi가 미니멀함으로 알려져 있으며 그 선을 지키겠다고 강조했다. 에이전트 도구는 매주 바뀌지만 많은 변화가 오래가지 않기 때문에, 검증된 기능만 그 실제 효용과 추가되는 복잡도를 따져 채택한다는 설명이다. Pi 1.0에 추가된 기능은 Codemode(MCP와 Jev·이미지 모델 같은 비LLM 모델 기본 지원), 가상 모델 확장 지원, 지연 도구 로딩, Anthropic 모델용 캐시 워밍, 대화 중 시스템 메시지, 새 TUI 테마, 기본 전체 화면 모드다.

회사는 Pi의 일부가 많은 사람이 원하는 사용 방식과 맞지 않는다는 점도 알게 됐다고 밝혔다. 코딩 에이전트와 터미널 바깥에서도 Pi의 미니멀함을 쓰려면 여러 화면에서 접근할 수 있고 더 긴 대화와 작업을 지원해야 한다는 것이다. 이를 위해 Pi 자체를 바꾸는 대신, 장기 실행 에이전트 애플리케이션을 만드는 새 기반인 실험 패키지 Pi Durable을 따로 내놓았다.

발표에 실린 데모에서는 Pi가 스스로 확장을 작성해, 계획은 Claude Opus가 하고 구현은 GPT가 하며 전환 시점은 Jev가 판단하는 '가상 모델'을 만들었다. Pi 1.0과 Pi Durable은 모두 MIT 라이선스이며 코드는 github.com/earendil-works/pi에 공개돼 있다.

## 왜 중요한가?
AI 코딩 도우미 도구들은 기능을 계속 덧붙이며 점점 복잡해지는데, Pi는 "검증된 것만 넣는다"는 원칙으로 매주 수십만 명이 쓰는 도구가 됐습니다. 이번 1.0 정식판은 여러 회사의 AI를 상황에 따라 섞어 쓰는 방식을 누구나 직접 만들 수 있게 해, 특정 AI 회사에 묶이지 않는 에이전트 사용법을 보여줍니다.

## 심층 분석

### 기술 의미
Codemode가 MCP뿐 아니라 Jev 같은 비LLM 결정 모델을 1급 구성요소로 지원한다는 점은, 에이전트 하네스가 '여러 종류의 모델을 조합하는 오케스트레이터'로 진화하고 있음을 보여준다. (→ 분석) 데모의 '계획은 Opus, 구현은 GPT, 전환 판단은 Jev' 구성은 비싼 모델과 싼 판정 모델을 역할별로 나누는 설계의 구체적 사례다. 지연 도구 로딩과 캐시 워밍은 긴 세션의 토큰 비용을 줄이는 실용 최적화다.

### 업계 영향
Earendil이 밝힌 주간 수십만 명 사용자 규모는 대형 랩의 공식 코딩 에이전트 외에 오픈소스 미니멀 하네스 수요가 크다는 신호다(회사 주장). (→ 분석) 같은 날 HN에는 Figma가 MCP 접근을 화이트리스트 클라이언트로 제한하며 Pi를 제외했다는 게시물도 올라와, 오픈 하네스와 플랫폼 사업자 간 접근 권한 갈등이 드러났다. Pi Durable은 장기 실행 에이전트 기반 경쟁(Restate 등 내구성 실행 진영)에 오픈소스 하네스 측이 진입하는 움직임이다.

### 관련 프로젝트
- [Pi — pi.dev](https://pi.dev)
- [earendil-works/pi (GitHub)](https://github.com/earendil-works/pi)

### 관련 뉴스
- [Restate, 에이전트용 내구성 실행에 $20M 유치](2026-09-30-restate-20m-durable-execution-agents.md) — 장기 실행 에이전트 기반 경쟁
- [OpenAI Agents API·관리형 Codex 하네스](2026-09-11-openai-agents-api-managed-codex-harness.md) — 대형 랩의 하네스 접근

## 원문 발췌
> "Today we are proudly shipping Pi 1.0: a hardened, minimal, extensible agent harness that you can make your own. Hundreds of thousands of people around the world use Pi every week."
> "Codemode (native support for MCP, and non-LLM models like Jev and image models)"
> "Pi Durable is a new substrate for building long-running agentic applications"
> "Both are MIT licensed."

## 수집 노트
- **선정 이유**: 공식 발표(official)로 HN에 Pi 1.0·Pi Durable 두 글이 동시에 올라 50pt 이상 반응을 얻은 오픈소스 에이전트 하네스 정식 출시 건.
- **제외 후보**: "Figma restricts MCP access to whitelisted clients, excluding Pi(HN/X)" — 단일 X 게시물 기반이라 별도 레코드 대신 이 레코드 업계 영향에 맥락으로만 언급. "Photon raises $4.5M to replace mobile apps with agents(TechCrunch)" — 소규모 시드 투자로 아카이브 우선순위 낮음.
