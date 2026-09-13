# Claude Fable 5.1, 370년 미제 'Cyphral Distich' 암호 해독 — 후속 대형 암호(Octastich)도 거의 완독

## 메타데이터
- **원문 URL**: https://www.vals.ai/blogs/fable-solves-cyphral-distich
- **소스**: vals.ai 공식 블로그 / Hacker News (233pt)
- **발행일**: 2026-09-13 (HN 제출 기준)
- **수집일**: 2026-09-14
- **수집자**: 레노버
- **카테고리**: research
- **태그**: [Fable-5.1, Anthropic, cryptography, unsolved-cipher, agentic-reasoning, vals-ai, historical-codes]
- **소스 권위**: official
- **교차 확인**: 1
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> AI 평가 기업 vals.ai가 Anthropic의 Claude Fable 5.1에 17세기 작가 Thomas Urquhart의 미제 암호 'Cyphral Distich'(64개 숫자)를 열어 과제로 주었더니, 모델이 44분·176k 토큰 만에 해독에 성공했다고 보고했다. 핵심 단서는 암호의 열쇠가 외부 치환표가 아니라 '책 자체'(32개 Proquiritations의 단어 색인)라는 것었고, 평문은 찰스 2세를 위한 왕당파 기도문 "O GOD UPHOLD KING CHARLS THE SECOND AND / MAKE HIM THE SUPREME RULER OF THIS LAND"이었다.

## 번역 (한국어)
AI 평가 기업 vals.ai는 Anthropic의 프론티어 모델 Claude Fable 5.1에게 풀리지 않은 역사적 암호를 풀게 하는 실험을 했다. 대상은 17세기 스코틀랜드 작가 Thomas Urquhart가 저서 'Logopandecteision' 말미에 남긴 'Cyphral Distich'로, 각 32개씩 두 줄의 숫자(총 64개)로 이뤄진 암호문이다. 이 암호는 1899년 학술지 Notes and Queries에 공개 과제로 올라왔고, 역사 암호 연구자 Klaus Schmeh의 '미해독 암호 Top 50'에도 오른 유명 미제였다.

Fable 5.1은 연구자의 개입 없이 44분, 17.6만 토큰의 추론 끝에 해독에 성공했다. 결정적 실마리는 두 가지였다. 첫째, 암호문이 바로 앞의 '32개 Proquiritations'(기원문 목록) 직후에 인쇄돼 있고 Urquhart가 '32'라는 숫자를 일부러 강조했다는 점. 둘째, 암호를 감싼 시가 정직한 독자에게 "그 자신의 소원과 저자의 마음"을 발견하게 해주겠다고 약속하며, 기원문들이 "…가 소원이다" 같은 표현으로 끝난다는 점. 이를 조합하면 암호의 열쇠는 외부 치환표가 아니라 책 그 자체, 즉 i번째 숫자 → i번째 기원문의 i번째 단어 → 그 단어의 첫 글자라는 규칙이었다.

그 결과 나온 평문은 "하느님여 왕 찰스 2세를 붙드시고 / 그로 하여금 이 땅의 최고 통치자가 되게 하소서"라는 왕당파 기도문의 두 줄이었다. 각 줄이 정확히 32글자이고 rhyme(and/land)까지 맞아 떨어지는 자기검증적 결과이며, 왕당파였던 Urquhart의 정치 성향과도 정확히 일치한다. 수 세대의 암호학자들이 빈도 분석·치환·동음이의 치환 등 외부 키 가설에 매달렸기 때문에 놓친 풀이였다.

더 중요한 후속은 같은 저자가 1652년 저서 'The Jewel'에 남긴 더 큰 암호 'Cyphral Octastich'(285개 숫자)다. Fable 5.1은 같은 원리 — k번째 숫자가 책의 k페이지 단어 색인 — 를 적용해 285자 중 9글자를 제외한 전부를 해독했고, 역시 찰스 2세를 위한 왕당파 기도시(ottava rima)임을 밝혀냈다. vals.ai는 명시적 단서 조항을 붙였다: 4행의 'IRSH'(IRISH의 오탈자로 추정), 5행의 해독 불가 8글자, 159번째 위치부터의 ±1 페이지 시프트 등 남은 불확실성과, 1652년판 원본 페이지 이미지 확보가 필요하다는 점이다.

vals.ai는 지난 몇 달간 여러 프론티어 모델에 같은 유형의 미제 암호를 시도했지만 검증된 해독을 낸 모델은 Fable 5.1이 유일했다고 밝혔다. 유도(elicitation) 방법도 단순했다. 미제 암호를 풀라는 목표 부여, Fable의 수학 문제 해결 전례를 보여주는 격려, 창의적 분석 독려, '이미 풀린 암호나 답이 여럿 가능한 암호는 피하라'는 제약 두 가지였다.

## 왜 중요한가?
'AI가 암호를 풀었다'는 사건 자체보다 중요한 것은 해독의 성격이다. 이 문제는 계산량이 아니라 '책 전체를 문맥 자원으로 쓰는 창의적 단서 결합'이 열쇠였고, 수백 년간 인간 전문가들이 접근조차 하지 못한 풀이 공간을 모델이 독자적으로 찾아냈다. 지식노동에서 '수렴 증거를 쫓아 정답을 재구성하는' 역할의 상당 부분이 AI로 이전될 수 있음을 보여주는 사례이며, 고고학·역사학·언어 해독 같은 분야에서 미제 자료에 대한 AI 활용이 현실적 도구가 되기 시작했다는 신호다.

