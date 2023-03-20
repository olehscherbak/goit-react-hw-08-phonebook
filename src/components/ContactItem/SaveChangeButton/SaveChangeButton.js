// import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { MdDoneOutline } from 'react-icons/md';

// import { deleteContact } from 'redux/contacts/operations';
import css from './SaveChangeButton.module.css';

export default function SaveChangeButton({ id, handleClick }) {
  // const dispatch = useDispatch();
  return (
    <button
      type="button"
      className={css.button}
      onClick={() => {
        handleClick();
        // dispatch(deleteContact(id));
      }}
    >
      <MdDoneOutline />
    </button>
  );
}

SaveChangeButton.propTypes = {
  id: PropTypes.string.isRequired,
};
