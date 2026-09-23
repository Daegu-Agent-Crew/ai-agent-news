# Google, Gemini 3.8 Flash TTS 공개 — 프롬프트로 목소리 설계

## 메타데이터
- **원문 URL**: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/
- **소스**: Google 공식 블로그
- **발행일**: 2026-09-23
- **수집일**: 2026-09-24
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [google, gemini, tts, voice-agent, audio-generation]
- **소스 권위**: official
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Google이 Gemini 3.8 Flash TTS와 Gemini 3.8 Flash-Lite TTS, 두 개의 신규 음성합성(TTS) 모델을 공개했다. Flash TTS는 자연어 프롬프트로 100개 이상 언어의 새 목소리를 생성하는 '제너레이티브 보이스 디자인'을 지원하며 Hume AI Voice Design 벤치마크에서 71.4점으로 종합 1위를 기록했다고 회사가 밝혔다. Flash-Lite TTS는 대용량 더빙과 음성 에이전트를 위한 저비용 대량 생산용이다.

## 번역 (한국어)

Google이 Gemini 오디오 패밀리에 두 개의 새 텍스트 음성 변환 모델을 추가했다. Gemini 3.8 Flash TTS는 캐릭터 목소리 설계 같은 깊은 크리에이티브 디렉션용이고, Gemini 3.8 Flash-Lite TTS는 고용량·저비용 스케일용이다. 회사는 이번 모델들이 "정적 프리셋에서 동적 크리에이티브 스튜디오로 음성 생성을 변환"한다고 표현했으며, Gemini Notebook이나 Google Vids 같은 제품에도 적용된다.

핵심 변화는 목소리 시스템의 확장이다. 기존 Gemini TTS가 30개의 오리지널 목소리를 제공했다면, 3.8 Flash TTS는 자연어 프롬프트로 역할·억양·목소리 특성을 지정해 100개 이상 언어와 방언에서 처음부터 새 목소리를 만들 수 있다. 여기에 멕시코 스페인어, 퀘벡 프랑스어, 스코츠 잉글리시 등 지역 변형을 포함한 2,000개 이상의 프로덕션 준비 완료 목소리 라이브러리를 함께 제공한다. 자신의 목소리나 사용 권리가 있는 목소리 30초 샘플로 일관된 보컬 프로필을 재현하는 음성 복제 기능도 있는데, 구두 동의 녹음 검증, SynthID 워터마크, C2PA 콘텐츠 자격 증명이 기본 적용된다.

연출 기능도 강화됐다. 두 모델 모두 대본 줄 단위로 무대 지시문을 써서 연기를 조정할 수 있고, 수 시간 연속 오디오에서도 목소리 품질·페이싱·음색을 유지하는 장편 생성, 단일 대본으로 2인 대화를 자연스럽게 나누는 투 스피커 장면 연출을 지원한다. `<laughs>`, `<sigh>` 같은 비언어 신호와 `|mhm|`, `|yeah|` 같은 대화 끼어들기(백채널링) 표기로 리액션 타이밍까지 제어할 수 있다.

성능 지표로 Google은 Hume AI의 Voice Design 벤치마크에서 Flash TTS가 71.4점으로 종합 1위, 억양 모델링 부문 60.8점으로 선두를 기록했다고 밝혔다. Hume AI Overall Quality Index에서는 Flash TTS가 1위, Flash-Lite TTS가 2위였고, Voice Arena 비선호 블라인드 평가에서는 일본어·브라질 포르투갈어·베트남어·표준 아랍어·멕시코 스페인어·힌디어 등 주요 언어에서 최상위를 기록했다고 회사가 전했다.

개발자는 오늘부터 Gemini API와 Google AI Studio에서 이용할 수 있으며, Agora·LiveKit 같은 개발자 플랫폼 배포도 함께 안내됐다. MarkTechPost에 따르면 접근은 API 전용이며 자체 호스팅용 오픈 웨이트는 제공되지 않고, 기업용 Gemini Enterprise API 접근은 "coming soon"으로 표시되어 있다.

## 왜 중요한가?
목소리가 '고르는 것'에서 '설계하는 것'이 된 전환점입니다. 게임·오디오북·더빙뿐 아니라 음성 기반 AI 에이전트의 목소리를 브랜드마다 맞춤 제작할 수 있게 되면서, 콜센터·음성 비서·팟캐스트 산업의 원가 구조가 달라집니다. 음성 복제에 동의 검증과 SynthID 워터마크를 강제한 점은 딥페이크 음성 문제에 대한 빅테크의 표준 대응이 어떤 모습인지 보여줍니다.

