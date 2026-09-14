# NVIDIA, 물리 AI 오케스트레이터 'OSMO' 오픈소스 공개 — YAML 하나로 훈련·시뮬레이션·로봇 검증 연결

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/09/14/nvidia-open-sources-osmo-one-yaml-orchestrates-physical-ai-training-simulation-and-robot-testing/
- **소스**: MarkTechPost
- **발행일**: 2026-09-14
- **수집일**: 2026-09-15
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [nvidia, osmo, 물리ai, kubernetes, 로봇공학]
- **소스 권위**: official
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐⭐
  - 산정 근거: 중요도 산정: 기본 1 + official 2 + 교차 확인(2개) 1 + 반응 규모 0
- **신선도**: fresh

## 핵심 요약
> NVIDIA가 로봇 개발의 훈련(GB200/H100)·시뮬레이션(Isaac Sim/RTX)·실기 검증(Jetson) 계층을 Kubernetes 네이티브 컨트롤 플레인 하나로 묶는 오픈소스 워크플로 오케스트레이터 OSMO를 Apache-2.0으로 공개했다. 워크플로 전체를 단일 YAML로 기술하면 각 계층 클러스터에 자동 배치되며, 코딩 에이전트(Claude Code·Codex·Cursor) 연동 가이드도 저장소에 포함된다.

## 번역 (한국어)

로봇 개발자는 하나의 컴퓨팅 문제가 아니라 세 개를 안고 있다. NVIDIA의 표현을 빌리면 "물리 AI는 3 컴퓨터 문제"다. 정책 훈련은 데이터센터 GPU(GB200, H100)에서, 시뮬레이션과 물리·센서 렌더링은 RTX 워크스테이션의 Isaac Sim에서, 배포와 하드웨어 인더루프(HIL) 검증은 로봇에 실린 Jetson 에지 기기에서 이뤄진다. 각 계층마다 별도 클러스터·스케줄러·접착 스크립트가 생기는 것이 관행이었다.

OSMO는 이 단편화에 대한 NVIDIA의 해답이다. 오픈소스 Kubernetes 네이티브 워크플로 오케스트레이터로, 팀이 파이프라인 전체를 단일 YAML 파일로 기술하면 인프라 코드를 만지지 않고도 모든 계층에서 실행할 수 있다. 각 백엔드는 CLI로 등록된 Kubernetes 클러스터이며, 워크플로는 클러스터 이름이 아니라 플랫폼(예: gb200, rtx-pro-6000, jetson-agx-thor)을 지정하면 OSMO가 해당 플랫폼을 제공하는 풀로 작업을 라우팅한다.

대표 예제는 데이터로 연결된 3개 작업이다. 시뮬레이션 작업이 RTX에서 Isaac Sim 컨테이너를 실행하고, 훈련 작업이 GB200 8 GPU에서 PyTorch 컨테이너를 돌리며, 평가 작업이 Jetson에서 ROS 앱을 실행해 훈련된 정책을 소비하고 결과를 데이터셋에 기록한다. 의존성은 입력에서, 영속성은 출력에서, 배치는 플랫폼에서 온다. 직렬·병렬 작업 그룹, Jinja 템플릿, 재시도 정책, 선점과 GPU 빌림이 있는 HIGH/NORMAL/LOW 우선순위도 사용자 가이드에 문서화돼 있다.

배포 유연성도 강조점이다. 같은 YAML이 노트북(Docker/KIND)에서 EKS·AKS·GKE·온프레미스·에어갭 클러스터까지 실행되며, 6.3.0 릴리스는 Azure AKS·AWS EKS·microk8s에 OSMO를 프로비저닝하는 multi-provider 배포 스크립트를 추가했다. 스케줄링은 NVIDIA KAI Scheduler가 기본이고, 다중 GPU 작업에 NVLink 토폴로지 인식 배치가 들어갔다. 보안 쪽으로는 RBAC 사이드카, OAuth2 프록시 연동, 클라우드 워크로드 아이덴티티가 포함됐다. 에이전트 연동도 내재화돼 있어 저장소가 AGENTS.md, skills 디렉터리, MCP 배포 가이드를 제공하며, NVIDIA는 GTC 2026에서 OSMO가 Claude Code·OpenAI Codex·Cursor와 통합되어 코딩 에이전트가 파이프라인을 제출·감시·디버깅할 수 있다고 밝혔다. OSMO는 GR00T, Isaac Lab, Isaac Sim, Isaac ROS에서 실전 검증됐다고 문서는 기술한다.

