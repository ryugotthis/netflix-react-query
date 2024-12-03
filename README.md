# 🎥 RYUFILM

**RYUFILM**은 영화 데이터를 실시간으로 제공하는 영화 탐색 웹 애플리케이션입니다.  
React Query와 TMDb API를 활용하며, Netlify로 배포되었습니다. 백엔드 없이 최신 영화와 인기 영화를 검색하고, 세부 정보를 확인할 수 있습니다.

## 🌐 [데모 사이트 바로가기](https://ryufilm.netlify.app/)

![대표이미지](./images/ryuflix_representative.png)

---

## 📚 About the Project

React와 React Query를 활용해 TMDb API에서 데이터를 가져와 동적으로 최신 영화와 인기 영화 정보를 제공하는 프로젝트입니다.  
빠른 데이터 패칭과 캐싱을 통해 최적의 사용자 경험을 제공합니다.

### 주요 목표

- 사용자가 영화를 검색하고 탐색하기 쉽게 만들기.
- 최신 영화와 인기 영화 정보를 실시간으로 제공.
- 영화의 줄거리, 평점, 후기 등의 세부 정보를 제공.

---

## ✨ Features

- **실시간 영화 검색:** 영화 이름을 입력하면 관련 결과를 즉시 확인.
- **카테고리 탐색:** 다양한 장르와 인기 영화, 평점 높은 영화 등 정렬 가능.
- **세부 정보 보기:** 평점, 영화 줄거리, 개봉일, 후기 정보 등 제공.
- **반응형 디자인:** PC, 태블릿, 모바일에서 최적화된 UI 제공.
- **React Query:** 서버 상태 관리 및 데이터 캐싱 최적화.
- **Custom Hook 사용:** 데이터 로직 분리 및 재사용성 향상.

---

## 📷 Screenshots

### 메인 페이지

![홈페이지](./images/homepage.gif)

- 3개 카테고리: Popular, Top Rated, Upcoming

### 전체 영화 페이지

![필터](./images/pc_moviespage1.gif)
![키워드 검색](./images/pc_moviespage_search.gif)

- 장르 선택
- 정렬 선택
- 키워드 검색
- 페이지네이션 제공

### 영화 상세 페이지

![영화 상세정보](./images/pc_moviedetailpage1.gif)

- 예고편 유튜브 영상
- 상세 정보와 후기 댓글 표시

### 반응형 디자인

#### 태블릿

![태블릿](./images/tablet_moviedetailpage2.gif)

#### 모바일

![모바일](./images/mobile.gif)

---

## 🛠️ Tech Stack

- **Frontend:** React, Bootstrap CSS, React Query
- **API:** TMDb API
- **Deployment:** Netlify

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
