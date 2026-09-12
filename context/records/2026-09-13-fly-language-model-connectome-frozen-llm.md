# Fly Language Model: 초파리 전체 커넥톰을 동결 LLM에 물리다 — 그런데 제작자의 대조군이 "배선이 도움 안 된다"고 밝혔다

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/09/12/fly-language-model-flm-wires-the-full-fruit-fly-connectome-into-a-frozen-1-2b-llm-and-its-own-controls-show-the-wiring-does-not-help/
- **소스**: MarkTechPost
- **발행일**: 2026-09-12
- **수집일**: 2026-09-13
- **수집자**: 레노버
- **카테고리**: research
- **태그**: [connectome, fly-language-model, reservoir-computing, LFM2.5, negative-result, MaleCNS, open-source]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **신선도**: fresh

## 핵심 요약
> Fly Language Model(FLM)은 초파리 수컷 중신경계 커넥톰(MaleCNS v1.0)의 노드 166,700개·방향성 엣지 2,558만 2,938개 전체를 토큰 임베딩으로 구동하고, 동결된 LiquidAI LFM2.5-1.2B-Instruct 백본에 작은 학습 보정항을 얹는 공개 챗봇이다. 학습되는 것은 278,528개 파라미터의 리드아웃뿐이다. 그런데 동반 프리프린트에 따르면 백본 대비 개선은 토큰당 0.0222 nat에 불과했고, 그래프 없이 같은 토큰 투영을 직접 넣은 파라미터 매칭 대조군이 모든 시드에서 더 좋았다.

## 번역 (한국어)
FLM은 초파리 커넥톰 전체를 언어 모델에 접합한 공개 챗봇이다. 개발자(nftechie)는 이를 세계 최초의 Fly Language Model이라 부르며 GPF(Generative Pre-trained Fly)라는 아키텍처 위에 만들었지만, 정작 프로젝트 자체는 '최초의 커넥톰 언어 모델'이라는 주장을 명시적으로 부인하고, 그래프가 없는 파라미터 매칭 대조군이 더 좋은 성능을 낸다고 보고한다. 코드는 MIT 라이선스로 GitHub에 공개됐으며 Python 3.12 환경의 macOS·Linux에서 API 키 없이 로컬 실행(MPS·CUDA·CPU)이 가능하다.

시스템 구조는 언어 모델에 붙인 저유공학(reservoir computer)이다. MaleCNS 그래프의 노드 166,700개와 방향성 엣지 2,558만 개가 모두 관여하지만, 그래프·백본·입출력 랜덤 투영은 모두 고정돼 있고 학습되는 것은 278,528파라미터 리드아웃 — 백본 11억 7천만 파라미터의 약 0.0238%에 불과하다. 토큰마다 고정 가우시안 투영이 2,048차원 토큰 임베딩을 128채널로 압축해 각 저유 노드에 무작위 부호로 하나씩 공급하고, 그래프는 x = tanh(W(0.6x + 0.4Bc))로 갱신된다. 저유 상태를 128 빈으로 풀링하고 두 개의 편향 없는 학습 행렬(U 128×128, V 2048×128)을 통과시킨 뒤, 동결된 어휘 헤드를 통해 백본 로짓에 더해지는 유계 잔차(bounded residual, RMS 0.25 상한)로 출력한다.

결과는 담백하다. SmolTalk 일상 대화 32개(1,236 타깃 토큰)로 측정한 세 시드에서, 프리프린트 "Flies Are All You Need"(2026-09-11)는 백본 대비 개선이 토큰당 0.0222 nat(퍼플렉시티 3.98→3.90)뿐이라고 보고한다. 같은 128채널 토큰 투영을 그래프 없이 동일 리드아웃에 직접 넣은 대조군은 세 시드 모두에서 더 좋았다. 수학적 이유도 제시된다 — 저유 갱신이 상태 차이를 토큰당 최대 0.6배로 수축시켜 10토큰 뒤에는 상한 0.00605로 수렴한다. "이것이 166,700개 셀이 모델에 장기 기억을 주지 못하는 이유다. 맥락은 백본에서 온다."

## 왜 중요한가?
'생물 뇌 배선을 AI에 심으면 똑똑해질 것인가'라는 대중적 호기심이 높은 주제인데, 이 프로젝트는 그 가설을 직접 시험해 '이 구현에서는 도움이 되지 않았다'는 음성 결과를 스스로 보고한 점이 드물 만큼 정직하다. 음성 결과도 과학적으로는 가치 있는 데이터다 — 커넥톰 인코딩이 언어 능력에 기여한다는 주장이 나올 때마다 이 대조군 설계가 검증 기준점이 될 수 있다. 또 저유 컴퓨팅과 LLM 결합이라는 저비용 실험 방법론 전체가 MIT 라이선스로 공개돼, 누구나 재현·반증할 수 있다.

