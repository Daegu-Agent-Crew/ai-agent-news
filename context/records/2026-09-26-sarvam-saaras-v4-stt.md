# Sarvam AI, 22개 인도 공용어 전체와 글로벌 영어를 지원하는 음성인식 모델 'Saaras V4' 공개

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/09/26/sarvam-ai-releases-saaras-v4-a-speech-to-text-model-for-all-22-indian-languages-and-global-english/
- **소스**: MarkTechPost (Sarvam AI 공식 발표 보도)
- **발행일**: 2026-09-26
- **수집일**: 2026-09-26
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [speech-to-text, sarvam, multilingual, indic-languages, streaming-asr]
- **소스 권위**: major-media
- **교차 확인**: 2
- **교차 확인 근거**: MarkTechPost 보도 + Sarvam 공식 블로그 원문 (벤더 자체 보고 수치임이 양쪽에서 명시됨)
- **중요도**: ⭐⭐⭐
- **중요도 산정**: 1 + major-media(1) + 교차 확인 2건(1) + 반응 미관측(0) = ⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Sarvam AI가 22개 인도 공용어 전체와 글로벌 영어 악센트를 커버하는 최신 음성인식(STT) 모델 Saaras V4를 공개했다. 오디오 인코더에 3B 하이브리드 state-space 디코더를 결합했으며, 하나의 모델에서 5가지 출력 모드를 제공하고 스트리밍 첫 토큰 지연이 150ms 미만이라고 회사는 발표했다.

## 번역 (한국어)
인도 AI 스타트업 Sarvam AI는 자사 음성인식 모델의 최신 세대인 Saaras V4를 공개했다. 22개 인도 공용어(scheduled languages) 전부와 영어를 지원하며, 이번에는 인도 억양뿐 아니라 글로벌 영어 악센트까지 포함했다. 회사는 22개 언어 모두에서 최고 수준의 정확도를 달성했다고 주장한다.

아키텍처는 인코더-디코더 구조다. 오디오 인코더가 파형을 음성·음향 정보를 담은 임베딩으로 바꾸고, 시간 축 다운샘플링 어댑터가 이 시퀀스를 줄여 언어모델의 임베딩 공간으로 투영한다. 디코더는 Sarvam이 자체 처음부터 학습시킨 3B 파라미터 하이브리드 state-space 언어모델로, 오디오 특징과 텍스트 프롬프트를 함께 읽고 토큰을 자기회귀적으로 생성한다. 긴 녹음도 디코더의 컨텍스트 예산 안에 들어오도록 설계됐다.

한 모델에서 5가지 출력 모드를 선택할 수 있다: 기본 전사(transcribe), 필러까지 그대로 남기는 verbatim, 영어 단어를 영어로 남기는 codemix, 라틴 문자 전사 translit, 영어 번역 translate. 회사는 이 처리를 모델 내부로 넣으면 오류가 누적되기 쉬운 후처리 단계를 없앨 수 있다고 설명한다. 새로 도입된 키텀 프롬프팅은 최대 50개 고유명사(각 64자)를 힌트로 줘 인식을 편향시키는 기능이다.

배포 측면에서는 WebSocket 스트리밍(첫 토큰 150ms 미만), 30초 클립 동기 REST, 2시간 파일 배치 처리(화자 분리 옵션), Python/Node SDK와 LiveKit·Pipecat·Vercel AI SDK 연동이 제공된다. 가격은 실시간·스트리밍·배치 모두 시간당 30루피, 화자 분리 시 45루피다. 다만 MarkTechPost는 위 모든 수치가 벤더 자체 보고이며 독립적 재현은 아직 발표되지 않았다고 명시하고 있다.

## 왜 중요한가?
영어 중심 STT 경쟁과 별개로 22개 언어를 단일 모델로 묶는 다국어 전략의 진전을 보여준다. 언어모델 디코더로 하이브리드 state-space 아키텍처를 음성인식에 쓴 사례는, Transformer 대신 다른 구조가 음성 도메인에서 실전 배포되고 있음을 시사한다. 인도 시장은 음성 우선 인터페이스 비중이 높아, 다국어 음성 에이전트 붐의 선두 지표로 주목할 만하다.

## 심층 분석

### 기술 의미
오디오 인코더 + 텍스트 LLM 디코더의 결합은 STT를 '음성 조건부 언어모델링' 문제로 재정의하는 흐름의 연장이며, 후처리(정규화, 코드스위칭 처리, 번역)를 모델 내부 모드로 흡수한 점이 파이프라인 단순화의 핵심이다. 3B 하이브리드 state-space 디코더는 긴 시퀀스 처리에서 어텐션 비용을 피하려는 선택으로, 길이 무제한에 가까운 음성 스트림이라는 도메인 특성과 맞물려 있다. 다만 벤치마크가 전부 벤더 보고라는 점은 Open ASR 리더보드 방식의 정규화 코드를 썼다고 해도 독립 검증이 필요한 영역이다.

### 업계 영향
Whisper류 범용 모델과 달리 특정 언어권(인도)에 특화된 스택이 가격(₹30/시간)으로 공격하는 구도는, 비영어권 시장에서 로컬 특화 모델이 글로벌 모델을 이길 수 있음을 보여주는 판례가 된다. LiveKit·Pipecat 같은 실시간 에이전트 프레임워크와의 공식 연동은 음성 에이전트 빌더가 지역 언어 STT를 손쉽게 붙일 수 있게 해, 콜센터·음성 비서 시장의 지역화 경쟁을 가속한다. 한국어권에서도 유사 '로컬 특화 음성 스택' 전략의 참고 사례가 될 수 있다.

### 관련 프로젝트
- [Sarvam AI 공식 블로그: Introducing Saaras V4](https://www.sarvam.ai/blogs/introducing-saaras-v4) — 발표 원문
- [Sarvam API 가격](https://www.sarvam.ai/api-pricing) — ₹30/시간 요금 체계

### 관련 뉴스
- [2026-09-25-gemini-3-8-flash-tts-voice-models.md](2026-09-25-gemini-3-8-flash-tts-voice-models.md) — 음성 인터페이스 모델 경쟁의 다른 축
- [2026-09-24-chatgpt-mobile-voice-agentic.md](2026-09-24-chatgpt-mobile-voice-agentic.md) — 음성 기반 에이전트 인터페이스 확산

## 원문 발췌
> "Sarvam AI has released Saaras V4, the newest generation of its speech recognition model. It covers all 22 scheduled Indian languages plus English, now including global English accents." (MarkTechPost)
>
> "The decoder is Sarvam-3B, a 3B-parameter hybrid state-space language model trained from scratch in-house." (MarkTechPost)
>
> "Sarvam lists speech-to-text at ₹30 per hour for real-time, streaming and batch, and ₹45 per hour with diarization." (MarkTechPost)
>
> "It is important to note that all numbers above are vendor-reported. Independent reproduction has not been published yet." (MarkTechPost)

## 수집 노트
- **선정 이유**: 22개 언어 단일 모델 커버와 하이브리드 state-space 디코더 채택이 음성 모델 구도에서 구조적으로 새로운 정보를 주는 발표이며, 공식 블로그와 교차 확인되는 오늘 유일한 모델 카테고리 신규 후보이기 때문.
- **제외 후보**: Google 블로그 "Google Beam 5개국 확장" — 발행 9/23으로 24시간 창 밖 / artificialintelligence-news.com 피드의 "US TransCom 무작위화 AI" 재보도 — 전일 유사 주제 수집 완료.
