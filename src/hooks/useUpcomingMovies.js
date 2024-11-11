import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchUpcomingMovies = () => {
  return api(`/movie/upcoming`);
};
export const useUpcomingMovieQuery = () => {
  return useQuery({
    queryKey: ['movie-upcoming'],
    queryFn: fetchUpcomingMovies,
    select: (result) => result.data,
  });
};
