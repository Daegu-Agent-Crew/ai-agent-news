# 웹사이트들, AI 에이전트에 문 닫는다 — Delta·JPMorgan·Schwab 차단, Yelp는 유료만

## 메타데이터
- **원문 URL**: https://www.theverge.com/ai-artificial-intelligence/1013195/ai-agents-blocked-web
- **소스**: The Verge
- **발행일**: 2026-10-17
- **수집일**: 2026-10-19
- **수집자**: 레노버
- **카테고리**: industry
- **태그**: [ai-agents, bot-blocking, agentic-commerce, meta-muse, amazon, cloudflare]
- **소스 권위**: major-media
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐⭐
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 2개(TechCrunch 10/06 보도)(1) + 반응 HN 131pt(1) = 4
- **신선도**: fresh

## 핵심 요약
> The Verge는 Meta Muse, xAI Grok, OpenAI Dots, Instinct 사용자들이 주요 웹사이트에서 에이전트 작업이 차단되는 사례를 보고하고 있다고 전했다. Delta는 에이전트의 항공권 예약을 막고, JPMorgan Chase와 Charles Schwab은 보안 우려로 계정 접근을 차단한다고 확인했다.

## 번역 (한국어)
The Verge의 Emma Roth는 OpenAI·Meta·Google 등이 '무엇이든 대신 해주는' 에이전트를 약속하지만, 웹의 나머지가 협조하지 않고 있다고 보도했다. 최근 몇 주간 Meta Muse, xAI Grok, OpenAI Dots, Instinct 사용자들이 주요 사이트에서 작업이 막혔다고 보고했다. Yelp는 TechCrunch에 데이터 라이선스 프로그램 비용을 내는 에이전트만 허용한다고 밝혔고, Delta는 대리 예약을 막고 있다. JPMorgan Chase와 Charles Schwab은 보안을 이유로 차단을 확인했으며, 일부 사용자는 Cars.com·Amtrak도 더 이상 접속되지 않는다고 말했다.

Amazon은 지난해 Perplexity의 에이전트 쇼핑 기능을 금지하고 소송을 냈다. Perplexity는 Amazon이 광고를 볼 사람이 줄어드는 걸 꺼린다고 반박했다. 판사는 Perplexity에 쇼핑 중단을 명령했지만 8월 항소심에서 뒤집혔고, Amazon은 수정 소장을 냈다. Amazon은 최근 Meta Muse의 '지속적 접근'도 정책 위반이라고 했으며, Grok·Instinct·Dots도 Amazon을 쓰지 못한다는 보고가 있다.

AI 안전 평가사 EquiStamp CEO Chris Canal은 The Verge에 이런 차단이 OpenAI·Anthropic 같은 회사의 가치 인식에 "분명히" 영향을 준다고 말했다. Meta는 "개인 에이전트를 돌려보내는 것은 그 뒤의 고객을 돌려보내는 것"이라며 Walmart·Gap·Sephora·Best Buy 등과 제휴했고, Shopify도 매장 네트워크를 에이전트에 개방했다.

의도적 차단이 아니어도 봇 방지 시스템과 충돌한다. Reddit에는 Google이 Muse 사용 계정 일부를 '의심 활동'으로 막는다는 보고가 있고, Meta 제휴사인 Walmart에서도 결제 문제가 있다는 보고가 나왔다. Cloudflare는 2025년 AI 크롤러 원클릭 차단에 이어, 검색 색인과 AI 학습을 동시에 하는 크롤러도 막기 시작했다. Canal은 이런 장치가 결국 웹을 더 "귀찮게" 만들 것이라고 전망했다.

## 왜 중요한가?
AI 비서가 아무리 똑똑해도 항공사·은행·쇼핑몰이 문을 닫으면 대신 해줄 수 있는 일이 줄어듭니다. 앞으로 에이전트의 쓸모는 'AI 성능'만큼이나 '어느 회사와 제휴했느냐'에 달릴 수 있습니다.

## 심층 분석

### 기술 의미
차단은 의도적 정책(Delta·은행·Yelp)과 범용 봇 방지 장치 오탐(Google·Walmart)이라는 두 층위로 나뉘며, 해법도 다르다(→ 분석). 후자는 에이전트 신원 증명·서명 같은 기술 표준으로 풀 여지가 있지만, 전자는 사업 협상의 문제다(→ 분석). Perplexity SPACE 같은 샌드박스가 보여준 송신 정책 우회 능력은 역으로 사이트 운영자의 경계심을 키울 수 있다(→ 분석).

### 업계 영향
Yelp의 '유료 라이선스만 허용' 모델은 에이전트 접근이 새 수익원이 되는 '통행료 웹'의 신호로 보인다(→ 분석). Meta·Shopify의 제휴·개방 전략과 Amazon의 폐쇄 전략이 갈리며 에이전트 커머스 진영이 형성되고 있다(→ 분석). 금융권 차단은 에이전트의 계정 접근에 대한 위임 인증 표준 수요를 키울 것이다(→ 분석).

### 관련 프로젝트
- Cloudflare AI 크롤러 차단
- Shopify 에이전트 개방, Meta 에이전트-비즈니스 오픈 표준

### 관련 뉴스
- [AI 에이전트의 다음 장벽: 웹사이트 차단](../records/2026-10-07-ai-agents-blocked-by-websites.md) — 같은 흐름의 TechCrunch 선행 보도
- [Amazon, Meta Muse 에이전트 차단](../records/2026-09-22-amazon-blocks-meta-muse-agent.md) — Amazon 차단 사례

## 원문 발췌
> "In recent weeks, users of services like Meta's Muse, xAI's Grok, OpenAI's Dots, and Instinct have reported blocks preventing their AI agents from performing tasks across top websites."
> "Yelp told TechCrunch that it only allows AI agents that pay for its data licensing program, while Delta Air Lines is preventing them from booking tickets on behalf of users. JPMorgan Chase and Charles Schwab have also confirmed that they're blocking AI agents from accessing accounts due to security concerns."
> "Turning away a personal agent means turning away the customer behind it," the company says.

## 수집 노트
- **선정 이유**: HN 131pt로 반응이 크고 TechCrunch 선행 보도와 교차되며, 금융권(JPMorgan·Schwab) 차단과 Amazon–Perplexity 항소심 등 새 사실이 추가돼 선정. 원문 발행은 10/17 13:00 UTC로 HN 게재(10/18) 기준 수집.
- **제외 후보**: Terry Tao "수학의 황금기냐 암흑기냐" 에세이(HN) — 의견 글로 사실 기록 대상이 아님. Namecheap 도메인 압류 글(HN) — AI 무관.
