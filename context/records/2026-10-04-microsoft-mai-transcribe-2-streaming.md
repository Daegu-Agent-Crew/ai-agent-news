# Microsoft, 실시간 음성인식 모델 'MAI-Transcribe-2-Streaming' 공개 — Artificial Analysis 1위

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/10/02/microsoft-ai-releases-mai-transcribe-2-streaming-1-real-time-speech-to-text-model-on-artificial-analysis/
- **소스**: MarkTechPost
- **발행일**: 2026-10-02
- **수집일**: 2026-10-04
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [microsoft, mai, speech-to-text, streaming, voice-agents, realtime-api]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **신선도**: fresh
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 1개(0) + 반응 규모 미확인(0) = 2

## 핵심 요약
> MarkTechPost에 따르면 Microsoft AI가 첫 스트리밍 음성인식 모델 MAI-Transcribe-2-Streaming을 10월 1일 출시했으며, Artificial Analysis가 38개 모델 중 정확도 1위로 평가했다. 첫 부분 결과를 약 100ms 만에 내며 가격은 오디오 1시간당 $0.54(2026년 말까지 도입가)다.

## 번역 (한국어)
MarkTechPost는 Microsoft AI가 자사 첫 스트리밍 STT 모델 MAI-Transcribe-2-Streaming을 2026년 10월 1일 TTS 모델 MAI-Voice-2.1, MAI-Voice-2.1-Flash와 함께 출시했다고 보도했다. Artificial Analysis는 이 모델을 최종 및 첫 부분(partial) 전사 정확도에서 38개 모델 중 1위로 평가했다. 음성 에이전트, 실시간 자막, 받아쓰기처럼 지연 시간이 경험을 좌우하는 용도를 겨냥한다.

이 모델은 9월 출시된 배치형 MAI-Transcribe-2의 실시간 버전으로, 60개 언어를 자동·연속 언어 감지로 전사한다. 오디오를 받은 지 100ms 남짓 만에 첫 가설(partial)을 내고, 문맥이 쌓이면 이를 수정해 최종 전사를 확정한다. 따라서 에이전트가 화자의 말이 끝나기 전에 추론이나 도구 호출을 시작할 수 있다. Microsoft는 내부 테스트에서 가장 가까운 경쟁사보다 단어가 2배 빨리 표시된다고 밝혔다.

가격은 2026년 말까지 도입가로 오디오 1시간당 $0.54이며, 배치형은 시간당 $0.10이다. 통합 경로는 OpenAI Realtime 호환 WebSocket을 쓰는 Realtime API와 Azure Speech SDK 두 가지이며, MAI Playground·Vercel·Azure Voice Live에서도 쓸 수 있다. Microsoft는 45초 분량 오디오를 150ms 종단 지연으로 생성하는 MAI-Voice-2.1-Flash($15/100만 자)와 묶어 완전한 음성 루프 구성을 제안한다.

## 왜 중요한가?
전화 상담 AI처럼 말로 대화하는 에이전트는 "알아듣는 속도"가 곧 품질입니다. Microsoft가 OpenAI 방식과 호환되는 고속 음성인식을 내놓으면서, 음성 에이전트를 만드는 회사들이 고를 수 있는 선택지가 넓어지고 가격 경쟁도 붙을 수 있습니다.

## 심층 분석

### 기술 의미
첫 partial이 최종 전사만큼 정확하다는 점(MarkTechPost 설명)은 에이전트가 말 중간에 행동을 시작하는 '선제 처리' 설계를 가능하게 한다. 지연을 SileroVAD로 감지한 발화 종료 시점부터 재는 AA-WER Streaming 지표의 50%가 에이전트 대화 데이터(AA-AgentTalk)라는 점도, 평가 기준 자체가 음성 에이전트 중심으로 이동하고 있음을 보여준다(→ 분석). OpenAI Realtime 호환 API를 택한 것은 기존 음성 에이전트 코드의 이전 비용을 낮추려는 선택이다.

### 업계 영향
MarkTechPost는 스트리밍 요금이 xAI·Meta보다 높고 Google 추정 요금과 비슷하다고 전했다. Microsoft가 STT·TTS를 자체 MAI 모델로 채우면서 OpenAI 의존도를 낮추는 흐름이 음성 영역까지 확장된 것으로 볼 수 있다(→ 분석). LiveKit 지원이 예정돼 있어 오픈소스 음성 에이전트 프레임워크 생태계로의 유입도 예상된다.

### 관련 프로젝트
- Azure Speech SDK, Azure Voice Live, MAI Playground

### 관련 뉴스
- [SpaceXAI Grok Voice Transcribe 2](../records/2026-09-20-spacexai-grok-voice-transcribe-2.md) — 경쟁 음성인식 모델
- [Microsoft 자체 AI 모델로 비용 89% 절감](../records/2026-07-28-microsoft-in-house-ai-models-cut-costs-89-percent-vs-openai.md) — MAI 자체 모델 전략
- [Microsoft MAI-Cyber-1-Flash](../records/2026-07-28-microsoft-mai-cyber-1-flash-agentic-security.md) — MAI 모델 라인업

## 원문 발췌
> "Microsoft AI has released MAI-Transcribe-2-Streaming, its first streaming speech-to-text (STT) model. It launched on October 1, 2026, alongside 2 text-to-speech models, MAI-Voice-2.1 and MAI-Voice-2.1-Flash."
> "Artificial Analysis ranks it #1 of 38 models for final and first partial transcript accuracy."
> "MAI-Transcribe-2-Streaming costs $0.54 per hour of audio. This is an introductory price through the end of 2026."

## 수집 노트
- **선정 이유**: 음성 에이전트의 핵심 부품(실시간 STT)에서 대형사가 신모델을 낸 소식으로, 단일 소스(교차 1)라 중요도는 낮게 산정되지만 에이전트 인프라 주제와 직접 연결됨.
- **제외 후보**: Decision AI 모델 비교 해설(MarkTechPost) — 신규 발표가 아닌 비교 기사. Meta·OpenAI·Uber 에이전트 발화 타이밍 해설(MarkTechPost) — 연구 해설로 신규 사실 부족.
