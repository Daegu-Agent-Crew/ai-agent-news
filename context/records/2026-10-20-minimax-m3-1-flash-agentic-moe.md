# MiniMax, M3.1 Flash 출시 — 428B MoE 에이전트 모델을 입력 100만 토큰당 $0.15에

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/10/19/minimax-m3-1-flash-release/
- **소스**: MarkTechPost
- **발행일**: 2026-10-19
- **수집일**: 2026-10-20
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [minimax, m3-1-flash, moe, agentic-model, open-weights, pricing]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 1개(0) + 반응 미확인(0) = 2
- **신선도**: fresh

## 핵심 요약
> MarkTechPost에 따르면 MiniMax는 총 428B·활성 약 23B 파라미터의 MoE 모델 M3.1 Flash를 API에 출시했으며, 가격은 100만 토큰당 입력 $0.15·출력 $0.60이다. MiniMax 자체 발표 기준 Automation-Bench v1.0.6에서 62.2로 표 내 최고점을 기록했고, 가중치는 10월 23일 공개 예정이다.

## 번역 (한국어)
MiniMax가 M3.1 Flash를 자사 API에 출시했다. 가격은 입력 100만 토큰당 $0.15, 출력 $0.60으로 장문 컨텍스트 할증이 없으며, 캐시 읽기는 $0.015다. MiniMax는 익명으로 운영되던 스텔스 모델 'Space Bunny'가 M3.1 Flash의 초기 빌드였고, 이 모델이 200조 토큰 이상을 처리했다고 확인했다.

모델은 총 428B·활성 약 23B 파라미터의 멀티모달 MoE로, 텍스트·이미지·영상 입력을 받아 텍스트를 출력하며 컨텍스트 창은 100만 토큰이다. 추론(reasoning)은 항상 켜져 있어 끌 수 없고, Low부터 Max까지 5단계 노력 수준을 고를 수 있다. thinking을 비활성화하는 요청은 오류를 반환하므로 M3에서 넘어오는 통합은 수정이 필요하다.

MiniMax가 공개한 벤치마크에서 M3.1 Flash는 Automation-Bench v1.0.6에서 62.2로 Opus 5(50.3), GPT-5.6 Sol(45.8)을 앞섰다. 반면 Terminal Bench 4.0에서는 38.1로 Opus 5의 51.8에 크게 못 미쳤다. MarkTechPost는 모든 점수가 MiniMax 자체 보고이며 독립 재현은 아직 없다고 명시했다.

배포는 platform.minimax.io에서 Anthropic·OpenAI 호환 방식으로 가능하며, 가중치는 10월 23일 공개되지만 라이선스는 아직 밝혀지지 않았다. MiniMax는 M3 대비 3배 빠른 속도를 주장한다.

## 왜 중요한가?
최상위급에 가까운 '일 처리용 AI'를 아주 싼 값에 쓸 수 있게 되었다는 신호입니다. 다만 성능 수치는 모두 회사가 직접 잰 것이라, 실제로 그만큼 좋은지는 외부 검증을 기다려야 합니다.

## 심층 분석

### 기술 의미
활성 23B로 Opus 5급 에이전트 벤치 점수를 주장하는 것은 MoE 효율화가 '에이전트 사무 작업' 영역에서 빠르게 따라잡고 있음을 시사한다(→ 분석). 추론을 끌 수 없는 설계는 단순 호출에도 토큰·지연의 바닥값을 만든다는 점을 원문도 한계로 지적한다. Automation-Bench 수치가 출처마다 달라(Kimi K3 30.8 vs MiniMax 표 46.7) 하네스 차이에 따른 벤치 비교의 취약성이 드러난다.

### 업계 영향
DeepSeek V4.1 Flash, GLM-5.3 등과 함께 중국계 'Flash' 계열 모델의 가격 경쟁이 에이전트 운영비를 끌어내리는 흐름이다(→ 분석). 가중치가 실제 공개되면 셀프호스팅 에이전트 스택의 선택지가 늘어난다(→ 분석). 반면 하드 코딩(Terminal Bench)에선 여전히 프런티어 폐쇄 모델과 격차가 커 용도별 모델 라우팅이 중요해진다(→ 분석).

### 관련 프로젝트
- MiniMax Platform (platform.minimax.io, MiniMax-M3.1-Flash)
- MiniMax Code 데스크톱 앱

### 관련 뉴스
- [DeepSeek V4.1-Flash 검색 API 공개](../records/2026-10-18-deepseek-v4-1-flash-1017-search-api.md) — 경쟁 Flash 모델

## 원문 발췌
> "MiniMax has just released MiniMax M3.1 Flash on its API, priced at $0.15 per 1M input tokens."
> "MiniMax's product page lists 428B total parameters and about 23B active."
> "On the CoWork set, M3.1 Flash leads Automation-Bench v1.0.6 at 62.2. Opus 5 scores 50.3 and GPT-5.6 Sol 45.8."
> "All scores below are MiniMax-reported. No independent replication exists yet."

## 수집 노트
- **선정 이유**: 에이전트 특화 모델의 가격·성능 기준을 바꿀 수 있는 신규 모델 출시로, 벤더 보고 수치라는 한계를 명시하고 선정.
- **제외 후보**: Mistral Timestral 시계열 모델(MarkTechPost) — 에이전트 관련성 낮음. Tolan $30M 투자(TechCrunch) — 단순 펀딩.
