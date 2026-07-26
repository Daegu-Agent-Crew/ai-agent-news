# Black Forest Labs launches FLUX 3: Multimodal Model for Image, Video, Audio Generation and Physical Action

## 메타데이터
- **원문 URL**: https://venturebeat.com/technology/black-forest-labs-launches-flux-3-capable-of-generating-images-and-20-second-video-with-audio-but-in-limited-release-to-start
- **소스**: VentureBeat
- **발행일**: 2026-07-22
- **수집일**: 2026-07-27
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [multimodal, video-generation, robotics, visual-intelligence, FLUX]
- **중요도**: ⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Black Forest Labs가 이미지, 오디오, 최대 20초 비디오를 단일 프롬프트로 생성하는 멀티모달 모델 FLUX 3를 발표했다. 이 모델은 로봇 비전과 물리적 행동 예측으로까지 확장 가능한 아키텍처를 갖추고 있다.

## 번역 (한국어)

독일 프라이부르크 기반 AI 연구소 Black Forest Labs(BFL)가 FLUX 3를 공개했다. FLUX 3는 이미지, 오디오, 최대 20초의 비디오를 단일 프롬프트에서 생성하는 멀티모달 프론티어 모델이다. 기존 FLUX 시리즈가 이미지 생성에 국한되었던 것과 달리, FLUX 3는 비디오 생성 모델로서는 BFL의 첫 공개 제품이다.

FLUX 3의 가장 큰 특징은 이미지, 비디오, 오디오 모델을 별도로 조합하는 것이 아니라 단일 아키텍처에서 공동 훈련(jointly trained)했다는 점이다. BFL은 이를 "시각 지능(visual intelligence)"이라 부르며, 창의적 콘텐츠 생성, 시뮬레이션, 컴퓨터 사용, 로봇 공학을 하나의 능력으로 연결하려 한다. FLUX 3 Action이라는 제품 라인은 물리적 환경에서의 행동 예측까지 다룬다.

제품은 네 가지 라인으로 출시된다: FLUX 3 Video(네이티브 오디오 옵션), FLUX 3 Image, FLUX 3 Action, 그리고 오픈소스 FLUX 3 Dev. 다만 현재는 Early Access 프로그램을 통한 제한적 출시이며, API나 파트너를 통한 공개 접근은 아직 없다. FLUX 3 Image는 향후 수주 내 출시될 예정이다. 가격, SLA, 벤치마크 방법론 등은 아직 공개되지 않았다.

성능 면에서 BFL은 예비 평가에서 FLUX 3가 Luma Ray 3.2 대비 93%, Runway Gen-4.5 대비 77% 선호도를 기록했다고 밝혔다. 다만 이 수치는 출시 버전이 아닌 사전 릴리스 체크포인트 기준이며, Google Gemini Omni Flash와는 52%로 사실상 동점이었다. 오픈웨이트 버전인 FLUX 3 Dev는 올해 말 공개될 예정이다.

## 왜 중요한가?
AI 모델이 단순 텍스트 생성을 넘어 이미지, 비디오, 오디오를 넘어 물리적 행동 예측까지 아우르는 "시각 지능"으로 진화하고 있다. 이는 멀티모달 AI가 로봇 공학과 산업 자동화로 확장되는 중요한 신호다. 다만 가격과 벤치마크가 공개되지 않은 제한적 출시라는 점, 그리고 오픈웨이트 지연은 기업 도입의 걸림돌이 될 수 있다.

## 심층 분석

### 기술 의미
FLUX 3는 BFL이 3월에 발표한 Self-Flow 기술을 기반으로, 멀티모달 이해와 생성을 단일 아키텍처 내에서 정렬한다. 이는 모듈식 접근(별도 이미지/비디오/오디오 모델 조합)과 근본적으로 다른 접근으로, 모달리티 간 일관성과 효율성이 이론적으로 더 높다. FLUX 3 Action의 행동 예측 능력은 로봇 비전 분야로의 확장 가능성을 시사하며, 물리적 환경에서의 "지각-예측-행동" 루프를 하나의 모델에서 처리하려는 야심 찬 시도다.

### 업계 영향
비디오 생성 시장에서 경쟁이 치열해지고 있다. Google Gemini Omni Flash가 API로 일반 공개되며 $0.10/초의 명확한 가격을 제시하는 반면, FLUX 3는 가격 미정·제한적 출시로 시작한다. 독일 기업으로서 EU 데이터 규제 환경에서의 차별점(Gemini Omni Flash의 비디오 편집이 EEA/영국에서 제한되는 점)을 활용할 수 있으나, 출시 전략의 보수성이 시장 점유율 확보에 장애가 될 수 있다. Anthropic, OpenAI 등 다른 프론티어 랩들도 보안/규제 이유로 제한적 출시를 선택하는 추세와 일치한다.

### 관련 프로젝트
- [FLUX 3 공식 블로그](https://bfl.ai/blog/flux-3)
- [Self-Flow 기술 (VentureBeat)](https://venturebeat.com/technology/black-forest-labs-new-self-flow-technique-makes-training-multimodal-ai)
- [Early Access 신청](https://tally.so/r/44d9NX)

### 관련 뉴스
- [2026-07-15: OpenAI GPT-5.6 에이전트](2026-07-15-openai-gpt-5-6-agents.md) — 멀티모달 확장의 다른 사례
- [2026-07-23: 중국 AI 오픈소스 모델 공세](2026-07-23-china-kimi-k3-qwen3-8-open-source-ai.md) — 오픈웨이트 경쟁 가속화

## 원문 발췌
> "BFL wants enterprises to think about creative generation, simulation, computer use and robotics as connected applications of a single capability it calls visual intelligence — models that can perceive, predict, and act across physical and digital environments."
> "FLUX 3 was preferred over Luma Ray 3.2 in 93% of comparisons, Runway Gen-4.5 in 77%... but the chart carrying the results is labeled a 'preliminary evaluation of an early FLUX 3 candidate.'"
