# Recursive, AI가 대부분 만든 노트북용 코딩 모델 'Flint' 공개 — 40B MoE, 활성 2.5B, Apache 2.0

## 메타데이터
- **원문 URL**: https://techcrunch.com/2026/10/21/recursive-launches-flint-a-laptop-coding-model-it-says-was-largely-built-by-ai/
- **소스**: TechCrunch
- **발행일**: 2026-10-21
- **수집일**: 2026-10-22
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [recursive, flint, local-model, coding-agent, moe, recursive-self-improvement, open-weight]
- **소스 권위**: major-media
- **교차 확인**: 3
- **중요도**: ⭐⭐⭐⭐
- **중요도 산정**: 기본 1 + major-media 1 + 교차 확인 3개 이상(TechCrunch, MarkTechPost, Wired, Recursive 공식 블로그)(2) + HN 20pt(0) = 4
- **신선도**: fresh

## 핵심 요약
> TechCrunch에 따르면 Recursive는 첫 모델 Flint를 공개했으며, 이는 노트북에서 돌아가는 무료 코딩 모델로 자동 연구 시스템 'Eureka Machine'의 도움으로 대부분 만들어졌다. Flint는 전체 400억 파라미터 중 25억만 활성화하는 MoE 모델로 Apache 2.0 라이선스로 Hugging Face에 공개됐다.

## 번역 (한국어)
작년 설립된 AI 스타트업 Recursive가 첫 모델 Flint를 수요일 공개했다. Flint는 노트북에서 실행되는 무료 코딩 모델로, 회사 측은 자동 연구 시스템 Eureka Machine이 개발의 거의 모든 단계를 도왔고 덕분에 소규모 팀이 4개월도 안 돼 모델을 처음부터 만들 수 있었다고 밝혔다. Recursive는 5월 GV·Nvidia·AMD Ventures 등으로부터 6억 5천만 달러를 46억 5천만 달러 가치로 유치하며 등장했고, Salesforce 전 수석 과학자 Richard Socher가 CEO다.

Flint는 MoE 모델로 400억 파라미터 중 한 번에 25억만 사용해 일반 노트북에서도 돌아간다. MarkTechPost에 따르면 4비트 가중치는 약 23GB이며, 48GB 메모리의 Apple Silicon Mac이나 NVIDIA GPU에서 실행된다. Recursive 테스트에서 M4 Pro MacBook Pro 기준 초당 약 131토큰을 생성해, 같은 기기에서 Gemma 4·Nemotron 3.5 Lightning 등이 낸 58~69토큰의 약 두 배였다.

Recursive가 자체 보고한 성능은 SWE-bench Verified 74.2%, IFEval 95.1%이며, 50B 미만 모델 중 SWE-bench Verified 1위라고 주장한다. 다만 Terminal-Bench 2.1은 54.9%로 dense 모델 Qwen 3.8(73.0%)에 크게 뒤진다. 회사는 Flint가 대형 유료 코딩 어시스턴트보다 더 많은 지침이 필요하며 큰 작업은 작은 단계로 나눌 것을 권고했다.

Eureka Machine은 아이디어를 내고 실험을 돌려 다음 시도를 결정한다. Recursive는 더 희소한 모델 구조, 품질 손실 거의 없이 모델을 71% 줄인 저비트 학습, 연산을 가속하는 커스텀 커널을 Eureka의 기여로 꼽았다. Socher는 Wired에 장기 목표가 사람이 감독하고 멈출 수 있는 상태에서 완전한 재귀적 자기개선을 달성하는 것이라고 말했다.

## 왜 중요한가?
인터넷 연결이나 사용료 없이 내 노트북에서 돌아가는 코딩 AI가 상위권 성능을 내기 시작했고, 그 모델 자체를 AI가 대부분 설계했다는 점이 핵심입니다. 'AI가 AI를 만든다'는 논쟁적 아이디어가 실제 공개 제품으로 시험대에 올랐습니다.

## 심층 분석

### 기술 의미
활성 2.5B로 SWE-bench Verified 70%대를 주장한 것은 로컬 코딩 에이전트의 실용 하한선을 끌어올린 사례다(단, 모든 수치는 Recursive 자체 보고). lm_head까지 4비트로 양자화한 뒤 증류로 복구하는 등 관행을 벗어난 선택을 자동 연구 시스템이 찾았다는 점은 AutoML이 아키텍처·학습·커널 전 스택으로 확장되고 있음을 보여준다(→ 분석). Terminal-Bench 약세는 긴 셸 상호작용 작업에서 소형 MoE의 한계가 남아 있음을 시사한다(→ 분석).

### 업계 영향
코드를 외부로 보내지 않는 로컬 코딩 모델의 품질 향상은 보안 민감 기업과 비용 민감 개인 개발자의 클라우드 의존을 줄일 수 있다(→ 분석). TechCrunch는 OpenAI도 8월 중순 기준 AI 에이전트가 인간 연구자 1일당 3.1 근무일을 기록했다고 밝힌 점을 함께 언급해, 연구 자동화가 업계 전반 흐름임을 보여줬다. 재귀적 자기개선은 통제 상실 우려가 큰 주제라 규제·안전 논의의 실증 사례로 인용될 가능성이 높다(→ 분석).

### 관련 프로젝트
- Recursive Flint (Hugging Face, Apache 2.0)
- Eureka Machine (Recursive 자동 연구 시스템)

### 관련 뉴스
- [Meta Muse Spark Open 816B 오픈웨이트](../records/2026-10-16-meta-muse-spark-open-816b-open-weight.md) — TechCrunch가 비교한 대형 로컬 모델
- [Google Harness2 재귀적 에이전트 하네싱](../records/2026-10-19-google-harness2-recursive-agent-harnessing.md) — 자기개선 계열 연구

## 원문 발췌
> "The company, which is trying to build AI that can improve itself, released its first model, Flint, on Wednesday. Flint is a free coding model that can run on a laptop and was built largely with the help of AI."
> "Flint is a mixture-of-experts model, meaning it uses only a small slice of itself for any given task: just 2.5 billion of its 40 billion settings, known as parameters, at a time."
> "In Recursive's tests, it generated about 131 tokens (chunks of text) per second on a MacBook Pro with Apple's M4 Pro chip — roughly twice the 58 to 69 tokens per second that similar models managed on the same machine"

## 수집 노트
- **선정 이유**: TechCrunch·MarkTechPost·Wired·공식 블로그 4곳에서 교차 확인되고, 로컬 코딩 에이전트와 재귀적 자기개선이라는 두 축에 모두 해당해 선정. MarkTechPost는 상세 벤치마크 출처로 참고.
- **제외 후보**: Mistral Voxtral 3(MarkTechPost) — 음성 모델로 단일 소스. llm-d 1.0(MarkTechPost) — 추론 인프라, 오늘은 에이전트 직접 관련 후보 우선.
