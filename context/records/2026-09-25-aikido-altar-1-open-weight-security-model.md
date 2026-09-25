# Aikido Security, GLM-5.3에서 가지치기한 오픈웨이트 보안 모델 Altar-1 공개 (328GB)

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/09/25/aikido-security-releases-altar-1-an-open-weight-security-model-pruned-from-glm-5-3-to-328-gb/
- **소스**: MarkTechPost
- **발행일**: 2026-09-25
- **수집일**: 2026-09-26
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [open-weights, glm, security, pentesting, model-compression]
- **소스 권위**: major-media
- **교차 확인**: 2
- **교차 확인 근거**: MarkTechPost 보도 + Aikido 공식 블로그·Hugging Face 공개
- **중요도**: ⭐⭐⭐
- **중요도 산정**: 1 + major-media(1) + 교차 확인 2건(1) = ⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Aikido Security가 Z.AI의 GLM-5.3(753B MoE)을 양자화·전문가 가지치기해 328GB로 압축한 첫 오픈웨이트 보안 모델 Altar-1을 공개했다. 가중치는 Hugging Face에 공개됐으며, 4x NVIDIA H200 1노드에서 vLLM으로 구동되어 온프레미스·에어갭 네트워크용 자율 침투 테스트 어플라이언스 'Aikido Machine'을 구동한다.

## 번역 (한국어)
Aikido Security의 문제 의식은 명확하다. 폐쇄형 프런티어 모델은 남의 인프라에서 돌기 때문에, 침투 테스트에 쓰면 소스 코드·아키텍처 문서·미완료 취약점 보고가 네트워크 밖으로 나간다. 데이터 거주 규정에 묶인 은행이나 인터넷 경로가 아예 없는 OT(운영기술) 환경에서는 이럴 수가 없다는 것이다. 오픈웨이트 모델은 거주 문제를 해결하지만 배포 장벽이 생긴다 — MoE 모델은 워크로드가 일부 전문가만 쓰더라도 모든 전문가를 저장해야 하고, 보안 에이전트는 길게 이어지는 컨텍스트(KV 캐시)가 모델 가중치와 GPU 메모리를 놓고 경쟁한다.

압축은 2단계로 이뤄졌다. 1단계는 양자화로, cyankiwi의 GLM-5.3-AWQ-INT4 체크포인트에서 출발해 라우팅되는 전문가 가중치를 4비트(활성화 16비트, W4A16)로 저장한다. 어텐션·공유 전문가·밀집 레이어·헤드는 BF16을 유지한다. 2단계는 Cerebras의 REAP(라우터 가중 전문가 활성 가지치기) 기법으로, 라우터 가중치와 출력 크기를 기준으로 각 전문가를 점수 매겴 — 단순 선택 빈도가 아니라. 그 결과 레이어당 256개 라우티드 전문가 중 168개를 남기고 88개(34.4%)를 제거했으며, 재학습은 없었다.

수치로 보면 GLM-5.3 BF16이 1,506.7GB, AWQ INT4가 488.2GB인 데 비해 Altar-1은 328.0GB다. BF16 대비 78.2% 작고, AWQ 부모 대비 32.8% 작다. 충실도는 밀봉된 25프롬프트 패널에서 전체 BF16 대비 KL 발산 0.506 nats를 기록했고, 같은 컷의 EXL3 빌드는 0.511이었다. 세부는 공개된 충실도 스터디 데이터셋에 담겨 있다.

캘리브레이션은 Aikido 침투 테스트 하네스의 트레이스에 코딩·도구 호출·추론·다국어 위키피디아 텍스트를 더해 진행됐으며, 회사는 고객 데이터는 쓰지 않았다고 밝혔다. 라우팅 구조는 그대로다 — 라우터는 여전히 토큰당 8개 전문가를 고르되, 이제 256이 아닌 168개 중에서 고르고 활성 파라미터는 약 40B 수준을 유지한다.

