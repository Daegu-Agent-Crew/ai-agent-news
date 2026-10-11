# OrcaRouter, 사이버보안 모델 'OrcaCyber Zero 1.5' 공개 — 1M 컨텍스트, Cybench 100% 주장

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/10/10/orcarouter-releases-orcacyber-zero-1-5-cybersecurity-model-with-1m-context/
- **소스**: MarkTechPost
- **발행일**: 2026-10-11
- **수집일**: 2026-10-12
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [orcarouter, cybersecurity, vulnerability-research, agentic-security, cybench, long-context]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 1개(0) + 반응 규모 미관찰(0) = 2
- **신선도**: fresh

## 핵심 요약
> MarkTechPost에 따르면 OrcaRouter가 승인된 취약점 연구용 모델 OrcaCyber Zero 1.5를 1M 토큰 컨텍스트로 공개했다. 회사가 자체 보고한 점수는 Cybench 100%(39/39), CVE-Bench 95.8%(24개 평가 가능 과제 중 23개)이며 가격은 100만 토큰당 입력 $3.00, 출력 $7.50이다.

## 번역 (한국어)
OrcaRouter가 승인된 취약점 연구용 모델 OrcaCyber Zero 1.5를 공개했다. 2026년 9월 17일 나온 OrcaCyber Zero 1.0의 후속작으로, 취약점 재현·익스플로잇 개발·침투 테스트용으로 후속 학습된 모델이다. 1M 토큰 컨텍스트 창, 네이티브 함수 호출, 구조화 출력을 지원한다.

Orca 팀은 설계 목표로 세 가지를 제시했다. 원격 코드 실행·샌드박스 탈출·인증 우회 같은 알려지지 않은 결함 찾기, 공격 경로를 추론하고 실제 악용 가능성으로 결함 순위 매기기, 그리고 대규모 코드베이스를 다루는 자율 에이전트용 설계다.

모델 페이지에는 10월 10일 평가 기준 벤더 자체 보고 점수 4개가 실렸다. Cybench 100%(39/39), CVE-Bench 95.8%(23/24), HumanEval+ 93.9%, SWE-bench Pro V2 76.5%다. MarkTechPost는 Cybench가 40개 과제로 구성돼 100%가 39개만 다루며, CVE-Bench도 24개 부분집합 결과라고 지적했다.

접근은 OpenAI 호환 API로 하되 Security Research 등급으로 제한되며, 계약·패스키·약관 동의가 필요하다. 가격은 100만 토큰당 입력 $3.00, 출력 $7.50으로, MarkTechPost는 Claude Mythos Preview의 $25/$125보다 훨씬 낮다고 비교했다. 기술 보고서는 아직 없다.

## 왜 중요한가?
해커처럼 시스템 약점을 찾아내는 AI가 대형 연구소뿐 아니라 작은 회사에서도 싼 가격에 나오고 있습니다. 방어하는 쪽엔 도움이 되지만, 그만큼 접근 통제가 제대로 되는지가 중요해집니다.

## 심층 분석

### 기술 의미
1M 컨텍스트와 함수 호출을 결합한 것은 대형 코드베이스 전체를 읽고 도구를 실행하며 취약점을 검증하는 에이전트형 보안 작업을 겨냥한 구성이다(→ 분석). 벤치마크 대부분이 상한에 가까워지면서 Cybench 같은 기존 지표의 변별력이 떨어지고 있음을 보여준다(→ 분석). 모든 수치는 벤더 자체 보고이며 일부는 부분집합 기준이다.

### 업계 영향
Anthropic·OpenAI·Sakana에 이어 라우터 사업자까지 사이버 특화 모델을 내놓으며 이 시장의 공급자가 다변화되고 있다(→ 분석). 가격이 기존 프런티어 보안 모델보다 한 자릿수 낮다는 점은 레드팀 업무의 비용 구조를 바꿀 수 있다(→ 분석). 반면 게이트형 접근의 실제 심사 수준은 공개 자료로 확인되지 않는다.

### 관련 프로젝트
- OrcaRouter 문서: https://api.orcarouter.ai/v1 (OpenAI 호환 엔드포인트)

### 관련 뉴스
- [Anthropic GLM-5.3 사이버 역량](../records/2026-09-29-anthropic-glm-5-3-cyber-capabilities.md) — 사이버 역량 평가 흐름
- [OpenAI Astra 사이버 모델](../records/2026-09-02-openai-astra-cyber-model.md) — 경쟁 사이버 특화 모델

## 원문 발췌
> "OrcaRouter has released OrcaCyber Zero 1.5, a model for authorized vulnerability research."
> "It ships with a 1M-token context window, native function calling and structured outputs."
> "Cybench: 100% (39/39, unrestricted agent execution). CVE-Bench: 95.8% (23/24 evaluable tasks)."
> "Pricing is $3.00 per 1M input tokens and $7.50 per 1M output tokens."

## 수집 노트
- **선정 이유**: 에이전트형 보안 모델 경쟁에 새 공급자가 가세한 사례로, 가격·접근 조건이 구체적으로 공개돼 선정 (소스는 major-media 1건).
- **제외 후보**: MarkTechPost 'When the Safety Test Became the Threat' — 발행 시각이 24시간 범위 밖. Apple HomeView 분석 — AI 에이전트 관련성 낮음.
