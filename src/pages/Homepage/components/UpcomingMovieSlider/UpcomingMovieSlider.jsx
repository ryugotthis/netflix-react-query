import React from 'react';

import MovieSlider from '../../../../common/MovieSlider/MovieSlider';

import Alert from 'react-bootstrap/Alert';
import { useUpcomingMovieQuery } from '../../../../hooks/useUpcomingMovies';
import SpinnerHomepage from '../SpinnerHomepage/SpinnerHomepage';

const UpcomingMovieSlider = () => {
  const { data, isLoading, isError, error } = useUpcomingMovieQuery();
  const title = 'Upcoming Movies';
  if (isLoading) return <SpinnerHomepage />;

  if (isError) return <Alert variant="danger">{error.message}</Alert>;
  return (
    <div>
      <MovieSlider movie={data.results} title={title} />
    </div>
  );
};

export default UpcomingMovieSlider;
