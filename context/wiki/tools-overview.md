# 에이전트 도구 생태계 — 2026년 7월

## 메타데이터
- **카테고리**: tools
- **관련 뉴스 수**: 18
- **최종 업데이트**: 2026-07-23 (8차 갱신)

## 요약
에이전트 도구 생태계가 빠르게 분화하고 있다. 브라우저 자동화, MCP 서버, 터미널 작업 등 각 영역별 전문 도구가 등장하면서, 에이전트 개발 스택이 성숙 단계에 진입했다. MCP(Model Context Protocol)가 200+ 서버 구현체를 확보하며 사실상 표준으로 자리잡았고, 도구 간 상호운용성이 빠르게 표준화되고 있다.

## 주요 도구

### agent-browser (Vercel)
- **상태**: 오픈소스 (Apache 2.0), 36.8k 스타
- **핵심**: Rust 네이티브 CLI, ref 기반 접근성 트리, MCP 서버 내장
- **토큰 효율**: DOM 대비 10~25배 절감 (200~400 vs 3000~5000 토큰)
- **통합**: Claude Code, Cursor, GitHub Copilot, OpenAI Codex, Google Gemini
- **링크**: <https://github.com/vercel-labs/agent-browser>

### 브라우저 자동화 경쟁 도구
- browser-use (16k 스타) — Python SDK
- Stagehand (Browserbase) — act/extract/observe/agent 4개 프리미티브
- nanobrowser (13k 스타) — Chrome 확장
- Steel Browser (7k 스타) — 오픈소스 Browser API

### MCP 생태계 확장 (2026년 6월)
MCP(Model Context Protocol)가 200개 이상의 서버 구현체를 보유하며 사실상 표준 도구 프로토콜로 확립되었다. 단일 설정 라인으로 Playwright, Slack, GitHub 등을 연결할 수 있게 만들었으며, 프레임워크가 도구 통합을 자체 구현하는 대신 표준 프로토콜에 위임하는 패러다임 전환을 보여준다. ACP(Agent Communication Protocol)가 Linux Foundation 산하에서 A2A(Agent-to-Agent) 프로토콜로 통합되어, 다중 벤더 에이전트 생태계의 기반이 마련되었다.

> 💡 **교차 참조**: MCP + A2A를 함께 사용하는 조직이 단일 프로토콜 방식보다 40~60% 빠른 워크플로우 개발 속도를 보인다는 2026년 채택 트렌드 분석이 있다. 자세한 내용은 [프레임워크 동향](frameworks-overview.md) 참조.

### 도구 라우팅 & 토큰 혁신 (2026년 7월)

### Alibaba SkillWeaver — 99% 토큰 절감
- **핵심**: '조합형 스킬 라우팅(Compositional Skill Routing)' — 복잡한 작업을 하위 단계로 분해 후 각 단계에 최적의 도구만 선택적 로드
- **기술**: Skill-Aware Decomposition(SAD) 피드백 루프 + 실행 그래프 생성
- **성과**: 토큰 사용량 99% 이상 절감, 정확도 동시 향상
- **의미**: 기업 AI가 수백~수천 개의 도구를 보유해도 비용 폭증 없이 운영 가능
- **링크**: [VentureBeat 원문](../records/2026-07-05-alibaba-skillweaver-tool-routing.md) · [프레임워크 분석](../records/2026-07-03-alibaba-skillweaver-token-routing.md)

> 💡 **교차 참조**: SkillWeaver는 [프레임워크 동향](frameworks-overview.md)의 그래프 기반 오케스트레이션 패러다임과 연결된다. 도구 선택을 그래프 노드-엣지로 모델링하는 접근은 Google ADK Go 2.0 및 LangGraph와 같은 맥락. [AutoTool 연구](research-overview.md)도 유사한 도구 선택 최적화를 다룬다.

## 코딩 & 개발 도구 (2026년 7월)

### ZCode (Z.ai) — GLM-5.2 전용 에이전트 개발 환경
- **상태**: 무료 데스크톱 앱 (macOS/Windows/Linux)
- **핵심**: '에이전트 우선(agent-first)' 개발 — 채팅 사이드바가 아닌, 결과를 설명하면 에이전트가 계획·편집·검사·반복 수행
- **특징**: WeChat·Feishu·Telegram 원격 제어, GLM-5.2에 최적화
- **비용**: 경쟁사(Cursor, Claude Code) 대비 최대 82% 저렴한 API 가격
- **링크**: [VentureBeat 원문](../records/2026-07-03-zai-zcode-agentic-dev-environment.md)

### BNB Agent Studio — 블록체인 AI 에이전트
- **개발**: BNB Chain × AWS 협업
- **핵심**: 15분 만에 자체 월렛을 갖춘 자율형 온체인 AI 에이전트 생성·배포
- **적용**: 온체인 거래 자동화, 디지털 자산 관리, DeFi
- **의미**: 블록체인 + AI 에이전트 융합이 상용화 단계 진입
- **링크**: [Forbes 원문](../records/2026-07-03-bnb-agent-studio.md)

### 10 Modern Agentic Tools (2026 개발자 탐색 목록)
2026년 개발자가 주목할 10가지 도구 카테고리가 정리되었다 ([원문](../records/2026-07-05-modern-agentic-tools.md)). 핵심 전환은 **단순 명령 실행 도구 → 협력적 에이전트 도구**:
- 도구 간 전환, 반복 명령, API 연결 관리를 자동화하는 통합 에이전트 도구가 부상
- 개발 워크플로우 전체를 조율하는 메타 도구(Meta-tool) 개념 등장