## 심층 분석

### 기술 의미
이 사례의 기술적 본질은 장기 추론(long-horizon reasoning)의 '검증 가능한 성공'이다. 모델은 시행착오 과정에서 빈도 분석 같은 표준 기법이 실패하면 접근 자체를 바꾸는 메타 인지적 전환을 보였고, 해답 도출 후 자기검증(32글자·rhyme·역사적 정합성)으로 수렴했다. vals.ai가 강조하는 유도 조건 — '검증 가능한 미제' 선별 — 은 AI 역량 평가의 새로운 프레임을 제시한다. 닫힌 벤치마크 점수가 아니라, 정답이 존재하되 인류가 모르는 문제에서의 자율적 탐색·검증 능력을 측정하는 방식이다. 한편 8월의 리만 가설 진행(→ 관련 뉴스)에 이어 '모델이 학습 데이터에 없던 결과를 산출하는' 사례가 축적되는 흐름의 연장선으로, 상식적 '암기' 설명이 점점 더 설명력을 잃어가는 국면이다.

### 업계 영향
첫째, 인문학·역사 연구 커뮤니티에서 '미제 자료 + 프론티어 모델' 조합의 실용성이 입증돼, 기록학·고전학·문화재 분야의 AI 도입 논의가 빨라질 것이다. 실제로 vals.ai는 미해독 암호 목록을 관리하는 Cipherbrain(Klaus Schmeh) 커뮤니티와 HCPortal 등 기존 학습 네트워크 위에 결과를 공개해 검증을 유도하는 협업 구조를 보여줬다. 둘째, HN에서 233포인트로 확산된 것은 '프론티어 모델 갭' 논쟁에 연료를 붙인다 — 벤치마크 점수가 비슷해 보여도 특정 유형의 개방형 문제에서는 최상위 모델만 통과하는 능력 차이가 존재함을 보여주는 표본이다. 셋째, 같은 맥락의 '모델 역량' 사례가 쌓이면 안전 측의 위협 평가(→ 관련 뉴스: 미사일 유도 소프트웨어 사례)와 성능 평가가 같은 프론티어 모델을 두고 교차하면서, 평가 체계 전반의 재설계 압력이 커질 것이다.

### 관련 프로젝트
- https://www.vals.ai/blogs/fable-solves-cyphral-distich — vals.ai 실험 원문 (해독 검증 스크립트 포함)
- https://news.ycombinator.com/item?id=49688695 — HN 토론 (233pt·75 댓글)
- https://scienceblogs.de/klausis-krypto-kolumne/2019/07/28/revisited-thomas-urquharts-encrypted-poems/ — Urquhart 암호를 다룬 기존 연구(Cipherbrain)
- https://www.cryptograms.hcportal.eu/web/#/ciphers/8 — HCPortal 암호 등재 기록

### 관련 뉴스
- [2026-09-02-anthropic-fable-5-1-release.md](2026-09-02-anthropic-fable-5-1-release.md) — Fable 5.1 모델 출시 레코드
- [2026-08-12-anthropic-model-progress-riemann-hypothesis.md](2026-08-12-anthropic-model-progress-riemann-hypothesis.md) — 프론티어 모델의 고전 난제 접근 사례
- [2026-07-29-claude-discovers-cryptographic-weaknesses.md](2026-07-29-claude-discovers-cryptographic-weaknesses.md) — Claude 계열 모델의 암호학 역량 선례
- [2026-09-11-openai-navier-stokes-lean4-formal-proof.md](2026-09-11-openai-navier-stokes-lean4-formal-proof.md) — 다른 프론티어 랩의 수학 미제 도전 사례

## 원문 발췌
> "We gave Claude Fable 5.1 an open task: solve Sir Thomas Urquhart's Cyphral Distich. It appears to have actually solved it, and the solution is quite embarrassing for humans in hindsight."
> "After 44 minutes, 176k tokens, and zero interjections from me, Fable 5.1 arrived at a solution."
> "But the key was not an external cipher alphabet at all. The key was the book itself. The rule was simple: for the i-th number in a cipher line, go to the i-th Proquiritation, use that number as a word index, and take the first letter of that word."
> "O GOD UPHOLD KING CHARLS THE SECOND AND / MAKE HIM THE SUPREME RULER OF THIS LAND"
> "I've actually been trying for the past few months to elicit models into solving an important but unsolved cipher. Across those months, no other frontier model I tried produced a verified solve."

## 수집 노트
- **선정 이유**: 실험 수행 주체인 vals.ai의 1차 보고(official +2), 검증 스크립트까지 공개된 재현 가능한 결과지만 제3자 독립 확인은 아직 없어 교차 확인 1(+0), HN 233pt의 유의미한 반응(+1) → 기본 1점 합산 ⭐⭐⭐⭐. '미제 문제에 대한 프론티어 모델 역량'을 보여주는 오늘자 최대 화제 사례(HN 당일 최고락 권)로 선정.
- **제외 후보**: LessWrong "Astra and Fable still hack on simple variants of alignment evals" (HN 346pt) — 커뮤니티 분석글로 1차 사실 관계 확인이 어려워 보류. MIT Tech Review "AI recursive self-improvement might not come so quickly" (HN 50pt) — 8/18 발행 기사의 지연 확산으로 신규성 낮음.
