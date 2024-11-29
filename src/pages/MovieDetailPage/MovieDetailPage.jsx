import React, { useEffect } from 'react';
import YouTube from 'react-youtube';
import { useTrailerMovieQuery } from '../../hooks/useTrailerMovie';
import { useNavigate, useParams } from 'react-router-dom';
import { useDetailMovie } from '../../hooks/useDetailMovie';
import { useReviewMovie } from '../../hooks/useReviewMovie';
import Review from './components/Review/Review';
import { IoMdArrowBack } from 'react-icons/io';
import './MovieDetailPage.style.css';

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data: trailerData } = useTrailerMovieQuery({ id });
  const opts = {
    width: '100%', // 너비를 화면에 맞게 조정
    height: '100%', // 비율에 맞춰 자동으로 높이 조정
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      // origin: 'https://localhost:3000',
      autoplay: 1,
    },
  };

  const { data: detailData } = useDetailMovie({ id });
  const { data: reviewData } = useReviewMovie({ id });
  const navigate = useNavigate();
  const goToMoviePage = () => {
    navigate('/movies');
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="movie-detail">
      <div className="back-icon">
        <IoMdArrowBack onClick={goToMoviePage} style={{ fontSize: '3rem' }} />
      </div>
      <div className="youtube-box">
        {
          <YouTube
            className="youtube-element"
            videoId={
              trailerData?.data?.results[0]?.id &&
              trailerData.data.results[0].id
            }
            opts={opts}
          />
        }
      </div>
      <div className="details">
        <h1>{detailData?.data.title}</h1>
        <div className="keyword-infos">
          <h3>{`Country: ${detailData?.data.origin_country}`}</h3>
          <h3>{`Runtime: ${detailData?.data.runtime}min`}</h3>
          <h3>{`Release date: ${detailData?.data.release_date}`}</h3>
        </div>

        <p>{detailData?.data.overview}</p>
      </div>
      <Review reviews={reviewData} />
    </div>
  );
};

export default MovieDetailPage;
