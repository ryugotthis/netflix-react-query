import React, { useEffect, useState } from 'react';
import { useDefaultMovieQuery } from '../../hooks/useDefaultMovies';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Filter from './components/Filter/Filter';
import ResearchResult from './components/ResearchResult/ResearchResult';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import SpinnerMoviesPage from './components/Spinner/SpinnerMoviesPage';
import { Alert } from 'react-bootstrap';
import './MoviesPage.style.css';
// 이 페이지에 올 수 있는 경로 두가지
// 1. nav 바에서 movies 클릭 -> popularMovie 보여주기
// 2. keyword를 입력하서 search한 경우 -> keyword와 관련된 영화들 보여주기

const MoviesPage = () => {
  const [query] = useSearchParams();
  // 데이터가 달라지는 state 값이 본 페이지에 다 있어야 컨트롤이 쉽다.
  const keyword = query.get('q');
  const [sort, setSort] = useState('');
  const [genre, setGenre] = useState('');
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);

  // 여기 useSearchMovieQuery에 keyword드 객체형태로 넣어줘야 함!!
  // 아마 함수에 인자 넘겨줄때는 이렇게 하는듯!

  // 기본 데이터
  const {
    data: defaultData,
    isLoading: isDefaultDataLoading,
    isError: isDefaultDataError,
    error: defaultDataError,
  } = useDefaultMovieQuery({ page, keyword, sort, genre });
  // 검색 결과 데이터
  const {
    data: searchData,
    isLoading: isSearchDataLoading,
    isError: isSearchDataError,
    error: searchDataError,
    // keyword가 있을때만 활성화
  } = useSearchMovieQuery({ keyword, page });

  // 페이지 클릭 핸들 함수
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
    window.scrollTo(0, 0);
  };

  // 키워드는 그대로인데 page가 바뀔때
  useEffect(() => {
    setData(defaultData);
    if (searchData) {
      setData(searchData);
    }
  }, [searchData, defaultData]);

  // 키워드 검색할때마다 페이지 리셋
  useEffect(() => {
    if (keyword) {
      setGenre('');
      setSort('');
      setPage(1);
    }
  }, [keyword]);

  // 로딩, 에러 처리
  if (isSearchDataLoading || isDefaultDataLoading) return <SpinnerMoviesPage />;
  if (isSearchDataError)
    return <Alert variant="danger">{searchDataError.message}</Alert>;
  if (isDefaultDataError)
    return <Alert variant="danger">{defaultDataError.message}</Alert>;

  return (
    <div className="movies-page">
      {/* 검색 결과 알려주는 부분 */}
      <ResearchResult searchData={searchData} keyword={keyword} />
      {/* 필터부분 */}
      <Filter
        setData={setData}
        setPage={setPage}
        page={page}
        sort={sort}
        setSort={setSort}
        genre={genre}
        setGenre={setGenre}
        keyword={keyword}
      />
      {/* 데이터 보여주는 부분 */}
      <Row className="custom-movie justify-content-center">
        {data?.results.map((movie, index) => {
          return (
            <Col
              lg={3}
              md={6}
              sm={11}
              key={index}
              style={{ padding: 0, borderRadius: 0, marginBottom: '2vw' }}
              className="custom-col"
            >
              <MovieCard movie={movie} />
            </Col>
          );
        })}
      </Row>
      {/* 페이지네이션 */}
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={0}
        pageCount={data?.total_pages}
        previousLabel="< previous"
        // pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
        forcePage={page - 1}
      />
    </div>
  );
};

export default MoviesPage;
