import { Link, useLocation } from 'react-router-dom';
import propTypes from 'prop-types';
// import s from 'MoviesList.module.css'

function MoviesList({ moviesList, to }) {
  const location = useLocation();

  return (
    <ul>
      {moviesList.map(({ id, title }) => (
        <li key={id}>
          <Link to={`${to}${id}`} state={location}>
            {title}
          </Link>
          {/* переход на фильм по id-параметру с адресной строки*/}
          {/* записываем в location откуда пришли для кнопки Go back */}
        </li>
      ))}
    </ul>
  );
}

MoviesList.propTypes = {
  to: propTypes.string.isRequired,
  moviesList: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
    })
  ),
};

export default MoviesList;
