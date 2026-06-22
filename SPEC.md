# ai-agent-news 관리 웹앱 — 개발 스펙

## 개요
GitHub Pages에서 동작하는 Vanilla JS SPA. ai-agent-news 리포의 context/records/와 context/wiki/를 조회·관리.

## 파일 구조
```
index.html  — SPA 진입점 (CDN 없이 자체 포함)
app.js      — Vanilla JS (IIFE, CLE2 패턴 참고)
styles.css  — 다크테마, 반응형
```

## 페이지 구성

### 1. 홈 (#/)
- 히어로: "AI 에이전트 뉴스 아카이브"
- 통계: 전체 뉴스 수, 최근 수집일, 카테고리별 분포
- 최신 뉴스 5개 카드
- 카테고리 바로가기

### 2. 뉴스 리스트 (#/news)
- 카드형 리스트 (제목, 카테고리 배지, 날짜, 수집자, 요약)
- 필터: 카테고리(framework/model/tool/industry/research), 수집자(대구루/레노버)
- 검색바 (제목+내용+태그)
- 정렬: 최신순(기본), 오래된순

### 3. 뉴스 상세 (#/news/{slug})
- 메타데이터 (원문 URL, 소스, 발행일, 수집일, 수집자, 카테고리, 태그)
- 핵심 요약
- 한국어 번역
- 심층 분석 (기술 의미, 업계 영향, 관련 프로젝트)
- 원문 발췌
- "원문 보기" 외부 링크 버튼

### 4. 위키 (#/wiki)
- 주제별 컴파일 문서 리스트
- 카테고리 탭 (frameworks/models/tools/industry/research)
- 각 위키 카드: 제목, 요약, 관련 뉴스 수

### 5. 통계 (#/stats)
- 시간별 수집 추이 (월별)
- 카테고리 분포 (도넛 차트 느낌, CSS만으로)
- 수집자별 기여
- 소스별 분포

## 데이터 로딩
GitHub API로 `context/records/` 디렉토리의 파일 목록을 가져오고,
각 파일의 raw URL로 내용을 fetch하여 파싱.

### 파싱 로직
마크다운에서 메타데이터 블록(`## 메타데이터`)을 파싱하여 객체화.
본문 섹션(`## 핵심 요약`, `## 번역`, `## 심층 분석`)별로 분리.

### 캐싱
localStorage에 1시간 캐시. 수동 새로고침 버튼 제공.

## 디자인
- 다크 테마 (--bg: #0d1117, --surface: #161b22, --text: #e6edf3)
- CSS 변수 기반 (CLE2 styles.css 참고)
- 카드 호버 효과
- 반응형 (모바일/데스크톱)
- 한국어 폰트 최적화

## 기술 제약
- Vanilla JS만 (프레임워크 금지)
- 외부 CDN 금지 (자체 포함)
- GitHub Pages 정적 호스팅
- GitHub API 호출 (PAT는 설정에서 입력)
