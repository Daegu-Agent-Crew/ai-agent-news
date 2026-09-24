# Contrastive-LM, 에이전트 행동을 채점하는 오픈 System One 모델 CLM-8B 공개

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/09/23/contrastive-lm-releases-clm-8b-an-open-system-one-model-that-scores-agent-actions-up-to-9x-faster-than-jev/
- **소스**: MarkTechPost
- **발행일**: 2026-09-23
- **수집일**: 2026-09-25
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [system-one, agent-loop, verifier, open-weights, contrastive-learning]
- **소스 권위**: major-media
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐
- **중요도 산정**: 1 + major-media(1) + 교차 확인 2건(1) + 커뮤니티 반응 없음(0) = ⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Contrastive-LM이 후보 행동을 텍스트 생성 없이 확률로 채점하는 최초의 오픈 "대조 언어 모델(CLM)" CLM-8B를 공개했다. TypeSafe AI의 독점 System One 모델 Jev와 같은 인터페이스를 지원하며, 제로샷 테스트에서 최대 9배 낮은 지연을 보고했다.

## 번역 (한국어)
Contrastive-LM이 CLM-8B를 공개했다. "대조 언어 모델(CLM)"이라는 새 클래스의 첫 번째 오픈 모델로, 텍스트를 생성하지 않는다. 대신 현재 상태에 대해 후보 행동 집합을 채점해 확률을 돌려준다. 비교 기준은 TypeSafe AI의 독점 System One 모델 Jev이며, TypeSafe API용으로 작성된 요청을 CLM의 Python 클라이언트로 그대로 재생할 수 있다. Noul(진위 확률), Choice(선택지 확률), Score(순위 척도 점수)의 3가지 질의 유형을 노출한다.

구조는 동결된 Qwen3-8B 백본 2개에 각각 2천만 파라미터 학습형 프로젝션 헤드를 얹고, 양방향 InfoNCE 손실로 상태 인코더와 행동 인코더를 학습시킨 방식이다. 추론 시 상태·행동 임베딩의 내적으로 후보를 채점하고 소프트맥스로 답 분포를 만든다. 에이전트 루프에서는 상태가 매 스텝 바뀌지만 행동 집합은 대체로 고정이라는 점을 이용해, clm-serve가 vLLM의 KV 캐시처럼 GPU 메모리에 벡터를 캐시한다. RTX 4090 한 장에서 재방문 상태 처리가 1.7ms에서 0.6ms로 줄었다고 보고했다.

학습은 3단계다. 약 6천만 건의 Nemotron DQA 질의응답 쌍 사전학습, Gemini 2.5 Flash-Lite가 생성한 약 3천만 건의 어려운 음성 샘플(hard negative) 미드학습, 에이전트 트라젝토리 약 100만 건 사후학습. 사전학습만으로 52.1%였던 top-1 정확도가 미드학습 후 69.2%로 올라갔으며, hard negative를 처음부터 섞으면 62.4%에서 과적합됐다고 팀이 보고했다.

Jev 대비 제로샷 결과에서는 T-Rex 게임에서 16.5ms vs 149.8ms로 9배 빠르며 승률은 동률(5/5)이었다. 도구 호출(BFCL v4) 성공률은 95.2%로 Jev의 99.2%에 뒤졌고 WikiRacing도 26/30 vs 30/30으로 뒤졌지만, 모든 과제에서 지연은 짧았다. 코딩 에이전트 검증자 용도로는 파인튜닝 헤드를 얹어 DeepSWE 81.6%(Jev 71.1%), Terminal-Bench 2.1 87.6%(Jev 83.1%)를 보고하며, 이 두 벤치마크에서 Jev는 pass@1보다 낮아 샘플 하나를 그대로 쓰는 것보다 못하다는 계산이다. 지연은 4.1~5.7배 빠르다.

배포 측면에서 Apache-2.0 라이선스의 헤드 가중치는 75MB로, NVIDIA GPU 1대에서 vLLM으로 Qwen3-8B 인코더를 띄워 구동한다. 단, 이 검증자 수치는 가벼운 파인튜닝 헤드를 쓴 held-out 서브셋 결과이지 전체 리더보드 제출이 아니라고 원문은 명시하고 있다.

## 왜 중요한가?
AI 에이전트가 매 스텝 "다음에 무엇을 할지" 고르는 판단을, 긴 텍스트를 생성하지 않고 확률로 계산하는 전용 모델이 오픈소스로 나왔다. 그 동급 모델이던 Jev는 독점에 얼리액세스였는데, Apache-2.0 오픈 모델이 같은 API를 갖추고 4~9배 빠르다는 보고는 에이전트 루프의 의사결정 계층 비용을 셀프호스팅으로 낮출 수 있다는 뜻이다. 검증자(verifier) 성능에서 기존 모델을 앞선다는 주장까지 더해지면 best-of-N 샘플링을 쓰는 코딩 에이전트의 품질·속성 격차에 직접 영향을 준다.

