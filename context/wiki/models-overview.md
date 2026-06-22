# LLM/에이전트 모델 동향 — 2026년 6월

## 메타데이터
- **카테고리**: models
- **관련 뉴스 수**: 1
- **최종 업데이트**: 2026-06-23

## 요약
2026년 상반기, 주요 LLM은 "에이전트 최적화"로 방향을 맞추고 있다. Google의 Gemini 3.1 Pro는 customtools 전용 엔드포인트와 에이전트 역량을 강화했으며, Flash-Lite는 대량 호출 비용을 구조적으로 낮추고 있다.

## 주요 모델

### Gemini 3.1 Pro (Google)
- **상태**: Public Preview (2026-02-19 출시)
- **컨텍스트**: 1M 토큰
- **핵심**: SWE/에이전트 역량 강화, `customtools` 엔드포인트, `MEDIUM` thinking_level
- **의미**: 도구 호출을 1급 시티즌으로 취급하는 방향

### Gemini 3.1 Flash-Lite (Google)
- **상태**: GA (2026-05-07 출시)
- **포지션**: Gemini 2.5 Flash 성능 매칭, 최저 비용
- **의미**: 에이전트 파이프라인 대량 API 호출 비용 절감

### 업계 맥락
- Cisco FAPO 벤치마크에서 GPT-4.1-mini, GPT-5.4-mini, Gemma 3-12B 사용
- Claude Opus 4.6이 FAPO 오케스트레이터로 활용
- 화웨이 openPangu 2.0: 505B (Pro) / 92B (Flash), 512K 컨텍스트

## 관련 뉴스
- [Gemini 3.1 Pro & Flash-Lite](../records/2026-06-18-gemini-31-pro-agentic-model.md)
- [Cisco FAPO](../records/2026-06-20-cisco-fapo-prompt-optimization.md) (벤치마크 비교 모델)

## 분석
모델 경쟁이 "순수 성능"에서 "에이전트 워크로드 최적화"로 이동하고 있다. 커스텀 도구 엔드포인트, 단계적 thinking level, 대량 호출 비용 최적화 등 모두 에이전트 파이프라인 운영 비용을 낮추는 방향이다.
