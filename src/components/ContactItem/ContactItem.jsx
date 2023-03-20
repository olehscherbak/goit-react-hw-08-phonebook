import { Component } from 'react';

import PropTypes from 'prop-types';
import { GiRotaryPhone } from 'react-icons/gi';
import { GrEdit } from 'react-icons/gr';
// import { MdDoneOutline } from 'react-icons/md';
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
      <li className={css.contactRow}>
        <span className={css.contactItem}>
          <GiRotaryPhone />

          {isEditing ? (
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
          ) : (
            <span className={css.contactInfo}>
              <span className={css.name}>{name}</span>
              <span className={css.number}>{number}</span>
            </span>
          )}
        </span>
        <span className={css.buttonContainer}>
          {isEditing ? (
            <SaveChangeButton id={id} handleClick={this.handleSaveClick} />
          ) : (
            <button
              type="button"
              className={css.button}
              onClick={this.handleEditClick}
            >
              <GrEdit />
            </button>
          )}
          <DeleteButton id={id} />
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
