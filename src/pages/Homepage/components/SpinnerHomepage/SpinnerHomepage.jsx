import React from 'react';
import './SpinnerHomepage.style.css';
import Spinner from 'react-bootstrap/Spinner';

const SpinnerHomepage = () => {
  return (
    <div className="spinner-homepage">
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

export default SpinnerHomepage;
