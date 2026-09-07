# 테슬라 FSD 작동 중 정지선 신호 위반 사고로 82세 운전자 사망 — 자체 데이터로 '작동 확인' 후 기록 비공개

## 메타데이터
- **원문 URL**: https://electrek.co/2026/09/07/tesla-driver-assist-stop-sign-buena-vista/
- **소스**: Electrek (via Hacker News)
- **발행일**: 2026-09-07
- **수집일**: 2026-09-08
- **수집자**: 레노버
- **카테고리**: industry
- **태그**: [Tesla, FSD, Autopilot, NHTSA, autonomous-driving, safety, transparency]
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> 2025년 7월 뉴저지에서 테슬라 모델 3가 정지선을 무시하고 교차로에 진입해 만나는 차의 82세 운전자가 사망했는데, 경찰 발표는 단순 인적 사고였다. 그러나 Electrek이 NHTSA 보고서를 대조한 결과 테슬라 자체 데이터가 주행보조 시스템 '작동 확인(Verified Engaged)'을 기록했음이 드러났고, 사고 설명이 될 서술·소프트웨어 버전·주행 영역 필드는 영업비밀로 가려져 있다.

## 번역 (한국어)
2025년 7월 6일 저녁, 미국 뉴저지주 부에나비스타 타운십의 교차로에서 테슬라 모델 3가 정지선을 통과하지 않고 좌회전 중이던 혼다 시빅을 들이받았다. 시빅을 몰던 82세 스티븐 필드는 숨졌고, 테슬라 탑승자 4명도 중상을 입어 병원으로 옮겨졌다. 당시 지역 언론은 "정지선을 무시한 차량 사고"로 짧게 보도했을 뿐, 오토파일럿이나 '풀 셀프 드라이빙(FSD)' 같은 주행보조 시스템 언급은 없었다. 대중이 아는 한 평범한 인적 실수 사고였다.

그러나 그렇지 않았다. 미국 도로교통안전국(NHTSA)의 상시 명령(Standing General Order)에 따라 레벨 2 주행보조 시스템이 작동한 지 30초 이내 사고는 제조사가 보고해야 하는데, 테슬라는 이 건을 보고하면서 2019년식 모델 3로 특정하고 자동화 '작동 상태(Engagement Status)'를 '작동 확인됨(Verified Engaged)'으로 표기했다. 즉 테슬라 자체 텔레매틱스로 시스템이 켜져 있었음을 확인한 것이다. 보고서에는 사망자가 기록됐고, 테슬라가 사고 기록 장치(EDR)와 텔레매틱스 데이터를 보유하고 있다고 명시됐다.

문제는 그 다음이다. 사고 경위를 설명할 세 필드 — 충돌 서술, 소프트웨어 버전, 도로가 시스템의 승인 주행 영역(ODD) 안이었는지 여부 — 가 모두 '영업비밀'로 검은 띠에 가려졌다. Electrek에 따르면 이는 테슬라가 보고서 99.9%에 적용하는 동일한 가림 처리다. 소프트웨어 버전이 가려져 기본 오토파일럿인지 FSD인지 단정은 불가능하지만, 정지선 인지·정지 판단은 '시티 스트리트' 기능이고 기본 오토파일럿은 고속도로 차선 유지 시스템이라 정지선에 반응하지 않는다. 정지선에서 작동 확인된 차라면 대부분 FSD였을 가능성이 높다는 것이 Electrek의 분석이다.

보고서의 한 숫자는 의문을 남긴다. 충돌 직전 속도가 시속 4마일(약 6km/h)로 기록됐는데, 이는 완전 정지 대신 서서히 통과하는 '롤링 스톱' 패턴과 부합한다. 2022년 NHTSA가 FSD 차량 약 5만 4천 대를 정지선 롤링 스톱 때문에 리콜하게 했던 바로 그 행동이다. Electrek은 이번 건을 충돌 사고를 가려진 NHTSA 데이터와 대조하는 지속 조사의 일부로 다루고 있으며, 테슬라는 현재 이런 사고 보고 방식 자체에 대해서도 NHTSA 조사를 받고 있다.

