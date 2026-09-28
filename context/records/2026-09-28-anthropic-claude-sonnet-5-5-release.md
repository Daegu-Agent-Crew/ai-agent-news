# Anthropic, Claude Sonnet 5.5 출시 — 30% 빠르고 작업당 최대 30% 저렴

## 메타데이터
- **원문 URL**: https://www.anthropic.com/claude-sonnet-5-5
- **소스**: Anthropic 공식 블로그
- **발행일**: 2026-09-28
- **수집일**: 2026-09-29
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [anthropic, claude, sonnet-5-5, agentic-coding, terminal-bench, model-release]
- **소스 권위**: official
- **교차 확인**: 3
- **교차 확인 근거**: Anthropic 공식 발표, TechCrunch 보도, Artificial Analysis 평가 페이지
- **중요도**: ⭐⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Anthropic이 Claude 5.5 제품군의 두 번째 모델 Sonnet 5.5를 출시했다. Anthropic은 Sonnet 5 대비 30% 이상 빠르고 대부분 작업에서 최대 30% 저렴하며, Terminal-Bench 4.0에서 70.6%(Sonnet 5는 10.3%)를 기록했다고 밝혔다.

## 번역 (한국어)
Anthropic은 Claude 5.5 제품군의 두 번째 모델인 Claude Sonnet 5.5를 공개했다. 회사는 이 모델이 Sonnet 5보다 확실히 향상됐고, 30% 이상 빠르며, 대부분의 작업에서 비용이 최대 30% 적게 든다고 설명했다. Sonnet 5.5는 Opus 5.5를 보완하는 더 빠르고 저렴한 모델로, 범위가 명확한 일상 업무·버그 수정·문서/슬라이드/스프레드시트 작성에 가장 강하다고 Anthropic은 밝혔다. 대량·저비용 용도의 Claude Haiku 5.5는 수 주 내 합류할 예정이다.

성능 면에서 Anthropic에 따르면 Sonnet 5.5는 에이전트형 코딩 평가 Terminal-Bench 4.0에서 70.6%를 기록해 Sonnet 5의 10.3%를 크게 앞섰다. 다양한 직업의 실무를 평가하는 GDPval-AA에서는 Opus 5.5보다 2점 낮았고, 스크린샷만으로 포켓몬 레드를 클리어한 첫 Sonnet 모델이라고 회사는 밝혔다.

가격은 Sonnet 5와 동일하게 입력 100만 토큰당 $2, 출력 100만 토큰당 $10, 캐시 읽기 100만 토큰당 $0.20이다. Anthropic은 같은 작업에 필요한 토큰이 훨씬 적어 자체 테스트에서 작업당 비용이 최대 30% 낮았다고 설명했다. 여러 벤치마크에서 Low/Medium 노력 설정의 Sonnet 5.5가 Sonnet 5의 최고 점수를 약 10분의 1 비용으로 넘어섰다고 회사는 주장했다.

안전 측면에서 Anthropic은 Sonnet 5.5의 사이버보안 역량이 Opus 5와 비슷해, 최상위 모델용으로 개발한 사이버 안전장치를 적용한 첫 Sonnet 모델이 됐다고 밝혔다. TechCrunch는 이번 모델의 핵심 셀링 포인트가 "속도"라고 평가했다.

## 왜 중요한가?
AI 모델의 성능 경쟁이 "더 똑똑하게"에서 "같은 일을 더 싸고 빠르게"로 옮겨가고 있음을 보여주는 발표다. 가격표는 그대로인데 토큰 사용이 줄어 실제 비용이 떨어지므로, 에이전트를 대량으로 돌리는 기업일수록 체감 효과가 크다. 중간급 모델에도 최상위급 사이버 안전장치가 붙기 시작했다는 점도 눈여겨볼 대목이다.

## 심층 분석

### 기술 의미
Terminal-Bench 4.0에서 10.3%→70.6%라는 도약은 중간급 모델이 장기 다단계 CLI 작업에서 실용 구간에 들어섰다는 신호로 읽힌다. (→ 분석) 가격 인하 대신 "토큰 효율"로 비용을 낮춘 방식은 노력(effort) 설정별 비용-성능 곡선을 제품 선택의 핵심 축으로 만든다. 사이버 역량이 Opus 5 수준에 도달해 안전장치가 하향 적용된 것은, 역량 기반 안전 정책이 모델 등급이 아닌 측정된 능력으로 결정된다는 운영 원칙을 보여준다.

### 업계 영향
Sonnet급 모델이 Opus급 성능에 근접하면 에이전트 오케스트레이션에서 "상위 모델은 판단, 중간 모델은 대량 실행" 구조가 더 경제적이 된다. (→ 분석) TechCrunch가 짚었듯 OpenAI의 Sol/Luna 업데이트 직후 나온 발표로, 중간·저가 티어 경쟁이 가속될 가능성이 있다. Haiku 5.5 예고까지 고려하면 5.5 제품군 전 라인업 교체가 수 주 내 마무리될 전망이다.

### 관련 프로젝트
- [Sonnet 5.5 System Card](https://www-cdn.anthropic.com/870c8f525702625d2c62fc6dd04c857e3250bec1/Claude%20Sonnet%205.5%20System%20Card.pdf)
- [Artificial Analysis — Claude Sonnet 5.5](https://artificialanalysis.ai/models/claude-sonnet-5-5)

### 관련 뉴스
- [Anthropic Claude Opus 5.5 출시](2026-09-23-anthropic-claude-opus-5-5-release.md) — 같은 5.5 제품군의 상위 모델
- [Anthropic Claude Sonnet 5](2026-07-01-anthropic-claude-sonnet-5.md) — 직전 세대 Sonnet

## 원문 발췌
> "Introducing Claude Sonnet 5.5, the second model in the Claude 5.5 family. It's a clear upgrade over Claude Sonnet 5, runs 30%+ faster, and costs up to 30% less for most work."
> "Sonnet 5.5 scores 70.6% on Terminal-Bench 4.0, an agentic coding evaluation, compared to Sonnet 5's 10.3%."
> "Sonnet 5.5 is priced the same as Sonnet 5 at $2 per million input tokens, $10 per million output tokens, and $0.20 per million tokens for cache reads, but it typically needs far fewer tokens to do the same work."
> "Because its cybersecurity capabilities are comparable to Opus 5's, it's the first Sonnet model to launch with cyber safeguards and fallbacks like those we've developed for our most capable models."

## 수집 노트
- **선정 이유**: 공식 발표 + TechCrunch·Artificial Analysis 교차 확인 + HN 508pt로 산정표 최고점에 해당하는 오늘의 핵심 모델 릴리스.
- **제외 후보**: "Fireworks AI Ember-1(Kimi K3 후처리 모델, MarkTechPost)" — 단일 소스·반응 미미해 Sonnet 5.5 대비 우선순위 낮음. "Google Gemini Gems→skills 전환(TechCrunch)" — 제품 기능 개편으로 오늘 5건 한도 내 우선순위 밖.
