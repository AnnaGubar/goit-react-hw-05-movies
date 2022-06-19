import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../services/moviesApi';
import Container from '../../Components/Container';
import MoviesList from '../../Components/MoviesList';
import s from './HomePage.module.css';

function HomePage() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(({ results }) => {
      // console.log(results);
      setMoviesList(results);
    });
  }, []);

  return (
    <>
      <Container>
        <h1 className={s.title}>Trending today</h1>
        {moviesList && <MoviesList moviesList={moviesList} to={'movies/'} />}
      </Container>
    </>
  );
}

export default HomePage;
