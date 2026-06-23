# 에이전트 프레임워크 동향 — 2026년 6월

## 메타데이터
- **카테고리**: frameworks
- **관련 뉴스 수**: 1
- **최종 업데이트**: 2026-06-23

## 요약
2026년 6월 현재, 에이전트 프레임워크는 "프롬프트 최적화 자동화"와 "파이프라인 단계별 디버깅"으로 진화하고 있다. Cisco의 FAPO가 대표적이며, LangGraph 기반 체인에서 프롬프트→파라미터→구조 변경까지 자동으로 에스컬레이션하는 패러다임을 제시한다. 화웨이의 Agent Framework 2.0은 OS 수준 통합이라는 다른 접근을 보여준다.

## 주요 프레임워크

### Cisco FAPO (Fully Automated Prompt Optimization)
- **상태**: 오픈소스 (Apache 2.0)
- **오케스트레이터**: Claude Code / Codex
- **체인 정의**: LangGraph 상태 그래프
- **핵심**: 6단계 폐루프 (Evaluate → Attribute → Propose → Review → Compare → Iterate)
- **성과**: GEPA 대비 15/18 승, 평균 +14.1pp 향상
- **링크**: <https://github.com/cisco-foundation-ai/fully-automated-prompt-optimization>

### 화웨이 Agent Framework 2.0
- **상태**: HarmonyOS 7 내장 (상용)
- **핵심**: OS 커널 수준 통합, 2,100+ 시스템 기능 제어
- **성능**: 복합 작업 성공률 90%+ 주장
- **의미**: 소프트웨어 에이전트 프레임워크가 아닌 OS 자체가 에이전트 프레임워크로 작동
- **관련 위키**: [산업 동향](industry-trends.md)

### 실패 분류 체계
FAPO가 도입한 4가지 실패 유형은 향후 프레임워크 표준으로 자리잡을 가능성이 있다:
1. **Retrieval 실패**: 검색 결과가 비었거나 관련 없음 → 구조적 해결
2. **Cascading 실패**: 초기 단계 빈 출력이 후속 단계로 전파 → 구조적 해결
3. **Format 실패**: 정답이 파싱 불가한 형식에 숨겨져 있음 → 프롬프트 해결 가능
4. **Reasoning 실패**: 충분한 입력에도 잘못된 결론 → 프롬프트 해결 가능

> 💡 **교차 참조**: 이 실패 분류 체계는 [평가 벤치마크 동향](research-overview.md)의 다단계 평가 체계(Terminal-Bench, OSWorld)와 같은 맥락이다. 또한 [agent-browser](tools-overview.md) 같은 도구 호출 최적화와도 연결된다.

## 관련 뉴스
- [Cisco AI Introduces FAPO](../records/2026-06-20-cisco-fapo-prompt-optimization.md)
- [Huawei HarmonyOS 7](../records/2026-06-13-huawei-harmonyos-7-ai-agents.md) (Agent Framework 2.0)

## 관련 위키 문서
- [평가 벤치마크](research-overview.md) — FAPO 실패 분류와 벤치마크 다단계 평가 공통점
- [도구 생태계](tools-overview.md) — MCP 기반 도구 호출이 프레임워크에 미치는 영향
- [산업 동향](industry-trends.md) — 화웨이 Agent Framework 2.0의 산업적 의미

## 분석
프레임워크 경쟁이 "어떤 모델을 쓰느냐"에서 "어떻게 파이프라인을 최적화하느냐"로 이동하고 있다. 에이전트 개발의 병목이 모델 성능이 아닌 파이프라인 디버깅에 있다는 업계 공감대가 형성되고 있으며, FAPO 같은 자동화 도구가 이를 해결하는 첫 실용적 접근이다. 화웨이의 Agent Framework 2.0은 다른 접근(OS 수준)을 보여주며, 프레임워크 경쟁이 다차원적으로 진행되고 있음을 시사한다.
