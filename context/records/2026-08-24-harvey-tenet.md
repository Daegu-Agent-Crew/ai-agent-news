# Harvey Introduces Harvey Tenet: A Kimi K3 Base Post-Trained with Fireworks for Long-Horizon Legal Agent Work

**원문 URL**: [https://www.marktechpost.com/2026/08/23/harvey-tenet-post-trained-kimi-k3-legal-agent-model/](https://www.marktechpost.com/2026/08/23/harvey-tenet-post-trained-kimi-k3-legal-agent-model/)  
**수집일자**: 2026-08-24  
**수집자**: 레노버  
**카테고리**: model  
**중요도**: ⭐⭐⭐⭐

---

## 요약 (한국어)

Harvey가 공개한 Harvey Tenet은 법률 에이전트 작업을 위해 Kimi K3 베이스 모델을 Fireworks를 통해 비동기 강화학습으로 후훈련시킨 최초의 포스트-트레인된 오픈 웨이트 모델입니다. Legal Agent Benchmark(LAB)에서 기본 K3 모델에 비해 거의 2배 많은 테스트 작업을 완수하고 LAB: Contracts에서 20% 향상되었으며, 성능 이전도 Mercor의 APEX Agents와 Crosby의 Redline Bench에서 크게 개선되었습니다. Harvey는 고객 데이터를 사용하지 않았으며, 150개의 NVIDIA B300 GPU를 2개월간 사용하여 훈련했습니다. 이 모델은 법률 서비스, 기업 내 법무, 사모펀드 및 M&A 실사 등 규제 분야의 문서 처리와 계약 작성을 획기적으로 향상시킬 잠재력을 가지고 있습니다.

---

## 원문 (영문)

Harvey has released Harvey Tenet, its first post-trained model, as a research preview as of today. Tenet is a Kimi K3 base post-trained with Fireworks through asynchronous reinforcement learning on long-horizon legal work. The training corpus combined synthetic data, publicly available legal data, and human expert data. Harvey states no customer data was used. Against the base K3 model, Tenet completes almost twice as many held-out tasks on Harvey's Legal Agent Benchmark (LAB) and 20% more on LAB: Contracts, raising all-pass rate by 9 and 2 percentage points respectively. Harvey reports state-of-the-art on LAB: Contracts and second place on LAB. The gains also transferred, untrained, to Mercor's APEX Agents and Crosby's Redline Bench. The stated goal is twofold: build frontier legal intelligence on open-weight models, and give law firms a path to own their own specialized models.

Is it deployable?

Not yet, Harvey Tenet is a research preview announced on August 20, 2026. Harvey has not published weights, a model card, or an API endpoint. The base model is open-weight; Tenet itself is Harvey's own checkpoint, and the company says the work will move "from research to production" inside Harvey's products over time. What ships today is the recipe, not the artifact.

Company tier: Enterprise only. Access runs through Harvey's platform, which is sold to law firms, mid-sized firms, and in-house legal teams. A lab with an RL stack could reproduce the method; training used roughly 150 NVIDIA B300 GPUs over two months.

Industries: Legal services, corporate in-house legal, private equity and investment banking (M&A diligence), plus regulated sectors where contract volume drives cost — insurance, financial services, healthcare, energy.

Applications: M&A due diligence memos over datarooms, contract drafting, review and redlining, structured extraction across up to 10,000 documents, and precedent search over a firm's accumulated knowledge.

What the numbers say

Against the base K3 model, Tenet completes almost twice as many held-out tasks on Harvey's Legal Agent Benchmark (LAB) and 20% more on LAB: Contracts, lifting all-pass rate by 9 and 2 percentage points respectively. Harvey reports state-of-the-art on LAB: Contracts and second place on LAB, using base-model scores from Vals.

The more interesting result is transfer. Tenet also improves substantially on Mercor's APEX Agents (corporate law) and Crosby's Redline Bench — neither seen during training — while holding performance on knowledge benchmarks including LegalBench, CUAD, MAUD, and Scale's PRBench. Agentic training did not erode textbook legal reasoning.

Cost is co-optimized rather than traded away. Open weights lower price per token; reward shaping that prefers shorter trajectories at equal quality lowers tokens consumed. Harvey reports significant quality gains at stable cost.

---

## 심층 분석

### 기술 의미
Harvey Tenet의 기술적 의미는 오픈 소스 베이스 모델에 법률 전문 에이전트를 후훈련시키는 획기적인 접근 방식입니다. 비동기 강화학습(Asynchronous Reinforcement Learning)과 자율 에이전트 시스템을 결합하여 단일 토큰 처리보다 장기적인 법륜 작업 수행 능력을 크게 향상시켰습니다. 특히 훈련 데이터에 없던 Mercor와 Crosby 벤치마크에서도 성능이 개선된 것은 제로샷(Zero-shot) 에이전트 능력의 발전을 보여주며, 이는 법률 지식의 일반화 능력이 향상되었음을 의미합니다. 또한, 기존 법률 추론 능력을 유지하면서 실제 업무 수행 능력이 크게 개선된 점에서 법률 AI의 실용성이 크게 진전되었음을 보여줍니다.

### 업계 영향
법률 업계에는 전례 없는 자동화 혁신이 예상됩니다. 기존 수개월이 소요되던 M&A 실사 보고서 작업이 몇 분 내로 가능해지며, 복잡한 계약 검토 및 리드라인 작업도 AI의 정밀 분석으로 더 빠르고 정확해질 것입니다. 또한, 중소 법무 부서도 고가의 법률 서비스를 저렴하게 제공할 수 있게 되어 시장 구조가 변할 것입니다. 보험, 금융, 의료 등 계약이 핵심인 규제 산업도 큰 혜택을 받을 것으로 예상되며, 법률 서비스의 효율성이 2-3배 이상 향상될 전망입니다.

### 전망
향후 2-3년 내 법률 서비스 업계의 지각 변동이 예상됩니다. Harvey와 같은 전문 법률 AI 솔루션이 기업 법무팀의 필수 도구로 자리 잡고, 기존 로펌들은 AI 보조 시스템 도입을 통해 생산성을 높여야 할 것입니다. 한편, 법률 AI의 책임 소재와 윤리 문제가 주요 논쟁 거리로 부상할 것이며, 법률 자문의 신뢰성과 투명성 확보를 위한 규제가 필요해질 것입니다. 특히, 법률 판단의 자동화로 인한 윤리적 문제와 직무의 존속성에 대한 논의가 활발해질 것으로 예상됩니다.

---

## 참고 자료
- [Harvey Tenet 공개 블로그 포스트](https://www.marktechpost.com/2026/08/23/harvey-tenet-post-trained-kimi-k3-legal-agent-model/)
- [Legal Agent Benchmark(LAB) 소개](https://harvey.com/legal-agent-benchmark)
- [Fireworks AI 강화학습 플랫폼](https://fireworks.ai/)
- [Kimi K3 모델 아키텍처](https://kimi.ai/kimi-k3)