# 🎥 RYUFILM

**RYUFILM**은 React Query를 사용하여 TMDb API에서 최신 영화 데이터를 가져오고, Netlify로 배포된 웹 애플리케이션입니다.  
백엔드 없이, 최신 영화, 인기 영화, 그리고 세부 정보를 탐색하고 검색할 수 있도록 도와주는 웹 애플리케이션입니다.

## [데모 사이트이동](https://ryufilm.netlify.app/)

![대표이미지](./images/ryuflix_representative.png)

## 💻프로젝트 소개

React와 React Query를 활용해 TMDb API에서 데이터를 가져와 동적으로 최신 영화와 인기 영화 정보를 제공하는 프로젝트입니다.  
빠른 데이터 패칭과 캐싱을 통해 최적의 사용자 경험을 제공합니다.

### 주요 목표

- 사용자가 영화를 검색하고 탐색하기 쉽게 만들기.
- 최신 영화와 인기 영화의 정보를 실시간으로 제공.
- 영화의 줄거리, 평점, 후기 등의 세부 정보를 제공.

---

## ✨ 특징

- **실시간 영화 검색:** 영화 이름을 입력하면 관련 결과를 즉시 확인.
- **카테고리 탐색:** 다양한 장르와 인기 영화, 평점 높은 영화, 오래된 영화의 정렬 다양한 카테고리.
- **세부 정보 보기:** 평점, 영화 줄거리, 개봉일, 후기 정보 등 제공.
- **반응형 디자인:** 모든 기기에서 최적화된 UI 제공.
- **API 통합:** [TMDb API](https://www.themoviedb.org/)를 사용하여 최신 데이터 가져오기.
  **React Query를 사용해서 서버상태 관리**

| ![react query](./images/react_query.png) | ![react query](./images/react_query2.png) |
| ---------------------------------------- | ----------------------------------------- |

**각 페이지마다 최대한 비즈니스 로직과 UI를 분리하여 컴포넌트 구성**

| ![홈페이지](./images/hompage_component.png) | ![상세페이지](./images/moviedetailpage_component.png) |
| ------------------------------------------- | ----------------------------------------------------- |

**데이터 불러오는 부분을 custom hook으로 생성**

![hooks](./images/hooks.png)

---

## 📷 화면

### 메인 페이지

- 3개 카테고리의 슬라이더(Popular, Top Rated, Upcoming)
  ![홈페이지](./images/homepage.gif)

### 전체 영화 페이지

![Movie Details Page](./screenshots/details-page.png)

- 장르 선택
- 정렬선택
- 키워드로 검색
- 페이지네이션
  ![필터](./images/pc_moviespage1.gif)
  ![키워드](./images/pc_moviespage_search.gif)

### 영화 상세정보 페이지

- 무비 카드 모달창의 Start 버튼 누르면 영화 상세정보 페이지로 이동
- 예고편 유튜브 영상
- 상세 정보
- 후기 댓글

### 반응형

#### 태블릿

![태블릿](./images/tablet_moviedetailpage2.gif)

##### 모바일

![모바일](./images/mobile.gif)

---

## 🛠️ Tech Stack

- **Frontend:** React, Redux, Bootstrap CSS
- **Backend:** Node.js, Express
- **API:** TMDb API
- **Build Tool:** Vite
