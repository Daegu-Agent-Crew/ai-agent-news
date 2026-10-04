# DeepSeek, 오픈소스 에이전트 하네스 'DeepSeek Harness' v0.2 공개 — macOS·Windows 공식 데스크톱 앱 탑재

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/10/03/deepseek-harness-v0-2-brings-official-desktop-apps-to-its-open-source-agent-harness/
- **소스**: MarkTechPost (본문에서 DeepSeek 릴리스 노트·36Kr 실사용기 인용)
- **발행일**: 2026-10-03
- **수집일**: 2026-10-05
- **수집자**: 레노버
- **카테고리**: framework
- **태그**: [deepseek, agent-harness, dsh, open-source, desktop-app, plugin]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **신선도**: fresh
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 1개 0 + 반응 규모 미확인 0 = 2

## 핵심 요약
> MarkTechPost에 따르면 DeepSeek은 MIT 라이선스 오픈소스 에이전트 하네스 DeepSeek Harness(dsh)의 v0.2 프리뷰와 함께 macOS(Apple silicon)·Windows(64비트)용 공식 데스크톱 앱을 공개했다. 모델 어댑터·도구 레지스트리·에이전트 루프까지 모두 플러그인으로 교체 가능한 구조다.

## 번역 (한국어)
DeepSeek이 오픈소스 에이전트 하네스 DeepSeek Harness(dsh)의 공식 데스크톱 앱을 내놓았다. 앱은 v0.2 프리뷰와 함께 배포되며 macOS(Apple silicon)와 Windows(64비트) 설치 파일이 제공된다. deepseek.com/harness에서 내려받거나 `npx @deepseek-ai/dsh web`으로 실행할 수 있고, DeepSeek은 앞으로 호환성을 깨는 변경이 이어질 것이라고 경고했다.

v0.2는 코딩뿐 아니라 일상 업무도 겨냥한다. 사무·개발용 도구가 기본 탑재되고, 플러그인 설치·설정·활성화를 관리하는 페이지, 생성 파일과 코드 변경을 미리 보는 우측 사이드바가 추가됐다. 문서·스프레드시트·PDF를 보내 차트나 슬라이드를 요청할 수 있으며, 반복 프롬프트를 예약 실행하는 'Automation Task' 플러그인도 포함됐다. 데스크톱 빌드에 dsh 명령이 번들돼 별도 Node.js·pnpm 설치가 필요 없다.

dsh는 2026년 8월 MIT 라이선스로 처음 공개됐다. MarkTechPost는 모델 어댑터, 도구 레지스트리, 에이전트 루프가 모두 플러그인이어서 어느 층이든 교체할 수 있다고 설명했다. DeepSeek 모델 전용이 아니며 서드파티 제공자와 OpenAI 호환 엔드포인트도 지원한다. 저장소는 GitHub 스타 24만, 포크 2만 9천 개를 넘었다고 기사는 전했다.

세션은 Standard(기본), Creator(채팅으로 설명하면 에이전트가 플러그인을 직접 만들어 설치), PTC(별도 프로세스에서 Node 코드로 도구 호출), Minimal(DeepSeek이 벤치마크에 쓰는 경량 루프) 4가지 모드로 실행된다. v0.2.1-alpha.1 빌드에는 실험적인 'Claude Code Mods' 호환 계층이 추가됐으나, DeepSeek은 완전한 호환을 약속하지는 않는다고 기사는 전했다.

## 왜 중요한가?
Claude Code·Codex처럼 'AI가 내 컴퓨터에서 직접 일하게 해주는 프로그램'을 DeepSeek이 무료 오픈소스로, 그것도 설치형 앱으로 내놨다는 뜻입니다. 특정 회사 모델에 묶이지 않고 기능을 플러그인으로 갈아끼울 수 있어, 개인·기업이 자기 입맛대로 에이전트를 조립하는 흐름이 빨라질 수 있습니다.

## 심층 분석

### 기술 의미
에이전트 루프 자체까지 플러그인으로 만든 설계는 '하네스가 곧 제품'이라는 최근 흐름을 극단까지 밀어붙인 형태다(→ 분석). Creator 모드는 에이전트가 자기 확장 기능을 스스로 작성·설치하는 구조로, 편리하지만 플러그인 검증·권한 관리라는 새 보안 과제를 만든다(→ 분석). 또한 기사에 따르면 DeepSeek은 API 변경 로그의 Code Agent 벤치마크를 'Minimal 모드'에서 측정했다고 밝혀, 하네스가 평가 재현성의 기준점 역할도 한다.

### 업계 영향
Claude Code Mods 호환 계층 실험은 경쟁 하네스의 확장 생태계를 흡수하려는 시도로 읽힌다(→ 분석). OpenAI 호환 엔드포인트를 지원하므로 로컬 모델이나 타사 모델 사용자에게도 대안이 된다. 다만 개발자 프리뷰 단계이고 호환성을 깨는 변경이 예고돼 있어, 기업 도입은 GA 이후가 현실적이다(→ 분석).

### 관련 프로젝트
- [DeepSeek Harness 다운로드](https://deepseek.com/harness)
- `npx @deepseek-ai/dsh web`

### 관련 뉴스
- [DeepSeek DSec 샌드박스 인프라](../records/2026-09-26-deepseek-dsec-sandbox-infrastructure.md) — DeepSeek의 에이전트 실행 인프라
- [Earendil Pi 1.0 에이전트 하네스](../records/2026-10-01-earendil-pi-1-0-agent-harness.md) — 경쟁 오픈 하네스
- [하네스 vs 프레임워크 vs MCP](../records/2026-09-15-agent-harness-vs-framework-vs-mcp.md) — 하네스 개념 정리

## 원문 발췌
> "DeepSeek has released an official desktop app for DeepSeek Harness (dsh), its open-source agent harness. The app ships with the v0.2 preview. Installers cover macOS (Apple silicon) and Windows (64-bit)."
> "The model adapter, tool registry and agent loop are all plugins. Any layer can be replaced."
> "The repository has passed 240,000 GitHub stars and 29,000 forks."

## 수집 노트
- **선정 이유**: 24시간 후보 중 에이전트 하네스(본 아카이브 핵심 주제)를 직접 다루는 유일한 출시 소식이며, 주요 AI 매체가 릴리스 노트를 근거로 상세 보도함.
- **제외 후보**: Google TEE 기반 연합학습(MarkTechPost) — 에이전트와의 관련성이 낮음. Qwen 3.8 Flash Next 소비자 GPU 실행(HN, 개인 GitHub) — 단일 커뮤니티 제보로 성능 주장 미검증.
