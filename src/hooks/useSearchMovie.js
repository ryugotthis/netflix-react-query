import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchSearchMovie = ({ keyword, page }) => {
  let baseUrl = ``;
  if (keyword) {
    baseUrl = `/search/movie?query=${keyword}&page=${page}`;
  } else {
    baseUrl = `/discover/movie?sort_by=vote_count.desc&page=${page}`;
  }
  return api.get(baseUrl);

  // return keyword
  //   ? api.get(`/search/movie?query=${keyword}&page=${page}`)
  //   : api.get(`/discover/movie?sort_by=vote_count.desc&page=${page}`);
};

export const useSearchMovieQuery = ({ keyword, page }) => {
  return useQuery({
    queryKey: ['search-movie', keyword, page],
    queryFn: () => fetchSearchMovie({ keyword, page }),
    select: (result) => result.data,
    enabled: !!keyword, // 키워드가 있을때만 활성화
  });
};
