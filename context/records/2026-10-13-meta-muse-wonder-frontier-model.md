# Meta, 첫 프런티어 모델 'Muse Wonder' 공개 — 에이전트·기억력 중심, 입력 100만 토큰당 $4

## 메타데이터
- **원문 URL**: https://research.meta.ai/blog/muse-wonder
- **소스**: Meta AI Research Blog (교차: TechCrunch)
- **발행일**: 2026-10-12
- **수집일**: 2026-10-13
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [meta, muse-wonder, frontier-model, active-memory, agents, muse-code, superintelligence-lab]
- **소스 권위**: official
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐⭐⭐
- **중요도 산정**: 기본 1 + official 2 + 교차 확인 2개(1) + HN 481pt(1) = 5
- **신선도**: fresh

## 핵심 요약
> Meta가 개인·업무용 에이전트 작업에서 최고 수준 성능을 낸다는 Muse Wonder와 Muse Wonder Full을 공개했다. TechCrunch는 이를 Meta의 첫 프런티어 모델 시도로 보도했으며, Wonder는 Meta Model API에서 입력 100만 토큰당 $4, 출력 $20에 제공된다.

## 번역 (한국어)
Meta는 Muse Wonder 시리즈(Muse Wonder, Muse Wonder Full)를 공개하며 "개인·업무용 에이전트 작업에서 최첨단 성능을 내는 가장 강력한 모델"이라고 소개했다. Muse Wonder는 오늘부터 Meta Model API와 Muse Code에서 쓸 수 있고, Muse Wonder Full은 Muse Code 구독자에게만 제공된다. 향후 Muse 앱의 경험과 산출물 생성에도 Muse Wonder가 쓰일 예정이다.

Meta는 두 가지 핵심 개념을 내세웠다. Active Memory는 대화를 넘어 사용자에 관한 중요한 맥락을 기억하고 필요할 때 꺼내 쓰는 능력이고, Active Focus는 어려운 목표를 향해 대안을 시도하고 장애물을 돌파하며 중요한 행동 전에 확인을 구하는 지속력이다. Meta는 이를 FocusBench와 장기 소프트웨어 프로젝트를 다루는 SWE-Marathon으로 평가했다고 밝혔다.

두 모델은 Meta의 기가와트급 Prometheus 데이터센터에서 학습됐다. Meta는 Muse Wonder Full이 이전 모델 Muse Spark 1.3의 추세보다 "학습 때 겨냥하지 않은 낯선 과제"에서 더 높은 성능을 보였으며, 이는 더 크고 강한 베이스 모델 덕분이라고 설명했다.

TechCrunch에 따르면 Meta 자체 테스트(모델 카드) 기준 두 모델의 벤치마크 점수는 Fable 5.1, GPT-6 Astra와 비슷한 수준이며, MemoryBench에서는 Fable·Opus·Astra보다 높았다. 가격은 입력 100만 토큰당 $4, 출력 $20이며 Wonder Full은 API로 제공되지 않는다. 이번 출시는 Alexandr Wang이 지난해 8월 Meta AI 조직을 재편한 이후 첫 프런티어 모델 출시다.

## 왜 중요한가?
그동안 경량 모델만 내던 Meta가 OpenAI·Anthropic과 정면으로 겨루는 최상위 모델을 처음 내놨습니다. 특히 "나에 대해 몇 주, 몇 달씩 기억하는 비서"를 핵심 차별점으로 내세워, AI 비서 경쟁의 축이 단순 성능에서 '기억력'으로 옮겨가고 있음을 보여줍니다.

## 심층 분석

### 기술 의미
Active Memory와 Active Focus는 각각 장기 맥락 유지와 장기 과제 수행을 모델 차원의 목표로 명시한 것으로, 에이전트 하네스가 해오던 기억 관리를 모델 학습으로 끌어들이려는 시도로 읽힌다(→ 분석). 인-분포 대비 아웃-오브-분포 성능 곡선을 공개한 것은 '벤치맥싱' 비판에 대응하려는 평가 방식의 변화다(→ 분석). 다만 모든 비교 수치는 Meta 자체 평가이며 독립 검증은 아직 없다.

### 업계 영향
API 가격이 TechCrunch 표현대로 GPT-6 Sol·Opus 5.5와 비슷한 수준으로 책정돼, Meta가 저가 공세보다 동급 경쟁을 택한 것으로 보인다(→ 분석). 최상위 Full 모델을 자사 Muse Code 구독에만 묶은 것은 코딩 에이전트 시장에서 자체 제품 락인을 노리는 전략일 수 있다(→ 분석). 오픈 웨이트 언급이 없다는 점에서 Llama 시절의 개방 노선과 거리가 더 벌어졌다(→ 분석).

### 관련 프로젝트
- Meta Model API / Muse Code
- MemoryBench, FocusBench, SWE-Marathon (Meta 평가 세트)

### 관련 뉴스
- [Meta Muse 개인 AI 에이전트](../records/2026-09-09-meta-muse-personal-ai-agent.md) — Muse 에이전트 출시
- [Meta Muse Mac 데스크톱 에이전트](../records/2026-09-19-meta-muse-mac-desktop-agent.md) — Muse 제품군 확장

## 원문 발췌
> "Today, we're excited to introduce the Muse Wonder series with Muse Wonder and Muse Wonder Full, our most capable models that deliver state-of-the-art performance on personal and professional agentic tasks."
> "Muse Wonder is available today through the Meta Model API and Muse Code, and Muse Wonder Full is available today for Muse Code subscribers."
> (TechCrunch) "Wonder will cost $4 per million input tokens and $20 per million output tokens"
> (TechCrunch) "Meta's Superintelligence Lab released a pair of new state-of-the-art models on Monday, Muse Wonder and Muse Wonder Full, representing the company's first attempt at a frontier model."

## 수집 노트
- **선정 이유**: 공식 발표 + TechCrunch 교차 보도 + HN 481pt로 오늘 후보 중 산정 점수가 가장 높아 선정.
- **제외 후보**: Alibaba QwenGyre(MarkTechPost) — Cloudflare 차단으로 본문 확보 불가. GLM-Legal(z.ai, HN 380pt) — JS 렌더링 페이지라 본문 추출 실패.
