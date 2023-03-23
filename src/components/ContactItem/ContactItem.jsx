import { Component } from 'react';

import PropTypes from 'prop-types';
import { GiRotaryPhone } from 'react-icons/gi';
import { GrEdit } from 'react-icons/gr';
import { MdDelete } from 'react-icons/md';
import { MdDoneOutline } from 'react-icons/md';

import css from './ContactItem.module.css';
import SaveChangeButton from './SaveChangeButton/SaveChangeButton';
import DeleteButton from './DeleteButton/DeleteButton';

export default class ContactItem extends Component {
  state = { isEditing: false };
  handleEditClick = () => {
    this.setState({ isEditing: true });
  };
  handleSaveClick = () => {
    this.setState({ isEditing: false });
  };
  render() {
    const { id, name, number } = this.props;
    const isEditing = this.state.isEditing;
    return (
      <li className={css.contactItem}>
        <GiRotaryPhone />

        {isEditing ? (
          <>
            <span className={css.contactInfo}>
              <input
                type="text"
                name="name"
                className={css.nameInput}
                defaultValue={name}
              />
              <input
                type="text"
                name="number"
                className={css.numberInput}
                defaultValue={number}
              />
            </span>
            <button
              type="button"
              className={[css.button, css.saveButton].join(' ')}
              onClick={() => {
                this.handleSaveClick();
                <SaveChangeButton id={id} />;
                // handleClick();
                // dispatch(deleteContact(id));
              }}
            >
              <MdDoneOutline />
            </button>
          </>
        ) : (
          <>
            <span className={css.contactInfo}>
              <span className={css.name}>{name}</span>
              <span className={css.number}>{number}</span>
            </span>
            <button
              type="button"
              className={css.button}
              onClick={this.handleEditClick}
            >
              <GrEdit />
            </button>
          </>
        )}

        <button
          type="button"
          className={css.button}
          onClick={() => {
            <DeleteButton id={id} />;
            // console.log('DeleteButton');
          }}
        >
          <MdDelete />
        </button>
      </li>
    );
  }
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
