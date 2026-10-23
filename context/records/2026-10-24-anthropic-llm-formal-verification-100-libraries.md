# Anthropic, Claude로 오픈소스 라이브러리 123개에 어셈블리 수준 형식 검증 — "LLM이 형식 검증을 대규모로 가능하게 한다"

## 메타데이터
- **원문 URL**: https://www.anthropic.com/research/formal-verification
- **소스**: Anthropic Research, Hacker News
- **발행일**: 2026-10-22
- **수집일**: 2026-10-24
- **수집자**: 레노버
- **카테고리**: research
- **태그**: [anthropic, claude, formal-verification, security, risc-v, theorem]
- **소스 권위**: official
- **교차 확인**: 1
- **중요도**: ⭐⭐⭐⭐
- **중요도 산정**: 기본 1 + official(Anthropic 연구 블로그)(2) + 교차 확인 1개(0) + HN 437pt·281댓글(1) = 4
- **신선도**: fresh

## 핵심 요약
> Anthropic은 Theorem과 협업해 Claude로 100개 이상의 실제 오픈소스 라이브러리에 대해 RISC-V 어셈블리 수준의 보안 속성을 증명했다고 발표했다. 증명 과정에서 Claude는 수조 회의 테스트에도 발견되지 않던 버그를 찾아냈다.

## 번역 (한국어)
Anthropic은 연구 글에서 AI가 이제 소프트웨어 버그를 쉽게 찾아 악용할 수 있게 된 만큼, 기존 방어만으로는 부족하며 코드에 버그가 없음을 '증명'하는 방법이 필요하다고 주장했다. 형식 검증은 이런 보장을 줄 수 있지만 역사적으로 수년의 전문가 노력이 필요해 대부분의 실제 프로젝트에는 비현실적이었다.

Anthropic은 형식 검증 스타트업 Theorem과의 협업으로 이 상황이 바뀌었다고 밝혔다. Claude에게 123개 오픈소스 라이브러리의 보안 속성을 증명하도록 했고, 특정 가정(단일 스레드 정적 바이너리, 고정 메모리 예산, RISC-V CPU, Linux OS) 아래에서 64MB 미만의 모든 입력에 대해 프로그램이 메모리 안전성 오류나 단언 실패 없이 정상 종료함을 증명했다. 회사는 이것이 자신들이 아는 한 AI로 프로덕션 소프트웨어에 어셈블리 수준 형식 검증을 적용한 첫 대규모 시도라고 설명했다.

글은 비교 사례로 seL4 커널 구현에 2인년, 형식 검증에 20인년이 걸렸다는 점을 들었다. Anthropic은 증명 일부와 RISC-V·OS 의미론을 공개해 누구나 검증·재사용할 수 있게 했고, Theorem은 다른 오픈소스 프로젝트에도 같은 파이프라인을 돌려주겠다고 제안하며 개발자용 Claude 스킬을 공개했다.

결론에서 Anthropic은 형식 검증이 머지않아 오늘날의 퍼징만큼 거의 모든 프로덕션 소프트웨어에 실용적인 기술이 될 것이라고 전망했다.

## 왜 중요한가?
AI가 해킹에 쓰일 수 있는 버그를 점점 잘 찾아내는 시대에, 같은 AI로 "이 코드에는 특정 종류의 버그가 없다"를 수학적으로 증명하는 길이 열렸다는 발표입니다. 예전엔 수십 년 치 전문가 작업이 필요했던 일이라 소수의 항공·군사용 코드에만 쓰였는데, 이제 일반 오픈소스까지 넓어질 수 있습니다.

## 심층 분석

### 기술 의미
검증 대상을 소스가 아닌 어셈블리(RISC-V) 수준으로 잡은 것은 컴파일러 신뢰 문제를 우회하는 선택으로 보인다(→ 분석). 다만 증명 범위가 단일 스레드·64MB 입력·모델링된 OS 응답 등 가정에 묶여 있어 '버그 없음'의 일반 보장과는 거리가 있으며, Anthropic 스스로도 이를 한계로 적었다. 명세(spec) 작성이 병목이라는 지적은 향후 연구가 증명 생성보다 명세 자동화로 이동할 것임을 시사한다(→ 분석).

### 업계 영향
OpenAI·Wiz의 AI 기반 CVE 발견처럼 '공격 측 AI'가 빨라지는 흐름에 대해 '증명 측 AI'라는 방어 축이 등장한 것이다(→ 분석). 형식 검증이 CI 파이프라인의 기본 도구가 된다면 보안 감사 시장과 오픈소스 유지보수 방식이 바뀔 수 있다(→ 분석). Theorem 같은 검증 스타트업이 프런티어 랩과 협업하는 모델이 하나의 사업 형태로 자리 잡을 가능성도 있다(→ 분석).

### 관련 프로젝트
- Theorem (형식 검증 파이프라인, Claude 스킬 공개)
- seL4 (형식 검증된 OS 커널, 비교 사례)

### 관련 뉴스
- [PHP 치명적 CVE AI 발견](../records/2026-10-22-php-critical-cves-found-by-ai-openai-wiz.md) — 공격 측 AI 버그 탐지 사례
- [NVIDIA OpenShell](../records/2026-10-23-nvidia-openshell-0-1-agent-runtime.md) — 정책 변경에 형식 검증을 쓰는 에이전트 런타임

## 원문 발췌
> "Using Claude, we proved security properties at the assembly code level (RISC-V) in over 100 real-world open-source software libraries."
> "While writing the proofs, Claude also discovered bugs that had eluded detection for years, despite trillions of test runs."
> "For instance, it took two person-years to implement the seL4 operating system kernel, but 20 person-years to formally verify it."

## 수집 노트
- **선정 이유**: 프런티어 랩 공식 연구 발표이고 HN 437pt로 반응이 커서, AI 보안 방어 축의 대표 사례로 선정.
- **제외 후보**: "How does Fable 5.1 hide messages in images?"(LessWrong, HN 192pt) — 커뮤니티 단일 분석글. TinyFish 에이전틱 검색 아키텍처(MarkTechPost) — 같은 회사 관련 레코드(10-18)가 이미 있음.
