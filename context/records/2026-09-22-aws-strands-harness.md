# AWS, 에이전트 하네스스 "Strands Harness" 공개 — 동일 정확도에서 토큰 비용 28% 절감

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/09/21/aws-strands-agents-team-releases-strands-harness/
- **소스**: MarkTechPost
- **발행일**: 2026-09-21
- **수집일**: 2026-09-22
- **수집자**: 레노버
- **카테고리**: framework
- **태그**: [aws, strands, agent-harness, open-source, benchmark, cost]
- **소스 권위**: major-media
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> AWS Strands Agents 팀이 범용 오픈소스 에이전트 하네스 "Strands harness"를 공개했다. Apache 2.0 라이선스로 Python·TypeScript용으로 제공되며, 동일한 Claude·GPT 모델을 6개 벤치마크에서 실행했을 때 다른 하네스 대비 약 28% 낮은 비용으로 비슷한 정확도를 낸다고 팀이 보고했다.

## 번역 (한국어)

AWS의 Strands Agents 팀이 "Strands harness"라는 완성형 범용 에이전트 하네스를 공개했다. 많은 개발자가 Claude Code나 Codex 안에서는 잘 동작하던 에이전트 아이디어를 자체 루프로 다시 만들면 성능이 무너지는 경험을 하는데, 이 팀은 바로 그 간극을 겨냥했다. Strands harness는 로컬에서 실행하거나 클라우드에 배포할 수 있고, Python과 TypeScript용으로 Apache 2.0 라이선스로 제공되며 한 줄의 코드로 시작할 수 있다. 팀의 보고에 따르면 동일한 Claude·GPT 모델을 6개 벤치마크에서 실행해 다른 하네스 대비 28% 낮은 비용으로 근접한 정확도를 기록했다.

하네스(harness)란 모델을 둘러싼 시스템, 즉 루프·도구·컨텍스트 처리·메모리·복구를 의미한다. Strands는 이미 Strands Harness SDK를 통해 이런 빌딩 블록을 노출해 왔고, 이번 하네스는 그것들을 기본 동작값이 있는 완성품으로 묶은 것이다. 코딩 전용이 아니라 범용 에이전트로 설계됐다. 기본 제공되는 `create_harness()`는 최신 추론 모델을 Amazon Bedrock, Anthropic, OpenAI, Google, Ollama, LiteLLM 경유로 구동하고, 셸·파일(읽기/쓰기/편집)·웹 도구를 기본 탑재한다.

또한 부피가 큰 도구 결과물을 파일로 오프로드하고 요청의 재사용 부분을 캐싱하며, 실행 간 장기 기억을 유지하고 세션 ID로 대화를 재개할 수 있다. 열린 하위 과제는 내장 헬퍼 에이전트에 위임하고, 체크리스트로 다단계 작업을 추적하며, Agent Skills를 발견하면 불러온다. 배포 측면에서는 번들된 스킬 파일이 코딩 에이전트가 AWS·GCP·Azure·Cloudflare·Modal용 배포 설정을 생성하도록 돕는다.

벤치마크는 Terminal-Bench 제작진의 평가 프레임워크 Harbor를 이용해 Amazon EC2에서 분산 실행됐고, ALFWorld·ContextBench·GAIA·WebShop·τ²-bench·Terminal-Bench 2.1의 6개 평균이다. 차트에서 최고 점수는 Strands harness 위의 Claude Opus 5(약 85%)였다. 동일 모델(Claude Fable 5)로 Terminal-Bench 2.1에서 하네스 5종을 비교한 결과, Strands harness는 $56.29에 69.7점, oh-my-pi는 $86.83에 69.7점, OpenCode는 $73.42에 66.3점, Claude Code는 $248.05에 61.8점, DeepSeek Harness는 $40.30에 59.5점이었다. Claude Code 대비 Strands는 비용 77% 절감, 7.9점 높은 정확도였다.

## 왜 중요한가?

에이전트를 실제로 운영할 때 모델값 다음으로 큰 비용이 "모델을 감싸는 시스템"의 비효율인데, AWS가 정확도를 유지하면서 그 비용을 28% 줄이는 하네스를 오픈소스로 내놓은 것입니다. 이는 Claude Code·Codex 같은 상용 코딩 에이전트와 오픈소스 하네스 간의 가격·성능 경쟁이 본격화했음을 보여주며, 기업이 에이전트를 직접 구축할 때의 진입 장벽을 크게 낮춥니다.

