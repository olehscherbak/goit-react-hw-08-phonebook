import { Component } from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { GiRotaryPhone } from 'react-icons/gi';
import { GrEdit } from 'react-icons/gr';
import { MdDelete } from 'react-icons/md';
import css from './ContactItem.module.css';
import { deleteContact } from 'redux/contacts/operations';

export default class ContactItem extends Component {
  render() {
    const { id, name, number } = this.props;
    const dispatch = useDispatch();
    return (
      <li className={css.contactRow}>
        <span className={css.contactItem}>
          <GiRotaryPhone />
          <span className={css.contactInfo}>
            <span className={css.name}>{name}</span>
            <span className={css.number}>{number}</span>
          </span>
        </span>
        <span className={css.buttonContainer}>
          <button
            type="button"
            className={css.button}
            onClick={() => dispatch(deleteContact(id))}
          >
            <GrEdit />
          </button>
          <button
            type="button"
            className={css.button}
            onClick={() => dispatch(deleteContact(id))}
          >
            <MdDelete />
          </button>
        </span>
      </li>
    );
  }
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
