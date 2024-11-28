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
  console.log('아이디보자', id);
  const { data: trailerData } = useTrailerMovieQuery({ id });
  // console.log('데이터는?', trailerData);
  const opts = {
    width: '100%', // 너비를 화면에 맞게 조정
    height: '100%', // 비율에 맞춰 자동으로 높이 조정
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      // origin: 'https://localhost:3000',
      autoplay: 1,
    },
  };
  console.log('뭔지 확인해보자', trailerData);
  const { data: detailData } = useDetailMovie({ id });
  console.log('ㅇ넝ㅁㄴ언', detailData?.data);
  const { data: reviewData } = useReviewMovie({ id });
  console.log('리뷰는사랑', reviewData);
  const navigate = useNavigate();
  const goToMoviePage = () => {
    navigate('/movies');
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div
      style={{
        color: 'white',
        padding: '10vw 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // position: 'relative',
      }}
    >
      <div className="back-icon">
        <IoMdArrowBack onClick={goToMoviePage} style={{ fontSize: '3rem' }} />
      </div>
      <div
        className="youtube-box"
        style={{
          width: '90vw',
          height: '60vh',
        }}
      >
        {
          <YouTube
            videoId={
              trailerData?.data?.results[0]?.id &&
              trailerData.data.results[0].id
            }
            opts={opts}
            style={{ width: '100%', height: '100%' }}
          />
        }
      </div>
      <div
        className="details"
        style={{
          width: '90vw',
          height: '30vh',

          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '2vw 0',
        }}
      >
        <h1 style={{ fontSize: '3rem' }}>{detailData?.data.title}</h1>
        <div
          className="keyword-infos"
          style={{
            fontSize: '1.5rem',
            display: 'flex',
            margin: '1.6vw 0',
          }}
        >
          <h3
            style={{ marginRight: '1.5rem' }}
          >{`Country: ${detailData?.data.origin_country}`}</h3>
          <h3
            style={{ marginRight: '1.5rem' }}
          >{`Runtime: ${detailData?.data.runtime}min`}</h3>
          <h3
            style={{ marginRight: '1.5rem' }}
          >{`Release date: ${detailData?.data.release_date}`}</h3>
        </div>

        <p style={{ fontSize: '1.3rem', lineHeight: '1.2em' }}>
          {detailData?.data.overview}
        </p>
      </div>
      <Review reviews={reviewData} />
    </div>
  );
};

export default MovieDetailPage;
