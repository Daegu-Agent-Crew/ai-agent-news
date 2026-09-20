# ChatGPT 광고 수집기 쿠키로 타 사이트 행적이 계정과 연결될 수 있다는 분석

## 메타데이터
- **원문 URL**: https://www.buchodi.com/chatgpt-now-knows-what-you-do-on-other-websites-via-ad-collector/
- **소스**: buchodi.com (개인 블로그 기술 분석)
- **발행일**: 2026-09-20 (본문 날짜 미표기, HN 확산일 기준)
- **수집일**: 2026-09-21
- **수집자**: 레노버
- **카테고리**: industry
- **태그**: [openai, chatgpt, privacy, ads, tracking, cookie]
- **소스 권위**: community
- **교차 확인**: 1
- **중요도**: ⭐⭐
- **신선도**: fresh

## 핵심 요약
> OpenAI의 광고 수집기가 설정하는 `__obi` 쿠키가 광고주 웹사이트에 설치된 픽셀 코드를 통해 OpenAI로 전송되며, 이를 통해 OpenAI가 방문 사이트에서의 행적을 ChatGPT 계정과 연결할 수 있다는 실측 분석이 개인 블로그에 발표됐다. 연구자는 ChatGPT의 광고 픽셀을 설치한 Chewy·Wayfair·HelloFresh 등 12개 상용 사이트에서 하나의 `__obi` 값이 전송되는 것을 관찰했다고 보고한다.

## 번역 (한국어)

ChatGPT 광고 플랫폼(내부명 '바자')의 수집기 `bzr.openai.com`은 사용자가 ChatGPT에 있을 때 계정에 묶인 `__obi` 식별자를 `.openai.com` 도메인 쿠키로 심는다. 이 쿠키는 `SameSite=None; Secure`로 설정된 OpenAI 식별자 중 유일한 것으로, 1년 유지되며 교차 사이트 요청에도 브라우저가 함께 전송한다.

ChatGPT에 광고를 내는 광고주는 메타·구글과 같은 방식으로 자사 사이트에 OpenAI 픽셀 코드를 설치한다. 이 코드가 로드되는 것만으로 `__obi`가 페이지 정보와 함께 OpenAI로 전송되며, 검색한 상품, 읽은 기사, 구매 행동 등이 담긴다. SDK는 광고주가 의도적으로 넘긴 값 외에 폼 필드·렌더링된 페이지 텍스트·태그매니저 버스에서 이메일·전화번호 등을 긁어모았고, 관찰 트래픽에서 긁어온 신원이 광고주 제공 값(255건)보다 많은 685건이었다. 이메일·전화·이름은 SHA-256 해시로, 국가·도시·우편번호는 평문으로 전송됐다.

연구자는 자신의 폰에서 이 메커니즘을 재현해 두 가지 독립 캡처 방식으로 검증했고, 수개월간의 관찰 트래픽에서 1,029개 호스트네임의 936개 광고주 픽셀을 교차 확인했다고 밝힌다. 한 `__obi` 값이 Chewy, Wayfair, ThriftBooks, Eventbrite, HelloFresh, Coursera, SeatGeek 등 12개 상용 사이트에서 전송돼 모두 202로 수락됐다. 로그아웃 상태에서도 기기당 하나의 익명 식별자가 최소 27일간 유지됐다.

적용 범위에는 한계도 보고됐다. 관찰은 Android 크롬이었고, 사파리의 지능형 추적 방지는 서드파티 쿠키를 전면 차단하며 iOS의 모든 브라우저는 WebKit 기반이라 이 메커니즘이 작동하지 않는다. 또 ChatGPT 세션 5분의 1 정도만 싱크 토큰이 발생했다.

연구자는 9월 14일 OpenAI에 `__obi`가 왜 분석 쿠키로 분류되는지, 마케팅 동의를 거부한 사용자에게도 부여되는지 질의했으나, OpenAI 측 답변은 검토를 위해 내부 공유하겠다는 확인뿐이었다고 저자는 적고 있다.

## 왜 중요한가?

