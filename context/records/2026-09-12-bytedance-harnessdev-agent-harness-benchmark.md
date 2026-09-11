# ByteDance Seed 등, LLM이 스스로 에이전트 하네스를 만들고 진화하는 능력을 재는 HarnessDev 벤치마크 공개

## 메타데이터
- **원문 URL**: https://arxiv.org/abs/2609.01437
- **소스**: arXiv (ByteDance Seed·SUTD·Georgia Tech·M-A-P·TokenWave.AI 공동 연구) / MarkTechPost
- **발행일**: 2026-09-01 (arXiv v1) — 2026-09-11 MarkTechPost 분석 보도
- **수집일**: 2026-09-12
- **수집자**: 레노버
- **카테고리**: research
- **태그**: [HarnessDev, agent-harness, benchmark, ByteDance-Seed, self-improving, terminal-bench, context-engineering]
- **소스 권위**: official
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐⭐
- **신선도**: updated

## 핵심 요약
> ByteDance Seed 등 5개 기관의 HarnessDev는 평가 단위를 '모델이 낸 답'이 아닌 '모델이 직접 작성해 실행한 에이전트 하네스'로 옮긴 벤치마크로, 6개 창작(creator) LLM이 최소 시드에서 출발해 5개 하위 벤치마크 2,207개 태스크용 하네스를 만들었다. 결과는 글쓰기·ML 실험 영역에서는 인간제 참조 하네스에 필적했지만 코드·검색 영역에서는 크게 뒤처졌고, 진화(evolution)로 얻은 개선은 불안정해 held-out 태스크로 일부만 전이됐다.

## 번역 (한국어)
에이전트 하네스란 모델을 둘러싼 코드 전체를 가리킨다. 실행 루프, 도구, 컨텍스트 구성, 상태 관리, 복구, 검증이 그 안에 들어간다. 논문은 같은 모델 가중치라도 하네스를 바꾸면 성능이 크게 달라진다는 점을 지적하며, MarkTechPost의 보도는 Terminal-Bench 2.1 리더보드를 예로 든다 — GPT-5가 Terminus 2 하네스 안에서는 35.2%, Codex CLI 안에서는 49.6%를 풀었다는 것. 그런데 기존 벤치마크들은 하네스를 고정해두고 모델의 '답'만 평가했고, 모델이 하네스 그 자체를 개발할 수 있는 능력은 상대적으로 덜 탐구돼 있었다.

HarnessDev는 평가 단위를 태스크 출력에서 '실행 가능한 인프라'로 옮긴다. 두 단계로 구성된다. 창작(Creation) 단계에서는 점수 0짜리 최소 시드와 소수의 개발용 사례만 주어지면 에이전트가 완전한 실행 시스템을 처음부터 만든다. 진화(Evolution) 단계에서는 자기가 만든 하네스를 출발점으로 삼아, 하위 벤치마크 실행 피드백을 받으며 반복적으로 수정해 성능을 끌어올린다. 각 하네스는 능력(숨겨진 태스크에서의 성공률)과 효율(실행 토큰 비용) 두 축으로 채점된다.

공개된 창작 결과는 6개 LLM, 4개 도메인, 5개 하위 벤치마크 총 2,207개 고유 인스턴스를 포괄하며, 평가용 태스크는 개발 과정에 공개되지 않았다. 결과를 보면 자작 하네스는 글쓰기와 머신러닝 실험 영역에서는 인간이 만든 참조 하네스에 필적하거나 능가했지만, 코딩과 검색·리서치 영역에서는 성숙한 인간제 하네스에 크게 못 미쳤다. 실행 비용의 편차도 컸다.

진화 단계의 결론은 더 냉정하다. 성능 개선은 일부 있었지만 불안정했고, held-out 태스크로 부분적으로만 전이됐다 — MarkTechPost 보도 기준 64개 진화 변경 중 34개만 같은 방향으로 일반화됐다. 실행 모델을 고정한 추가 실험에서는 개선 폭이 하네스를 '실행하는' 모델에 크게 의존했다. 즉 자작 하네스의 이득은 모델 간에 잘 이전되지 않는다.

