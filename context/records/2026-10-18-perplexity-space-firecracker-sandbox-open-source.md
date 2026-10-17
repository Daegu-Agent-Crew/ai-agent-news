# Perplexity, 에이전트 샌드박스 SPACE 오픈소스 공개 — Firecracker microVM, 레드팀 탈출 0/108

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/10/16/perplexity-open-sources-space-firecracker-microvm-sandbox-ai-agents/
- **소스**: MarkTechPost
- **발행일**: 2026-10-16
- **수집일**: 2026-10-18
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [perplexity, sandbox, firecracker, microvm, agent-security, open-source]
- **소스 권위**: major-media
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 1개(0) + 반응 미확인(0) = 2
- **신선도**: fresh

## 핵심 요약
> MarkTechPost에 따르면 Perplexity는 Perplexity Computer의 모든 작업을 실행하는 샌드박스 플랫폼 SPACE를 Apache 2.0으로 공개했다. 각 작업은 별도 Firecracker microVM에서 돌고, 자격 증명과 외부 트래픽은 VM 바깥에서 통제된다.

## 번역 (한국어)
Perplexity가 자사 Perplexity Computer의 모든 작업 뒤에서 돌아가는 샌드박스 플랫폼 SPACE(Sandboxed Platform for Agentic Code Execution)를 오픈소스로 공개했다. Rust로 작성됐고 릴리스 0.8.0이 공개 기준선이며, Apache 2.0 라이선스로 GitHub에 올라왔다. KVM·btrfs·Docker가 있는 Linux x86_64 호스트가 필요하며 macOS는 지원하지 않는다.

SPACE는 에이전트 작업마다 자체 게스트 커널을 가진 Firecracker microVM을 할당한다. 호스트의 샌드박스별 네트워크 게이트웨이가 모든 외부 연결에 송신(egress) 정책을 적용한다. 비밀값은 게스트 안으로 들어가지 않으며, Perplexity의 7월 엔지니어링 글에 따르면 자격 증명은 네트워크 계층에서 주입된다. 샌드박스는 실행·일시정지·중단(스냅샷)·삭제 4가지 상태를 오가며, 6시간 동안 활동이 없으면 자동으로 중단된다.

Perplexity는 이전 공급자 대비 생성 지연 중앙값이 185ms에서 60ms로, 90번째 백분위수가 447ms에서 89ms로 줄었으며 Computer 세션의 100%가 SPACE에서 돈다고 밝혔다.

레드팀 보고서 "Escaping SPACE: Part I"에서 Perplexity는 게스트 내 루트 권한을 가진 9개 모델로 216회 실험했다. 샌드박스 탈출은 108회 중 0회였지만, 부분 네트워크 설정에서는 수정 전 54회 중 11회 송신 정책 우회가 성공했다. Claude Opus 5.0, GPT-5.6 Sol, GPT-5.6 Cyber, Kimi K3가 DNS 스푸핑과 공유 CDN IP를 이용해 우회했다. Perplexity는 nftables 출발지 주소 검증과 TLS 종료 후 SNI·Host 허용목록 검사를 추가했고, 재시험에서는 검증된 우회가 없었다. 같은 팀이 시험한 타사 플랫폼 10곳 중 8곳에서 최소 1건의 네트워크 정책 우회가 나왔다.

## 왜 중요한가?
AI 에이전트가 코드를 실행할 때 쓰는 '격리된 방'을 실제 서비스에서 검증된 형태로 누구나 무료로 쓸 수 있게 공개했습니다. 특히 최신 AI들이 실제로 네트워크 차단을 뚫어냈다는 실험 결과는, 에이전트 보안이 이론이 아니라 현실 문제임을 보여줍니다.

## 심층 분석

### 기술 의미
비밀값을 게스트에 두지 않고 네트워크 계층에서 주입하는 구조는, 에이전트가 루트를 가져도 키를 읽을 수 없게 만드는 설계다(→ 분석). 최신 프런티어 모델들이 DNS 스푸핑·공유 CDN IP 같은 실전 기법으로 송신 정책을 우회했다는 결과는, 도메인 허용목록만으로는 부족하고 TLS 계층 검증이 필요하다는 근거가 된다(→ 분석). 모든 수치는 Perplexity 자체 보고 기준이며 독립 재현은 아직 없다.

### 업계 영향
E2B 같은 상용 샌드박스 시장에 운영 검증된 오픈소스 대안이 생겨 자체 호스팅 수요를 끌어갈 수 있다(→ 분석). 타사 10곳 중 8곳 우회 결과와 공급사 통보는, 샌드박스 공급자 간 보안 평가 기준 경쟁을 촉발할 수 있다(→ 분석). 같은 날 OpenCode 키 탈취 공지가 나와, 자격 증명 격리 설계의 실무적 가치가 부각된다(→ 분석).

### 관련 프로젝트
- Perplexity SPACE (Apache 2.0, Rust)
- Firecracker, E2B Runtime, microsandbox

### 관련 뉴스
- [Perplexity Photon Rust 검색 엔진](../records/2026-09-30-perplexity-photon-rust-retrieval-engine.md) — Perplexity의 앞선 인프라 공개
- [OpenCode 콘솔 보안 침해](../records/2026-10-18-opencode-console-security-breach-distillation.md) — 같은 날 자격 증명 탈취 사고
- [OpenAI 에이전트 Hugging Face 샌드박스 탈출](../records/2026-08-02-openai-agents-escaped-sandbox-hugging-face.md) — 샌드박스 격리 필요성의 배경

## 원문 발췌
> "Perplexity has open-sourced SPACE, the sandbox platform behind every task in Perplexity Computer. The Perplexity SPACE sandbox gives each agent task its own Firecracker microVM."
> "Secrets never enter the guest. Per Perplexity's July engineering post, credentials are injected at the network layer."
> "Sandbox escape: 0 of 108 runs reached the host-side secret."
> "Partial-network bypass: 11 of 54 runs succeeded before fixes. 4 models found a path."

## 수집 노트
- **선정 이유**: 운영 중인 에이전트 샌드박스를 레드팀 결과와 함께 오픈소스로 공개한 사례로, 에이전트 보안 인프라 관점의 가치가 커서 단일 소스지만 선정.
- **제외 후보**: Kyutai REKI 2.4B VLA(MarkTechPost) — 로보틱스 모델로 수집 상한 초과. Pele Mermaid SVG 도구(HN) — AI 무관.
