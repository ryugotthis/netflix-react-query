import React from 'react';
import Banner from './components/Banner/Banner';
import PopularMovieSlider from './components/PopularMovieSlider/PopularMovieSlider';
import TopRatedMovieSlider from './components/TopRatedMovieSlider/TopRatedMovieSlider';
import UpcomingMovieSlider from './components/UpcomingMovieSlider/UpcomingMovieSlider';
// 1. 배너 => popular 영화를 들고와서 첫번째 아이템을 보여주자
// 2. popular movvie
// 3. top rated movie
// 4. upcoming movie
const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlider />
      <TopRatedMovieSlider />
      <UpcomingMovieSlider />
    </div>
  );
};

export default Homepage;
