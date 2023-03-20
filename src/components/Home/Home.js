import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import css from './Home.module.css';

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.container}>
      {!isLoggedIn && (
        <p className={css.greetings}>
          log in to access your contacts <br />
          <br />
          or register to create your own phonebook
        </p>
      )}
    </div>
  );
}
