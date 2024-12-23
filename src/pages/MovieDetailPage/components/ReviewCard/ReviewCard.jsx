import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './ReviewCard.style.css';
const ReviewCard = ({ review }) => {
  const limit = 350;
  let [isShowMore, setShowMore] = useState(false);
  const [reviewContent, setReviewContent] = useState(
    review.content.slice(0, limit)
  );
  const [more, setMore] = useState('[...Show more]');
  const ShowMore = () => {
    const newShowMoreState = !isShowMore; // 상태를 반대로 설정
    setShowMore(newShowMoreState);
    setReviewContent(
      newShowMoreState
        ? review.content // 전체 내용을 보여줌
        : review.content.length > limit
        ? review.content.slice(0, limit) // 줄여서 보여줌
        : review.content
    );
    setMore(newShowMoreState ? '[Show less]' : '[...Show more]'); // 버튼 텍스트 업데이트
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{review?.author}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted custom-muted">{`created ${review?.created_at.slice(
          0,
          10
        )}`}</Card.Subtitle>
        <Card.Text>{reviewContent}</Card.Text>
        <span className="more" onClick={ShowMore}>
          {review.content.length > limit ? more : ''}
        </span>
      </Card.Body>
    </Card>
  );
};

export default ReviewCard;
