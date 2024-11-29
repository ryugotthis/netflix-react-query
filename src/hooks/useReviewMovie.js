import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchReviewMovie = ({ id }) => {
  return api(`/movie/${id}/reviews?language=en-US`);
};
export const useReviewMovie = ({ id }) => {
  return useQuery({
    queryKey: ['review-movie', id],
    queryFn: () => fetchReviewMovie({ id }),
    select: (result) => result.data.results,
    enabled: !!id,
  });
};
