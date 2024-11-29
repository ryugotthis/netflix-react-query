import './App.css';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Reset } from 'styled-reset';

// 홈페이지 /
// 영화 전체 보여주는 페이지 (서치) /movies
// 영화 디테일 페이지 /movies/:id
function App() {
  return (
    <div>
      <Reset />
      {/* 화면마다 nav바가 달라질수 있어서 다양한 navbar를 만들어 layout으로 구분한 폴더 생성 */}

      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* index의미는 위의 경로(path)와 같다 */}
          <Route index element={<Homepage />} />
          {/* 관련된 애들 묶어줄 수 있음 */}
          <Route path="movies">
            <Route index element={<MoviesPage />} />
            <Route path=":id" element={<MovieDetailPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