## 심층 분석

### 기술 의미
이 사례의 기술적 교훈은 세 가지다. 첫째, 0.6/토큰 수축 계수가 만드는 기억 상한은 저유 컴퓨팅을 LLM에 접목할 때의 구조적 제약을 정량적으로 보여준다 — 그래프가 아무 거대해도 수축 계수가 지배하면 장기 의존성은 백본이 가져간다. 둘째, '파라미터 매칭 대조군' 설계가 커넥톰-AI 융합 주장의 증거 기준을 끌어올렸다. 배선이 아니라 추가 채널의 정규화 효과만으로도 미세 개선이 나올 수 있음을 보여준 셈이다. 셋째, 학습 파라미터를 0.0238%로 제한한 채 동결 백본에 잔차를 얹는 방식은, 대규모 재학습 없이 외부 구조(그래프·지식)를 모델에 주입하려는 시도들이 공통으로 직면하는 천장을 드러낸다 — 성능이 아닌 검증 가능성을 목표로 할 때 유효한 프레임이다.

### 업계 영향
커넥톰 기반 AI는 Janelia의 MaleCNS 공개 데이터(노드 16만·엣지 2,500만급)로 개인 개발자도 실험이 가능해졌다는 점에서 오픈 사이언스의 산물이다. MarkTechPost 단일 보도지만 커뮤니티(X·HN)에서 '배선 심기'류 프로젝트에 대한 검증 문화가 형성되고 있음을 보여준다. 한편 개발자가 '최초의 커넥톰 언어 모델' 타이틀을 스스로 거둔 것은, AI 홍보 과잉 문화 속에서 음성 결과 보고가 소셜적으로도 통하는 사례로 기록할 만하다. 향후 동일 프레임(커넥톰 저유 + 동결 LLM)을 선충 C. elegans 등 더 작은 신경계나, 반대로 수축 계수를 완화한 설계로 확장하는 후속 실험이 나올 가능성이 있다(가설).

### 관련 프로젝트
- https://fly-language-model.vercel.app/ — FLM 공개 챗봇
- https://github.com/nftechie/flm — MIT 라이선스 저장소 (로컬 실행 가능)
- https://male-cns.janelia.org/download/ — MaleCNS v1.0 커넥톰 데이터 (Janelia)
- https://x.com/nftechie_/status/2098532090874560815 — 개발자 발표 포스트

### 관련 뉴스
- [2026-09-02-emergent-symbolic-structure-neural-networks.md](2026-09-02-emergent-symbolic-structure-neural-networks.md) — 신경망의 상징 구조 창발 연구, '구조 주입 vs 구조 창발' 논쟁의 반대편
- [2026-08-17-models-getting-dumber-on-purpose.md](2026-08-17-models-getting-dumber-on-purpose.md) — 의도적 성능 절충, '작은 구조로 큰 모델 보정' 트레이드오프의 맥락

## 원문 발췌
> "The Fly Language Model (FLM) drives all 166,700 retained neurons and 25.6 million edges of the MaleCNS fruit fly connectome with token embeddings, then adds a small learned correction to a frozen LFM2.5-1.2B-Instruct backbone. Only 278,528 parameters train."
> "The accompanying preprint reports a 0.0222 nat per token improvement over the backbone, but a parameter-matched control without the graph does slightly better in every seed."
> "The system is a reservoir computer bolted onto a language model."

## 수집 노트
- **선정 이유**: 커넥톰-LLM 융합이라는 신선한 실험이면서 스스로 음성 결과를 보고한 희귀 사례다. MarkTechPost(major-media +1)의 상세 기술 분석 보도가 유일한 독립 보도(교차 1, 가점 없음), 커뮤니티 반응 미관측, 기본 1점 → ⭐⭐. 규모는 작지만 '구조 주입 가설 검증'이라는 연구 방법론적 가치로 선정.
- **제외 후보**: HN "Real-SWE: Benchmarking AI models on private, real-world, enterprise codebases" (58pt) — 커뮤니티 단일 소스 + 반응 100pt 미만으로 가점 없음, 업체 자체 벤치마크 성격. HN "A Mathematical Framework for Transformer Circuits (2021)" (70pt) — 5년 전 기존 문헌 재부상으로 신규 뉴스 아님.
