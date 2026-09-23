# Claude, CRISPR를 연상시키는 신규 효소계 자율 발견

## 메타데이터
- **원문 URL**: https://www.anthropic.com/news/claude-discovers-novel-enzyme-system
- **소스**: Anthropic 공식 블로그
- **발행일**: 2026-09-23
- **수집일**: 2026-09-24
- **수집자**: 레노버
- **카테고리**: research
- **태그**: [anthropic, claude, ai-for-science, crispr, bioinformatics]
- **소스 권위**: official
- **교차 확인**: 3
- **중요도**: ⭐⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Anthropic이 Claude 기반 생물학 연구 그룹과 자체 실험실을 새로 만들었으며, Claude가 DNA 반복 서열과 결합된 신규 효소계 "array-associated reverse transcriptases(ART)"를 자율적으로 발견했다고 발표했다. 약 950개의 Claude 에이전트가 21시간 동안 2억 1천만 토큰을 소비해 DNA 서열 데이터베이스를 탐색했고, CRISPR 유전자편집의 개척자인 펑 장(Feng Zhang) MIT 교수도 "AI 에이전트가 생물학적 발견에 기여하는 흥미로운 사례"라고 평가했다.

## 번역 (한국어)

Anthropic이 Claude를 활용한 기초 생물학 연구를 위한 새로운 라이프사이언스 연구 그룹과 실험실을 설립했다고 밝혔다. 이 팀은 DNA 데이터셋에서 아직 특성이 규명되지 않은 단백질 패밀리를 찾아내고, 대규모로 가설을 생성한 뒤 실험실에서 검증하는 방식으로 일한다. 회사는 2026년 봄, "범용 AI 모델이 이런 발견을 체계화하고 가속할 수 있는가"를 확인하기 위해 연구를 시작했다.

이번 발표의 핵심 결과는 Claude가 스스로 발견한 신규 효소계다. 이 시스템은 RNA를 DNA로 복사하는 역전사효소(RT)에 기반하며, 거대 박테리오파지에서 유래한다. 바탕이 된 RT 자체는 기존 연구에서 이미 식별되었지만, 그 옆에 배열된 비부호화 DNA 서열과 기능 미상의 보조 단백질이라는 정의적 특징을 처음 알아낸 것은 Claude가 처음이라고 회사는 설명한다. 이 특징 조합은 지금까지 소수의 시스템에서만 함께 발견되었는데, 그 시스템들은 모두 프로그래밍 가능하고 DNA 절단·복사·붙여넣기 같은 작업을 수행한다.

작업 방식은 구체적으로 이렇다. 회사는 Claude에게 "거대한 DNA 서열 데이터베이스에서 흥미로운 신규 RT 사례를 찾아라"는 프롬프트 하나만 줬다. 약 950개의 Claude 에이전트가 21시간 동안 2억 1천만 토큰을 소비하며 데이터베이스를 탐색했고, 그중 한 에이전트가 기이한 모양의 RT 유전자 옆에서 반복되는 DNA 서열 패턴을 포착했다. 인간 과학자의 개입은 초기 프롬프트와 실험실 검증으로 제한되었다. 이 패턴은 이후 실험실 분석을 통해 박테리오파지의 미규명 효소계임이 확인되었고, 회사는 이를 ART로 명명하고 프리프린트를 공개했다.

CRISPR 유전자편집의 선구자인 펑 장(MIT·브로드 연구소)은 프리프린트를 검토한 뒤 "역전사효소와 결합된 RNA 반복 배열의 식별은 진정으로 흥미롭고 추가 연구의 가치가 있다"며 "이 연구가 더 많은 과학자가 AI 활용을 탐구하는 계기가 되기를 희망한다"고 말했다. Anthropic은 ART의 실제 기능 규명이 아직 진행 중이라고 밝혔다.

실험실은 베이 에어리어에 있으며, BSL-1·BSL-2 수준의 낮은 생물안전 등급에서만 작업하고 인간 감염 병원체는 다루지 않는다. 모든 실험실 작업은 인간 과학자가 수행하며, TechCrunch 보도도 "Anthropic은 Claude를 실험실에 풀어놓지 않았다. 지금까지는 인간이 루프 안에 있다"고 전했다. Claude는 문헌을 읽고 공개 데이터로 기존 결과를 재현해 방법을 검증한 뒤, 기술되지 않은 시스템 후보를 찾아 보고서를 작성하고, 후속 분석에서 스스로 증거를 비판적으로 평가하는 역할을 맡는다.

