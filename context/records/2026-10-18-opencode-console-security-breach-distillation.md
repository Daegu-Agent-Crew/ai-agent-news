# OpenCode, 콘솔 사용자 1.4% 영향 보안 침해 공지 — "대규모 증류(distillation) 공격 관련"

## 메타데이터
- **원문 URL**: https://twitter.com/opencode/status/2111516673953935833
- **소스**: OpenCode 공식 X 계정
- **발행일**: 2026-10-17
- **수집일**: 2026-10-18
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [opencode, security-breach, distillation-attack, api-keys, coding-agent]
- **소스 권위**: official
- **교차 확인**: 2
- **중요도**: ⭐⭐⭐⭐⭐
- **중요도 산정**: 기본 1 + official 2 + 교차 확인 2개(+1) + HN 653pt(+1) = 5
- **신선도**: fresh

## 핵심 요약
> OpenCode는 공식 X 계정에서 "대규모 증류 공격"과 관련된 보안 침해가 발생해 OpenCode Console 사용자의 1.4%가 영향을 받았고, 해당 사용자에게 이메일로 통지했다고 밝혔다. 회사는 사건이 진행 중이라 세부 사항은 공유할 수 없다고 했다.

## 번역 (한국어)
오픈소스 AI 코딩 에이전트 OpenCode가 10월 17일(UTC) 공식 X 계정을 통해 "어젯밤 대규모 증류(distillation) 공격과 관련된 보안 침해가 있었다"고 공지했다. 회사에 따르면 이번 침해는 OpenCode Console 사용자의 1.4%에 영향을 미쳤다.

OpenCode는 영향을 받은 사용자 전원에게 당일 아침 이메일로 통지했다고 밝혔다. 다만 "사건이 진행 중이라 현재로서는 더 많은 세부 사항을 공유할 수 없다"고 덧붙였다.

공식 공지보다 약 2시간 앞서 보안 연구자 Matt Johansen(@mattjay)은 X에 "확인됨. OpenCode 해킹. 키 도난. 고객들에게 키 폐기(revoke)를 안내하고 있다"고 게시했다. 이 공지는 Hacker News에서 "OpenCode Hacked: User credentials leaked"라는 제목으로 650점 이상을 기록했다(제목은 HN 제출자가 붙인 것).

## 왜 중요한가?
AI 코딩 도구는 사용자의 API 키와 코드에 직접 접근하기 때문에, 이런 도구가 뚫리면 사용자 계정으로 비싼 AI 사용료가 청구되거나 데이터가 새어나갈 수 있습니다. OpenCode를 쓰고 있다면 연결된 API 키를 새로 발급받는 것이 안전합니다.

## 심층 분석

### 기술 의미
"증류 공격"은 통상 타인의 모델 접근 권한을 이용해 대량의 출력을 뽑아 자체 모델 학습에 쓰는 행위를 가리키며, 공지 문맥상 탈취된 키가 그런 대량 호출에 쓰였을 가능성이 있다(→ 분석, 가설). OpenCode Console은 여러 모델 공급자 키를 한곳에서 관리하는 구조여서, 단일 침해가 여러 공급자 자격 증명 노출로 이어질 수 있다(→ 분석). 공식 공지는 침해 경로·노출 데이터 범위를 밝히지 않았으므로 원인은 아직 확인되지 않았다.

### 업계 영향
코딩 에이전트가 모델 키를 중개하는 "게이트웨이" 역할을 맡으면서 공격 표면이 개별 개발자 PC에서 중앙 콘솔로 이동하고 있다(→ 분석). 같은 주 Perplexity가 "자격 증명을 VM 밖에서 주입"하는 SPACE를 공개한 것과 대비되며, 비밀값을 에이전트·클라이언트 측에 두지 않는 설계가 업계 표준 요구로 굳어질 수 있다(→ 분석). 사용자 입장에서는 키 폐기·사용량 모니터링이 즉시 필요한 조치다.

### 관련 프로젝트
- OpenCode / OpenCode Console
- Perplexity SPACE (자격 증명 네트워크 계층 주입)

### 관련 뉴스
- [OpenCode 2.0 백그라운드 서비스·코드 모드](../records/2026-10-15-opencode-2-0-background-service-code-mode.md) — 사흘 전 발표된 OpenCode 2.0
- [Perplexity SPACE 오픈소스 공개](../records/2026-10-18-perplexity-space-firecracker-sandbox-open-source.md) — 비밀값을 게스트 밖에 두는 샌드박스 설계

## 원문 발췌
> "We had a security breach last night related to a large scale distillation attack that impacted 1.4% of OpenCode Console users"
> "We have notified them all this morning via email"
> "The incident is ongoing so we cannot share more details at this point"
> (@mattjay) "Confirmed. OpenCode hacked. Keys stolen. Telling customers to revoke."

## 수집 노트
- **선정 이유**: 공식 계정의 1차 공지에 독립 보안 연구자 게시물이 교차되고 HN 653pt 반응이 있어, 오늘 후보 중 산정 점수가 가장 높음.
- **제외 후보**: HN 제목의 "User credentials leaked" 표현 — 공식 공지에 없는 단어라 사실로 채택하지 않음. Meta 상업 약관 크롤링 조항 삭제(TechCrunch) — 에이전트 관련성이 낮아 제외.
