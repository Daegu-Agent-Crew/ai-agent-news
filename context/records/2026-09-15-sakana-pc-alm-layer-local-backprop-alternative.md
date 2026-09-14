# Sakana AI, 역전파 대체 학습법 'PC-ALM' 공개 — 계층 로컬 업데이트로 1000층 네트워크 훈련

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/09/14/sakana-ai-researchers-introduce-pc-alm-a-layer-local-alternative-to-backpropagation-that-trains-1000-layer-networks/
- **소스**: MarkTechPost
- **발행일**: 2026-09-14
- **수집일**: 2026-09-15
- **수집자**: 레노버
- **카테고리**: research
- **태그**: [predictive-coding, backpropagation, 학습알고리즘, sakana-ai, jax]
- **소스 권위**: major-media
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐
  - 산정 근거: 중요도 산정: 기본 1 + major-media 1 + 교차 확인(2개) 1 + 반응 규모 0
- **신선도**: fresh

## 핵심 요약
> Sakana AI 연구진이 모든 업데이트를 계층 로컬로 유지하면서 역전파(backprop)와 정렬된 크레딧 신호를 복원하는 Augmented Lagrangian Predictive Coding(PC-ALM)을 제안했다. 연구팀은 MNIST에서 1000층 잔차 MLP를 역전파 대비 약 2퍼센트포인트 이내로 훈련하는 결과를 보고했으며, MIT 라이선스 JAX 구현이 공개됐다.

## 번역 (한국어)

역전파는 전방 패스와 역방향 패스가 순차적으로 잠긴 전역 알고리즘이다. 반면 뇌에는 그런 네트워크 전역 위상 동기화 메커니즘이 알려져 있지 않아, 예측 코딩(predictive coding, PC) 같은 로컬 학습 대안이 꾸준히 연구돼 왔다. Sakana AI 연구진이 제안한 PC-ALM은 예측 코딩의 변형으로, 매 업데이트를 계층 로컬로 유지하면서도 역전파에 정렬된 크레딧 신호를 회복한다.

기존 PC가 깊고 좁은 네트워크에서 막히는 이유는 명확하다. PC는 모든 은닉 활성값을 최적화 변수로 취급하고 각 계층의 활성값과 아래 계층의 예측 사이 오차를 제곱해 벌점을 매긴다. 감독 신호가 출력에서 들어와 국소적 타협의 사슬을 타고 확산되어야 하므로, 깊고 좁은 네트워크에서는 크레딧 신호가 입력층에 닿기 전에 사라진다. Innocenti 등의 연구는 이 PC-BP 격차가 폭보다 깊이가 클 때 가장 심해진다고 특성화했다.

PC-ALM의 핵심 아이디어는 훈련을 제약 최적화 문제로 보는 데서 출발한다. 각 계층의 제약에 라그랑주 승수 λ를 붙이되 PC의 벌점은 유지하는 증강 라그랑지안 방식을 쓰며, λ=0이면 정확히 PC로 환원된다. 추론은 활성값에 대한 원시(primal) 경사 스텝과 승수를 갱신하는 쌍대(dual) 스텝을 번갈아 수행하는 2개의 로컬 스텝으로 구성되고, 연구팀은 이를 계층별 PI 컨트롤러로 해석한다 — 예측 오차가 비례 항, 승수가 적분 항이다.

결과는 수치로 확인된다. 폭·깊이 8~128 그리드의 잔차 MLP에서 추론 예산 T=2L 조건으로 PC-ALM은 모든 폭·깊이·활성함수 조합에서 역전파와 일치했고, 기존 PC는 깊고 좁은 셀에서 급락했다. 참조 셀(폭 32, 깊이 32, ReLU, Fashion-MNIST)에서 BP 78.66%, PC 68.13%, PC-ALM 77.75%를 기록했으며 BP에 대한 그래디언트 코사인 유사도는 0.604에서 0.909로 올라갔다. 연구는 1000층 잔차 MLP(MNIST, 5 에폭)가 BP 대비 약 2포인트 이내에 머무는 결과로 확장되며, ResNet-18의 CIFAR-10·Tiny ImageNet에서도 모든 벤치마크에서 PC를 능가했다. MIT 라이선스 JAX 참조 구현이 공개되어 CPU에서 논문 결과를 재현할 수 있다.