## 심층 분석

### 기술 의미
하네스 계층(루프·도구·컨텍스트·메모리·복구)이 모델 자체와 분리된 측정 가능한 경쟁 축으로 자리잡았다는 점이 핵심이다. 동일 모델·동일 벤치마크에서 하네스만 바꿨을 때 정확도가 59.5~69.7점으로 벌어지고 비용은 $40~248로 6배 이상 차이난다는 수치는, "어떤 모델을 쓰느냐"만큼 "모델을 어떻게 감싸느냐"가 결과를 좌우함을 정량적으로 보여준다. 툴 결과의 파일 오프로드와 요청 캐싱, KV 재사용 같은 컨텍스트 엔지니어링이 비용 우위의 실질 원천으로 드러난다(→ 분석).

### 업계 영향
AWS가 자사 모델이 아닌 Claude·GPT 위에서도 동작하는 중립 하네스를 내놓은 것은 Bedrock·Q Developer 중심의 AWS 에이전트 전략이 "하네스 플랫폼"으로 확장되고 있음을 시사한다. Claude Code가 같은 과제를 4배 이상 비싸게 처리한다는 비교표가 공개적으로 돌아가는 상황은 Anthropic에 가격·효율 압박으로 작용할 것이다. 또한 oh-my-pi·OpenCode·DeepSeek Harness 같은 오픈소스 하네스가 상용급 정확도에 도달했다는 점은 에이전트 개발의 기본값이 상용 제품에서 오픈소스로 이동할 수 있는 무대를 만든다(→ 분석).

### 관련 프로젝트
- Strands harness 공식 발표: https://strandsagents.com/blog/introducing-strands-harness/
- Harness SDK: https://github.com/strands-agents/harness-sdk
- 평가 프레임워크 Harbor: https://github.com/laude-institute/harbor

### 관련 뉴스
- [OpenAI, 관리형 Codex 하네스를 갖춘 Agents API 공개](../records/2026-09-11-openai-agents-api-managed-codex-harness.md) — 하네스를 매니지드 서비스로 파는 OpenAI의 대응 축
- [바이트댄스 HarnessDev, 에이전트 하네스 벤치마크](../records/2026-09-12-bytedance-harnessdev-agent-harness-benchmark.md) — 하네스 성능을 측정 대상으로 삼은 선행 사례
- [에이전트 하네스 vs 프레임워크 vs MCP](../records/2026-09-15-agent-harness-vs-framework-vs-mcp.md) — 하네스 개념 정리

## 원문 발췌
> "The Strands Agents team at AWS is targeting that gap with Strands harness, a fully assembled, general-purpose agent harness. It runs locally or deploys to a cloud provider, ships for Python and TypeScript under Apache 2.0, and starts with one line of code. The team reports 28% lower cost than other harnesses running the same Claude or GPT models across 6 benchmarks, with near-equal accuracy."
> "Against Claude Code, Strands harness cost 77% less and scored 7.9 points higher. Oh-my-pi matched its 69.7 accuracy at 54% higher cost. DeepSeek Harness was cheaper still, but trailed by 10.2 points."

## 수집 노트
- **중요도 산정**: major-media(1) + 교차 확인 2(1) + 반응 규모 큼 — MarkTechPost 편집자 추천·AWS 공식 발표·하네스 경쟁 조명(1.5) = 3.5 → ⭐⭐⭐⭐
- **선정 이유**: AWS 공식 발표를 주요 언론이 상세 수치와 함께 보도해 하네스 계층의 비용·정확도 경쟁이라는 에이전트 생태계 핵심 흐름을 기록할 수 있고, 하네스 주제의 기존 아카이브(하네스 벤치마크·비교)와 직접 연결되므로 선정했다.
- **제외 후보**: TechCrunch Disrupt 2026 티켓 할인 안내 — 광고성 공지라 제외. "Transformers Explained Visually" — 2024년 이전 공개된 교육 자료의 커뮤니티 재부상으로 신규성 없음. "Frontier AI on Your Own Hardware (DLab)" — 오픈소스 주간 안내 글로 후속 확인 필요, 금주 5건에서 우선순위 밀림.
- **교차 확인 근거**: MarkTechPost 보도(1) + AWS Strands 공식 블로그 발표(2). 벤치마크 수치는 팀 자체 보고이며 독립 검증은 아직 없음(→ 분석).
