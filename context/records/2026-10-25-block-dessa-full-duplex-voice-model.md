# Block, 사람처럼 웃고 머뭇거리는 전이중 음성 모델 'Dessa' 공개 — 로컬 실행, 음성 데이터로만 학습

## 메타데이터
- **원문 URL**: https://techcrunch.com/2026/10/24/blocks-new-voice-model-sounds-eerily-human/
- **소스**: TechCrunch (Ivan Mehta)
- **발행일**: 2026-10-24
- **수집일**: 2026-10-25
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [voice-ai, full-duplex, speech-to-speech, block, on-device, dessa]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **중요도 산정**: 기본 1 + major-media(TechCrunch)(1) + 교차 확인 1개(0) + 커뮤니티 반응 미확인(0) = 2
- **신선도**: fresh

## 핵심 요약
> TechCrunch에 따르면 Jack Dorsey의 Block은 연구소에서 전이중(full-duplex) 음성 모델 Dessa를 공개했으며, Block은 이 모델이 사람 음성으로만 학습됐고 MacBook M4 Max급 소비자 기기에서 로컬 실행된다고 밝혔다. 현재 일반 공개는 없고 안전성 연구자 테스트를 모집 중이다.

## 번역 (한국어)
Jack Dorsey가 이끄는 Block이 자사 연구소에서 새 음성 모델 Dessa를 내놨다. TechCrunch는 이 모델이 로컬에서 돌아가며 웃음, 멈춤, 울먹임 같은 표현 때문에 기묘할 만큼 사람처럼 들린다고 전했다. Block은 Dessa가 전적으로 사람의 음성으로 학습됐고 NVIDIA GPU 랙 하나로 훈련됐다고 밝혔다.

Dessa는 말하면서 동시에 들을 수 있는 전이중 모델로, OpenAI가 올해 내놓은 GPT-Live와 같은 방식이다. 보통 음성 모델은 지식 검색을 위해 대형 언어 모델과 짝을 이루지만, Block은 Dessa의 지식이 대화 데이터 자체에서 나온다고 설명했다.

Block은 블로그에서 기존 음성 AI가 음성을 텍스트로 바꾸면서 텍스트가 담을 수 없는 정보를 버린다고 비판했다. "세상에서 가장 강력한 AI도 당신이 어떤 기분인지 듣지 못한다"며, 이는 경험을 나쁘게 할 뿐 아니라 잠재적으로 위험하다고 주장했다. ElevenLabs v4 등은 음성 태그로 감정을 조절하지만 Block은 감정이 모델에 내재돼 있다고 주장하며, TechCrunch는 태그 방식의 조종이 있는지는 불분명하다고 덧붙였다.

Block에 따르면 Dessa는 MacBook M4 Max 이상의 소비자용 컴퓨터에서 로컬로 실행된다. 다만 아직 공개 접근은 없고, Block은 안전성 연구자들에게 모델 테스트를 요청했다. TechCrunch는 Square가 이미 주문 처리에 음성 AI를 쓰고 있어, 온디바이스 자체 모델이 더 많은 비즈니스 경험을 낮은 비용으로 구동할 수 있다고 분석했다.

## 왜 중요한가?
지금 대부분의 음성 비서는 '말 → 글자 → 답 → 말'로 바꾸는 과정에서 목소리의 감정과 뉘앙스를 잃습니다. Dessa는 이 과정을 건너뛰고 노트북에서 직접 돌아간다고 주장해, 사람과 구분하기 어려운 음성 에이전트가 값싸게 퍼질 수 있다는 기대와 함께 사기·사칭 악용 우려도 키웁니다.

## 심층 분석

### 기술 의미
텍스트 중간 단계를 없앤 speech-to-speech 구조는 지연과 정보 손실을 줄이지만, Block이 밝힌 대로 지식이 '대화 데이터'에서만 온다면 사실 정확도·도구 호출 능력은 LLM 결합형보다 약할 수 있다(→ 분석). 단일 GPU 랙 학습과 소비자 기기 추론은 음성 모델이 대형 연구소만의 영역이 아님을 보여주는 사례로 볼 수 있다(→ 분석). 성능 주장은 Block 측 데모와 연구원 게시물에 근거하며 독립 평가는 아직 없다.

### 업계 영향
결제·소상공인 사업을 하는 Block이 자체 음성 모델을 갖게 되면 Square 주문·상담 같은 현장형 음성 에이전트를 외부 API 비용 없이 구동할 수 있다(→ 분석). 공개 전 안전성 연구자 모집은 사람과 구분 안 되는 음성의 사칭 악용 위험을 회사도 인식하고 있음을 시사한다(→ 분석). 앞서 기록된 'Voice AI의 ChatGPT 모먼트는 아직' 논의에 대한 새로운 반례 후보다.

### 관련 프로젝트
- Block Dessa, OpenAI GPT-Live, ElevenLabs v4, Fish Audio Drama 3

### 관련 뉴스
- [Voice AI, 아직 ChatGPT 모먼트 아니다](../records/2026-10-12-voice-ai-not-chatgpt-moment-polyai-otter.md) — 음성 AI 시장 진단
- [Microsoft MAI-Transcribe-2 스트리밍](../records/2026-10-04-microsoft-mai-transcribe-2-streaming.md) — 음성 인식 모델 경쟁

## 원문 발췌
> "Jack Dorsey's Block released a new voice model out of the company's research lab that runs locally and sounds strangely human with its expressions like laughs, pauses, and cries. The company said the model, called Dessa, is trained fully on human speech and a single NVIDIA GPU rack."
> "The company said that the model can run locally on a consumer-grade computer such as a MacBook M4 Max or better. However, there is no public access to Dessa at the moment, and Block has put out a call for safety researchers to test the model."

## 수집 노트
- **선정 이유**: 음성 에이전트의 핵심 인터페이스인 전이중·온디바이스 음성 모델을 비AI 대기업(Block)이 내놓은 사례로, 주요 언론 보도를 근거로 아카이브.
- **제외 후보**: Anthropic sandbox-runtime 해설(MarkTechPost) — 원문 403으로 발췌 확보 불가, 도구 자체는 2025-10 공개분이라 신선도 낮음; OpenAI "실시간 인터넷 학습 중단"(TechCrunch) — 2026-10-24 레코드(openai-securing-frontier-training-environment)와 동일 사안; NVIDIA Nemotron 3.5 Bolt E4B — 2026-10-20 레코드에서 이미 다룸; Letta 튜토리얼 — 뉴스가 아닌 실습 글
