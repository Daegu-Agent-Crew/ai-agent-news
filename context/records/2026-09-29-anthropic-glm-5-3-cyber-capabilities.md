# Anthropic "GLM-5.3, Mythos급 사이버 공격 능력을 안전장치 없이 공개" 분석 보고서

## 메타데이터
- **원문 URL**: https://www.anthropic.com/research/glm-5-3-and-the-spread-of-advanced-cyber-capabilities
- **소스**: Anthropic Frontier Red Team
- **발행일**: 2026-09-29
- **수집일**: 2026-09-30
- **수집자**: 레노버
- **카테고리**: research
- **태그**: [anthropic, glm-5-3, z-ai, cybersecurity, exploit, open-weight, caisi]
- **소스 권위**: official
- **교차 확인**: 2
- **교차 확인 근거**: Anthropic 공식 분석, NIST CAISI의 9/17 GLM-5.3 사이버 역량 평가 (HN 171pt)
- **중요도**: ⭐⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Anthropic은 Zhipu AI(Z.ai)의 GLM-5.3이 Claude Mythos Preview처럼 엔드투엔드 사이버 익스플로잇을 자율 개발할 수 있으면서도, 단순한 기법으로 64~100% 확률로 안전장치가 우회된다고 보고했다. ExploitBench에서 GLM-5.3은 410회 중 50회, Mythos Preview는 56회 성공했다.

## 번역 (한국어)
Anthropic은 5개월 전 엔드투엔드 사이버 익스플로잇을 자율적으로 만들 수 있는 첫 모델 Claude Mythos Preview를 발표하면서, 이 능력이 결국 다른 모델로 확산될 것이라 보고 Project Glasswing을 통해 제한적으로만 공개했다. Anthropic에 따르면 신뢰할 수 있는 방어자들은 이를 통해 핵심 소프트웨어에서 1만 개 이상의 취약점을 찾아냈다.

Anthropic은 이제 그런 모델이 도착했다며 Zhipu AI의 최신 모델 GLM-5.3을 분석했다. Anthropic은 GLM-5.3이 강력한 익스플로잇 자율 개발 능력을 가졌지만 오용을 막을 의미 있는 안전장치 없이 공개됐다고 지적했다. 시뮬레이션 테스트에서 공격자는 단순한 기법으로 64~100% 확률로 GLM-5.3의 안전장치를 우회했으나, 같은 공격은 안전장치가 적용된 Claude 모델에는 통하지 않았다고 밝혔다.

NIST 산하 CAISI는 9월 17일 자체 평가에서 GLM-5.3을 "지금까지 공개된 가장 사이버 역량이 높은 오픈 웨이트 모델"로 평가하며, 미국 프런티어보다 약 4개월 뒤처진다고 결론지었다. Anthropic은 자사 역량 평가가 CAISI와 대체로 일치한다고 밝히면서, 미국 모델의 최상위 버전은 공격자가 쉽게 접근할 수 없지만 GLM-5.3은 누구나 내려받을 수 있다는 차이를 강조했다.

구체적 수치로, V8 엔진 취약점 공략을 측정하는 ExploitBench에서 GLM-5.3은 410회 중 50회, Mythos Preview는 56회 엔드투엔드 익스플로잇에 성공했다. OSS-Fuzz 프로젝트 기반 내부 바이너리 익스플로잇 벤치마크에서는 GLM-5.3이 4%, Mythos Preview가 6%의 제어 흐름 탈취에 성공했으며, Claude Opus 4.6과 GLM-5.2는 한 건도 성공하지 못했다. 인간 전문가 세션에서는 연구자가 하루 동안(사람의 집중 시간 1시간 미만) GLM-5.3으로 인기 브라우저 JS 엔진의 미공개 취약점 여러 개를 찾아 임의 파일을 읽는 익스플로잇으로 엮었다고 Anthropic은 전했다.

## 왜 중요한가?
최고 수준의 해킹 능력을 가진 AI가 이제 누구나 내려받을 수 있는 공개 모델로 풀렸다는 뜻이다. 소수 기업이 접근을 통제하던 시대가 끝나면서, 보안 담당자들은 공격자도 같은 AI를 쓴다는 전제로 방어 체계를 다시 짜야 한다.

## 심층 분석

### 기술 의미
Anthropic은 GLM-5.3이 이전 세대(GLM-5.2, Claude Opus 4.6)가 전혀 넘지 못한 '제어 흐름 탈취' 임계선을 넘었다고 평가했다. ExploitBench 성공률이 Mythos Preview와 비슷하다는 점은 최상위 사이버 역량 격차가 수개월 단위로 줄고 있음을 보여준다. (→ 분석) 다만 이 보고서는 경쟁사 모델에 대한 Anthropic 자체 평가라는 이해관계가 있으며, 수치 중 역량 부분은 CAISI와 교차되지만 우회율(64~100%)은 Anthropic 단독 측정이다.

### 업계 영향
오픈 웨이트 모델의 안전장치 부재가 공개적으로 문제 제기되면서, 오픈 모델 배포에 대한 규제 논의가 다시 불붙을 가능성이 크다. (→ 분석) 반대로 Anthropic도 인정하듯 같은 능력이 방어자에게도 이익이 되므로, 오픈 모델을 보안 점검에 쓰려는 수요도 커질 것이다. Anthropic의 '제한 공개(Glasswing)' 전략의 선점 효과가 이제 소진됐다는 자기 진단으로도 읽힌다.

### 관련 프로젝트
- [Z.ai — GLM-5.3 공식 블로그](https://z.ai/blog/glm-5.3)
- Project Glasswing (Anthropic 제한 공개 프로그램)

### 관련 뉴스
- [GLM-5.3 오픈 웨이트 공개](2026-08-28-glm-5-3-openweight.md) — 분석 대상 모델의 출시
- [Z.ai GLM-5.3 Flash](2026-08-26-z-ai-glm-5-3-flash.md) — 같은 계열 경량 모델

## 원문 발췌
> "Like Claude Mythos Preview, GLM-5.3 has strong capabilities for autonomously building end-to-end cyber exploits. But GLM-5.3 is unlike other frontier models in that it has been released without meaningful safeguards to limit misuse."
> "We find that attackers can bypass GLM-5.3's safeguards between 64% and 100% of the time with simple techniques in our simulated tests."
> "We find that GLM-5.3 develops end-to-end exploits in 50 of 410 attempts. Claude Mythos Preview did so at a similar rate—in 56 of 410 attempts."
> "CAISI found that GLM-5.3 is "the most cyber-capable open-weight model released to date" and that it lags the US frontier by about four months"

## 수집 노트
- **선정 이유**: 공식 연구 발표이며 NIST CAISI 평가와 교차 확인되고 HN 171pt 반응이 있어, 오픈 모델로의 최상위 사이버 역량 확산을 기록하는 핵심 자료로 선정.
- **제외 후보**: "Reco raises $55M as AI agent security startups crowd the market(TechCrunch)" — 투자 소식 단일 소스로 기술 세부 부족. "H Company Holo4 오픈 웨이트 컴퓨터 사용 모델(MarkTechPost)" — 단일 소스, 오늘 슬롯 초과.
