import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import { Layout } from './Layout';


const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="movie" element={<Movies/>}/>
          <Route path="movie/:movieId" element={<MovieDetails/>}>
              <Route path="cast" element={<Cast/>}/>
              <Route path="reviews" element={<Reviews/>}/>
          </Route>
        </Route>
      </Routes>
  );
};