## 왜 중요한가?
최전선 보안 업무(침투 테스트)를 고객이 통제하는 인프라 안에서 돌릴 수 있는 오픈웨이트 모델이 실제 제품으로 나왔다는 점에서, '에이전트 + 민감 데이터' 조합의 배포 패턴 하나가 구체화됐다. 753B 거대 MoE를 재학습 없이 328GB로 줄인 공개 사례는 대형 모델의 온프레미스 진입 장벽을 실증적으로 낮췄다. 한국 사용자 입장에서도 Z.AI GLM 계열 모델이 서구 보안 기업의 제품에 채택됐다는 점이 주목할 만하다.

## 심층 분석

### 기술 의미
REAP 가지치기가 '라우터 가중치 + 출력 크기' 기준으로 전문가를 평가해 코딩·희귀 언어·구조화 출력 같은 전문가를 보존한다는 발상은, MoE 압축에서 도메인 특화를 지키는 실용적 방법을 보여준다. 도메인별 라우티드 작업 중 최대 점유율로 전문가를 채점하는 캘리브레이션 설계도 눈에 띈다. 재학습 없는 파이프라인(기존 체크포인트 → AWQ → REAP)은 다른 MoE 모델에도 복제 가능한 레시피로, 공개된 충실도 스터디(KL 발산 측정)가 재현성의 근거가 된다.

### 업계 영향
에어갭·규제 산업(금융, 국방, OT)은 에이전트 AI 도입에서 소외돼 왔는데, '오픈웨이트 + 자율 보안 어플라이언스' 조합은 이 시장을 여는 템플릿이 될 수 있다. 오픈웨이트 생태계 관점에서는 서구 보안 업체가 중국계 오픈 모델(GLM-5.3)을 기반으로 제품을 만들었다는 점에서 모델 국경을 넘는 재이용 흐름이 확인된다. 압축·가지치기 레시피가 공개된 만큼, 4x H200급 하드웨어 없이도 프런티어급 MoE를 다루려는 커뮤니티의 후속 실험이 늘어날 것이다.

### 관련 프로젝트
- [Hugging Face: AikidoSec/altar-1](https://huggingface.co/AikidoSec/altar-1)
- [Aikido 공식 블로그: 오픈웨이트 AI 주권 보안](https://www.aikido.dev/blog/aikido-altar-open-weight-ai-sovereign-security)
- [충실도 스터디 데이터셋](https://huggingface.co/datasets/0xSero/glm-5.3-reap-fidelity-study)

### 관련 뉴스
- [2026-07-31-okta-acquires-permiso-ai-agent-security.md](2026-07-31-okta-acquires-permiso-ai-agent-security.md) — 에이전트 보안 시장 확장 흐름
- [2026-08-10-docker-sandboxes-ai-agents.md](2026-08-10-docker-sandboxes-ai-agents.md) — 에이전트 격리·보안 인프라

## 원문 발췌
> "Aikido Security has released Altar-1, its first open-weight security model. It is a compressed version of Z.AI's GLM-5.3, built to run inside infrastructure the customer controls." (MarkTechPost)
>
> "Yes, the weights are public on Hugging Face and run with vLLM on a single node of 4x NVIDIA H200 GPUs." (MarkTechPost)
>
> "Altar-1 keeps 168 of 256 routed experts per layer and removes 88 (34.4%). No retraining is involved." (MarkTechPost)

## 수집 노트
- **선정 이유**: 공개 가중치·충실도 스터디까지 갖춘 오픈웨이트 신규 모델 공개로, 대형 MoE 압축 레시피의 관찰 가능한 실증 사례가 되기 때문.
- **제외 후보**: Ollaya(HN 261pt) — 커뮤니티 셀프런치로 정보·검증 부족 / Google AI 블로그 Beam 확장 — 발행일 09-23으로 24시간 범위 초과.
