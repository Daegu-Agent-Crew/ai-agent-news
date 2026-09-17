# PrismML, Qwen3.8 27B를 5.9GB로 압축한 'Bonsai 2 27B' 공개 — 벤치마크 98.2% 유지

## 메타데이터
- **원문 URL**: https://prismml.com/news/bonsai-2-27b
- **소스**: PrismML 공식 발표
- **발행일**: 2026-09-17
- **수집일**: 2026-09-18
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [prismml, bonsai-2, ternary-weights, model-compression, qwen3.8, local-llm, apache-2.0]
- **소스 권위**: official
- **교차 확인**: 3
- **중요도**: ⭐⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> PrismML이 Qwen3.8 27B를 삼진(ternary) 가중치로 압축해 5.9GB 풋프린트에서 원본 집계 벤치마크 성능의 98.2%를 유지하는 'Ternary Bonsai 2 27B'를 Apache 2.0으로 공개했다. RTX 5090에서 초당 143토큰을 처리하며 코딩 에이전트·도구 호출 성능을 대부분 지킨 것이 특징이다.

## 번역 (한국어)
PrismML이 2개월 전 첫 Bonsai 27B에 이어 'Ternary Bonsai 2 27B'를 공개했다. 이 모델은 알리바바의 오픈소스 Qwen3.8 27B를 기반으로 하며, 가중치를 −1·0·+1 세 값만 가지는 삼진(ternary) 표현과 FP16 그룹별 스케일링을 적용해 유효 가중치당 1.76비트, 전체 5.9GB의 용량을 기록했다. 전체 언어모델에 엔드투엔드로 저비트 표현을 적용한 결과, 원본 대비 9배 이상 작아지면서도 집계 벤치마크 성능의 98.2%를 유지했다.

벤치마크 구성도 주목할 만하다. 추론·수학·코딩·지시 이행·비전·에이전틱 도구 사용을 아우르는 종합 점수에서 Bonsai 2 27B는 83.9로, 전체 정밀도 Qwen3.8 27B의 85.4에 근접했다. 특히 에이전틱·도구 호출(τ²-bench, BFCLv3)에서는 77.57 대 79.74로 격차가 2점대에 그쳤고, 지시 이행(IFBench·IFEval)에서는 오히려 82.66으로 원본 81.25를 넘어섰다. 262K 토큰 컨텍스트와 텍스트·이미지 멀티모달 입력을 지원한다.

실측 성능도 발표됐다. RTX 5090에서 초당 최대 143토큰, 맥북의 M5 Max에서 초당 46.8토큰을 처리했고, RTX 4090 기준 토큰당 0.714mWh로 전체 정밀도 8B 모델보다 40% 높은 에너지 효율을 냈다. 첫 Bonsai가 원본 성능의 95%를 유지했던 것과 비교하면 유지율이 98%를 넘어 '사실상 손실 없는' 수준으로 개선됐다. PrismML은 이전 세대 대비 더 강한 베이스 모델(Qwen3.8)과 개선된 추론·코딩·장기 에이전트 성능을 강조했다.

배경 인물도 이목을 끈다. PrismML은 Caltech 연구자들이 설립한 스타트업으로 CEO 바박 하시비(Babak Hassibi)는 Caltech 교수이자 압축 기술 전문가다. Databricks 공동창업자 이온 스토이카(Ion Stoica)가 자문으로 있으며, Khosla Ventures·Cerberus·Google·Samsung이 투자·지원 중이다. TechCrunch는 애플과 협업 중이라는 보도가 있었음을 소개했으나 CEO는 코멘트를 거절했다. 하시비는 다음 몇 달 안에 수천억 파라미터급 모델에 같은 압축을 적용하겠다고 밝혔다.

## 왜 중요한가?
27B급 모델이 PC·고성능 스마트폰에 들어가는 크기(5.9GB)로 줄면서도 에이전트·코딩 성능을 거의 그대로 유지했다는 것은, '클라우드 없이 로컬에서 AI 에이전트를 돌리는 것'이 실용적 선택지가 되기 시작했다는 뜻이다. 개인정보를 클라우드에 보내지 않고도 문서 분석·코딩 루프·도구 호출이 가능해지고, 통신망이 없거나 비용·전력이 제한된 환경에서도 고성능 AI를 쓸 수 있다. 토큰당 에너지가 8B 전체 정밀도 모델보다 40% 적다는 점은 데이터센터 전력 문제와도 직결되는 산업적 의미가 있다.

