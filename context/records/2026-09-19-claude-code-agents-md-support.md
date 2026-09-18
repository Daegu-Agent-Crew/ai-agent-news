# Claude Code, CLAUDE.md 없는 프로젝트에서 AGENTS.md를 읽는 기능 추가 — 코딩 에이전트 규약 표준 사실상 수렴

## 메타데이터
- **원문 URL**: https://code.claude.com/docs/en/changelog
- **소스**: Anthropic 공식 Claude Code changelog (v2.1.277, 2026-09-18)
- **발행일**: 2026-09-18
- **수집일**: 2026-09-19
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [claude-code, agents-md, coding-agent, anthropic, project-instructions, 상호운용성]
- **소스 권위**: official
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Anthropic이 Claude Code 2.1.277에서 CLAUDE.md가 없는 프로젝트는 AGENTS.md를 대신 읽도록 하는 지원을 추가했다. 설정의 "Project instructions"에서 동작을 변경할 수 있으며, Bedrock·Vertex·Foundry 환경에는 아직 적용되지 않았다.

## 번역 (한국어)
Anthropic이 코딩 에이전트 CLI인 Claude Code의 2.1.277 버전(9월 18일자 릴리스 노트)에서 AGENTS.md 지원을 정식 추가했다. 이제 프로젝트에 CLAUDE.md가 없으면 Claude Code가 AGENTS.md를 대신 읽어 프로젝트 지침으로 사용한다. `/config`의 "Project instructions" 항목에서 이 동작을 바꿀 수 있으며, Bedrock·Vertex·Foundry 등 엔터프라이즈 배포 채널에는 아직 이 기능이 반영되지 않았다.

AGENTS.md는 여러 벤더의 코딩 에이전트가 공통으로 읽도록 설계된 오픈 규약 파일로, OpenAI Codex를 비롯해 Gemini CLI, Cursor 등 주요 에이전트가 이미 채택하고 있다. Anthropic은 그동안 자체 규격인 CLAUDE.md를 고수해 왔는데, 이번 변경으로 단일 파일 작성만으로 여러 에이전트에 동일한 지침을 전달하는 실무 관행이 Claude Code 생태계까지 확대됐다 (→ 분석).

커뮤니티 반응도 컸다. 이 소식은 같은 날 해커뉴스에 올라와 309포인트, 131개 댓글을 기록하며 그날 주요 토론 주제 중 하나가 됐다. 에이전트별 지침 파일을 따로 유지해야 하는 이중 관리 부담이 줄어든다는 개발자 실무자들의 평가가 눈에 띈다 (→ 분석).

## 왜 중요한가?
AI 에이전트마다 요구하는 설정 파일이 달라 프로젝트마다 CLAUDE.md, AGENTS.md를 이중으로 관리해야 하는 불편이 전 세계 개발팀에 만연했는데, 시장 점유율 상위권인 Claude Code가 AGENTS.md를 읽기 시작하면서 '파일 하나로 모든 에이전트에게 지시한다'는 표준이 현실이 됐다. 이는 개인 개발자부터 대기업 CI 파이프라인까지 에이전트 설정 비용을 직접적으로 낮춘다. 경쟁사의 표준을 자사 도구가 채택했다는 점에서 코딩 에이전트 시장의 경쟁 축이 '락인'에서 '상호운용성'으로 이동하고 있음을 보여주는 신호다.

## 심층 분석

### 기술 의미
에이전트의 프로젝트 이해는 규약 파일에 의존하는데, 벤더별 파일 분기는 도구를 바꿀 때마다 지침 이식 비용을 발생시켰다. Claude Code가 "CLAUDE.md 부재 시 AGENTS.md를 읽는다"는 폴백 방식을 택한 것은 기존 CLAUDE.md 사용자를 깨지 않으면서 표준으로 수렴하는 하위 호환 전략으로 읽힌다. Bedrock·Vertex·Foundry 미지원은 엔터프라이즈 채널의 릴리스 주기가 소비자용 CLI보다 느리다는 관찰이며, 향후 버전에서 동일 기능이 순차 반영될 것으로 보인다 (→ 분석).

### 업계 영향
AGENTS.md 규약의 사실상 표준화가 한 단계 굳어졌다. 규약이 단일해지면 에이전트 스위칭 비용이 줄어들어 도구 경쟁은 모델 품질·가격·하네스 성능 쪽으로 쏠리고, 프로젝트 지침을 다루는 MCP 서버·지식 관리 도구 등 주변 생태계는 오히려 수혜를 본다. 조직 관점에서는 하나의 규약 파일로 Claude Code·Codex·Gemini CLI를 동시에 구동하는 멀티 에이전트 검증(동일 작업 여러 에이전트 교차 실행)이 실무 기본기가 될 수 있다. 본 레포(OpenClaw)의 AGENTS.md 운용 방식과도 직결되는 뉴스다.

### 관련 프로젝트
- [Claude Code changelog](https://code.claude.com/docs/en/changelog) — v2.1.277 릴리스 노트 원문
- [AGENTS.md 규약 사이트](https://agents.md/) — 벤더 중립 프로젝트 규약 표준
- [OpenAI Codex AGENTS.md 문서](https://developers.openai.com/codex/agents-md/) — 최초 대중화 사례

### 관련 뉴스
- [2026-09-12-bytedance-harnessdev-agent-harness-benchmark](../records/2026-09-12-bytedance-harnessdev-agent-harness-benchmark.md) — 에이전트 하네스 비교 연구, 규약 표준화와 같은 상호운용성 흐름
- [2026-08-04-warp-releases-agent-cli-standalone-coding-agent](../records/2026-08-04-warp-releases-agent-cli-standalone-coding-agent.md) — 코딩 에이전트 CLI 경쟁 구도
- [2026-06-28-claude-code-engineer-product-thinker](../records/2026-06-28-claude-code-engineer-product-thinker.md) — Claude Code 활용 사례 배경

## 원문 발췌
> "Added AGENTS.md support: in a project with no CLAUDE.md, Claude Code reads AGENTS.md instead; change it under "Project instructions" in /config (not yet on Bedrock, Vertex or Foundry)"
> (HN 스레드 메타) "Points: 309 / # Comments: 131" — https://news.ycombinator.com/item?id=49760187

## 수집 노트
- **선정 이유**: 공식 체인지로그(official)가 원천이고 HN 309pt·131댓글로 커뮤니티 반응까지 관찰된 오늘의 최대 에이전트 생태계 이슈로, 본 레포의 AGENTS.md 기반 운용 방식과 직결되기 때문이다.
- **제외 후보**: "US 군 AI 환각 정보보고"(CNN, HN 343pt) — AI 일반 신뢰성 이슈로 에이전트 직결성이 상대적으로 낮음 / "Cache-to-Cache LLM 간 통신"(arXiv 2510.03215, HN 55pt) — 2025년 논문의 재부상이라 신규성 낮음
