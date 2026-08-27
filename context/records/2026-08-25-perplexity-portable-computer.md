# Perplexity Ships Portable Computer on NVIDIA DGX Spark: Local Harness, OS-Enforced Sandbox, and Zero Per-Token Cost for Local Steps

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/08/25/perplexity-ships-portable-computer-on-nvidia-dgx-spark-local-harness-os-enforced-sandbox-and-zero-per-token-cost-for-local-steps/
- **소스**: MarkTechPost
- **발행일**: 2026-08-25
- **수집일**: 2026-08-26
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [에이전트, 로컬 AI, 하드웨어, 보안]
- **중요도**: ⭐⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Perplexity가 로컬-first AI 에이전트 플랫폼 'Portable Computer'를 발표하며, 에이전트 하네스, 오케스트레이터, 도구 샌드박스를 NVIDIA DGX Spark에서 직접 실행하고 로컬 작업에는 토큰 비용이 없는 혁신적인 모델을 제시했습니다.

## 번역 (한국어)
Perplexity가 로컬 우선 AI 에이전트 플랫폼 '포터블 컴퓨터'를 공개했습니다. 이 시스템은 에이전트 하네스, 오케스트레이터, 플래너, 도루 라우터, 그리고 사후 학습 모델을 NVIDIA DGX Spark에서 직접 실행합니다. 로컬 모델, 추론 엔진, 도구 샌드박스, 앱 커넥터가 하나의 패키지 시스템으로 제공되며, 모든 작업이 디바이스에서 시작됩니다. 로컬 모델이 처리하는 작업에는 토큰 당 비용이 부과되지 않으며, 실시간 웹이나 프런티어 추론이 필요한 경우에만 오케스트레이터가 정지하고 승인을 요청한 후 15개 이상의 클라우드 모델 중 하나로 해당 단계를 전송합니다.

이 시스템은 하드웨어 게이트가 매우 엄격합니다. 배포 가능한 소프트웨어이지만 미리보기 바이너리가 아니며, 데스크톱에 GB10급 박스나 24GB VRAM을 가진 RTX GPU가 필요합니다. 기업 및 중시장 팀이 이미 NVIDIA 워크스테이션을 소유한 경우와 자금이 풍부한 AI 네이티브 스타트업이 주요 대상입니다. 일반적인 SMB는 진입 장벽인 기계 가격으로 인해 비실용적입니다.

로컬 컴퓨터는 파일 선택기가 있는 로컬 채팅 앱이 아닙니다. Perplexity는 로컬 모델, 추론 엔진, 에이전트 하네스, 도구 샌드박스, 앱 커넥터를 하나의 시스템으로 패키징하여 기존의 추론 서버 설정 및 도구 수동 연결 작업을 제거했습니다. 사용자는 Qwen 3.8 27B 또는 Perplexity의 하네스에 튜닝된 사후 학습 변형인 PPLX 27B 중 하나를 선택할 수 있으며, 곧 출시될 예정인 개방형 30B MoE 모델인 NVIDIA Nemotron 3.5 Lightning도 함께 제공됩니다.

## 왜 중요한가?
이 뉴스는 AI 에이전트의 새로운 패러다임을 제시하며, 보안과 비용 효율성을 동시에 달성할 수 있는 실용적인 솔루션을 선보입니다. 기업들이 민감한 데이터를 클라우드에 노출하지 않고도 강력한 AI 에이전트를 활용할 수 있게 해주며, AI 거대 기술 기업들의 중앙 집중형 모델에 대한 대안을 제시합니다.

## 심층 분석

### 기술 의미
Portable Computer는 순수한 로컬 실행이 아닌 하이브리드 접근법을 채택하고 있습니다. 로컬-first는 로컬-only가 아니며, 시스템은 오케스트레이터가 각 단계마다 PII 분류기를 실행하고 사용자에게 정확히 무엇이 기밖으로 나갈지 보여줍니다. 이 엘리베이션 게이트는 실제 설계 결정이며, 로컬 모델의 컨텍스트 제한(260K 토큰 윈도우에서 100K 이후 성능 저하)을 극복하기 위해 특수 스킬을 수요에 따라 로드하고 커팩트 CLI 도구 노출 방식을 채택합니다. 벤치마크에서는 PPLX 27B가 53개 작업 벤치에서 85.4%를 기록하며, 동일 모델을 사용한 Pi 하네스(77.6%)보다 우수한 성능을 보여줍니다.

### 업계 영향
이 발표는 AI 에이전트 시장에 큰 파장을 일으킬 것입니다. 금융, 법률, 의료, 정부 및 방산, IP 집약적 엔지니어링 등 데이터 거주 의무나 계약적 기밀 유지 요구가 클라우드 추론을 차단하는 모든 산업에서 혁신적 변화를 가져올 것입니다. 특히 기존의 AI 에이전트 솔루션들이 클라우드 의존적인 접근방식을 넘어, 기업들이 소유한 하드웨어에서 완전히 자율적으로 작동하는 시대를 열었습니다. 또한 토큰 비용 구조의 변화는 대규모 코드 마이그레이션과 긴 검증 루프가 경제적으로 합리화되는 계기가 되어, 기존의 클라우드 중심 비용 모델에 도전장을 내밀고 있습니다.

### 관련 프로젝트
- [NVIDIA DGX Spark](https://www.nvidia.com/en-us/products/workstations/dgx-spark/) - 하드웨어 인프라
- [Perplexity Computer Platform](https://perplexity.ai/products/computer) - 에이전트 플랫폼
- [Qwen 3.8 27B](https://qwen.ai/zh) - 지원 모델
- [NVIDIA Nemotron 3.5 Lightning](https://blogs.nvidia.com/blog/nemotron-lightning-switchyard-rtx-dgx/) - 예정 모델

### 관련 뉴스
- [Google AI Managed Agents](../records/2026-06-28-gemini-api-managed-agents.md) — Gemini API 관리형 에이전트 발표
- [Local AI Agent Frameworks](../records/2026-05-15-local-agent-frameworks.md) — 로컬 AI 에이전트 프레임워크 트렌드

## 원문 발췌
> "Perplexity has released Portable Computer, a local-first build of its agentic Computer platform that runs the agent harness, orchestrator, planner, tool router and post-trained models directly on NVIDIA DGX Spark. The local model, inference engine, tool sandbox and app connectors ship as one packaged system, every task begins on the device, and work handled by local models carries no per-token cost."