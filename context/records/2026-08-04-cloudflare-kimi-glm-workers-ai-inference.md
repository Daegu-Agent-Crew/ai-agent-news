# Cloudflare Workers AI, Kimi K2.6·GLM 5.2 대규모 추론 최적화 기법 공개

## 메타데이터
- **원문 URL**: https://blog.cloudflare.com/smaller-faster-safer-models/
- **소스**: Cloudflare Blog
- **발행일**: 2026-08-03
- **수집일**: 2026-08-04
- **수집자**: 레노버
- **카테고리**: tool
- **태그**: [cloudflare, workers-ai, inference-optimization, kv-cache-quantization, kimi, glm, sglang, model-compression]
- **중요도**: ⭐⭐⭐⭐
- **신선도**: fresh

## 핵심 요약
> Cloudflare가 Workers AI에서 Moonshot Kimi K2.6과 Z.ai GLM 5.2를 효율적으로 서빙하기 위해 KV 캐시 8비트 양자화, 모델 가중치 INT4 압축, 캐시 무결성 보호의 3단계 최적화를 적용해 동시 처리량과 비용 효율을 대폭 개선했다.

## 번역 (한국어)
Cloudflare는 Workers AI에서 가장 요구 사항이 높은 두 모델인 Moonshot의 Kimi K-시리즈와 Z.ai의 GLM을 대규모로 서빙하며 세 가지 핵심 최적화 기법을 공개했다. 첫째, KV 캐시를 기본 16비트(BF16)에서 8비트 부동소수점(FP8)으로 양자화하여 Kimi K2.6의 컨텍스트 용량을 68.6만 토큰에서 137만 토큰으로 2배 확장하고, 64개 동시 요청 시 BF16은 메모리 부족으로 실패하는 반면 FP8은 초당 2,192 토큰 처리에 성공했다.

둘째, GLM 5.2의 모델 가중치를 8비트에서 4비트 정수(INT4)로 압축하여 체크포인트 크기를 705GB에서 421GB로 40% 감소시켰고, 8-way 텐서 병렬 배포에서 GPU당 메모리를 88GB에서 52GB로 낮추어 동일 하드웨어에서 약 118만 토큰의 KV 캐시 여유 공간을 확보했다. INT4 변환 후 정확도는 벤치마크 전반에서 FP8과 구분 불가능한 수준을 유지했다.

셋째, 양자화와 압축으로 동일 GPU에서 더 많은 요청을 처리하게 되면서 요청 간 캐시 공유에 따른 보안 위험을 방지하기 위해 무결성 보호(integrity check) 메커니즘을 추가했다. 모든 실험과 프로덕션 트래픽은 오픈소스 추론 프레임워크 SGLang 기반에서 수행되었으며, Cloudflare는 SGLang 팀과 협력하여 최적화 패치를 업스트림에 기여하고 있다.

## 왜 중요한가?
클라우드 엣지에서 대형 모델을 효율적으로 서빙하는 기술은 AI 에이전트의 실제 배포 비용을 직접 낮춘다. 특히 KV 캐시 양자화와 가중치 압축으로 동일 하드웨어에서 더 많은 에이전트 인스턴스를 동시에 실행할 수 있게 되어, 대규모 에이전트 배포의 경제성을 크게 개선한다.

## 심층 분석

### 기술 의미
FP8 KV 캐시 양자화는 초당 단일 토큰 속도에는 약간의 오버헤드를 추가하지만, 동시 처리량 한계를 극적으로 높여 실제 서비스 환경에서의 전체 처리량을 41% 개선한 점이 핵심이다. 디코딩은 메모리 대역폭에 바인딩되므로 INT4 가중치 압축은 단일 요청 지연시간을 최대 55% 단축한다. 이러한 최적화들은 에이전트 시스템이 장시간 대화 컨텍스트를 유지하면서도 빠른 응답 속도를 보장하는 데 필수적이다.

### 업계 영향
SGLang 기반의 최적화가 오픈소스로 기여된다는 점에서, Cloudflare의 기법은 Workers AI 생태계를 넘어 전체 AI 추론 커뮤니티에 파급될 전망이다. 특히 Kimi와 GLM 같은 중국계 대형 모델이 글로벌 엣지 인프라에서 상용 서비스 수준으로 제공된다는 것은, AI 에이전트 생태계의 모델 선택지가 더욱 다양해지고 경쟁이 심화됨을 의미한다.

### 관련 프로젝트
- [SGLang Framework](https://github.com/sgl-project/sglang)

### 관련 뉴스
- (신규 수집 — 아직 관련 뉴스 없음)

## 원문 발췌
> "By default, the cache is stored in 16-bit precision (BF16). We store it in 8-bit floating point instead (FP8, e4m3), which halves its size. On Kimi K2.6, that raises the amount of context we can hold in memory from roughly 686,000 tokens to about 1.37 million, twice as much."