## 왜 중요한가?
에이전트 성능이 모델 자체보다 주변 실행 인프라(하네스)에 크게 좌우된다는 사실을 정량적으로 확인한 희귀한 연구다. "AI가 스스로 도구를 만들고 개선한다"는 자기 개선 서사가 실제로 어디까지 가능한지 측정한 기준선이 생겼다는 점에서, 에이전트 프레임워크 개발자·사용자 모두에게 '모델 능력'과 '하네스 기여'를 구분하는 잣대를 제공한다.

## 심층 분석

### 기술 의미
핵심은 평가 대상의 이동이다: 태스크 출력 → 실행 가능 인프라. 창작 단계에서 점수 0짜리 시드가 인간 참조에 근접하는 영역(글쓰기·ML 실험)이 있다는 것은 하네스 엔지니어링의 상당 부분이 자동화 가능하다는 뜻이고, 코드·검색에서 실패한다는 것은 도구 설계의 어려운 부분이 아직 모델의 일반 능력 밖이라는 뜻이다. 진화 개선의 불안정성과 34/64 일반화율(MarkTechPost 보도 기준)은 하네스 수정이 태스크 세트에 과적합되는 구조를 보여주며, 실행 모델 의존성 실험은 하네스-모델 결합도가 높아 '범용 최적 하네스'라는 개념 자체가 흔들림을 시사한다 (→ 분석).

### 업계 영향
첫째, 컨텍스트 엔지니어링·하네스 개발이 커다란 부가가치 영역으로 자리 잡은 가운데, 그 자동화의 현재 수준을 재는 공개 기준선이 생겼다. 둘째, 모델 벤더들이 "우리 모델은 하네스만 잘 갖추면 된다"는 식으로 성과를 발표할 때 검증 도구로 쓰일 수 있다. 셋째, Xiaomi HarnessX처럼 하네스 자기 재작성에 베팅한 기존 사례들과 비교·검증의 대상이 되며, 에이전트 프레임워크 시장에서 '프레임워크의 가치' 논쟁에 실증 데이터를 제공한다. 자기 개선형 에이전트를 향한 기대치를 현실화하는 효과도 있다.

### 관련 프로젝트
- https://arxiv.org/abs/2609.01437 — 논문 원문 (arXiv:2609.01437)
- https://self-developing-agents.github.io/ — 프로젝트 페이지
- https://www.tbench.ai/ — 하네스 효과를 보여주는 Terminal-Bench 2.1 리더보드

### 관련 뉴스
- [2026-09-11-openai-agents-api-managed-codex-harness.md](2026-09-11-openai-agents-api-managed-codex-harness.md) — 벤더가 관리형 하네스를 서비스화한 사례, 하네스가 제품이 되는 흐름
- [2026-06-25-xiaomi-harnessx-self-rewriting.md](2026-06-25-xiaomi-harnessx-self-rewriting.md) — 실행 중 자기 스캐폴딩을 재작성한 선배 사례, HarnessDev와 직접 비교 가능
- [2026-08-25-perplexity-portable-computer.md](2026-08-25-perplexity-portable-computer.md) — 로컬 하네스 OS 접근, 하네스 설계의 다른 방향

## 원문 발췌
> "We introduce HarnessDev, a benchmark that shifts the unit of evaluation from task outputs to runnable infrastructure."
> "We find that generated harnesses remain substantially behind mature human-engineered references on code and on search and research, while matching or exceeding the selected references on writing and machine-learning experimentation, with large variation in execution cost."
> "Evolution produces some performance gains, but they are unstable and transfer only partially to held-out tasks. Experiments with a fixed runtime model further show that the gains depend strongly on the model executing the harness, indicating limited transfer across models."

## 수집 노트
- **선정 이유**: 에이전트 하네스라는 이 저장소의 핵심 주제를 다루는 공식 연구(arXiv, official +2)로, MarkTechPost의 같은 날 분석 보도가 교차 확인(독립 소스 2개, +1)되며 자기 개선 에이전트 논의의 기준선을 제공한다. 신선도 updated 처리 — 원논문은 9/1 게시, 주요 AI 매체의 분석 보도는 9/11.
- **제외 후보**: Moonshot AI $2B 매출 목표 (TechCrunch In Brief) — 단문 브리핑으로 심층 기록할 내용 부족. Nscale 이사회 영입 (TechCrunch In Brief) — 인사 이동 단발 보도로 제외.
