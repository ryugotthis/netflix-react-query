import React from 'react';

import Modal from 'react-bootstrap/Modal';
import './MovieCard.css';
import starIcon from '../../imgs/star.png';
import { useMovieGenres } from '../../hooks/useMovieGenres';

const MovieCard = ({ movie, key }) => {
  // console.log('카드입니다', key, movie);
  const [modalShow, setModalShow] = React.useState(false);
  const { data: genreData } = useMovieGenres();
  // console.log('check genres', genreData);

  function MyVerticallyCenteredModal(props) {
    // console.log('속성을보자', props);
    const showGenres = (genreIdList) => {
      if (!genreData) return [];
      const genreNamList = genreIdList.map((id) => {
        const genreObj = genreData.find((genre) => genre.id === id);
        return genreObj.name;
      });
      return genreNamList;
    };
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="custom-modal-size" // 커스텀 클래스 추가
      >
        <Modal.Header
          closeButton
          className="custom-close-button"
          style={{
            backgroundColor: 'black',
            color: 'white',
            zIndex: 2,
            borderBottom: 'none',
          }}
        >
          <Modal.Title id="contained-modal-title-vcenter">
            {movie.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(0, 0, 0, 0.1) 35%, rgba(0, 0, 0, .8) 70%),' +
              `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
            backgroundSize: 'cover',
            backgroundPosition: '50% 10%',
          }}
        >
          <div
            className="modal-explanation"
            style={{
              color: 'white',
            }}
          >
            <h1 style={{ fontSize: '40px' }}>{movie.title}</h1>
            <ul
              className="semi-title"
              style={{ fontSize: '24px', display: 'flex' }}
            >
              <li style={{ display: 'flex' }}>
                {/* ../../imgs/star.png */}
                <img style={{ width: '24px' }} src={starIcon} alt="star-icon" />
                <h4>{movie.vote_average.toFixed(1)}</h4>
              </li>
              <li>{movie.release_date.slice(0, 4)}</li>
              <li style={{ color: 'red' }}>{movie.adult ? '' : '19+'}</li>
              {showGenres(movie.genre_ids).map((genre) => (
                <li
                  style={{
                    borderBottom: '1px solid yellow',
                  }}
                >
                  {`#${genre}`}
                </li>
              ))}
            </ul>

            <p
              style={{
                fontSize: '20px',
                color: 'rgb(194, 194, 194)',
                lineHeight: 1.2,
              }}
            >
              {movie.overview}
            </p>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }
  console.log(modalShow);
  return (
    <>
      <div
        className="movie-card"
        onClick={() => setModalShow(true)}
        style={{ cursor: 'pointer' }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          style={{ width: '100%', padding: '0 .5vw', borderRadius: '2vw' }}
          alt="movie-photo"
        />
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default MovieCard;
