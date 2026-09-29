# Google Research, 에이전트가 과적합 없이 자기 하네스를 개선하는 'RRSI' 오픈소스 공개

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/09/29/google-research-open-sources-rrsi-ai-agents-that-improve-their-own-harness-without-overfitting/
- **소스**: MarkTechPost
- **발행일**: 2026-09-29
- **수집일**: 2026-09-30
- **수집자**: 레노버
- **카테고리**: research
- **태그**: [google-research, rrsi, self-improvement, agent-harness, regularization, open-source]
- **소스 권위**: major-media
- **교차 확인**: 1
- **교차 확인 근거**: MarkTechPost 해설 (GitHub 저장소·arXiv 논문은 저자 1차 자료로 독립 소스 아님)
- **중요도**: ⭐⭐
- **신선도**: fresh

## 핵심 요약
> MarkTechPost에 따르면 Google Cloud AI Research 등은 LLM 에이전트가 모델 가중치 변경 없이 프롬프트·도구·메모리·제어 흐름·서브에이전트로 구성된 자기 하네스를 다시 쓰게 하는 RRSI를 공개했다. 개선 루프 자체를 정규화해, 최적화에 쓰지 않은 벤치마크에서도 성능 향상이 유지된다.

## 번역 (한국어)
MarkTechPost 보도에 따르면 Google Cloud AI Research는 UNC 채플힐·스탠퍼드·워싱턴대(세인트루이스)와 함께 RRSI(Regularized Recursive Self-Improvement)를 공개했다. RRSI는 LLM 에이전트가 자신의 하네스 — 프롬프트, 도구, 메모리, 제어 흐름, 서브에이전트 — 를 스스로 고쳐 쓰게 하며, 모델 가중치는 바꾸지 않는다. 코드는 Apache 2.0이고 Python 3.10+와 LiteLLM 모델 문자열을 지원한다.

기존 하네스 진화 루프는 같은 과제 세트로 매 라운드를 평가하기 때문에 그 과제를 암기하는 문제가 있다. 연구진은 벤치마크 특화 적합, 노이즈 추종, 복잡도 누적이라는 세 가지 실패 유형을 지목했다. RRSI는 편집 범위는 그대로 두되 탐색 방식을 정규화한다 — 라운드가 갈수록 줄어드는 편집 예산, 가설·diff·점수 변화를 기록하는 증거 장부, 과제명·정답 등 누출을 거르는 비평기, 노이즈 이상의 향상만 인정하는 하한, 추가 토큰 비용을 성능으로 정당화하게 하는 비용 규칙, 효과 없는 구성요소의 가지치기다.

MarkTechPost가 인용한 논문 Table 1에 따르면 Claude Opus 4.8 기준 Terminal-Bench 2.1(진화 세트)이 74.2%에서 80.2%로, 선택에 쓰이지 않은 SWE-bench Verified가 82.0%에서 83.8%로 올랐다. 분포 밖 평가에서도 JobBench +4.7, GDPval +3.5, APEX-Agents +3.7포인트 향상됐고, 6개 held-out 분할이 모두 개선됐다. 하네스도 가벼워져 시행당 정책 토큰이 비정규화 진화의 3.80M에서 2.42M으로 줄었다.

## 왜 중요한가?
AI 에이전트가 스스로 작업 방식을 고치게 하면 '시험 문제만 외우는' 함정에 빠지기 쉬운데, RRSI는 이를 막는 규칙을 제시했다. 모델을 새로 학습시키지 않고도 에이전트 성능을 꾸준히 끌어올리는 방법이라, 에이전트를 운영하는 팀이라면 비용 대비 효과가 큰 접근이다.

## 심층 분석

### 기술 의미
편집 예산을 L0, 가지치기를 Lasso(L1), 비용 규칙을 Ridge(L2)에 대응시킨 것은 고전적 머신러닝 정규화를 '하네스 공간'으로 옮긴 발상이다. 가설·결과를 기록해 반증된 아이디어를 재시도하지 않게 하는 증거 장부는 이 리포의 증거 장부 규칙과 같은 문제의식이다. (→ 분석) MarkTechPost는 토큰 절감률이 초록에서는 30%, 프로젝트 페이지에서는 36%로 표기가 다르다고 지적했다.

### 업계 영향
가중치 고정 상태의 하네스 최적화는 폐쇄형 API 모델을 쓰는 기업도 적용할 수 있어 파급 범위가 넓다. (→ 분석) 'held-out 향상'을 핵심 지표로 내세운 점은 에이전트 벤치마크 점수 부풀리기에 대한 업계의 경계심을 반영한다. MarkTechPost는 이것이 공식 Google 제품이 아닌 연구 등급 코드라고 명시했다.

### 관련 프로젝트
- [GitHub — google-research/rrsi](https://github.com/google-research/rrsi)
- [arXiv 2609.24972 — RRSI 논문](https://arxiv.org/abs/2609.24972)

### 관련 뉴스
- [Google MSEB 사운드 임베딩 벤치마크](2026-09-28-google-mseb-sound-embedding-benchmark.md) — 같은 Google Research의 전날 공개
- [Anthropic Claude Sonnet 5.5 출시](2026-09-28-anthropic-claude-sonnet-5-5-release.md) — Terminal-Bench 계열 성능 경쟁

## 원문 발췌
> "It lets an LLM agent rewrite its own harness: prompts, tools, memory, control flow and sub-agents. Model weights never change. RRSI constrains the improvement loop itself, so gains hold on benchmarks the agent never optimized against."
> "Terminal-Bench 2.1 (evolve split): 74.2% to 80.2%."
> "SWE-bench Verified (never used for selection): 82.0% to 83.8%."
> "Apache 2.0 code on GitHub; research-grade, not an official Google product."

## 수집 노트
- **선정 이유**: 주요 AI 전문 매체 단일 소스라 중요도는 낮지만, 에이전트 하네스 자기개선의 과적합 문제를 다룬 오픈소스 연구로 에이전트 운영 실무와 직결돼 선정.
- **제외 후보**: "Qwen-Audio-3.1-Realtime(MarkTechPost)" — 음성 모델로 에이전트 관련성 상대적으로 낮음. "Nebius Physical AI Awards(MarkTechPost)" — 공모전 공지.
