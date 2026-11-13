# 中 최강 오픈 모델들, 수출금지 블랙웰 칩 학습 '지문' 발견

## 메타데이터
- **원문 URL**: https://techcrunch.com/2026/11/13/export-banned-nvidia-chips-are-behind-chinas-most-powerful-ai-models-uh-oh-jensen/
- **소스**: TechCrunch
- **발행일**: 2026-11-13
- **수집일**: 2026-11-14
- **수집자**: 레노버
- **카테고리**: research
- **태그**: [수출통제, DeepSeek, Kimi, 체크포렌식스, Unemployment Labs]
- **소스 권위**: major-media
- **교차 확인**: 4
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> 비영리 Unemployment Labs가 중국 주요 오픈 웨이트 모델(DeepSeek, Moonshot AI, MiniMax, Ant Group)의 웨이트를 분석한 결과, Moonshot Kimi K3와 DeepSeek V4 등에서 수출 금지된 블랙웰 GPU 학습 흔적이 발견됐다고 주장했다.

## 번역 (한국어)
미국 수출통제는 중국의 AI 역량 우위를 막는 것이 목표지만, 전 OpenAI 연구자 Will DePue가 이끄는 Unemployment Labs는 중국 기업들의 오픈 웨이트 모델이 수출 금지된 엔비디아 칩으로 학습된 정황을 찾아냈다고 주장한다.

'체크포렌식스'라는 이 분석은 모델 웨이트에 학습에 쓰인 칩 구성의 흔적이 남는다는 전제로, Kimi K3와 DeepSeek V4 계열에서 블랙웰 칩 지문을 발견했다고 한다.

백악관 기술자문 Michael Kratsios는 올해 초 미情報 기관을 인용해 Moonshot이 수출금지 칩을 사용했다고 말한 바 있다. Epoch AI는 2024~25년 약 200만 개의 고성능 칩이 최종 목적지를 숨긴 경로로 중국에 들어갔다고 추산한다.

다만 모델이 전적으로 엔비디아 칩으로 학습됐거나 수출통제 위반이 확정된 것은 아니다. 말레이시아 같은 역외 데이터센터 가능성이 있으며, Epoch는 2024~25년 말레이시아에 27만 5,000개의 엔비디아 가속기가 수입됐다고 본다. Bloomberg는 Alice Huang과 연결된 회사가 상하이 데이터센터로 금지 칩을 밀반입한 것과 관련됐다고 13일 추가 보도했다.

## 왜 중요한가?
미국의 대중국 반도체 통제가 실제로 뚫리고 있는지를 웨이트 분석이라는 새로운 방법으로 검증한 첫 체계적 시도다. 통제 강화 여부가 AI 산업 전반의 칩 공급과 가격을 좌우할 정책 변수다.

## 심층 분석

### 기술 의미
모델 웨이트에서 학습 하드웨어의 '지문'을 복원하는 체크포렌식스는 수출통제 집행에 새로운 감사 도구가 될 수 있다. (→ 분석) 웨이트 공개 자체가 증거가 되는 역설 — 오픈 웨이트 정책과 안보 투명성이 만나는 지점이다. 단, 칩 지문이 위치·소유주를 특정하지는 못해 결정적 증거는 아니다.

### 업계 영향
Georgetown CSET의 Sam Bresnick은 "중국 본토 접근은 막으면서 말레이시아에서는 허용하는 건 말이 안 된다"며 '누가 쓰는지' 기반 통제를 주장한다. (→ 분석) 통제 강화 시 말레이시아 등 역외 데이터센터 허브 성장이 제동받고, 엔비디아의 중국 매출(홍콩에 60만 개 H200 재고로 적체 보도) 불확실성이 커진다. 중국의 자국 칩 산업 재결속 압력으로 이어지면 글로벌 수요 지도 자체가 갈라질 수 있다.

### 관련 프로젝트
- Unemployment Labs 분석: https://unemploymentlabs.com/checkpoint-forensics
- Epoch AI 밀수 추정: https://epoch.ai/data-insights/malaysia-china-chip-smuggling

### 관련 뉴스
- [젠슨 황 퇴장과 펀딩 공백](../records/2026-11-14-nvidia-jensen-exit-startup-funding-gap.md) — 같은 사태의 생태계 영향 축

## 원문 발췌
> "The leading open-weight models developed by Chinese companies were trained on Nvidia chips that the U.S. government restricted from shipping to its largest geopolitical rival, a new research effort claims."
> "DePue was able to find compelling evidence that the most closely watched models, including Moonshot's Kimi's K3 releases and DeepSeek's V4 models, bear fingerprints from training on Blackwell chips."
> "Epoch AI estimates that about two million advanced chips entered China in 2024 and 2025 through schemes designed to hide their final destination."

## 수집 노트
- **선정 이유**: 연구(research) 카테고리 대표. 웨이트 포렌식스라는 방법론적 신선함 + Bloomberg·Epoch·백악관 인용 교차 확인 4.
- **제외 후보**: "수출금지 칩이 중국 모델 뒤에 있다" 기사와 중복 주제인 Bloomberg 추가보도 — 본건에 인용 통합.
