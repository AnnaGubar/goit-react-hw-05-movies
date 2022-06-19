import { NavLink } from 'react-router-dom';
import Container from '../Container'
import s from './MovieAdditionalnfo.module.css';

function MovieAdditionalnfo() {
  return (
    <div className={s.lines}>
      <Container>
      <h2 className={s.title}>Additional information</h2>

      <ul className={s.list}>
        <li>
          <NavLink to="cast"
          className={({ isActive }) => (isActive ? s['activeLink'] : s['link'])}>Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews"
          className={({ isActive }) => (isActive ? s['activeLink'] : s['link'])}>Reviews</NavLink>
        </li>
      </ul>
      </Container>
    </div>
  );
}

export default MovieAdditionalnfo;
