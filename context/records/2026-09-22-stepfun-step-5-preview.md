# 스텝퍼널, 에이전트 장기과제용 MoE "Step 5 Preview" 공개 — 600B·1M 컨텍스트·10월 오픈웨이트 예고

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/09/20/stepfun-launches-step-5-preview/
- **소스**: MarkTechPost
- **발행일**: 2026-09-20
- **수집일**: 2026-09-22
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [stepfun, moe, long-context, agentic-ai, pricing, open-weights]
- **소스 권위**: major-media
- **교차 확인**: 3
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> 중국 스텝퍼널(StepFun)이 소프트웨어 엔지니어링·전문 지식노동·금융을 겨냥한 에이전트용 플래그십 모델 Step 5 Preview를 공개했다. 총 600B·토큰당 27B 활성의 MoE 구조에 1M 토큰 컨텍스트를 갖추고, 입력 100만 분의 1달러(캐시 히트 $0.05)·출력 $2.70의 저가 요금을 내세우며, 오픈웨이트는 2026년 10월 15일 예정이다.

## 번역 (한국어)

스텝퍼널이 에이전트 작업용 신규 플래그십 Step 5 Preview를 공개했다. 대상 워크로드는 소프트웨어 엔지니어링, 전문 지식노동, 금융이다. 핵심 무기는 비용으로, 팀은 "비슷한 지능을 실질적으로 낮은 과제 비용으로" 전달한다는 파레토 프론티어 프레임을 내걸었다. 호스팅 API와 스텝퍼널 플랫폼에서 바로 쓸 수 있고, 셀프호스팅용 오픈웨이트는 10월 15일에 공개된다. 600B 파라미터는 BF16 기준 KV 캐시 제외 약 1.2TB로, 공개되면 멀티GPU 서버 하드웨어가 필요하다.

Step 5 Preview는 희소 Mixture-of-Experts 모델로, 약 600B 총 파라미터 중 토큰당 약 27B(전체의 약 4.5%)만 활성화한다. 공식 문서 기준 스펙은 모델 ID step-5-preview, 1M 토큰 컨텍스트, 텍스트·이미지·비디오 입력, 텍스트 출력, low/medium/high 추론 노력 단계, 스트리밍·도구 호출·JSON 모드·JSON 스키마·프롬프트 캐싱 지원이다. 팀은 단일 에이전트 행동에서 웹 페치 950회를 조율했다고 기록했으며, Step Plan을 통한 Claude Code 통합도 문서화했다.

아키텍처는 네트워크를 넓히지 않고 92개 트랜스포머 레이어를 쌓은 좁고 깊은(narrow-deep) 배치다. 팀은 깊은 스택이 암묵적 멀티홉 추론의 긴 경로를 준다고 주장하며, 에이전트가 검색·코드 실행·도구 반환값을 읽는 긴 프리필 구간에서 특히 중요하다고 설명한다. 학습은 온폴리시 장기과정(long-horizon) 강화학습에 기반하고, MoE 라우팅의 비트 단위 학습-추론 정렬, MTP-3 스페큘러티브 디코딩, FP8 MoE, KV 캐시 오프로드를 꼽으며 장기 RL에서 3배 이상 종단 간 가속을 보고했다.

벤치마크는 Step 5를 High 노력으로, 경쟁 모델은 Max로 실행한 결과다. 팀 보고로는 FrontierFinance 66.4(Claude Opus 5 69.7, GPT-6 Astra 55), DRACO 83.3(Opus 5 87.6, GPT-6 Astra 76.8)이며, 코딩 3개 벤치마크(DeepSWE v1.1 67.7, 자체 StepCodeBench 49.0, ProgramBench 80.5)에서는 GPT-6 Astra와 Opus 5가 모두 앞선다. 24시간 에이전트 실험 2건에서 H100 커널을 508 TFLOPS로 튜닝(Opus 5는 493)했고, Qwen3-30B-A3B를 AIME24 53.3%→60%로 자동 후학습시켰다고 밝혔다. 독립 평가로는 Artificial Analysis가 지능 지수 44점(유사 가격대 추론 모델 중앙값 24)을 매기고 출력 속도 99.8 토크넷/초를 측정했다. 다만 지수 실행에서 1.6억 출력 토큰(중앙값 9,200만)을 생성해, 길어진 추론이 토큰당 절감의 일부를 잠식한다는 해석이 붙는다.

## 왜 중요한가?

