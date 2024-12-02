import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import './Back.style.css';

const Back = () => {
  const goToMoviePage = () => {
    navigate('/movies');
  };
  const navigate = useNavigate();
  return (
    <div className="back-icon">
      <IoMdArrowBack onClick={goToMoviePage} style={{ fontSize: '3rem' }} />
    </div>
  );
};

export default Back;
