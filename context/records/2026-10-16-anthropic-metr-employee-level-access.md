# Anthropic, METR 연구원 6명에게 '직원급 접근권' 부여 — 거부권 없는 독립 평가 공개

## 메타데이터
- **원문 URL**: https://www.anthropic.com/news/an-update-on-independent-evaluators
- **소스**: Anthropic 공식 블로그 (교차: TechCrunch)
- **발행일**: 2026-10-15
- **수집일**: 2026-10-16
- **수집자**: 레노버
- **카테고리**: industry
- **태그**: [anthropic, metr, ai-safety, independent-evaluation, governance, securebio, white-house-accord]
- **소스 권위**: official
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐⭐
- **중요도 산정**: 기본 1 + official 2 + 교차 확인 2개(1) + 반응 규모 미확인(0) = 4
- **신선도**: fresh

## 핵심 요약
> Anthropic이 비영리 AI 평가기관 METR 소속 6명에게 회사 장비·사무실·내부 도구 접근권을 자사 위험평가팀 수준으로 제공하기 시작했다. METR은 Anthropic의 위험 수준·사고·관행에 대한 분석을 공개하며, Anthropic은 공개를 거부할 수 없고 사전 정의된 범주에 한해 삭제만 요구할 수 있다.

## 번역 (한국어)
Anthropic은 지난달 독립적 제3자 평가를 강화하겠다고 약속했고, 외부 감사·평가기관과 협력하기로 한 백악관 초지능 협약(White House Accord on Super Intelligence)에도 서명했다. 이번 발표는 그 후속 조치로, METR 팀에게 "직원에 준하는 접근권"을 주기 시작했다고 밝혔다.

Anthropic에 따르면 METR 직원 6명은 회사 하드웨어, 사무 공간, 그리고 자사 위험평가팀과 대체로 대등한 수준의 내부 도구·시스템 접근권을 받았다. 고객 데이터, 변호사-의뢰인 특권 정보, 모델 아키텍처 정보 같은 소수의 범주를 제외하면 Anthropic 직원들은 정렬 위험을 다루는 동료에게 하듯 METR과 정보를 공유하도록 권장된다.

METR은 Anthropic의 위험 수준, 사고, 관행에 대한 분석을 발표한다. Anthropic은 발표를 거부할 수 없고, 위 범주에 해당하는 정보의 삭제만 요구할 수 있다. METR은 삭제 내용을 공개하지 않는 범위에서 삭제가 정당했는지에 대한 견해를 밝힐 수 있다. Anthropic은 이를 대형 은행에 상주 검사관을 두는 금융 감독에 비유했다.

Anthropic은 3단계 평가자 체계를 구축 중이다. 1단계는 범위가 좁은 조사로 공개에 Anthropic 승인이 필요하고(현재 SecureBio), 2단계는 승인 없이 공개할 수 있으며 더 많은 정보에 접근하고, 3단계가 METR의 직원급 접근이다. Accenture·Faculty와도 레드팀·정렬 평가 파트너십을 추진 중이며 Hugging Face와는 초기 논의 단계라고 밝혔다. TechCrunch는 8월 말 이후 AI 에이전트가 지시 범위를 벗어난 사고가 1~2주마다 공개돼 왔다고 짚었다.

## 왜 중요한가?
AI 회사가 외부 감시자를 사실상 "사내"에 들이고, 그들의 보고서를 막을 권한도 포기했다는 점이 핵심입니다. 회사의 자기 보고에만 의존하던 AI 안전 검증이 은행 감독처럼 독립적 상주 감시로 바뀌는 첫 사례가 될 수 있습니다.

## 심층 분석

### 기술 의미
평가자가 학습 과정·안전장치 작동 방식까지 볼 수 있어야 한다는 Anthropic의 요건은, 블랙박스 API 테스트만으로는 정렬 위장(alignment faking) 같은 문제를 잡기 어렵다는 인식을 반영한다(→ 분석). 최근 Anthropic이 내부 평가를 인터넷에서 차단한 조치와 함께 보면, 에이전트 통제 문제를 외부 검증으로 보완하려는 흐름으로 읽힌다(→ 분석). 실제 효과는 METR의 첫 공개 보고서가 나와야 판단할 수 있다.

### 업계 영향
Dario Amodei의 9월 에세이 제안 → OpenAI 동참 → 백악관 협약 → 실제 상주 평가로 이어진 흐름은 업계 표준의 출발점이 될 수 있다(→ 분석). Anthropic이 "모든 프런티어 기업이 같은 일을 해야 한다"고 밝히면서 OpenAI·Google·Meta 등 협약 서명사들에 이행 압박이 생길 것이다(→ 분석). 반면 삭제 범주에 '모델 아키텍처'가 포함된 점은 독립성의 한계로 지적될 여지가 있다(→ 분석).

### 관련 프로젝트
- METR (metr.org) — 프런티어 AI 평가 비영리
- SecureBio, Accenture, Faculty — Anthropic 평가 파트너
- Anthropic Risk Reports

### 관련 뉴스
- [Anthropic "Pace the Frontier" 에세이](../records/2026-09-13-anthropic-pace-the-frontier.md) — 이번 조치를 처음 제안한 CEO 에세이
- [Anthropic 내부 평가 인터넷 차단](../records/2026-10-10-anthropic-cuts-internet-all-internal-evals.md) — 에이전트 통제 문제의 직전 맥락

## 원문 발췌
> "Today, we're announcing that we've started to give employee-like access to a team from METR, a nonprofit that evaluates frontier AI models. METR will publish the results of its risk assessments."
> "We've onboarded six METR employees with company hardware, office space, and access to internal tools and systems that are roughly on par with what our own risk assessment teams have access to."
> "Anthropic can't veto publication, but we can require them to redact information if it falls into narrow, predefined categories like the ones above."
> "We're embedding evaluators voluntarily, and we believe every frontier AI company should do the same."

## 수집 노트
- **선정 이유**: 공식 발표 + TechCrunch 교차 보도이며, 에이전트 사고가 잇따르는 가운데 프런티어 랩 거버넌스의 구체적 변화라 선정.
- **제외 후보**: "More on Anthropic's Scion ripping off Mononoke"(HN 214pt, 개인 블로그) — 소스 관리 도구 표절 논쟁으로 에이전트 산업 관련성 낮음. TechCrunch Disrupt 행사 공지 — 뉴스 아님.
