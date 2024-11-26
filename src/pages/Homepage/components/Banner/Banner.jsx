import React from 'react';
// import { usePopularMovieQuery } fro../../../../hooks/usePopularMovies';
import { usePopularMovieQuery } from '../../../../hooks/usePopularMovies';
import Alert from 'react-bootstrap/Alert';
import './Banner.style.css';
import Spinner from 'react-bootstrap/Spinner';

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMovieQuery();
  console.log(data);

  if (isLoading)
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          width: '100%',
          height: '50vh',
          margin: '2vw 0',
          flexWrap: 'wrap',
        }}
      >
        <Spinner
          animation="border"
          style={{
            width: '200px',
            height: '200px',
          }}
        />
      </div>
    );
  if (isError) return <Alert variant="danger">{error.message}</Alert>;
  return (
    <div className="banner">
      <div
        style={{
          backgroundImage:
            'url(' +
            `https://image.tmdb.org/t/p/w500${data.results[4].poster_path}` +
            ')',
        }}
        className="banner-img"
      ></div>
      <div className="explanation">
        <h2 style={{ fontSize: '30px', marginBottom: '1vw' }}>
          {data.results[4].title}
        </h2>
        <p style={{ fontSize: '20px', lineHeight: 1.2, width: '60vw' }}>
          {data.results[4].overview}
        </p>
      </div>
    </div>
  );
};

export default Banner;