## 심층 분석

### 기술 의미
삼진 가중치(−1·0·+1)에 FP16 그룹 스케일링을 곁들여 유효 1.76비트/가중치를 달성한 점이 핵심이다. 양자화는 보통 코딩·도구 사용처럼 다단계 작업에서 오류가 누적되는 영역의 성능을 먼저 깎는다고 알려져 있는데, Bonsai 2는 이 영역들의 유지율이 높아 압축 지점(어느 층, 어떤 스케일링)에서의 개선이 실제로 에이전트 성능 보존으로 이어졌음을 보여준다. 첫 세대 95% → 98.2%로의 점프는 베이스 모델 교체(Qwen3.8)와 압축 기법 개선이 함께 작동한 결과로, '압축 손실은 모델 크기가 클수록 줄어든다'는 하시비의 주장(수천억 파라미터에서 더 쉽게 100%에 접근)을 검증할 다음 릴리스가 관건이다.

### 업계 영향
온디바이스 추론의 경제학이 바뀔 수 있다. 같은 메모리에 더 큰 모델이 들어가고, 같은 하드웨어에서 더 많은 사용자를 서빙하며, 토큰당 전력이 줄어들면 '로컬-클라우드 하이브리드 오케스트레이션'(민감·고빈도 작업은 로컬, 나머지는 클라우드)이라는 새 에이전트 아키텍처가 표준이 될 수 있다. Apache 2.0 공개 + CUDA/MLX 커널 지원은 로컬 에이전트 런타임 생태계(Ollama·LM Studio·에이전트 프레임워크)에 즉시 흡수될 수 있는 조합이다. 다수 국내 기업이 주목하는 엣지 AI·온프레미스 에이전트 구축에도 직접 활용 가능성이 크며, 애플 협업 루머는 온디바이스 AI 전쟁의 수혜자 구도를 암시한다.

### 관련 프로젝트
- [Bonsai 2 27B 화이트페이퍼 (GitHub)](https://github.com/PrismML-Eng/Bonsai-demo/blob/main/bonsai-2-27b-whitepaper.pdf)
- [ternaryLLM (GitHub)](https://github.com/fpgasystems/ternaryLLM)
- [PrismML](https://prismml.com/)

### 관련 뉴스
- [2026-09-10-qwen3-8-gpt5-5-pro-distillation-evidence](../records/2026-09-10-qwen3-8-gpt5-5-pro-distillation-evidence.md) — Bonsai 2의 베이스인 Qwen3.8 관련 보도
- [2026-09-14-cognition-swe-2-coding-model](../records/2026-09-14-cognition-swe-2-coding-model.md) — 코딩 에이전트용 모델 경쟁 구도
- [2026-09-13-fly-language-model-connectome-frozen-llm](../records/2026-09-13-fly-language-model-connectome-frozen-llm.md) — 경량화·효율화 연구 계보

## 원문 발췌
> "Ternary Bonsai 2 27B uses ternary {−1, 0, +1} weights with FP16 group-wise scaling, for 1.76 effective bits per weight and a total model footprint of 5.9GB."
> "Against its full-precision counterpart, Ternary Bonsai 2 27B is more than 9x smaller while retaining 98.2% of aggregate benchmark performance."
> "Ternary Bonsai 2 27B reaches up to 143 tokens/second on NVIDIA GeForce RTX 5090 and 46.8 tokens/second on M5 Max. On an RTX 4090, Ternary Bonsai 2 27B consumes just 0.714 mWh/token, making it 40% more energy-efficient than an 8B model running in full-precision."

## 수집 노트
- **선정 이유**: 공식 발표(official)를 TechCrunch 보도와 HN 96pt 토론으로 3개 독립 소스가 교차 확인한 오늘의 최고 신뢰도·파급력 모델 출시로, 로컬 에이전트라는 레포 핵심 주제에 직결되기 때문이다.
- **제외 후보**: 'Bend — 증명으로 AI 실수를 차단하는 언어' (HN 189pt — 프로그래밍 언어 분야로 AI 에이전트 직접 관련성 낮음) / 'Infinite-Parameter LLMs' arXiv 논문 (HN 90pt — 단일 연구, 검증된 실측 배포 사례 대비 우선순위 낮음)
