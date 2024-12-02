import React from 'react';
import { usePopularMovieQuery } from '../../../../hooks/usePopularMovies';
import Alert from 'react-bootstrap/Alert';
import './Banner.style.css';
import SpinnerCommon from '../../../../common/SpinnerCommon/SpinnerCommon';

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMovieQuery();

  if (isLoading) return <SpinnerCommon />;
  if (isError) return <Alert variant="danger">{error.message}</Alert>;
  return (
    <div
      className="banner"
      style={{
        backgroundImage:
          'url(' +
          `https://image.tmdb.org/t/p/w500${data.results[3].poster_path}` +
          ')',
      }}
    >
      <div className="explanation">
        <h2>{data.results[3].title}</h2>
        <p>{data.results[3].overview}</p>
      </div>
    </div>
  );
};

export default Banner;
