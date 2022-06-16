import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/moviesApi';
import Container from '../../Components/Container';
import MovieDescription from '../../Components/MovieDescription';
import MovieAdditionalnfo from '../../Components/MovieAdditionalnfo';
import s from './MovieDetailsPage.module.css';

function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [prevLocation, setPrevLocation] = useState();
  const { movieId } = useParams();

  const navigate = useNavigate(); // откуда пришли
  // console.log("~ navigate", navigate)

  const location = useLocation(); // где находимся
  // console.log('~ location', location); // pathname: '/movies/507086'
  // console.log('5555', location.state); // pathname: '/'

  useEffect(() => {
    fetchMovieDetails(movieId).then(result => {
      setMovie(result);
      // console.log(result);
    });
  }, [movieId]);

  // useEffect(() => {
  //   const { state } = location;
  //   if (!state) {
  //     return;
  //   }

  //   setPrevLocation(`${state.pathname}${state.search}`)
  // }, [location]);

  function goToPrevPage() {
    navigate(prevLocation ? prevLocation : '/');
  }

  return (
    <>
      <Container>
        <button type="button" className={s.btn} onClick={goToPrevPage}>
          Go back
        </button>
        {movie && <MovieDescription movie={movie} />}
      </Container>
      <MovieAdditionalnfo />
      <Outlet />
    </>
  );
}

export default MovieDetailsPage;
