# 에이전트 연구 동향 — 2026년 7월

## 메타데이터
- **카테고리**: research
- **관련 뉴스 수**: 6
- **최종 업데이트**: 2026-07-09 (2차 갱신)

## 요약
에이전트 AI 벤치마크가 Terminal-Bench 2.0, BrowseComp, OSWorld-Verified 3대 축으로 체계화되었다. 단일 정확도에서 누적 실행 안정성으로 평가 패러다임이 전환 중이며, MCP Atlas 등 새로운 벤치마크가 도구 호출 표준의 성숙을 반영한다. 7월에는 AutoTool이 도구 선택 최적화를 통한 추론 비용 30% 절감을 입증했고, Alibaba SkillWeaver가 도구 라우팅으로 토큰 사용량 99% 절감이라는 획기적 성과를 발표했다. UC Berkeley 연구진은 AI 지능 비용이 무료화되는 시대의 데이터 시스템 재설계 프레임워크를 제시하며, 에이전트 인프라 전반의 패러다임 전환을 예고했다. 세 연구는 도구 사용·데이터 인프라·평가 체계라는 각기 다른 각도에서 에이전트 시스템의 근본적 재구성을 다룬다는 공통점이 있으며, 시장 통계는 이러한 최적화가 해결해야 할 현실적 배경(88% 생산 실패율, 인프라 장벽 41%)을 제공한다.

## 상위 모델 (2026년 6월)
| 순위 | 모델 | 점수 | 특징 |
|------|------|------|------|
| 1 | Claude Mythos 5 | 100 | 만점, Anthropic |
| 2 | Claude Opus 4.8 | 96.3 | Anthropic |
| 3 | Gemini 3.5 Flash | 95.0 | Google |
| — | GLM-5.2 | 91 | 오픈웨이트 최고, Z.AI |

## 핵심 벤치마크
- **Terminal-Bench 2.0** (28%): 소프트웨어 엔지니어링 + 터미널 작업
- **BrowseComp** (18%): 웹 리서치 브라우징
- **OSWorld-Verified** (24%): GUI 컴퓨터 사용
- **BFCL V4**: 함수 호출 정확도 (다중 턴, 병렬 호출)
- **MCP Atlas**: MCP 도구 호출 다중 도구 조율
- **ZClawBench**: OpenClaw 워크플로우 종합 평가

> 💡 **교차 참조**: MCP Atlas 벤치마크의 등장은 [agent-browser](tools-overview.md) 등 MCP 내장 도구의 확산과 궤를 같이한다. 또한 Terminal-Bench의 다단계 실패 측정은 [FAPO](frameworks-overview.md)의 실패 분류 체계(Retrieval/Cascade/Format/Reasoning)와 동일한 원리다.

## 2026년 7월 업데이트: Alibaba SkillWeaver — 도구 라우팅으로 토큰 99% 절감

