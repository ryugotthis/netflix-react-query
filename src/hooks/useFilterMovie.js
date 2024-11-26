import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchFilterMovie = ({ sort, genre, page, keyword }) => {
  console.log('sort,genre', sort, genre, keyword);
  let baseUrl = ``;

  if (sort) {
    console.log('three');
    baseUrl = `/discover/movie?sort_by=${sort}&page=${page}`;
    console.log('url확인', baseUrl);
  }
  if (genre) {
    console.log('four');
    baseUrl = `/discover/movie?with_genres=${genre}&page=${page}`;
    console.log('url확인', baseUrl);
  }
  if (!sort && !genre) {
    baseUrl = `/discover/movie?sort_by=vote_count.desc&page=${page}`;
    console.log('url확인', baseUrl);
  }
  return api.get(baseUrl);

  // return !sort && !genre
  //   ? api.get(`/discover/movie?sort_by=vote_count.desc&page=${page}`)
  //   : sort
  //   ? api.get(`/discover/movie?sort_by=${sort}&page=${page}`)
  //   : api.get(`/discover/movie?with_genres=${genre}&page=${page}`);
};

export const useFilterMovieQuery = ({ sort, genre, page, keyword }) => {
  return useQuery({
    queryKey: ['filter-movie', sort, genre, page, keyword],
    queryFn: () => fetchFilterMovie({ sort, genre, page, keyword }),
    select: (result) => result.data,
    enabled: !!genre || !!sort, // 장르나 정렬이 있을때만 활성화
  });
};
