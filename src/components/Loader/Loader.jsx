import { Comment } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.container}>
      <Comment color="#fff" backgroundColor="#aaa" />
    </div>
  );
}
