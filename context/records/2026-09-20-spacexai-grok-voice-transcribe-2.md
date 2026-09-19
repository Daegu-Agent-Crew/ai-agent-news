# SpaceXAI, Grok Voice Transcribe 2.0 출시 — 1.0 대비 2배 정확도 주장, 시간당 $0.10

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/09/18/spacexai-releases-grok-voice-transcribe-2-0/
- **소스**: MarkTechPost
- **발행일**: 2026-09-18
- **수집일**: 2026-09-20
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [speech-to-text, grok, xai, voice-agent, stt-api]
- **소스 권위**: major-media
- **교차 확인**: 3
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> SpaceXAI가 최신 음성인식(STT) 모델 Grok Voice Transcribe 2.0을 출시했고, 개발팀은 같은 가격으로 1.0 대비 2배 정확하다고 주장한다. 이 모델은 공식 Artificial Analysis 스트리밍 리더보드 32개 모델 가운데 1위에 오른다고 회사 측이 보고했다.

## 번역 (한국어)

MarkTechPost 보도에 따르면, SpaceXAI는 최신 음성인식 모델 Grok Voice Transcribe 2.0을 공개했다. 개발팀은 같은 가격으로 1.0 대비 2배 정확하다고 주장하며, 타깃은 시끄러운 전화선, 겹치는 목소리, 지역 억양, 음성으로 전달되는 자격 증명 같은 어려운 오디오다. 모델은 Speech to Text API를 통해 배치(batch)와 실시간 스트리밍 두 방식으로 동작하며, 공개된 모델 가중치는 없어 셀프호스팅은 불가능하다.

벤치마크 측면에서 SpaceXAI는 공개 리더보드인 Artificial Analysis의 AA-WER Streaming 부문(32개 스트리밍 모델 대상)에서 1위를 보고했다. 내부 평가에서는 전화 통신(8kHz), Grok 대화, 자격 증명 받아쓰기, 19개 언어의 짧은 발화 등 4개 자체 세트에서 모두 1.0 대비 개선됐다고 밝혔다. 특히 언어 맥락이 거의 없는 짧은 발화 세트에서 단어 오류율(WER)이 20.6%에서 6.8%로 떨어졌고, 다국어 정확도가 1.0 대비 가장 큰 개선점이라고 회사 측은 설명했다. 다만 이 내부 수치는 벤더 자체 보고로 독립 검증은 이뤄지지 않았다.

개발자 기능으로는 단어 단위 타임스탬프와 신뢰도 점수, 추가 비용 없는 화자 분리(diarization), 최대 8채널 독립 전사, 요청당 최대 100개의 핵심 용어 편향(key term biasing), 숫자·날짜·통화·이메일의 문자 형식 변환, 필러 워드 제거, 음성 에이전트용 스마트 턴 감지 등이 같은 API에 포함된다. 가격은 1.0과 동일한 배치 시간당 $0.10, 스트리밍 시간당 $0.20이다.

한편 Atlassian Loom은 모든 영상 전사에 이 모델을 도입했으며, 기존 솔루션보다 정확하다고 평가했다. SpaceXAI가 설명하는 워크플로는 "기록하고, 전사하고, 코딩하라"로, Loom에서 녹화한 실행 계획의 전사본이 Cursor로 파이프되어 코드 수정으로 이어진다. Atlassian의 산찬 색세나 SVP는 이를 "컨텍스트에서 코드로 이어지는 루프 닫기"라고 표현했다.

## 왜 중요한가?

음성은 에이전트의 새 입력 인터페이스로 확장되는 중인데, 이번 출시는 "정확도 2배 + 가격 동결"이라는 공격적 제시를 통한 STT 시장 압박으로 읽힌다. 시간당 $0.10의 배치 전사 가격은 통화 녹음·영상 자막·회의록 같은 대량 오디오 처리의 비용 구조를 크게 낮출 수 있는 수준이다. 또한 Loom→Cursor로 이어지는 "음성 기록이 곧 코드가 되는" 워크플로는 음성 입력이 에이전트 작업의 시작점이 되는 실제 사례를 보여준다.

