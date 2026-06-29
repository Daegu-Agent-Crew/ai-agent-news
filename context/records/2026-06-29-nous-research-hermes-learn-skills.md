# Nous Research, Hermes 에이전트에 /learn 추가 — 워크플로를 스킬로 자동 캡처

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/06/24/nous-research-adds-learn-to-hermes-agents-skills-system-capturing-workflows-as-slash-commands-without-hand-writing-skill-md/
- **소스**: MarkTechPost / Nous Research
- **발행일**: 2026-06-24
- **수집일**: 2026-06-29
- **수집자**: 대구루
- **카테고리**: framework
- **태그**: [Nous-Research, Hermes-Agent, skill-learning, self-improving, agent-skills, SKILL.md, agentskills.io]
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Nous Research가 오픈소스 자가개선 에이전트인 Hermes에 /learn 명령을 추가했다. 로컬 디렉토리, 온라인 문서, 과거 대화, 메모 등을 가리키기만 하면 에이전트가 스스로 자료를 수집해 재사용 가능한 SKILL.md를 작성한다. 더 이상 스킬을 손수 작성할 필요가 없다.

## 번역 (한국어)

Nous Research는 Hermes Agent의 스킬 시스템(Skills System)에 /learn이라는 새로운 명령을 추가했다. 이 명령에 문서 페이지, 로컬 SDK, 과거 대화, 또는 메모를 입력하면, 실시간 에이전트가 자체 도구를 사용해 자료를 수집한 뒤 사용자를 대신해 SKILL.md를 작성한다.

스킬은 에이전트가 필요할 때 로드하는 주문형 지식 문서다. 각 스킬은 SKILL.md 파일이 포함된 폴더로 구성되며, 토큰 사용량을 최소화하는 점진적 공개(progressive disclosure) 패턴을 따른다. 이 형식은 agentskills.io 오픈 표준과 호환된다. 모든 스킬은 ~/.hermes/skills/에 저장되며, 설치된 모든 스킬은 자동으로 슬래시 명령이 된다.

/learn의 작동 방식은 단순하다. 사용자가 소스를 설명하면, 에이전트는 read_file과 search_files로 로컬 디렉토리를 읽고, web_extract로 온라인 문서를 가져오며, 방금 수행한 워크플로를 캡처할 수도 있다. 그런 다음 표준 준수 프롬프트를 구성해 일반 턴처럼 에이전트에게 전달한다. 별도의 ingestion 엔진이 없기 때문에 CLI, 메시징 게이트웨이, TUI, 대시보드에서 모두 동일하게 작동한다.

스킬 비용을 낮게 유지하는 비결은 3단계 로딩이다. 레벨 0은 이름과 설명만으로 약 3k 토큰, 레벨 1은 전체 내용, 레벨 2는 특정 참조 파일만 로드한다. 에이전트는 항상 간결한 인덱스만 보고 있으며, 작업에 필요할 때만 전체 내용을 로드한다. 스킬은 skill_manage 도구로 저장되며, write_approval 게이트를 켜면 모든 쓰기가 검토 대기(~/.hermes/pending/skills/)된다.

## 왜 중요한가?
AI 에이전트가 반복적인 작업 패턴을 스스로 학습하고 재사용 가능한 지식으로 변환하는 것은 "자가개선(self-improving)" 에이전트의 핵심 능력이다. /learn은 비개발자도 복잡한 설정 없이 에이전트에게 새로운 능력을 가르칠 수 있게 만들어, AI 에이전트의 활용 범위를 크게 넓힌다.

## 심층 분석

### 기술 의미
/learn의 가장 주목할 만한 기술적 특징은 "별도의 ingestion 엔진이 없다"는 점이다. 에이전트가 이미 가지고 있는 도구(read_file, search_files, web_extract, skill_manage)를 조합해 스킬 작성을 수행한다. 이는 아키텍처 복잡도를 크게 낮추면서도 모든 플랫폼(CLI, TUI, 대시보드)에서 일관된 동작을 보장한다. 또한 agentskills.io 오픈 표준을 준수함으로써, 다른 에이전트 프레임워크와의 스킬 공유가 가능하다. 점진적 공개를 통한 3단계 로딩은 스킬 라이브러리가 커져도 컨텍스트 윈도우 오염을 방지하는 세련된 설계다.

### 업계 영향
AI 에이전트 생태계에서 "에이전트가 스스로 배우는가?"는 핵심 경쟁 축이다. Claude의 Skills Workshop, OpenAI의 Codex, 그리고 이제 Hermes의 /learn까지 — 에이전트 자가학습은 2026년의 주요 트렌드가 되고 있다. Nous Research는 오픈소스 진영에서 이를 가장 실용적인 수준으로 구현했다. 특히 과거 대화에서 워크플로를 캡처하는 기능은 조직 내 절차적 지식(procedural knowledge)을 자산화하는 강력한 수단이 된다. Hermes Agent는 CLI뿐 아니라 메시징 게이트웨이에서도 작동하므로, 비개발 사용자도 쉽게 접근할 수 있다.

### 관련 프로젝트
- [Hermes Agent 스킬 시스템 문서](https://hermes-agent.nousresearch.com/docs/user-guide/features/skills)
- [/learn 명령 가이드](https://hermes-agent.nousresearch.com/docs/user-guide/features/skills#learning-a-skill-from-sources-learn)
- [Hermes Agent GitHub](https://github.com/NousResearch/hermes-agent)
- [agentskills.io 표준](https://agentskills.io/specification)

### 관련 뉴스
- [Xiaomi HarnessX — 하네스를 스스로 재작성하는 프레임워크](../records/2026-06-25-xiaomi-harnessx-self-rewriting.md) — 에이전트 자가 개선의 또 다른 접근
- [MRAgent — 에이전트 메모리 토큰 27배 절감](../records/2026-06-27-mragent-memory-framework.md) — 에이전트 효율성 최적화
- [Mindstone Rebel — 로컬 에이전트 OS](../records/2026-06-26-mindstone-rebel-local-agent-os.md) — 모델 교환형 로컬 에이전트

## 원문 발췌
> /learn removes the hand-writing step. You describe a source, and the agent does the sourcing with tools it already has. It reads local directories with read_file and search_files. It fetches online docs with web_extract. There is no separate ingestion engine. /learn builds a standards-guided prompt and hands it to the agent as a normal turn.
