# Moonshot AI, Kimi K3.1 Pro 공개 — 3T급 오픈웨이트·1M 컨텍스트, Terminal-Bench 4.0 65.7%

## 메타데이터
- **원문 URL**: https://www.kimi.ai/blog/kimi-k3-1-pro
- **소스**: Kimi 공식 블로그 (Moonshot AI), Artificial Analysis, Hacker News
- **발행일**: 2026-10-23
- **수집일**: 2026-10-24
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [kimi, moonshot-ai, open-weight, coding-agent, benchmark, long-context]
- **소스 권위**: official
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐⭐⭐
- **중요도 산정**: 기본 1 + official(Kimi 공식 블로그)(2) + 교차 확인 2개(Artificial Analysis 독립 평가)(1) + HN 625pt·389댓글(1) = 5
- **신선도**: fresh

## 핵심 요약
> Moonshot AI가 K3.1 시리즈 첫 모델 Kimi K3.1 Pro를 공개했다. 회사는 이를 1M 토큰 컨텍스트의 가장 강력한 3T급 오픈웨이트 모델이라고 소개했으며, 전체 가중치는 11월 4일까지 공개된다.

## 번역 (한국어)
Moonshot AI는 공식 블로그에서 K3.1 시리즈의 첫 모델인 Kimi K3.1 Pro를 발표했다. 회사 설명에 따르면 이 모델은 자사 3T급 오픈웨이트 모델 중 가장 강력하며 100만 토큰 컨텍스트 창을 지원하고, 코딩·3D 제작·금융 리서치 등 에이전트 역량이 크게 향상됐다. 2~3배 빠른 K3.1 Pro Highspeed도 함께 출시됐으며, 두 모델은 Kimi.ai, Kimi Work, Kimi Code, Kimi API에서 바로 쓸 수 있다. 전체 가중치는 11월 4일까지 공개될 예정이다.

K3.1 Pro는 Kimi K3를 훨씬 큰 사후학습 컴퓨트로 다시 훈련한 버전이다. Moonshot은 수백 개 다운스트림 도메인에 걸친 대규모 공동 강화학습을 위해 RL 프레임워크, 장문 추론, 샌드박스 인프라, 롤아웃 스케줄링 등 스택 전 계층을 최적화했다고 밝혔다.

Moonshot이 공개한 수치에 따르면 Terminal-Bench 4.0에서 K3.1 Pro는 65.7%로 GPT-6 Astra(58.2%)를 앞서고 Claude Opus 5.5(66.4%)에 근소하게 뒤졌다. 사내 벤치마크 Kimi Code Bench 3.0 Long-horizon에서는 61.2%로 K3(55.95%)보다 높았다. 3D 재구성 벤치마크 BenchCAD에서는 도구 사용 시 92.7%를 기록했다.

독립 평가 기관 Artificial Analysis는 K3.1 Pro가 Intelligence Index 55점으로 215개 모델 중 4위라고 집계했다. 같은 페이지 기준 가격은 입력 100만 토큰당 $2.00, 출력 $10.00이며, 출력 속도는 초당 약 77토큰으로 평균보다 느리고 평가 중 1.5억 토큰을 생성해 장황한 편으로 분류됐다.

## 왜 중요한가?
누구나 내려받아 쓸 수 있는 '오픈' 모델이 최고 수준의 유료 모델과 코딩 실력에서 거의 대등해졌다는 뜻입니다. 기업들은 비싼 API에 묶이지 않고 자체 서버에서 강력한 코딩 에이전트를 돌릴 선택지를 얻게 됩니다. Hacker News에서도 600점 넘는 반응이 나올 만큼 개발자 관심이 큽니다.

## 심층 분석

### 기술 의미
K3.1 Pro는 아키텍처 변경보다 사후학습 RL 컴퓨트 확대로 성능을 끌어올린 사례로, '프리트레인 이후 RL 스케일링'이 오픈 진영에서도 주력 전략이 됐음을 보여준다(→ 분석). Terminal-Bench 수치는 Moonshot 자체 발표이므로 독립 재현 전까지는 회사 주장으로 봐야 하며, Artificial Analysis의 4위 집계가 부분적인 외부 확인 역할을 한다(→ 분석). 출력 토큰이 중앙값보다 크게 많다는 점은 실제 운영 비용이 단가보다 높게 나올 수 있음을 시사한다(→ 분석).

### 업계 영향
가중치 공개가 예정대로 이뤄지면 셀프호스팅 코딩 에이전트의 성능 상한이 크게 오른다(→ 분석). OpenCode 같은 오픈 하네스와 결합해 폐쇄형 코딩 도구의 가격 압박 요인이 될 수 있다(→ 분석). 반면 3T급 모델을 직접 서빙할 수 있는 조직은 제한적이어서, 실질적 수혜는 추론 호스팅 사업자에게 먼저 갈 가능성이 있다(→ 분석).

### 관련 프로젝트
- Kimi API / Kimi Code
- Artificial Analysis 모델 페이지: https://artificialanalysis.ai/models/kimi-k3-1-pro

### 관련 뉴스
- [OpenAI GPT-6](../records/2026-10-08-openai-gpt-6-intelligent-ui-for-everyone.md) — 비교 대상 폐쇄형 프런티어 모델
- [Claude Haiku 5.5](../records/2026-10-08-anthropic-claude-haiku-5-5.md) — 같은 달 공개된 프런티어 랩 모델

## 원문 발췌
> "We're introducing Kimi K3.1 Pro, the first model in our new K3.1 series and our most capable 3T-class open-weight model to date, with a 1-million-token context window."
> "The full model weights will be released by Nov 4."
> "On Terminal-Bench 4.0 ... K3.1 Pro scores 65.7%, ahead of GPT-6 Astra (58.2%) and narrowly behind Claude Opus 5.5 (66.4%)."
> (Artificial Analysis) "Kimi K3.1 Pro scores 55 on the Artificial Analysis Intelligence Index, placing it well above average among comparable models (median: 27)."

## 수집 노트
- **선정 이유**: 공식 발표에 독립 평가(Artificial Analysis)가 붙고 HN 625pt로 오늘 탐색 후보 중 반응이 가장 커서 선정.
- **제외 후보**: You.com Inference Router(MarkTechPost) — 추론 라우팅 상품 출시로 에이전트 직접 관련성 낮음. Gemma-4-26B ThinkingCap(HN 91pt) — 개인 블로그 단일 소스.
