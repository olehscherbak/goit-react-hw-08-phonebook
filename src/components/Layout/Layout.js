import AppBar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <div className={css.phoneBook}>
        <AppBar />
        <Outlet />
      </div>
    </>
  );
}
