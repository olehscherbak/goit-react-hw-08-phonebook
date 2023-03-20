import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import { deleteContact } from 'redux/contacts/operations';
import css from './DeleteButton.module.css';

export default function DeleteButton({ id }) {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className={css.button}
      onClick={() => {
        dispatch(deleteContact(id));
      }}
    >
      <MdDelete />
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
};
