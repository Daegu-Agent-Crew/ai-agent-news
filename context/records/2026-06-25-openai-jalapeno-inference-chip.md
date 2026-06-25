# OpenAI, 첫 자체 AI 추론 칩 'Jalapeño' 공개

## 메타데이터
- **원문 URL**: https://venturebeat.com/infrastructure/openai-unveils-first-custom-ai-inference-chip-jalapeno-with-broadcom-and-its-development-was-sped-up-with-openais-own-models
- **소스**: VentureBeat
- **발행일**: 2026-06-24
- **수집일**: 2026-06-25
- **수집자**: 대구루
- **카테고리**: industry
- **태그**: [openai, broadcom, asic, inference, chip, hardware, infrastructure]
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> OpenAI가 Broadcom과 협력하여 첫 자체 맞춤형 AI 추론 칩 'Jalapeño'를 발표했다. LLM 추론에 특화된 ASIC로, 추론 비용을 약 50% 절감하며, 9개월 만에 설계에서 제조 단계까지 완료한 초고속 개발이 특징이다.

## 번역 (한국어)
OpenAI와 Broadcom은 6월 24일 첫 자체 AI 가속기 칩인 'Jalapeño'를 공개했다. 이 칩은 Nvidia의 범용 GPU와 달리 LLM 추론에 특화된 ASIC(Application-Specific Integrated Circuit)로, ChatGPT, Codex, API 및 향후 에이전트 제품의 워크로드를 지원하도록 설계되었다. 추론 비용을 약 50% 절감하는 것으로 알려졌다.

가장 놀라운 점은 개발 속도다. 반도체 산업에서 신형 프로세서 개발은 통상 수년이 걸리지만, Jalapeño는 초기 설계에서 제조 준비까지 단 9개월 만에 완료되었다. OpenAI와 Broadcom의 파트너십 자체도 2025년 10월에 발표된 것이다. 이 속도의 비결은 OpenAI 자체 모델을 칩 설계 과정에 적극 활용한 '소프트웨어-하드웨어 동시 개발' 방식 때문이다.

OpenAI는 이미 이전 세대 모델 GPT-5.3-Codex-Spark를 이 칩에서 테스트 중이며, 올해 말까지 활성 데이터 센터에 배포할 계획이다. Broadcom은 핵심 실리콘 구현과 Tomahawk 네트워킹 기술을 담당하고, Celestica가 보드 및 시스템 통합을 맡는다.

이 칩 발표의 배경에는 OpenAI의 재무적 압박이 있다. 2025년 매출 130억 7천만 달러에 반해 총 운영 비용은 340억 달러로, 약 209억 2천만 달러의 영업 손실을 기록했다. 연구개발 비용만 192억 달러에 달한다. 추론 비용 절감은 2026년 예상 공개(IPO)를 앞둔 OpenAI에게 수익성 개선의 핵심 카드다.

한편, 이는 Nvidia에 대한 전략적 재배치이기도 하다. OpenAI는 여전히 Nvidia의 최대 고객 중 하나지만, 자체 칩을 통해 의존도를 낮추고 협상력을 강화하려 한다. 다만 당장 Nvidia 칩을 완전히 대체하는 것은 아니며, 특정 추론 워크로드에 한정된다.

## 왜 중요한가?
ChatGPT를 작동시키는 데 드는 비용이 절반으로 줄어들 수 있습니다. 이는 AI 서비스가 더 많은 사람에게 더 저렴하게 제공될 수 있다는 뜻입니다. 또한 AI 회사가 스스로 칩을 만드는 시대가 본격 시작되어, 반도체 업계 지형이 바뀌고 있습니다.

## 심층 분석

### 기술 의미
Jalapeño는 범용 GPU가 아닌 LLM 서빙에 최적화된 ASIC다. 불필요한 데이터 이동을 줄이고 컴퓨트, 메모리, 네트워킹 리소스를 긴밀하게 매칭하는 아키텍처를 채택했다. OpenAI 자체 모델을 칩 설계에 사용하여 개발 주기를 단축한 것은 AI가 하드웨어 설계를 가속하는 실례다. Tomahawk 네트워킹 실리콘과의 통합은 데이터센터 규모의 추론 처리량을 극대화하는 데 목적이 있다.

### 업계 영향
OpenAI가 자체 칩을 출시하는 것은 AI 인프라의 수직 통합이 가속하고 있음을 보여준다. Google(TPU), Amazon(Trainium), Meta(MTIA)에 이어 OpenAI까지 자체 실리콘에 진입하면서, Nvidia의 독점적 지위가 점진적으로 약화할 수 있다. 추론 비용 50% 절감은 API 가격 인하로 이어져 에이전트 애플리케이션의 경제성을 높일 것이다. 2026년 IPO를 앞둔 OpenAI에게 비용 구조 개선은 투자자 신뢰 확보의 핵심이다.

### 관련 프로젝트
- [OpenAI Jalapeño 발표](https://openai.com/index/openai-broadcom-jalapeno-inference-chip/)
- [Broadcom 공식 발표](https://investors.broadcom.com/news-releases/news-release-details/openai-and-broadcom-unveil-llm-optimized-intelligence-processor)
- [OpenAI GPT-5.3-Codex-Spark](https://openai.com/index/introducing-gpt-5-3-codex-spark/)

### 관련 뉴스
- [2026-06-24 AI 모델 전쟁](../records/2026-06-24-june-2026-ai-model-war.md) — 6월 AI 모델 경쟁 구도
- [Humanoid Robots Scaled Deployment](../records/2026-06-20-humanoid-robots-scaled-deployment.md) — AI 하드웨어 산업 동향

## 원문 발췌
> "By designing more of the stack ourselves, we can serve more intelligence with greater efficiency and keep pushing advanced AI toward broader access."

> "Jalapeño's engineering timeline set a blistering pace for the semiconductor industry, moving from early schematics to fabrication readiness within a brief nine-month window."
