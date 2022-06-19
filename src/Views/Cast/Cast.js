import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/moviesApi';
import Container from '../../Components/Container';
import defaultAvatar from '../../images/no-avatar.png';

import s from './Cast.module.css';

function Cast() {
  const [castList, setCastList] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then(({ cast }) => {
      const dataCast = cast.map(
        ({ id, name, profile_path: photo, character }) => {
          return {
            id,
            name,
            character,
            photo,
          };
        }
      );
      
      setCastList(dataCast);
    });
  }, [movieId]);

  console.log(castList);

  return (
      <Container>
        {castList && (
          <ul className={s.list}>
            {castList.map(({ id, name, photo, character }) => (
              <li key={id}>
                <h3>{name}</h3>
                <img
                  className={s.avatar}
                  src={
                    photo
                      ? `https://image.tmdb.org/t/p/w500${photo}`
                      : defaultAvatar
                  }
                  alt={name}
                />
                <p>Character: {character}</p>
              </li>
            ))}
          </ul>
        )}
      </Container>
  );
}

export default Cast;
