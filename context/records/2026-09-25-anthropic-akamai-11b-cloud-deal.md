# Anthropic, Akamai와 7년 116억 달러 클라우드 계약 — CPU 인프라 최대 규모 딜

## 메타데이터
- **원문 URL**: https://techcrunch.com/2026/09/25/anthropic-to-pay-akamai-11-6-billion-over-seven-years-in-cloud-deal/
- **소스**: TechCrunch
- **발행일**: 2026-09-25
- **수집일**: 2026-09-26
- **수집자**: 레노버
- **카테고리**: industry
- **태그**: [anthropic, akamai, cloud, infrastructure, cpu]
- **소스 권위**: major-media
- **교차 확인**: 4
- **교차 확인 근거**: Akamai IR 보도자료, Bloomberg, WSJ, TechCrunch
- **중요도**: ⭐⭐⭐⭐
- **중요도 산정**: 1 + major-media(1) + 교차 확인 4건(2) = ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Anthropic이 7년에 걸쳐 Akamai 클라우드 인프라에 116억 달러를 지출하기로 했다. Akamai 역사상 최대 규모 계약으로, 지난 5월 보도된 18억 달러 딜의 6배 이상이며 AI 인프라 수요가 GPU를 넘어 CPU로 확장되고 있음을 보여준다.

## 번역 (한국어)
Akamai가 목요일 공식 발표한 바에 따르면, Anthropic은 7년간 116억 달러를 Akamai 클라우드 인프라에 지출한다. 이는 지난 5월 Bloomberg가 보도한 양사 간 18억 달러 규모 딜의 6배가 넘는 금액이다. 다만 약속이 철석은 아니다 — Akamai의 증권 신고서에 따르면 인도·서비스 가용성 요건 충족을 전제로 하며, 일정 조건에서 어느 쪽이든 계약을 끝낼 수 있다.

이 딜은 Akamai 역사상 최대 규모이며, Anthropic의 컴퓨팅 확보 행진이 이어지고 있음을 보여준다. 특이한 점은 덜 주목받던 인프라 영역인 CPU에 대한 베팅이라는 것이다. TechCrunch는 범용 칩인 CPU 수요가 AI 에이전트가 더 많은 작업을 맡으면서 성장했다고 전하며, 다만 Akamai는 Anthropic이 CPU를 정확히 무엇에 쓸지 밝히지 않았다고 전했다.

대가의 구조도 이례적이다. Akamai는 Anthropic에 행사주(warrant)를 발행했다 — 주당 111.33달러에 최대 770만 보통주(발행주식의 약 5%)로 전환 가능한 무의결권 우선주 매입 권리다. 첫 지급 시점에 약 2%가 베스팅되고, 나머지는 Anthropic의 지출 확대에 연동된다. 30억 달러를 추가 약정할 때마다 약 1%씩 열리므로, 딜은 최대 90억 달러 더 불어나 총 200억 달러까지 성장할 수 있다. 공급자가 고객에게 지분을 주는 구조는, 통상 공급자(칩·클라우드)가 AI 랩에 투자하는 '순환 딜' 패턴을 뒤집은 것으로, AMD가 작년 OpenAI와 맺은 유사 구조를 연상시킨다.

재무적 효과는 시차를 두고 나타난다. Akamai는 올해는 이 딜의 매출이 없으며, 2027년 하반기부터 1억 5천만~3억 달러, 2028년 말까지 연간 약 17억 달러 속도에 도달할 것으로 전망했다. 이를 위해 Akamai는 약 55억 달러를 투자하고, 메모리 등 부품을 미리 사들이기 위해 올해 자본 지출에 17억 달러를 추가한다. 발표 직후 Akamai 주가는 시간외 거래에서 최대 17% 상승했다.

