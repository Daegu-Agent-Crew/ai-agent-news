# Claude 신규 시스템 프롬프트, 가사·캐릭터 저작권 방어 강화 — 음반사 소송 직후 조정

## 메타데이터
- **원문 URL**: https://simonwillison.net/2026/Sep/2/claudes-new-system-prompt/
- **소스**: Simon Willison's Weblog (Hacker News 경유)
- **발행일**: 2026-09-02
- **수집일**: 2026-09-06
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [Anthropic, Claude, system-prompt, copyright, transparency]
- **중요도**: ⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Anthropic이 소비자용 Claude(Fable 5.1)의 시스템 프롬프트를 공개했는데, 노래 가사·시·책 구절 재생 금지 조항과 저작권 캐릭터·로고 이미지 생성 금지 조항이 대폭 추가됐다. 음반사들의 가사 학습 소송이 터진 지 며칠 만의 조정이라는 점이 주목된다.

## 번역 (한국어)
Anthropic은 소비자용 Claude 앱(Claude.ai와 모바일 앱)의 시스템 프롬프트를 공개해 왔는데, 이번에 프롬프트를 모델별 페이지로 재편하고 변경 이력도 함께 공개했다. Claude Code나 Claude Cowork용 프롬프트는 공개 대상이 아니다. docs 사이트는 어떤 페이지든 .md를 붙이면 마크다운으로 내려받을 수 있어 LLM이 직접 읽기 좋게 설계돼 있다.

가장 큰 변화는 가사 관련 조항이다. 새 프롬프트는 "Claude는 노래 가사, 시, 책과 기사의 구절을 전체든 부분든 재현하지 않는다 — 마지막 소절, 후렴, 악보로 옮긴 멜로디, 사용자가 자기 노래라고 붙여 넣는 구절도 포함"이라고 명시한다. 한 번 거절한 요청은 표현을 바꾸거나 범위를 좁혀 다시 물어도 대화가 끝날 때까지 계속 거절하며, 대신 작품을 설명하거나 분석해 주는 방식으로 유도한다. 1929년 이전 출간 작품은 허용되지만, 사용자의 주장이 아니라 모델이 아는 출판 연도를 기준으로 판단하고 불확실하면 거절한다.

시각 저작물에도 같은 원칙이 확대됐다. SVG, 캔버스, CSS, ASCII 아트 등 코드로 그리는 이미지까지 포함해 특정 아트워크, 앨범·책 표지, 포스터, 로고, 앱 아이콘, 제품 디자인을 재현하지 않고, 알려진 캐릭터·마스코트·브랜드 인물은 자체적으로 보호되므로 포즈·색·스타일·장면을 바꿔도 원작이 되지 않는다. 요청을 '이름'이 아니라 '완성될 그림'으로 판정하며, 거절된 요청을 '대체 요소'로 우회해 같은 이미지를 만들어내지 않는다. 프롬프트에는 '파란 고슴도치 배너' 요청을 소닉으로 인식해 거절하고 대신 스케이트보드 탄 아욱롤(axolotl) 오리지널 디자인을 제안하는 예시가 실려 있다.

답변 스타일도 조정됐다. "genuinely", "honestly", "straightforward" 같은 수식어를 쓰지 않고, 요약 중심으로 간결하게 답하도록 했다. 또 이전 버전의 학대적 대화에서 end_conversation 도구로 대화를 끝낼 수 있다는 지침은 완화돼, 더 이상 대화 종료를 유도하지 않는 방향으로 바뀌었다. 저자는 이 변화가 Sony Music Publishing·Warner Chappell이 Anthropic을 가사 학습 소송으로 고소한 소식이 알려진 지 며칠 만에 이뤄진 것은 결코 우연이 아닐 것이라고 분석한다.

