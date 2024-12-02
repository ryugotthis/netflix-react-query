import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import YoutubePlay from './components/YoutubePlay/YoutubePlay';
import DetailText from './components/DetailText/DetailText';
import Review from './components/Review/Review';
import './MovieDetailPage.style.css';
import Back from './components/Back/Back';

const MovieDetailPage = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="movie-detail">
      <Back />
      <YoutubePlay id={id} />
      <DetailText id={id} />
      <Review id={id} />
    </div>
  );
};

export default MovieDetailPage;
