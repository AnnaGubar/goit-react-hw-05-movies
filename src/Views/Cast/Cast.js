import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/moviesApi';
import s from './Cast.module.css';

function Cast() {
  const [castList, setCastList] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then(({ crew }) => {
      console.log(crew);
    });
  }, [movieId]);

  return <div>Cast</div>;
}

export default Cast;
