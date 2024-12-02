import React from 'react';
import './SpinnerCommon.style.css';
import Spinner from 'react-bootstrap/Spinner';

const SpinnerCommon = () => {
  return (
    <div className="spinner-common">
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

export default SpinnerCommon;
