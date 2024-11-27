import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = ({ reviews }) => {
  return (
    <>
      <h2
        style={{ fontSize: '2.5rem', width: '90vw', margin: '2rem 0 1rem 0' }}
      >
        Review
      </h2>
      {reviews?.map((review) => (
        <ReviewCard review={review} />
      ))}
    </>
  );
};

export default Review;
