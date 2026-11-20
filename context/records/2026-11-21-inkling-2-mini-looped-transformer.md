# Thinking Machines, 랩톱에서 도는 루프 트랜스포머 'Inkling 2 Mini' 오픈웨이트 공개

## 메타데이터
- **원문 URL**: https://thinkingmachines.ai/news/inkling-2-mini/
- **소스**: Thinking Machines 공식 블로그 (HN 프런트페이지)
- **발행일**: 2026-11-20
- **수집일**: 2026-11-21
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [open-weights, looped-transformer, MoE, on-device, agentic-coding]
- **소스 권위**: official
- **교차 확인**: 2 (Thinking Machines 공식, Hacker News 프런트페이지)
- **중요도**: ⭐⭐⭐⭐ (official +2, 교차 2개 +1, HN 50pt+ 진입 +1 → 1+2+1+1)
- **신선도**: fresh

## 핵심 요약
> Thinking Machines는 중간 레이어를 토큰당 3회 반복 실행하는 루프 트랜스포머 Inkling 2 Mini(총 26.4B·활성 3.4B)를 오픈웨이트로 공개했다. 약 20GB 메모리로 소비자용 랩톱에서 돌아가며, 100B 미만 오픈 모델 중 DeepSWE v1.1 48.2%로 최상위라고 밝혔다.

## 번역 (한국어)
Thinking Machines가 Inkling 2 Mini를 공개했다. 랩톱에서 실행 가능할 만큼 작으면서도 빠르고 강력한 모델이다. 핵심 구조는 루프 트랜스포머로, 모델의 중간 레이어를 토큰마다 세 번 반복 실행한다. 이를 통해 적은 토큰으로 더 많은 추론을 적용할 수 있으며, 특히 추론 품질이 좌우하는 에이전트 코딩 작업에서 효과적이라고 한다.

Inkling 2 Mini는 총 26.4B·활성 3.4B 파라미터의 MoE 모델이며 루핑을 고려해 토큰당 5.4B 가중치 활성이 발생한다. DeepSWE v1.1 48.2%, Vals Index v2.2 46.5% 등 100B 미만 오픈웨이트 모델 벤치마크를 선도하며, 유사 성능 모델보다 빠르게 돈다는 주장이다.

루핑의 의미는 '이유를 적지 않고 더 오래 생각하기'다. 연구용 가변 루프 변형 모델에서 CoT 없는 시간 지평선이 1패스 16초에서 3패스 37초로 늘었고, 직렬 추론 벤치마크는 학습 때보다 두 배 많은 10루프까지 향상됐다. 사보타주 성향 검사에서는 루프가 늘어도 상승하지 않았다.

대부분의 가중치는 NVFP4로 학습·배포되며(마지막 4레이어는 MXFP8), 총 메모리 풋프린트는 약 20GB로 맥북 프로 같은 소비자 기기에서 오프라인으로 돈다. 연구자들이 비행기 안 맥북 프로에서 오프라인으로 실행해 몇 분 만에 플레이 가능한 비행 시뮬레이터를 만드는 시연도 공개했다.

지식 저장은 파라미터 수의 함수라 루핑으로 늘지 않지만, 검색·도구 사용으로 보완해 BrowseComp·DeepSearchQA·MCP Atlas 등에서 동급 오픈 모델을 선도한다고 밝혔다.

## 왜 중요한가?
프런티어급 추론 능력이 인터넷 연결 없이 개인 노트북에서 돌아가는 시대가 가까워졌다는 실증이다. 클라우드 없이 쓰는 에이전트 코딩은 비용·프라이버시 모두에서 일반 사용자에게 유의미한 변화다.

## 심층 분석

### 기술 의미
루프 트랜스포머는 파라미터를 늘리지 않고 추론 깊이를 늘리는 경로로, 테스트타임 스케일링과 달리 이득을 가중치에 적지 않고 얻는 구조와 짝을 이룬다. CoT 가독성이 루프를 늘려도 유지되고 사보타주 지표가 오르지 않았다는 모니터링 결과는 안전성 관점에서 주목할 데이터다. (→ 분석)

### 업계 영향
오픈웨이트 소형 모델이 에이전트 코딩 벤치마크 상위를 차지하면 온디바이스 에이전트 시장이 빨라질 수 있다. MCP Atlas 등 도구 사용 벤치마크 포함은 에이전트 워크플로가 로컬에서 완결될 수 있음을 시사한다. (→ 분석)

### 관련 프로젝트
- https://thinkingmachines.ai/model-card/tml-d24-varloop-research/

### 관련 뉴스
- [RadixArk DaisyRose-27B](../records/2026-11-21-radixark-daisyrose-27b-rl.md) — 같은 날 공개된 소형 에이전트 코딩 모델
- [OpenAI GPT-6.2 Astra·Sol](../records/2026-11-18-openai-gpt-6-2-astra-sol.md) — 프런티어 진영과의 크기 대비 성능 비교

## 원문 발췌
> "Inkling 2 Mini is a looped transformer, running the middle layers of the model three times for every token."
> "Inkling 2 Mini is a Mixture-of-Experts model with 26.4B total parameters, 3.4B active."
> "The total memory footprint of Inkling 2 Mini is ~20GB, allowing it to run on local devices such as consumer laptops."

## 수집 노트
- **선정 이유**: 공식 발표 + HN 프런트페이지(50pt+ 조건 충족 피드)로 교차 확인된 오픈웨이트 공개로, 온디바이스 에이전트 동향의 핵심 데이터.
- **제외 후보**: "Language Models Can Rewrite Their Own Weights"(arXiv) — 별도 레코드로 수록; Riemann 가설 AI 증명 주장(TechCrunch/HN 다수) — 검증 진행 중인 수학 사안으로 에이전트 직접 관련성 낮음.
