import React, { useEffect, useState } from 'react';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import './MoviesPage.style.css';
import MovieCard from '../../common/MovieCard/MovieCard';

// 이 페이지에 올 수 있는 경로 두가지
// 1. nav 바에서 movies 클릭 -> popularMovie 보여주기
// 2. keyword를 입력하서 search한 경우 -> keyword와 관련된 영화들 보여주기
const MoviesPage = () => {
  const [query] = useSearchParams();
  const keyword = query.get('q');
  const [data, setData] = useState(null);
  // 여기 useSearchMovieQuery에 keyword드 객체형태로 넣어줘야 함!!
  // 아마 함수에 인자 넘겨줄때는 이렇게 하는듯!
  const {
    data: searchData,
    isLoading,
    isError,
    error,
  } = useSearchMovieQuery({ keyword });
  console.log('aaa', typeof keyword);
  console.log('ddd', searchData);
  useEffect(() => {
    if (searchData) {
      setData(searchData);
      console.log('데이터있지?', data);
    }
  }, [searchData]);
  return (
    <div style={{ padding: '0 2vw' }}>
      <div
        style={{ color: 'white', marginTop: '10vw', padding: '5vw' }}
        className="sub-title"
      >
        <div className="search-result">
          {keyword
            ? searchData?.length === 0
              ? `Sorry, there is no result about "${keyword}"`
              : `Search result of "${keyword}"`
            : ''}
        </div>
        <div className="option"></div>
      </div>

      <Row className="custom-movie justify-content-center">
        {data?.map((movie, index) => {
          return (
            <Col
              lg="auto"
              md={6}
              sm={12}
              key={index}
              style={{ padding: 0, borderRadius: 0, marginBottom: '2vw' }}
              className="custom-col"
            >
              <MovieCard movie={movie} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default MoviesPage;
