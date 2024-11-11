import React from 'react';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { useTopRatedMovieQuery } from '../../../../hooks/useTopRatedMovies';

const TopRatedMovieSlider = () => {
  const { data, isLoading, isError, error } = useTopRatedMovieQuery();
  const title = 'Top Rated Movies';

  if (isLoading)
    return (
      <Spinner
        animation="border"
        style={{
          width: '200px',
          height: '200px',
          position: 'relative',
          left: '50vw',
          top: '25vh',
          margin: '0 0 0 -100px',
        }}
      />
    );
  if (isError) return <Alert variant="danger">{error.message}</Alert>;
  return (
    <div>
      <MovieSlider movie={data.results} title={title} />
    </div>
  );
};

export default TopRatedMovieSlider;
