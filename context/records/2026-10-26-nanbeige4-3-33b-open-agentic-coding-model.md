# Nanbeige, 33B 오픈 에이전틱 코딩 모델 'Nanbeige4.3-33B' 공개 — Apache 2.0, 512K 컨텍스트

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/10/25/nanbeige-releases-nanbeige4-3-33b-open-agentic-coding-model/
- **소스**: MarkTechPost
- **발행일**: 2026-10-25
- **수집일**: 2026-10-26
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [nanbeige, open-weights, agentic-coding, dense-model, hugging-face, boss-zhipin]
- **소스 권위**: major-media
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐
- **중요도 산정**: 기본 1 + major-media(MarkTechPost)(1) + 교차 확인 2개(MarkTechPost, Hugging Face 공식 모델 카드)(1) + 반응 미확인(0) = 3
- **신선도**: fresh

## 핵심 요약
> MarkTechPost에 따르면 채용 플랫폼 BOSS Zhipin 산하 Nanbeige LLM Lab은 에이전틱 코딩과 오피스형 'cowork' 작업용 33B 밀집(dense) 모델 Nanbeige4.3-33B를 Apache 2.0 라이선스로 Hugging Face에 공개했다. 52만 4,288 토큰 컨텍스트를 지원하며, 연구소 자체 표에서 30B 안팎 오픈 모델 3종 대비 20개 벤치마크 중 17개에서 앞섰다.

## 번역 (한국어)
Nanbeige LLM Lab이 Nanbeige4.3-33B를 Hugging Face에 Apache 2.0으로 공개했다. 에이전틱 코딩과 사무형 협업 작업을 겨냥한 33B 밀집 모델로, 연구소는 중국 채용 플랫폼 BOSS Zhipin 안에 있다. 사용자 맞춤 후학습용 Nanbeige4.3-33B-Base도 함께 공개됐다.

구조는 표준 LlamaForCausalLM이며 전문가 라우팅(MoE)이 없어 토큰마다 33B 파라미터 전체가 동작한다. 52개 레이어, GQA(쿼리 헤드 56·KV 헤드 8)를 쓰며 최대 52만 4,288 위치를 지원한다. 채팅 템플릿에는 추론 토글(enable_thinking), 이전 턴 추론 유지(preserve_thinking), 도구 호출 옵션이 있고, Nanbeige는 멀티턴 도구 사용과 코드 에이전트에 preserve_thinking을 권장했다.

Nanbeige가 자체 보고한 성적에 따르면 Terminal-Bench 2.1에서 80.9점(Qwen3.8-27B 73.0), DeepSWE에서 65.5점(42.5)으로 가장 큰 격차를 보였고, AIME 2026 95.2점을 기록했다. 반면 SWE-Bench Pro(60.3 vs 61.7)와 GDPval에서는 Qwen3.8-27B에, GPQA Diamond에서는 Gemma4-31B에 뒤졌다. MarkTechPost는 모든 점수가 자체 보고이며 독립 검증되지 않았다고 명시했다.

연구소의 전략은 강한 '교사' 모델을 먼저 만든 뒤 에이전트 능력을 Nanbeige4.3-3B부터 시작해 더 작은 모델로 증류하는 것이다. MarkTechPost는 BF16 가중치에 약 66GB가 필요하다고 계산했으며, 모델 카드의 SGLang·vLLM 레시피는 4-way 텐서 병렬을 쓴다.

## 왜 중요한가?
코딩을 스스로 수행하는 AI 모델이 상업적으로 자유롭게 쓸 수 있는 라이선스로 계속 공개되고 있습니다. 대형 AI 기업이 아닌 채용 플랫폼 연구소가 이런 모델을 내놨다는 점은, 에이전트용 AI가 일부 빅테크의 전유물이 아니게 되는 흐름을 보여줍니다.

## 심층 분석

### 기술 의미
MoE가 대세인 상황에서 33B 밀집 구조를 택한 것은 추론 비용보다 증류용 교사 모델의 안정성과 단순성을 우선한 선택으로 보인다(→ 분석). Terminal-Bench 2.1·DeepSWE처럼 터미널·장기 에이전트 과제에서 격차가 크고 SWE-Bench Pro에서는 근소하게 뒤진 패턴은, 학습 데이터가 도구 호출·멀티턴 실행 쪽에 집중됐을 가능성을 시사한다. 다만 Terminal-Bench 4.0 23.8점처럼 최신 고난도 과제에서는 절대 성능이 여전히 낮다.

### 업계 영향
Qwen·Gemma 등 30B급 오픈 모델 경쟁에 중국 비(非)AI 전문 기업 연구소가 합류해, 로컬·사내 배치용 코딩 에이전트 선택지가 넓어진다. 512K 컨텍스트와 Apache 2.0 조합은 대형 저장소를 다루는 사내 에이전트 구축에 매력적이지만, 66GB 이상의 메모리 요구로 개인 기기보다는 서버 배치가 현실적이다. 자체 보고 점수에 의존하는 만큼 커뮤니티의 독립 평가가 채택 여부를 가를 것으로 보인다.

### 관련 프로젝트
- https://huggingface.co/Nanbeige/Nanbeige4.3-33B
- https://huggingface.co/Nanbeige/Nanbeige4.3-33B-Base

### 관련 뉴스
- 없음

## 원문 발췌
> Nanbeige LLM Lab has released Nanbeige4.3-33B on Hugging Face under the Apache 2.0 license. Nanbeige4.3-33B is a 33B dense language model built for agentic coding and office-style 'cowork' tasks.
> The model supports a 524,288-token context window. In the lab's own table, it leads 17 of 20 benchmarks against 3 open models near 30B.
> Agentic coding: It scores 80.9 on Terminal-Bench 2.1, against 73.0 for Qwen3.8-27B. DeepSWE shows the widest gap: 65.5 versus 42.5.

## 수집 노트
- **선정 이유**: Hugging Face 공식 모델 카드로 교차 확인되는 에이전틱 코딩 특화 오픈 웨이트 모델 출시로, 자체 보고임이 명시된 벤치마크와 아키텍처 정보가 충분해 선정.
- **제외 후보**: Hugging Face Carbon-X 14B DNA 언어 모델 — 바이오 도메인 모델로 에이전트 생태계와의 관련성이 낮아 제외.