## 미디어 & 광고 도구 (2026년 7월)

### Warner Bros Discovery × AWS — 에이전트 광고 최적화 플랫폼
- **상태**: 상용 운영 중 (2026-07 발표)
- **핵심**: 선형·디지털 채널 통합 AI 에이전트 광고 기술 — 지능형 계획, 동적 예측, 실시간 최적화, 폐쇄 루프 측정을 자율 수행
- **기반 기술**: Amazon Bedrock AgentCore (에이전트 구축·운영), SageMaker (맞춤형 ML), S3 + Apache Iceberg (데이터 레이크), ECS (애플리케이션 호스팅)
- **에이전트 특징**: 캠페인별 지속적 자기 학습 — 결과를 바탕으로 구매자·판매자 양측 최적화. 유연한 타겟팅으로 선형·디지털 채널에서 브랜드·청중 세그먼트 조준.
- **의미**: 미디어 업계 최초 대규모 end-to-end 에이전트 광고 상용화. 전통적 분할 광고 워크플로우를 자율 최적화 시스템으로 전환.
- **링크**: [AWS Press Room 원문](../records/2026-07-09-warner-bros-agentic-ai-advertising.md)

> 💡 **교차 참조**: AWS Bedrock AgentCore 기반 구축 사례로, [CRN Top 10](#aws-bedrock-agentcore)의 AgentCore를 미디어 도메인에 적용한 선례. [산업 동향](industry-trends.md)의 미디어 광고 산업 에이전트 전환 섹션과 연결.

## 전문 도메인 도구 (2026년 7월)

### EmulatRx (Weill Cornell Medicine) — 의료 임상 시험 설계 다중 에이전트
- **상태**: Nature Communications 게재 (2026-07-07), 상업화 진행 중
- **핵심**: 5개 전문 AI 에이전트가 협력하여 임상 시험 설계를 가속화하는 다중 에이전트 시스템
- **에이전트 구성**: 감독자(조정) → 시험 설계자(구조 개요) → 정보학자(EHR 쿼리) → 의사(의학적 타당성) → 통계학자(성과 추정)
- **기술**: '타겟 시험 모방(target trial emulation)' — 무작위 대조 시험의 핵심 기능을 일상 치료 데이터에 적용
- **의미**: 임상 시험 설계의 시간과 비용을 획기적으로 단축; 노인·다병 환자 등 기존 시험에서 누락된 인구집단 포함 가능
- **HITL**: 인간 전문가가 에이전트 작업을 모니터링하고 개입하여 교정 → 시스템이 실수 반복 감소
- **링크**: [Weill Cornell 원문](../records/2026-07-08-weill-cornell-clinical-trial.md) · [Nature Communications 논문](https://www.nature.com/articles/s41467-026-74501-2)

> 💡 **교차 참조**: EmulatRx의 다중 전문 에이전트 구조는 [Google ADK 2.0](frameworks-overview.md)의 결정론적 워크플로우 + 전문 에이전트 호출 모델과 같은 패러다임이다. 감독자 에이전트가 워크플로우를 관리하고 결과를 통합하는 구조는 ADK 2.0의 그래프 런타임과 유사하다. Berkeley의 [데이터 시스템 재설계 연구](research-overview.md)도 에이전트가 대량으로 데이터를 쿼리하는 패턴(에이전트 추측)을 예측하는데, EmulatRx의 정보학자 에이전트가 그 선례를 보여준다.

## 엔터프라이즈 에이전트 제품 (CRN 2026 상반기 Top 10)
CRN이 선정한 2026년 상반기 핵심 AI 에이전트 제품 10선 ([원문](../records/2026-07-05-crn-top-agentic-ai-products.md)). 기업용 에이전트 시장이 상용화 단계에 진입했음을 보여주는 지표:

### AWS Bedrock AgentCore
- **핵심**: 프레임워크·모델·프로토콜 무관한 대규모 에이전트 운영 플랫폼. 보안 내장, AgentCore Web Search, Bedrock Managed Knowledge Base 추가
- **의미**: 개발자가 에이전트 역할(모델·도구·지침)을 선언하면 오케스트레이션 루프, 도구 실행, 메모리 관리, 오류 복구를 자동 처리
- **링크**: <https://aws.amazon.com/bedrock/agentcore/>

### Cisco Cloud Control
- **핵심**: 네트워킹·보안·컴퓨팅·관찰성·협업을 단일 안전 환경에서 통합. 자연어로 에이전트·애플리케이션 구축
- **의미**: 다중 도메인 에이전트 시스템의 복잡성 해결 — 인간과 AI 에이전트가 협업하여 IT 인프라 관리

### Databricks Genie One
- **핵심**: 마케팅·재무·영업 등 비즈니스 팀을 위한 협업 에이전트. Genie Ontology 실시간 컨텍스트 레이어 기반
- **의미**: 비기술직 사용자도 데이터 기반 자동화·오케스트레이션 가능

### Dell Deskside Agentic AI
- **핵심**: 현지 인프라에서 에이전트 워크플로우 배포·확장. 클라우드 전용 접근의 비용·지연·데이터 주권 제약 해결
- **의미**: 온프레미스 에이전트 배포 수요 존재 확인

> 💡 **교차 참조**: 이 제품들은 [프레임워크 동향](frameworks-overview.md)의 '엔터프라이즈 플랫폼 vs 오픈소스 SDK' 이원화에서 관리형 엔터프라이즈 플랫폼에 해당한다. AWS Bedrock AgentCore는 [산업 동향](industry-trends.md)의 클라우드 플랫폼 경쟁과도 연결된다. AlphaCorp 분석에서 TCO가 핵심 기준으로 부상한 것도 이러한 엔터프라이즈 제품들의 비용 구조와 직결된다.

## 음성 & 대화 도구 (2026년 7월)

### GPT-Live (OpenAI) — 풀-덱스 음성 대화 모델

**출처**: [OpenAI — Introducing GPT-Live](../records/2026-07-13-introducing-gpt-live.md) ⭐⭐⭐⭐

- **발표**: 2026년 7월 8일
- **핵심**: **풀-덱스 아키텍처** — 동시에 듣고 말할 수 있는 음성 모델. 기존 턴 기반(STT→LLM→TTS 3단계)의 근본적 한계 해결
- **버전**: GPT-Live-1, GPT-Live-1 mini — ChatGPT 사용자 전역에 순차 출시, API 도입 예정
- **배후 모델**: GPT-5.5 사용, 새로운 프론티어 모델 출시 시 지속 업데이트
- **자연스러움**: "mhmm"/"yeah" 등 백채널, 빠른 주고받기, 생각 시간 확보 가능
- **에이전트 위임**: 웹 검색·추론·복잡한 작업을 배후 프론티어 모델에 위임하면서도 대화 흐름 유지
- **의미**: AI 음성 상호작용이 턴 기반에서 **지속적 대화**로 전환. 고객 서비스, 교육, 엔터테인먼트 등 실시간 상호작용 분야 AI 채택 급증 예상

> 💡 **교차 참조**: GPT-Live의 풀-덱스 아키텍처는 [모델 동향](models-overview.md)의 GPT-5.6 Ultra(병렬 에이전트)와 같은 방향성 — 단일 스레드에서 **동시 다중 처리**로 전환. 배후 모델에 작업을 위임하면서 대화를 유지하는 패턴은 [프레임워크 동향](frameworks-overview.md)의 ADK 2.0 결정론적+자율 하이브리드 모델과 유사하다.

## 생산성 에이전트 도구 (2026년 7월)

### ChatGPT Work (OpenAI) — 야심찬 프로젝트를 위한 AI 에이전트

**출처**: [OpenAI — ChatGPT for Your Most Ambitious Work](../records/2026-07-13-chatgpt-for-your-most-ambitious-work.md) ⭐⭐⭐⭐⭐

- **발표**: 2026년 7월 9일
- **핵심**: ChatGPT 내 에이전트 — 앱·워크플로우에서 정보를 수집하여 시트, 슬라이드, 문서, 웹 앱 등 **완성된 자료**를 생성
- **기반 모델**: GPT-5.6 — 다단계 작업 추론 및 템플릿/참조 파일 기반 자료 생성에서 최첨단 성능
- **주요 능력**:
  - 복잡한 프로젝트를 단계별로 분해하여 독립적 완료, 수 시간 지속
  - 단일 요청으로 전체 워크플로우 처리 (예: 고객 조사 → 캠페인 브리프 → 마케팅 자산 → 시장별 조정)
  - 예약된 작업으로 사용자 부재 시에도 프로젝트 진행 (Teams/Slack 메시지 → 문서/슬라이드 변환)
  - 내장 Codex 기술 — 웹/모바일/데스크톱에서 실제 업무 수행, 주당 500만 명 사용
- **초기 성과**: OpenAI 내부 영업팀 — 발견 대화를 24시간 내 POC로 전환 (기존 수주 소요). 재무팀 — 월간 마감·예측을 며칠에서 시간으로 단축
- **의미**: AI가 단순 대화 도구에서 **복잡한 프로젝트의 협업 파트너**로 진화하는 결정적 사례. 인간의 창의성과 AI의 실행력이 결합되는 새로운 협업 패러다임

> 💡 **교차 참조**: ChatGPT Work의 배후 모델인 GPT-5.6은 [모델 동향](models-overview.md)에서 Microsoft 365 Copilot에도 탑재되었다. 같은 모델이 엔터프라이즈 생산성 도구(M365)와 소비자/프로 에이전트(ChatGPT Work) 양쪽에 배포되며, OpenAI의 **양면 공략 전략**을 보여준다. Codex 통합은 [코딩 도구](#zcode-zai--glm-52-전용-에이전트-개발-환경) 생태계와도 연결된다.

## 컴퓨터 사용 에이전트 (2026년 7월)

### Claude Computer Use (Anthropic) — AI가 컴퓨터를 직접 조작하다

**출처**: [Anthropic — Claude 3.5 Sonnet Computer Use](../records/2026-07-15-anthropic-claude-computer-use.md) ⭐⭐⭐⭐

- **발표**: 2026년 7월 10일
- **핵심**: Claude 3.5 Sonnet에 **컴퓨터 사용 기능** 추가 — AI 에이전트가 웹 브라우저 조작, 문서 작성, 데이터 분석 등 실제 컴퓨터 작업을 자율 수행
- **기술 메커니즘**:
  - 실시간 화면 캡처 + 텍스트 인식 결합 → 화면을 '보고' 이해
  - 마우스·키보드 입력 시뮬레이션 → 실제 프로그램 조작
  - **의도 추론 능력**: 사용자 의도 파악 → 맞춤 조작 수행
  - 오류 자동 복구 메커니즘 내장
- **적용**: 반복 업무 자동화, 고도화된 고객 서비스, 데이터 입력·처리, 보고서 생성
- **안전성**: 철저한 테스트 후 점진적 롤아웃, 사용자 피드백 수집 중
- **의미**: AI가 단순 대화를 넘어 **실제 디지털 작업을 수행**하는 단계 진입. 업무 자동화의 새로운 시대 개막.

> 💡 **교차 참조**: Claude Computer Use는 브라우저 자동화(agent-browser, browser-use 등)의 상위 개념으로, 웹 브라우저뿐 아니라 운영체제 전체를 조작 대상으로 삼는다. [프레임워크 동향](frameworks-overview.md)의 Claude Agent SDK와 자연스럽게 통합되며, MCP 생태계의 도구 호출과 보완적이다. Meta Muse Spark 1.1([모델 동향](models-overview.md))의 컴퓨터 사용 능력과 경쟁하는 동일 트렌드. 개인정보·데이터 보안 규제 논의가 [산업 동향](industry-trends.md)에서 부각될 것.

## 엔터프라이즈 에이전트 플랫폼 (2026년 7월)

### Microsoft Azure AI Agent Service — 비즈니스 자동화의 새로운 전선

**출처**: [Microsoft — AI Agents at Work](../records/2026-07-17-microsoft-azure-ai-agents-work-business-automation.md) ⭐⭐⭐⭐

- **발표**: 2026년 7월 16일
- **핵심**: Azure AI Agent Service + Microsoft 365 Copilot 통합으로 기업용 에이전트 자동화 생태계 구축
- **주요 기능**:
  - **코드 우선 환경**: GitHub·VS Code 통합으로 안전하고 상태 유지 자율 에이전트 구축
  - **간소화된 함수 호출**: 기존 수백 줄 코드 → 몇 줄로 처리 (클라이언트 측 함수 호출 지원)
  - **다중 에이전트 환경**: 여러 전문 에이전트가 협력하여 복잡한 작업 완료
  - **Microsoft 365 Copilot**: Fort 500 기업 70% 이미 도입 — 이메일 검토 등 반복 업무 자동화
  - **Copilot Studio**: 자연어 인터페이스 기반 에이전트 빌더 (비개발자도 구축 가능)
  - **Microsoft 365 Agents SDK**: 채널 간 에이전트 배포 SDK
- **고객 사례**: Cineplex — 고객 서비스 요청 처리 시간 15분 → 30초 단축; Fujitsu 등 대규모 도입
- **에이전트 유형 전망**: 개인 비서, 비즈니스 프로세스 에이전트, 조직 간 에이전트가 협업하는 차세대 등장 예상
- **의미**: 기업 AI가 단순 대화에서 벗어나 **실제 비즈니스 프로세스 자동화**로 전환. 개발자·비개발자 양쪽을 아우르는 도구로 시장 폭 확대

> 💡 **교차 참조**: Azure AI Agent Service의 다중 에이전트 환경은 [프레임워크 동향](frameworks-overview.md)의 ADK 2.0 그래프 런타임 및 MAF CodeAct와 같은 오케스트레이션 패러다임이다. Copilot Studio의 자연어 빌더는 [모델 동향](models-overview.md)의 GPT-5.6 × M365 Copilot 통합과 직결된다. ChatGPT Work([위](#chatgpt-work-openai--야심찬-프로젝트를-위한-ai-에이전트))와 마이크로소프트의 엔터프라이즈 에이전트 전략은 같은 방향성을 공유한다.

### Meta Llama Agent Framework — 상업용 오픈소스 에이전트 프레임워크

**출처**: [Meta — Llama Agent Framework Open Source](../records/2026-07-18-meta-llama-agent-framework-open-source-commercial.md) ⭐⭐⭐⭐

- **발표**: 2026년 7월 17일
- **라이선스**: 관대한 상업용 오픈소스 (permissive commercial license)
- **핵심 구성 요소**:
  - **사전 구성 에이전트 컴포넌트**: 텍스트 생성, 데이터 분석, 도구 사용 등 일반 작업을 위한 재사용 가능한 모듈
  - **보안 샌드박싱**: 에이전트 활동을 격리하여 악의적 행위·실수로 인한 피해 최소화
  - **기업급 배포 도구**: 확장성, 모니터링, 관리 인프라 내장
- **전략**: Meta 웹 생태계(소셜 미디어, 메타버스)와 통합 가능 → 광범위한 도달
- **의미**: 대형 테크의 오픈소스 에이전트 프레임워크로 **에이전트 개발의 기술 장벽을 크게 낮춤**. 중소기업·스타트업도 강력한 에이전트 솔루션 구축 가능. 보안 샌드박싱 내장으로 기업 환경 도입 촉진

> 💡 **교차 참조**: Llama Agent Framework의 사전 구성 컴포넌트는 [프레임워크 동향](frameworks-overview.md)의 컴포넌트 기반 조립 패러다임(LangChain × NemoClaw)과 같은 방향성이다. 보안 샌드박싱은 [도구 생태계](#)의 MCP 기반 격리 패턴과 보완적. 상업용 오픈소스 전략은 [산업 동향](industry-trends.md)의 에이전트 민주화 트렌드와 연결. 컴포넌트 재사용·표준화는 전체 에이전트 생태계의 성숙도를 높이는 핵심 요소.

## 엔터프라이즈 개발 플랫폼 (2026년 7월)

### Port AI Builder — 기업용 "Vibe Coding" 플랫폼

**출처**: [InfoWorld — Port AI Builder](../records/2026-07-20-port-ai-builder-vibe-coding.md) ⭐⭐⭐⭐

- **발표**: 2026년 7월 20일
- **핵심**: 자연어로 에이전트 워크플로우를 생성·실행하는 기업용 "vibe coding" 플랫폼. 내장된 human-in-the-loop 검토/승인으로 품질과 통제력 유지
- **기반 아키텍처**: Port의 Agentic SDLC 플랫폼 위에 작동 — 컨텍스트 레이크, 워크플로우 오케스트레이션, 에이전트 관리, 거버넌스 제공
- **적용 분야**: SRE, DevOps, 아키텍처, 보안, AI 거버넌스, 데이터 모델링, UX 등 다양한 도메인 스킬 활용
- **의미**: "vibe coding" 개념이 소비자 도구를 넘어 **기업용 프로덕션 환경**으로 진입. 자연어 개발과 기존 툴체인(VS Code, Codex 등) 통합으로 변환 저항 최소화
- **링크**: [Port AI Builder](https://port.io/ai-builder)

> 💡 **교차 참조**: Port AI Builder의 human-in-the-loop 거버넌스는 [프레임워크 동향](frameworks-overview.md)의 ADK 2.0 HITL 내장화 트렌드와 일치한다. Oracle AI Agent Studio(친숙한 도구 + 기업 런타임 연결)와 같은 방향성 — pro-code와 vibe coding이 기업용 에이전트 구축의 양대 패러다임으로 부상.

### Macky AI — 첫 AI 비즈니스 컨설팅 플랫폼

**출처**: [AI News — Macky AI Consulting Platform](../records/2026-07-20-macky-ai-business-consulting-platform.md) ⭐⭐⭐⭐

- **발표**: 2026년 7월 20일
- **핵심**: OpenAI 기반, 55개 비즈니스 카테고리를覆盖하는 프롬프트 없는 AI 컨설팅 플랫폼. 최대 3개 질문으로 원하는 결과물 생성
- **적용**: 비즈니스 프로세스 설계, 직원 채용 공고 작성, 디지털 전환 계획 등
- **타겟**: 중소기업(SME) — 전통적 컨설팅 비용 부담 없이 전문 수준의 컨설팅 접근 가능
- **의미**: AI가 단순 도구를 넘어 **비즈니스 컨설팅이라는 전문 서비스 영역**으로 진입. SME의 디지털 격차 해소에 기여
- **링크**: [Macky AI](https://macky.ai/)

> 💡 **교차 참조**: Macky AI는 [산업 동향](industry-trends.md)의 에이전트 민주화 트렌드를 구체화한다. 비즈니스 컨설팅 자동화는 에이전트가 단순 반복 업무를 넘어 **전문 지식 영역**으로 확장됨을 시사. ChatGPT Work([위](#chatgpt-work-openai--야심찬-프로젝트를-위한-ai-에이전트))의 '복잡한 프로젝트 완수'와 방향성이 유사하되, SME를 타겟으로 한 접근이 차이점.

## 모바일 에이전트 (2026년 7월)

### Gemini Task Automation (Google) — 스마트폰에서 작동하는 첫 AI 에이전트

**출처**: [The Verge — Gemini Task Automation Hands-on](../records/2026-07-23-gemini-task-automation-phone-agent.md) ⭐⭐⭐⭐

- **발표**: 2026년 7월 22일 정식 론칭
- **지원 기기**: 삼성 갤럭시 S26 울트라, Google 픽셀 10 프로
- **핵심**: Gemini가 스마트폰 앱을 직접 조작하여 주문·예약 등 실제 작업 수행. Uber Eats, DoorDash, Uber 등 배달·라이드쉐어 서비스 지원 (베타)
- **기술 방식**: 사람용 GUI를 추론으로 탐색 — 화면 시각 요소 이해, 앱 내비게이션 논리 유추, 자연어 지시를 단계별 UI 조작으로 변환
- **맥락 이해**: "치킨 테리야키 콤보" → 반인분 단위 인식 후 2개 추가, 비행 일정에서 출발 시간 계산 후 적절한 탑승 시간 예약
- **사용자 경험**: 백그라운드 실행, 최종 주문 승인 단계에서 사용자 개입. 전체 주문 약 9분 소요 (직접 조작보다 느림)
- **한계**: 사람용 UI 탐색의 근본적 비효율성. 구글은 MCP나 Android App Functions 같은 구조화된 접근법으로의 전환을 예상
- **의미**: 스마트폰에서 AI 에이전트가 처음으로 "진짜 일"을 하는 이정표. 발표장 데모가 아닌 실제 기기·실제 앱·실제 주문 완료

> 💡 **교차 참조**: Gemini Task Automation의 GUI 탐색 방식은 [Claude Computer Use](#claude-computer-use-anthropic--ai가-컴퓨터를-직접-조작하다)의 OS 전체 조작과 같은 패러다임이지만, 모바일에 특화되어 있다. 사람용 UI를 AI가 탐색하는 "중간 단계" 해결책이라는 점에서 MCP 생태계(본 문서 상단)의 구조화된 도구 호출로 진화할 전환기적 기술. 삼성·구글 파트너십은 [산업 동향](industry-trends.md)의 모바일 AI 경쟁 가속화와 연결.

## 엔터프라이즈 에이전트 프로덕션 플랫폼 (2026년 7월)

### OpenAI Presence — 프로덕션급 에이전트 배포·관리 플랫폼

**출처**: [OpenAI — Introducing Presence](../records/2026-07-23-openai-presence-enterprise-agent-platform.md) ⭐⭐⭐⭐⭐

- **발표**: 2026년 7월 22일
- **핵심**: 기업이 프로덕션 환경에서 신뢰할 수 있는 AI 에이전트를 배포·관리하는 통합 플랫폼. 음성·채팅 채널 지원
- **구성 요소**:
  - **정책·SOP**: 기업이 에이전트의 행동 범위, 승인 필요 조치, 사람 개입 상황을 정의
  - **가드레일**: 최소 권한 원칙(least privilege) — 필요한 지식·접근 권한만 부여
  - **시뮬레이션·평가**: 배포 전 공통 요청·엣지 케이스·고위험 시나리오 테스트
  - **Codex 개선 루프**: 프로덕션 세션·에스컬레이션 데이터 기반 자동 개선안 제안
- **성과**: OpenAI 자체 전화 지원(1-888-GPT-0090)에 적용, 인바운드 문제 75% 무인 해결. Codex 루프가 10일 만에 인계율 15%포인트 감소
- **배포 모델**: 제한적 GA — FDE(Forward Deployed Engineers)·글로벌 SI가 주도하는 맞춤형 배포 (Palantir FDE 모델 유사)
- **고객**: BBVA, 소프트뱅크, IAG 등 탐색 중
- **의미**: AI 에이전트가 "실험실"에서 "실제 업무"로 나아가는 데 필요한 인프라 제공. 단순 API가 아닌 정책·가드레일·평가·지속적 개선을 포함한 완전한 프로덕션 운영 체계. 에이전트 생태계에 '운영 신뢰성(operational reliability)'이라는 새로운 기준 제시

> 💡 **교차 참조**: Presence의 FDE 배포 모델과 최소 권한 원칙은 [산업 동향](industry-trends.md)의 에이전트 보안 갭(54% 기업 사고 경험)에 대한 직접적 해결책이다. Codex 개선 루프는 [모델 동향](models-overview.md)의 GPT-5.6 Memory Core(자기 교정)와 같은 'behavior drift' 해결 철학을 플랫폼 레벨에서 구현한다. Microsoft Azure AI Agent Service([위](#microsoft-azure-ai-agent-service--비즈니스-자동화의-새로운-전선))와 경쟁하면서도, Azure가 셀프서비스를 지향한다면 Presence는 FDE 기반 맞춤형 배포로 차별화. ChatGPT Work([위](#chatgpt-work-openai--야심찬-프로젝트를-위한-ai-에이전트))의 기업용 확장판으로 볼 수 있다.

## 공통 트렌드
1. **MCP 표준 채택**: 도구들이 MCP 서버를 내장하면서 상호 운용성 확보. 새로운 도구는 MCP 호환이 사실상 필수
2. **셀프 힐링**: DOM 변경 시 자동 복구 (Stagehand, agent-browser ref 시스템)
3. **토큰 최적화**: SkillWeaver(99% 절감), agent-browser(10~25배 절감) — 도구 로딩 비용이 핵심 과제
4. **프레임워크-도구 융합**: MAF CodeAct의 `call_tool()` 다중 도구 병렬 호출, SkillWeaver의 실행 그래프 도구 라우팅
5. **에이전트 우선 도구**: ZCode처럼 도구가 아닌 개발 환경 자체가 에이전트가 되는 패러다임 (Cursor·Claude Code 도적)
6. **크로스 플랫폼 원격 제어**: ZCode의 WeChat/Feishu/Telegram 연동 — 메시징 앱을 통한 에이전트 제어
7. **전문 도메인 다중 에이전트**: EmulatRx처럼 특정 산업(의료)의 과학 팀을 모방한 전문 에이전트 협업 모델 등장
8. **산업별 에이전트 상용화**: WBD×AWS 광고 기술처럼 특정 산업의 비즈니스 프로세스를 end-to-end 자율화하는 도구 등장
9. **풀-덱스 음성 대화**: GPT-Live가 턴 기반 STT→LLM→TTS 파이프라인을 붕괴시키며, 실시간 동시 대화 가능. 음성 AI가 콜센터·교육·엔터테인먼트에서 새로운 도구 카테고리 창출
10. **워크플로우 에이전트**: ChatGPT Work가 단일 요청으로 전체 워크플로우를 처리하며, 예약된 작업으로 무인 실행. 도구가 '응답 생성'에서 '프로젝트 완수'로 진화
11. **엔터프라이즈 플랫폼 통합**: Azure AI Agent Service가 코드 우선 환경 + 비개발자 도구(Copilot Studio)를 결합하여 에이전트 구축의 민주화와 전문화를 동시에 추구
12. **상업용 오픈소스 에이전트**: Meta Llama Agent Framework가 보안 샌드박싱·기업급 배포 도구를 포함한 완전한 프레임워크를 오픈소스화 → 에이전트 개발의 접근성 혁신
13. **엔터프라이즈 vibe coding**: Port AI Builder가 자연어 기반 개발을 기업용 SDLC에 통합하며, human-in-the-loop 거버넌스로 품질 통제 유지
14. **전문 서비스 자동화**: Macky AI가 비즈니스 컨설팅을 AI로 자동화하며, 특히 SME의 전문 서비스 접근성을 혁신적으로 개선
15. **모바일 에이전트**: Gemini Task Automation이 스마트폰에서 처음으로 실제 작동하는 AI 에이전트 경험 제공. 사람용 GUI 탐색이라는 "중간 단계" 해결책으로 시작하여 MCP/App Functions 기반 구조화된 접근으로 진화할 전환기적 기술 ⭐NEW (7/23)
16. **프로덕션 에이전트 운영 체계**: OpenAI Presence가 정책·가드레일·시뮬레이션·Codex 개선 루프를 통합 제공하며, 에이전트 배포가 'API 호출'에서 '완전한 운영 시스템'으로 격상. '운영 신뢰성'이라는 새로운 범주 창출 ⭐NEW (7/23)

> 💡 **교차 참조**: MCP 도구 호출 성능은 [평가 벤치마크](research-overview.md)의 MCP Atlas로 측정된다. 도구 호출 최적화는 [FAPO](frameworks-overview.md)의 파이프라인 최적화와도 연결된다 — FAPO는 도구 호출이 포함된 에이전트 체인의 프롬프트를 자동 개선한다. MAF의 CodeAct는 도구 호출 효율성을 모델 턴 수 차원에서 혁신적으로 개선한다.

## 관련 뉴스
- [CRN 2026 상반기 Top 10 AI 에이전트 제품](../records/2026-07-05-crn-top-agentic-ai-products.md) ⭐NEW (7월)
- [EmulatRx 임상 시험 설계 에이전트 (Weill Cornell)](../records/2026-07-08-weill-cornell-clinical-trial.md) ⭐NEW (7월)
- [Vercel agent-browser](../records/2026-06-20-vercel-agent-browser-tool.md)
- [Claude Agent SDK 구독제 변화](../records/2026-06-24-claude-agent-sdk-credit-2026.md) (MCP 200+ 생태계)
- [Cisco FAPO](../records/2026-06-20-cisco-fapo-prompt-optimization.md) (도구 호출 최적화 맥락)
- [Agentic AI Benchmarks 2026](../records/2026-06-18-agentic-benchmarks-2026.md) (MCP Atlas 벤치마크)
- [Alibaba SkillWeaver — 99% 토큰 절감](../records/2026-07-05-alibaba-skillweaver-tool-routing.md) (7월)
- [Alibaba SkillWeaver 프레임워크 분석](../records/2026-07-03-alibaba-skillweaver-token-routing.md) (7월)
- [Z.ai ZCode 에이전트 개발 환경](../records/2026-07-03-zai-zcode-agentic-dev-environment.md) (7월)
- [BNB Agent Studio](../records/2026-07-03-bnb-agent-studio.md) (7월)
- [Warner Bros × AWS 에이전트 광고 기술](../records/2026-07-09-warner-bros-agentic-ai-advertising.md) ⭐NEW (7월)
- [10 Modern Agentic Tools](../records/2026-07-05-modern-agentic-tools.md) (7월)
- [GPT-Live 풀-덱스 음성 모델](../records/2026-07-13-introducing-gpt-live.md) ⭐NEW (7월)
- [ChatGPT Work 생산성 에이전트](../records/2026-07-13-chatgpt-for-your-most-ambitious-work.md) ⭐NEW (7월)
- [Claude Computer Use — 컴퓨터 조작 에이전트](../records/2026-07-15-anthropic-claude-computer-use.md) (7/15)
- [Microsoft Azure AI Agent Service — 비즈니스 자동화](../records/2026-07-17-microsoft-azure-ai-agents-work-business-automation.md) ⭐NEW (7/17)
- [Meta Llama Agent Framework — 상업용 오픈소스](../records/2026-07-18-meta-llama-agent-framework-open-source-commercial.md) (7/18)
- [Port AI Builder — 기업용 Vibe Coding 플랫폼](../records/2026-07-20-port-ai-builder-vibe-coding.md) ⭐NEW (7/20)
- [Macky AI — AI 비즈니스 컨설팅 플랫폼](../records/2026-07-20-macky-ai-business-consulting-platform.md) (7/20)
- [Gemini Task Automation — 모바일 에이전트](../records/2026-07-23-gemini-task-automation-phone-agent.md) ⭐NEW (7/23)
- [OpenAI Presence — 프로덕션 에이전트 배포 플랫폼](../records/2026-07-23-openai-presence-enterprise-agent-platform.md) ⭐NEW (7/23)

## 관련 위키 문서
- [평가 벤치마크](research-overview.md) — MCP Atlas로 측정하는 도구 호출 성능
- [프레임워크 동향](frameworks-overview.md) — MAF CodeAct, Claude Agent SDK MCP 통합, 도구 호출 파이프라인 최적화
- [모델 동향](models-overview.md) — customtools 엔드포인트로 도구 호출 최적화하는 모델

## 분석 (7월 15일 5차 갱신)
**Claude Computer Use**는 도구 생태계의 범위를 브라우저 자동화에서 **OS 전체 조작**으로 확장한다. 기존 도구들이 MCP 서버나 API를 통한 간접적 도구 호출에 그쳤다면, Claude Computer Use는 화면을 보고 마우스·키보드를 조작하는 '직접 제어' 방식으로, 에이전트가 인간의 컴퓨터 사용 패턴 자체를 모방하게 한다. 이는 반복 업무 자동화의 자유도를 극대화하지만, 동시에 개인정보 보호와 데이터 보안이라는 새로운 과제를 제시한다. 의도 추론과 오류 자동 복구가 결합되어 안정성을 확보하려는 시도가 주목된다.

브라우저 자동화는 에이전트가 물리 세계(웹)에 개입하는 가장 중요한 인터페이스다. agent-browser의 Rust 네이티브 접근과 MCP 내장은 두 가지 중요한 방향성을 보여준다: 성능 최적화와 표준 준수. MCP가 200+ 서버를 확보하며 도구 호출의 사실상 표준으로 자리잡았고, ACP→A2A 통합으로 다중 에이전트 협업의 기반도 마련되었다.

**Microsoft Azure AI Agent Service**와 **Meta Llama Agent Framework**는 에이전트 도구가 두 가지 새로운 방향으로 확장됨을 보여준다. Microsoft는 코드 우선 개발 환경과 비개발자용 자연어 빌더(Copilot Studio)를 결합하여, 기업 내 **모든 역할**이 에이전트를 구축할 수 있게 만든다. Cineplex 사례(15분→30초)는 이미 실질적인 ROI가 입증되었음을 보여준다. Meta는 반대로 **오픈소스 + 상업용 라이선스**로 접근하여, 사전 구성 컴포넌트·보안 샌드박싱·배포 도구를 포함한 완전한 프레임워크를 무료로 제공한다. 이 두 접근법은 에이전트 도구의 양극화 — **관리형 엔터프라이즈 플랫폼 vs 오픈소스 프레임워크** — 를 보여주며, [프레임워크 동향](frameworks-overview.md)의 이원화 트렌드와 일치한다. 특히 Meta의 보안 샌드박싱 내장은 도구 수준에서의 안전장치를 표준화하며, 규제 산업(금융·의료)의 에이전트 도입 장벽을 낮춘다.

7월 들어 **도구 라우팅**이 핵심 테마로 부상했다. SkillWeaver의 99% 토큰 절감은 도구 선택 최적화가 비용 구조를 근본적으로 바꿀 수 있음을 증명했다. ZCode와 BNB Agent Studio는 각각 코딩과 블록체인 도메인에서 '도구 → 에이전트 환경'으로의 진화를 보여준다. **EmulatRx**는 의료 도메인에서 다중 전문 에이전트 협업 모델의 성공을 입증하며, HITL을 통한 신뢰성 구축의 중요성을 보여준다. **Warner Bros×AWS**는 미디어 광고 도메인에서 에이전트가 전통적 비즈니스 프로세스를 end-to-end 자율화한 첫 대규모 상용 사례로, 산업별 에이전트 도구의 가능성을 열었다. **GPT-Live**와 **ChatGPT Work**는 각각 음성 대화와 업무 자동화라는 새로운 도구 카테고리를 열었다. GPT-Live의 풀-덱스 아키텍처는 기존 3단계 음성 파이프라인(STT→LLM→TTS)을 붕괴시키며 실시간 동시 대화를 가능하게 했고, ChatGPT Work는 에이전트가 수 시간 지속되는 복잡한 프로젝트를 독립적으로 수행하며 완성된 자료를 생산하는 새로운 협업 모델을 제시했다. 두 도구 모두 GPT-5.5/5.6 프론티어 모델에 의존하며, 모델 성능과 도구 경험의 경계가 흐려지고 있음을 보여준다.

전반적으로 도구 생태계가 **분산된 단일 기능 도구 → 통합 에이전트 플랫폼 → 도메인 특화 다중 에이전트 시스템**으로 진화하고 있으며, MCP가 그 연결 조직 역할을 하고 있다. 음성(GPT-Live)과 업무 자동화(ChatGPT Work)의 추가로 도구 생태계의 범위가 대화형 인터페이스에서 전체 업무 파이프라인으로 확장되었다.

7월 20일 기준, **Port AI Builder**와 **Macky AI**는 도구 생태계의 두 가지 새로운 확장을 보여준다. Port는 'vibe coding'을 기업용 SDLC에 통합하며, 개발 생산성과 거버넌스 사이의 균형을 제시한다. 이는 Oracle AI Agent Studio([프레임워크 동향](frameworks-overview.md))의 pro-code 접근과 보완적 — 친숙한 도구를 활용하면서 기업 런타임에 연결한다는 공통 전략. Macky AI는 에이전트가 **전문 서비스(컨설팅)** 영역으로 진입했음을 보여주며, 특히 SME의 디지털 격차 해소라는 사회적 의미를 갖는다. 두 도구 모두 기존 툴체인(VS Code, OpenAI 등)과 통합되면서 에이전트 기능을 추가하는 '접목식' 접근을 취하고 있어, 기업의 전환 저항을 최소화하는 실용적 경로를 제시한다.

**7월 업데이트 (8차)**: **Gemini Task Automation**과 **OpenAI Presence**는 도구 생태계의 두 가지 핵심 방향성을 각각 구체화한다. Gemini Task Automation은 **모바일 환경**에서 AI 에이전트가 처음으로 실제 작업을 수행하는 이정표를 세웠다. 사람용 GUI를 추론으로 탐색하는 방식은 분명 "중간 단계" 해결책이지만, 발표장 데모가 아닌 실제 기기에서 실제 주문을 완료하는 경험이 제공된다는 점에서 의미가 크다. 구글이 자신이 예상하는 MCP/App Functions 기반 구조화된 접근으로의 전환이 업계 과제로 부상했다.

**OpenAI Presence**는 에이전트 도구 생태계에 **'운영 신뢰성'**이라는 새로운 차원을 추가한다. 기존 도구들이 '에이전트 구축'에 초점을 맞추었다면, Presence는 '에이전트를 프로덕션에서 신뢰할 수 있게 운영하는' 문제를 직접 다룬다. 정책 정의·시뮬레이션·가드레일·Codex 기반 자동 개선 루프는 behavior drift(배포 후 성능 저하)라는 에이전트 운영의 근본적 과제를 체계적으로 해결한다. OpenAI 자체 전화 지원에서 75% 무인 해결, 10일 만에 15%포인트 인계율 감소라는 실증 데이터는 에이전트가 프로덕션 환경에서 실제 가치를 창출할 수 있음을 입증한다. FDE 기반 배포 모델(Palantir식)은 복잡한 엔터프라이즈 환경에 맞춤형 에이전트를 구축하는 전략으로, Azure AI Agent Service의 셀프서비스 모델과 차별화된다. 이 두 도구의 등장으로 도구 생태계가 **구축 → 배포 → 운영**의 전체 라이프사이클을 포괄하기 시작했다.
