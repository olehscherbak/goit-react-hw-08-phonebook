import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit} autocompete="off">
        <fieldset className={css.fieldset}>
          <legend className={css.legend}>for registered users</legend>
          <label className={css.label}>
            E-mail
            <input
              type="email"
              name="email"
              autoComplete="off"
              required
            ></input>
          </label>
          <label className={css.label}>
            Password
            <input
              type="password"
              name="password"
              autoComplete="off"
              required
            ></input>
          </label>
          <button type="submit">Log in</button>
        </fieldset>
      </form>
    </>
  );
}
