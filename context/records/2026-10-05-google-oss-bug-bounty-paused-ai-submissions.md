# Google, AI 자동 제보 급증에 오픈소스 버그바운티 일시 중단

## 메타데이터
- **원문 URL**: https://techcrunch.com/2026/10/04/google-froze-its-open-source-bug-bounty-program-due-to-a-significant-rise-in-ai-submissions/
- **소스**: TechCrunch (교차: Tom's Hardware 보도, Google 공식 공지·X 게시물 인용)
- **발행일**: 2026-10-04
- **수집일**: 2026-10-05
- **수집자**: 레노버
- **카테고리**: industry
- **태그**: [google, bug-bounty, ai-slop, open-source, security, automated-submissions]
- **소스 권위**: major-media
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐
- **신선도**: fresh
- **중요도 산정**: 기본 1 + major-media 1 + 독립 소스 2개 1 + 반응 규모 미확인 0 = 3

## 핵심 요약
> TechCrunch에 따르면 Google은 오픈소스 소프트웨어 취약점 보상 프로그램(OSS VRP)을 10월 1일부로 중단하고 2027년 1분기에 업데이트를 내놓겠다고 밝혔다. Google은 "자동화된 제출이 크게 늘었고 대부분이 유효하지 않다"는 이유를 들었다.

## 번역 (한국어)
Google이 AI로 생성된 제보의 '상당한 증가'를 이유로 오픈소스 버그바운티 프로그램을 내년까지 멈췄다. 이 프로그램은 Google의 오픈소스 소프트웨어에서 취약점을 찾은 연구자에게 보상을 지급해 왔다.

Google은 X 게시물과 프로그램 웹사이트를 통해 10월 1일부로 프로그램을 중단했으며 2027년 1분기에 "업데이트"를 제공하겠다고 밝혔다. TechCrunch가 인용한 Tom's Hardware 보도에 따르면, Google 엔지니어와 오픈소스 메인테이너들은 유효하지 않거나 환각이 섞인 제보에 시달려 왔다.

Google은 "이번 중단은 자동화된 제출이 크게 늘었기 때문이며, 그 대부분은 유효하지 않다"고 설명했다. 그동안 참가자들에게는 Google의 다른 버그바운티 프로그램을 이용하라고 안내했다.

TechCrunch는 지난해 이미 보안 전문가들이 'AI 슬롭(저품질 AI 생성물)'이 버그바운티 프로그램에 심각한 위험이 될 수 있다고 경고했다고 상기시켰다.

## 왜 중요한가?
AI로 '취약점 신고서'를 대량으로 찍어내는 사람이 늘면서, 이를 검토해야 하는 사람들이 감당을 못 해 결국 보상 제도 자체가 멈췄습니다. AI 에이전트가 만든 결과물이 외부 시스템에 쏟아질 때 생기는 비용을 대기업도 견디지 못한 첫 대형 사례라 의미가 큽니다.

## 심층 분석

### 기술 의미
AI 보안 에이전트는 코드 스캔·리포트 작성 비용을 거의 0으로 낮췄지만, 검증 비용은 여전히 사람이 진다는 비대칭이 드러났다(→ 분석). 제보 플랫폼 쪽에서 재현 가능한 PoC 의무화, 자동 재현 파이프라인, 제출자 평판·보증금 같은 필터링 장치가 필요해질 가능성이 크다(→ 분석). 역설적으로 그 필터 역시 AI 에이전트로 구축될 공산이 크다(→ 분석).

### 업계 영향
curl 등 개별 오픈소스 프로젝트가 AI 제보 문제를 호소해 온 흐름이 이번에는 Google 규모 프로그램 중단으로 이어졌다(→ 분석). 다른 버그바운티 플랫폼도 제출 정책을 강화할 압력을 받을 것이다. 정당한 보안 연구자, 특히 AI를 보조 도구로 쓰는 연구자까지 진입 장벽이 높아지는 부작용도 예상된다(→ 분석).

### 관련 프로젝트
- Google Open Source Software Vulnerability Rewards Program (OSS VRP)

### 관련 뉴스
- [Google Mantis 에이전트 보안 툴킷](../records/2026-09-10-google-mantis-agent-security-toolkit.md) — Google의 AI 보안 도구 행보
- [Aikido Altar-1 보안 모델](../records/2026-09-25-aikido-altar-1-open-weight-security-model.md) — AI 기반 취약점 탐지 모델
- [OpenAI Astra 사이버보안 일시중단](../records/2026-08-08-openai-astra-cybersecurity-pause.md) — AI 보안 기능의 중단 사례

## 원문 발췌
> "Blaming a "significant rise" in AI submissions, Google has paused its open source bug bounty program until next year."
> "Google said the bug bounty program was paused as of October 1, with a promise to provide "an update" in the first quarter of 2027."
> "This pause is due to a significant rise in automated submissions, the vast majority of which are not valid," the company said.

## 수집 노트
- **선정 이유**: Google 공식 공지를 주요 언론(TechCrunch)이 보도하고 Tom's Hardware가 별도 취재해 교차 2이며, AI 에이전트 산출물이 외부 시스템에 주는 부담이라는 주제와 직결됨.
- **제외 후보**: Amazon 데이터센터 NDA 중단(TechCrunch) — 에이전트와 관련성 낮음. Google 데이터센터 물·전력 사용량 노출(HN, 지역 언론) — 인프라 이슈로 범위 밖.
