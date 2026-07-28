# Microsoft AI, MAI-Cyber-1-Flash 공개: 에이전트 기반 사이버 방어 모델이 CyberGym 95.95% 달성

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/07/28/microsoft-ai-releases-mai-cyber-1-flash-a-5b-active-parameter-cyber-model-that-pushes-mdash-to-95-95-on-cybergym/
- **소스**: MarkTechPost
- **발행일**: 2026-07-28
- **수집일**: 2026-07-29
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [microsoft, cybersecurity, agentic-scanning, sparse-moe, MAI]
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Microsoft가 사이버 방어 전용 첫 모델 MAI-Cyber-1-Flash를 출시. 137B 파라미터 중 5B만 활성화하는 희소 MoE 구조로, 에이전트 스캐닝 시스템 MDASH 내에서 CyberGym 벤치마크 95.95%를 달성하며 이전 대비 50% 비용 절감을 실현.

## 번역 (한국어)
Microsoft AI는 사이버 보안에 특화된 첫 모델인 MAI-Cyber-1-Flash를 출시했습니다. 이 모델은 단독 엔드포인트로 배포되지 않고, Microsoft의 다중 모델 에이전트 스캐닝 하니스인 MDASH 내부에서 실행됩니다. 총 137B 파라미터 중 5B만 활성화하는 희소 Mixture-of-Experts 구조를 채택했으며, 컨텍스트 길이는 256K 토큰입니다.

이 모델은 이미 GitHub Copilot과 VS Code에 통합된 경량 에이전트 코딩 모델인 MAI-Code-1-Flash를 사이버 보안 도메인으로 파인튜닝한 결과물입니다. 1,507개의 실제 취약점 재현 작업으로 구성된 CyberGym 벤치마크에서 GPT-5.4와 협력하여 95.95%라는 압도적인 성능을 기록했습니다. 이는 Anthropic의 Mythos보다 약 12포인트 높은 수치이며, 경쟁 시스템들이 83.2%~85.6%에 머무는 것과 대비됩니다.

MDASH는 100개 이상의 전문 에이전트를 준비, 스캔, 검증, 중복 제거, 증명의 5단계로 관리합니다. MAI-Cyber-1-Flash가 전체 작업의 최대 90%를 처리하고, 가장 어려운 10%만 GPT-5.4에 위임하는 라우팅 방식으로 이전 구성 대비 50%의 비용 절감을 달성했습니다. 특이한 점은 이 모델이 취약점 패치와 같은 방어 작업에만 훈련되었고, 악용 코드 생성은 의도적으로 제한했다는 것입니다.

## 왜 중요한가?
AI 에이전트가 단순히 코드를 작성하는 것을 넘어, 실제 사이버 보안 분야에서 자율적으로 취약점을 탐지하고 방어하는 역할을 수행할 수 있게 되었습니다. 특히 전문화된 소형 모델이 고비용 프론티어 모델 대신 90%의 작업을 처리해 비용을 절반으로 줄인 것은, 기업이 AI 에이전트를 실제 프로덕션 환경에서 경제적으로 운영할 수 있음을 보여주는 강력한 사례입니다.

## 심층 분석

### 기술 의미
MAI-Cyber-1-Flash는 에이전트 아키텍처 내에서 전문화된 소형 모델이 어떻게 프론티어 모델과 협력하여 최고 수준의 성능을 달성할 수 있는지를 보여주는 실증 사례입니다. 희소 MoE 구조로 137B 파라미터 중 5B만 활성화하는 설계는 추론 비용을 극적으로 낮추면서도 도메인 특화 성능을 유지하는 전략입니다. 또한 256K 컨텍스트 창은 대규모 코드베이스 분석에 필수적인 긴 문맥 처리를 지원합니다.

방어 전용 모델이라는 설계 철학도 주목할 만합니다. ExploitGym 점수가 고의로 0으로 설계된 것은, AI 모델의 듀얼 유즈(dual-use) 문제에 대한 Microsoft의 의도적인 대응입니다. 공격 능력을 포기함으로써 규제 리스크를 줄이면서도 방어 성능은 극대화하는 접근은 향후 도메인 특화 모델 설계의 중요한 패턴이 될 수 있습니다.

### 업계 영향
이 출시는 AI 에이전트 생태계에 두 가지 중요한 시사점을 던집니다. 첫째, Microsoft가 자체 MAI 모델 패밀리를 GitHub Copilot, 보안, 이미지 생성, 음성 등 다양한 도메인으로 확장하면서 OpenAI 의존도를 지속적으로 낮추고 있다는 점입니다. 둘째, 다중 에이전트 시스템에서 "적절한 모델에 적절한 작업을 할당하는" 지능형 라우팅이 비용 효율성의 핵심이 되었다는 점입니다.

또한 MDASH가 실제로 16개의 CVE(4개는 치명적인 원격 코드 실행 취약점 포함)를 발견하고, 과거 5년간의 MSRC 사례를 96~100% 복원한 것은 AI 에이전트 기반 보안이 연구 단계를 넘어 실제 보안 운영에 기여하고 있음을 보여줍니다. 이는 에이전트 기반 자동화가 보안 분야에서 즉각적인 ROI를 창출할 수 있는 분야임을 시사합니다.

### 관련 프로젝트
- [MAI-Cyber-1-Flash Model Card](https://microsoft.ai/pdf/MAI-Cyber-1-Flash-Model-Card.pdf)
- [CyberGym Benchmark](https://www.cybergym.io/cybergym/)
- [Microsoft MDASH 소개 블로그](https://www.microsoft.com/en-us/security/blog/2026/05/12/defense-at-ai-speed-microsofts-new-multi-model-agentic-security-system-tops-leading-industry-benchmark/)

### 관련 뉴스
- [Microsoft 내부 AI 모델 출시 — OpenAI 대비 최대 89% 비용 절감](../records/2026-07-28-microsoft-in-house-ai-models-cut-costs-89-percent-vs-openai.md) — Microsoft의 자체 모델 생태계 전략
- [Anthropic Claude Opus 5 출시](../records/2026-07-28-anthropic-claude-opus-5-coding-agents-enterprise.md) — 코딩 에이전트 경쟁 심화

## 원문 발췌
> "It is a cybersecurity-specialized fine-tune of MAI-Code-1-Flash, the lightweight agentic coding model already embedded in GitHub Copilot and VS Code." / "A 5B-active model that cannot generate exploits but can drive a 95.95% discovery pipeline is exactly the artifact a defender-only product needs."
