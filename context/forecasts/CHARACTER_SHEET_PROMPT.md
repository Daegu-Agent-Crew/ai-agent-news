# 미래예측 캐릭터 시트 생성 프롬프트 v3

적용: 매일 미래편 신규 캐릭터 시트. 뉴스편 틈새 탐사대에는 적용하지 않는다.
목표: 장식용 마스코트 소개장이 아니라, 다음 이미지 생성에 실제 참조할 수 있는 **연기 가능한 캐릭터 모델 시트**.

## v3 우선 원칙 — 매력과 연기, 장식보다 먼저
- 매일 새로운 팀은 유지하되, 오늘의 기사 키워드를 귀·꼬리·재질로 모두 붙이지 않는다. 기억할 수 있는 캐릭터를 먼저 만들고 미래 상황 속에 넣는다.
- 최종 팀을 정하기 전 텍스트로 서로 다른 팀 콘셉트 3개(한 줄 성격 관계 + 실루엣)를 구상하고 하나를 선택한다. 이미지 시안 3회 생성이나 추가 검수를 뜻하지 않는다.
- 최근 3일 캐릭터 문서를 읽고 몸집 큰 받침대 / 길쭉한 조립가 / 작은 발광 안내자 조합을 반복하지 않는다. 같은 역할에 색·이름만 바꾸는 것을 신규 디자인으로 삼지 않는다.
- 고정 특징은 2~3개로 충분하다. 그중 하나는 얼굴의 식별점으로 삼는다. 장식적 재질·복잡한 해부 비율·미세 비대칭을 모두 강제하지 않는다. 눈썹/눈꺼풀/입/볼과 몸의 자세로 감정을 읽을 수 있게 한다.
- 캐릭터가 왜 함께 다니는지, 서로 무엇을 오해하는지, 어떻게 화해하는지 한 문장씩 정한다. 모두 착하고 능숙하기만 한 팀은 피한다.
- 얼굴과 주연을 크게 보여주는 시트가 우선이다. 작은 인물도 얼굴 확대를 둔다. 똑같은 미소 대신 망설임·억울함·놀람·집중·안도의 차이를 설계한다.
- 시트는 정체성 참고자료다. 그 시트의 아이보리 배경·정면 포즈·균일한 조명을 만화에 그대로 복사하지 않는다.

## 생성 전 기획 — 예측문을 읽고 빈칸을 채운다
먼저 `context/forecasts/CHARACTER_DESIGN_ANALYSIS.md`를 매번 읽는다. 당일에 맞는 원칙 3개와 독립적으로 적용한 설계를 날짜별 캐릭터 문서에 기록한다. 유명 캐릭터 이름/이미지는 생성 프롬프트에 전달하지 않는다.
기획 결과와 완성된 생성 프롬프트를 `context/forecasts/characters-YYYY-MM-DD.md`에 함께 저장한다. 아래 문서 전문을 무작정 보내는 대신, 기획 후 하단 템플릿의 변수를 실제 값으로 치환한다.

- 오늘의 미래 갈등 한 문장: 기술명이 아니라 생활 속 선택/불편/가능성으로 표현.
- 팀의 공동 목표와 서로 다른 해결 방식. 2~3명, 역할을 매일 큰 수호자/중간 기술자/작은 길잡이로 고정하지 않는다.
- 각 인물: 이름, 바라는 것, 장점, 일을 꼬이게 하는 약점, 약점이 드러나는 행동, 친구에게 도움받는 순간.
- 외형: 서로 다른 실루엣·무게중심·크기·움직임. 색과 소품을 빼도 구별되도록 한다. 귀여움은 큰 눈만이 아니라 자세·망설임·노력·관계에서 만든다.
- 각 인물의 고정 특징은 3개 이내로 선명하게. 얼굴 위치, 팔다리 개수, 부착 위치, 좌우 비대칭의 방향, 몸/머리 비율을 명시. 장식이 신체 일부인지 탈착 소품인지 구분.
- 얼굴 없는 사물에 눈만 붙이기, 모든 캐릭터를 같은 봉제인형 재질로 만들기를 기본값으로 삼지 않는다. 재료감은 이야기에 필요한 만큼 선택하되 팀의 그림체는 통일.
- 시트에 보일 협력 사건 1개: 목표 → 구체적인 장애 → 서로 다른 행동 → 도움/반응. 캐릭터별 손·발·몸이 무엇과 접촉하는지 적는다.
- 3개월/6개월/1년/5년을 관통할 행동 아이디어를 문서에 기획하되, 시트에는 가장 대표적인 한 사건만 넣는다. 시간대별 의상은 바꿀 수 있어도 몸과 얼굴의 고정 특징은 유지.
- 인기 캐릭터에서 빌릴 것은 작은 크기에서의 인지성·간결한 형태·성격 대비 같은 일반 원칙뿐. 특정 캐릭터/작가/브랜드의 스타일 이름이나 외형 조합은 프롬프트에 넣지 않는다. 창작성·독점권 보장은 주장하지 않는다.

