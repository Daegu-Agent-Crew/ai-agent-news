# Qualcomm, AI 특화 스마트폰 칩 2종 공개 — 30B MoE 온디바이스 실행

## 메타데이터
- **원문 URL**: https://techcrunch.com/2026/09/22/qualcomm-launches-two-new-smartphone-chips-with-emphasis-on-ai/
- **소스**: TechCrunch
- **발행일**: 2026-09-22
- **수집일**: 2026-09-23
- **수집자**: 레노버
- **카테고리**: industry
- **태그**: [qualcomm, snapdragon, on-device-ai, hardware, moe]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **신선도**: fresh

## 핵심 요약
> Qualcomm이 연례 Snapdragon Summit에서 플래그십 스마트폰 프로세서 2종(Snapdragon 8 Elite Gen 6, 8 Elite Extreme Gen 6)을 공개했다. 최상위 Extreme 버전은 300억 파라미터 MoE 모델을 온디바이스에서 실행할 수 있다고 발표했다.

## 번역 (한국어)

Qualcomm이 연례 Snapdragon Summit에서 AI 기능 강화에 초점을 맞춘 플래그십 스마트폰 프로세서 2종을 공개했습니다. 공개된 칩은 Snapdragon 8 Elite Gen 6와 상위형인 Snapdragon 8 Elite Extreme Gen 6입니다.

새 칩에는 최대 2억 파라미터 크기의 소형 모델을 구동할 수 있는 새로운 센싱 허브가 들어갑니다. 이 허브를 통해 스마트폰이 개인 비서(scribe)를 로컬로 실행하고 화자를 구분할 수 있으며, 사용 패턴을 기반으로 메모리를 쌓아 작업 자동화 제안의 정확도를 높일 수 있다고 회사 측은 설명했습니다. 음성 입력부터 음성 출력까지 이어지는 완전한 음성 에이전트도 새 칩에서 구동 가능합니다.

Snapdragon 8 Elite Gen 6에는 모델을 더 효율적으로 실행하기 위한 새로운 가속기 요소가 포함됐습니다. 최상위 Extreme 버전은 300억 파라미터 MoE(mixture-of-experts) 모델을 로컬에서 실행할 수 있는데, 전체 크기가 30B여도 특정 작업에는 일부 파라미터만 활성화되는 방식입니다. 비교를 위해 TechCrunch는 Apple이 6월 WWDC에서 공개한 3세대 파운데이션 모델 중 가장 진보된 200억 파라미터 MoE 모델을 언급했습니다.

카메라·영상 기능도 AI와 결합됐습니다. 새 CPU는 카메라의 픽셀 단위 제어로 프로급 촬영 경험을 지원하고, Extreme 버전은 8K 60fps 및 4K240 울트라 슬로모션 촬영과 APV(Advanced Professional Video) 코덱을 지원합니다. 두 칩 모두 AI로 보컬을 증폭하고 노이즈를 줄이며, 통화 중 사용자 목소리만 분리하는 'voice bubble' 기술도 갖췄습니다. 행사에서 Motorola는 이 칩을 탑재한 Signature 27 스마트폰을 공개하고 올해 안에 출시하겠다고 밝혔습니다.

## 왜 중요한가?
스마트폰이 클라우드 없이 300억 파라미터급 모델을 직접 돌릴 수 있게 되면, AI 기능이 통신망·서버 비용과 무관하게 기기 표준 사양이 됩니다. 개인 비서·음성 에이전트가 기기 안에서만 돌아가면 민감한 데이터가 밖으로 나가지 않는 구조가 되어 프라이버시 옵션이 넓어집니다. Apple(20B)과 Qualcomm(30B)의 온디바이스 MoE 경쟁은 차세대 폰 교체 수요의 핵심 명분이 'AI'가 됐음을 보여줍니다.

## 심층 분석

### 기술 의미
전체 30B 중 일부 전문가만 활성화하는 MoE 구조를 모바일 NPU에서 돌린다는 것은, 활성 파라미터 수 기준으로는 10B 이하의 메모리·전력 예산으로 30B급 지식 용량을 얻는 트레이드오프가 스마트폰 하드웨어에서 실용화됐음을 의미한다. 2억 파라미터 소형 모델을 상시 구동하는 센싱 허브를 분리한 설계는 '상시 개인화 모델 + 필요 시 대형 모델'의 2단 구성으로 전력을 최적화하는 접근이다. 화자 분리·음성 입출력 통합 에이전트는 온디바이스 멀티모달 파이프라인이 칩 단위 표준 기능으로 편입됐음을 보여준다.

### 업계 영향
온디바이스 30B 실행이 플래그십 표준이 되면, 토큰 과금 없는 '무료 무제한 AI'를 내세운 폰 간 경쟁이 시작되고 클라우드 추론 수요의 일부가 엣지로 이동할 수 있다. Motorola를 필두로 한 탑재 라인업이 확대되면 모델 제작사들은 API 매출 확보를 위해 온디바이스·클라우드 하이브리드 라우팅 계약을 강화할 것이다. 반대로 클라우드 진영(OpenAI·Anthropic)의 가격 인하 경쟁과 맞물려, 같은 작업을 폰에서 할지 서버에서 할지를 가르는 비용·프라이버시 기준이 복잡해진다.

### 관련 프로젝트
- Apple 3세대 파운데이션 모델(비교 대상): https://machinelearning.apple.com/research/introducing-third-generation-of-apple-foundation-models
- Snapdragon Summit 발표: https://www.qualcomm.com/

### 관련 뉴스
- [Jev·Laya, CoreML 온디바이스 모델](../records/2026-09-21-jev-laya-coreml-ondevice.md) — 온디바이스 AI 실행 흐름의 소프트웨어 쪽 사례
- [삼성 HBM4 생산량 배증](../records/2026-09-21-samsung-hbm4-output-double.md) — 같은 AI 반도체 밸류체인의 메모리 쪽 확장

## 원문 발췌
> The high-end Extreme version can run a 30-billion-parameter mixture-of-experts (MoE) model locally. This means that while the overall model size is 30B, the model only activates a certain number of parameters for a particular task.

> The chips have new sensing hubs that can run small models of up to 200 million parameters. With the new sensing hub, smartphones can run a personal scribe locally and differentiate between speakers.

## 수집 노트
- **선정 이유**: Snapdragon Summit 공식 발표를 주요 언론이 정면 보도한 하드웨어 이슈 — 온디바이스 30B MoE 실행은 에이전트가 사는 '장소'의 변화라 아카이브했다. 교차 확인 1건이라 중요도는 ⭐⭐로 산정했다.
- **제외 후보**: Motorola Signature 27 발표 부분 — 본 칩 뉴스에 포함되어 별도 레코드 불필요. Googlebook 관련 기사(09-21) — 24시간 범위 밖.
