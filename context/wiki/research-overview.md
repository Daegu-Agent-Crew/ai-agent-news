# 에이전트 평가 벤치마크 동향 — 2026년 6월

## 메타데이터
- **카테고리**: research
- **관련 뉴스 수**: 1
- **최종 업데이트**: 2026-06-23

## 요약
에이전트 AI 벤치마크가 Terminal-Bench 2.0, BrowseComp, OSWorld-Verified 3대 축으로 체계화되었다. 단일 정확도에서 누적 실행 안정성으로 평가 패러다임이 전환 중이며, MCP Atlas 등 새로운 벤치마크가 도구 호출 표준의 성숙을 반영한다.

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

## 관련 뉴스
- [Agentic AI Benchmarks 2026](../records/2026-06-18-agentic-benchmarks-2026.md)
- [Cisco FAPO](../records/2026-06-20-cisco-fapo-prompt-optimization.md) (실패 분류 체계 비교)
- [Vercel agent-browser](../records/2026-06-20-vercel-agent-browser-tool.md) (MCP Atlas 관련)

## 관련 위키 문서
- [모델 동향](models-overview.md) — 벤치마크에 등장하는 주요 모델 상세
- [프레임워크 동향](frameworks-overview.md) — FAPO의 실패 분류와 벤치마크 다단계 평가의 공통점
- [도구 생태계](tools-overview.md) — MCP Atlas가 측정하는 도구 호출 생태계

## 분석
평가 체계의 표준화는 에이전트 생태계가 성숙하고 있음을 보여준다. FAPO의 실패 분류(Retrieval/Cascade/Format/Reasoning)와 벤치마크의 다단계 평가가 같은 맥락이다. 오픈웨이트(GLM-5.2 91점)와 클로즈드 모델(100점)의 격차가 9점으로 좁혀지고 있다. 평가의 초점이 "단일 호출 정확도"에서 "다단계 워크플로우 누적 안정성"으로 전환된 것이 2026년의 가장 중요한 변화다.
