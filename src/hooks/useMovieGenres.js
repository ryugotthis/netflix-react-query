import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchMovieGenres = () => {
  return api(`/genre/movie/list`);
};
export const useMovieGenres = () => {
  return useQuery({
    queryKey: ['movie-genres'],
    queryFn: fetchMovieGenres,
    select: (result) => result.data.genres,
    staleTime: 30000,
  });
};