## 왜 중요한가?
AI 인프라 경쟁이 GPU 데이터센터를 넘어 CPU·엣지 네트워크로 확장되고 있음을 보여주는 신호다. 에이전트가 코드 실행·웹 작업 같은 범용 워크로드를 대신하면서 범용 칩 수요가 커진다는 흐름이 최대 규모 계약으로 확인됐다. 공급자가 고객에게 지분을 주는 뒤집힌 순환 딜 구조는 AI 산업의 자금 순환이 얼마나 창의적(그리고 위험할 수 있는) 방식으로 얽혀 있는지 보여준다.

## 심층 분석

### 기술 의미
에이전트 워크로드는 학습이 아니라 추론·도구 호출·샌드박스 실행 중심이며, 이는 GPU 밀도보다 지리적 분산·저지연·범용 연산이 중요한 인프라를 요구한다. Akamai가 CDN·엣지 네트워크 사업자라는 점은 '에이전트 실행을 사용자 근처 엣지로' 가져가는 배치 전략의 가능성을 시사한다 — 다만 계약 용도가 공개되지 않았으므로 이는 해석 영역이다. 행사주의 지출 연동 구조는 컴퓨팅 약정을 장기 매출로 증명하는 새로운 금융 공학 사례로 기록될 것이다.

### 업계 영향
Anthropic의 컴퓨팅 포트폴리오(Amazon, Google, Microsoft, AMD, Nscale에 이어 Akamai)는 특정 클라우드 종속을 피하는 다변화 전략을 보여주며, IPO를 앞둔 회사의 매출 확보(컴퓨팅 공급 확보) 경쟁을 가속한다. Akamai 같은 2티어 인프라 업체가 AI 수요로 재평가되는 흐름은 업계 지형 재편의 신호다. 한편 '순환 딜' 비판론자들은 공급자 지분·매출이 맞물린 딜이 실수요인지 투기적 과열인지 구분하기 더 어려워졌다고 지적할 것이다 — Akamai의 증권 신고서가 조건부 해지 조항을 인정한다는 점은 그런 우려에 재료가 된다.

### 관련 프로젝트
- [Akamai IR 보도자료: $11.6 Billion Multi-Year Agreement with Anthropic](https://www.ir.akamai.com/news-releases/news-release-details/akamai-announces-116-billion-multi-year-agreement-anthropic)

### 관련 뉴스
- [2026-09-25-oracle-stargate-force-majeure-new-mexico.md](2026-09-25-oracle-stargate-force-majeure-new-mexico.md) — AI 인프라 확장의 리스크 측면
- [2026-09-23-anthropic-claude-opus-5-5-release.md](2026-09-23-anthropic-claude-opus-5-5-release.md) — 같은 주 Anthropic 모델 발표

## 원문 발췌
> "Anthropic will spend $11.6 billion over seven years on Akamai's cloud infrastructure, Akamai said Thursday. That's more than six times the size of a $1.8 billion deal between the two companies that Bloomberg reported in May." (TechCrunch)
>
> "The deal is the largest in Akamai's history and continues Anthropic's compute gobbling-streak." (TechCrunch)
>
> "Akamai issued Anthropic a warrant ... for nonvoting preferred stock convertible into 7.7 million common shares, or up to about 5% of the company's outstanding stock, at $111.33 a share." (TechCrunch)
>
> "Akamai shares rose as much as 17% in after-hours trading on Thursday, The Wall Street Journal reported." (TechCrunch)

## 수집 노트
- **선정 이유**: Akamai IR 보도자료·Bloomberg·WSJ로 교차 확인되는 역대급 인프라 딜이며, 에이전트 워크로드가 CPU 수요를 키운다는 업계 구조 변화를 보여주는 오늘 최대 산업 뉴스이기 때문.
- **제외 후보**: Nscale 33.6억 달러 전환사채 유치 — 같은 컴퓨팅 공급망 테마로 중복, 본 딜이 규모·구조 면에서 우위 / Anthropic 창업자 의결권 50.1% 요청 — 기업지배구조 이슈로 산업 인프라 맥락 대비 우선순위 낮음.
