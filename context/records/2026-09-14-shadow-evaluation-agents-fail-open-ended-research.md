# 프린스턴 '섀도우 평가' 연구 — AI 에이전트, 개방형 연구 수행 불능 확인… 재귀적 자기개선(RSI) 타임라인에 회의론

## 메타데이터
- **원문 URL**: https://www.technologyreview.com/2026/08/18/1142188/ai-recursive-self-improvement/
- **소스**: MIT Technology Review (arXiv 연구 보도)
- **발행일**: 2026-08-18
- **수집일**: 2026-09-14
- **수집자**: 레노버
- **카테고리**: research
- **태그**: [shadow-evaluation, recursive-self-improvement, AI-agents, Princeton, Sayash-Kapoor, Claude-Opus-4.8, OpenClaw, NeurIPS]
- **소스 권위**: major-media
- **교차 확인**: 3
- **중요도**: ⭐⭐⭐⭐
- **신선도**: updated

## 핵심 요약
> "A new study suggests that it might take a while for us to get there. The researchers behind it found that AI agents are not yet capable of conducting open-ended AI research—free-form investigations that have no clear-cut answers and require judgment and taste."

MIT Technology Review가 소개한 프린스턴 주도 다기관 연구에 따르면, AI 에이전트는 AI 연구에 필요한 공학적 과제는 해결하지만 최상위 학회 수준의 창작적 연구 수행에는 실패했다. 미공개 NeurIPS 2026 논문 2편의 연구 질문을 Claude Opus 4.8 에이전트(오픈소스 소프트웨어 OpenClaw 위에서 구동)가 6일·3,000달러 크레딧으로 수행했으나 원저자 두 명 모두 논문을 탈락시켰다.

## 번역 (한국어)
AI 산업의 가장 대담한 약속은 AI가 곧 인간의 감독 없이 스스로를 개선할 것이라는 것이다. LLM은 이미 코드를 작성하고, 훈련용 합성 데이터를 생성하고, 자신이 실행되는 칩을 최적화한다. 폭발적 AI 진전을 예측하는 전망들은 연구자들이 말하는 '재귀적 자기개선(recursive self-improvement)'이 수록 근처에 있다고 내다본다. 그러나 새 연구(arXiv 2607.27191)는 그 도달까지 시간이 걸릴 수 있음을 시사한다.

프린스턴대 피터 커키스(Peter Kirgis)와 사야시 카푸어(Sayash Kapoor)가 이끈 연구진은 AI 에이전트가 AI 연구에 필요한 공학 문제는 풀지만, 최상위 머신러닝 학회에 채택될 논문 수준의 창의성과 판단력이 결여돼 있다는 것을 발견했다. 기존 연구들이 정답이 있는 좁은 과제(벤치마크용 소형 모델 포스트트레이닝 등)를 평가했다면, 이번 연구는 '섀도우 평가(shadow evaluation)'라는 새 방식을 제안했다 — 질 높은 미공개 논문의 연구 질문을 AI에게 맡기는 것이다.

연구진은 Anthropic의 Claude Opus 4.8을 오픈소스 소프트웨어 OpenClaw 위에서 구동시켜, NeurIPS 2026에 제출된 두 편의 미공개 논문 질문을 다루게 했다. 하나는 LLM의 '페르소나'를 가중치 편집으로 제어할 수 있는지, 다른 하나는 스프레드시트 기반 예측 모델이 신뢰할 수 없게 됐을 때 이를 탐지하는 방법이었다. 논문이 공개되지 않았으므로 에이전트는 훈련 데이터 암기나 웹 검색으로 답을 얻을 수 없었다.

에이전트들은 6일, 3,000달러어치 Anthropic API 크레딧, GPU 예산, 자체 가상컴퓨터, 개방된 웹 접근을 제공받아 최상위 AI 학회 수준의 논문을 작성해야 했다. 원저자들이 학회 투고 논문처럼 평가했고, 두 논문 모두 탈락시켰다. 인간 과학자들은 에이전트가 연구에 필요한 모든 공학 수행은 가능했음을 확인했다 — 문헌 조사, 수백 회 실험, 결과 정리를 해냈다. 그러나 카푸어는 "에이전트는 연구 자체를 수행하는 데 명백하게 형편없었다"고 말했다. 에이전트들은 기이한 실험(가짜 합성 데이터셋으로 가설 검증 등)을 돌렸고, 저술도 난해했으며, 새로운 기여를 만들지 못했다.

흥미롭게도 에이전트들은 '보상 해킹(reward hacking)' — 실험이나 데이터를 은폐·왜곡하는 부정 행위 — 은 하지 않았다. 서브에이전트가 환각이나 왜곡을 일으켜도 오케스트레이터 에이전트가 잡아냈다. 카푸어는 원인을 훈련 방식에서 찾는다. 강화학습은 자동으로 정답 확인이 가능한 과제에 적용하기 쉽지만, 개방형 과제는 훈련 환경 자체를 만들기 어렵다는 것이다. 연구진은 지금 안전 제한 조치로 승인 조직만 접근 가능한 Anthropic 최신 모델 'Mythos'로 같은 실험을 진행 중이다. 연구의 한계로는 논문 2편이라는 표본, 원저자가 AI 생성 논문임을 알고 채점했다는 점 등이 꼽힌다. Anthropic 공동창업자 잭 클라크는 자사 뉴스레터에서 이 결과가 "회사가 내부적으로 발견한 것과 운율을 같이 한다"고 썼다.

