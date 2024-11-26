import React, { useEffect, useState } from 'react';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import './MoviesPage.style.css';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import SpinnerMoviesPage from './components/Spinner/SpinnerMoviesPage';
import Filter from './components/Filter/Filter';
import { useDefaultMovieQuery } from '../../hooks/useDefaultMovies';

// 이 페이지에 올 수 있는 경로 두가지
// 1. nav 바에서 movies 클릭 -> popularMovie 보여주기
// 2. keyword를 입력하서 search한 경우 -> keyword와 관련된 영화들 보여주기
const MoviesPage = () => {
  const [query] = useSearchParams();
  const keyword = query.get('q');
  const [sort, setSort] = useState('');
  const [genre, setGenre] = useState('');
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);

  // 여기 useSearchMovieQuery에 keyword드 객체형태로 넣어줘야 함!!
  // 아마 함수에 인자 넘겨줄때는 이렇게 하는듯!

  // 기본 데이터
  const { data: defaultData, isLoading: isDefaultDataLoading } =
    useDefaultMovieQuery({ page, keyword, sort, genre });
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

  if (isSearchDataLoading || isDefaultDataLoading) return <SpinnerMoviesPage />;

  return (
    <div style={{ padding: '0 2vw' }}>
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
      {/* 검색 결과 알려주는 부분 */}
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
      </div>
      {/* 데이터 보여주는 부분 */}
      <Row className="custom-movie justify-content-center">
        {data?.results.map((movie, index) => {
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