## 이미지 도구에 보낼 완성 템플릿

Create ONE production-ready original character model sheet for a Korean future-scenario picturebook.
This is a usable identity-and-acting reference, not a decorative poster or a finished story page.

STORY FOUNDATION
Forecast date: {{DATE}}.
Human-scale future tension: {{FUTURE_TENSION}}.
Shared team goal: {{TEAM_GOAL}}.
These are fictional protagonists exploring possible futures, not mascots of real companies.

CAST — use these exact designs consistently in every view
{{For EACH of 2–3 characters insert:
Name / narrative role / desire / strength / comic vulnerability.
Body silhouette and center of gravity; head-to-body ratio; limb count and attachment positions.
Face geometry and eye/mouth placement. Two or three memorable fixed identity features, including distinctive facial geometry.
Named muted colors assigned to specific body regions; material finish.
Intrinsic anatomy versus removable prop; exact anatomical left/right for asymmetric features.
Signature movement and how another character helps them.}}
Relative standing heights: {{HEIGHT_RATIOS}}.
Avoid identical faces, identical body shapes, and props that are the only way to identify a character.

LAYOUT — landscape, generous separation, ivory background
Top approximately 55% (flexible, readability first): one clearly separated character column per character. Each column has a large full-body
three-quarter hero view and smaller FRONT, SIDE, BACK neutral model views. Match anatomy, proportions,
color placement and attachment points across views. Feet on a shared baseline for size comparison.
Show entire bodies without cropping. Keep props from hiding key silhouette features.
Middle approximately 25%: three acting poses per character: intent/curiosity, effort/frustration, and relief/affection.
Include readable facial close-ups, especially for the smallest character. Use whole-body acting: leaning weight, bent knees, counterbalance, gaze and mouth changes. Do not repeat the same smile.
{{CHARACTER_SPECIFIC_ACTING_POSES}}
Bottom approximately 20%: ONE compact cooperative scene showing {{COOPERATIVE_INCIDENT}}.
{{EXACT_CONTACTS_AND_REACTIONS}}
The team must physically affect the shared object and react to each other.
No spectators lined up, no identical smiles, no three unrelated solo actions.

ART DIRECTION
Warm, sophisticated, charming storybook illustration with {{CHOSEN_MATERIAL_LANGUAGE}}.
Soft muted color accents, clear readable silhouettes, thin brown lines, restrained texture.
Retain appealing distinctive details without tiny decorative clutter. No neon, heavy black outlines,
harsh vignette, glossy toy advertising, busy scenery, or oversized title consuming the sheet.
Names in short clear Korean labels: {{NAMES}}. Only brief view labels and a small palette strip;
no paragraphs of lore or dense captions inside the image. Keep important design information visual.
Design entirely original creatures. No known-character lookalikes, real logos, or named franchise styles.
Priority when space is tight: identity consistency and readable bodies > acting > decorative details.
Return one final model sheet.

## 다음 단계 입력 계약
- 시트 결과와 이 설정 문서가 다음 미래 그림책의 정체성 기준이다. 이미지 도구의 실제 참조 입력으로 시트를 전달한다.
- 다음 장면 프롬프트에는 고정 특징/크기 비율과 장면별 접촉·반응을 함께 전달한다. 미래 기술 소품 때문에 몸까지 로봇으로 바꾸지 않는다.
- 프롬프트 개선만으로 완벽한 일관성을 보장했다고 말하지 않는다.
- 별도 육안/비전/OCR 품질 검수 및 검수 재생성은 추가하지 않는다. 시트를 다음 생성 입력으로 확인하는 행위와 품질 검수는 구분한다.