## 왜 중요한가?
역전파는 딥러닝 40년 역사의 뼈대인데, 이를 대체할 수 있는 로컬 학습법이 실제로 깊은 네트워크에서 역전파 성능에 근접했다는 것은 학습 알고리즘 연구의 신호입니다. 뇌처럼 계층별로 독립적으로 업데이트하는 학습법은 하드웨어 병렬화와 생체 플라스틱성 이해 양쪽에 문을 엽니다. 다만 아직 작은 이미지 벤치마크에 머문 연구 코드 단계라는 점은 짚어둘 필요가 있습니다.

## 심층 분석

### 기술 의미
PC-ALM의 이론적 정점은 선형 네트워크에서 각 계층의 라그랑주 승수가 정확한 역전파 adjoint로 수렴함을 증명한 부분이다. 이는 1988년 LeCun이 관찰한 "제약 네트워크의 라그랑주 승수는 KKT 점에서 역전파 adjoint와 같다"는 사실과 연결되며, 로컬 업데이트만으로 전역 크레딧 할당이 재구성될 수 있음을 수학적으로 보여준다 (→ 분석). 다만 이 결과는 선형 네트워크의 스펙트럼 반경 안정성 조건 하에서 성립하고, 비선형 심층 CNN·트랜스포머 규모로의 확장은 아직 확인되지 않았다 (→ 분석).

### 업계 영향
학습 알고리즘이 역전파 단일 체제에서 벗어날 가능성은 장기적으로 칩 설계(역방향 패스가 없는 하드웨어), 분산 학습(계층 간 동기화 제거), 뇌 과학 접점의 신경망 모델링에 영향을 줄 수 있다 (→ 분석). 실무적으로는 현재 시점에서 훈련 인프라 선택을 바꿀 정도는 아니며, MIT 라이선스 코드 공개는 후속 연구 진입 장벽을 낮춰 이 분야 경쟁을 가속할 것이다 (→ 분석). Sakana AI가 대형 모델 경쟁 대신 학습 알고리즘 혁신 카드를 계속 쥐고 있다는 점도 랩 전략 관점에서 주목할 만하다 (→ 분석).

### 관련 프로젝트
- [PC-ALM 논문](https://arxiv.org) — Augmented Lagrangian Predictive Coding
- [GitHub 참조 구현](https://github.com/SakanaAI) — MIT 라이선스 JAX 코드 (CPU 재현 가능)
- [Sakana AI 블로그](https://sakana.ai) — 연구진 설명 포스트

### 관련 뉴스
- [Cognition, Kimi K3 후학습 코딩 모델 SWE-2 공개](../records/2026-09-14-cognition-swe-2-coding-model.md) — 기존 역전파 체제 내 모델 개선과 대비되는 학습법 혁신 접근
- [프린스턴 '섀도우 평가' 연구 — AI 에이전트, 개방형 연구 수행 불능 확인](../records/2026-09-14-shadow-evaluation-agents-fail-open-ended-research.md) — 현재 패러다임 한계를 다룬 같은 시기 연구

## 원문 발췌
> "Sakana AI researchers propose Augmented Lagrangian Predictive Coding (PC-ALM), a variant of PC that keeps every update layer-local yet recovers backprop-aligned credit signals. The research team reports training residual MLPs up to 1000 layers within about 2 percentage points of backprop on MNIST."
>
> "The research team proves that in linear PC networks, under a spectral-radius stability condition, PC-ALM converges to that KKT point: activations return to their forward-pass values while each λi integrates to the exact BP adjoint."
>
> "The repo's reference cell (width 32, depth 32, ReLU, Fashion-MNIST) reports 78.66% test accuracy for BP, 68.13% for PC, and 77.75% for PC-ALM."

## 수집 노트
- **선정 이유**: 역전파 대체 학습법이 1000층 규모에서 BP 근접 성능을 보인 검증 가능한 연구(논문+MIT 코드 공개)로, 학습 알고리즘 연구 흐름 기록 가치가 있다.
- **제외 후보**: "Reward AI OM-1 로봇 정책 공개" (MarkTechPost) — 흥미로운 로봇 연구지만 오늘 5건 한도 내 다른 로봇 도구(OSMO)와 중복 축. "Amazon Science, ML 리서치 에이전트 과적합 논문" (HN) — 커뮤니티 반응 데이터 미확인으로 보류.
