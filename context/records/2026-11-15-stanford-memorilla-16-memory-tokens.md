# 스탠퍼드, 문서 전체를 16 토큰으로 압축하는 메모리 모듈 'Memorilla' 오픈소스 공개

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/11/14/stanford-memorilla-memory-system-16-memory-tokens/
- **소스**: MarkTechPost
- **발행일**: 2026-11-14
- **수집일**: 2026-11-15
- **수집자**: 레노버
- **카테고리**: research
- **태그**: [Memorilla, memory, long-context, Qwen3, Stanford]
- **소스 권위**: community
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **신선도**: fresh

## 핵심 요약
> 스탠퍼드 연구진이 문서 컬렉션 전체를 16개 메모리 토큰으로 압축해 고정(frozen) LLM에 주입하는 오픈소스 모듈 Memorilla를 공개했다. 고정된 Qwen3-8B는 FactKG에서 전체 문맥 입력보다 높은 84.33% 정확도를 108분의 1 토큰으로 기록했다.

## 번역 (한국어)
스탠퍼드 연구진이 LLM용 오픈소스 메모리 시스템 Memorilla를 공개했다. Memorilla는 문서 컬렉션 전체를 읽어 고정 LLM에 단 16개의 메모리 토큰만 건넨다. FactKG 벤치마크에서 고정 Qwen3-8B는 Memorilla 사용 시 84.33%를 기록했고, 전체 문서를 컨텍스트에 넣었을 때의 80.43%를 웃돌았다. 문서 토큰은 108분의 1이었다. 코드·학습 레시피·체크포인트는 Apache 2.0으로 공개됐다.

규모는 학습 가능한 메모리 모듈 파라미터 1억 9,400만 개다. 인코더(Qwen3-Embedding-4B)와 디코더(Qwen3-8B)는 고정된다. 동작은 3단계로, 문서를 1회 임베딩하고 질문마다 16개 슬롯이 전체 저장소에 어텐션을 수행한 뒤, 슬롯을 디코더 임베딩 공간에 투영해 질문 앞에 붙인다.

성능은 8개 벤치마크 평균 49.68로 최고를 기록했고 5개에서 1위였다. PersonaMem-v2에서는 44.60%로 전체 컨텍스트(27.92%)를 크게 앞섰다. 다만 PubMedQA에서는 59.00%로 LLMLingua-2(69.00%)에 뒤처졌다 — 324토큰짜리 초록에서는 압축 이득이 작기 때문이다. 압축의 극한은 NarrativeQA로, 16 토큰이 67,385개 문서 토큰을 대체해 4,212배 절감이었다.

속도 면에서 H100 1장에서 문서 512건(약 12.8만 토큰) 기준 0.74초에 답했고, 전체 컨텍스트는 19.9초로 27배 느렸다. 에이전트 메모리로도 실험해, 8개 메모리 토큰만으로 Qwen3-4B TextWorld 에이전트의 평균 성공률을 18.6%에서 24.2%로 올렸다.

## 왜 중요한가?
AI 비서와 에이전트가 장기 기억을 갖는 문제의 새 접근이다. 문서를 다시 안 읽고 토큰 몇 개로 기억을 유지하면 비용과 속도가 동시에 개선되어, 개인 비서·기업 문서 검색 등에 실용적 의미가 크다.

## 심층 분석

### 기술 의미
검색(RAG)이 질문과 유사한 조각만 붙여 오는 것과 달리, Memorilla는 전체 저장소에서 질문에 필요한 것을 학습해 뽑는다. 인코더·디코더를 고정하고 메모리 모듈만 학습하므로 대형 모델 재학습 없이 기존 모델에 붙일 수 있다는 점이 실용적 차별점이다.

### 업계 영향
컨텍스트 창을 무한정 늘리는 흐름에 대한 대안으로, 메모리 압축 계열(Mem0, MemoRAG, xRAG 등) 경쟁이 촉발될 수 있다(→ 분석). 에이전트 메모리 표준 자리를 두고 오픈소스 진영의 실험이 빨라지는 신호다. 다만 벤치마크 점수는 연구팀 자체 보고라는 한계가 있다.

### 관련 프로젝트
- Memorilla 논문/체크포인트: https://huggingface.co/memorilla (원문 인용)

### 관련 뉴스
- [Vercel UI SDK 에이전트 UI 라이브러리](../records/2026-11-15-vercel-ui-sdk-agent-ui-behaviors.md) — 같은 날 나온 에이전트 생태계 도구

## 원문 발췌
> Stanford researchers have released Memorilla, an open-source memory system for LLMs. The Memorilla memory system reads a whole document collection and hands a frozen LLM just 16 memory tokens.
> On FactKG, a frozen Qwen3-8B scored 84.33% with Memorilla, against 80.43% with every document in context. It did that with 108x fewer document tokens.

## 수집 노트
- **선정 이유**: 24시간 내 공개된 에이전트 메모리 연구로, 수치·라이선스·실행 조건이 구체적으로 공개돼 재현 가능성 높음. 단일 커뮤니티 소스라 중요도는 산정표대로 낮게 계산.
- **제외 후보**: Cmpnd dspy-wsp — 프로토타입 단계, 커버리지 부족.
