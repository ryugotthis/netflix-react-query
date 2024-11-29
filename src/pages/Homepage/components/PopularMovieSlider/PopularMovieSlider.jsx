import React from 'react';

import Alert from 'react-bootstrap/Alert';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { usePopularMovieQuery } from '../../../../hooks/usePopularMovies';

import SpinnerHomepage from '../SpinnerHomepage/SpinnerHomepage';

const PopularMovieSlider = () => {
  const { data, isLoading, isError, error } = usePopularMovieQuery();
  const title = 'Popular Movies';
  if (isLoading) return <SpinnerHomepage />;
  if (isError) return <Alert variant="danger">{error.message}</Alert>;

  return (
    <div>
      <MovieSlider movie={data.results} title={title} />
    </div>
  );
};

export default PopularMovieSlider;
