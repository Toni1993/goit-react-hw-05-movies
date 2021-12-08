import { Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import Loader from './components/Loader';

import './App.css';

const Home = lazy(() => import('./components/Views/Home.js'));
const MoviesPage = lazy(() => import('./components/Views/MoviesPage.js'));
const MovieDetailsPage = lazy(() =>
  import('./components/Views/MovieDetailsPage.js'),
);

export default function App() {
  return (
    <>
      <div className="container">
        <Header />

        <Suspense fallback={<Loader size={'100px'} color={'#640a0a'} />}>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/" index element={<Home />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:id/*" element={<MovieDetailsPage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}
