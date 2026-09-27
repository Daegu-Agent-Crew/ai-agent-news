# 기업용 AI 코딩 에이전트, 계약 조건·데이터 소재·500석 비용 비교

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/09/26/ai-coding-agents-for-enterprise-ip-indemnity-data-residency-and-500-seat-cost-compared/
- **소스**: MarkTechPost
- **발행일**: 2026-09-27
- **수집일**: 2026-09-28
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [coding-agents, enterprise, ip-indemnity, procurement, copilot, cursor, devin]
- **소스 권위**: major-media
- **교차 확인**: 4
- **교차 확인 근거**: GitHub·AWS·Cursor·Cognition 각사 공식 계약 문서 (원문이 2026-09-26 기준 대조)
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> MarkTechPost가 GitHub Copilot, AWS Kiro, Cursor, Cognition(Devin·Windsurf)의 계약서를 읽고 생성 코드의 IP 배상, 프롬프트 보관, 감사 로그, 500석 실비용을 비교했다. Copilot과 Kiro는 생성 코드에 무상한(uncapped) IP 배상을 제공하는 반면, Cognition의 표준 약관은 Outputs를 배상 제외 항목으로 분류한다.

## 번역 (한국어)
이 글은 어떤 코딩 에이전트가 무엇을 하는지의 '기능 비교'가 아니라, 조달 담당자·법무 책임자·보안 검토자의 질문에 답하는 글이다. 그 4가지 질문은 다음과 같다 — 생성 코드가 IP 소송을 일으키면 누가 보는가, 프롬프트는 어디에 저장되는가, 관리자가 무엇을 로그할 수 있는가, 500석은 실제로 얼마인가. 저자는 5개 브랜드의 현재 계약 언어를 읽고 2026년 9월 26일 기준 각 벤더의 자체 페이지와 대조해 확인했다고 밝힌다.

우선 5개 브랜드는 사실상 4개 계약이다. Cognition이 Windsurf를 인수했고 6월 2일 Windsurf 에디터를 Devin Desktop으로 이름 바꾸면서, Devin과 Windsurf는 이제 하나의 가격표와 하나의 약관을 공유한다. IP 배상(인뎀니티) 표에서 GitHub Copilot은 Business·Enterprise 플랜에서 "수정되지 않은 출력물에 대해 무상한 IP 배상"을 제공하며, AWS Kiro도 저작권 청구 기준 무상한 배상을 상속받는다. Cursor는 MSA에서 Suggestion을 명시적으로 배상 대상으로 명명하고 12개월 요금 상한에서 배상을 분리했다.

Cognition은 이례적 사례로 지목된다. MSA가 Customer Data 정의에 Outputs를 포함시킨 뒤 Customer Data를 배상에서 제외하기 때문에, 생성 코드가 표준 약관의 배상 약속 바깥에 놓인다. 배상 상한도 직전 12개월 요금의 2배다. 원문은 Devin·Devin Desktop 도입 시 오더폼에서 이를 협상해야 한다고 권한다.

프롬프트 보관 측면에서 Copilot Business·Enterprise는 IDE 채팅·완성 프롬프트를 보관하지 않고, github.com·모바일·CLI 등 다른 표면의 프롬프트는 28일 보관한다. Kiro는 엔터프라이즈 콘텐츠를 서비스 개선에 쓰지 않고 프로필 리전에 저장하며, 고객 관리 KMS 키 암호화를 지원한다. Cursor는 Privacy Mode 시 모델 제공사와 제로 데이터 보관(ZDR) 계약을 맺지만, 고객이 선택 가능한 처리 리전은 공개 페이지에 없다. Cognition은 Enterprise에서 학습 금지, 셀프서브 유료 등급에서는 옵트아웃 전까지 학습이 가능하다.

비용 측면에서 500석 월 요금은 Copilot Business $9,500(Enterprise Cloud 포함 시 $20,000), Kiro Pro $10,000, Cursor Teams $20,000, Cognition Teams는 200명 상한이라 500석은 엔터프라이즈 견적이 필요하다. 원문은 6월 1일부로 Copilot이 사용량 기반 AI 크레딧(1크레딧=$0.01)으로 이전했고 Kiro 추가 크레딧은 $0.04라고 짚으며, 에이전트 사용량이 많은 팀은 좌석 수만이 아니라 사용량을 모델링해야 한다고 권한다.

