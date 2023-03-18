import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autocompete="off">
      <fieldset className={css.fieldset}>
        <legend className={css.legend}>registration</legend>
        <label className={css.label}>
          Username
          <input type="text" name="name" autoComplete="off" required></input>
        </label>
        <label className={css.label}>
          E-mail
          <input type="email" name="email" autoComplete="off" required></input>
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
        <button type="submit">Register</button>
      </fieldset>
    </form>
  );
}
