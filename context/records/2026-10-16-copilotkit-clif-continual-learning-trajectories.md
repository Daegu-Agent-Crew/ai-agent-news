# CopilotKit, 'CLiF' 얼리 액세스 — 에이전트 트레이스와 사용자 행동을 한 타임라인으로 묶어 스킬·평가·학습 데이터로 변환

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/10/15/copilotkit-releases-clif-a-continual-learning-platform-that-turns-agent-traces-and-user-actions-into-skills-evals-and-fine-tuning-data/
- **소스**: MarkTechPost
- **발행일**: 2026-10-15
- **수집일**: 2026-10-16
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [copilotkit, clif, ag-ui, continual-learning, agent-observability, skills, evals, self-hosted]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 1개(0) + 반응 규모 미확인(0) = 2
- **신선도**: fresh

## 핵심 요약
> MarkTechPost 보도에 따르면 CopilotKit이 에이전트의 실행 기록과 제품 내 사용자 행동을 AG-UI 프로토콜로 한 타임라인에 캡처하는 지속 학습 플랫폼 CLiF를 얼리 액세스로 출시했다. CLiF는 이를 스킬, 운영 기반 평가, 파인튜닝 데이터셋으로 변환하며, 모든 스킬은 사람이 검토한다.

## 번역 (한국어)
MarkTechPost는 에이전트를 대규모로 운영하는 팀들이 같은 문제에 부딪힌다고 짚는다. 최상위 모델 위에 만든 에이전트도 특정 제품 안의 복잡한 작업을 배포 가능한 수준으로 일관되게 수행하지 못해, 팀들은 수백~수천 개의 평가 케이스를 손으로 쓰고 프롬프트·하네스를 조금씩 고친다. 반면 제품 사용자들은 같은 작업을 매일 수행하며 올바른 순서를 이미 알고 있다.

오픈소스 CopilotKit 프레임워크(GitHub 별 3.8만 개 이상)와 AG-UI 프로토콜을 만든 CopilotKit은 "풀스택 트래젝토리"로부터 지속 학습하는 플랫폼 CLiF를 얼리 액세스로 공개했다. 풀스택 트래젝토리는 에이전트의 실행·도구 호출·상태 변화(에이전트 트레이스)와 사용자의 화면·클릭·서버 요청(제품 트래젝토리)을 한 스트림으로 묶은 것이다.

CopilotKit이 설명하는 학습 루프는 4단계다. ① 캡처: 세션을 청구 지원·온보딩 같은 '학습 컨테이너'별로 분류한다. ② 패턴 발견: 반복 요청, 반복 수정, 사용자가 조용히 우회하는 마찰을 인사이트로 뽑고 근거 이벤트를 인용한다. ③ 검토: 재사용 가능한 교훈은 SKILL.md 파일로 제안되며, 분석 서비스는 스스로 게시할 수 없고 사람이 승인·거절한다. ④ 전달·내보내기: 게시된 스킬은 재배포 없이 에이전트에 반영되며, 다른 에이전트나 MCP 서버용으로 파일 다운로드도 가능하다.

MarkTechPost는 CLiF가 평가 작성, 컨텍스트 비대화, 비용, 파편화된 스택, 섀도 AI 사용 같은 문제를 겨냥하며 완전 자체 호스팅으로 동작한다고 전했다.

## 왜 중요한가?
AI 에이전트를 가르치는 가장 좋은 교재는 "실제 사람이 그 일을 어떻게 하는가"인데, 지금까지는 이 기록이 따로 흩어져 있었습니다. 사람의 작업 방식을 자동으로 에이전트 스킬로 바꾸되 사람이 최종 승인하는 구조라, 기업이 에이전트를 안전하게 개선하는 방법을 보여줍니다.

## 심층 분석

### 기술 의미
에이전트 관측(트레이싱)과 제품 분석(클릭·퍼널)을 같은 프로토콜 위에서 합친 것은, "에이전트가 어디서 틀렸나"와 "정답 경로는 무엇인가"를 한 데이터셋으로 만든다는 점에서 의미가 있다(→ 분석). 산출물이 SKILL.md라는 범용 포맷이라 특정 프레임워크 종속을 줄인다(→ 분석). 다만 성능 개선 효과에 대한 정량 수치는 기사에 제시되지 않았다.

### 업계 영향
스킬 파일이 사실상 에이전트 지식의 공통 단위로 자리 잡는 흐름에 '자동 생성 + 인간 승인' 공급원이 추가된다(→ 분석). 사용자 화면·클릭 캡처는 개인정보·동의 문제를 수반하므로 자체 호스팅 옵션이 기업 도입의 관건이 될 것이다(→ 분석). 기사 구성(TL;DR·제품 설명 중심)은 업체 제공 자료 성격이 강해 독립 검증이 필요하다(→ 분석).

### 관련 프로젝트
- CopilotKit (github.com/CopilotKit/CopilotKit)
- AG-UI 프로토콜 (github.com/ag-ui-protocol/ag-ui)
- CopilotKit Intelligence

### 관련 뉴스
- [Air, AI 에이전트 스킬 검증 $50M 투자](../records/2026-09-02-air-raises-50m-vet-ai-agent-skills.md) — 에이전트 스킬 생태계 관련
- [하네스 vs 프레임워크 vs MCP](../records/2026-09-15-agent-harness-vs-framework-vs-mcp.md) — 에이전트 스택 구성 요소 정리

## 원문 발췌
> "CopilotKit, the company behind the open-source CopilotKit framework and the AG-UI protocol, released CLiF, a platform for continual learning from full-stack trajectories, in early access."
> "CLiF securely captures what the agent does and what users do in the product, and turns that record into skills, production-based evals, and fine-tuning datasets, all exportable along with the raw trajectories."
> "The analysis service cannot publish anything on its own: a person approves or rejects each proposal, either in the Intelligence UI or through the CopilotKit CLI."

## 수집 노트
- **선정 이유**: 에이전트 학습 루프(트레이스→스킬)라는 프레임워크 레벨 주제로 오늘 tool 후보 중 에이전트 관련성이 가장 높아 선정. 단일 소스이며 업체 설명 기반임을 명시.
- **제외 후보**: TypeSafe AI Jev 1.14(MarkTechPost) — 마이너 버전 업데이트. Datalab OmniParseBench — OCR 벤치마크로 에이전트 관련성 낮음.
