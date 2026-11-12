# Cyberattack on Fireworks AI allowed hackers to access Notion customers' chat transcripts

## 메타데이터
- **원문 URL**: https://techcrunch.com/2026/11/12/cyberattack-on-fireworks-ai-allowed-hackers-to-access-notion-customers-chat-transcripts/
- **소스**: TechCrunch
- **발행일**: 2026-11-12
- **수집일**: 2026-11-13
- **수집자**: 레노버
- **카테고리**: industry
- **태그**: [보안, FireworksAI, Notion, 데이터유출]
- **소스 권위**: major-media
- **교차 확인**: 3
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Fireworks AI 침해 사고로 해커가 일부 고객 데이터에 접근했다. Notion은 자사 고객의 약 1%가 영향을 받았고, Notion AI 'Insights' 기능 사용자의 채팅 기록이 유출됐다고 확인했다.

## 번역 (한국어)
Fireworks AI에서 사이버 공격으로 일부 고객 데이터가 노출됐다는 사실이 확인됐다. 오픈 AI 모델 접근 플랫폼인 Fireworks AI는 공격자가 클라우드 제공자를 침해해 Fireworks 개발 시스템에 접근, 일부 고객 데이터에 도달했다고 밝혔다.

Fireworks의 최신 보안 공지에 따르면 사이버 범죄자들이 고객 결제 정보와 일부 데이터셋을 가져갔다. Fireworks는 전 세계 수만 명의 고객을 보유하며, 법률테크 회사 Harvey와 AI 회사 Cursor도 고객이다.

확인된 피해 고객 중 하나는 Notion이다. Notion은 자체 공시에서 침해가 자사 고객의 약 1%에 영향을 미쳤다고 밝혔다. Notion에 따르면 Fireworks가 보안 사고를 알려왔고, 이후 해커가 일부 Notion 고객 데이터를 훔쳤다는 것이 확인됐다. Notion은 11월 3일 Fireworks와의 연결을 끊고 저장된 데이터를 삭제했다.

Notion은 이번 주에 해커가 Notion AI 'Insights' 기능 사용 고객의 채팅 기록을 가져갔다고 확인했다. 기록에는 "모델에 입력되거나 출력된 모든 내용"이 포함되지만, 상당 부분 어느 고객의 것인지 특정할 수 없었다고 회사는 덧붙였다.

## 왜 중요한가?
AI 서비스가 다른 회사의 AI 인프라를 빌려 쓰는 구조에서, 그 '하도급'이 뚫리면 내 고객의 대화 내용까지 새어나간다는 것을 보여준 사고다. 회사 데이터를 AI에 넣는 개인·기업 모두에게 데이터가 어디로 가는지 묻는 계기가 된다.

## 심층 분석

### 기술 의미
공격 경로가 Fireworks 자체가 아니라 '클라우드 제공자'였다는 점에서 AI 공급망의 다층 위험이 드러난다. (→ 분석) 채팅 기록에는 모델 입출력 전체가 담겨 실질적으로 사용자 컨텍스트가 유출되는 구조다.

### 업계 영향
AI 기업의 서드파티 모델 인프라 사용에 대한 감사·데이터 처리 기준 요구가 강화될 가능성이 있다. (→ 분석) Notion이 즉시 연결 단절·데이터 삭제로 대응한 사례는 벤더 전환 절차의 템플릿이 될 수 있다. 기업 AI 도입 시 '내 데이터가 어느 인프라를 거치는가'가 핵심 평가 항목으로 떠오른다.

### 관련 프로젝트
- [Fireworks 보안 공지](https://fireworks.ai/security/bulletins/october-2026-security-incident-update)
- [Notion 공시](https://www.notion.com/help/security-incident-involving-a-third-party-ai-vendor)

### 관련 뉴스
- [Nectar Creator Agent](../records/2026-11-13-nectar-creator-agent-launch.md) — 같은 날 AI 도구 관련 소식

## 원문 발췌
> A cyberattack at Fireworks AI has exposed some of its customers' data, the company has confirmed.
> the cybercriminals took Fireworks' customers' billing information and some datasets.
> At least one confirmed affected customer is online document editor and notetaker Notion, which said in a disclosure that the breach affected around 1% of its own customers.
> Notion confirmed this week that the hackers took chat transcripts of its Notion AI customers who used the "Insights" feature.

## 수집 노트
- **선정 이유**: TechCrunch + Fireworks 공지 + Notion 공시 3개 독립 소스로 교차 확인되는 보안 사고로, AI 공급망 신뢰 문제라는 산업 구조적 이슈라 선정.
- **제외 후보**: Phota Labs 사진 AI — 소비자 앱 소식으로 아카이브 우선순위 낮음.
