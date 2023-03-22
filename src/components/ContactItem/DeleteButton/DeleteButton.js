import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
// import { MdDelete } from 'react-icons/md';
import { deleteContact } from 'redux/contacts/operations';

export default function DeleteButton({ id }) {
  const dispatch = useDispatch();
  dispatch(deleteContact(id));
  return;
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
};
