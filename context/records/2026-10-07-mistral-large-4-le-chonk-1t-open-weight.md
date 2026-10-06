# Mistral AI, 1조 파라미터 멀티모달 MoE 'Mistral Large 4(Le Chonk)' 공개 프리뷰 출시

## 메타데이터
- **원문 URL**: https://mistral.ai/news/mistral-large-4/
- **소스**: Mistral AI 공식 블로그 (교차: TechCrunch, MarkTechPost)
- **발행일**: 2026-10-06
- **수집일**: 2026-10-07
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [Mistral, 오픈웨이트, MoE, 멀티모달, 사이버보안, AI주권]
- **소스 권위**: official
- **교차 확인**: 3
- **중요도**: ⭐⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Mistral AI는 1조 파라미터(활성 490억)의 네이티브 멀티모달 모델 Mistral Large 4를 공개 프리뷰 API로 출시했고, 가중치는 이달 말 공개한다고 밝혔다. 회사는 이 모델이 미국·유럽에서 개발된 어떤 오픈웨이트 모델보다 뛰어나다고 주장한다.

## 번역 (한국어)
Mistral AI는 Mistral Large 4(비공식 약칭 ML4, 별명 'Le Chonk')의 공개 프리뷰를 시작했다. Mistral Studio에서 프리뷰 API를 바로 쓸 수 있으며, 가중치는 이달 말에 공개된다. ML4는 총 1조 파라미터, 활성 파라미터 490억 개의 네이티브 멀티모달 모델로, Mistral이 만든 모델 중 가장 크고 강력하다.

Mistral에 따르면 ML4는 코딩, 에이전트 워크플로, 멀티모달 이해에서 강한 성능을 보이며, 사이버보안·금융·법률 같은 기업 업무에서는 오픈 모델 중 최고 수준이라고 한다. 가중치를 공개하기 전까지는 사이버보안 기업, 검증된 파트너, 정부 기관과 함께 실제 환경에서 레드팀 테스트를 진행한다.

모델은 유럽에 있는 Mistral 자체 데이터센터에서 NVIDIA Grace Blackwell GPU 3,800개로 처음부터 학습했다. 학습 데이터에는 EU 공식 언어 전부를 포함해 160개가 넘는 언어가 들어갔다. Mistral은 Artificial Analysis Cyber Index에서 ML4가 전 세계 상위 5위 안에 들고, 실제 취약점을 재현한 뒤 패치하는 테스트에서 82%로 전체 모델 중 최고점을 받았다고 밝혔다. Mistral은 Claude Opus 5.5, GPT-6 Astra 같은 폐쇄형 모델은 이 테스트를 거부해서 점수가 0에 가깝다고 설명했다.

코딩 쪽에서는 DeepSWE v1.1 61.7%, Terminal-Bench 4 28.3%, Coding Agent Index 49.8%를 기록했고, 657개 업무 워크플로로 구성된 AutomationBench에서는 59.9%를 받았다고 회사가 밝혔다. TechCrunch 보도에 따르면 Mistral VP Science Pierre Stock은 "중국 경쟁사보다 2~3배 적은" 약 4,000개 GPU로 학습했다고 말했으며, 가중치는 약 3주 뒤 안전성 테스트를 마치고 공개할 계획이다.

## 왜 중요한가?
미국 폐쇄형 모델과 중국 오픈 모델 사이에서 유럽이 '제3의 선택지'를 내놓은 것이다. 가중치를 공개하면 기업과 정부가 이 모델을 직접 내려받아 자기 서버에서 운영할 수 있어서, 해외 업체에 기대지 않는 AI 주권 논의에 직접 영향을 준다.

## 심층 분석

### 기술 의미
1T 총 파라미터에 활성 49B인 MoE 구조라서, 거대 모델 수준의 지식 용량을 갖추면서도 추론 비용은 중형 모델에 가깝게 유지하려는 설계로 보인다. 벤치마크 수치는 모두 Mistral이 자체 발표한 것이고, 아키텍처와 사후학습 방법론은 가중치 공개 때 함께 나온다고 하므로 독립 검증은 아직이다(→ 분석). 사이버 테스트 점수가 높은 데는 '거부하지 않음'이 상당 부분 기여하므로, 순수한 능력 비교로 읽을 때는 주의해야 한다.

### 업계 영향
보안 연구처럼 폐쇄형 모델의 거부 정책과 충돌하는 분야에서 오픈웨이트 + 자체 배포 수요가 커질 수 있다. 같은 이유로 오남용 우려도 커지기 때문에, Mistral이 가중치 공개 전에 레드팀을 진행하는 방식이 업계의 새 관행이 될지 지켜볼 만하다. 에이전트 프레임워크 입장에서는 AutomationBench 같은 업무 자동화 지표가 높은 오픈 모델이 하나 더 생기면서, 비용과 데이터 주권을 이유로 모델을 교체하는 선택지가 넓어진다.

### 관련 프로젝트
- Mistral Studio (프리뷰 API), Mistral Forge (학습·커스터마이징 환경)

### 관련 뉴스
- [삼성·Mistral 반도체 AI 협력](../records/2026-09-10-samsung-mistral-semiconductor-ai.md) — Mistral 주요 투자자이자 칩 설계 활용처
- [Reflection Beam 501B 오픈웨이트 MoE](../records/2026-10-06-reflection-beam-501b-open-weight-moe.md) — 같은 시기 미국발 대형 오픈웨이트 MoE

## 원문 발췌
> "ML4 is a 1 trillion-parameter natively multimodal model with 49 billion active parameters. It is our largest and most capable model to date."
> "We will release the weights by the end of the month."
> "ML4 was trained from scratch on 3,800 NVIDIA Grace Blackwell GPUs in Mistral's own datacenters in Europe."
> "It already achieves performance competitive with the strongest open-source models globally, while significantly outperforming any open-weight model developed in the US or Europe."

## 수집 노트
- **선정 이유**: 공식 발표에 TechCrunch·MarkTechPost가 교차 보도했고, HN에도 별도 스레드 3개가 올라와 오늘 후보 중 신호가 가장 강했다.
- **제외 후보**: Mistral Large 4 MarkTechPost 기사·TechCrunch 기사 — 같은 사건이라 교차 소스로만 반영
