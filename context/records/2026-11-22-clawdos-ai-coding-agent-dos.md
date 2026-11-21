# ClawDOS – An AI coding agent for DOS

## 메타데이터
- **원문 URL**: http://ricapar.net/ClawDOS/
- **소스**: ricapar.net (개인 프로젝트 페이지, HN 프론트페이지)
- **발행일**: 2026-11-21
- **수집일**: 2026-11-22
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [Claude, coding-agent, DOS, retro-computing, harness]
- **소스 권위**: community
- **교차 확인**: 2
- **중요도**: ⭐⭐
- **신선도**: fresh

## 핵심 요약
> ClawDOS는 실제 IBM PC 5160(8088 4.77MHz, 640KB RAM) 위의 DOS에서 돌아가는 AI 코딩 에이전트 하네스다. HARNESS.EXE 176KB 단일 프로그램이 Claude Messages API를 직접 호출한다.

## 번역 (한국어)
ClawDOS는 DOS용 AI 코딩 에이전트다. IBM PC XT, 즉 4.77MHz 8088 CPU와 640KB RAM, CGA 카드 위에서 실행된다.

제작자는 어린 시절 첫 컴퓨터였던 IBM PC에 대한 추억으로, 오래된 기술과 새 기술의 교차점을 실험했다. 흥미롭게도 이 리포지토리의 100%는 Claude가 작성했다. 제작자 박스 안의 글을 제외한 전부다.

하네스는 PC 자체에서 돈다. HARNESS.EXE는 176KB짜리 DOS 프로그램으로, Claude Messages API를 스스로 말한다. 요청을 작성하고, 스트리밍 응답을 파싱하고, 도구를 실행하고, 모든 대화를 자기 디스크에 보관한다. 8088은 TLS를 제외한 모든 일을 처리하며, TLS는 "브리지" PC가 대신 담당한다.

한 통의 메시지("PRIMES.C를 작성하고 Turbo C로 컴파일·실행해줘")만으로 ClawDOS는 소스를 쓰고 컴파일·링크·실행을 한 번의 도구 호출로 수행한다. 엔터를 누른 뒤 64초 만에 화면에 답이 뜬다. 컴파일·링크·실행에 26초가 쓰였다.

빌드 시 하네스는 상태를 저장하고 메모리를 비워 Turbo C에게 기계를 넘긴다. 대화 중에 저장한 메모(C:\MEMORY)를 다음 대화에서 다시 열어 어디까지 했는지 이어 간다. 타이머 인터럽트 훅으로 CGA 비디오 메모리를 복사해 320x200 4색 PNG 스크린샷을 만들어 도구 결과에 첨부하기도 한다.

## 왜 중요한가?
AI 코딩 에이전트의 핵심이 클라우드 지능이지 클라이언트 성능이 아니라는 것을 극단적으로 증명한다. 40년 된 컴퓨터도 API만 붙으면 개발 파트너가 된다. 에이전트 하네스가 얼마나 가벼울 수 있는지의 상한선을 보여주는 참고 사례다.

## 심층 분석

### 기술 의미
176KB DOS 실행파일이 스트리밍 API 파싱, 도구 실행, 디스크 상태 유지, 화면 캡처까지 수행한다는 점에서 하네스 설계의 최소성을 보여준다. (→ 분석) TLS만 외부 브리지에 위임하는 구조는 저사양 기기 에이전트의 현실적 패턴이 될 수 있다. 빌드 중 메모리를 내주고 상태를 저장 후 복귀하는 설계는 극단적 자원 제약 하의 작업 스케줄링 사례다.

### 업계 영향
AI 에이전트가 클라우드 API 중심이라는 점을 역설적으로 부각해, 클라이언트는 얇게 만들 수 있다는 설계 철학을 확산시킨다. 레트로 컴퓨팅 커뮤니티와 에이전트 개발 커뮤니티가 만나는 이색 교차점이지만, IoT·임베디드 분야의 "씬 클라이언트 에이전트" 논의에 참고 사례로 쓰일 수 있다.

### 관련 프로젝트
- GitHub 리포지토리: https://github.com/Ricapar/ClawDOS

### 관련 뉴스
- 관련 기사 없음 (동일 카테고리 최근 수집분에서 직접 매칭 없음)

## 원문 발췌
> "An AI coding agent for DOS. It runs on an IBM PC XT: an 8088 at 4.77 MHz, 640K of RAM, a CGA card."
> "100% of this repo is written by Claude, with the exception of the text within this box."
> "HARNESS.EXE is a 176 KB DOS program that speaks the Claude Messages API itself: it writes the requests, parses the streamed reply, runs the tools and keeps every conversation on its own disk. The 8088 does everything but TLS."

## 수집 노트
- **선정 이유**: HN 프론트페이지 유의미 반응(50pt+ 큐) + 에이전트 하네스 최소성의 극단 사례로 기술적 참고 가치.
- **제외 후보**: hnrss "Verification files for the Lean proof of the Riemann Hypothesis" — 수학 증명으로 에이전트 무관. "Astra 6.2 and Sol 6.2 flop at Simple Bench" — 벤치마크 사이트 단일 소스라 사실 검증 부족.