## 왜 중요한가?
로봇 AI 개발의 가장 큰 마찰 중 하나인 "훈련·시뮬레이션·실기" 사이의 접착 코드 문제를 업계 표준 격인 Kubernetes 위의 단일 도구로 풀어냈습니다. NVIDIA가 검증된 내부 인프라를 Apache-2.0으로 공개한 것이라 물리 AI 스타트업과 연구실이 대기업급 파이프라인을 그대로 쓸 수 있게 됩니다. 코딩 에이전트가 파이프라인을 직접 제출·디버깅하는 MCP·AGENTS.md 연동은 'AI가 로봇 개발 워크플로를 운영하는' 구조의 대표 사례입니다.

## 심층 분석

### 기술 의미
OSMO의 설계 포인트는 워크플로에서 클러스터를 추상화하고 '플랫폼' 요구사항만으로 배치를 결정하는 컨트롤 플레인 분리다. 이는 훈련(GPU 클러스터)·시뮬레이션(RTX)·HIL(에지)처럼 하드웨어 수명 주기가 다른 자원을 하나의 의존성 그래프로 묶는 문제를 스케줄링 계층에서 해결한다 (→ 분석). 콘텐츠 주소형 데이터셋(중복 제거로 스토리지 10~100배 절감 주장 — 프로젝트 문서의 주장)과 per-group 타임아웃, Envoy 게이트웨이 TLS 종단 등 실무 인프라 요소가 갖춰진 점은 연구 데모가 아닌 프로덕션 지향 도구임을 보여준다 (→ 분석).

### 업계 영향
물리 AI·임베디드 AI 개발 조직의 진입 장벽이 크게 낮아진다. 지금까지 3계층 파이프라인 구축은 대기업의 자체 인프라 역량에 의존했지만, OSMO + Helm 차트 + 로컬 KIND 퀵스타트 조합은 중소 팀도 동일한 워크플로를 재현할 수 있게 한다 (→ 분석). NVIDIA 입장에서는 로봇 개발 파이프라인 전체를 자사 하드웨어(GB200→RTX→Jetson) 생태계에 고정하는 효과가 있어, 오픈소스 공개가 곧 플랫폼 락인 전략으로 읽힌다 (→ 분석). 코딩 에이전트 연동(AGENTS.md·MCP 가이드)은 '에이전트가 개발 인프라를 조작하는' 패턴이 칩·로봇 도메인까지 확산 중임을 보여준다 (→ 분석).

### 관련 프로젝트
- [NVIDIA OSMO GitHub](https://github.com/NVIDIA/osmo) — Apache-2.0, 최신 릴리스 6.3.1
- [NVIDIA OSMO 공식 페이지](https://www.nvidia.com/en-us/data-center/products/osmo/) — 제품 소개·문서
- [KAI Scheduler](https://github.com/NVIDIA/KAI-scheduler) — OSMO 기본 스케줄러

### 관련 뉴스
- [AWS, 오픈소스 'Pizza Bot' 공개 — 백그라운드 AI 에이전트를 위한 이메일형 수신함](../records/2026-09-14-aws-pizza-bot-open-source-agent-inbox.md) — 대형 클라우드 업체의 에이전트 인프라 오픈소스화라는 같은 흐름
- [에이전트 하네스 vs 프레임워크 vs MCP 3계층 분석](../records/2026-09-15-agent-harness-vs-framework-vs-mcp.md) — OSMO의 AGENTS.md·MCP 연동이 위치한 프로토콜 계층의 배경

## 원문 발췌
> "NVIDIA OSMO is NVIDIA's answer to that fragmentation: an open-source, Kubernetes-native workflow orchestrator that lets a team describe the whole pipeline in a single YAML file and run it across every tier without touching infrastructure code."
>
> "The repository ships an AGENTS.md, a skills directory, and an MCP deployment guide. At GTC 2026 NVIDIA said OSMO integrates with Claude Code, OpenAI Codex, and Cursor so coding agents can submit, monitor, and debug pipelines."
>
> "Battle-tested on GR00T, Isaac Lab, Isaac Sim, and Isaac ROS; Azure and Nebius integrations exist."

## 수집 노트
- **선정 이유**: NVIDIA 공식 저장소·문서로 검증되는 오픈소스 공개이자, 에이전트(MCP·AGENTS.md)와 물리 AI 인프라가 만나는 지점을 보여주는 도구 뉴스라 아카이브 가치가 있다.
- **제외 후보**: "Reward AI OM-1, 인간 시연만으로 훈련된 로봇 정책 공개" (MarkTechPost) — 모델·연구성 뉴스로 오늘 로봇 축은 OSMO로 대표 수집. "TechCrunch Disrupt 행사 프로모션 다수" — 광고성 콘텐츠.
