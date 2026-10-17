# DeepSeek V4.1-Flash-1017 공개 — DeepSWE 77.0, 검색·Fetch API 전면 개방

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/10/17/deepseek-just-released-v4-1-flash-1017-scores-77-0-on-deepswe-opens-search-api/
- **소스**: MarkTechPost
- **발행일**: 2026-10-17
- **수집일**: 2026-10-18
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [deepseek, v4-1-flash, coding-model, search-api, agent-tools, benchmark]
- **소스 권위**: major-media
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐⭐
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 2개(MarkTechPost·OpenRouter 모델 페이지, +1) + HN 511pt(+1) = 4
- **신선도**: fresh

## 핵심 요약
> MarkTechPost에 따르면 DeepSeek은 V4.1-Flash의 새 체크포인트 V4.1-Flash-1017을 웹·앱·API에 공개했고, 자체 표에서 DeepSWE v1.1 77.0으로 Claude Opus 5(74.0)를 앞섰다고 밝혔다. 동시에 Search·Fetch API를 모든 개발자에게 개방했다.

## 번역 (한국어)
DeepSeek이 V4.1-Flash 모델의 새 사후학습 체크포인트인 DeepSeek-V4.1-Flash-1017을 공개했다. DeepSeek 웹사이트, 앱, API에서 바로 쓸 수 있으며, API 모델명은 deepseek-flash다. DeepSeek은 9월 V4.1-Flash 대비 점수가 높고 작업 완료가 빠르며 출력이 짧아졌다며 "성능과 비용 모두의 파레토 개선"이라고 설명했다.

MarkTechPost가 정리한 DeepSeek 자체 수치에 따르면, 1017 체크포인트는 보고된 11개 벤치마크 전부에서 이전 V4.1-Flash를 2.0~11.1점 앞섰다. DeepSWE v1.1에서는 77.0으로 Claude Opus 5(74.0)보다 높았지만, HLE(도구 없음)에서는 42.6으로 Claude Opus 5(56.3)에 크게 뒤졌다. Terminal-Bench 4.0, ProgramBench, NL2Repo에서도 Claude Opus 5가 앞섰다.

모델 규모는 552B 백본 파라미터에 196B Engram 파라미터이며, 토큰당 프리필 8B·디코드 16B를 활성화한다. 컨텍스트는 1M 토큰, 출력은 최대 384K 토큰이다. DeepSeek은 자체 피드백 기반 강화학습으로 엔드투엔드 프로젝트 작업을 학습했고, DeepSeek Harness·Tencent CodeBuddy·WorkBuddy에 맞춰 튜닝했다고 밝혔다. 1017 체크포인트의 가중치 공개 여부는 공개되지 않았다.

함께 공개된 Search API는 질의에 대한 순위화된 웹 결과를, Fetch API는 단일 페이지를 마크다운으로 반환한다. 가격은 엔드포인트별 성공 요청 1,000건당 $0.75이며 계정당 5 QPS 제한이 있다. DeepSeek Harness·Claude Code·Codex를 통한 서버 측 호출은 2026년 11월 1일까지 무료다. 모델 가격은 피크 기준 입력(캐시 미스) 1M 토큰당 $0.30, 출력 $1.20이다.

## 왜 중요한가?
값싼 중국 모델이 코딩 에이전트 벤치마크 일부에서 최상위 상용 모델을 넘어섰다고 주장한 것으로, AI 코딩 비용이 더 내려갈 수 있다는 신호입니다. 또 검색 기능까지 한 회사 API로 묶어 제공해, 에이전트를 만드는 쪽에서는 선택지가 하나 더 생겼습니다.

## 심층 분석

### 기술 의미
모든 벤치마크 수치는 DeepSeek 자체 측정이며 Terminal-Bench는 Claude Code, DeepSWE는 Mini-SWE-V2 하네스에서 돌렸다고 명시돼 있어, 하네스 차이가 결과에 영향을 줄 수 있다(→ 분석). 에이전트형 벤치(DeepSWE, Agents' Last Exam)에서 강하고 지식·추론형(HLE)에서 약한 패턴은 RL이 장기 작업 수행에 집중됐음을 시사한다(→ 분석). 활성 파라미터 8B/16B 수준으로 이런 성능을 낸다는 주장은 추론 비용 측면의 효율을 보여준다(→ 분석).

### 업계 영향
모델 회사가 검색·페치 같은 "1차 도구 계층"을 직접 판매하기 시작하면서, 에이전트 스택이 모델+도구 번들로 수직 통합되는 흐름이 강화된다(→ 분석). Claude Code·Codex 경유 호출을 한시 무료로 둔 것은 경쟁사 하네스 사용자층을 직접 겨냥한 유입 전략으로 읽힌다(→ 분석, 가설). 입력 $0.30/출력 $1.20 가격은 코딩 에이전트 운영비 비교에서 강한 압박 요인이 된다.

### 관련 프로젝트
- DeepSeek Harness v0.2.1-rc.1+
- OpenRouter: deepseek/deepseek-v4.1-flash-1017
- Tencent CodeBuddy / WorkBuddy

### 관련 뉴스
- [DeepSeek Harness v0.2 데스크톱 앱](../records/2026-10-05-deepseek-harness-v0-2-desktop-app.md) — 1017이 최적화된 DeepSeek 하네스
- [DeepSeek DSec 샌드박스 인프라](../records/2026-09-26-deepseek-dsec-sandbox-infrastructure.md) — DeepSeek 에이전트 인프라 맥락

## 원문 발췌
> "DeepSeek has just released DeepSeek-V4.1-Flash-1017, a new checkpoint of its V4.1-Flash model. It is live on the DeepSeek website, app and API."
> "Best: 77.0 on DeepSWE v1.1, above Claude Opus 5 (74.0) in DeepSeek's table."
> "Worst: 42.6 on HLE without tools, versus 56.3 for Claude Opus 5."
> "Free window: Server-side calls via DeepSeek Harness, Claude Code or Codex stay free until November 1, 2026."

## 수집 노트
- **선정 이유**: MarkTechPost 상세 보도와 OpenRouter 모델 등록이 교차되고 HN 511pt 반응이 있는 주요 모델 업데이트이며, 에이전트용 검색 API 개방이 함께 포함됨.
- **제외 후보**: StepFun Step 5 Preview 오픈 가중치(MarkTechPost) — 9월 20일 Step 5 Preview 출시 레코드가 이미 있어 중복 우려로 제외. Kyutai REKI 2.4B VLA — 로보틱스 모델로 에이전트 관련성이 상대적으로 낮고 수집 상한 초과.
