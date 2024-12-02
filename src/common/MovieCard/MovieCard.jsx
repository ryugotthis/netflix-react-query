import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './MovieCard.css';
import starIcon from '../../imgs/star.png';
import { useMovieGenres } from '../../hooks/useMovieGenres';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie, key }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const { data: genreData } = useMovieGenres();
  const navigate = useNavigate();
  const goToMovieDetail = () => {
    navigate(`/movies/${movie.id}`);
  };
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
        <Modal.Header closeButton className="custom-close-button">
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(0, 0, 0, 0.1) 35%, rgba(0, 0, 0, .8) 70%),' +
              `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
          }}
        >
          <div className="modal-explanation">
            <Button
              className="movie-card"
              variant="danger"
              onClick={goToMovieDetail}
            >{`Start >`}</Button>
            <h1>{movie.title}</h1>
            <ul className="semi-title">
              <li className="rating">
                <img src={starIcon} alt="star-icon" />
                <h4>{movie.vote_average.toFixed(1)}</h4>
              </li>
              <li>{movie.release_date.slice(0, 4)}</li>
              <li style={{ color: 'red' }}>{movie.adult ? '' : '19+'}</li>
              {showGenres(movie.genre_ids).map((genre, index) => (
                <li
                  key={`${genre}-${index}`}
                  className="genre-highlight"
                >{`#${genre}`}</li>
              ))}
            </ul>

            <p>{movie.overview}</p>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  return (
    <>
      <div className="movie-card" onClick={() => setModalShow(true)}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
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