## 심층 분석

### 기술 의미
짧은 발화 세트 WER 20.6%→6.8%라는 수치는 언어 식별이 어려운 조건(자동차 명령 등)에서의 개선 폭이 크다는 점에서, 모델이 전사를 넘어 언어 자동 감지·중간 언어 전환까지 단일 패스로 처리하도록 학습됐음을 시사한다 (→ 분석). 스마트 턴 감지를 API에 포함한 것은 STT가 단순 전사 도구에서 음성 에이전트의 대화 상태 관리 컴포넌트로 기능이 확장되고 있음을 보여준다. 다만 핵심 수치가 벤더 자체 보고이고 리더보드 1위도 해당 리더보드의 가중치 설계(AA-AgentTalk 50% 등)에 의존한다는 점은 해석 시 유보가 필요하다.

### 업계 영향
가격을 1.0 수준으로 유지하면서 정확도 개선을 내세운 것은 Whisper류 오픈소스 대안과 경쟁하던 STT API 시장에서 "정확도 프리미엄"을 강제하는 측면이 있다 (→ 분석). Atlassian Loom의 전면 도입은 엔터프라이즈 협업 도구가 STT 품질을 제품 경쟁력의 핵심으로 취급하기 시작했음을 보여주며, Zoom·Meet 계열의 경쟁 조건도 바뀔 수 있다. 에이전트 생태계 관점에서는 음성 입력→전사→코딩 에이전트로 이어지는 파이프라인이 실제 사례로 등장하면서, 음성 인터페이스가 에이전트 작업 지시의 주류 수단으로 편입되는 흐름이 가속될 것으로 보인다.

### 관련 프로젝트
- xAI 공식 발표: https://x.ai/news/grok-voice-transcribe-2
- API 문서: https://docs.x.ai/developers/model-capabilities/audio/speech-to-text
- Artificial Analysis STT 리더보드: https://artificialanalysis.ai/speech-to-text/streaming

### 관련 뉴스
- [바이트댄스 SeedRealtime 오디오·비주얼 LLM](../records/2026-08-10-bytedance-seedrealtime-audio-visual-llm.md) — 실시간 음성·영상 멀티모달 경쟁
- [SpaceX, Cursor 60억 달러 인수](../records/2026-08-16-spacex-acquires-cursor-60b.md) — Loom→Cursor 워크플로가 SpaceXAI 생태계와 맞닿는 지점
- [미니맥스 Music3 출시](../records/2026-08-17-minimax-releases-minimax-music3.md) — 오디오 도메인 모델 경쟁 구도

## 원문 발췌
> "SpaceXAI has released Grok Voice Transcribe 2.0, its newest speech-to-text (STT) model. The development team claims it to be twice as accurate as Grok Voice Transcribe 1.0 at the same price."
> "SpaceXAI reports a first-place accuracy rank among 32 streaming models on the public Artificial Analysis leaderboard."
> "Short phrases, such as in-car commands, give a model little context to identify the language. On that set, WER drops from 20.6% to 6.8%."
> "Pricing is identical to version 1.0. Batch transcription costs $0.10 per hour of audio. Streaming costs $0.20 per hour."

## 수집 노트
- **교차 확인 근거**: MarkTechPost 보도 + xAI 공식 발표·API 문서 + Artificial Analysis 공개 리더보드 + Atlassian Loom 도입 사례
- **중요도 산정**: 기본 1 + major-media 1 + 독립 소스 3개 이상 2 = 4
- **선정 이유**: 공식 발표·공개 리더보드·엔터프라이즈 도입까지 확인된 24시간 창 내 유일한 음성 모델 출시로, 에이전트 음성 인터페이스 비용 구조에 직접 영향을 주는 교차 확인 완비 건
- **제외 후보**: Meta Muse for Mac MarkTechPost 버전 — 동일 사건을 어제 TechCrunch 원문으로 수집 완료(중복), GGUF vs GPTQ 포맷 가이드 — 뉴스성보다 교육성 콘텐츠로 선정 기준 미달
