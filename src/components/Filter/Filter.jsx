import { useDispatch } from 'react-redux';
import { filterChange } from 'redux/slices';

import css from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(filterChange(e.target.value));
  };
  return (
    <input
      type="text"
      name="filter"
      autoComplete="off"
      className={css.filter}
      onChange={handleChange}
    />
  );
}
