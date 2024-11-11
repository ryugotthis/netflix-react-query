// 웹 페이지에는 관련이 없지만 도구 같은 함수들을 utils 파일에 저장함
// 단순한 요청이 한두 번 있는 경우: axios.get, axios.post와 같은 방식이 적합합니다.
// 반복적이고, 기본 설정을 공유하는 요청이 많은 경우: axios.create로 인스턴스를 만들어 사용하는 것이 효율적

import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
});
// console.log(API_KEY);
// 요청 인터셉터 추가하기
axios.interceptors.request.use(
  function (config) {
    // 요청이 전달되기 전에 작업 수행
    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);

// 디버깅할때 사용
// 응답 인터셉터 추가하기
axios.interceptors.response.use(
  function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  },
  function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);

export default api;
