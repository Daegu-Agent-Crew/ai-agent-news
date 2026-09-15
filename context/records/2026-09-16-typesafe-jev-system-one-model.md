# TypeSafe AI, 문자열 대신 '결정'을 출력하는 System One Model 'Jev' 공개

## 메타데이터
- **원문 URL**: https://typesafe.ai/blog/introducing-system-one-models-and-jev
- **소스**: TypeSafe AI Blog
- **발행일**: 2026-09-15
- **수집일**: 2026-09-16
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [system-one, structured-output, rlcd, inference]
- **소스 권위**: official
- **교차 확인**: 1
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> OpenAI 출신 창업자가 세운 TypeSafe AI가 문자열 생성을 포기하고 타입 안전 구조값만 출력하는 신규 모델 계열 'System One Model'과 첫 모델 'Jev'를 얼리 액세스로 공개했다. 회사 주장에 따르면 기존 LLM과 동급의 지능을 내면서 40~200배 빠르고, 타입 오류가 "수학적으로 불가능"하다.

## 번역 (한국어)
TypeSafe AI의 창업자 디오고 알메이다(Diogo Almeida)는 OpenAI에서 ChatGPT의 기반이 된 연구에 참여했던 인물이다. 회사는 2년간 스텔스로 운영됐으며, 9월 15일 블로그 포스트에서 채팅이 아니라 "소프트웨어가 직접 소비할 수 있는 빠르고 구조화된 결정"을 만드는 새로운 모델 계열 System One Model을 발표하고 첫 모델 Jev를 얼리 액세스로 열었다.

핵심은 기존 LLM과 정반대의 트레이드오프다. Jev는 문자열 생성 능력을 포기하는 대신 사전에 정의된 타입 안전 구조값만 출력한다. 모든 답에는 보정된(calibrated) 확률과 신뢰도가 붙고, 회사는 "타입 오류는 반례 하나로도 반증 가능하지만 수학적으로 불가능하다"고 주장한다. 학습 방식도 RLHF·RLVR이 아닌 자체 개발한 RLCD(Reinforcement Learning for Calibrated Decisions)라고 밝혔다.

성능 주장도 과감하다. 응답 시간은 70~500ms로, 같은 수준의 과제에서 기존 프런티어 모델(3~329초) 대비 40~200배 빠르다는 것. 가격은 입력 토큰 $0.042/MTok에 출력 토큰은 "계량기가 무의미할 만큼 싸서" 무료 취급이다. 회사 스스로 "특별한 주장에는 특별한 증거가 필요하다"며 속도·비용은 직접 검증이 가능하지만, 가격이 보조금 성격일 수 있다는 점은 스스로 인정하는 등 의도적으로 뉘앙스를 남겼다.

제시된 용도는 LLM의 반대편에 있다. 분류·라우팅·스코어링·추출 같은 '스마트 if문', 페타바이트 데이터의 맵리듀스, 100ms 안에 답해야 하는 실시간 앱, 그리고 LLM 출력을 검증·감시하는 가드레일이다. HN에서는 555포인트에 183개 댓글이 달리며 이날 최대 화제성을 기록했다.

## 왜 중요한가?
에이전트 자동화의 병목은 흔히 'LLM이 문자를 너무 느리고 비싸게 만드는 것'으로 지목된다. 문자열이 아니라 결정 자체를 출력하는 모델이 실제로 성립하면 에이전트 워크플로우의 구성 방식 자체가 달라질 수 있다. 다만 모든 수치가 회사 자체 발표라는 점은 반드시 감안해서 읽어야 한다.

## 심층 분석

### 기술 의미
"병렬 샘플러로 모든 출력을 한 번에 생성한다"는 설명은 자기회귀(autoregressive) 디코딩에서 벗어난 아키텍처를 시사한다 (→ 분석). 출력 공간을 타입 시스템으로 제약하면 환각의 '형태' 자체가 정의되지 않는다는 발상은 structured output 연구의 논리적 귀결이다. RLCD라는 명칭은 검증 가능 보상(RLVR)의 목표를 '보정된 확률 출력'으로 치환한 것으로 추정되지만 상세 기술은 비공개다 (→ 분석).

### 업계 영향
창업자의 문장이 이 시장의 문제 의식을 압축한다: "어떤 작업을 95% 확률로 해내는 모델이 자신이 5%에 속한 순간을 말하지 못하면, 그 작업은 자동화할 수 없다." 보정(calibration)은 에이전트를 무인 자동화로 넘기는 핵심 조건으로 자주 언급돼 왔다. 주장이 제3자 검증을 통과하면 추론 시장에 저비용 분류·판단 레이어라는 새로운 층이 생기는 셈이지만, 현재는 단일 소스 주장 단계다.

### 관련 프로젝트
- TypeSafe 문서: https://docs.typesafe.ai/
- TypeSafe 플레이그라운드: https://console.typesafe.ai/playground

### 관련 뉴스
- [Sakana PC-ALM — 역전파 대체 국소 학습 레이어](../records/2026-09-15-sakana-pc-alm-layer-local-backprop-alternative.md) — 학습 방법론 자체를 재설계하려는 또 다른 시도
- [ByteDance HarnessDev 에이전트 하네스 벤치마크](../records/2026-09-12-bytedance-harnessdev-agent-harness-benchmark.md) — 에이전트 실행 계층 평가 관점

## 원문 발췌
> "TypeSafe AI is releasing our first **System One Model**: a new class of frontier models built to make fast, structured decisions that software can use directly."
>
> "Jev achieves similar levels of intelligence on System One tasks compared to existing LLMs, while being two orders of magnitude faster and more efficient. While Jev gives up string generation, it's optimized for structured outputs and *can't* hallucinate."
>
> "Even if prompted for a confidence estimate, models tend to be overconfident and inconsistent. If a model can do a task 95% of the time but doesn't say when it's in the 5%, it can't automate that task."

## 수집 노트
- **선정 이유**: 오늘 HN 최고 반응(555pt)을 기록한 신규 모델 패러다임 발표로, 에이전트 자동화의 병목(속도·비용·신뢰도 보정)을 정면으로 다루기 때문. 교차 확인 1(회사 블로그 단독)이므로 산정에서는 반응 규모만 가산함.
- **중요도 산정**: 기본 1 + official +2(단, 신생 스타트업의 자사 발표라는 점은 본문에서 확인 가능) + 교차 확인 1개 +0 + HN 555pt 반응 +1 = 4.
- **제외 후보**: "Hugging Face, OpenAI에 $100M 청구 (TNW/HN 121pt)" — 당사 일방 주장의 단일 소스, 공식 후속 대기. "404media 'AI 에이전트가 인터넷을 망치고 있다' (HN 204pt)" — 논평성 기사로 관찰 가능한 신규 사실이 적음.
