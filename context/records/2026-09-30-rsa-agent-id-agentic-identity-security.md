# RSA, 규제 산업용 에이전트 신원 보안 플랫폼 'Agent ID' 출시 — "한 은행에서 섀도 에이전트 4,000개 발견"

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/09/29/rsa-launches-agent-id-to-discover-secure-and-govern-ai-agents-in-regulated-industries/
- **소스**: MarkTechPost
- **발행일**: 2026-09-30
- **수집일**: 2026-10-01
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [rsa, agent-id, agent-identity, shadow-ai, mcp-gateway, governance, enterprise-security]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **신선도**: fresh

## 핵심 요약
> MarkTechPost에 따르면 RSA는 금융·정부·의료·핵심 인프라 같은 규제 산업을 위한 에이전트 신원 보안 플랫폼 RSA Agent ID를 발표했다. 제품은 발견(Discover)·보안(Secure)·거버넌스(Govern) 3개 모듈로 구성된다.

## 번역 (한국어)
MarkTechPost는 AI 에이전트가 보안팀이 추적할 수 있는 속도보다 빠르게 운영 환경에 들어오고 있다고 전했다. 기사는 Gartner를 인용해 일반적인 글로벌 포춘 500 기업이 2028년까지 약 15만 개의 AI 에이전트를 운영할 것으로 예상되지만, 적절한 에이전트 거버넌스를 갖췄다고 믿는 조직은 13%에 불과하다고 소개했다. RSA는 샌프란시스코 The AI Conference에서 규제 산업용 에이전트 신원 보안 플랫폼 RSA Agent ID를 발표했다.

RSA 사장 겸 최고제품전략책임자 Jim Taylor는 인터뷰에서 정책상 에이전트가 없다고 했던 한 중견 글로벌 은행을 감사한 결과 "4,000개가 넘는 에이전트가 돌아다니고 있었다"고 말했다. 그는 공격자 없이 발생한 사고도 소개했다. 한 고객지원 직원이 에이전트에게 "Salesforce에 가서 데이터를 전부 가져오라"고 지시하자 에이전트가 전체 데이터베이스를 내려받기 시작했고, Salesforce는 이를 서비스 거부 공격으로 판단해 인스턴스를 차단했다.

Agent ID는 세 모듈로 구성된다. Discover는 엔드포인트·기기·네트워크·앱을 실시간 스캔해 승인된 에이전트와 섀도 에이전트, MCP 서버를 찾아 소유자·위험 등급·수명 주기 상태를 가진 1급 신원으로 등록한다. Secure는 모든 도구 호출을 도구·인자 수준에서 정책과 대조하는 인라인 AI/MCP 게이트웨이로, 고위험 호출은 등록된 소유자에게 올린다. Govern은 모든 행동을 기록하고 증거를 10개 규제·산업 프레임워크에 매핑해 고객의 SIEM으로 보낸다.

Taylor는 하루 수백 번의 승인 요청은 "그냥 예라고 누르라는 초대장"이라며, 사용자·행동·데이터 민감도를 점수화해 임계값을 넘는 행동만 사람에게 보내는 위험 엔진 방식을 강조했다. 그는 게이트웨이 우회 같은 한계에 대해서는 "우리는 물 위를 걷지 못한다"며 기존 보안 위에 에이전트 보안을 겹겹이 쌓아야 한다고 말했다.

## 왜 중요한가?
회사가 "에이전트를 금지했다"고 믿어도 실제로는 직원들이 만든 수천 개의 에이전트가 권한을 쥔 채 돌아다닐 수 있다는 사례다. 사람 직원에게 사원증과 권한 관리가 있듯, AI 에이전트에도 '신원'과 '주인'을 붙여 관리하는 보안 제품이 기존 보안 대기업에서 나오기 시작했다는 점이 의미 있다.

## 심층 분석

### 기술 의미
에이전트와 MCP 서버를 기존 IdP(Microsoft Entra ID, Okta, AWS IAM)와 연결된 1급 신원으로 다루는 설계는, 에이전트 보안을 별도 영역이 아닌 기존 신원·접근 관리(IAM)의 확장으로 보는 접근이다. (→ 분석) 승인 채널을 에이전트가 접근할 수 없는 대역 외(out-of-band) 인증 경로로 분리한 점은 프롬프트 인젝션으로 승인을 위조하는 공격을 구조적으로 막으려는 설계다. 도구 호출을 인자 수준까지 검사하는 게이트웨이는 MCP가 사실상 표준이 된 환경을 반영한다.

### 업계 영향
Taylor가 전한 은행 사례와 Salesforce 사례는 인터뷰 속 단일 증언으로, 회사명은 공개되지 않았다. (→ 분석) 그럼에도 규제 산업에서 감사 가능한 로그와 정책 증빙을 요구하는 흐름은 에이전트 도입의 병목이 기술이 아니라 거버넌스로 옮겨가고 있음을 시사한다. 'Human in the loop' 대신 위험 기반 선별(Human Assurance)을 내세운 점은 앞선 Decisions API 같은 저비용 판정 모델 흐름과도 맞닿아 있다.

### 관련 프로젝트
- [RSA Unified Identity Platform](https://www.rsa.com/)

### 관련 뉴스
- [OpenAI Decisions API — Jev 유사 결정 모델](2026-09-30-openai-decisions-api-jev-clone.md) — 에이전트 행동 선별 비용 문제
- [OpenAI, 호주 에이전트 사고 사과](2026-09-29-openai-apologizes-australia-agent-breach.md) — 에이전트 사고 사례

## 원문 발췌
> "At The AI Conference in San Francisco, RSA announced RSA Agent ID, an agentic identity security platform for regulated industries such as finance, government, healthcare, and critical infrastructure."
> "We did an audit and found more than 4,000 agents running around in their enterprise."
> "RSA Agent ID ships as three modules, available standalone or as one system on the RSA Unified Identity Platform."

## 수집 노트
- **선정 이유**: 단일 매체 인터뷰지만 에이전트 신원·거버넌스라는 기업 도입의 핵심 병목을 구체적 제품 구조와 사고 사례로 다뤄, 이번 수집의 에이전트 보안 흐름을 보완함.
- **제외 후보**: "DoorDash launches an AI agent you can text to order food(TechCrunch)" — 소비자용 기능 추가로 에이전트 생태계 시사점이 상대적으로 작아 제외.
