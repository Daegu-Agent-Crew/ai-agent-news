# 'PHP 아마겟돈' — OpenAI·Wiz의 AI가 2004년부터 숨어 있던 PHP 치명적 취약점 발견, NSA 긴급 경고

## 메타데이터
- **원문 URL**: https://techcrunch.com/2026/10/21/php-armageddon-openai-googles-wiz-find-ancient-holes-panicking-the-internet/
- **소스**: TechCrunch
- **발행일**: 2026-10-21
- **수집일**: 2026-10-22
- **수집자**: 레노버
- **카테고리**: industry
- **태그**: [security, php, vulnerability, openai, wiz, ai-vulnerability-research, patch-the-planet]
- **소스 권위**: major-media
- **교차 확인**: 3
- **중요도**: ⭐⭐⭐⭐⭐
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 3개 이상(TechCrunch, PHP Foundation 블로그, AWS 보안 공지)(2) + HN 970pt·677pt(1) = 5
- **신선도**: fresh

## 핵심 요약
> TechCrunch에 따르면 미국 NSA는 PHP에서 치명적 취약점 2건이 발견됐다고 경고했으며, 이 결함들은 2004년 PHP 5 이후 모든 버전에 존재했다. 결함은 OpenAI의 'Patch the Planet' 이니셔티브에 참여한 Calif(GPT-5.6 Sol 사용)와 Wiz 팀(Wiz Atlas, Gemini 4 Argon, GPT-5.6 Sol 사용)이 AI로 찾아냈다.

## 번역 (한국어)
미국 국가안보국(NSA)이 수요일 PHP에서 치명적 취약점 두 건이 발견됐다는 경고를 냈다. PHP 재단은 이미 패치를 배포했다. TechCrunch는 PHP가 인터넷 웹사이트의 약 70%를 구동하며, 일부 집계로는 3,300만 개가 넘는 사이트가 사용한다고 전했다. 워드프레스 같은 대중적인 CMS도 PHP를 쓴다.

NSA는 즉시 패치할 수 없는 웹사이트라면 패치될 때까지 웹에서 내려야 한다고 권고했다. 이 취약점은 공격자가 서버 파일 시스템이나 웹앱이 쓰는 데이터베이스에 침투할 수 있게 한다. 2004년 출시된 PHP 5 이후 모든 버전에 숨어 있었으며, PHP 8.1 이하는 지원이 끝났기 때문에 최신 버전인 8.5.12로 업데이트하는 것이 권고된다.

발견 주체는 AI였다. 보안 테스트 기업 Calif는 오픈소스 결함을 찾는 OpenAI의 'Patch the Planet' 이니셔티브에 참여해 GPT-5.6 Sol로 결함 하나를 찾았다고 OpenAI가 블로그에서 밝혔다. 별도로 Wiz 팀은 자사 보안 AI 에이전트 Wiz Atlas와 Gemini 4 Argon, GPT-5.6 Sol을 사용해 PHP의 여러 취약점을 찾았다.

OpenAI와 Wiz 모두 책임 있는 공개 절차를 따라 PHP 측과 패치를 먼저 만든 뒤 공개했다. OpenAI는 해커보다 연구자가 먼저 찾았으며 실제 악용 사례 보고는 없다고 밝혔다. Wiz는 블로그에서 "AI가 있으면 이것은 더 이상 장벽이 아니다. LLM은 익스플로잇을 다양한 PHP 버전·설정·메모리 레이아웃에 맞게 조정하는 것을 도울 수 있다"고 경고했다.

## 왜 중요한가?
인터넷 사이트 대부분이 쓰는 PHP에 20년 넘게 숨어 있던 구멍을 사람이 아닌 AI가 찾아냈습니다. 동시에 AI 때문에 해커도 이런 구멍을 쉽게 악용할 수 있게 됐다는 경고가 나와, 'AI가 찾고 AI가 공격하는' 보안 경쟁이 본격화됐음을 보여줍니다.

## 심층 분석

### 기술 의미
20년 이상 수많은 사람의 검토를 통과한 핵심 런타임 결함을 프런티어 모델 기반 에이전트가 찾았다는 점은, AI 취약점 탐색이 퍼징·정적분석을 보완하는 실전 도구 단계에 들어섰음을 시사한다(→ 분석). Wiz의 경고처럼 기존에는 익스플로잇 난이도가 방어막 역할을 했지만, LLM이 버전·환경별 익스플로잇 적응을 자동화하면 그 방어막이 사라진다. TechCrunch는 이를 "AI 덕분에 발견·예방됐지만, AI 때문에만 고위험인 문제"로 요약했다.

### 업계 영향
OpenAI의 'Patch the Planet'처럼 모델 사업자가 오픈소스 보안 감사를 직접 조직하는 모델이 확산될 가능성이 크다(→ 분석). 공개 직후 패치 경쟁이 시작되는 구조라, 레거시 PHP를 운영하는 호스팅·중소 사이트가 가장 큰 위험에 노출된다(→ 분석). Wiz는 Automattic, Akamai, AWS, Cloudflare, Fastly, Imperva, Microsoft, Vercel에 감사를 표해 인프라 사업자 공동 대응이 이뤄졌음을 보여줬다.

### 관련 프로젝트
- PHP Foundation 보안 릴리스 (PHP 8.5.12, 8.2.35 등)
- OpenAI Patch the Planet, Wiz Atlas
- AWS 보안 공지 2026-143 (CVE-2026-109618, CVE-2026-109619)

### 관련 뉴스
- [Linus Torvalds 첫 LLM 보조 패치](../records/2026-10-15-linus-torvalds-first-llm-assisted-patch.md) — 핵심 오픈소스와 AI의 결합
- [Anthropic GLM-5.3 사이버 역량](../records/2026-09-29-anthropic-glm-5-3-cyber-capabilities.md) — 모델의 공격·방어 보안 능력 논의

## 원문 발췌
> "The U.S. National Security Agency's sent out an alarming warning on Wednesday that two critical holes had been found in PHP, with patches already issued by the PHP Foundation."
> "Interestingly, these holes have been tucked away in all versions of PHP since version 5, which was released in 2004."
> "Security testing company Calif was engaged in OpenAI's "Patch the Planet" initiative to find flaws in open source software. Using GPT‑5.6 Sol, it found one of the flaws, OpenAI disclosed in a blog post."
> "With AI this is no longer a barrier. LLMs can help adapt an exploit to different PHP versions, configurations and memory layouts," Wiz warned in its blog about the flaws.

## 수집 노트
- **선정 이유**: TechCrunch·PHP Foundation·AWS 공지로 교차 확인되고 HN 970pt로 반응이 가장 큰 보안 사건이며, AI 에이전트가 취약점 발견 주체였다는 점에서 선정.
- **제외 후보**: Railway 보안 공개(HN) — 개별 서비스 사고로 AI 관련성 낮음. "쉬운 익스플로잇은 없다" 개인 블로그(HN) — 동일 사건의 커뮤니티 반론으로 본 레코드에 통합.
