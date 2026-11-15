# 블랜드, 전이중 음성-음성 모델 Tofu-1 공개

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/11/15/bland-tofu-1-full-duplex-speech-to-speech-model/
- **소스**: MarkTechPost
- **발행일**: 2026-11-15
- **수집일**: 2026-11-16
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [voice-ai, speech-to-speech, full-duplex, bland, tofu-1]
- **소스 권위**: community
- **교차 확인**: 1
- **중요도**: ⭐
- **신선도**: fresh

## 핵심 요약
> 샌프란시스코 음성 AI 회사 블랜드(Bland)가 전이중(full-duplex) 음성-음성 모델 Tofu-1을 리서치 프리뷰로 공개했다. 이 모델은 통화 중 말하면서 동시에 듣고, 텍스트 변환 과정 없이 오디오를 직접 처리한다.

## 번역 (한국어)
블랜드는 이번에 Tofu-1이라는 전이중 음성-음성 모델을 리서치 프리뷰 형태로 내놓았다. 이 모델은 주행 중인 자동차, 병실, 통화 품질이 나쁜 회선 등 열악한 환경의 전화 통화를 목표로 하며, 말하면서 동시에 듣고(듣는 중에도 추론하는) 방식으로 동작한다.

기존 음성 에이전트는 대부분 캐스케이드 방식이다. 음성을 텍스트로 바꾸고, 언어 모델에 넘긴 뒤, 다시 음성으로 합성한다. 반면 Tofu-1은 오디오를 직접 이해하므로 말투, 머뭇거림, 배경음 정보를 잃지 않는다. 블랜드는 내부 아키텍처를 공개하지 않았다.

제품 페이지에는 세 가지 오디오 능력이 정리되어 있다. 화자 추적(누가 말하는지, 누구에게 말하는지 구분), 소음 분리(우는 아이, TV, 고속도로 소음, 병원 안내방송, 키패드 톤에서 목소리 분리), 준언어 정보 인식(머뭇거림·불만·긴급함 감지)이다.

통화자는 Tofu-1이 말하는 도중 끼어들어 정정할 수 있고, 모델은 작업을 처리하는 동안 대화를 유지하며 결과는 완료된 뒤에만 보고한다. 자체 보고 수치로는 스크리닝에서 92% 이상이 AI임을 알아채지 못했다고 하며, 접근은 제한된 기업 대상 프리뷰다.

## 왜 중요한가?
전화 상담, 예약, 콜센터처럼 일상에서 가장 흔한 음성 업무가 AI로 대체되는 속도를 보여준다. 특히 "캐스케이드 없이 음성-음성 직접 처리"라는 점은 자연스러움과 반응 속도의 문턱을 낮춰, 일반인이 AI와 통화한다는 것을 느끼지 못하게 만들 수 있다.

## 심층 분석

### 기술 의미
STT→LLM→TTS 캐스케이드를 거치지 않고 오디오를 직접 모델링한다는 점이 핵심이다. 음성에서만 살아남는 정보(억양, 머뭇거림, 배경 소음)가 보존되며, 전이중 구조는 사용자 발화 끊기를 허용해 턴테이킹 지연을 줄인다. 단 파라미터·지연·가격·벤치마크가 공개되지 않아 자체 성능 검증은 불가능하다. (→ 분석: 공개된 비교표의 FDB 결과는 서로 다른 벤치마크 버전을 쓰고 있어 직접 비교 불가라고 원문도 명시한다.)

### 업계 영향
OpenAI GPT-Live-1, NVIDIA VoiceChat 11B(오픈 웨이트) 등과 같은 전이중 음성 경쟁 구도가 격화되고 있다. 음성 에이전트 시장에서는 소음 환경 신뢰성(블랜드의 'TV 테스트')이 다음 차별화 요소로 부상한다. 단, 이번 발표는 단일 소스·자체 보고 수치이므로 업계 전반 전환 여부는 추가 교차 확인이 필요하다. (→ 분석)

### 관련 프로젝트
- Bland Tofu-1 제품 페이지 및 리서치 프리뷰 신청 (원문 링크)
- NVIDIA NemotronLabs VoiceChat 11B (오픈 웨이트 대안, 원문 비교표)

### 관련 뉴스
- [버셀 UI SDK 에이전트 UI 동작](../records/2026-11-15-vercel-ui-sdk-agent-ui-behaviors.md) — 에이전트 프론트엔드 표준화 흐름
- [스탠포드 Memorilla](../records/2026-11-15-stanford-memorilla-16-memory-tokens.md) — 에이전트 핵심 구성요소 연구

## 원문 발췌
> "Bland, the San Francisco voice-AI company, has released Tofu-1, a full-duplex speech-to-speech model in research preview."
> "Tofu-1 listens to the audio directly, so tone, hesitation and background sound stay available to the model."
> "The only number is self-reported: over 92% could not spot it in screenings. No size, latency, pricing or benchmarks yet."

## 수집 노트
- **선정 이유**: 24시간 내 RSS 후보 중 모델 발표 카테고리 유일한 신규 건. 커뮤니티 소스·단일 확인이라 중요도는 최하로 산정했으나 전이중 음성-음성 모델이라는 기술 방향성 기록 가치로 선정.
- **중요도 산정**: community +0, 교차 확인 1 → 기본 1점.
- **제외 후보**: TechCrunch "SNL gathers all the tech tycoons" — 예능 콘텐츠로 AI 에이전트 산업 뉴스 범위 외.