1M 컨텍스트와 토큰당 27B 활성 설계로 "길고 긴 에이전트 작업"을 최상위 모델 대비 1/4 수준 가격에 처리하겠다는 발표입니다. 특히 오픈웨이트 공개를 10월 15일로 예고해, Claude·GPT급 에이전트 모델을 자체 서버에서 돌릴 수 있는 선택지가 처음 생길 수 있다는 점에서 에이전트 구축 비용 구도를 바꿀 수 있는 소식입니다.

## 심층 분석

### 기술 의미
좁고 깊은 92레이어 스택이 장기 멀티홉 추론에 유리하다는 주장은 깊이가 암묵적 추론 경로를 늘린다는 최근 아키텍처 논쟁의 연장선으로, 1M 컨텍스트 프리필 시 KV 캐시 관리(MTP-3 스페큘러티브 디코딩, FP8 MoE, KV 오프로드)가 실제 비용 우위의 기반임을 보여준다(→ 분석). 비트 단위 학습-추론 정렬을 명시한 것은 MoE 라우팅 불일치가 장기 RL 성능을 갉아먹는 실무 문제를 겨냥한 것으로 읽힌다(→ 분석). Artificial Analysis 독립 점수 44는 자체 벤치마크 수치와 별개로 참조할 수 있는 유일한 외부 기준이다.

### 업계 영향
입력 $1.00·출력 $2.70 요금표와 Artificial Analysis 중앙값($1.88/$10.00) 대비 프리미엄 구도는 프런티어급 에이전트 모델의 가격 바닥을 다시 끌어내릴 압력이 된다. 오픈웨이트가 10월 15일 실제 공개되면, 기업이 데이터를 밖으로 보내지 않고 프런티어급 에이전트를 운영할 수 있어 하이브리드 배포 수요가 커질 것이다(→ 분석). 다만 자체 벤치마크(StepCodeBench, FrontierFinance) 중심의 비교와 950회 웹 페치 같은 수치는 벤더 보고로 분류해야 하며, 실무 채택 판단은 독립 벤치마크 재현 여부에 달려 있다(→ 분석).

### 관련 프로젝트
- 공식 소개: https://www.stepfun.com/step-5-preview
- 공식 문서: https://platform.stepfun.ai/docs/en/guides/models/step-5-preview
- Artificial Analysis 독립 평가: https://artificialanalysis.ai/models/step-5

### 관련 뉴스
- [딥시크 V4 Flash, 에이전틱 코딩 강화](../records/2026-08-01-deepseek-v4-flash-0731-agentic-coding-gains.md) — 중국 연구소의 저가 에이전트 모델 경쟁 흐름
- [AWS Strands Harness 공개](../records/2026-09-22-aws-strands-harness.md) — 같은 날 공개된 에이전트 실행 계층의 비용 경쟁

## 원문 발췌
> "StepFun has released Step 5 Preview, its new flagship model for agentic work. The target workloads are software engineering, professional knowledge work, and finance. The main pitch is cost. StepFun team states the model delivers comparable intelligence at a substantially lower task cost."
> "Step 5 Preview is a sparse Mixture-of-Experts (MoE) model. It holds about 600B total parameters and activates about 27B per token. ... Artificial Analysis ... scores Step 5 Preview at 44 on its Intelligence Index. The median for reasoning models in a similar price tier is 24."
> "Not yet. StepFun schedules open weights for October 15, 2026."

## 수집 노트
- **중요도 산정**: major-media(1) + 교차 확인 3 — Artificial Analysis 독립 평가 포함(1.5) + 반응 규모 중간(1) = 3.5 → ⭐⭐⭐⭐
- **선정 이유**: 공식 문서·Artificial Analysis 독립 평가까지 3개 소스로 확인되는 신규 에이전트 플래그십 릴리스로, 오픈웨이트 예고가 에이전트 배포 비용 구도에 미치는 파급을 기록하기 위해 선정했다.
- **제외 후보**: TechCrunch "Meta's Muse outpacing ChatGPT" — Muse 차단 레코드에 통합. "Where will the next breakout startup come from (Benchmark)" — Disrupt 행사 패널 미리보기로 뉴스성 낮음.
- **교차 확인 근거**: MarkTechPost 보도(1) + StepFun 공식 문서(2) + Artificial Analysis 독립 측정(3). 성능 수치 다수가 벤더 보고이며, 독립 수치는 지능 지수 44·99.8 tok/s뿐임을 명시.
