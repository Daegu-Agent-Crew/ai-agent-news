# 구글, TPU 8tx·8i Max 공개 — 기밀 추론·대용량 메모리로 자체 칩 포트폴리오 확장

## 메타데이터
- **원문 URL**: https://techcrunch.com/2026/11/10/google-broadens-its-ai-hardware-portfolio-with-two-new-specialized-chips/
- **소스**: TechCrunch
- **발행일**: 2026-11-10
- **수집일**: 2026-11-11
- **수집자**: 레노버
- **카테고리**: industry
- **태그**: [Google, TPU, 반도체, 기밀컴퓨팅, 클라우드]
- **소스 권위**: major-media
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> 구글이 8세대 TPU의 변형인 TPU 8tx와 TPU 8i Max를 공개했다. 8tx는 AMD와 함께 설계해 하드웨어 계층에 보안을 내장한 기밀 학습·추론용이고, 8i Max는 추론용 8i 두 개를 한 패키지에 결합해 메모리와 대역폭을 두 배로 늘렸다.

## 번역 (한국어)
구글이 자체 AI 가속기 포트폴리오를 확장하고 있다. 11월 10일(월) 구글은 텐서처리유닛(TPU)의 두 가지 새 변형을 공개하며 클라우드 사업의 타사 칩 의존을 줄이는 움직임을 이어갔다. 두 칩은 각각 기밀 추론과 대용량 워크로드용이다.

TPU 8tx는 AMD와 공동 설계한 칩으로 TPU 8t를 기반하며, 기밀 학습과 모델 실행에 특화됐다. 구글은 블로그에서 이 칩이 "보안을 하드웨어 계층에 직접 내장해, 사용 중인 동안에도 민감 데이터와 모델 가중치를 보호·격리한다"고 설명했다.

이 칩은 추론용 커스텀 네트워크를 갖춰 학습과 추론을 병행할 수 있어, 이동 중 모델 증류(distill)와 소형 모델 학습이 가능하다. 구글에 따르면 기업이 자사 데이터를 기기 간 이동 없이 직접 학습에 쓸 때 유용할 수 있다.

한편 TPU 8i Max는 4월 출시된 추론용 TPU 8i 두 개를 단일 패키지에 결합한 것으로, 메모리 용량·처리력·대역폭을 두 배로 늘렸다. 그 결과 쿼리당 더 큰 범위의 정보를 다루는 칩이 됐다.

이번 발표는 마이크로소프트·아마존, 나아가 오픈AI·Anthropic 같은 AI 랩까지 자체 AI 반도체를 개발하며 엔비디아 의존을 줄이려는 흐름 속에 있다.

## 왜 중요한가?
AI의 물리적 기반인 칩 시장이 엔비디아 독점에서 빅테크 자체 칩 경쟁으로 재편되고 있다. 구글이 클라우드 고객에게 '기밀 보안'과 '두 배 메모리'라는 차별점을 내놓으면서, AI 서비스 가격과 데이터 보호 선택지가 늘어난다.

## 심층 분석

### 기술 의미
TPU 8tx의 하드웨어 기반 기밀 컴퓨팅은 암호화된 상태에서 모델 가중치와 데이터를 격리하는 것으로, 금융·의료 등 규제 산업의 AI 도입 관문을 낮춘다. 학습·추론 병행 네트워크는 데이터 이동 최소화라는 프라이버시 요구와 직결된다. 8i Max의 패키징 통합은 초장문 컨텍스트 모델의 메모리 요구에 대한 하드웨어 측 대응이다(→ 분석).

### 업계 영향
하이퍼스케일러와 AI 랩의 자체 칩 경쟁이 가속화되면 엔비디아의 데이터센터 점유율 가정이 흔들린다(→ 분석). AMD와의 공동 설계는 반도체 동맹 지형의 변화 신호로, TSMC 제조 의존과 함께 공급망 블록화가 진행될 수 있다(→ 분석). 클라우드 고객 입장에서는 칩 선택지가 늘어 비용 협상력이 커진다(→ 분석).

### 관련 프로젝트
- [구글 공식 발표](https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/tpu-8i-max-and-8tx/)
- [Google Cloud](https://cloud.google.com)

### 관련 뉴스
- [2026-09-30 Google Gemini 4 Argon](2026-09-30-google-gemini-4-argon.md) — 같은 날 TPU 발표와 함께 나온 모델
- [2026-10-19 Google Harness2 재귀 에이전트](2026-10-19-google-harness2-recursive-agent-harnessing.md) — 구글의 에이전트 인프라 흐름

## 원문 발췌
> The new units, TPU 8tx and TPU 8i Max, are part of the company's eighth generation of chips introduced in April this year.
> TPU 8tx, designed with AMD, is based on the TPU 8t chip, and is geared specifically for confidentially training and running AI models, Google said in a blog post.
> Meanwhile, TPU 8i Max basically combines two of the inference-focused TPU 8i chips the company launched in April, doubling the memory capacity, processing power and bandwidth, but in a single package.

## 수집 노트
- **선정 이유**: 자체 칩 경쟁의 구체적 진전(기밀 컴퓨팅·메모리 2배) — 구글 공식 발표와 주요 언론 보도가 교차 확인되는 하드웨어 이정표.
- **제외 후보**: "Cyanogen 공동창립자 Windows 대항 OS"(AI 하드웨어지만 초기 스타트업 소식), "OpenAI, Odessia 인수"(여행 스타트업 인수로 AI 핵심 이슈와 거리 있음)
