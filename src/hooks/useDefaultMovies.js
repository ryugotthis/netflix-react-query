import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchDefaultMovie = ({ page, keyword, sort, genre }) => {
  console.log('답답해');
  if (!keyword && !sort && !genre) {
    console.log('여긴 아무것도없을때');
    return api.get(`/discover/movie?sort_by=vote_count.desc&page=${page}`);
  } else {
    console.log('보자보자', keyword, sort, genre);
  }
};

export const useDefaultMovieQuery = ({ page, keyword, sort, genre }) => {
  console.log('page only because its original', page, keyword, sort, genre);
  return useQuery({
    queryKey: ['default-movie', page, keyword, sort, genre],
    queryFn: () => fetchDefaultMovie({ page, keyword, sort, genre }),
    select: (result) => result.data,
    // enabled: !keyword && !sort && genre,
    // enabled: !genre && !sort && !keyword,
  });
};
