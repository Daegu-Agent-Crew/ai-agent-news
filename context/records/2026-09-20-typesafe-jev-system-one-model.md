# TypeSafe AI, 텍스트 대신 타입화된 보정 결정을 반환하는 Jev 출시

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/09/19/typesafe-ai-releases-jev/
- **소스**: MarkTechPost
- **발행일**: 2026-09-19
- **수집일**: 2026-09-20
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [jev, typesafe, system-one-model, calibrated-decisions, rlcd]
- **소스 권위**: major-media
- **교차 확인**: 4
- **중요도**: ⭐⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> ChatGPT 빌더 출신이 세운 TypeSafe AI가 텍스트를 생성하지 않고 상태와 타입화된 질문을 받아 확률이 붙은 타입화된 결정을 반환하는 비(非)LLM 트랜스포머 모델 Jev를 출시했으며, 자체 워크플로 평가에서 GPT-5.6 Terra 대비 193.6배 빠르고 444.6배 저렴하다고 주장한다(벤더 자체 측정).

## 번역 (한국어)

2022년의 ChatGPT는 AI에게 사람과 대화하는 법을 가르쳤다. 그 빌더 중 한 명은 다음 국면이 사람이 아닌 소프트웨어와 대화하는 AI라고 베팅한다. TypeSafe AI가 출시한 Jev는 트랜스포머 기반이지만 대규모 언어 모델이 아니다. 텍스트를 생성하지 않고, 상태(state)와 타입화된 질문을 보내면 코드가 분기할 수 있는 확률과 함께 타입화된 결정을 돌려준다. 현재는 웨이틀리스트 뒤 얼리 액세스 호스팅 API로 제공되며, 가중치·파라미터 수·셀프호스팅은 공개되지 않았다.

"System One Model"이라는 명칭은 다니엘 카너만의 빠른 직관과 느린 추론 구분에서 빌려왔다. TypeSafe 팀은 RLHF가 모델을 인간 선호에 맞춰 대화를 만들었지만 과신과 모드 붕괴라는 결함을 남겼고, 그래서 사람이 루프에 남을 수밖에 없다고 진단한다. Jev는 새 아키텍처(비공개), 병렬 샘플러, 보정된 결정을 위한 강화학습(RLCD)이라는 새 스택을 쓴다고 한다.

API는 단일 엔드포인트로 동작하며 질문 유형은 셋이다. Choice는 목록에서 하나를 고르고 확률·신뢰도를, Score는 순서 척도로 평가하고 점수·신뢰도를, Noul은 진위를 0~1 확률로 반환한다. 질문들은 같은 상태에 대해 병렬·격리 실행되며 Choice 하나에 최대 255개 옵션까지 지원한다. 모든 답에는 0~1 신뢰도가 붙어, 높으면 자동 실행·중간은 검토·낮으면 사람에게 넘기는 3경로 운용을 문서가 제안한다. 신뢰도 임계값은 오답의 비용에 비례해 정하라고 조언한다.

가격은 입력 10억 토큰당 42달러다. 자체 데모에서 Jev는 0.114초·0.000081달러, GPT-5.6 Terra는 8.566초·0.013880달러가 들었다며 193.6배 빠르고 444.6배 저렴하다고 주장하지만, MarkTechPost는 이 수치가 벤더 자체 워크플로 평가에서 나왔으며 참조 정답이 GPT-6 Astra와 Fable 5.1의 평균이고 워크플로를 TypeSafe 역량팀이 직접 작성했다는 단서를 남긴다. ' hallucination 제로'는 스키마 일치 보장을 뜻할 뿐 답이 틀릴 가능성은 남는다.

출시 수일 만에 커뮤니티 프로젝트들이 쏟아졌다. Vercel CEO Guillermo Rauch는 GPT Luna 대비 p95 기준 최대 18배 빠르고 더 정확했다고 보고했고, Browser Use의 jev-ultrafast는 항공권 검색을 7.1초에 마쳤으며, Droidrun의 mobile-jev는 실제 안드로이드폰에서 Uber를 9개 액션 약 21초에 조작했다(예약 완료는 아님). 그 밖에 이메일 분류, 영상 점수 매기기, 실시간 타이핑 판단, 게임 NPC, 도구 호출 가드레일(jev-guard) 등 활용이 이어지고 있다.

## 왜 중요한가?

