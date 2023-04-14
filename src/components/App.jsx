import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <div
      style={{
        fontSize: 30,
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="trends/:trendId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>
        </Route>
        
      </Routes>
    </div>
  );
};
