# Anthropic, 오픈소스 무료 AI 취약점 스캐너 'OSS Scanner' 공개 — 11일간 치명 77건·높음 803건 보고

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/10/25/anthropic-launches-oss-scanner-a-free-ai-vulnerability-scanner/
- **소스**: MarkTechPost
- **발행일**: 2026-10-25
- **수집일**: 2026-10-26
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [anthropic, security, vulnerability-scanner, open-source, claude-mythos, oss-scanner]
- **소스 권위**: major-media
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐
- **중요도 산정**: 기본 1 + major-media(MarkTechPost)(1) + 교차 확인 2개(MarkTechPost, anthropics/oss-scanner 공식 GitHub README)(1) + 반응 미확인(0) = 3
- **신선도**: fresh

## 핵심 요약
> MarkTechPost에 따르면 Anthropic은 핵심 오픈소스 프로젝트를 대상으로 Claude Mythos 등 자사 최강 모델로 코드를 감사하는 무료·옵트인 취약점 스캐너 OSS Scanner를 출시했으며, 보고서는 사람 검토 없이 메인테이너에게 직접 전달된다. 10월 8일 출시 후 11일간 모델 평가 기준 치명(critical) 77건, 높음(high) 803건이 보고됐다.

## 번역 (한국어)
Anthropic이 핵심 오픈소스 프로젝트를 위한 무료 옵트인 취약점 스캐너 OSS Scanner를 내놨다. MarkTechPost는 이 스캐너가 Claude Mythos를 포함한 Anthropic의 가장 강력한 모델들을 등록된 코드베이스에 돌리며, 보고서는 사람 검토 없이 메인테이너에게 곧바로 간다고 전했다. 10월 19일 기준 약 650개 신청 중 114개 프로젝트가 승인됐다.

운영은 Frontier Red Team과 Safeguards Research 팀이 함께 맡는다. 설계는 Google의 OSS-Fuzz에서 빌려왔지만 퍼저 대신 언어 모델을 쓴다. Anthropic은 지난 6개월간 모델이 2만 9천 건 이상의 후보 취약점을 찾아냈고 사람 검토자가 그중 약 6천 건을 선별했다고 밝혔다. 리뷰 병목을 해결하는 것이 주된 목표다.

등록은 anthropics/oss-scanner 저장소에 project.yaml과 Dockerfile을 추가하는 PR을 여는 방식이다. 프로젝트는 인터넷이 연결된 상태로 빌드된 뒤, 인터넷이 차단된 격리 VM에서 감사된다. 각 보고서에는 독립 실행 가능한 재현 코드와 버그 설명, 가능하면 버그를 만든 커밋까지의 bisection과 후보 패치가 포함된다.

정확도와 관련해 Anthropic은 자사 침투 테스터에게 48개 프로젝트의 치명·높음 발견 97건을 점검하게 했고, 85건(88%)이 자사 조정 공개(CVD) 기준을 충족했으며 11건은 실재하지만 중복, 1건은 무효였다고 밝혔다. wolfSSL은 74건 중 2건을 제외하고 모두 유효했으며 5건이 CVE가 됐다고 전했다. 반면 MarkTechPost는 사람 검토가 없어 선별 부담이 프로젝트 팀으로 옮겨가고, 메인테이너들이 심각도가 부풀려졌다고 보고한다는 점을 약점으로 들었다.

## 왜 중요한가?
전 세계 서비스가 기대고 있는 오픈소스는 대부분 소수의 자원봉사자가 관리해 보안 점검 여력이 부족합니다. AI가 무료로 취약점을 찾아 재현 방법과 패치까지 건네주면 큰 보안 사고를 미리 막을 수 있지만, 사람 검토 없이 쏟아지는 보고서가 메인테이너의 새로운 부담이 될 수도 있습니다.

## 심층 분석

### 기술 의미
OSS-Fuzz가 '입력을 무작위로 던져 크래시를 찾는' 방식이라면, OSS Scanner는 모델이 소스 코드를 읽고 근본 원인 분석·재현·패치 제안까지 하는 에이전트 파이프라인이다. 빌드는 네트워크 허용, 감사는 네트워크 차단으로 나눈 구조는 에이전트가 외부로 정보를 유출하거나 악용 코드를 실행할 위험을 줄이는 설계로 해석된다. threat_model.md를 통해 프로젝트별 위협 모델과 심각도 기준을 받는 점은, 모델의 심각도 과대평가 문제에 대한 보정 장치로 볼 수 있다(→ 분석).

### 업계 영향
OpenAI의 Codex for OSS, Google DeepMind의 CodeMender에 이어 Anthropic까지 '무료 오픈소스 보안 감사'에 뛰어들면서, 프런티어 랩 간 경쟁 축이 보안 기여로 확장되는 흐름이 보인다. 88%라는 정밀도 수치는 Anthropic 자체 감사 결과라 독립 검증이 필요하지만, wolfSSL·curl 같은 실제 CVE 사례가 붙어 있다는 점은 의미가 있다. 다만 사람 검토 없는 대량 보고는 메인테이너 피로와 '공개 기한 없음' 정책에 대한 논쟁을 낳을 가능성이 크다.

### 관련 프로젝트
- https://github.com/anthropics/oss-scanner
- https://red.anthropic.com/2026/cvd/
- https://github.com/google/oss-fuzz

### 관련 뉴스
- [Sam Altman, 모든 버그를 패치할 수는 없다](../records/2026-10-25-sam-altman-cant-patch-all-bugs-cyber.md) — AI 사이버보안 대응 관련 발언

## 원문 발췌
> Anthropic has launched OSS Scanner, a free, opt-in vulnerability scanner for critical open-source projects. The Anthropic OSS Scanner runs the company's strongest models, including Claude Mythos, against enrolled codebases. Reports go straight to maintainers without human review.
> 11 days after the October 8 launch, Anthropic reported 77 critical and 803 high model-rated findings.
> 85 (88%) met the bar for Anthropic's coordinated vulnerability disclosure (CVD) process. 11 were real but duplicated known issues or other scan findings. 1 was invalid.

## 수집 노트
- **선정 이유**: 공식 GitHub README로 교차 확인되는 프런티어 랩의 보안 에이전트 프로그램이며, 정밀도·실제 CVE 등 검증 가능한 수치가 함께 제시돼 선정.
- **제외 후보**: Grok 'Odyssey' AI 생성 영상 7분 공개 — 에이전트 생태계와 거리가 먼 엔터테인먼트 소식이라 제외. AI 웨어러블·가젯 총정리(TechCrunch) — 신규 발표 없는 정리 기사라 제외.