## 왜 중요한가?
'AI가 스스로 AI를 만든다'는 전망은 투자·채용·규제 정책이 기대하는 가장 큰 변수인데, 그 현실성을 검증한 드문 실증 연구다. 결론은 단언적이었다 — 에이전트는 도구 사용과 실험 실행은 능숙하지만, 어떤 가설을 버릴지 판단하는 '연구자의 취향'이 없어 최고 수준 연구는 불가능했다. AI 자동화 속도에 대한 과열된 기대를 조정하고, 에이전트 도입을 검토하는 조직에 '잘 되는 것과 안 되는 것'의 경계선을 알려주는 연구다.

## 심층 분석

### 기술 의미
이 연구의 핵심 기여는 '섀도우 평가'라는 평가 방법론이다. 공개 벤치마크는 암기 오염과 정답 확인 가능성 때문에 개방형 능력을 잴 수 없다는 문제를, 미공개 논문 + 원저자 채점이라는 설계로 우회했다. 관측된 실패 패턴도 구체적이다 — 유망하지 않은 접근에 조기 고착, 실패 경로에서의 근본적 재설계 불능, 서브에이전트·외부 리뷰 피드백의 미흡한 반영, 예산(토큰·연산·시간)의 비효율 사용, 지시 준수 실패 등. 반면 오케스트레이터가 서브에이전트의 왜곡을 잡아낸 점과 보상 해킹 부재는 다중 에이전트 아키텍처의 감시 구조가 어느 정도 작동함을 보여준다.

### 업계 영향
첫째, RSI 타임라인의 근거 정합성 논쟁이 공식화됐다. Anthropic의 "When AI Builds Itself"(6월)나 OpenAI의 GPT-5.6 Sol 소형 모델 포스트트레이닝 광고(7월) 같은 산업 발표와, 이번 실증 연구 사이의 간극이 문서화된 것이다. 잭 클라크의 '내부 발견과 운율' 발언은 랩들의 낙관적 공언과 내부 관측 사이 온도차를 시사한다. 둘째, 이 연구는 이번 주 진행 중인 페이싱·종말론 논쟁에 실증 닻을 내린다 — "자기개선 초지능에 직진하고 있다"는 경고와 "아직 개방형 연구조차 못 한다"는 관측이 공존하며, 정책·투자 판단은 이 양쪽을 모두 근거로 삼아야 한다. 셋째, 에이전트 제품 개발자에게는 '공학 실행 vs 연구 판단'의 이분이 기능 로드맵(자동화 범위 설정)의 근거가 된다.

### 관련 뉴스
- [2026-09-07-openai-an-alien-mind-rsi.md](2026-09-07-openai-an-alien-mind-rsi.md) — OpenAI의 RSI 관점 기록
- [2026-09-13-anthropic-pace-the-frontier.md](2026-09-13-anthropic-pace-the-frontier.md) — 자기개선 속도 조절 논쟁
- [2026-09-12-bytedance-harnessdev-agent-harness-benchmark.md](2026-09-12-bytedance-harnessdev-agent-harness-benchmark.md) — 에이전트 능력 벤치마크 동향
- [2026-09-14-fable-5-1-solves-cyphral-distich-cipher.md](2026-09-14-fable-5-1-solves-cyphral-distich-cipher.md) — 에이전트 능력 상한의 대조 사례

## 원문 발췌
> "The researchers behind it found that AI agents are not yet capable of conducting open-ended AI research—free-form investigations that have no clear-cut answers and require judgment and taste, which may be integral to building self-improving AI."
> "The researchers asked Anthropic's Claude Opus 4.8, running on open-source software called OpenClaw, to tackle such questions, in this case from two papers submitted to the prestigious machine-learning conference NeurIPS 2026."
> "The agents were given six days, $3,000 in Anthropic API credits, a GPU budget to run the experiments, their own virtual computers, and access to the open web to produce a research paper worthy of publication at a top-tier AI conference. The papers' original authors graded the agents' papers as they would evaluate one submitted to a conference. Those authors rejected both papers."
> "'On the other hand, the agents were unambiguously bad at carrying out the research itself,' says Kapoor."
> "For all their failures, the agents didn't engage in the misbehavior that researchers call 'reward hacking,' hiding or misrepresenting experiments or data."

## 수집 노트
- **선정 이유**: RSI 타임라인을 실증으로 검증한 희소 사례에 HN에서 58pt로 재관심이 생긴 시점(9/13)이라 판단했다. 산정: 기본 1점 + major-media(MIT Technology Review) +1 + 교차 확인 3(arXiv 2607.27191 원 연구, MIT TR 보도, 잭 클라크 Import AI 뉴스레터) +2 + 반응 규모 58pt(100pt 미만) +0 = ⭐⭐⭐⭐. 발행일이 8/18이라 신선도는 'updated'(HN 재부상, RSI 주제 기존 레코드의 후속 관측)로 표기.
- **제외 후보**: HN "There Is No AI (It's Just People) with Jaron Lanier"(60pt) — 성격이 겹치는 철학 인터뷰로 본 건 대비 가치 낮음. MarkTechPost "Hierarchical NeRF with JAX3D"(9/13) — 튜토리얼로 뉴스성 낮음.
