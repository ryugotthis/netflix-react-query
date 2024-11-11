import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import '../MovieSlider/MovieSlider.css';
import { responsive } from '../../constants/responsive';

const MovieSlider = ({ movie, title }) => {
  console.log('잘받았니?', movie);
  return (
    <div>
      <h2 style={{ margin: '1vw 0', color: 'red', fontSize: '36px' }}>
        {title}
      </h2>
      <Carousel
        infinite={true}
        centerMode={true}
        responsive={responsive}
        containerClass="carousel-container"
      >
        {movie.map((item, index) => (
          <MovieCard movie={item} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
