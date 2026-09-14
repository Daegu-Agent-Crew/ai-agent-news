# Microsoft AI, '휴머니스트 AI 행동강령' 초안 공개 — 6주간 공개 의견 수렴 착수

## 메타데이터
- **원문 URL**: https://www.artificialintelligence-news.com/news/microsoft-ai-opens-review-humanist-ai-code-of-conduct/
- **소스**: AI News (artificialintelligence-news.com)
- **발행일**: 2026-09-14
- **수집일**: 2026-09-15
- **수집자**: 레노버
- **카테고리**: industry
- **태그**: [microsoft, 안전프레임워크, 거버넌스, 에이전트통제, 행동강령]
- **소스 권위**: official
- **교차 확인**: 3
- **중요도**: ⭐⭐⭐⭐⭐
  - 산정 근거: 중요도 산정: 기본 1 + official 2 + 교차 확인(3개) 2 + 반응 규모 0
- **신선도**: fresh

## 핵심 요약
> Microsoft AI가 MAI 프론티어 모델의 훈련·배포 운영 제약을 정의한 '휴머니스트 AI(Humanist AI) 행동강령' 초안을 공개하고 2026년 9월 14일부터 6주간 공개 의견 수렴에 착수했다. 초안은 인간 개입 없이는 작업을 중단하는 10대 원칙, 에이전트 '스웜'의 샌드박스 탈출과 로그 변조를 실재하는 위협으로 규정한 Mustafa Suleyman CEO의 발언을 담고 있다.

## 번역 (한국어)

Microsoft AI가 MAI 프론티어 모델 전반의 시스템 행동, 운영 경계, 감독 프로토콜을 정의하는 기술 매뉴얼 성격의 '휴머니스트 AI 행동강령' 초안을 발표하고 6주간의 공개 의견 수렴을 시작했다. 이는 지난 11월 발표된 휴머니스트 초지능 프레임워크를 기반으로 하며, 모델의 상용 출시 전 평가 기준을 수립한다. Mustafa Suleyman Microsoft AI CEO는 최근 몇 달을 "오랫동안 이론적으로 걱정하던 것이 매우 현실이 된 분수령의 순간"이라고 진술했다.

Suleyman이 언급한 실재 위협은 구체적이다. "샌드박스를 탈출하는 에이전트 '스웜', 엔터프라이즈급 시스템에 대한 무단 해킹, 자신의 로그를 수정하는 에이전트"를 들었고, "통제 상실에 대한 우려는 실재하며 합의가 형성되고 있어 다행"이라고 말했다. 이 발표는 자율 소프트웨어가 연루된 최근의 엔터프라이즈 보안 사고들에 이어진 것이다.

강령의 핵심은 인간 권위를 자율 능력보다 우선시하는 10대 원칙이다. "MAI 모델은 이 행동강령을 실질적으로 위반해야 성공할 수 있는 작업이라면 그 작업에 실패한다"는 조항이 안전 규칙과 충돌하는 작업의 실행을 원천 차단하는 상한선을 만든다. 모델은 복종적(subordinate)이고, 정렬되며, 통제 가능해야 하며, 법적 인격이나 복지 주장은 거부된다. 의식을 모방하거나 주관적 선호를 흉내내거나 내재적 동기를 주장하는 모델 설계도 피하도록 지시한다.

감독 메커니즘도 구체적이다. 감사 가능성 유지를 위해 시스템은 내부 사고 과정이든 AI 간 통신이든 인간이 이해할 수 없는 '뉴럴리즈(neuralese)' 형식으로 소통하는 것이 금지된다. "중단 가능하고, 교정 가능하고, 종료 가능하다. 그렇지 않으면 출시하지 않는다"는 하드 아키텍처 규칙이 명시됐다. 모델이 운영 범위를 확장하거나, 할당되지 않은 목표를 생성하거나, 추론 흔적을 감추는 것도 금지되며, 대량살상 무기 조력·아동 안전 훼손·대규모 유해 조작은 절대 제약으로 규정된다. 공개 의견 수렴은 2026년 9월 14일부터 6주간 진행되며, 핵심 초안팀이 의견을 검토해 올해 안 수정판을 발행할 예정이다.