## 왜 중요한가?
'완전 자율주행'이라는 이름을 팔면서도 법적 책임은 운전자에게 남는 레벨 2 시스템의 위험 격차가 실제 사망 사고로 이어졌는지를, 제조사 자체 데이터가 확인해준 첫 사례 중 하나다. 공공 안전과 직결된 사고 설명이 영업비밀로 가려지는 관행은 자율주행 기술에 대한 사회적 신뢰와 규제 방향 전체에 영향을 미친다. AI 의사결정 시스템의 투명성 논쟁이 자동차 산업에서 어떻게 전개되는지 보여주는 지표적 사건이다.

## 심층 분석

### 기술 의미
정지선 처리는 FSD의 도심 주행(City Streets) 스택이 담당하는 기능이라는 점에서, 이번 사고는 '고속도로 전용 보조 시스템'과 '도심 자율주행'의 기술적 경계가 실제 도로에서 어떻게 흐려지는지 보여준다. 시속 4마일의 충돌 직전 기록은 2022년 리콜로 이어졌던 롤링 스톱 행동 패턴과 유사해, 비전 기반 정지 판단 로직의 근본적 취약점이 여전히 남아 있을 가능성을 제기한다. NHTSA 상시 명령이 '작동 여부'만 강제하고 사고 서술·소프트웨어 버전·ODD 공개는 강제하지 않는 구조적 빈틈도 기술 거버넌스 관점에서 핵심이다. 텔레매틱스 데이터를 제조사가 독점적으로 해석·보유하는 현 구조에서는 제3자 검증이 사실상 불가능하다.

### 업계 영향
'FSD/로보택시'를 둘러싼 경쟁이 치열해진 시점에서, 이번 보도는 소비자 신뢰와 규제 압박 양면에서 테슬라의 자율주행 사업에 직접적인 리스크가 된다. NHTSA가 이미 사고 보고 방식에 대해 테슬라를 조사 중인 만큼, 가림 처리에 대한 추가 규제(사고 데이터 공개 의무 강화)로 이어질 경우 자율주행 업계 전체의 데이터 공개 표준이 바뀔 수 있다. 로보택시·자율주행 스타트업에게는 '레벨 2 브랜딩 남용이 만드는 시장 전체의 신뢰 비용'이라는 역풍이면서, 동시에 '투명성을 차별화로 삼을 기회'이기도 하다. 보험·법률 시장에서는 텔레매틱스 데이터 접근권 분쟁이 늘어나고, 사고 데이터 검증을 위한 독립적 분석 인프라에 대한 수요가 커질 것이다.

### 관련 프로젝트
- [Electrek — Tesla Autopilot/FSD crash hidden data 조사](https://electrek.co/2026/09/01/tesla-autopilot-fsd-crashes-hidden-data/)
- [NHTSA Standing General Order 사고 보고 데이터베이스](https://www.nhtsa.gov/laws-regulations/standing-general-order-crash-reporting)

### 관련 뉴스
- [트래비스 캘러닉 Atoms 로보택시 진출](2026-09-07-atoms-robotaxi-kalanick.md) — 자율주행 상용화 경쟁이 뜨거워진 가운데 나온 안전 논란
- [2026년 6월 AI 모델 전쟁](2026-06-24-june-2026-ai-model-war.md) — 물리 세계 AI 신뢰성 경쟁의 맥락

## 원문 발췌
> Tesla filed a report on this one. In it, Tesla identifies the car as a 2019 Model 3 and marks the automation "Engagement Status" as "Verified Engaged" — meaning it confirmed through its own telematics that the system was active.
> A stop sign is not complicated. Whether a self-driving system read it and rolled through it anyway is exactly the kind of thing the public, the family, and the troopers still investigating this deserve to know.
