# Claude가 암호학적 취약점을 자율적으로 발견하다

## 메타데이터
- **원문 URL**: https://www.anthropic.com/research/discovering-cryptographic-weaknesses
- **소스**: Anthropic Research
- **발행일**: 2026-07-28
- **수집일**: 2026-07-29
- **수집자**: 레노버
- **카테고리**: research
- **태그**: [anthropic, claude-mythos, cryptography, post-quantum, ai-research]
- **중요도**: ⭐⭐⭐⭐⭐ (1~5)
- **신선도**: fresh

## 핵심 요약
> Anthropic 연구진이 Claude Mythos Preview를 사용해 HAWK 양자내성 디지털 서명 스킴에 대한 개선된 공격을 발견하고, 축소된 AES에 대한 새로운 공격 방식을 찾아냈다. 두 결과 모두 프로덕션 시스템에는 영향을 주지 않지만, AI가 암호학적 알고리즘 자체의 수학적 결함을 발견할 수 있음을 보여주는 중요한 연구 성과다.

## 번역 (한국어)
Anthropic은 Claude Mythos Preview가 암호학 알고리즘의 구현 오류뿐만 아니라 **알고리즘 자체의 수학적 결함**까지 발견할 수 있음을 입증했다. 첫 번째 결과는 미국 NIST의 양자내성 추가 디지털 서명 후보인 **HAWK**에 대한 공격이다. 2년간의 전문가 검토를 거친 HAWK의 유효 키 크기를 절반으로 줄이는 공격을 Mythos가 단 60시간 만에 발견했다.

두 번째 결과는 가장 널리 사용되는 대칭 암호인 **AES(Advanced Encryption Standard)**의 축소 버전에 대한 공격이다. Mythos가 이전 최고 공격보다 200~800배 빠른 공격을 자율적으로 발견했다. 연구원은 스캐폴드만 구축했고, Claude가 나머지 작업을 완전히 자율적으로 수행했다.

두 결과 모두 현재 프로덕션 시스템에 직접적인 영향은 없다. HAWK는 아직 후보 스킴이며 축소 AES는 전체 암호를 깨지 못한다. 그러나 이 연구는 AI가 암호학 알고리즘의 스트레스 테스트에 기여할 수 있음을 보여준다. 각 연구는 약 $100,000의 API 비용이 소요되었으며, Anthropic은 ETH 취리히, 텔아비브 대학, 하이파 대학과 협력하여 **CryptanalysisBench** 벤치마크를 구축했다.

## 왜 중요한가?
이 연구는 AI가 인간 전문가조차 찾지 못한 수학적 취약점을 독자적으로 발견할 수 있음을 최초로 실증적으로 보여주었다. 특히 2년간의 NIST 검토를 통과한 알고리즘을 60시간 만에 돌파한 것은 AI 연구 능력의 새로운 국면을 여는 결과다. 암호학은 사이버 보안의 기반이며, AI가 이 분야에서 기여자 역할을 할 수 있게 된 것은 보안 생태계 전체에 파급 효과가 클 것이다.

## 심층 분석

### 기술 의미
Claude Mythos Preview가 암호학적 공격을 수학적으로 발전시킨 것은 LLM의 능력이 코드 생성과 버그 발견을 넘어, 순수 수학적 추론 영역까지 확장되었음을 의미한다. HAWK에 대한 공격은 격자 동형 문제(Lattice Isomorphism Problem)에 대한 심층적인 수학적 이해가 필요한 작업이며, AES 축소 버전에 대한 공격은 기존 암호해독 기법을 새로운 방향으로 확장한 것이다. 스캐폴드 기반 자율 연구 패턴은 AI가 과학 연구에서 인간의 역할을 '스캐폴딩 제공자'로 축소할 수 있음을 시사한다.

### 업계 영향
AI가 암호학적 취약점을 발견할 수 있다는 것은 양면성을 가진다. 한편으로는 새로운 암호학 표준을 검증하는 강력한 도구가 되어, 더 강건한 보안 시스템 구축에 기여한다. 다른 한편으로는 악의적인 행위자도 유사한 AI를 사용하여 미발견 취약점을 찾을 수 있게 되는 리스크가 존재한다. Anthropic이 책임 있는 공개(responsible disclosure)를 따르고 정부·업계 파트너와 사전 협의한 점은 AI 보안 연구의 모범 사례로 꼽힌다. CryptanalysisBench의 공개는 다른 연구자들이 AI의 암호해독 능력을 평가할 수 있는 기반을 제공한다.

### 관련 프로젝트
- [CryptanalysisBench 논문](https://arxiv.org/abs/2607.18538)
- [HAWK 공격 데모 코드](https://github.com/anthropics/cryptography-research-demo)
- [HAWK 공격 논문](https://anthropic.com/document/hawk_key_recovery.pdf)
- [HAWK 스펙](https://csrc.nist.gov/csrc/media/Projects/pqc-dig-sig/documents/round-1/spec-files/hawk-spec-web.pdf)

### 관련 뉴스
- [OpenAI Codex Security 오픈소스 공개](./2026-07-29-openai-opensource-codex-security.md) — AI 기반 보안 도구 경쟁 가속화
- [Microsoft MAI-Cyber-1-Flash 사이버 보안 모델](./2026-07-28-microsoft-mai-cyber-1-flash-cyber-model.md) — AI 기반 보안 전문 모델 출시

## 원문 발췌
> "Despite HAWK having survived two rounds of expert human review over a period of two years, Mythos was able to improve the best-known attack on it in just 60 hours of work—effectively cutting its key strength in half."
