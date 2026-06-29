# Amazon Q MCP 취약점 — 함정 리포지토리만 열어도 클라우드 자격증명 탈취 가능

## 메타데이터
- **원문 URL**: https://www.theregister.com/cyber-crime/2026/06/26/amazon-q-flaw-let-booby-trapped-git-repos-execute-code-swipe-cloud-creds/5263202
- **소스**: The Register / Wiz
- **발행일**: 2026-06-26
- **수집일**: 2026-06-29
- **수집자**: 대구루
- **카테고리**: tool
- **태그**: [Amazon-Q, MCP, security-vulnerability, CVE-2026-12957, AI-coding-assistant, supply-chain-attack, cloud-credentials]
- **중요도**: ⭐⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Amazon의 AI 코딩 어시스턴트 Amazon Q에서 심각한 보안 취약점(CVE-2026-12957, CVSS 8.5)이 발견되었다. 악성 Git 리포지토리를 열기만 해도 공격자가 개발자의 기기에서 임의 코드를 실행하고 AWS 자격증명을 탈취할 수 있었다. Wiz 연구팀은 이것이 Amazon만의 문제가 아닌 MCP를 채택하는 모든 AI 코딩 어시스턴트의 산업 전체 문제라고 경고했다.

## 번역 (한국어)

보안 연구 기업 Wiz는 Amazon Q의 Visual Studio Code 확장 프로그램에서 고위험 취약점을 발견했다. 이 취약점(CVE-2026-12957, CVSS 4.0 점수 8.5)은 Amazon Q가 Model Context Protocol(MCP) 서버 설정을 처리하는 방식에 존재했다. 개발자가 프로젝트를 열고 Amazon Q를 활성화하면, 확장 프로그램이 리포지토리 내의 .amazonq/mcp.json 파일을 자동으로 로드하고 그 안에 포함된 명령을 실행했다.

문제의 핵심은 보안 모델이 "사용자가 명시적으로 이 서버들을 설정한다"고 가정한 점이다. 결국 AI 어시스턴트에게 임의 명령 실행 권한을 부여하는 것이므로, 당연히 사용자의 동의(informed consent)가 필요한 작업이다. 그러나 Amazon Q는 워크스페이스 신뢰 검사(workspace trust check) 없이 작업공간 내의 .amazonq/mcp.json에서 MCP 설정을 자동으로 로드했다.

MCP는 AI 어시스턴트가 로컬 프로세스를 시작해 작업을 수행할 수 있게 하는 프로토콜이다. Amazon Q의 경우, 이 프로세스들이 개발자의 환경을 상속받아 AWS 자격증명, API 키, 인증 토큰, SSH 에이전트 소켓 등에 접근할 수 있었다. Wiz는 악성 MCP 설정이 포함된 리포지토리를 구성해 실제로 개발자의 AWS 자격증명을 사용해 명령을 실행하는 공격을 성공시켰다.

Amazon은 언어 서버 버전 1.65.0에서 이 취약점을 수정했다. 기존 설치는 자동 업데이트가 차단되지 않은 한 패치가 자동 적용된다. Wiz는 이 버그가 Amazon만의 문제가 아니라 MCP를 채택하는越来越多 AI 코딩 도구들의 산업 전체 문제라고 강조했다. 비슷한 워크스페이스 설정 취약점이 최근 다른 AI 코딩 도구에서도 발견되고 있어, 공격자들이 개발자가 거의 의심하지 않는 숨겨진 설정 파일을 새로운 공격 벡터로 활용하고 있다.

## 왜 중요한가?
AI 코딩 어시스턴트는 이제 수백만 개발자의 일상 도구가 되었지만, MCP 같은 프로토콜을 통해 개발자의 기기와 클라우드 자격증명에 접근할 수 있다는 것은 심각한 보안 위험을 의미한다. 이 사건은 AI 도구의 편리함이 보안 비용과 어떻게 균형을 맞춰야 하는지에 중요한 경고 사례다.

## 심층 분석

### 기술 의미
이 취약점은 MCP(Model Context Protocol)가 가져온 새로운 공격 표면(attack surface)을 보여주는 대표 사례다. MCP는 AI 어시스턴트가 로컬 도구와 서비스에 연결되어 명령을 실행할 수 있게 하지만, 이는 동시에 "AI를 통한 원격 코드 실행(RCE)" 채널이 될 수 있다. 특히 주목할 점은 워크스페이스 신뢰 검사가 없었다는 것인데, VS Code 자체에도 신뢰할 수 없는 워크스페이스 보호 기능이 있음에도 Amazon Q 확장이 이를 우회했다는 점이다. 향후 모든 MCP 기반 AI 도구는 설정 파일 로드 전 사용자 동의와 샌드박싱을 필수적으로 구현해야 한다.

### 업계 영향
AI 코딩 어시스턴트 시장은 GitHub Copilot, Cursor, Amazon Q, Claude Code 등이 치열하게 경쟁하고 있으며, MCP 지원은 차별화 포인트로 홍보되어 왔다. 그러나 이 사건은 MCP의 보안 모델이 아직 성숙하지 않았음을 보여준다. Wiz가 지적한 대로 유사한 취약점이 다른 도구에서도 발견되고 있다는 것은, AI 공급망 공격(supply chain attack)의 새로운 패턴이 형성되고 있음을 시사한다. 기업은 개발자가 사용하는 AI 코딩 도구의 MCP 설정 정책을 검토하고, 신뢰할 수 없는 리포지토리 열기를 제한하는 보안 가이드라인을 수립해야 한다.

### 관련 프로젝트
- [Wiz 보고서 — Amazon Q 취약점 분석](https://www.wiz.io/blog/amazon-q-vulnerability)
- [AWS 보안 권고문](https://aws.amazon.com/security/security-bulletins/2026-047-aws/)
- [CVE-2026-12957 상세 정보](https://nvd.nist.gov/vuln/detail/CVE-2026-12957)

### 관련 뉴스
- [Amazon 신뢰할 수 있는 AI 에이전트 프레임워크](../records/2026-06-27-amazon-trustworthy-agent-framework.md) — Amazon의 에이전트 보안 설계 원칙
- [Vercel Agent Browser Tool](../records/2026-06-20-vercel-agent-browser-tool.md) — 에이전트 도구 호출의 안전성
- [Microsoft Agent Framework Build 2026](../records/2026-06-24-microsoft-agent-framework-build-2026.md) — 엔터프라이즈 에이전트 보안

## 원문 발췌
> The vulnerability arose when this assumption was violated: Amazon Q automatically loaded MCP configurations from .amazonq/mcp.json within the workspace – no prompt, no consent, no workspace trust check. The combination meant that a single malicious config file could execute arbitrary commands with full access to the developer's credentials – no user interaction required beyond opening the folder and activating Amazon Q.
