# Aleph Alpha, 주권형 오픈 웨이트 모델 'Kolibri' 공개 — 78B MoE·활성 3B·1M 컨텍스트

## 메타데이터
- **원문 URL**: https://aleph-alpha.com/en/blog/kolibri-has-landed-a-sovereign-open-weight-model/
- **소스**: Aleph Alpha 공식 블로그 (교차: tej.as 기술 해설 블로그)
- **발행일**: 2026-10-03
- **수집일**: 2026-10-04
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [aleph-alpha, kolibri, open-weight, moe, sovereign-ai, germany, apache-2-0]
- **소스 권위**: official
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐⭐⭐
- **신선도**: fresh
- **중요도 산정**: 기본 1 + official 2 + 독립 소스 2개 1 + 반응 규모 HN 470pt·댓글 283 1 = 5

## 핵심 요약
> 독일 Aleph Alpha가 총 78B·활성 3B 파라미터의 영어-독일어 MoE 모델 Kolibri를 Apache 2.0 라이선스로 Hugging Face에 공개했다. 최대 1M 토큰 컨텍스트를 지원하며, 회사는 활성 파라미터가 최대 4배인 Nemotron 3 Super급 모델과 맞먹는다고 밝혔다.

## 번역 (한국어)
Aleph Alpha는 독일 통일 기념일에 맞춰 새 모델 Kolibri를 공개했다. Kolibri는 총 780억 파라미터 중 30억만 활성화되는 영어-독일어 Mixture-of-Experts 트랜스포머로, 최대 100만 토큰 컨텍스트를 지원한다. 전체 가중치를 Hugging Face에서 내려받아 Apache 2.0 조건으로 사용할 수 있다.

회사는 먼저 학습 파이프라인을 구축하고 이를 총 30B·활성 3B·65k 컨텍스트의 Kolibri Origin으로 검증했다고 설명했다. Kolibri는 같은 파이프라인(데이터 수집·정제, 수백 건의 ablation, 사전·사후 학습, 평가)을 거쳤으며, 하드웨어 장애나 데이터 연결 끊김에도 사람 개입 없이 안정적으로 사전 학습이 진행됐다고 밝혔다.

Kolibri는 공공행정·산업·항공우주 같은 규제 분야의 '주권형 미션 크리티컬' 업무를 겨냥해 독일어·추론·수학·에이전트 행동에 특화됐다. Aleph Alpha는 주권을 '모델을 어떻게 만들었는가'와 '고객에게 어떻게 이전되는가'의 두 차원으로 정의하며, 데이터 수집부터 평가까지 공급망 전체의 무결성과 투명성, 배포 자유와 지식재산 안전을 제공한다고 밝혔다. 작은 활성 크기 덕분에 내부 데이터를 외부 추론 서비스로 보내지 않고 온프레미스에서 운영할 수 있다고 강조했다.

회사가 공개한 벤치마크에서 Kolibri는 AIME 2025 96.9, GPQA diamond 84.3, LiveCodeBench v6 85.9, τ³-bench banking 38.1을 기록했다. Aleph Alpha는 영어·독일어 모두에서 품질 대비 서빙 비용의 파레토 프런티어에 있다고 주장했다.

## 왜 중요한가?
미국·중국 모델에 의존하지 않으려는 유럽 공공기관·제조업에, 직접 내려받아 사내 서버에서 돌릴 수 있는 고성능 모델이 생겼다는 의미입니다. 활성 파라미터가 3B라 운영 비용이 낮아 '데이터를 밖으로 내보내지 않는 AI 에이전트'를 현실적인 비용으로 만들 수 있습니다.

## 심층 분석

### 기술 의미
78B 총량 대비 3B 활성이라는 극단적 희소 MoE 구조는 메모리는 크게 쓰되 연산량은 소형 모델 수준으로 유지하는 설계로, 온프레미스 추론 비용을 낮추는 방향이다. 회사 수치상 τ³-bench banking(38.1)에서 비교 모델들(5.7~15.5)을 크게 앞선 점은, 규제 산업용 에이전트 워크플로에 맞춘 특화 학습의 효과를 보여주려는 것으로 읽힌다(→ 분석). 다만 τ²-bench telecom·BFCL v4에서는 Qwen3.6-35B-A3B보다 낮은 점수를 공개해, 모든 영역에서 우위라는 주장은 아니다.

### 업계 영향
Aleph Alpha는 과거 독자 대형 모델 경쟁에서 물러났다는 평가를 받았던 회사로, 이번 공개는 '범용 최강'이 아니라 '주권·특화·저비용' 포지셔닝으로 재진입한 사례다(→ 분석). Apache 2.0 공개는 유럽 기업이 Qwen·GLM 등 중국계 오픈 모델을 대체할 선택지로 검토할 여지를 만든다. HN에서 470pt를 기록하는 등 개발자 커뮤니티 관심도 높았다.

### 관련 프로젝트
- [Kolibri 기술 보고서 (PDF)](https://aleph-alpha.com/downloads/tech-report.pdf)
- [tej.as 해설 "How the sovereign German LLM works"](https://tej.as/blog/aleph-alpha-kolibri)

### 관련 뉴스
- [Samsung-Mistral 반도체 AI 협력](../records/2026-09-10-samsung-mistral-semiconductor-ai.md) — 유럽 AI 기업의 산업 특화 흐름
- [GLM-5.3 오픈 웨이트 공개](../records/2026-08-28-glm-5-3-openweight.md) — 경쟁 오픈 웨이트 모델
- [GLM·Qwen 모델 수렴](../records/2026-08-28-glm-qwen-model-convergence.md) — 오픈 모델 시장 지형

## 원문 발췌
> "Kolibri is an English-German Mixture-of-Experts Transformer with 78B total parameters, 3B active. It supports context lengths of up to 1M tokens."
> "The model can be downloaded with the full weights on Hugging Face and used under the Apache 2.0 license terms."
> "Across math, coding, grounding, and long-context tasks, Kolibri matches models with up to four times its active parameter count, such as Nemotron 3 Super."

## 수집 노트
- **선정 이유**: 공식 발표에 독립 해설 블로그가 교차되고 HN 관련 글 3건(470·409·109pt)이 상위권에 올라 산정상 최고점이며, 온프레미스 에이전트용 오픈 모델이라는 주제와 직접 연결됨.
- **제외 후보**: Gemini 무료 Flash/Pro 종료(Reddit, HN 57pt) — 단일 커뮤니티 제보로 공식 확인 없음.
