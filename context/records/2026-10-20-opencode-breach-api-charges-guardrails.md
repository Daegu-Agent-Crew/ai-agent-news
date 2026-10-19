# OpenCode 침해 후속 — 사용자 AI 계정에 무단 과금, 방어 중 AI 모델은 분석 거부

## 메타데이터
- **원문 URL**: https://techcrunch.com/2026/10/19/hackers-hit-ai-coding-tool-opencode-running-up-charges-on-users-ai-accounts/
- **소스**: TechCrunch
- **발행일**: 2026-10-19
- **수집일**: 2026-10-20
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [opencode, security-breach, api-keys, distillation-attack, safety-guardrails, daybreak]
- **소스 권위**: major-media
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐⭐
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 2개(+1) + HN 653pt(+1, 10-18 레코드 기준) = 4
- **신선도**: updated

## 핵심 요약
> TechCrunch에 따르면 OpenCode Console 사용자 1.4%에 영향을 준 침해 이후 일부 사용자는 OpenAI·Anthropic·Google 계정에서 수백 달러, 일부는 1,000달러 이상의 무단 과금을 보고했다. 공동창업자 Dax Raad는 방어 분석에 쓰던 AI 모델이 악성 코드로 안전 필터가 작동해 작업을 거부했다고 밝혔다.

## 번역 (한국어)
오픈소스 AI 코딩 에이전트 OpenCode는 토요일, 공격자가 밤사이 구형 시스템에 침입해 온라인 플랫폼 OpenCode Console 사용자의 1.4%가 영향을 받았다고 밝혔다. Console은 일부 사용자가 AI 서비스 API 키를 저장하는 곳이다. 회사는 이를 "대규모 증류(distillation) 공격과 관련된 침해"라고 설명했지만, TechCrunch는 일부 회의론자가 증류 목적은 입증되지 않은 단순 침해라고 반박했다고 전했다.

밤사이 개발자들은 Reddit과 X에 지출 알림과 무단 과금을 올렸다. 개별 계정에서 수백 달러, 일부는 1,000달러 이상이 청구됐다고 보고됐다. Anthropic과 Google은 노출된 것으로 판단한 키를 차단했고, OpenAI는 OpenCode와 협력해 접근을 복구하고 공격에 쓰인 크레딧을 환불한다고 밝혔다. Dax Raad는 오픈소스 앱과 CLI는 영향이 없으며 "그 키들은 우리에게 오지 않는다"고 했다.

Raad에 따르면 공격자는 48시간 동안 쉬지 않고 침입을 시도했고, 팀은 AI 방어 에이전트를 24시간 가동해야 했다. 분석에 쓰던 AI 모델은 한동안 도움이 됐지만, 검사 대상 악성 코드가 안전 필터를 작동시키자 작업을 거부했다. 이후 OpenCode는 방어 보안 작업에 거부가 적은 모델을 제공하는 OpenAI의 Daybreak Blue 프로그램 접근권을 얻었다.

TechCrunch는 7월 Hugging Face도 유사한 벽에 부딪혔다고 짚었고, 대통령 과학기술자문위원회 공동의장 David Sacks는 X에 "가드레일이 역효과를 냈다"고 썼다. 침해는 OpenCode가 GLM-5.3-Flash를 무료로 제공한 같은 날 밤에 발생했다. 회사는 영향받은 사용자에게 각 공급자에서 키를 폐기·재발급하라고 안내했으며 사건은 진행 중이다.

## 왜 중요한가?
AI 도구에 맡겨 둔 '비밀번호(API 키)'가 털리면 남이 내 돈으로 AI를 쓰게 됩니다. 동시에 방어하는 쪽이 AI에게 도움을 청해도 AI가 '위험한 코드'라며 거절하는 문제가 실제 사고에서 드러났습니다.

## 심층 분석

### 기술 의미
API 키를 제3자 콘솔 워크스페이스에 저장하는 구조가 단일 침해로 여러 공급사 계정에 피해를 확산시키는 경로가 됐다(→ 분석). 공격자 관점에서 탈취 키는 대량 출력 생성(증류)에 쓰일 수 있다는 것이 TechCrunch의 설명이지만 실제 용도는 확인되지 않았다. 안전 필터가 공격자와 사고 대응자를 구분하지 못하는 '비대칭 문제'가 Hugging Face에 이어 반복 확인됐다.

### 업계 영향
검증된 방어자에게 제한 완화 모델을 주는 Daybreak Blue 같은 '신원 기반 접근' 프로그램이 보안 업계 표준이 될 가능성이 있다(→ 분석). 보안 연구자들이 거부를 피해 해외 오픈웨이트 모델로 이동한다는 지적은 정책 논쟁으로 번지고 있다. 에이전트 도구 사용자에게는 공급자별 지출 한도·키 분리가 기본 위생 수칙이 될 것이다(→ 분석).

### 관련 프로젝트
- OpenCode / OpenCode Console
- OpenAI Daybreak Blue

### 관련 뉴스
- [OpenCode 콘솔 보안 침해 공지](../records/2026-10-18-opencode-console-security-breach-distillation.md) — 최초 공지
- [Hugging Face, OpenAI 에이전트 침입](../records/2026-07-29-hugging-face-openai-agent-intrusion.md) — 같은 가드레일 문제의 선례

## 원문 발췌
> "We had a security breach last night related to a large-scale distillation attack that impacted 1.4% of OpenCode Console users," the company wrote on X.
> "Other users reported charges in the hundreds of dollars on individual accounts; a few described totals above $1,000."
> "AI models that the OpenCode team turned to for analysis helped for a while, but started refusing to work when the malicious code they were asked to examine activated safety filters."

## 수집 노트
- **선정 이유**: 10-18 레코드(공식 공지)에 없던 무단 과금 규모·공급사 대응·가드레일 거부 문제를 주요 언론이 새로 보도해 후속(updated)으로 선정.
- **제외 후보**: Laplace Intelligence 로봇 레드팀(TechCrunch) — 펀딩 위주. Tenstorrent $6.2B 밸류(TechCrunch) — 칩 투자 뉴스.