## 왜 중요한가?
기업이 AI 코딩 에이전트를 도입할 때 진짜 걸림돌은 기능이 아니라 법적 노출과 데이터 관리다. 같은 "AI 코딩 에이전트"라도 계약에 따라 IP 소송 시 보호 수준이 전혀 다르고, 프롬프트 저장 위치와 감사 능력도 제각각이라는 사실을 실제 계약 문서로 대조해 보여준 글은 드물다. 도입 예산을 검토하는 조직과, 자사 에이전트를 기업에 판매하려는 스타트업 모두 참고해야 할 '구매자 관점 기준표'를 제공한다.

## 심층 분석

### 기술 의미
생성 코드에 대한 IP 배상은 '모델이 무엇을 학습했는가'의 문제를 '누가 법적 책임을 지는가'의 문제로 치환하는 상품화 장치다. 배상 제공 조건(수정 여부, 필터 활성화, 입력 적법성)이 곧 제품의 신뢰 경계가 되므로, 앞으로 에이전트 제품은 기능 로드맵과 별개로 계약상 보증 범위를 엔지니어링 산출물처럼 관리해야 한다. 또한 감사 로그에서 로컬 프롬프트가 제외되는 등 '무엇이 기록되고 무엇이 안 되는가'의 구분은 기업의 컴플라이언스 설계에 직접적인 제약으로 작동한다. (→ 분석)

### 업계 영향
배상·데이터 소재·감사가 경쟁 축으로 떠오르면, 엔터프라이즈 시장은 "무상한 배상 + SSO + 리전 선택"을 갖춘 대형 플랫폼에 유리하게 재편될 가능성이 있다. Cognition처럼 표준 약관에서 Outputs를 제외하는 벤더는 오더폼 협상이라는 추가 절차를 거치게 되어 조달 마찰이 커진다. 한편 사용량 기반 과금으로의 전환은 좌석당 정액 가격 경쟁을 '실사용 비용 모델링' 경쟁으로 바꾸고 있어, 도입 검토 문서에 크레딧 소비 시나리오가 표준 항목으로 들어올 것이다. (→ 분석)

### 관련 프로젝트
- [GitHub Copilot Product Specific Terms](https://github.com/customer-terms/github-copilot-product-specific-terms)
- [Cursor MSA](https://cursor.com/terms/msa)
- [Cognition Enterprise Terms](https://cognition.com/legal/enterprise-terms-of-service)
- [AWS Kiro Enterprise](https://kiro.dev/enterprise/)

### 관련 뉴스
- [AWS Strands Harness](2026-09-22-aws-strands-harness.md) — AWS의 에이전트 실행 인프라 접근
- [Whiteboard 오픈소스 에이전트 IDE](2026-09-25-whiteboard-open-source-agent-ide.md) — 코딩 에이전트 도구 생태계
- [Lovable 6억 달러 ARR 바이브 코딩](2026-09-25-lovable-600m-arr-vibe-coding.md) — 코딩 에이전트 시장 성장 배경

## 원문 발췌
> "We read the current contract language for GitHub Copilot, AWS Kiro, Cursor, Devin and Windsurf. Every term below was checked against the vendor's own pages on September 26, 2026."
> "Copilot and Kiro offer uncapped indemnity on generated code. Cognition's standard terms exclude outputs entirely."
> "Cognition is the outlier. Its MSA defines Customer Data to include Outputs, then excludes Customer Data from indemnity. Generated code therefore sits outside the standard promise."
> "GitHub moved Copilot to usage-based AI credits on June 1, 2026, where 1 credit equals $0.01."

## 수집 노트
- **선정 이유**: 주요 언론 보도이면서 4개 벤더의 공식 계약 문서와 교차 대조한 1차 자료 기반 비교로, 이 리포의 독자(에이전트 도입·개발 조직)가 가장 실무적으로 쓸 수 있는 정보이기 때문.
- **제외 후보**: "Can Muse overcome Meta's trust issues?(TechCrunch)" — Muse 관련 기존 레코드 5건 이상으로 중복. "Anthropic CEO, 트럼프 대통령과 만찬(TechCrunch)" — 정치 이슈로 도구 조달 주제와 거리가 멀다.
