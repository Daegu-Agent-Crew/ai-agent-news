# Figma, 에이전트용 디자인 규칙 문서 'Figma Specs' 공개 — 코드 레이어 오픈 베타, MCP 20여 개 도구 추가

## 메타데이터
- **원문 URL**: https://techcrunch.com/2026/10/14/figma-announces-new-features-to-define-how-agents-work-on-its-platform/
- **소스**: TechCrunch
- **발행일**: 2026-10-14
- **수집일**: 2026-10-16
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [figma, figma-specs, design-system, mcp, code-layers, payload-cms, agent-context]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 1개(0) + 반응 규모 미확인(0) = 2
- **신선도**: fresh

## 핵심 요약
> TechCrunch에 따르면 Figma가 인도 첫 Config 행사에서 디자인 언어를 마크다운으로 정의해 팀과 에이전트가 참조하게 하는 'Figma Specs'를 발표했다. 코드 레이어를 오픈 베타로 확대했고, MCP로 OpenCode·Dia·Grok Bot·Sarvam 등 20개 이상 도구를 새로 지원한다.

## 번역 (한국어)
디자인 플랫폼 Figma는 인도에서 처음 연 Config 행사에서 회사의 디자인을 정의하는 마크다운 기반 편집기, 디자인·코드 라이브러리 연동, 헤드리스 CMS Payload 통합을 발표했다. TechCrunch는 이 기능들의 목표가 자사 및 서드파티 에이전트가 AI로 작업할 때 브랜드 디자인 규칙을 더 잘 지키도록 하는 것이라고 전했다.

새 기능 Figma Specs는 디자인 언어를 간단히 정의하는 마크다운 편집기로, 팀과 에이전트 모두의 참조 문서 역할을 한다. 독립 파일로도, 캔버스 안에서도 존재할 수 있고, 캔버스 요소·FigJam 다이어그램·코드 레이어·디자인을 참조하거나 임베드할 수 있다. 에이전트는 이 중앙 시스템을 참조해 규칙을 따른다.

Figma는 지난주 캔버스 내 에이전트를 더 많은 사용자에게 열었으며, AI의 비결정적 특성 때문에 더 예측 가능한 결과로 이끄는 도구를 제공한다고 설명했다. 6월 비공개 베타였던 코드 레이어도 오픈 베타로 전환해, 에이전트에게 디자인을 코드로 바꾸거나 코드 일부를 수정하도록 요청할 수 있다.

Figma 최고디자인책임자 Loredana Crisan은 TechCrunch에 "오늘날 코드는 17배 더 많이 생산되지만 릴리스는 1.3배에 그친다"며 상당수 코드가 출시용이 아니라 제품을 탐색하기 위해 만들어진다고 말했다. Figma는 Payload 다운로드가 12개월간 6배 늘었고, 인도가 미국 외 최대 사용자 시장이라고 밝혔다.

## 왜 중요한가?
AI 에이전트가 디자인을 만들 때 회사 브랜드 규칙을 "읽고 따르게" 하는 공식 문서 형식이 생겼습니다. 사람에게 주던 디자인 가이드를 이제 에이전트에게도 준다는 것은, 에이전트가 팀의 정식 구성원처럼 일하기 시작했다는 뜻입니다.

## 심층 분석

### 기술 의미
Figma Specs는 코딩 에이전트의 AGENTS.md·CLAUDE.md 같은 '에이전트용 규칙 파일' 패턴을 디자인 영역으로 옮긴 것으로 볼 수 있다(→ 분석). 마크다운을 택한 것은 사람과 에이전트가 같은 문서를 읽게 하려는 설계로 읽힌다(→ 분석). 에이전트가 Specs를 얼마나 잘 준수하는지에 대한 수치는 기사에 없다.

### 업계 영향
비결정적 AI 출력을 '규칙 문서 + 컨텍스트 관리'로 통제하려는 접근이 개발 도구에서 디자인 도구로 확산되고 있다(→ 분석). MCP로 20여 개 외부 도구를 지원하면서 Figma는 디자인 시스템을 여러 에이전트가 공유하는 허브로 포지셔닝하고 있다(→ 분석). Crisan의 "코드 17배, 릴리스 1.3배" 발언은 AI 코딩 생산성 논쟁에서 인용될 만한 데이터 포인트지만 출처·산정 방식은 공개되지 않았다(→ 분석).

### 관련 프로젝트
- Figma Specs, Figma Make, 코드 레이어(오픈 베타)
- Figma MCP 서버 — OpenCode, Dia, Grok Bot, Sarvam 등
- Payload (오픈소스 헤드리스 CMS)

### 관련 뉴스
- [Shopify WebMCP 체크아웃](../records/2026-09-28-shopify-webmcp-checkout-ai-agents.md) — MCP로 에이전트 접점을 여는 플랫폼 사례
- [하네스 vs 프레임워크 vs MCP](../records/2026-09-15-agent-harness-vs-framework-vs-mcp.md) — MCP의 역할 정리

## 원문 발췌
> "The company debuted a new feature called Figma Specs, which is a markdown editor that lets users define their design language in a simple way. The document can serve as a reference for teams and agents while designing in Figma."
> "The company said it is also supporting over 20 new tools with its MCP, including Open Code, Dia, Grok Bot, and Indian AI startup Sarvam."
> "There are 17-times more lines of code being produced today than in the past. But when you're looking at releases, only 1.3-times more releases."

## 수집 노트
- **선정 이유**: 대형 SaaS가 에이전트 전용 규칙 문서 형식을 도입한 사례로, 에이전트 컨텍스트 관리라는 주제 연관성이 높아 선정.
- **제외 후보**: Bluesky Attie 앱 확장(TechCrunch) — 소비자용 생성 앱으로 에이전트 관련성 낮음. Google Universal Cart 미국 출시 — 쇼핑 기능 확장, 에이전트 측면 정보 부족.
