# 독립 실험 결과, Qwen 3.8이 GPT-5.5 Pro의 추론을 증류했을 정황 포착

## 메타데이터
- **원문 URL**: https://gist.github.com/wsxiaoys/e0286dc6bb624ff5fdf49e7f4c528ba3
- **소스**: Hacker News (148 points) / GitHub Gist (wsxiaoys)
- **발행일**: 2026-09-09
- **수집일**: 2026-09-10
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [Qwen, Qwen3.8, GPT-5.5-Pro, distillation, reasoning-prefill, model-provenance, Kimi-K3, DeepSeek]
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> 독립 연구자의 '추론 프리필(reasoning prefill)' 실험에서 Qwen3.8 A95B에 GPT-5.5 Pro의 추론 초반 1%를 심자 답변 겹침이 +18.18%p 급증해, Qwen이 GPT 계열 모델의 추론을 증류(distillation)해 학습했을 가능성이 제기됐다.

## 번역 (한국어)
연구자 wsxiaoys는 'Reasoning prefills on a few open models'와 'Stolen Thoughts'에 이어지는 후속 실험 v1.1에서, 이번에는 GPT-5.5 Pro를 교사(teacher) 모델로 삼아 추론 프리필 실험을 다시 수행했다. 방법은 간단하다. 각 문제마다 대상 모델에게 ① 아무 힌트 없이 생성한 답변과 ② GPT-5.5 Pro 추론의 첫 1%를 대상 모델의 추론 채널 앞에 삽입한 상태로 생성한 답변, 두 가지를 받는다. 보이는 답변은 자유롭게 생성되며, 교사의 보이는 답변이 대상 모델 답의 첫 100토큰 안에 얼마나 등장하는지(unigram·bigram·trigram 소스 리콜 평균)를 측정한다. 평가는 STEM 15·비STEM 15·합성 퍼즐 15문제, 총 45문제로 구성됐다.

결과에서 주목되는 것은 Qwen3.8 A95B였다. 프리필 없이는 교사 답변과의 겹침이 16.79%에 불과했지만, GPT-5.5 Pro의 추론 프리필을 넣자 34.97%로 도약해 델타가 +18.18%p에 달했다. 카테고리별로는 STEM +26.99%p, 퍼즐 +14.75%p, 비STEM +12.80%p였다. 이전 실험에서 Qwen은 Claude Opus 4.8 쪽으로는 거의 움직이지 않았는데, 이번에는 GPT-5.5 Pro 쪽으로 크게 이동했다. 연구자는 "데이터는 Qwen이 Opus가 아니라 GPT-5.5 Pro 또는 밀접하게 관련된 GPT 모델로부터 학습했을 가능성을 시사한다"고 결론지었다.

대조적으로 Kimi K3는 프리필 유무와 무관하게 GPT-5.5 Pro와의 기본 겹침이 31.11%→35.65%로 가장 높았지만 프리필 효과는 +4.54%p에 그쳤고, DeepSeek V4 Flash는 −1.17%p로 오히려 감소했다. 프리필 실험은 모델 내부를 들여다보는 게 아니라 '교사의 사고 스타일과 답을 얼마나 따라잡을 수 있는지'를 간접 재는 방식이라 인과를 단정할 수는 없지만, 학습 데이터 출처를 추적하는 희귀한 정량 도구로 주목받고 있다.

## 왜 중요한가?
오픈 모델이 프론티어 모델의 출력으로 학습되는 '증류'는 업계의 공개된 비밀에 가까운데, 이를 정량적으로 드러내는 독립 검증이 나온 것이다. 모델 성능 순위의 진짜 출처가 자체 연구인지 타사 출력 재포장인지 판별할 수 있는 도구가 생겼다는 점에서, 모델 마케팅과 벤치마크 신뢰성에 직접적인 파장을 일으킨다.

## 심층 분석

### 기술 의미
프리필 실험의 논리는 '교사의 추론을 조금만 보여줘도 교사의 답을 흉내낼 수 있다면, 두 모델의 내부 분포가 유사하게 수렴했다는 강한 신호'라는 것이다. Qwen의 +18.18%p는 다른 후보 모델들(+4.5%p, −1.2%p, +0.5%p)과 대비되는 특이점이며, 특히 비공개 합성 퍼즐에서도 큰 효과가 나타난 점이 단순 벤치마크 오염으로는 설명이 어렵다. 다만 샘플 45문제, n-gram 겹침이라는 취약한 측정 지표, 교사 1개 모델이라는 한계로 인해 '증류의 증거'이지 '증류의 증명'은 아니라는 점을 유의해야 한다.

### 업계 영향
프론티어 랩들의 이용약관이 자사 출력을 경쟁 모델 학습에 쓰는 것을 금지하는 가운데, 이런 간접 검증 기법이 보편화되면 증류 의혹이 법적·상업적 분쟁의 쟁점이 될 수 있다. 오픈 웨이트 모델 진영(Qwen, Kimi, DeepSeek) 간에도 '누가 누구를 닮았나' 경쟁이 정량화되면서 성능 발표의 신뢰 검증 문화가 생길 것이다. 역으로 프론티어 랩들이 프리필 유사성 테스트를 '증류 탐지기'로 내재화할 가능성도 있다.

### 관련 프로젝트
- https://gist.github.com/wsxiaoys/102e8654c14d5d27b7b77532026ebfa5 — 원실험 'Reasoning prefills on a few open models'
- https://stolen-thoughts.com/ — 관련 프로젝트 'Stolen Thoughts'
- https://news.ycombinator.com/item?id=49630026 — HN 토론 (148 points)

### 관련 뉴스
- [2026-09-09-openai-navier-stokes-proof-controversy.md](2026-09-09-openai-navier-stokes-proof-controversy.md) — 모델 출력의 데이터 출처·연구 윤리를 둘러싼 이전 논쟁

## 원문 발췌
> "Qwen barely moved toward Opus 4.8 in the earlier experiment, but moved by +18.18 points toward GPT-5.5 Pro here... The data suggest that Qwen may have learned from GPT-5.5 Pro, or from a closely related GPT model, rather than from Opus."
