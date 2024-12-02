import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import { useReviewMovie } from '../../../../hooks/useReviewMovie';
import SpinnerCommon from '../../../../common/SpinnerCommon/SpinnerCommon';
import { Alert } from 'react-bootstrap';

const Review = ({ id }) => {
  const {
    data: reviewData,
    isLoading,
    isError,
    error,
  } = useReviewMovie({ id });
  if (isLoading) return <SpinnerCommon />;
  if (isError) return <Alert variant="danger">{error.message}</Alert>;
  return (
    <>
      <h2
        style={{ fontSize: '2.5rem', width: '90vw', margin: '2rem 0 1rem 0' }}
      >
        Review
      </h2>
      {reviewData?.map((review) => (
        <ReviewCard review={review} />
      ))}
    </>
  );
};

export default Review;
