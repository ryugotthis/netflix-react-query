import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchTopRatedMovies = () => {
  return api(`/movie/top_rated`);
};
export const useTopRatedMovieQuery = () => {
  return useQuery({
    queryKey: ['movie-top-rated'],
    queryFn: fetchTopRatedMovies,
    select: (result) => result.data,
  });
};
