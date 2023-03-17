import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import css from './AppBar.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      {isLoggedIn ? (
        <NavLink to="/contacts" className={css.link}>
          contacts
        </NavLink>
      ) : (
        <p></p>
      )}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
