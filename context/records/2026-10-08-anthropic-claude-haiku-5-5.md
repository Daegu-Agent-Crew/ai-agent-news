# Anthropic, Claude Haiku 5.5 출시 — Haiku 4.5 대비 약 75% 저렴, Sonnet 5.5 캐시 읽기 가격도 절반으로

## 메타데이터
- **원문 URL**: https://www.anthropic.com/claude-haiku-5-5
- **소스**: Anthropic 공식 발표 (교차: Artificial Analysis)
- **발행일**: 2026-10-07
- **수집일**: 2026-10-08
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [Anthropic, Claude, Haiku 5.5, 소형모델, 서브에이전트, 가격인하]
- **소스 권위**: official
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Anthropic은 자사 역대 가장 저렴하고 빠르며 능력 있는 소형 모델 Claude Haiku 5.5를 출시했고, 평균 실행 비용이 Haiku 4.5보다 약 75% 낮다고 밝혔다. 같은 날 Sonnet 5.5의 캐시 읽기 가격을 50% 인하했다.

## 번역 (한국어)
Anthropic은 Claude Haiku 5.5를 "지금까지 내놓은 소형 모델 중 가장 저렴하고, 빠르고, 능력 있는 모델"이라고 소개했다. 요약, 컴팩션, 데이터베이스 쿼리, 분류처럼 빠르고 반복적인 대량 작업을 위해 설계됐고, 코딩 작업에서는 Opus 5.5·Sonnet 5.5와 함께 서브에이전트로 쓰기 좋다고 회사는 설명했다. 회사 역대 가장 빠른 모델이라 실시간 고객 지원이나 브라우저 사용처럼 속도가 중요한 작업에도 적합하다고 한다.

가격은 10만 토큰 이하 프롬프트 기준 입력 100만 토큰당 $0.10, 출력 $0.50으로, Haiku 4.5(입력 $1.00, 출력 $5.00)의 10분의 1 수준이다. 10만 토큰 초과 프롬프트는 입력 $0.50, 출력 $2.50이다. Anthropic은 이전 Haiku 요청의 약 90%가 10만 토큰 이하라고 밝혔다.

Anthropic이 공개한 벤치마크에서 Haiku 5.5는 OSWorld 2.1(오프라인 부분집합) 72.4%(Haiku 4.5는 15.7%), Terminal-Bench 4.0 39.2%(Haiku 4.5는 0.0%), Humanity's Last Exam(도구 없음) 45.9%를 기록했다. Haiku 계열 최초로 effort(노력 수준) 조절 기능도 갖췄다.

얼리 테스트 고객의 반응도 함께 공개됐다. Asana는 작업 완료 지연이 30% 이상 줄었다고 했고, HubSpot은 소형 모델 CRM 평가에서 지금까지 본 최고 점수인 92.8%를 기록했다고 밝혔다. Box는 Haiku 4.5보다 11점 높은 점수를 약 절반의 지연 시간으로 얻었다고 했다.

함께 발표된 조치로, Sonnet 5.5의 캐시 읽기 가격이 100만 토큰당 $0.20에서 $0.10으로 50% 내려갔다. Anthropic은 이로써 대부분의 에이전트 작업에서 Sonnet 5.5 비용이 약 20% 줄어든다고 설명했다. Claude Max·Team 구독자에게는 월간 API 크레딧이 새로 제공된다. Haiku 5.5는 AWS, Google Cloud, Microsoft Azure를 포함한 모든 플랫폼에서 `claude-haiku-5-5`로 사용할 수 있다.

## 왜 중요한가?
AI 에이전트는 큰 모델 하나가 아니라 작은 모델 여러 개가 잔심부름(검색·요약·분류)을 나눠 하는 구조로 가고 있다. 그 잔심부름 담당 모델의 가격이 10분의 1로 떨어지면서, 같은 예산으로 훨씬 많은 에이전트를 돌릴 수 있게 됐다.

## 심층 분석

### 기술 의미
Haiku 4.5가 Terminal-Bench 4.0에서 0.0%였던 데 비해 Haiku 5.5가 39.2%를 기록한 것은 소형 모델이 처음으로 에이전트 코딩 작업을 '부분적으로라도' 수행할 수 있는 선을 넘었다는 의미로 읽힌다(→ 분석). effort 설정 도입은 같은 모델로 비용과 지능 사이를 사용자가 조절하게 해, 모델 라우팅 로직을 단순화한다. 프롬프트 길이에 따라 가격을 나누는 구조는 짧은 요청이 대부분이라는 실제 사용 분포를 가격에 반영한 설계다.

### 업계 영향
Anthropic이 비교 대상으로 GPT-6 Luna를 직접 표에 넣은 것은 소형 모델 시장에서 OpenAI와의 가격·성능 경쟁을 공식화한 것으로 볼 수 있다(→ 분석). Cognition이 Devin Fusion에서 Opus 5.5를 리드로, Haiku 5.5를 '사이드킥'으로 쓰는 구성을 소개한 것처럼, 대형+소형 모델을 짝지은 멀티에이전트 구성이 표준 패턴으로 자리 잡는 흐름이 강화될 전망이다. Sonnet 캐시 읽기 인하는 장시간 에이전트 실행 비용에 직접 영향을 준다.

### 관련 프로젝트
- Haiku 5.5 문서: https://platform.claude.com/docs/en/models/haiku-5-5/overview
- Artificial Analysis 평가: https://artificialanalysis.ai/models/claude-haiku-5-5

### 관련 뉴스
- [Claude Sonnet 5.5 출시](../records/2026-09-28-anthropic-claude-sonnet-5-5-release.md) — 이번에 캐시 가격이 인하된 모델
- [Anthropic Claude for Startups 확대](../records/2026-10-07-anthropic-claude-for-startups-expansion.md) — 직전 Anthropic 개발자 지원 소식

## 원문 발췌
> "Introducing Claude Haiku 5.5: the cheapest, fastest, and most capable small model we've ever released."
> "Haiku 5.5 is available at a much lower price than Haiku 4.5. On average, it now costs around 75% less to run."
> "Cache reads now cost 50% less: $0.10 per million tokens rather than $0.20."
> "Haiku 5.5 is our first Haiku-class model to come with an adjustable effort setting."

## 수집 노트
- **선정 이유**: Anthropic 공식 발표이며 Artificial Analysis가 독립 평가 페이지를 냈고 HN 598pt로 오늘 HN AI 항목 중 반응이 가장 커, 산정 점수 5점이다 (1+2+1+1=5).
- **제외 후보**: Meta·Microsoft의 사내 Claude 사용 축소 보도(rswebsols) — 2차 재인용 블로그로 소스 권위가 낮음. Bloomberg "Claude·ChatGPT 소득별 가격 차이" 연구 — 유료 뉴스레터라 원문 확보 불가.
