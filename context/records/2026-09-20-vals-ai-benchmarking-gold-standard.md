# a16z 투자 Vals, AI 벤치마킹의 표준이 되겠다 — 비공개 실무 평가로 차별화

## 메타데이터
- **원문 URL**: https://techcrunch.com/2026/09/19/vals-backed-by-andreessen-horowitz-is-looking-to-become-the-gold-standard-for-ai-benchmarking/
- **소스**: TechCrunch
- **발행일**: 2026-09-19
- **수집일**: 2026-09-20
- **수집자**: 레노버
- **카테고리**: industry
- **태그**: [vals, benchmarking, a16z, model-evaluation, enterprise-ai]
- **소스 권위**: major-media
- **교차 확인**: 3
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> 2024년 창업한 AI 벤치마킹 스타트업 Vals가 지난달 a16z 주도 4천만 달러 시리즈A를 유치했으며, 공개 문제 대신 비공개 테스트로 법률·금융·코딩 등 실무 수행 능력을 평가하는 방식으로 업계 표준을 노린다고 창업자가 TechCrunch에 밝혔다.

## 번역 (한국어)

벤치마킹은 AI 기업들이 모델 능력을 입증하고 경쟁사와 차별화하는 업계 표준이 됐다. 좋은 벤치마크 점수는 곧 좋은 홍보다. 그러나 기업들은 구형 벤치마크 시스템을 속이는 방법을 터득했고, 상당수 벤치마크는 낡아 현대 모델의 능력을 측정하도록 설계되지 않았다.

2024년 창업된 Vals는 이 불완전한 시스템을 고치겠다고 나선다. 시드 라운드를 8VC와 Bloomberg Beta가 주도했고, 지난달에는 급성장 끝에 Andreessen Horowitz가 주도하는 4천만 달러 시리즈A를 유치했다. 공동창업자 라얀 크리슈난(25세)은 팔란티어 인턴과 스탠퍼드 AI 랩 경력을 지녔으며, "빠르게 시장에 나오는 강력한 신모델을 학계 벤치마크가 따라가지 못했다"고 창업 동기를 설명한다.

Vals의 차별점은 두 가지다. 첫째, 테스트 자료를 공개하지 않는다. 공개 문제는 기업이 그 문제로 모델을 학습시켜 "시험 부정행위"를 할 수 있기 때문이다. 둘째, 일반 지식이 아니라 법률·금융·코딩 같은 특정 산업의 복잡한 실무 과제 수행 능력을 평가한다. 크리슈난은 "모델이 각 도메인에서 인간과 같은 품질의 결과물을 만드는 일을 할 수 있는가"를 본다고 하며, 긍정적 결과뿐 아니라 "모델이 세상을 헤집고 다니면 어떤 부정적 결과가 생길지"도 분석한다고 한다.

측정 영역도 넓어지는 중이다. 재귀적 자기개선 벤치마크를 보유하고 있으며, 정신건강·사이버보안·생물안전, 심지어 제네바 협약 적용 같은 무력충돌법까지 다루는 중이라고 크리슈난은 밝혔다. 기업이 모델 시험을 위해 Vals에 돈을 지불하는 구조인데, 그는 이를 학생이 칼리지보드에 SAT 응시료를 내는 것에 비유했다. Vals의 매출은 작년의 8배가 됐고, 직원은 연초 8명에서 25명으로 3배 늘었으며 10~15명을 추가 채용할 계획이다. 연방기관에 모델 평가를 제공하는 프로그램도 최근 출시했다. 크리슈난은 "AI 기업들이 상장되면서(Anthropic 올해 예정, OpenAI 곧) 우리가 하는 평가가 공시·투자 판단의 중심이 될 것"이라고 말한다.

## 왜 중요한가?

