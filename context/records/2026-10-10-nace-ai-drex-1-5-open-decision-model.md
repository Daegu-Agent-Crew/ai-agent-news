# Nace AI, 9B 의사결정 모델 Drex 1.5 오픈소스 공개 — 텍스트 대신 선택지에 점수

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/10/09/nace-ai-open-sources-drex-1-5-a-9b-decision-model-that-scores-options-not-text/
- **소스**: MarkTechPost
- **발행일**: 2026-10-09
- **수집일**: 2026-10-11
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [nace-ai, drex, decision-model, open-weight, jev, qwen, agent-backend]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 1개(0) = 2
- **신선도**: fresh

## 핵심 요약
> MarkTechPost에 따르면 Nace.AI가 텍스트를 생성하지 않고 상태와 질문을 받아 각 선택지의 확률을 반환하는 9B 의사결정 모델 Drex 1.5를 오픈소스로 공개했다. Nace는 공개 Decision Index 0.3.1에서 10B 미만 최고점인 58.08을 기록했다고 보고했다.

## 번역 (한국어)
MarkTechPost에 따르면 Nace.AI는 에이전트와 백엔드 워크플로용 9B 의사결정 모델 Drex 1.5를 오픈소스로 공개했다. 이 모델은 텍스트를 쓰지 않는다. 상태(텍스트 또는 JSON)와 이름 붙은 질문을 받아 모든 선택지의 확률을 1회 순전파로 반환한다. 질문 유형은 선택형, 예/아니오, 서열 점수 세 가지이며, 토큰을 샘플링하지 않아 temperature·top_p가 적용되지 않는다.

Drex 1.5는 POST /v1/systemone API를 제공하는데, 이는 이 범주를 연 TypeSafe의 폐쇄형 모델 Jev와 같은 요청 형식이다. Nace는 기존 Jev 클라이언트가 환경 변수 몇 개만 바꾸면 동작한다고 밝혔다. 백본은 Qwen 3.5 9B를 증류한 MiMo-V2.6-Distill-Qwen-9B이고, 별도 포인터 헤드가 각 선택지에 점수를 매긴다.

모델 카드에 따르면 Drex 1.5는 37개 벤치마크로 구성된 Decision Index 0.3.1에서 Jev, Nimble과 0.9점 동점 구간 안에 있으며, 37개 중 20개에서 Jev를 앞섰다. JevBench에서는 86.2%로 Jev(87.0%)와 비슷했다. 반면 지식 집약 테스트는 약점으로, GPQA Diamond 45.4%(Jev 78.6%), MMLU-Pro 58.7%(Jev 82.7%)를 기록했다.

가중치는 Hugging Face에, 호스팅 버전은 OpenRouter에 공개됐다. 가중치 라이선스는 사용 제한이 있는 RAIL-M이며, Ollama·llama.cpp 로컬 배포에는 Nace의 포크가 필요하다. Claude Code, Codex, Cursor, Gemini CLI 등에 연결하는 Drex 에이전트 스킬도 함께 제공된다.

## 왜 중요한가?
AI 에이전트가 "A·B·C 중 무엇을 할까"를 정할 때마다 큰 언어모델에 문장을 쓰게 하는 대신, 작은 전용 모델이 빠르게 점수만 매기는 방식이 확산되고 있습니다. 오픈소스 대안이 나오면서 기업이 이런 '판단 전용 AI'를 직접 설치해 쓸 수 있게 됐습니다.

## 심층 분석

### 기술 의미
생성 대신 고정 선택지에 확률을 내는 구조는 출력 형식 오류가 원천적으로 불가능해, 에이전트 라우팅·분류·도구 선택 단계의 신뢰성을 높인다(→ 분석). 상태를 한 번 인코딩해 여러 질문에 공유하는 방식은 다질문 의사결정의 지연·비용을 줄인다. MarkTechPost가 지적했듯 인덱스 벤치마크의 훈련 분할로 학습했기 때문에, 새로운 도메인에서의 성능은 별도 검증이 필요하다.

### 업계 영향
TypeSafe Jev가 연 'systemone' API 형식을 Microsoft·OpenAI·Nace가 잇달아 따르면서 의사결정 모델이 사실상의 표준 인터페이스를 갖춰가고 있다(→ 분석). 오픈 웨이트 대안의 등장은 Jev의 높은 기업가치에 가격 압력이 될 수 있다(→ 분석). 다만 RAIL-M 라이선스와 비주류 포크 의존성은 기업 도입의 장벽으로 남는다(→ 분석).

### 관련 프로젝트
- Drex 1.5 (Hugging Face / OpenRouter)

### 관련 뉴스
- [Microsoft-Decision-1 공개](../records/2026-10-10-microsoft-decision-1-fast-decision-model.md) — 같은 날 나온 Qwen3.5-9B 기반 의사결정 모델
- [OpenAI Decisions API 공개 베타](../records/2026-10-10-openai-decisions-api-public-beta.md) — 같은 범주의 OpenAI 상용 API
- [TypeSafe, Jev로 75억 달러 가치 평가](../records/2026-10-10-typesafe-jev-870m-series-a-7-5b.md) — 이 범주를 연 원조 모델의 투자

## 원문 발췌
> The Drex 1.5 decision model does not write text. It reads a state and typed questions, then returns a probability for every option.
> Nace reports 58.08 on the public Decision Index 0.3.1, the top score under 10B parameters. Weights are on Hugging Face, and a hosted version is live on OpenRouter.
> It serves the POST /v1/systemone API. That is the same request format used by TypeSafe's Jev, the closed model that started this category.

## 수집 노트
- **선정 이유**: 단일 매체(교차 1)라 ⭐⭐지만, 최근 연속 기록 중인 '의사결정 모델' 범주의 첫 오픈 웨이트 Jev 호환 모델이라 흐름 추적용으로 선정.
- **제외 후보**: Alibaba Qwen-Image-2.1-Turbo — 이미지 모델로 에이전트 관련성 낮고 Qwen-Image-2.1 기록 존재. Talorys(Cloudflare 무료 티어 개인 에이전트, HN) — 개인 GitHub 프로젝트로 반응 규모 제한적.
