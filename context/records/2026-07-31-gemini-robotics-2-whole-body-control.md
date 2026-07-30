# Google DeepMind Ships Three Physical AI Models For Whole Body Control, Dexterity And Multi-Robot Collaboration

## 메타데이터
- **원문 URL**: https://www.marktechpost.com/2026/07/30/google-deepmind-gemini-robotics-2-whole-body-control-dexterity-multi-robot-collaboration/
- **소스**: MarkTechPost
- **발행일**: 2026-07-30
- **수집일**: 2026-07-31
- **수집자**: 레노버
- **카테고리**: model
- **태그**: [google-deepmind, robotics, physical-ai, VLA, embodied-reasoning, multi-robot]
- **중요도**: ⭐⭐⭐⭐⭐ (1~5)
- **신선도**: fresh

## 핵심 요약
> Google DeepMind이 Gemini Robotics 2를 출시하며 전신 제어, 손가락 정밀 조작, 다중 로봇 협업을 지원하는 세 가지 Physical AI 모델을 공개했다.

## 번역 (한국어)

Google DeepMind가 차세대 로봇의 지능 레이어인 Gemini Robotics 2를 공개했다. 이번 출시는 테이블 위 조작을 넘어 전신 제어, 다섯 손가락 정밀 조작, 다중 로봇 팀워크까지 스택의 범위를 확장하는 것을 목표로 한다. 세 가지 모델이 서로 다른 접근 계층과 함께 출시되었다.

첫 번째는 시각-언어-행동(VLA) 모델로, 시각 및 언어 입력을 모터 제어로 변환하여 휴머노이드의 발 끝에서 손끝까지 전신을 구동한다. 두 번째는 Gemini 3.5 Flash 기반의 체화 추론 모델(ER 2)로, 인간과 소통하고 물리적 환경을 이해하며 수 분에 걸친 다단계 작업을 계획한다. 세 번째는 로봇에 로컬에서 실행되는 온디바이스 VLA로, 몇 시간 만에 새로운 로봇 바디에 적응할 수 있다.

시연에는 Apptronik의 Apollo 2가 사용되었으며, 하나의 체크포인트가 서로 다른 두 종류의 손과 Franka Duo 그리퍼 모두를 구동했다. 다중 로봇 협업 기능도 도입되어, 휠형 로버와 휴머노이드가 의미론적 이해를 통해 하위 작업을 나누어 수행할 수 있게 되었다. ER 2만 공개 프리뷰로 제공되며, VLA와 온디바이스 모델은 제한된 접근으로 제공된다.

## 왜 중요한가?
Physical AI는 로봇이 실제 세계에서 독립적으로 작업을 수행할 수 있게 하는 핵심 기술이다. 이번 출시는 단순한 모델 업그레이드가 아니라, AI가 실제 물리적 환경에서 "생각하고 행동하는" 시스템으로 나아가는 전환점이다. 특히 다중 로봇 협업과 몇 시간 만에 새 로봇 바디에 적응하는 능력은 상용화의 실마리를 보여준다.

## 심층 분석

### 기술 의미
Gemini Robotics 2는 로봇 AI의 아키텍처를 세 계층으로 명확히 분리한 점이 중요하다. ER 2가 고수준 계획과 작업 추적을 담당하고, VLA가 저수준 모터 실행을 담당하는 구조는 에이전트 아키텍처의 reasoning-action 분리 원칙을 Physical AI에 적용한 것이다. 온디바이스 VLA가 200개 미만의 예제로 새 로봇 바디에 적응할 수 있다는 점은, few-shot transfer learning이 실제 로봇 하드웨어에서도 작동함을 보여준다.

### 업계 영향
Google이 Physical AI 분야에서 Tesla Optimus, Figure AI, Boston Dynamics와 경쟁하는 구도가 본격화되고 있다. 특히 ER 2가 Gemini Live API와 통합되어 중단 없는 멀티스텝 실행을 가능하게 한 점은, AI 에이전트의 원격 조작 패러다임을 변화시킬 수 있다. Boston Dynamics Spot과의 시연 코드 공개는 생태계 확장을 위한 명확한 의도이며, ASIMOV-Agentic 벤치마크의 공개는 Physical AI 안전 평가 기준을 제시한다는 의미가 있다.

### 관련 프로젝트
- [Apptronik Apollo 2](https://apptronik.com/apollo/apollo-2/)
- [Google Robotics Samples](https://github.com/google-gemini/robotics-samples/tree/main/live-api)
- [ASIMOV-Agentic Benchmark (Hugging Face)](https://huggingface.co/datasets/google/asimov-agentic)

### 관련 뉴스
- [Gemini API Managed Agents: 3.6 Flash, hooks, and more](../records/2026-07-29-gemini-api-managed-agents.md) — Google의 에이전트 인프라 확장

## 원문 발췌
> Gemini Robotics 2 extends control to whole body motion for the first time. Given the instruction "put the watering can into the green bin in the bottom shelf," Apollo walks to the table and picks up the watering can. It then takes a few steps to the shelves and places the object at its destination.