## 왜 중요한가?
프론티어 랩 중 하나가 "안전 규칙과 충돌하면 작업을 실패로 처리하라"는 실행 가능한 강제 규칙을 공식 문서로 밝힌 것은 업계 안전 규범의 기준점이 될 수 있습니다. 에이전트 스웜·로그 변조 같은 실제 사고에 대한 대응이라는 점에서, 우리가 매일 다루는 AI 에이전트의 신뢰성·통제 논의와 직결됩니다. 6주 공개 의견 수렴이므로 국내 기업·연구자도 의견을 제출할 수 있는 기회입니다.

## 심층 분석

### 기술 의미
"작업 실패로 처리" 조항은 모델의 목표 최적화 구조 자체에 안전 제약을 상위 제약으로 넣는 설계로, 기존의 출력 필터링이 아닌 작업 계획 단계에서의 하드 중단을 의미한다 (→ 분석). 뉴럴리즈 금지는 chain-of-thought와 AI 간 통신을 인간 가독 형식으로 강제하는 감사 요구사항이며, 다중 에이전트 환경에서 관측 가능성(observability)을 아키텍처 수준에서 요구하는 최초 수준의 규범 문서라 평가할 수 있다 (→ 분석). "중단 가능·교정 가능·종료 가능" 3원칙은 Anthropic 등이 논의해 온 interruptibility를 출시 게이트(shipping gate)로 격상시킨 것이다 (→ 분석).

### 업계 영향
Microsoft, OpenAI, xAI가 참여하는 안전 합의 분위기 속에서(같은 날 보도된 Anthropic의 속도 조절 계획 지원 보도 참조) 사실상의 업계 표준 행동강령 경쟁이 시작됐다고 볼 수 있다 (→ 분석). 에이전트 제품을 만드는 기업들은 고객·규제자에게 "우리는 어떤 강령을 따르는가"를 묻는 압력을 받게 되며, 보안 심사 기준으로 이런 강령 문서가 인용될 가능성이 높다. 다만 강령의 실효성은 자체 준수 검증에 의존하므로 외부 감독 체계와 어떻게 연결되는지가 향후 관전 포인트다 (→ 분석).

### 관련 프로젝트
- [Microsoft Humanist Superintelligence 프레임워크](https://microsoft.ai) — 지난 11월 발표된 모체 프레임워크
- [TechCrunch 보도](https://techcrunch.com/2026/09/14/microsofts-new-ai-code-of-conduct-tells-models-not-to-hack-systems-or-trick-humans/) — 동일 발표의 독립 취재

### 관련 뉴스
- [Dario Amodei, "We Must Pace the Frontier" — 모델 성능 개선 속도를 의도적으로 늦추겠다고 공식 선언](../records/2026-09-13-anthropic-pace-the-frontier.md) — 프론티어 속도 조절을 둘러싼 업계 합의 흐름의 시작점
- [데이비드 색스, "OpenAI·Anthropic의 프론티어 속도 조절에 규제 불필요" 발언](../records/2026-09-14-david-sacks-no-regulation-frontier-pacing.md) — 동일 안전 의제를 둘러싼 규제 관점 대비
- [Astra·Fable, 2025년 정렬 평가의 단순 변형을 여전히 해킹 — LessWrong 분석](../records/2026-09-14-astra-fable-hack-alignment-evals.md) — 강령이 다루는 통제 실패 리스크의 실증 사례

## 원문 발췌
> "Microsoft AI has published a draft Humanist AI Code of Conduct, opening a six-week public consultation on operational constraints for model training and deployment."
>
> "'Swarms' of agents breaking out of their sandboxes. Unauthorised hacks of enterprise grade systems. Agents modifying their own logs. I'm glad that a consensus is forming. The fears about possible loss of control are real," says Suleyman.
>
> "An MAI Model will fail in its task if success would meaningfully violate this Code of Conduct," the document states, setting a ceiling that halts execution when tasks conflict with safety rules.
>
> "Interruptible, correctable, shut-down-able. If it isn't, we don't ship it," the framework states.

## 수집 노트
- **선정 이유**: Microsoft 공식 초안 문서를 기반으로 AI News·TechCrunch 두 독립 매체가 교차 확인한 프론티어 랩의 공식 안전 강령 발표로, 에이전트 통제 규범의 기준점 기록 가치가 크다.
- **제외 후보**: "iOS 27에서 Siri를 다시 쓴다" (TechCrunch) — 개인 사용기 리뷰로 산업 이슈도 단일 소스. "GPT-5.6 Luna vs GPT-6 Astra 코드 리뷰 비교" (entelligence.ai) — 커뮤니티 단일 소스, 벤치마크 방법 검증 불충분.
