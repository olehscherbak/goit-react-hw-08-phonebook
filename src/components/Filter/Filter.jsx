import { useDispatch } from 'react-redux';
import { filterChange } from 'redux/filter/slice';
import { BiFilterAlt } from 'react-icons/bi';
import css from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(filterChange(e.target.value));
  };
  return (
    <div className={css.filterContainer}>
      <input
        type="text"
        name="filter"
        autoComplete="off"
        className={css.filter}
        onChange={handleChange}
      />
      <div className={css.iconContainer}>
        <BiFilterAlt />
      </div>
    </div>
  );
}
