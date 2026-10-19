# NVIDIA, Run:ai 플랫폼 전체를 Apache 2.0 오픈소스로 공개 — 쿠버네티스 GPU 오케스트레이션

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/10/18/nvidia-runai-open-source-gpu-orchestration-kubernetes/
- **소스**: MarkTechPost
- **발행일**: 2026-10-18
- **수집일**: 2026-10-20
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [nvidia, runai, kubernetes, gpu-orchestration, open-source, mcp]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 1개(0) + 반응 미확인(0) = 2
- **신선도**: fresh

## 핵심 요약
> MarkTechPost에 따르면 NVIDIA는 GPU 오케스트레이션 플랫폼 Run:ai 전체를 Apache 2.0 라이선스로 GitHub에 공개했다. 플랫폼은 KAI Scheduler, GPU Fractioning Operator, KAI Resource Management, Workload Map 4개 구성요소로 나뉘며 AI 어시스턴트용 MCP 서버도 포함한다.

## 번역 (한국어)
NVIDIA가 Run:ai 플랫폼 전체를 오픈소스로 공개했다. 소스 코드는 Apache 2.0 라이선스로 GitHub에 올라왔으며, Run:ai는 NVIDIA DSX AI Factory 플랫폼의 일부가 됐다. 플랫폼 팀은 이제 유료 구독 없이 스택을 검토·포크·셀프호스팅할 수 있다.

Run:ai는 쿠버네티스 위에서 개발·학습·추론 워크로드를 공유 GPU 클러스터에 스케줄링하는 플랫폼으로, 쿠버네티스를 대체하지 않고 확장한다. 사용자는 웹 UI, CLI, REST API, 그리고 AI 어시스턴트용 MCP 서버로 접근할 수 있다.

릴리스는 독립 채택이 가능한 4개 구성요소로 나뉜다. CNCF 샌드박스 프로젝트인 KAI Scheduler는 갱 스케줄링·공정 분배·토폴로지 인식을 지원하고, GPU Fractioning Operator는 CUDA 13.4 네이티브 GPU 분할로 워크로드별 메모리 상한을 드라이버가 강제한다. KAI Resource Management는 프로젝트·부서·쿼터를, Workload Map은 PyTorchJob·RayCluster 등 워크로드 유형 기술을 담당한다.

로컬 개발은 local-dev.sh 스크립트 하나로 약 50개 Go 서비스를 빌드하고 가짜 GPU 8개를 시뮬레이션하는 5노드 Kind 클러스터를 만들어 GPU 없이도 가능하다. 커뮤니티 에디션에는 NVIDIA 엔터프라이즈 지원이 없으며, 상용 지원판은 NVIDIA AI Enterprise 등으로 계속 제공된다.

## 왜 중요한가?
비싼 GPU를 여러 팀이 나눠 쓰도록 관리하는 상용 소프트웨어가 무료로 풀렸습니다. 자체 서버에서 AI와 에이전트를 돌리려는 기업의 비용과 진입 장벽이 낮아집니다.

## 심층 분석

### 기술 의미
CUDA 드라이버 수준의 하드 메모리 격리로 GPU 분할을 표준화한 것은 다중 에이전트·다중 모델을 한 GPU에 올리는 운영에 유리하다(→ 분석). MCP 서버 내장은 인프라 운영 자체를 AI 에이전트가 조작하는 흐름을 반영한다(→ 분석). 원문은 이번 릴리스에 대한 플랫폼 수준 벤치마크는 공개되지 않았다고 밝혔다.

### 업계 영향
Volcano·Kueue·YuniKorn이 스케줄링·큐잉에 집중하는 반면 Run:ai는 관리 플랫폼 전체를 공개해 범위에서 차별화된다고 원문은 비교한다. NVIDIA GPU 전용(AMD·Intel 미지원)이라 오픈소스이면서도 NVIDIA 생태계 고착을 강화하는 효과가 있다(→ 분석). Microsoft TauGrid 등 GPU 쿠버네티스 오픈소스 경쟁이 가열되는 흐름이다(→ 분석).

### 관련 프로젝트
- NVIDIA Run:ai (GitHub, Apache 2.0)
- KAI Scheduler (CNCF Sandbox), Model Streamer, Grove

### 관련 뉴스
- [Microsoft TauGrid GPU 쿠버네티스 오픈소스](../records/2026-09-18-microsoft-taugrid-open-source-gpu-kubernetes.md) — 경쟁 GPU 오케스트레이션

## 원문 발췌
> "NVIDIA has released the full NVIDIA Run:ai platform as open source software. The source code ships under the Apache 2.0 license on GitHub."
> "Users reach it through a web UI, CLI, REST API and an MCP server for AI assistants."
> "NVIDIA split the release into 4 components that teams can adopt independently."

## 수집 노트
- **선정 이유**: 에이전트·모델 셀프호스팅의 인프라 계층에서 상용 플랫폼이 통째로 오픈소스화된 사건으로 선정.
- **제외 후보**: Amazon TorchNeuron(TechCrunch) — 동일 인프라 계층이나 Run:ai가 공개 범위가 더 커 하나만 선정. Mistral Timestral(MarkTechPost) — 시계열 예측 모델.
