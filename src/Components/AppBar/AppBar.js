import Navigation from '../Navigation';
import { Outlet } from 'react-router-dom';
import s from './AppBar.module.css';

function AppBar() {
  return (
    <>
      <header className={s.header}>
        <Navigation />
      </header>
      <Outlet />
    </>
  );
}

export default AppBar;
