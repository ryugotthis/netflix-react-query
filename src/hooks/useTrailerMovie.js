import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchTrailerMovie = ({ id }) => {
  console.log('나는 트레일러, 아이디는?', id);

  return api.get(`/movie/${id}/videos?language=en-US`);
};

export const useTrailerMovieQuery = ({ id }) => {
  return useQuery({
    queryKey: ['trailer-movie', id],
    queryFn: () => fetchTrailerMovie({ id }),
    // select: (result) => result.data,
  });
};
