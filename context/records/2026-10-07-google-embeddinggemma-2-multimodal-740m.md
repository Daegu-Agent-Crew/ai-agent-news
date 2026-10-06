# Google DeepMind, 740M 온디바이스 멀티모달 임베딩 모델 'EmbeddingGemma 2' 공개

## 메타데이터
- **원문 URL**: https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/
- **소스**: Google 공식 블로그 (교차: MarkTechPost)
- **발행일**: 2026-10-06
- **수집일**: 2026-10-07
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [Google, Gemma, 임베딩, 온디바이스, RAG, 멀티모달]
- **소스 권위**: official
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Google은 텍스트·코드·이미지·오디오·비디오를 하나의 임베딩 공간에 매핑하는 7억 4천만 파라미터 오픈 모델 EmbeddingGemma 2를 Apache 2.0 라이선스로 공개했다.

## 번역 (한국어)
Google은 작년에 내놓은 텍스트 임베딩 모델 EmbeddingGemma의 후속작 EmbeddingGemma 2를 출시했다. Google에 따르면 1세대는 2,000만 회 넘게 다운로드됐고, 개발자들은 이를 온디바이스 검색 도구와 프라이버시 중심 RAG 파이프라인에 활용했다.

EmbeddingGemma 2는 텍스트를 넘어 코드, 이미지, 비디오, 오디오를 하나의 공유 임베딩 공간에서 다룬다. Gemma 4 아키텍처를 기반으로 하며, 상업적 이용이 가능한 Apache 2.0 라이선스로 공개됐다. 파라미터는 7억 4천만 개로 기기 안에서 바로 추론하기에 알맞은 크기다. 예를 들어 음성 메모로 특정 영상 클립을 찾거나, 텍스트 질문으로 몇 시간 분량의 녹음을 검색할 수 있다.

Google은 이 모델이 1B 미만 멀티모달 임베딩 모델 중 MTEB Code, MAEB 같은 벤치마크에서 선두 점수를 받았다고 밝혔다. 텍스트 전용 작업은 270M 파라미터만으로 돌릴 수 있고, 필요하면 비전(170M)·오디오(300M) 인코더를 붙이는 모듈형 구조다.

## 왜 중요한가?
스마트폰이나 노트북 안에서 사진·음성·영상까지 한꺼번에 '의미로 검색'할 수 있게 해 주는 무료 부품이다. 데이터를 클라우드로 보내지 않고도 개인 비서형 AI 에이전트가 기억과 검색 기능을 갖출 수 있다.

## 심층 분석

### 기술 의미
여러 모달리티를 하나의 벡터 공간에 넣는 모델을 1B 미만으로 만든 것은, 크로스모달 검색을 서버가 아닌 엣지 기기로 끌어내리는 시도다. 인코더를 모듈로 떼어낼 수 있어서 메모리가 제한된 기기에서는 필요한 부분만 탑재할 수 있다. 벤치마크 우위는 Google이 직접 발표한 것으로 '같은 크기 대비'라는 단서가 붙어 있다.

### 업계 영향
온디바이스 에이전트(로컬 메모리, 개인 파일 검색)를 만들 때 임베딩 단계에서 클라우드 API를 빼기가 쉬워진다. Apache 2.0이라 상용 제품에 바로 넣을 수 있어 벡터 DB·RAG 프레임워크들이 빠르게 지원할 것으로 예상된다(→ 분석). 프라이버시를 내세우는 개인 비서 제품들 사이의 경쟁에도 기반 기술이 될 수 있다.

### 관련 프로젝트
- Gemma 4, Gemini Embedding

### 관련 뉴스
- [Mistral Large 4 공개](../records/2026-10-07-mistral-large-4-le-chonk-1t-open-weight.md) — 같은 날 나온 대형 오픈웨이트 모델

## 원문 발췌
> "Today, we're launching EmbeddingGemma 2, expanding beyond text to unify code, images, video, and audio in a shared embedding space."
> "Built on the Gemma 4 architecture and released under a commercially permissive Apache 2.0 license, EmbeddingGemma 2 has 740 million parameters, making it optimal for on-device inference."
> "With more than 20 million downloads, builders have used it to power smarter on-device search tools and privacy-first retrieval augmented generation (RAG) pipelines."

## 수집 노트
- **선정 이유**: Google 공식 발표이고 MarkTechPost가 교차 보도했으며, 온디바이스 에이전트의 기반 부품이라 아카이브 가치가 있다.
- **제외 후보**: MarkTechPost EmbeddingGemma 2 기사 — 같은 사건이라 교차 소스로만 반영