**논문**: [SkillWeaver — VentureBeat 보도](../records/2026-07-05-alibaba-skillweaver-tool-routing.md) ⭐⭐⭐⭐⭐  
**코드**: [github.com/alibaba/skillweaver](https://github.com/alibaba/skillweaver)

### 문제의식
기업 AI 에이전트가 수백 개의 도구를 보유하게 되면서, 매 스텝마다 전체 도구 라이브러리를 컨텍스트에 로드하는 방식의 토큰 비용이 폭증한다. 이는 [산업 통계](industry-trends.md)가 보여주는 88% 생산 실패율의 주요 원인 중 하나다.

### 핵심 혁신: Skill-Aware Decomposition (SAD)
3단계 프로세스로 도구 선택을 최적화한다:
1. **분해**: LLM이 복잡한 쿼리를 개별 기술 단위의 하위 작업으로 분해
2. **검색**: 임베딩 모델이 각 하위 작업을 기술 라이브러리와 매칭하여 상위 후보만 가져옴
3. **구성**: 플래너가 후보 간 호환성을 평가하여 DAG(방향성 비순환 그래프) 실행 계획 생성

핵심은 **피드백 루프** — LLM이 일반적 단계 설명을 생성한 후 실제 도구 어휘와 정렬시키는 반복 정제 과정이다.

### 결과
| 지표 | AutoTool | SkillWeaver | 비고 |
|------|----------|------------|------|
| 토큰 절감 | 30% | **99%+** | 전체 도구 라이브러리 로드 방식 대비 |
| 작업 분해 정확도 | — | 51.0% → **67.7%** | SAD 활성화 시 |
| 복잡한 작업(4-5개 기술) 정확도 | — | **+50%** 개선 | SAD의 효과 |
| 작업 완료율 | 경쟁적 유지 | 크게 향상 | 정확도 동시 개선 |

> 💡 **AutoTool과 SkillWeaver의 시너지**: 두 연구 모두 도구 사용의 통계적 패턴을 활용한다. AutoTool은 과거 궤적에서 방향성 그래프를 구축하고, SkillWeaver는 임베딩 기반 검색+DAG 구성으로 접근한다. 결합하면 이중 최적화가 가능할 수 있다.

### 산업 연관성
- [에이전트 통계 150+](../records/2026-07-05-agentic-ai-statistics-2026.md)의 실패 원인 1위가 "인프라 격차(관찰성, 오케스트레이션) 41%" — SkillWeaver의 도구 라우팅은 정확히 오케스트레이션 비용 문제를 해결
- MCP 생태계 확산에 따른 도구 수 폭증에 직접 대응 → [도구 생태계](tools-overview.md) 참조
- → [프레임워크 동향](frameworks-overview.md)의 그래프 기반 오케스트레이션(LangGraph, ADK 2.0)과 같은 맥락

## 2026년 7월 업데이트: Berkeley 데이터 시스템 재설계 — 에이전트 시대의 인프라 청사진

**논문**: [Berkeley AI Research Blog](../records/2026-07-08-berkeley-data-systems-for-agents.md) ⭐⭐⭐⭐⭐

### 문제의식
GPT-4 수준 기능 비용이 2023년 300만 토큰당 $30에서 현재 $1 미만으로 급락했다. AI 지능이 사실상 무료가 되는 시대가 다가오면서, 기존 데이터 시스템 아키텍처 전체가 재설계되어야 한다는 주장이다.

### 핵심 프레임워크: 3계층 데이터 시스템 재설계
Berkeley 연구진은 에이전트 시대의 데이터 시스템을 세 가지 축으로 제시한다:

| 축 | 의미 | 핵심 과제 |
|----|------|----------|
| **에이전트를 위한 데이터 시스템** (For) | 에이전트의 특성을 고려해 데이터 시스템 재설계 | 에이전트 친화적 스키마, 저지연 응답 |
| **에이전트 관리 데이터 시스템** (Of) | 대규모 에이전트 실행·관리용 기반 시스템 | 에이전트 오케스트레이션, 자원 격리 |
| **에이전트에 의한 데이터 시스템** (By) | 에이전트가 자체적으로 맞춤형 데이터 시스템 합성 | 동적 스키마 생성, 자가 최적화 |

### 핵심 개념: 에이전트 추측 (Agentic Speculation)
단일 사용자 요청에 대해 에이전트가 수천 개의 SQL 쿼리를 생성하는 패턴. 전통적 쿼리 인터페이스와 달리, 결과를 기다리지 않고 다음 쿼리를 예측하여 수십만 가지 가설 공간을 동시에 탐색한다. 이는 다음을 유발:
- **데이터베이스 스키마 내성**: 스키마 변화에 대한 에이전트의 적응력
- **열 탐색**: 메타데이터 기반 자동 열 발견
- **부분적 및 전체 쿼리 형성**: 점진적 쿼리 정제

### 다른 연구와의 연결
- **SkillWeaver·AutoTool과의 시너지**: 도구 선택 최적화(SkillWeaver)와 도구 사용 관성(AutoTool)은 '에이전트를 위한 데이터 시스템' 축에 해당. 에이전트가 효율적으로 도구에 접근하는 것도 데이터 시스템 재설계의 일부다.
- **Google ADK 2.0과의 정합성**: ADK 2.0의 결정론적 워크플로우 런타임은 '에이전트 관리 데이터 시스템' 축을 실현하는 프레임워크 사례다. ([프레임워크 동향](frameworks-overview.md) 참조)
- **EmulatRx와의 연결**: EmulatRx의 정보학자 에이전트가 EHR 데이터에서 환자를 식별하는 과정은 '에이전트에 의한 데이터 시스템'의 선례. ([도구 생태계](tools-overview.md) 참조)

> 💡 **교차 참조**: Berkeley의 '에이전트 추측' 개념은 [프레임워크 동향](frameworks-overview.md)의 그래프 기반 오케스트레이션(LangGraph, ADK 2.0)이 다루는 실행 라우팅 문제와 동일한 맥락이다. 에이전트가 대량의 데이터 요청을 생성하는 패턴은 EmulatRx의 다중 에이전트 협업 구조에서도 이미 관찰된다.

## 관련 뉴스
- [Agentic AI Benchmarks 2026](../records/2026-06-18-agentic-benchmarks-2026.md)
- [Cisco FAPO](../records/2026-06-20-cisco-fapo-prompt-optimization.md) (실패 분류 체계 비교)
- [Vercel agent-browser](../records/2026-06-20-vercel-agent-browser-tool.md) (MCP Atlas 관련)
- [AutoTool 연구](../records/2026-07-04-autotool-research.md) (7월 — 도구 사용 관성)
- [Alibaba SkillWeaver — 토큰 99% 절감](../records/2026-07-05-alibaba-skillweaver-tool-routing.md) (7월 추가)
- [Agentic AI Statistics 2026 — 150+ 데이터 포인트](../records/2026-07-05-agentic-ai-statistics-2026.md) (7월 — 시장 실패율 데이터)
- [Berkeley AI Research: 에이전트 시대의 데이터 시스템](../records/2026-07-08-berkeley-data-systems-for-agents.md) ⭐NEW (7월 추가)

## 관련 위키 문서
- [모델 동향](models-overview.md) — 벤치마크에 등장하는 주요 모델 상세
- [프레임워크 동향](frameworks-overview.md) — FAPO의 실패 분류와 벤치마크 다단계 평가의 공통점
- [도구 생태계](tools-overview.md) — MCP Atlas가 측정하는 도구 호출 생태계

## 분석
평가 체계의 표준화는 에이전트 생태계가 성숙하고 있음을 보여준다. FAPO의 실패 분류(Retrieval/Cascade/Format/Reasoning)와 벤치마크의 다단계 평가가 같은 맥락이다. 오픈웨이트(GLM-5.2 91점)와 클로즈드 모델(100점)의 격차가 9점으로 좁혀지고 있다. 평가의 초점이 "단일 호출 정확도"에서 "다단계 워크플로우 누적 안정성"으로 전환된 것이 2026년의 가장 중요한 변화다.

7월 연구 동향은 평가에서 최적화로, 다시 인프라 재설계로의 전환을 보여준다. 벤치마크가 '얼마나 잘하는가'를 측정한다면, AutoTool과 SkillWeaver는 '어떻게 더 저렴하게 잘할 수 있는가'를 답한다. Berkeley 연구진은 한 걸음 더 나아가 '이 모든 것이 무료가 되면 시스템을 어떻게 다시 지을 것인가'를 묻는다. 이 세 연구는 도구 사용·비용 최적화·데이터 인프라라는 서로 다른 층위에서 에이전트 시스템의 근본적 재구성을 다루며, 그래프 기반 오케스트레이션(LangGraph, ADK 2.0)과 자연스럽게 연결된다.

SkillWeaver의 99% 토큰 절감은 단순한 비용 절감을 넘어, 수백 개의 MCP 도구를 운영하는 기업 환경에서 에이전트가 경제적으로 작동할 수 있게 하는 인프라적 돌파구다. Berkeley의 3계층 프레임워크(for/of/by agents)는 이러한 최적화가 모이면 결국 데이터 시스템 전체의 재설계로 이어져야 함을 시사한다. 이는 산업 통계가 보여주는 79% 채택/11% 생산 격차를 좁히는 근본적 해결책이 될 수 있다.