## 심층 분석

### 기술 의미
'TTS 2티어 분리 + 공통 연출 컨트롤' 구조가 이번 발표의 기술적 골자다. 창작용(Flash)과 대량 생산용(Flash-Lite)을 나누되, 대본 줄 단위 지시·장편 일관성·투 스피커 스테이징 같은 연출 인터페이스는 공유한다. 프롬프트 기반 목소리 생성이 30개 프리셋에서 '무한 라이브러리'로 확장된 것은 음성 특징 공간을 텍스트로 조건화하는 능력이 실용 수준에 도달했음을 의미하며, 수 시간 연속 생성에서 화자 드리프트(speaker drift)를 억제했다는 주장은 장폭 오디오 생성의 핵심 난제에 대한 진전으로 읽힌다. 벤치마크 수치는 모두 Google이 인용한 제3자(Hume AI, Voice Arena) 측정이라는 점에서 해석 여지는 있으나, 30초 복제 + 구두 동의 검증 + 워터마크로 이어지는 안전 파이프라인의 제품화는 그 자체로 기술 표준 후보다.

### 업계 영향
음성 에이전트 스타트업의 TTS 자체 개발 유인이 크게 줄어든다. ElevenLabs·Hume AI 같은 전문 업체와 직접 경쟁에 나선 것이며, 가격 경쟁이 시작되면 콜센터 AI·더빙·오디오북 시장의 단가가 빠르게 내려갈 것이다. MCP 기반 음성 에이전트를 만드는 개발자에게는 Gemini API를 통한 즉시 이용 가능성이 진입장벽을 낮춘다. 반대로 목소리라는 개인 정체성이 '30초 샘플 + 권리'로 복제 가능해진 만큼, 성우·내레이터 시장의 권리 계약 관행과 목소리 라이선싱 시장이 이 제품군을 기준으로 재편될 가능성이 크다. 2,000개 라이브러리와 지역 방언 커버는 비영어권(한국어 포함) 콘텐츠 산업에 직접적인 영향을 주는 부분이다.

### 관련 프로젝트
- Google AI Studio 음성 생성: https://aistudio.google.com/docs/speech-generation
- SynthID (음성 워터마크): https://deepmind.google/models/synthid/
- Gemini 3.8 Audio 모델 카드: https://deepmind.google/models/model-cards/gemini-3-8-audio/

### 관련 뉴스
- [OpenAI GPT-6 Sol·Luna 출시](../records/2026-09-23-openai-gpt-6-sol-luna.md) — 음성·멀티모달에서 경쟁하는 OpenAI의 최신 모델 라인
- [Qualcomm Snapdragon AI 칩 2종 출시](../records/2026-09-23-qualcomm-snapdragon-8-elite-gen6.md) — 온디바이스 AI 음성 처리의 하드웨어 축

## 원문 발췌
> Today, we're introducing two new text-to-speech models to the Gemini family, transforming voice generation from static presets into a dynamic creative studio.

> Generative voice design: With Gemini 3.8 Flash TTS, create bespoke voices from scratch by customizing role, accent and voice characteristics across more than 100 languages and dialects using natural language prompting.

> Gemini 3.8 Flash TTS delivers leading voice customization capabilities, securing the #1 overall spot on Hume AI's Voice Design Benchmark (71.4) and also leading in accent modeling (60.8).

> For voice replication our system leverages consent verification: users must provide a verbal consent recording from the voice owner that matches the reference speaker before a voice can be created.

## 수집 노트
- **선정 이유**: 공식 발표(official) + 주요 AI 매체(MarkTechPost)로 교차 확인 2건 + HN 227포인트 — 음성 에이전트 개발에 즉시 쓸 수 있는 신규 모델군이라 아카이브했다. 중요도는 산정표 기준 1+2(official)+1(교차 2건)+1(HN 100pt+) = ⭐⭐⭐⭐⭐.
- **제외 후보**: MarkTechPost 동명 기사 — 공식 발표의 2차 보도로 교차 확인 소스로만 활용. TechCrunch "YouTube Music gets more conversational" — 소비자 기능 보도로 관측 밀도 낮음.
