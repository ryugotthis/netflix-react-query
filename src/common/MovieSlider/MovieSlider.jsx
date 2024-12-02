import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import '../MovieSlider/MovieSlider.css';
import { responsive } from '../../constants/responsive';

const MovieSlider = ({ movie, title }) => {
  return (
    <div className="movie-slider">
      <h2>{title}</h2>
      <Carousel
        infinite={true}
        centerMode={true}
        responsive={responsive}
        containerClass="carousel-container"
      >
        {movie.map((item) => (
          <MovieCard movie={item} key={movie.id} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
