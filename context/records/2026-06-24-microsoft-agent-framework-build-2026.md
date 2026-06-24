# Microsoft Agent Framework at BUILD 2026: Agent Harness, Hosted Agents, CodeAct

## 메타데이터
- **원문 URL**: https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-at-build-2026-announce
- **소스**: Microsoft Developer Blog (devblogs.microsoft.com)
- **발행일**: 2026-06-03
- **수집일**: 2026-06-24
- **수집자**: 대구루
- **카테고리**: framework
- **태그**: [Microsoft, Agent-Framework, BUILD-2026, CodeAct, Foundry, MCP, AutoGen, Semantic-Kernel]
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Microsoft가 BUILD 2026에서 Agent Framework(MAF)의 핵심 업데이트를 발표했다. Agent Harness로 프로덕션 패턴을 내장하고, Foundry Hosted Agents로 로컬 에이전트를 그대로 프로덕션에 배포하며, CodeAct로 모델 턴 수를 획기적으로 줄이는 혁신을 선보였다.

## 번역 (한국어)

Microsoft가 BUILD 2026 컨퍼런스에서 Microsoft Agent Framework(MAF)의 중요한 업데이트 3종을 발표했다. MAF는 .NET과 Python에서 동일한 API를 제공하는 오픈소스 AI 에이전트 SDK로, 2026년 4월 2일 1.0 정식 버전(GA)을 달성하며 AutoGen과 Semantic Kernel을 단일 플랫폼으로 통합했다.

첫 번째 핵심 발표는 **Agent Harness**다. 이는 모델 추론과 실제 실행 환경(셸, 파일 시스템, human-in-the-loop 승인) 사이의 다리 역할을 하는 계층으로, 컨텍스트 압축, 파일 기반 세션 메모리, Todo 추적, 계획/실행 모드 분리, 백그라운드 에이전트 오케스트레이션 등 프로덕션에 필요한 패턴을 기본 제공한다. 개발자는 단일 메서드 호출(`AsHarnessAgent`)로 모든 챗 클라이언트를 완전한 에이전트로 전환할 수 있다.

두 번째는 **Foundry Hosted Agents**다. 로컬에서 개발한 MAF 에이전트를 컨테이너로 패키징하여 Foundry 관리 인프라에 배포하는 기능으로, 자동 스케일링(유휴 시 0까지), 세션 상태 영속성, VM 단위 격리, OpenTelemetry 기반 관측성을 기본 제공한다. 코드 몇 줄만 추가하면 로컬 에이전트가 프로덕션용 호스티드 에이전트로 변환된다.

세 번째는 **CodeAct**로, 가장 혁신적인 기능이다. 기존 에이전트는 도구를 하나씩 호출할 때마다 별도의 모델 턴이 필요했으나, CodeAct는 모델이 짧은 Python 프로그램을 작성해 `call_tool()`로 여러 도구를 한 번에 호출하고 격리된 Hyperlight 마이크로 VM에서 실행한다. 이를 통해 지연 시간과 토큰 사용량을 크게 줄일 수 있다.

## 왜 중요한가?
Microsoft가 AI 에이전트를 '실험 단계'에서 '프로덕션 배포 단계'로 넘어가는 데 필요한 모든 인프라를 하나의 프레임워크에 통합했다. 개발자는 더 이상 컨텍스트 관리, 승인 처리, 배포 파이프라인을 각각 따로 구축할 필요가 없다. 특히 CodeAct는 에이전트의 실행 효율성을 근본적으로 바꾸는 패러다임 전환으로, 향후 모든 에이전트 프레임워크가 따라갈 방향을 제시했다.

## 심층 분석

### 기술 의미

Agent Harness의 핵심 혁신은 '컨텍스트 압축'이다. 긴 도구 호출 체인에서 토큰 사용량을 모니터링하고 채팅 기록을 중간에 압축하여 컨텍스트 윈도우 오버플로우를 방지한다. 이는 실제 프로덕션에서 에이전트가 장시간 실행될 때 발생하는 가장 흔한 장애 모드를 해결한다. FileMemoryProvider와 TodoProvider를 표준 내장함으로써, 개발자가 매번 구현해야 했던 보일러플레이트를 제거했다.

CodeAct는 기존의 ReAct 패턴(Reason-Act-Observe 루프)을 코드 실행 패러다임으로 대체한다. 모델이 도구 선택을 반복하는 대신 하나의 프로그램으로 병렬 도구 호출을 수행하므로, 복잡한 워크플로우에서 모델 턴 수를 절반 이상 줄일 수 있다. Hyperlight 마이크로 VM을 사용해 호출별로 격리된 환경을 제공하므로 보안도 강화된다.

Foundry Hosted Agents의 'scale-to-zero'는 비용 측면에서 중요하다. 에이전트가 유휴 상태일 때 과금이 발생하지 않으며, 파일 시스템과 세션 상태가 그대로 보존되어 재시작 시 이전 작업을 이어갈 수 있다.

### 업계 영향

MAF 1.0 GA 이후 AutoGen과 Semantic Kernel 커뮤니티가 하나로 통합되면서, Microsoft 생태계의 파편화 문제가 해결되었다. 이는 Azure를 기반으로 하는 기업에게 강력한 대안을 제공하며, OpenAI 의존도를 낮추려는 기업에게 특히 매력적이다.

Agent Harness 패턴(컨텍스트 압축, 파일 메모리, Todo 추적, 계획/실행 분리)은 업계 표준이 될 가능성이 높다. 이미 Claude Code, OpenAI Codex 등에서 유사한 기능을 제공하지만, MAF는 이를 프레임워크 수준에서 표준화하여 어떤 챗 클라이언트에나 적용할 수 있게 만들었다.

CodeAct의 등장은 다른 프레임워크에도 영향을 미칠 것이다. LangGraph의 그래프 기반 오케스트레이션이나 CrewAI의 역할 기반 크루 모델과는 근본적으로 다른 접근이며, 실행 효율성 측면에서 우위를 점할 수 있다.

### 관련 프로젝트
- [Microsoft Agent Framework GitHub](https://github.com/microsoft/agent-framework)
- [Agent Harness 문서](https://devblogs.microsoft.com/agent-framework/agent-harness-in-agent-framework/)
- [Foundry Hosted Agents 샘플](https://github.com/microsoft/agent-framework/tree/main/dotnet/samples/04-hosting/FoundryHostedAgents)
- [Hyperlight 마이크로 VM](https://github.com/hyperlight-dev/hyperlight)

### 관련 뉴스
- [2026 AI 에이전트 프레임워크 비교 가이드](../records/2026-06-24-claude-agent-sdk-credit-2026.md) — 8개 프레임워크 비교 및 Claude Agent SDK 구독제 변화
- [2026년 6월 AI 모델 전쟁](../records/2026-06-24-june-2026-ai-model-war.md) — Microsoft MAI-Thinking-1을 포함한 4개사 모델 경쟁 분석

## 원문 발췌
> MAF reached 1.0 GA on April 2, 2026, bringing the convergence of AutoGen and Semantic Kernel into a single, supported platform. Everything below builds on that 1.0 foundation.

> CodeAct collapses that loop. Instead of choosing a tool, waiting, and choosing the next one, the model writes a single short Python program that calls your tools via call_tool(…), runs it once in a sandbox, and returns a consolidated result.

> Scale to zero, pay nothing while the agent is idle; it scales back up on the next request. Resume with filesystem intact, files, disk state, and session identity persist across scale-to-zero.
