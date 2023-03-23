import { Component } from 'react';

import PropTypes from 'prop-types';
import { GiRotaryPhone } from 'react-icons/gi';
import { GrEdit } from 'react-icons/gr';
import { MdDelete } from 'react-icons/md';
import { MdDoneOutline } from 'react-icons/md';

import { withHooksHOC } from 'addons/withHooksHOC ';
import { deleteContact, changeContact } from 'redux/contacts/operations';
import css from './ContactItem.module.css';

class ContactItem extends Component {
  state = {
    name: this.props.name,
    number: this.props.number,
    isEditing: false,
  };
  handleEditClick = () => {
    this.setState({ isEditing: true });
  };
  handleSaveClick = () => {
    this.setState({ isEditing: false });
  };
  render() {
    const { id, name, number, dispatch } = this.props;
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
                onBlur={() => {
                  this.setState({ name: this.value });
                  console.log(this.value);
                }}
              />
              <input
                type="text"
                name="number"
                className={css.numberInput}
                defaultValue={number}
                onBlur={() => {
                  this.setState({ name: this.value });
                  console.log(this.value);
                }}
              />
            </span>
            <button
              type="button"
              className={[css.button, css.saveButton].join(' ')}
              onClick={() => {
                this.handleSaveClick();
                dispatch(
                  changeContact({
                    id,
                    name: 'Oleh Scherbak',
                    number: '+38067-247-62-45',
                  })
                );
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
            dispatch(deleteContact(id));
          }}
        >
          <MdDelete />
        </button>
      </li>
    );
  }
}

export default withHooksHOC(ContactItem);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
