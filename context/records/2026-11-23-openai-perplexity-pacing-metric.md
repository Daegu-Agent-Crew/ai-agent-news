# OpenAI 수석과학자, AI 개발 속도의 공통 측정치로 '퍼플렉시티' 제안

## 메타데이터
- **원문 URL**: https://openai.com/index/perplexity-and-intelligence/
- **소스**: OpenAI 공식 블로그 (Jakub Pachocki) / TechCrunch 보도
- **발행일**: 2026-11-22
- **수집일**: 2026-11-23
- **수집자**: 레노버
- **카테고리**: research
- **태그**: [perplexity, safety, governance, pretraining, openai]
- **소스 권위**: official
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> OpenAI 수석과학자 Jakub Pachocki가 퍼플렉시티(교차 엔트로피 손실)를 AI 사전학습 진척도의 공통 벤치마크로 삼아 업계 차원의 속도 제한(pacing) 합의의 기초로 삼자고 제안했다.

## 번역 (한국어)
OpenAI 수석과학자 야쿠브 파초츠키는 "Perplexity and Intelligence"라는 제목의 블로그 게시물에서, 현대 AI 개발이 사실상 대규모 데이터로 압축기(예측기)를 사전학습하는 단순한 과정에 기반한다고 설명한다. 그는 이 압축 성능을 재는 퍼플렉시티가 여러 모델 개발사를 비교하고 공동 안전 기준을 세우는 지표가 될 수 있다고 주장한다.

그는 GPT-3.5가 로그 퍼플렉시티 약 0.99에서 유창한 대화가 가능했고, GPT-4는 약 0.91에서 사고연쇄(chain-of-thought) 추론을 생산적으로 활용했으며, 0.8 미만으로 내려가자 사이버보안과 수학 분야에서 변혁적 능력이 출현했다고 밝혔다. 이 수치들은 OpenAI 내부 측정치를 공개한 것으로, 경쟁사에게 정보를 주는 부담보다 업계 공동 안전 조치의 시급성이 크다는 판단에서였다고 한다.

파초츠키는 특히 AI가 자기 개발 과정의 핵심 부분인 사전학습 알고리즘 연구에 참여할 때 급격한 단절적 가속이 올 수 있다고 지적한다. 실제로 로그 퍼플렉시티 약 0.76 모델로 업그레이드한 뒤 수학 미해결 문제에서 획기적 결과가 연이어 나왔다는 관찰을 근거로, 2027년경 사전학습 연구에서도 유사한 폭발적 진전이 가능하다고 본다. 따라서 퍼플렉시티 기반의 공유 벤치마크와 이해·감시 능력의 구체적 마일스톤을 조건으로 한 개발 한도 합의를 제안한다.

TechCrunch는 이 게시물이 샘 올터먼이 "한동안 OpenAI가 발표한 것 중 가장 중요한 것"이라고 평한 글이며, 앤스로픽 다리오 아모데이의 '프론티어 속도 조절' 제안과 맞닿아 있다고 보도했다.

## 왜 중요한가?
AI 개발을 늦추자는 논의는 있었지만 '속도'를 어떻게 재느냐는 합의가 없었다. 이 제안은 그 속도계로 쓸 수 있는 단일 수치(퍼플렉시티)를 최전선 개발사가 공개 데이터와 함께 제시한 첫 사례라는 점에서 의미가 크다. 측정 기준이 정해지면 정부·업계의 'AI 속도 제한' 협상이 실질적으로 시작될 수 있다.

## 심층 분석

### 기술 의미
퍼플렉시티는 다운스트림 벤치마크와 달리 과제 정의에 의존하지 않고 사전학습 압축 성능을 직접 재므로 모델 세대를 가로질러 비교 가능하다는 게 저자의 논지다. 저자는 능력 출현이 이 지표의 임계값(GPT-4 약 0.91, 0.8 미만)과 연동되어 관찰되었다고 서술했다. 다만 이는 OpenAI 내부 데이터셋 기준이며 타사 데이터셋과의 직접 비교 가능성은 게시물에서 다루지 않았다. (→ 분석) 임계값-능력 연관이 인과적이라는 해석은 아직 가설로 읽혀야 한다.

### 업계 영향
아모데이의 'pace the frontier' 제안과 올터먼·머스크의 호응이라는 맥락에서, 공통 지표 제안은 자율규제 협상의 기술적 초석이 될 수 있다. (→ 분석) 경쟁사들이 OpenAI의 측정 방식을 수용할지, 독자 데이터셋·측정 프로토콜 표준화가 따를지가 향후 관전 포인트다.

### 관련 프로젝트
- 원문: https://openai.com/index/perplexity-and-intelligence/
- Dario Amodei "We must pace the frontier" (게시물 내 인용)

### 관련 뉴스
- [AI 개발 속도 제한 논의](../records/2026-09-12-anthropic-pace-the-frontier.md) — 아모데이 프론티어 속도 조절 제안
- [퍼플렉시티 측정 기반 공동 한도 제안](../records/2026-11-23-openai-perplexity-pacing-metric.md) — 본 기사

## 원문 발췌
> "I argue for establishing perplexity (or, equivalently, cross-entropy loss) as a metric to compare between model developers and inform shared safety standards."
> "GPT‑4, at ~0.91, was proficient at utilizing chain-of-thought reasoning productively... Now, as we have reached losses below 0.8, we have seen the emergence of transformative capabilities in fields like cybersecurity and mathematics."

## 수집 노트
- **선정 이유**: 공식 소스 + 주요 언론 교차 확인, 업계 거버넌스 논의의 측정 기준 제안이라는 구체적 진전. 최대 뉴스 주제.
- **제외 후보**: TechCrunch "데이터센터가 빅테크 반발의 중심" — 도서 인터뷰 중심으로 2차 보도 성격, 별도 수집함. marktechpost NVIDIA Alpamayo 2 Edge — 모델 카드(HF) 기준 공식 발표지만 커뮤니티 교차 확인 부족.
