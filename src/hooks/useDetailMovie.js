import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchDetailMovie = ({ id }) => {
  console.log('여기까지왔나', id);
  return api(`/movie/${id}?language=en-US`);
};
export const useDetailMovie = ({ id }) => {
  console.log('checkkkk', id);
  return useQuery({
    queryKey: ['movie-genres', id],
    queryFn: () => fetchDetailMovie({ id }),
    // select: (result) => result.data.genres,
  });
};
