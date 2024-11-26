import React from 'react';

import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { useUpcomingMovieQuery } from '../../../../hooks/useUpcomingMovies';

const UpcomingMovieSlider = () => {
  const { data, isLoading, isError, error } = useUpcomingMovieQuery();
  const title = 'Upcoming Movies';
  if (isLoading)
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          width: '100%',
          height: '50vh',
          margin: '2vw 0',
          flexWrap: 'wrap',
        }}
      >
        <Spinner
          animation="border"
          style={{
            width: '200px',
            height: '200px',
          }}
        />
      </div>
    );

  if (isError) return <Alert variant="danger">{error.message}</Alert>;
  return (
    <div>
      <MovieSlider movie={data.results} title={title} />
    </div>
  );
};

export default UpcomingMovieSlider;