"모델이 정말 광고만큼 잘하는가"를 검증하는 독립 평가 산업이 본격 성장하고 있다는 신호다. 벤더 자체 벤치마크의 한계가 드러날수록(이번 주 Jev의 자체 평가 논란처럼), 구매·투자·규제 판단을 대신해 줄 제3의 평가 기관 수요가 커지는데 Vals는 그 선두 주자다. 비공개 문제로 학습-오염을 차단하고 실무 과제로 측정하는 접근은 벤치마크 신뢰 위기에 대한 하나의 답이기도 하다.

## 심층 분석

### 기술 의미
공개 벤치마크의 근본 약점은 훈련 데이터 오염이다. 테스트가 공개되면 그 문제가 곧 훈련 분포에 흡수돼 점수가 능력과 무관해진다. Vals의 비공개·회전식 테스트 방식은 이 오염을 구조적으로 막지만, 동시에 평가 자체가 검증 불가능해진다는 트레이드오프를 안는다. 평가의 공정성을 보장하는 주체의 독립성이 시스템 전체 신뢰의 관문이 된다. 또한 "도메인 실무 과제" 평가는 정적 정답 대신 결과물 품질을 비교해야 하므로, 루브릭 설계와 평가자(인간+모델) 신뢰도 문제가 기술적 난제로 남는다.

### 업계 영향
크리슈난의 말대로 AI 기업의 상장이 본격화되면 공시·실사에서 독립 평가 점수가 재무제표급 근거로 쓰일 수 있다. 이는 평가 산업에 대규모 수익원을 열어주는 동시에, 특정 평가업체의 위상이 시장 지배력으로 직결되는 이해상충 구조도 만든다. 기업이 평가업체에 비용을 지불하는 구조는 시험 응시료에 비유되지만, 평가 결과가 부정적일 때의 중립성 보장이 과제다. 연방기관 프로그램은 정부 조달에서 독립 평가가 필수 요건이 될 가능성을 암시한다.

### 관련 프로젝트
- Vals 공식 사이트: https://www.vals.ai
- 시리즈A 보도 (citybiz): https://www.citybiz.co/article/890247/vals-ai-raises-40m-to-expand-independent-ai-benchmarking/
- Vals 공식 X: https://x.com/ValsAI

### 관련 뉴스
- [에이전틱 벤치마크 2026](../records/2026-06-18-agentic-benchmarks-2026.md) — 기존 벤치마크 체계의 한계에 대한 정리
- [Fable 5.1, Cyphral Distich 암호 해독](../records/2026-09-14-fable-5-1-solves-cyphral-distich-cipher.md) — Vals 블로그를 통해 알려진 모델 평가 사례
- [ByteDance HarnessDev 에이전트 하네스 벤치마크](../records/2026-09-12-bytedance-harnessdev-agent-harness-benchmark.md) — 벤더 중립 평가 시도의 다른 사례

## 원문 발췌
> "Vals doesn't publicly disclose its specific test materials. Instead of measuring an AI model's general knowledge, Vals also evaluates models on their ability to complete complex tasks associated with specific industries like law, finance, and coding."
> "'What we're doing is actually looking at what are the real impacts of the models,' said Krishnan. 'Can they do work that produces a product of the same quality as a human within every domain?'"
> "The startup recently revealed that its revenue is currently eight times what it was last year. Its staff is also growing. Vals, which started the year with only eight people, has already tripled to a team of 25."

## 수집 노트
- **교차 확인 근거**: TechCrunch 인터뷰 보도 + citybiz 시리즈A 보도 + Vals 공식 X·Bloomberg 2024 창업 보도
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 3개 이상 2 = 4
- **선정 이유**: a16z 주도 시리즈A(타 매체 보도로 교차 확인)와 독립 벤치마크 산업 성장이라는 구조적 흐름을 대표하는 24시간 창 내 major-media 심층 보도
- **제외 후보**: Petlibro AI 반려동물 급식기 — 소비재 하드웨어 리뷰로 에이전트 생태계 직접성 낮음, AI 안전 대화 바이럴 칼럼 — 사실 보도가 아닌 논평 성격
