# 영화 웹 사이트 RYUFILM

![대표이미지](./images/ryuflix_representative.png)

## 💻프로젝트 소개

NETFLIX를 참고해서 만든 영화 정보 제공 사이트입니다.

## 구성과 기능

3개의 페이지

- 홈페이지(HomePage)
- 전체 영화 페이지(MoviesPage)
- 영화 상세정보 페이지(MovieDetailPage)

### 홈페이지

3개 카테고리의 슬라이더(Popular, Top Rated, Upcoming)
![홈페이지](./images/homepage.gif)

### 전체 영화 페이지

---

- 키워드로 검색
  ![키워드](./images/MoviesPage_search.png)

- 장르 선택
  ![장르](./images/MoviesPage_genre.png)

- 정렬선택
  ![정렬](./images/MoviesPage_sortby.png)

### 영화 상세정보 페이지

---

- 무비 카드 모달창의 Start 버튼 누르면 영화 상세정보 페이지로 이동
  ![모달창](./images/MoviesPage_modal.png)
- 예고편 유튜브 영상

  ![예고편](./images/MoviesDetailPage1.png)

- 상세 정보
- 후기 댓글
  ![후기](./images/MoviesDetailPage2.png)

## 특징

### **React** Query를 사용해서 서버상태 관리

<!-- <p>
  <img src="./images/react_query.png" width="200">
  <img src="./images/react_query2.png" width="200">
</p> -->
<!-- <div style="text-align: center;">
  <img src="./images/react_query.png" alt="이미지1 설명" style="margin-bottom: 5px;" />
  <img src="./images/react_query2.png" alt="이미지2 설명" style="margin-top: 5px;" />
</div> -->

| ![react query](./images/react_query.png) | ![react query](./images/react_query2.png) |
| ---------------------------------------- | ----------------------------------------- |

### 각 페이지마다 비즈니스 로직과 UI를 분리하여 컴포넌트 구성

- 데이터 불러오는 부분을 custom hook으로 생성
  ![hooks](./images/hooks.png)
