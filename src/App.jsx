import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from './Components/AppBar';

const HomePage = lazy(() =>
  import('./Views/HomePage')
);
const MoviesPage = lazy(() =>
  import('./Views/MoviesPage')
);
const MovieDetailsPage = lazy(() =>
  import('./Views/MovieDetailsPage')
);
const Cast = lazy(() => import('./Views/Cast'));
const Reviews = lazy(() =>
  import('./Views/Reviews')
);

function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* <Route exact path="/" element={<HomePage />} />
          <Route exact path="/movies" element={<MoviesPage />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
