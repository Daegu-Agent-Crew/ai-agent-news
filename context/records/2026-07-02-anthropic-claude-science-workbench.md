# Anthropic, 과학자를 위한 AI 워크벤치 'Claude Science' 베타 출시

## 메타데이터
- **원문 URL**: https://www.anthropic.com/news/claude-science-ai-workbench
- **소스**: Anthropic
- **발행일**: 2026-06-30
- **수집일**: 2026-07-02
- **수집자**: 대구루
- **카테고리**: tool
- **태그**: [Anthropic, Claude-Science, scientific-research, bioinformatics, MCP, NVIDIA-BioNeMo]
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Anthropic이 과학 연구자를 위한 통합 AI 워크벤치 'Claude Science'를 베타로 출시했다. 60개 이상의 큐레이션된 과학 데이터베이스 커넥터, 3D 단백질 구조 렌더링, 재현 가능한 연구 아티팩트 생성, HPC 클러스터 연동 등을 통해 연구의 전 단계를 하나의 환경에서 수행할 수 있다.

## 번역 (한국어)

Anthropic은 과학자를 위한 AI 워크벤치 'Claude Science'를 베타로 출시했다. Claude Science는 연구자가 흔히 사용하는 도구와 패키지를 통합하고, 감사 가능한 연구 결과물을 생성하며, 유연한 컴퓨팅 자원 접근을 제공하는 앱이다. Claude Pro, Max, Team, Enterprise 사용자를 대상으로 즉시 사용할 수 있다.

과학 연구는 본질적으로 단조로운 작업이 많다. 연구자는 수십 개의 데이터베이스(각기 다른 스키마), 다양한 파일 포맷, Jupyter, R, 클러스터 터미널 등 여러 도구를 전환하며 작업해야 한다. Claude Science는 이러한 파편화된 도구들을 단일 연구 환경으로 통합하여, 문헌 분석부터 다단계 연구 실행, 결과물의 반복적 개선까지 모든 단계를 지원한다.

특히 눈에 띄는 기능은 풍부한 과학 아티팩트의 네이티브 렌더링이다. 3D 단백질 구조, 게놈 브라우저 트랙, 화학 구조 등을 직접 시각화하며, 모든 결과물은 생성 코드와 환경 정보, 평이한 설명, 전체 메시지 히스토리와 함께 제공되어 몇 달이 지나도 재현 및 검증이 가능하다. 연구자가 "그리드 선 제거해 줘" 또는 "축을 로그 스케일로 바꿔 줘"라고 요청하면 에이전트가 자체 코드를 수정한다.

Claude Science는 60개 이상의 큐레이션된 스킬과 커넥터를 사전 구성하여 제공한다. 유전체학, 단일 세포, 프로테오믹스, 구조 생물학, 케미인포매틱스 등을 다루며, UniProt, PDB, Ensembl, Reactome, ClinVar, ChEMBL, GEO 등 주요 과학 데이터베이스에 일반 언어로 질의할 수 있다. NVIDIA의 BioNeMo Agent Toolkit과도 연동되어 Evo 2, Boltz-2, OpenFold3 등 생명과학 모델에 네이티브로 접근할 수 있다. 또한 연구자가 기존에 사용하던 파이프라인을 재사용 가능한 스킬로 저장하거나, 실험실의 도구를 커넥터로 연결할 수 있어 향후 세션에 자동으로 상속된다.

컴퓨팅 자원 관리도 에이전트가 담당한다. 대규모 분석(예: 단백질 접힘, 대규모 유전체 파이프라인)이 필요한 경우, Claude Science가 계획을 작성하고, 리소스 사용 전 사용자의 승인을 받은 후, 기존 HPC 클러스터(SSH) 또는 Modal 계정을 통해 GPU를 온디맨드로 확장한다. 분석이 실행되는 동안 리뷰 에이전트가 결과를 검사하여 잘못된 인용, 추적 불가능한 수치, 코드와 일치하지 않는 피규어를 플래깅하고 자체 수정한다.

## 왜 중요한가?
과학자가 수십 개의 프로그램을 오가며 하던 복잡한 데이터 분석 작업을 AI가 하나의 화면에서 통합 처리하게 되었습니다. 연구자가 더 창의적인 실험 설계와 해석에 집중할 수 있게 되어, 신약 개발이나 유전자 연구 등이 더 빠르고 정확해질 수 있습니다.

## 심층 분석

### 기술 의미
Claude Science는 범용 LLM 챗봇이 아닌, 과학 연구 워크플로우에 특화된 에이전트 환경을 제공한다는 점에서 기술적 전환점을 만든다. 핵심은 '조정 에이전트(coordinating agent)'가 60개 이상의 전문 스킬과 커넥터를 오케스트레이션하고, 필요시 전문 에이전트를 파생시키는 구조다. MCP(Model Context Protocol) 기반 커넥터 생태계를 통해 UniProt, PDB, ChEMBL 등 과학 데이터베이스에 직접 질의할 수 있으며, NVIDIA BioNeMo와의 통합은 생물학적 AI 모델(Evo 2, Boltz-2, OpenFold3)을 에이전트 워크플로우에 통합하는 선례를 만든다. 모든 아티팩트가 코드, 환경, 메시지 히스토리와 함께 제공되는 '감사 가능성(auditability)'은 과학 연구의 재현성 위기를 해결하는 데 직접 기여한다.

### 업계 영향
과학 연구용 AI 도구 시장은 AlphaFold(NVIDIA/DeepMind), BioTuring, Recursion 등이 경쟁하고 있으나, 이들을 하나의 에이전트 환경으로 통합하는 시도는 Claude Science가 최초 수준이다. Manifold Bio(조직 표적 의약품 설계), CRISPR 스크린 설계, 단백질 구조 예측 등에서 이미 베타 테스트를 거쳤으며, 실제 연구 파이프라인에 통합된 것이 입증되었다. 이는 AI 에이전트가 코딩과 고객 서비스를 넘어 기초 과학 연구라는 새로운 영역으로 확장됨을 의미한다. 다만 Anthropic은 "Claude Science는 새로운 AI 모델이 아니다"라고 명확히 선을 그었는데, 이는 Fable 5 수출 통제 논란 등 모델 자체의 규제 이슈와 거리를 두려는 전략적 움직임으로도 해석된다.

### 관련 프로젝트
- [Claude Science 공식 페이지](https://claude.com/science)
- [NVIDIA BioNeMo Agent Toolkit](https://nvidianews.nvidia.com/news/nvidia-launches-bionemo-agent-toolkit-giving-ai-agents-the-tools-to-accelerate-scientific-discovery)
- [Manifold Bio - 조직 표적 의약품 설계](https://www.manifoldbio.com/)

### 관련 뉴스
- [NVIDIA BioNeMo Agent Toolkit](../records/2026-06-30-nvidia-bionemo-agent-toolkit.md) — Claude Science와 직접 연동되는 생명과학 AI 툴킷
- [Mistral OCR 4 문서 지능](../records/2026-06-26-mistral-ocr-4-document-intelligence.md) — 문서 처리 특화 AI 모델
- [Anthropic Claude Sonnet 5](../records/2026-07-01-anthropic-claude-sonnet-5.md) — Claude Science 런칭과 함께 발표된 새 모델

## 원문 발췌
> "Claude Science brings these fragmented tools into a single research environment where scientists can conduct all stages of their work. It helps you analyze literature and execute multi-step research, produces detailed artifacts, and lets you iteratively refine figures and manuscripts until they're ready for publication."

> "When you ask Claude Science a question in plain language, specialist agents query and synthesize across all of these sources so you don't have to navigate them individually."
