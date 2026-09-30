# Perplexity, Rust 기반 검색 엔진 'Photon' 공개 — p99 지연 800ms→65ms, 에이전트용 Fast Search 출시

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/09/30/perplexity-introduces-photon-a-rust-based-retrieval-engine-that-cuts-p99-latency-from-800-ms-to-65-ms/
- **소스**: MarkTechPost
- **발행일**: 2026-09-30
- **수집일**: 2026-10-01
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [perplexity, photon, rust, retrieval, search-api, fast-search, agentic-search]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **신선도**: fresh

## 핵심 요약
> MarkTechPost에 따르면 Perplexity는 Rust로 작성한 자체 검색·랭킹 엔진 Photon을 공개했으며, 운영 환경 p99 지연이 약 800ms에서 약 65ms로 줄었다. Photon은 Search API의 새 Fast Search 모드도 구동하며, 요청 1,000건당 $1이다.

## 번역 (한국어)
MarkTechPost 보도에 따르면 Perplexity는 Rust로 작성한 자체 검색·랭킹 엔진 Photon을 출시했다. Photon은 Perplexity가 AI 네이티브 검색 스택을 위해 포크해 쓰던 오픈소스 엔진을 대체하며, 이제 모든 운영 트래픽의 검색과 랭킹을 처리한다. Photon 자체는 오픈소스가 아니어서 자체 호스팅은 불가능하고, 호스팅 API로만 쓸 수 있다.

기존 엔진은 인덱스가 커지면서 세 가지 한계에 부딪혔다. 데이터가 RAM을 넘어서 콜드 읽기 시 페이지 폴트로 p99가 800ms 근처에 머물렀고, 디스크 인덱스 병합 중에는 p99가 10~15분간 약 1.2초까지 치솟았으며, 추가 클러스터 배포·동기화에 일주일 이상 걸렸다. Perplexity는 포크를 유지하는 것보다 처음부터 새로 만드는 편이 더 단순하고 저렴하다고 판단했다.

Photon은 적응형 포스팅 리스트(희소 블록은 정렬 오프셋, 밀집 블록은 비트맵), WAND 유사 예산 기반 순회, Elias-Fano 인코딩 문서 레코드, io_uring 기반 일괄 비동기 읽기, 빌드·서빙 분리 구조를 쓴다. 그 결과 p99 검색·랭킹 지연이 약 65ms로 떨어졌고, 서빙 머신은 약 20% 줄었으며, 문서당 약 2.5배 많은 데이터를 저장하게 됐다.

Fast Search는 Photon과 에이전트 워크플로에 맞춘 경량 랭킹을 결합한 모드다. 6개 벤치마크의 3,554개 과제에서 Fast는 64.3%를 $59.73의 추정 비용으로 기록해, 기본 프리셋(64.0%, $187.60)보다 약 68% 저렴했다. 다만 내부 롱테일 벤치마크에서 관련도(DCG)는 2.45에서 2.21로 떨어져, Perplexity는 일상적 에이전트 루프에는 Fast를, 어렵고 모호한 질의에는 기본값을 권장한다.

## 왜 중요한가?
AI 에이전트는 한 작업에 검색을 수십 번씩 하기 때문에, 검색 한 번의 속도와 가격이 곧 에이전트 전체의 속도와 비용이 된다. Perplexity가 검색 엔진을 통째로 다시 만들어 비용을 3분의 1 수준으로 낮춘 것은, 검색이 '사람용 서비스'에서 '에이전트용 부품'으로 바뀌고 있음을 보여준다.

## 심층 분석

### 기술 의미
Photon은 메모리에 다 올릴 수 없는 규모의 인덱스를 디스크 기반으로 빠르게 서빙하기 위해 페이지 폴트를 피하는 일괄 비동기 I/O와 락 없는 캐시(CLOCK 교체)를 택했다 — 검색 엔진 설계의 고전적 문제를 Rust와 io_uring으로 재구성한 사례다. (→ 분석) 후보의 최대 점수를 먼저 제한하고 필요할 때만 정확한 빈도를 읽는 예산 기반 순회는 지연 꼬리(tail)를 줄이는 핵심 장치로 보인다. 벤치마크 수치는 모두 Perplexity 자체 보고이며 MarkTechPost도 경쟁사 비교가 동일 조건이 아니라고 명시했다.

### 업계 영향
Fast 모드가 품질을 거의 유지하면서 에이전트 작업 비용을 약 68% 줄였다는 Perplexity 보고는, 에이전트용 검색 API 시장에서 가격 경쟁을 부를 수 있다. (→ 분석) 같은 날 Reddit이 AI 봇 때문에 RSS·공개 API를 닫는다는 TechCrunch 보도처럼 공개 웹 접근이 좁아지는 흐름 속에서, 자체 인덱스를 가진 검색 제공자의 전략적 가치가 커지고 있다. 오픈소스가 아닌 호스팅 전용이라는 점은 에이전트 개발자의 공급자 종속 문제를 남긴다.

### 관련 프로젝트
- [Perplexity Search API 문서](https://docs.perplexity.ai/)

### 관련 뉴스
- [Google RRSI — 에이전트 하네스 자기 개선](2026-09-29-google-rrsi-agent-harness-self-improvement.md) — 에이전트 인프라 효율화 흐름

## 원문 발췌
> "Perplexity has released Photon, an in-house retrieval and ranking engine written in Rust. It replaces an open-source engine Perplexity had forked for its AI-native search stack."
> "p99 retrieval and ranking latency fell from about 800 ms to about 65 ms. This covers Photon's stages only."
> "Across 3,554 tasks, Fast scored 64.3% at $59.73 in estimated model-plus-search cost. The default preset scored 64.0% at $187.60, so Fast was about 68% cheaper."

## 수집 노트
- **선정 이유**: 단일 매체 보도지만 구체적 아키텍처·수치와 함께 에이전트용 검색 비용 절감이라는 실용적 변화를 다뤄 도구 카테고리 대표로 선정.
- **제외 후보**: "Reddit is killing RSS feeds and ending public API access because of AI bots(TechCrunch)" — 에이전트 데이터 접근과 관련 있으나 이번엔 심층 분석 맥락으로만 참조.
