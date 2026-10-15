# Apate, 사기범에게 '일부러 속는' AI 에이전트 수천 개로 사기 정보 수집

## 메타데이터
- **원문 URL**: https://techcrunch.com/2026/10/14/apate-sends-ai-agents-undercover-to-get-scammed-so-they-can-gather-fraud-intelligence/
- **소스**: TechCrunch (Ram Iyer)
- **발행일**: 2026-10-14
- **수집일**: 2026-10-15
- **수집자**: 레노버
- **카테고리**: industry
- **태그**: [apate, scam-baiting, fraud-intelligence, voice-agents, startup, techcrunch-disrupt]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 1개(0) + 반응 미미(0) = 2
- **신선도**: fresh

## 핵심 요약
> 호주 스타트업 Apate.ai는 피해자로 위장한 AI 에이전트 수천 개를 운영해 사기범과 대화하며 계좌·암호화폐 지갑·전화번호 등 정보를 캐낸다. 회사는 지금까지 250만 건 대화에서 사기범의 시간 17년을 낭비시켰다고 밝혔다.

## 번역 (한국어)
TechCrunch에 따르면 2024년 시드니 매쿼리대 연구를 바탕으로 설립된 Apate는 무고한 피해자로 위장한 AI 에이전트 수천 개를 배치한다. 에이전트는 사기 전화를 받고, 수상한 문자·이메일에 답하고, 피싱 링크를 따라가고, 소셜 미디어 그룹에 들어가 사기범을 유인한다. 다양한 나이·성별·억양·언어를 흉내 내며 사기범을 오래 붙잡아 둔다.

회사 측은 에이전트가 지금까지 250만 건의 대화에서 사기범의 시간 17년을 낭비시켰다고 밝혔다. 더 중요한 것은 보통 피해가 발생한 뒤에야 알 수 있는 은행 계좌, 암호화폐 지갑, 전화번호, 악성 사이트, 사칭 브랜드 같은 정보를 미리 캐내 은행·통신사·정부기관 고객에게 넘긴다는 점이다.

공동창업자 Brad Joffe는 "업계 대부분은 사후 대응을 한다. 우리는 사기범에게 직접 가서 누군가 피해를 입기 전에 정보를 얻는다"고 말했다. Apate는 프런티어 모델과 자체 파인튜닝 모델을 함께 쓰며, 사기범과의 대화 데이터로 모델을 학습한다. 고객은 "계좌번호 확보" 같은 특정 임무를 에이전트에 부여할 수도 있다.

Joffe에 따르면 TPG Telecom은 약 59만 건의 통화를 Apate 에이전트로 돌렸고, Commonwealth Bank는 공개 보고된 사기 피해가 76% 줄었다. Apate는 8월 $8.15M 시드 투자를 유치해 누적 약 $10M을 조달했으며, TechCrunch Disrupt Startup Battlefield 200 결선에 올랐다.

## 왜 중요한가?
AI가 사기범의 무기가 된 만큼, 같은 AI로 사기범을 역으로 속이는 방어가 사업이 되고 있습니다. 사기 전화를 AI가 대신 받아 시간을 끌고 정보를 빼내는 방식은, 피해가 생기기 전에 막는 새로운 보안 모델입니다.

## 심층 분석

### 기술 의미
음성·문자·웹을 넘나드는 다중 채널 페르소나 에이전트를 대규모로 운영한다는 점에서, 장시간 대화 유지와 정보 추출이라는 목표 지향 대화 에이전트의 실전 사례다(→ 분석). 사기범과의 실제 대화가 다시 학습 데이터가 되는 순환 구조는 데이터 축적형 해자를 만든다(→ 분석). 수치(17년, 76% 감소 등)는 모두 회사 측 주장이며 독립 검증은 기사에 없다.

### 업계 영향
통신사·은행이 '사후 차단'에서 '사전 정보 수집'으로 사기 대응 방식을 넓힐 수 있다(→ 분석). 고객이 에이전트에 임무를 부여하는 구조는 '에이전트를 서비스로 파견'하는 사업 모델의 한 형태다(→ 분석). 반대로 AI가 사람을 사칭해 대화하는 방식은 상대가 사기범이라도 법적·윤리적 논의를 부를 수 있다(→ 분석).

### 관련 프로젝트
- Apate.ai (Macquarie University 연구 기반)
- 고객: Commonwealth Bank of Australia, TPG Telecom

### 관련 뉴스
- [Voice AI는 아직 ChatGPT 모먼트가 아니다](../records/2026-10-12-voice-ai-not-chatgpt-moment-polyai-otter.md) — 음성 에이전트 산업 동향
- [보안 전문가 "폭주 아닌 기본 보안 실패"](../records/2026-10-15-ai-rogue-agents-security-basics-cso.md) — AI 보안 논쟁

## 원문 발췌
> "Founded in 2024 on the basis of research done in Macquarie University in Sydney, the Australian startup deploys thousands of AI agents that masquerade as innocent victims."
> "The company says its fleet of agents has so far wasted 17 years of scammers' time across 2.5 million conversations."
> "We go to the scammer directly and get the information before anyone gets hurt," Brad Joffe, co-founder and chief commercial officer, told TechCrunch.
> "Joffe said TPG has diverted nearly 590,000 calls to Apate's agents, Commonwealth has seen a 76% drop in publicly reported scam losses"

## 수집 노트
- **선정 이유**: TechCrunch AI 피드의 당일 에이전트 활용 사례 중 실제 배치 규모와 고객 수치가 구체적으로 제시돼 선정.
- **제외 후보**: Floqer 영업 리서치 에이전트(TechCrunch) — 일반적인 영업 자동화로 신규성 낮음. Zenzap $44M(TechCrunch) — 업무용 채팅 앱으로 에이전트 관련성 낮음.
