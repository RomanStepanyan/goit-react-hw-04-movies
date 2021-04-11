import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <NavLink
        exact
        to="/"
        className={s.Nav_Link}
        activeClassName={s.active_Nav_Link}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={s.Nav_Link}
        activeClassName={s.active_Nav_Link}
      >
        Movies
      </NavLink>
      <hr />
    </>
  );
};
export default Navigation;
