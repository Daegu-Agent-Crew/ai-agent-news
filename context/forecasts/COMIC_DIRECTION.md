# 미래예측 만화 연출 v2 — 2026-11-23 정보 전달 피드백 반영

## 진단 근거
11/22 결과는 네 구역 모두 비슷한 중경·온화한 표정·갈색 계열이며, 작은 인물은 정면으로 서 있는 자세가 반복된다. 큰 인물은 누르기/받치기에 치우치고 간판 설명이 사건보다 앞선다. 기획 문서도 반복 역할과 장식 특징에 많은 분량을 쓴다. 생성 모델 자체의 저하를 입증한 것은 아니다.

## 생성 전 필수 콘티
네 시점은 유지하되 '독립 전시실 네 칸'이 아닌 같은 주인공의 선택이 이어지는 만화로 만든다. 날짜별 예측문에 콘티와 최종 이미지 프롬프트를 저장한다.
- 한 문장 로그라인: 누가 무엇을 원하지만 무엇 때문에 막히는가?
- 6~8컷을 권장하되 가독성에 따라 조정. 시점마다 1~2컷. 도입→시도→예상 밖 결과→친구의 대응→선택의 결말. 근거 없는 미래를 확정 사실로 만들지 않는다.
- 매 컷: 시점/주인공/목적/보이는 행동/새로 달라지는 상황/짧은 대사/화면 크기를 기획. 직전 컷과 상황이 같으면 합치거나 삭제한다.
- 큰 환경 컷 1개, 얼굴·손의 클로즈업, 움직이는 전신 컷, 마지막 넓은 분기 장면을 섞는다. 모든 컷에 모두 등장시키지 않는다. 인물의 크기를 작게 고정하지 않는다.
- 대사는 설명문 낭독이 아니라 욕구·의견 차이·선택을 표현한다. 컷당 말풍선 1~2개, 한 풍선은 짧게. 대사는 감정과 선택을, 별도 해설 상자는 예측의 의미·원인·조건을 전달한다. 핵심 설명을 외부 문서에만 남기지 않는다.
- 5년 장면은 2개 이상의 조건부 가능성을 결말에 표현한다. 이미지 전체에 '미래 시나리오 · 확정된 사실 아님'을 한 번 명확히 표시. 매 컷 같은 경고·제목을 반복하지 않는다.
- 협력은 받치기/고치기/비추기만이 아니다. 설득, 거절, 숨기기, 되돌리기, 교환, 양보, 실수 수습 등에서 사건에 맞는 행동을 선택한다.
- 배경은 생활 변화가 보이는 공간으로 설계한다. 모두 기계 공방·시계탑·지하 단면으로 만들지 않는다. 사건에 쓰이는 소품은 풍부하게, 무관한 장식은 줄인다.
- 눈의 편안함은 모든 색을 갈색으로 만드는 것이 아니다. 낮은 채도 안에서 따뜻한 인물/차가운 배경, 밝기와 초점 차이로 시선을 안내한다. 중요한 얼굴과 행동은 또렷하게, 배경은 한 단계 절제한다. 네온·두꺼운 검정선은 피한다.

## 이미지 안의 정보 전달 — 필수 텍스트 설계
11/23 그림은 짧은 대사와 은유적 소품만으로 실제 예측을 이해하기 어려웠다. 이전 지침의 “조건은 문서에, 이미지에는 핵심 변화만”을 폐기한다. 만화만 읽어도 무엇이 왜 달라질 수 있는지 이해하도록 만든다.
- 상단에 **오늘의 출발점** 1~2문장: 예측을 촉발한 뉴스의 사실/보도 내용을 요약한다. 회사 주장·제안·실험을 확정된 성과로 바꾸지 않는다.
- **각 시점에 해설 상자 하나**: 예상 변화 + 뉴스에서 그 변화로 이어지는 이유 + 핵심 조건/한계. 2~3개의 짧은 문장, 대략 70~110자를 출발점으로 하되 내용과 가독성에 맞춘다. 5년은 A/B 가능성을 함께 설명한다.
- 말풍선은 해설을 반복하지 않고 인물의 감정·갈등·결정을 담는다. “구독료 vs 전기료” 같은 표지판만으로 설명을 대체하지 않는다.
- 어려운 용어는 처음 한 번 쉬운 말로 풀어 쓴다. 숫자는 의미·단위·대상과 현재 수치/미래 가정 구분이 있을 때만 사용한다. 근거 없는 장식 숫자·불필요한 수치를 넣지 않는다.
- 작은 모바일 화면을 기준으로 해설 자리를 콘티 단계부터 확보한다. 밝은 단색 해설 상자와 충분한 글자 크기·여백을 사용한다. 글을 맞추려고 작게 줄이거나 얼굴·손·핵심 행동 위에 덮지 않는다. 장식과 중복 대사를 먼저 줄인다.
- 상세 출처와 긴 분석은 문서에 남기되, 필수 원인과 조건은 이미지에도 남긴다. 이미지용 한국어 문구를 날짜별 예측문에 확정해 저장하고 생성 프롬프트에 그대로 전달한다. 생성 후 별도 검수는 추가하지 않는다.

### 11/23 소재로 쓴 해설 예시 (향후 날짜에 그대로 재사용 금지)
- **3개월**: AI 발전 속도를 재는 공통 지표 논쟁이 커질 수 있다. 같은 측정값이 서로 다른 모델에서도 비슷한 능력을 뜻하는지 확인해야 한다.
- **6개월**: 작은 AI가 차 안에서 판단하면 통신 의존을 줄일 수 있다. 다만 안전성 입증이 필요하고, 학습·데이터센터 전력 수요까지 줄어드는 것은 아니다.
- **1년**: 집에서 AI를 돌리는 선택이 늘 수 있다. 구독료뿐 아니라 장비값·전기료·관리 부담까지 포함한 비용과 편의성이 확산을 좌우한다.
- **5년**: 공통 기준에 합의하면 지역 간 AI 서비스 연결이 쉬워질 수 있다. 합의하지 못하면 국가마다 다른 규칙 때문에 시장이 나뉠 수 있다.

## 생성 프롬프트에 반영할 핵심
Create a sequential Korean story comic, not a four-room explanatory infographic.
Use the attached character sheet for identity ONLY; invent expressive poses, shot sizes and lighting.
Follow the supplied panel-by-panel storyboard. Make actions cause visible consequences across panels.
Alternate establishing shot, expressive close-up, dynamic full-body action and a wider final branching scene.
Characters have conflicting desires and help each other through choices, not identical smiles and static teamwork.
Maintain distinctive faces, anatomy and relative scale, but never copy the same reference-sheet stance into each panel.
Balance character appeal and causal storytelling with self-contained explanatory captions; reduce decorative machinery, not essential information.
Use a controlled muted palette with clear focal contrast, not uniform sepia. Keep Korean dialogue brief.
Include a brief current-news premise and one readable Korean narrator box for EACH horizon explaining the predicted change, its causal reason and a key condition. Use the supplied exact Korean copy. Dialogue carries emotion; captions carry information. Reserve clear caption space without shrinking text or covering faces and actions. Never replace explanations with cryptic labels or orphan numbers.
Preserve all four dated horizons and label the whole work as a conditional future scenario.

새 캐릭터 시트를 실제 이미지 참조로 전달하는 규칙은 유지한다. 별도 생성 후 품질 검수·OCR·QC_PASS·검수 재생성은 추가하지 않는다. 이번 피드백의 수동 진단을 정기 검수로 바꾸지 않는다.
