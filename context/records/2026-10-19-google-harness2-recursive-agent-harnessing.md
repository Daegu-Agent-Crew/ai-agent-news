# Google, 모델은 그대로 두고 '하네스'만 고치는 Harness² 오픈소스 공개

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/10/18/google-harness2-recursive-agent-harnessing-framework/
- **소스**: MarkTechPost
- **발행일**: 2026-10-18
- **수집일**: 2026-10-19
- **수집자**: 레노버
- **카테고리**: framework
- **태그**: [google-research, harness2, agent-harness, self-improvement, open-source]
- **소스 권위**: major-media
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 2개(DAIR.AI Academy 논문 요약)(1) + 반응 미미(0) = 3
- **신선도**: fresh

## 핵심 요약
> MarkTechPost에 따르면 Google Cloud AI Research는 고정된 모델 주변의 코드·파일(하네스)을 배포 중에 개선하는 재귀적 에이전트 하네싱 프레임워크 Harness²를 오픈소스로 공개했다. 1회 개선 단계만으로 4개 모델·하네스 조합이 3개 벤치마크 모두에서 향상됐다.

## 번역 (한국어)
Google Cloud AI Research가 Harness²(Harness-squared)를 오픈소스로 공개했다. 이 프레임워크는 모델 가중치를 바꾸지 않고, 프롬프트·도구·메모리·스킬·오케스트레이션 등 모델을 둘러싼 '하네스'를 배포 중에 다듬는다. 버전은 0.1.0이며 Linux, Python 3.12~3.13, uv 환경에서 돌고 모델 호출은 Vertex AI를 쓴다.

대상은 정답 검증기가 없는 '열린 세계' 환경이다. 연구팀은 대부분의 자기개선 기법이 레이블이나 테스트 케이스를 전제한다고 지적하며, Harness²는 이 없이도 작동하도록 설계됐다고 설명한다. 편집 가능한 하네스 구성요소는 시스템 프롬프트, 가드레일, 메모리, 도구 안내, 서브에이전트, 스킬, 스크립트, 플러그인(미들웨어) 8가지이며 각각 파일로 마운트된다.

작업 단위 재귀는 '제안–탐침–조합' 단계로 이뤄진다. 기본 하네스로 한 번 실행한 뒤, 편집기가 일반적 실패(계획·도구 사용)를 겨냥한 '불변' 후보와 해당 도메인 지식을 겨냥한 '도메인' 후보 2개를 만든다. 두 후보를 같은 작업에 돌려 궤적을 비교하고, 관찰된 행동으로 뒷받침되는 수정만 남긴다. 작업이 끝나면 리플렉터가 채택된 하네스와 교훈을 담은 EXPERIENCE.md를 라이브러리에 저장해 다음 제안에 활용한다.

MarkTechPost가 정리한 논문 수치에 따르면 가장 큰 향상은 OpenCode 위 GLM-5로 WorkBuddy-Bench 64.2→75.7(+11.5점)이었고, 가장 작은 향상은 Codex 위 GLM-5의 JobBench 23.6→24.8(+1.2점)이었다. 경험 라이브러리를 제거하면 WorkBuddy 점수가 77.5에서 74.4로 떨어졌다.

## 왜 중요한가?
AI 비서의 성능을 높이려면 더 비싼 새 모델이 필요하다는 통념과 달리, 비서가 쓰는 '업무 매뉴얼과 도구 상자'만 스스로 고쳐도 성적이 오른다는 걸 Google이 공개 코드로 보여줬습니다. 같은 모델로도 더 잘 일하는 에이전트를 만들 수 있다는 뜻입니다.

## 심층 분석

### 기술 의미
정답 레이블 없이 '후보 간 행동 대조'만으로 하네스를 개선한다는 점이 핵심으로, 실제 배포 환경의 자기개선에 더 가깝다(→ 분석). 8개 구성요소를 파일 단위로 분리한 설계는 Claude Code·OpenCode 계열의 AGENTS.md·skills 관행과 맞물려 이식성이 높다(→ 분석). 개선폭이 +1.2~+11.5점으로 편차가 커서, 어떤 작업에서 효과가 큰지는 추가 검증이 필요하다(→ 분석). 수치는 모두 논문 저자 측 보고다.

### 업계 영향
'모델 경쟁'에서 '하네스 경쟁'으로 무게가 옮겨가는 흐름을 Google이 공식 연구로 뒷받침했다(→ 분석). 오픈 웨이트 모델(GLM-5 등)도 하네스 최적화로 격차를 좁힐 수 있어 비용 민감한 기업에 유리하다(→ 분석). EXPERIENCE.md 같은 교훈 축적 파일은 에이전트 운영 노하우의 표준 형식으로 자리잡을 가능성이 있다(→ 분석).

### 관련 프로젝트
- github.com/google-research/harness2
- arXiv 2610.14224

### 관련 뉴스
- [Google RRSI 에이전트 하네스 자기개선](../records/2026-09-29-google-rrsi-agent-harness-self-improvement.md) — Google의 앞선 하네스 자기개선 연구
- [ByteDance HarnessDev 벤치마크](../records/2026-09-12-bytedance-harnessdev-agent-harness-benchmark.md) — 하네스 성능 평가 흐름
- [Xiaomi HarnessX 자기 재작성](../records/2026-06-25-xiaomi-harnessx-self-rewriting.md) — 하네스 자기수정 선행 사례

## 원문 발췌
> "Google Cloud AI Research has open-sourced Harness². It is a recursive agent harnessing framework that improves the code and files around a frozen model."
> "Performance: 1 refinement step improved all 4 model and harness setups on all 3 benchmarks."
> "Best: GLM-5 under OpenCode rose from 64.2 to 75.7 on WorkBuddy-Bench (+11.5 points)."
> "The research team argues that most self-improvement methods assume labels or test cases. Harness² is built to work without them."

## 수집 노트
- **선정 이유**: Google Research의 공식 오픈소스(GitHub·arXiv 존재 확인)이자 레이블 없는 하네스 자기개선이라 에이전트 프레임워크 흐름상 핵심 사례로 선정.
- **제외 후보**: NVIDIA 구조화 데이터 모델 제로 트레이닝 튜토리얼(MarkTechPost) — 튜토리얼 성격. Voxel51 3.0(MarkTechPost) — 피지컬 AI 데이터 플랫폼으로 에이전트 연관성 낮음.
