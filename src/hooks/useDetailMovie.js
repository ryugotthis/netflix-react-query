import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchDetailMovie = ({ id }) => {
  return api(`/movie/${id}?language=en-US`);
};
export const useDetailMovie = ({ id }) => {
  return useQuery({
    queryKey: ['movie-genres', id],
    queryFn: () => fetchDetailMovie({ id }),
    enabled: !!id,
  });
};