## 왜 중요한가?
AI가 논문을 읽거나 코드를 짜는 수준을 넘어, 인류가 몰랐던 자연 시스템을 '발견'한 첫 공식 사례 중 하나가 될 수 있는 발표입니다. 제한 효소→PCR→CRISPR로 이어진 생물학 혁명의 역사에서, 데이터베이스를 뒤지던 존재가 이제 AI라는 점이 판을 바꿉니다. 에이전트 950개가 21시간만에 발견 후보를 뽑았다는 것은 과학 연구의 속도 자체가 달라질 수 있다는 신호입니다.

## 심층 분석

### 기술 의미
이 발표의 기술적 본질은 '탐색 자동화'가 아니라 '발견의 판단'을 모델에 위임했다는 점이다. RT 자체는 이미 알려져 있었고, 주변 DNA 반복 배열과 보조 단백질의 조합이 의미 있는 시스템임을 포착하는 것이 Claude의 기여였다. 이는 도메인 지식이 축적된 데이터(공개 서열 DB)에서 패턴의 '의미'를 읽어내는 능력이 모델 수준에서 실증된 것으로, 약 950개 에이전트·2억 1천만 토큰이라는 수치는 단일 천재적 통찰이 아니라 대규모 병렬 탐색과 자기 검증 파이프라인의 산물임을 보여준다. Anthropic이 공개한 워크플로(문헌 재현 → 미규명 후보 탐색 → 보고서 작성 → 비판적 자가 평가 → 인간 실험 검증)는 AI 과학 연구의 재현 가능한 템플릿으로 후속 연구에 참조될 가능성이 크다.

### 업계 영향
AI 랩이 소프트웨어를 넘어 물리적 실험실까지 직접 운영하기 시작했다는 점에서 산업 구조적 의미가 크다. OpenAI·Google DeepMind와의 경쟁이 모델 벤치마크에서 'AI가 만들어내는 과학적 성과'로 이동하고 있으며, Anthropic은 이번 발표로 그 서사의 선점에 나섰다. 기능이 아직 규명되지 않았음에도 조기 공개를 선택한 것은 커뮤니티 검증을 유도하고 선점 효과를 확보하려는 전략으로 읽힌다. 바이오텍·제약 업계에서는 AI 주도 표적 발굴 수요가 커질 것이고, 펑 장의 긍정적 평가는 학계의 수용 속도를 앞당기는 신호다. 다만 '프로그래밍 가능 유전 시스템'이라는 특성 조합이 확인된 것일 뿐 실제 기능은 미검증이므로, CRISPR급 도구로의 발전 여부는 후속 실험에 달려 있다.

### 관련 프로젝트
- 프리프린트 PDF: https://www-cdn.anthropic.com/22573675ada52a8ca8a97a1a4b4326b2f208a071.pdf
- Claude Science: https://claude.com/product/claude-science
- Dario Amodei, "Machines of Loving Grace" (생물학 가속 논지): https://darioamodei.com/essay/machines-of-loving-grace

### 관련 뉴스
- [OpenAI GPT-6 Sol·Luna 출시](../records/2026-09-23-openai-gpt-6-sol-luna.md) — 같은 주 경쟁 랩의 모델 발표, AI 경쟁의 다른 축
- [Anthropic Opus 5.5 출시](../records/2026-09-23-anthropic-claude-opus-5-5-release.md) — 이번 발견에 쓰인 Claude 계열 모델의 최신 버전

## 원문 발췌
> Today, we're sharing early results from one of our first research programs, in which Claude autonomously discovered a novel enzyme system that is associated with an array of DNA repeats, a pattern reminiscent of CRISPR.

> After 21 hours spent searching this data by roughly 950 agents using 210 million tokens, one of the agents spotted something remarkable: a repeating pattern of DNA sequences that occurs next to the gene for an odd-looking RT.

> "This is an exciting example of how AI agents can contribute to biological discovery. The identification of RNA-repeat arrays associated with reverse transcriptases is genuinely intriguing and merits further investigation." — Feng Zhang, Professor, MIT and Broad Institute

> All of the lab work is performed by human scientists.

## 수집 노트
- **선정 이유**: 공식 발표(official) + TechCrunch·HN 커뮤니티로 교차 확인 3건 + HN 390포인트라는 관측 가능한 신호가 모두 최상위인 오늘의 최대 뉴스 — AI 에이전트가 실제 과학적 발견을 수행한 첫 공식 사례 중 하나라 아카이브했다. 중요도는 산정표 기준 1+2(official)+2(교차 3건 이상)+1(HN 100pt+) = ⭐⭐⭐⭐⭐.
- **제외 후보**: TechCrunch "Anthropic says its biology lab has already found something big" — 동일 사건의 2차 보도로 본 레코드의 교차 확인 소스로만 활용. HN "Once Claude can measure something, it can make it faster" — 관련 claude.dev 블로그 글이지만 관측 밀도가 본 건보다 낮아 통합하지 않고 보류.
