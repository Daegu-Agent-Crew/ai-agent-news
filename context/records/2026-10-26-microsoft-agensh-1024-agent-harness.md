# Microsoft Research, 오케스트레이터 없는 멀티에이전트 하네스 'Agensh' 오픈소스화 — 최대 1,024개 에이전트 협업

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/10/24/microsoft-agensh-multi-agent-harness-1024-agents/
- **소스**: MarkTechPost
- **발행일**: 2026-10-24
- **수집일**: 2026-10-26
- **수집자**: 레노버
- **카테고리**: framework
- **태그**: [microsoft-research, multi-agent, harness, coding-agents, programbench, open-source]
- **소스 권위**: major-media
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐
- **중요도 산정**: 기본 1 + major-media(MarkTechPost)(1) + 교차 확인 2개(MarkTechPost, microsoft/Agensh 공식 GitHub README)(1) + 반응 미확인(0) = 3
- **신선도**: fresh

## 핵심 요약
> MarkTechPost에 따르면 Microsoft Research는 중앙 오케스트레이터 없이 각 워커가 스스로 하위 작업을 선점·공유·병합하는 코딩 에이전트용 분산 하네스 Agensh를 오픈소스로 공개했으며, ProgramBench에서 1개에서 1,024개 에이전트까지 규모를 늘려 실험했다.

## 번역 (한국어)
Microsoft Research가 대규모 코딩 에이전트 팀을 위한 분산형 하네스 Agensh를 MIT 라이선스로 공개했다. 대부분의 에이전트 프레임워크가 의존하는 중앙 오케스트레이터를 없애고, 모든 워커가 직접 하위 작업을 고르고 발견 내용을 공유하며 공통 Git 저장소에 코드를 병합한다. 연구진은 논문에서 Claude Code 에이전트 팀, Codex 서브에이전트, Copilot fleet, Kimi Agent Swarm을 오케스트레이터-워커 구조의 예로 들었다.

각 워커는 같은 5단계 루프를 비동기로 반복한다: 목표·동료 진행상황·메시지를 읽고, CLAIM을 올려 하위 작업을 선점하고 겹치면 DM으로 조정하며, 도구로 작업한 뒤 수락 기준으로 검증하고, 공유 저장소에 병합한다. Gitea가 공유 작업공간을, Mattermost가 팀 채널과 DM을, DeLM에서 가져온 공유 컨텍스트 보드가 OBSERVED·FACT·FAIL·CLAIM·PATCH_SUMMARY 같은 타입 노트를 맡는다. 이 루프는 런타임 코드가 아니라 프롬프트 안에 있으며, 실험에는 GitHub Copilot CLI가 단일 에이전트 하네스로 쓰였다.

ProgramBench의 가장 어려운 5개 과제(FFmpeg, gromacs, pandoc, PHP-src, ctags)에서 GPT-5.6-sol 기준 평균 최종 테스트 통과율은 1개 에이전트 19.31%에서 128개 에이전트 28.78%로 올랐다. pandoc 단일 과제에서는 1,024개 에이전트가 55.06%를 기록했고, README에 추가된 GPT-6.1-sol 결과로는 32개 에이전트가 79.59%에 도달했다(이 수치는 v1 논문에는 없음).

연구진은 규모별로 창발 행동도 관찰했다. 8개에서는 인터페이스 합의, 32개에서는 상호 리뷰와 반례에 따른 승인 철회, 128개에서는 신뢰할 리뷰어 재사용과 통합 프로토콜 표준화, 1,024개에서는 일부 워커가 통합자 역할을 맡고 실패한 작업을 동료가 복구하는 모습이 나타났으며, 이 역할 중 하드코딩된 것은 없었다고 밝혔다.

## 왜 중요한가?
지금의 AI 코딩 팀은 '팀장 AI' 하나가 일을 나눠주는 구조라 팀장이 병목이 됩니다. Agensh는 팀장 없이 수백~천 개의 AI가 스스로 일을 나누는 방식이 실제로 성능을 올릴 수 있음을 보여줘, 대형 소프트웨어를 AI 집단이 만드는 시대에 한 걸음 다가섰다는 신호입니다.

## 심층 분석

### 기술 의미
핵심은 조정 로직을 코드가 아닌 프롬프트와 공유 인프라(Git·채팅·컨텍스트 보드)로 옮겼다는 점이다. 사람 개발 조직의 도구를 그대로 쓰므로 하네스가 모델·단일 에이전트 런타임과 느슨하게 결합되고, 어댑터만 붙이면 Claude Code 등으로 교체 가능하다고 논문은 주장한다. 다만 1→8개 에이전트에서 겨우 1.37포인트 개선, 128개에서도 평균 28.78%에 그친 점은 규모 확장의 한계 수익이 작고 비용이 막대할 수 있음을 시사한다(→ 분석).

### 업계 영향
Anthropic·OpenAI·GitHub가 모두 '리드+서브에이전트' 구조를 제품화한 상황에서, Microsoft Research가 반대 방향의 분산 구조 데이터를 공개한 것은 멀티에이전트 설계 논쟁에 실증 근거를 더한다. 창발적 역할 분화 관찰은 연구진 자체 궤적 분석이므로 재현이 필요하지만, Docker Compose 재현 가이드가 함께 공개돼 외부 검증 장벽은 낮다. 에이전트 수가 늘수록 토큰 비용이 선형 이상으로 커지는 만큼, 실제 도입은 비용 대비 속도 향상이 관건이 될 것으로 보인다.

### 관련 프로젝트
- https://github.com/microsoft/Agensh
- https://arxiv.org/abs/2609.26781
- https://github.com/facebookresearch/ProgramBench

### 관련 뉴스
- 없음

## 원문 발췌
> Microsoft Research has open-sourced Agensh, a decentralized harness for large teams of coding agents. The Agensh multi-agent harness removes the central orchestrator that most agent frameworks depend on.
> With GPT-5.6-sol at high reasoning effort, the mean final test-pass rate moved as follows: 1 agent: 19.31% 8 agents: 20.68% 32 agents: 26.52% 128 agents: 28.78%
> On pandoc alone, scores were 33.89% (1), 41.75% (8), 43.11% (32), 50.94% (128) and 55.06% (1,024).

## 수집 노트
- **선정 이유**: 공식 GitHub README로 교차 확인되는 대형 연구소의 멀티에이전트 하네스 오픈소스 공개로, 에이전트 프레임워크 설계에 직접 영향을 주는 정량 데이터가 있어 선정.
- **제외 후보**: Underdog Saluki 27B 2-bit 실행 가이드(MarkTechPost) — 신규 발표가 아닌 튜토리얼이라 제외. TokenGate(Stanford·UC Berkeley) 프리필 가속 — 연구 단계 최적화로 오늘은 에이전트 직접 관련 후보를 우선해 제외.
