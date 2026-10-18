# TinyFish, 에이전트용 웹 검색·페치 무료화 — "진짜 비용은 검색료가 아니라 토큰"

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/10/18/tinyfish-free-search-ai-agent-token-cost/
- **소스**: MarkTechPost
- **발행일**: 2026-10-18
- **수집일**: 2026-10-19
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [tinyfish, web-search-api, token-cost, artificial-analysis, agent-infrastructure]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 1개(0) + 반응 미확인(0) = 2
- **신선도**: fresh

## 핵심 요약
> MarkTechPost에 따르면 AI 에이전트용 웹 인프라 기업 TinyFish는 요청 한도 내에서 Search·Fetch를 무료로 제공하며, 에이전트 비용은 검색료보다 가져온 페이지가 소모하는 모델 토큰이 좌우한다고 주장한다. Artificial Analysis 9월 28일 스냅샷에서 TinyFish Search는 점수 71, 1,000개 작업당 모델 비용 $9.30으로 표시된 12개 구성 중 총비용이 가장 낮았다.

## 번역 (한국어)
웹을 읽는 AI 에이전트는 두 종류의 비용을 낸다. 검색·페치 API가 요청당 매기는 검색료와, 가져온 페이지를 모델에 넣을 때 드는 토큰 처리 비용이다. TinyFish는 팀들이 모델 비용만 예산에 넣고, 검색 결과가 그 비용을 얼마나 키우는지는 과소평가한다고 주장한다.

TinyFish는 요청 한도 안에서 검색료를 0원으로 만들었다. 가격 페이지 기준 Search는 분당 30회·시간당 500회, Fetch는 분당 150개 URL·하루 1,000개까지 무료이며 지갑 잔액이 0이어도 동작한다. 별도 과금되는 Agent는 단계당 $0.016, Browser는 분당 $0.002다. TinyFish는 무료화가 가능한 이유로 이미 구축한 브라우저 인프라 공유, 검색 전용 웹 네이티브 모델, 거대 인덱스를 두지 않는 전략을 들었다.

TinyFish가 6월 2일 45개 URL·5개 공급자로 한 자체 평가에서, 약 4,300자 본문의 Daily Mail 기사 하나에 대해 Firecrawl은 TinyFish보다 약 36배 많은 문자를 반환했다. MarkTechPost 계산으로 약 42,774토큰짜리 페이지는 128K 컨텍스트의 3분의 1을 차지한다. 다만 MarkTechPost는 이것이 단일 페이지 비교이며 TinyFish가 스스로 시험했고 표본이 45개라는 한계를 함께 적었다.

Artificial Analysis는 답변 모델(GPT-5.6 Luna)을 고정하고 검색 공급자만 바꿔 비교한다. 9월 28일 스냅샷에서 모델 비용은 1,000개 작업당 $8.04~$21.65였고, TinyFish는 검색 $0 + 모델 $9.30으로 총비용 최저였다. 반면 Search Index 점수는 71로 표시된 구성 중 최저(최고는 Perplexity Search medium 80, 검색 없음 기준선 33)였고, 작업당 약 59초로 두 번째로 느렸다.

## 왜 중요한가?
AI 비서가 인터넷을 검색할 때 드는 비용은 검색 요금보다, 가져온 웹페이지를 AI가 '읽는' 데 드는 비용이 더 클 수 있다는 점을 보여줍니다. 깔끔하게 필요한 내용만 가져오는 도구가 결국 돈을 아낀다는 뜻입니다.

## 심층 분석

### 기술 의미
에이전트 비용 구조에서 '검색 결과의 정제도'가 핵심 변수라는 주장은, 페치 단계의 본문 추출 품질이 곧 비용 최적화라는 관점이다(→ 분석). 그러나 핵심 근거인 36배 차이는 TinyFish 자체 시험·단일 페이지 사례라 일반화하기 어렵다고 원문도 밝힌다. 최저 비용과 최저 정확도(71점)가 동시에 나타나 비용·품질 트레이드오프가 분명하다(→ 분석).

### 업계 영향
검색 API가 무료화되면 Tavily·Exa·Firecrawl 같은 유료 공급자에 가격 압박이 생길 수 있다(→ 분석). 'Search는 미끼, Agent·Browser 과금'이라는 모델은 클라우드의 무료 티어 전략과 유사하다(→ 분석). Artificial Analysis 리더보드가 검색 공급자 선택의 기준 지표로 자리잡는 흐름도 확인된다(→ 분석).

### 관련 프로젝트
- TinyFish Search / Fetch (REST, Python·TypeScript SDK, CLI, MCP)
- Artificial Analysis Search API 리더보드

### 관련 뉴스
- [DeepSeek V4.1-Flash 검색 API 공개](../records/2026-10-18-deepseek-v4-1-flash-1017-search-api.md) — 에이전트용 검색 API 경쟁 심화
- [Perplexity SPACE 샌드박스 오픈소스](../records/2026-10-18-perplexity-space-firecracker-sandbox-open-source.md) — 에이전트 인프라 계층 경쟁

## 원문 발췌
> "TinyFish, a web infrastructure company for AI agents, argues that teams budget for the model and underestimate how much retrieved content drives it."
> "On the Sep 28, 2026 Artificial Analysis snapshot, TinyFish Search (web) scores 71 at $9.30 per 1,000 benchmark tasks, with 59.0 seconds per task (model plus search time)."
> "Per the pricing page, Search is free at 30 requests per minute and 500 per hour. Fetch is free at 150 URLs per minute and 1,000 per day."
> "TinyFish ran the test on itself, the sample is 45 URLs, and news pages drove most of the gap."

## 수집 노트
- **선정 이유**: 에이전트 운영 비용에서 검색 결과 토큰이라는 실무 변수를 수치로 다룬 기사로, 단일 소스·업체 주장 위주라는 한계를 명시하고 선정.
- **제외 후보**: Kyutai REKI 2.4B VLA(MarkTechPost) — 24시간 범위 밖·로보틱스. NVIDIA 테이블 예측 튜토리얼(MarkTechPost) — 튜토리얼 성격.
