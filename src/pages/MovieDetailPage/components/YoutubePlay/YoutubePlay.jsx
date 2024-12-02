import React from 'react';
import YouTube from 'react-youtube';
import { useTrailerMovieQuery } from '../../../../hooks/useTrailerMovie';
import SpinnerCommon from '../../../../common/SpinnerCommon/SpinnerCommon';
import { Alert } from 'react-bootstrap';
import './YoutubePlay.style.css';

const YoutubePlay = ({ id }) => {
  const {
    data: trailerData,
    isLoading,
    isError,
    error,
  } = useTrailerMovieQuery({ id });
  const opts = {
    width: '100%', // 너비를 화면에 맞게 조정
    height: '100%', // 비율에 맞춰 자동으로 높이 조정
    playerVars: {
      autoplay: 1,
    },
  };
  if (isLoading) return <SpinnerCommon />;
  if (isError) return <Alert variant="danger">{error.message}</Alert>;

  return (
    <div className="youtube-box">
      {
        <YouTube
          className="youtube-element"
          videoId={trailerData?.results[0]?.key && trailerData.results[0].key}
          opts={opts}
        />
      }
    </div>
  );
};

export default YoutubePlay;
