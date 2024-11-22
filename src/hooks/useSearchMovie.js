import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchSearchMovie = ({ keyword, page }) => {
  console.log('what is page?', page);
  return keyword
    ? api.get(`/search/movie?query=${keyword}&page=${page}`)
    : api.get(`/movie/popular?page=${page}`);
};

export const useSearchMovieQuery = ({ keyword, page }) => {
  console.log('keyword', keyword, page);
  console.log('what is page???', page);
  return useQuery({
    queryKey: ['search-movie', keyword, page],
    queryFn: () => fetchSearchMovie({ keyword, page }),
    select: (result) => result.data,
  });
};
