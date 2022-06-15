import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/moviesApi';
import Container from '../../Components/Container';
import MovieDescription from '../../Components/MovieDescription';
import s from './MovieDetailsPage.module.css';

function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieDetails(movieId).then(result => {
      setMovie(result);
      // console.log(result);
    });
  }, [movieId]);

  return (
    <>
        <Container>
          <button type='button' className={s.btn}>Go back</button>
      {movie && (
          <MovieDescription movie={movie} />
          )}
        </Container>
    </>
  );
}

export default MovieDetailsPage;