## 왜 중요한가?
AI 기업이 법적 리스크에 대응해 모델이 아니라 시스템 프롬프트 수준에서 즉석 통제를 거는 실무 사례를 그대로 보여준다. 사용자 입장에서는 '왜 내 요청이 거절됐는지'의 기준이 투명하게 공개된 첫 사례들이 늘어나는 흐름이며, 저작권자 입장에서는 소송 없이도 출력 단계 방어가 빠르게 바뀔 수 있음을 보여준다. 시스템 프롬프트 공개 자체가 업계 투명성의 벤치마크라는 점도 의미가 크다.

## 심층 분석

### 기술 의미
가사 금지 조항의 설계가 정교하다. 직접 요청뿐 아니라 '붙여 넣고 자기 노래라 주장하는' 우회, 한 번 거절된 요청의 재표현, 저작 연도 판정을 사용자 진술이 아닌 모델 지식으로 하는 신뢰 정책까지 규정한다. 이는 시스템 프롬프트가 단순 페르소나 설정을 넘어 정책 엔진(policy engine) 역할을 한다는 것을 보여주며, 학습 단계 언레이닝(unlearning)보다 출력 단계 가드레일이 훨씬 빠르게 배포 가능하다는 점을 실증한다. 반대 급부로 프롬프트는 유출·조작에 취약하므로, 정책의 일부를 모델 내면화(RLHF)와 병행해야 한다는 과제도 남긴다. ASCII 아트·SVG까지 포괄한 것은 멀티모달 출력 채널이 늘수록 '텍스트만 보는 저작권 검열'이 무의미해졌음을 뜻한다.

### 업계 영향
저작권 소송이 활발한 시기에 모든 AI 회사가 비슷한 출력 금지 조항을 경쟁적으로 도입할 공세를 예고한다. OpenAI·Google도 유사 정책을 갖고 있지만, Anthropic처럼 프롬프트 전문과 변경 이력을 공개하는 회사는 없다. 이 격차는 B2B 조달에서 '정책 투명성'을 요구하는 근거가 되고, 결국 업계 표준(공개 의무화)으로 수렴할 가능성이 있다. 앱 개발자에게도 시사점이 크다. Claude API 기반 제품은 시스템 프롬프트 조항이 바뀌면 서비스 동작이 달라지므로, Anthropic의 릴리스 노트를 감시하는 자동화(diff 도구)가 새로운 운영 업무로 자리 잡을 것이다. 소니·워너 소송의 향방과 함께 '학습 단계 방어 vs 출력 단계 방어'의 비용 구조 비교가 업계 논쟁의 축이 될 것이다.

### 관련 프로젝트
- [Anthropic 시스템 프롬프트 인덱스](https://platform.claude.com/docs/en/release-notes/system-prompts/overview)
- [Fable 5.1 프롬프트 (Markdown)](https://platform.claude.com/docs/en/release-notes/system-prompts/claude-fable-5-1.md)
- [Simon Willison의 프롬프트 변경 이력 추적 (GitHub)](https://github.com/simonw/claude-system-prompts/commit/837a418b5888207b1b11b27d2f5471970da6f99b)

### 관련 뉴스
- [Anthropic Fable 5.1 출시](../records/2026-09-02-anthropic-fable-5-1-release.md) — 해당 프롬프트의 대상 모델
- [Sony Music·Warner, Anthropic 소송](../records/2026-08-30-sony-music,-warner-sue-anthropic,-alleging-a-"braz.md) — 이번 조정의 직접적 배경
- [시애틀타임스·뉴스데이의 OpenAI 소송](../records/2026-09-06-seattle-times-newsday-sue-openai-microsoft.md) — 저작권 분쟁의 확산 국면

## 원문 발췌
> "Claude does not reproduce song lyrics, poems, or passages from books and articles, in whole or in part — including the last lines, a chorus or hook, a melody written out note by note, or lines the person pastes in one at a time and describes as their own song."
> "I doubt it's a coincidence that they added this section within days of the news breaking that Sony Music Publishing and Warner Chappell are suing Anthropic for training on databases of song lyrics!"