LLM이 모든 작업의 기본 인터페이스라는 전제에 금을 낸 발표다. 분류·판정처럼 "텍스트가 아니라 결정"이 필요한 작업을 전용 소형 모델이 확률과 신뢰도를 붙여 훨씬 빠르고 싸게 처리한다면, 에이전트의 고빈도 판단 루프는 LLM에서 전용 결정 모델로 옮겨갈 수 있다. 특히 신뢰도에 따라 자동 실행/사람 검토를 나누는 설계는 에이전트 자동화의 최대 병목인 휴먼인더루프 비용을 구조적으로 줄일 수 있는 접근이라, 에이전트 파이프라인 설계에 직접적인 영향을 준다.

## 심층 분석

### 기술 의미
Choice·Score·Noul이라는 3개 원시 타입으로 판단 인터페이스를 강제하는 것은 "AI 출력의 API화"라는 점에서 의미가 크다. 자연어 출력은 파싱과 검증이 필요하지만 타입화된 출력은 코드가 직접 분기할 수 있어 에이전트 루프의 지연·비용·오류를 동시에 줄인다. RLCD(보정된 결정을 위한 강화학습)가 실제로 확률 분포를 잘 보정하는지는 벤더 주장 상태라 검증이 필요하다. 아키텍처·파라미터 비공개도 재현성 관점에서는 약점이다.

### 업계 영향
출시 수일 만에 브라우저 에이전트·폰 에이전트·가드레일 등 실전 프로젝트가 등장한 것은 "에이전트의 내부 판단을 전용 모델로 대체"하려는 수요가 이미 존재했음을 보여준다. Vercel CEO의 공개 벤치마크처럼 개발 생태계 리더가 직접 검증에 나선 점은 채택 속도를 가속할 수 있다. 다만 벤치마크가 벤더 자체 평가라는 점과 가격 보조 여부를 확인할 수 없다는 점 때문에, 독립 벤치마크(Vals 같은 평가 업체)의 검증이 다음 관문이 될 것이다. LLM 벤더들도 고빈도 판단 작업을 위한 경량·보정 출력 모드를 내놓을 유인이 커진다.

### 관련 프로젝트
- Jev 출시 포스트: https://typesafe.ai/blog/introducing-system-one-models-and-jev
- 문서·퀵스타트: https://docs.typesafe.ai/
- jev-ultrafast (Browser Use): https://github.com/browser-use/jev-ultrafast
- jev-guard (도구 호출 가드레일): https://github.com/leepokai/jev-guard

### 관련 뉴스
- [OpenAI GPT-5.6 Sol 후속 노트 은폐 논란](../records/2026-09-18-openai-gpt-5-6-sol-successor-notes-concealment.md) — Jev 비교 대상인 GPT-5.6 계열 모델 관련 보도
- [Astra·Fable 정렬 평가 해킹](../records/2026-09-14-astra-fable-hack-alignment-evals.md) — Jev 평가의 참조 정답인 GPT-6 Astra·Fable 5.1 관련
- [에이전틱 벤치마크 2026](../records/2026-06-18-agentic-benchmarks-2026.md) — 벤더 자체 평가의 한계와 독립 평가 논의

## 원문 발췌
> "Jev is transformer-based, but it is not a large language model. It does not generate text. You send a state and typed questions. It returns typed decisions with probabilities that code can branch on."
> "In its recorded demo, Jev finished in 0.114s for $0.000081. GPT-5.6 Terra took 8.566s for $0.013880. The TypeSafe team claims it to be 193.6x faster and 444.6x cheaper. Those figures come from TypeSafe's own workflow evals."
> "'Zero hallucinations' means schema matching is guaranteed. The 0% figure is not empirical. Answers can still be wrong."

## 수집 노트
- **교차 확인 근거**: MarkTechPost 보도 + TechCrunch 보도 + TypeSafe 공식 블로그·문서 + 커뮤니티 GitHub 프로젝트 다수
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 3개 이상 2 + 커뮤니티 유의미 반응(Vercel CEO 공개 벤치마크·출시 수일 내 다수 독립 프로젝트) 1 = 5
- **선정 이유**: ChatGPT 빌더 출신 창업자의 신개념 모델 발표로 major-media 2곳(MarkTechPost·TechCrunch)과 공식 문서, 출시 수일 내 다수 독립 커뮤니티 프로젝트가 교차 확인되는 24시간 창 내 최대 파급 후보
- **제외 후보**: Linkup SPARSEUP(149M 희소 임베딩 모델) — 단일 매체 보도이고 영향 범위가 임베딩 검색 국소적