## 심층 분석

### 기술 의미
이 모델의 핵심은 "생성 기반 의사결정"과 "채점 기반 의사결정"의 분리다. LLM이 답을 문장으로 만들어내는 대신, 상태-행동 임베딩의 내적으로 순위를 매기는 구조는 추천 시스템의 이중 인코더(dual encoder)를 에이전트 의사결정에 접목한 것으로 읽힌다 (→ 분석). 상태와 행동을 분해해 캐시하는 서빙 설계는 vLLM의 KV 캐시 아이디어를 새 모델 클래스에 이식한 것으로, 에이전트 워크로드 특성(상태는 매 스텝 변하고 행동 집합은 고정)에 맞춘 최적화다. 다만 성능 수치 대부분은 팀 자체 보고이며, 제로샷 성공률에서 Jev에 뒤지는 항목(도구 호출 95.2% vs 99.2%)이 있다는 점은 원문이 그대로 인정한다.

### 업계 영향
TypeSafe의 Jev가 개척한 System One 모델 카테고리에 최초의 Apache-2.0 대안이 등장했다는 점에서, 이 카테고리의 개방화가 시작됐다고 볼 수 있다 (→ 분석). TypeSafe 호환 API를 그대로 재현한 것은 Jev의 인터페이스가 사실상 카테고리 표준으로 자리 잡고 있음을 보여주며, 잠금 없이 동일 클라이언트 코드로 모델을 갈아끼울 수 있게 된다. 에이전트 프레임워크 입장에서는 best-of-N + 검증자 구조를 GPU 1대 비용으로 채택할 수 있어져, 검증자 계층이 프론티어 모델 의존에서 벗어나는 방향으로 생태계가 움직일 수 있다. 반대로 독점 진영인 TypeSafe는 성능 우위를 유지하려면 벤치마크 공개나 가격 대응이 필요해질 것이다.

### 관련 프로젝트
- [CLM-8B 모델 카드 (Hugging Face)](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)
- [CLM GitHub 리포지터리](https://github.com/Contrastive-LM/CLM)
- [Contrastive-LM 블로그](https://contrastive-lm.notion.site/)

### 관련 뉴스
- [TypeSafe Jev System One 모델](../records/2026-09-20-typesafe-jev-system-one-model.md) — CLM-8B의 직접적 비교 기준이 된 독점 System One 모델
- [CUA S1 System One 컴퓨터 사용 모델](../records/2026-09-20-cua-s1-system-one-computer-use.md) — 생성 없이 행동을 고르는 모델 클래스의 다른 사례
- [Jev LAYA CoreML 온디바이스화](../records/2026-09-21-jev-laya-coreml-ondevice.md) — Jev 진영의 경량화·엣지 대응 움직임

## 원문 발췌
> "Contrastive-LM has released CLM-8B, the first open model in a new class called Contrastive Language Models (CLMs). CLM does not generate text. It scores a set of candidate actions against the current state and returns probabilities."

> "On 1 RTX 4090 with 3 actions, revisited states drop from 1.7 ms to 0.6 ms. The model card reports CLM running 13× faster than Jev with about 1,000 candidates."

> "The research team reports these as new SOTA verifier results. Jev scores below pass@1 on both benchmarks, so selecting with Jev is worse than taking 1 sample. CLM runs 4.1× to 5.7× faster."

## 수집 노트
- **선정 이유**: 에이전트 루프의 의사결정 계층을 텍스트 생성 없이 확률로 처리하는 신규 모델 클래스에 최초의 Apache-2.0 오픈 구현이 등장했고, 이미 수집된 Jev 레코드와 직접 비교되는 수치(지연·검증자 정확도)를 제공하는 오늘 후보 중 에이전트 생태계 영향이 가장 직접적인 기사였기 때문. MarkTechPost 보도(1) + CLM 공식 GitHub·모델 카드(2)로 교차 확인.
- **제외 후보**: "TypeSafe AI Jev 코딩 가이드"(MarkTechPost, 같은 날) — CLM-8B와 같은 탐색에서 나온 Jev 활용 튜토리얼로 신규 사실이 중복이라 본 레코드로 통합. PrismML 퀄컴 스마트글래스 보도(TechCrunch) — PrismML은 2026-09-24 레코드로 이미 수집된 회사의 후속 보도라 제외.
