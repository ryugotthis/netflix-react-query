import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFilterMovieQuery } from '../../../../hooks/useFilterMovie';
import { useMovieGenres } from '../../../../hooks/useMovieGenres';
import Dropdown from 'react-bootstrap/Dropdown';
import './Filter.style.css';
import { Alert } from 'react-bootstrap';
import SpinnerMoviesPage from '../Spinner/SpinnerMoviesPage';

const Filter = ({ setData, setPage, page, sort, setSort, genre, setGenre }) => {
  const navigate = useNavigate();
  const sortName = [
    { name: 'Default', value: 'vote_count.desc' },
    { name: 'Most Popular', value: 'popularity.desc' },
    { name: 'Top Rated', value: 'vote_average.desc' },
    { name: 'Oldest Movies', value: 'primary_release_date.asc' },
  ];
  const {
    data: filterData,
    isLoading: isFilterDataLoading,
    isError: isFilterDataError,
    error: filterError,
  } = useFilterMovieQuery({
    sort,
    genre,
    page,
  });
  const {
    data: genreList,
    isLoading: isGenreLoading,
    isError: isGenreError,
    error: genreError,
  } = useMovieGenres();

  const sortByClick = (sortValue) => {
    setGenre('');
    setSort(sortValue);
    setPage(1);
    navigate(`/movies?sort=${sortValue}`);
  };

  const genreClick = (genre) => {
    setSort('');
    setGenre(genre);
    setPage(1);
    navigate(`/movies?genre=${genre}`);
  };

  // useEffect(() => {
  //   if (filterData) {
  //     setData(filterData);
  //   }
  // }, [filterData, page, sort, genre]);
  useEffect(() => {
    if (filterData) {
      setData(filterData);
    }
  }, [filterData, setData]);

  // 로딩, 에러처리
  if (isFilterDataLoading || isGenreLoading) return <SpinnerMoviesPage />;
  if (isFilterDataError)
    return <Alert variant="danger">{filterError.message}</Alert>;
  if (isGenreError) return <Alert variant="danger">{genreError.message}</Alert>;
  return (
    <div className="dropdowns">
      {/* 장르 드롭다운 */}
      <Dropdown className="genre-dropdown">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {genre ? genreList.find((item) => item.id === genre)?.name : 'Genre'}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {genreList?.map((item) => (
            // onClick={() => genreClick(item.name)}
            <Dropdown.Item onClick={() => genreClick(item.id)}>
              {item.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      {/* 정렬 드롭다운 */}
      <Dropdown className="sort-dropdown">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {sort
            ? sortName.find((item) => item.value === sort)?.name
            : 'Sort By'}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {sortName.map((item) => (
            <Dropdown.Item onClick={() => sortByClick(item.value)}>
              {item.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Filter;
