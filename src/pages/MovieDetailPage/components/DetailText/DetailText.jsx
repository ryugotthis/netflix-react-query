import React from 'react';
import './DetailText.style.css';
import SpinnerCommon from '../../../../common/SpinnerCommon/SpinnerCommon';
import { Alert } from 'react-bootstrap';
import { useDetailMovie } from '../../../../hooks/useDetailMovie';

const DetailText = ({ id }) => {
  const {
    data: detailData,
    isLoading,
    isError,
    error,
  } = useDetailMovie({ id });
  if (isLoading) return <SpinnerCommon />;
  if (isError) return <Alert variant="danger">{error.message}</Alert>;
  return (
    <div className="detail-text">
      <h1>{detailData?.data.title}</h1>
      <div className="keyword-infos">
        <h3>{`Country: ${detailData?.data.origin_country}`}</h3>
        <h3>{`Runtime: ${detailData?.data.runtime}min`}</h3>
        <h3>{`Release date: ${detailData?.data.release_date}`}</h3>
      </div>
      <p>{detailData?.data.overview}</p>
    </div>
  );
};

export default DetailText;
