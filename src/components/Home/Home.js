import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <p className={css.greetings}>
        log in to access your contacts <br />
        <br />
        or register to create your own phonebook
      </p>
    </div>
  );
}
