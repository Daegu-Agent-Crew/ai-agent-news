# Meta, 에이전트 실행용 초경량 모델 Muse Ember 공개 — $0.10/백만 토큰

## 메타데이터
- **원문 URL**: https://research.meta.ai/blog/muse-ember
- **소스**: Meta Superintelligence Lab 공식 블로그 (보조: TechCrunch)
- **발행일**: 2026-11-09
- **수집일**: 2026-11-10
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [meta, muse-ember, agent, cost-efficiency, small-model]
- **소스 권위**: official
- **교차 확인**: 3
- **중요도**: ⭐⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Meta Superintelligence Lab이 에이전트의 반복 작업(도구 호출, 코딩 서브태스크, 라우팅, 문서 파싱)용 최소·최고효율 모델 Muse Ember를 공개했다. 입력 100만 토큰당 $0.10, 컨텍스트 100만 토큰이며 AI 태스크당 약 $0.14다.

## 번역 (한국어)
Meta는 Muse Ember를 "에이전트가 하루 종일 반복하는 작업"을 위한 모델로 소개했다. 도구 호출, 코딩 서브태스크, 라우팅, 추출, 긴 문서 파싱이 대상이다. 회사 주장으로는 임의의 추론 설정에서 Claude Haiku 5.5·GPT-6 Luna보다 달러당 지능이 높고, Haiku의 최고 점수를 약 1/3 비용으로 맞추며, Luna의 모든 설정을 능가한다.

자체 공개 벤치마크에서 Ember(max)는 AutomationBench-AA 37.8(Haiku 13.9, Luna 20.2), Terminal-Bench 4.0 40.9(Haiku 39.2, Luna 16.4), OSWorld 2.1(부분) 69.5 등을 기록했다. 컨텍스트 100만 토큰, 최대 51.2만 출력 토큰을 지원하고 텍스트·이미지·오디오·비디오를 자체 처리한다.

가격은 입력 $0.10/백만 토큰, 캐시 입력 $0.004, 출력 $0.50다. Artificial Analysis 지수 기준 태스크당 약 $0.14로, 회사는 "모든 제품에, 모두를 위해 돌릴 수 있는" 가격이라 표현했다. Muse 브랜드의 네 번째 모델로, Muse Wonder Full로 학습된 첫 특화 모델이며 "Muse Wonder가 계획하고 Muse Ember가 물량을 처리한다"는 운용 구도를 제시했다.

안전 평가에서 Ember는 Meta Superintelligence Scaling Framework의 고위험 임계치를 밑돌았고, 사용자 대리 행동(의도 존중, 숨은 지시 저항, 고영향 행위 전 인간 확인 요청) 검사도 수행됐다.

## 왜 중요한가?
AI 에이전트의 실제 비용 대부분은 수많은 작은 호출에서 나온다. 이 반복 작업용 모델 가격이 사실상 바닥을 뚫으면서, AI 비서·자동화 서비스를 "거의 공짜로" 대량 구동하는 시대가 가까워졌다. 소비자·중소기업용 에이전트 앱의 경제성이 크게 바뀐다는 뜻이다.

## 심층 분석

### 기술 의미
"Muse Wonder가 계획, Ember가 실행"이라는 대-소 모델 혼성(harness) 구조는 오케스트레이터-워커 패턴을 상품화한 것이다. 100만 토큰 컨텍스트 + 51.2만 출력을 이 가격에 주는 것은 긴 코드베이스·문서 세트를 한 번의 호출로 처리하는 에이전트 설계를 실용화한다. 멀티모달 통합(스크린샷·음성·영상)은 별도 파이프라인 모델을 없애 에이전트 스택을 단순화한다. (→ 분석: 자체 공개 벤치마크 중심이라 독립 검증은 아직 초기.)

### 업계 영향
$0.14/태스크는 DeepSeek V4.1 Flash·GLM 5.3 Flash급 오픈소스 대항마와도 경쟁하는 가격대로, 경량 실행 모델 시장의 가격 전쟁이 촉발될 수 있다. API 비용이 에이전트 스타트업의 주요 원가였던 구조에서 원가 압박이 완화되고, 차별화는 오케스트레이션·데이터로 이동한다. Anthropic Haiku·OpenAI Luna의 시장 지위에 직접 도전한다.

### 관련 프로젝트
- 평가 리포트: https://research.meta.ai/static/muse-ember-evaluation-report
- 사용 시작: https://dev.meta.ai/

### 관련 뉴스
- [Meta Muse Wonder 프런티어 모델](../records/2026-10-13-meta-muse-wonder-frontier-model.md) — Ember의 상위 계획 모델
- [Muse Spark Open 공개](../records/2026-10-16-meta-muse-spark-open-816b-open-weight.md) — Muse 포트폴리오 흐름
- [Claude Fable·Mythos 5.2](../records/2026-11-09-anthropic-claude-fable-mythos-5-2.md) — 같은 날 프런티어 출시

## 원문 발췌
> "Today, we're introducing Muse Ember, our smallest and most efficient model designed for complex reasoning execution and the work agents repeat all day: tool calls, coding subtasks, routing, extraction, and long document parsing."
> "Muse Ember is available today on the Meta Model API, at $0.10 per million input tokens and $0.50 per million output tokens."
> "It rounds out our portfolio of models: Muse Wonder for the hardest problems, Muse Spark for coding and agentic workflows, and Muse Ember for repeatable coding and agentic tasks at scale at about $0.14 per Artificial Analysis task."

## 수집 노트
- **선정 이유**: 에이전트 실행 계층의 단가 기준선을 바꾸는 공식 발표이며 TechCrunch·HN 교차 확인. 대구크루 자체 에이전트 운영 비용과도 직결.
- **제외 후보**: DeepX 5W 추론 칩 주장 — HN 단일 제보, 교차 확인 부족. Gemini 개인 파일 인간 검수 주장 — 개발자 GitHub 제보로 속성·검증 미흡.
