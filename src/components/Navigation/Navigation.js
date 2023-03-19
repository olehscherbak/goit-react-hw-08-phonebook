import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import css from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <NavLink to="/home" className={css.link}>
        home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.link}>
          contacts
        </NavLink>
      )}
    </div>
  );
}