AI 어시스턴트가 '대화 도구'에서 '광고 플랫폼'으로 이동하는 과정에서 사용자 데이터 경계가 어떻게 다시 그려지는지 보여주는 사례다. ChatGPT 무료 사용자에게 광고가 나오기 시작한 지금, 챗봇 안의 대화만 아니라 밖의 웹 서핑까지 한 계정으로 묶일 수 있다면 개인의 데이터 노출 범위는 사실상 검색광고 시대를 넘어선다. 구글·메타가 이미 하던 행동이라도 AI 어시스턴트라는 더 개인적인 접점에서 벌어지면 수용도와 규제 논의가 달라질 수 있다.

## 심층 분석

### 기술 의미
이 분석의 기술적 요점은 `__obi`가 OpenAI의 다른 쿠키와 달리 `SameSite=None`으로 설정돼 유일하게 교차 사이트 요청을 생존한다는 관찰이다. JWT 싱크 토큰(60초 유효)으로 계정 주체와 식별자를 묶은 뒤 쿠키로 저장하는 설계는, 쿠키 차단이 일반화된 환경에서 1st-party 도메인에 식별자를 두고 픽셀 로드 시점에 노출시키는 표준적인 크로스사이트 추적 구조를 따른다. 스크립트 `<src>` 로드에도 쿠키가 붙는다는 점은 '자격증명 없는 경로'로 우회하려는 시도가 의미 없음을 보여준다. 다만 저자 스스로 인정했듯 실제 '계정-방문 조인'이 서버에서 일어나는 것은 직접 관찰되지 않았다.

### 업계 영향
단일 개인 블로그의 분석이라는 점에서 사실관계 확정은 이르지만, HN에서 507포인트·294댓글로 확산된 것은 AI 광고 시대의 프라이버시 수용성에 대한 시장의 민감도를 보여준다. OpenAI가 광고 동의(oai_consent_marketing)와 분석 동의를 분리해두고도 모든 싱크 토큰에 'analytics_allowed' 결정이 붙었다는 관찰은 동의 설계의 실질에 대한 규제 질문을 촉발할 수 있다. 다른 AI 벤더들도 광고 수익화에 나서고 있어, 광고 픽셀·식별자 설계가 업계 표준 논쟁으로 번질 가능성이 있다.

### 관련 프로젝트
- OpenAI Ads 측정 픽셀 문서: https://developers.openai.com/ads/measurement-pixel
- OpenAI 쿠키 정책: https://openai.com/policies/cookie-policy/

### 관련 뉴스
- [Microsoft AI 스크래핑 '최대 절도' 논란](../records/2026-09-20-microsoft-ai-scraping-largest-theft.md) — AI 기업의 데이터 수집 경계를 둘러싼 논쟁의 연속선상

## 원문 발췌
> "OpenAI's ad collector at bzr.openai.com sets a cookie called __obi, scoped to .openai.com. The value is while you are on ChatGPT and tied to your ChatGPT account."
> "Any company that buys ads on ChatGPT installs a small piece of OpenAI code on its own site, the same way retailers already install Meta and Google tracking code. Loading that code, sends __obi to OpenAI along with data about the page you are browsing."
> "On my device, one __obi value was sent to OpenAI from 12 commercial websites under 13 distinct pixel IDs, including Chewy, Wayfair, ThriftBooks, Eventbrite, HelloFresh, Coursera and SeatGeek."
> "It acknowledged the inquiry, said the observations would be shared internally for review, and did not answer either question."

## 수집 노트
- **선정 이유**: 단일 커뮤니티 소스(교차 확인 1)지만 재현 절차와 규모 있는 실측 데이터를 동반했고 HN 507pt로 오늘 최대 반응을 얻어, AI 광고·프라이버시 논쟁의 후속 검증을 추적할 기준점으로 아카이브한다.
- **제외 후보**: TechCrunch "Is the AI industry really ready to slow down?" — 팟캐스트 논의 요약으로 신규 사실 없음. TechCrunch "Vocci's ring" — 단일 소스 소형 하드웨어 소개.
- **교차 확인 근거**: 독립 언론 보도 미확인(Google News 검색 결과 0건). HN 스레드(507pt)는 동일 원문에 대한 토론이므로 독립 소스로 계산하지 않음.
