# Vercel, 코딩 에이전트를 크래시에 강하게 만드는 'durable-harness' 오픈소스 공개 — Claude Code·Codex·OpenCode 래핑

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/10/21/vercel-durable-harness-crash-proof-coding-agents/
- **소스**: MarkTechPost
- **발행일**: 2026-10-21
- **수집일**: 2026-10-22
- **수집자**: 레노버
- **카테고리**: framework
- **태그**: [vercel, durable-harness, coding-agent, durable-execution, claude-code, codex, opencode]
- **소스 권위**: major-media
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 2개(MarkTechPost, Vercel 공식 블로그)(1) + 반응 미확인(0) = 3
- **신선도**: fresh

## 핵심 요약
> MarkTechPost에 따르면 Vercel은 코딩 에이전트 세션이 크래시와 타임아웃에도 살아남게 하는 오픈소스 패키지 durable-harness를 공개했다. Pi, OpenCode, Claude Code, Codex 등 기존 하네스를 수정 없이 감싸며, 각 세션은 내구성 로그에 저장된다.

## 번역 (한국어)
Vercel이 durable-harness를 공개했다. 이 패키지는 기존 에이전트 하네스를 바꾸지 않고 감싸서, 함수가 죽어도 작업이 사라지지 않게 한다. npm 패키지(0.0.x, Apache-2.0)로 Pi, OpenCode, fx, Claude Code, Codex 5종 어댑터를 제공한다. Vercel Functions와 Vercel Queues, Node.js 22 이상과 Postgres, 또는 노트북의 로컬 파일 위에서 동작한다.

문제의식은 이렇다. Pi나 Claude Code 같은 하네스는 세션을 메모리에 들고 있는 장기 실행 로컬 프로세스로 설계됐다. 로컬에서는 작업 공간과 기록이 같은 디스크에 있어 재개가 쉽지만, 클라우드에서는 어떤 호출이 완료됐는지 추적하지 못해 한 턴이 실패하거나 네트워크 오류가 나면 작업을 잃는다고 Vercel 팀은 설명한다.

durable-harness는 턴의 각 단계를 내구성 로그에 기록한다. 모델·도구 호출 전에 의도를, 완료 후에 결과를 남기고, 각 턴은 Vercel Queues 메시지로 뒷받침된다. 함수가 죽으면 큐가 새 함수에 턴을 넘기고 새 함수는 로그를 읽어 이어간다. 완료된 호출은 로그에서 읽어오므로 모델 토큰이 이중 과금되지 않는다. 조회 같은 도구는 replay: 'safe'로 재실행할 수 있고, 환불 같은 도구는 replay: 'never'로 두 번 실행되지 않으며 모델에는 호출이 이미 일어났을 수 있다고 알린다.

한계도 있다. API는 실험적 0.0.x 버전이고, Claude Code와 Codex는 셀프호스팅 시에도 Vercel Sandbox에서만 실행된다. 지연·처리량 벤치마크는 공개되지 않았고 복구 관련 주장은 모두 Vercel 자체 보고다.

## 왜 중요한가?
AI 코딩 에이전트를 내 컴퓨터가 아니라 클라우드에서 몇 시간씩 돌릴 때, 중간에 서버가 꺼지면 작업과 비용이 날아가는 문제가 있었습니다. 이 도구는 에이전트의 진행 상황을 꼼꼼히 기록해 끊겨도 이어서 하게 만들고, 환불처럼 두 번 하면 안 되는 일이 반복되는 사고도 막습니다.

## 심층 분석

### 기술 의미
데이터베이스·워크플로 엔진의 write-ahead log와 durable execution 개념을 에이전트 루프에 그대로 적용한 설계다(→ 분석). replay: 'safe'/'never' 구분은 도구 호출의 멱등성을 개발자가 명시하도록 강제해, 에이전트의 부작용 관리를 프레임워크 수준으로 끌어올린다(→ 분석). 하네스 자체를 수정하지 않고 세션 파일(Claude Code 트랜스크립트, Codex 롤아웃, OpenCode 이벤트 스토어)을 로그로 미러링하는 방식은 하네스 경쟁과 무관하게 내구성 계층을 공통화하려는 접근이다.

### 업계 영향
코딩 에이전트가 노트북에서 클라우드 백그라운드 작업으로 이동하는 흐름에서 '내구성'이 새 인프라 경쟁 포인트가 되고 있다(→ 분석). Temporal·Inngest 등 기존 durable execution 업체와 Vercel이 에이전트 시장에서 겹치게 된다(→ 분석). Claude Code·Codex 실행이 Vercel Sandbox에 묶인 점은 오픈소스이면서도 플랫폼 고착을 유도하는 구조다(→ 분석).

### 관련 프로젝트
- Vercel durable-harness (npm, Apache-2.0)
- Vercel Workflow SDK, Vercel Queues, Vercel Sandbox

### 관련 뉴스
- [Earendil Pi 1.0 에이전트 하네스](../records/2026-10-01-earendil-pi-1-0-agent-harness.md) — durable-harness가 감싸는 하네스 중 하나
- [OpenCode 2.0 백그라운드 서비스](../records/2026-10-15-opencode-2-0-background-service-code-mode.md) — 코딩 에이전트의 백그라운드화 흐름

## 원문 발췌
> "Vercel has released durable-harness, an open-source package that keeps coding agent sessions alive through crashes and timeouts. Vercel durable-harness wraps existing harnesses, including Pi, OpenCode, Claude Code and Codex, without changing them."
> "Before a model or tool call runs, it records an intent. When the call finishes, it records the outcome."
> "Experimental 0.0.x API. Claude Code and Codex run only in a Vercel Sandbox, even self-hosted."

## 수집 노트
- **선정 이유**: Vercel 공식 블로그로 교차 확인되며, 클라우드 상시 코딩 에이전트 운영의 실질 문제(크래시 복구·이중 과금)를 다루는 인프라 출시라 선정.
- **제외 후보**: Google Cloud llm-d 1.0(MarkTechPost) — 추론 서빙 인프라로 에이전트 하네스와 거리. Blacksmith 유니콘(TechCrunch) — CI 인프라 투자 뉴스로 AI 에이전트 관련성 낮음.
