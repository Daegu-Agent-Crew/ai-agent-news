# 미래예측 캐릭터 시트 생성 프롬프트 v2

적용: 매일 미래편 신규 캐릭터 시트. 뉴스편 틈새 탐사대에는 적용하지 않는다.
목표: 장식용 마스코트 소개장이 아니라, 다음 이미지 생성에 실제 참조할 수 있는 **연기 가능한 캐릭터 모델 시트**.

## 생성 전 기획 — 예측문을 읽고 빈칸을 채운다
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
Face geometry and eye/mouth placement. Exactly three memorable fixed identity features.
Named muted colors assigned to specific body regions; material finish.
Intrinsic anatomy versus removable prop; exact anatomical left/right for asymmetric features.
Signature movement and how another character helps them.}}
Relative standing heights: {{HEIGHT_RATIOS}}.
Avoid identical faces, identical body shapes, and props that are the only way to identify a character.

LAYOUT — landscape, generous separation, ivory background
Top 55%: one clearly separated character column per character. Each column has a large full-body
three-quarter hero view and smaller FRONT, SIDE, BACK neutral model views. Match anatomy, proportions,
color placement and attachment points across views. Feet on a shared baseline for size comparison.
Show entire bodies without cropping. Keep props from hiding key silhouette features.
Middle 25%: three acting poses per character: intent/curiosity, effort/frustration, and relief/affection.
Use whole-body acting: leaning weight, bent knees, counterbalance, gaze and mouth changes.
{{CHARACTER_SPECIFIC_ACTING_POSES}}
Bottom 20%: ONE compact cooperative scene showing {{COOPERATIVE_INCIDENT}}.
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
