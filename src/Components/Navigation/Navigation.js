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
        <p className={s.Nav_Item}>Home</p>
      </NavLink>
      <NavLink
        to="/movies"
        className={s.Nav_Link}
        activeClassName={s.active_Nav_Link}
      >
        <p className={s.Nav_Item}>Movies</p>
      </NavLink>
      <hr />
    </>
  );
};
export default Navigation;
