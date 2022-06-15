import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles['active-link'] : styles.link
        }
      >
        Main
      </NavLink>
      <NavLink
        to="/events"
        className={({ isActive }) =>
          isActive ? styles['active-link'] : styles.link
        }
      >
        Events
      </NavLink>
    </nav>
  );
};

export default Navigation;
