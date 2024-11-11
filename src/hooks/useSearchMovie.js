import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchSearchMovie = (keyword) => {
  console.log('what is keyword?', keyword);
  return keyword
    ? api.get(`/search/movie?query=${keyword}`)
    : api.get(`/movie/popular`);
};

export const useSearchMovieQuery = ({ keyword }) => {
  console.log('keyword', keyword);
  return useQuery({
    queryKey: ['search-movie', keyword],
    queryFn: () => fetchSearchMovie(keyword),
    select: (result) => result.data.results,
  });
};
