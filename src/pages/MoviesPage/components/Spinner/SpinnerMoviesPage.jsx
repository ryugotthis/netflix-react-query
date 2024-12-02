import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const SpinnerMoviesPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        height: '100vh',
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
};

export default SpinnerMoviesPage;
