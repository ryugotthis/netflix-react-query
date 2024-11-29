import React from 'react';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import Alert from 'react-bootstrap/Alert';
import { useTopRatedMovieQuery } from '../../../../hooks/useTopRatedMovies';
import SpinnerHomepage from '../SpinnerHomepage/SpinnerHomepage';

const TopRatedMovieSlider = () => {
  const { data, isLoading, isError, error } = useTopRatedMovieQuery();
  const title = 'Top Rated Movies';

  if (isLoading) return <SpinnerHomepage />;
  if (isError) return <Alert variant="danger">{error.message}</Alert>;
  return (
    <div>
      <MovieSlider movie={data.results} title={title} />
    </div>
  );
};

export default TopRatedMovieSlider;
