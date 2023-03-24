import { Component } from 'react';
import { toast } from 'react-toastify';

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
                autoComplete="off"
                pattern="^[a-zA-Zа-яА-ЯЇїЄєІіҐґ'’ʼ]+(([' -][a-zA-Zа-яА-ЯЇїЄєІіҐґ'’ʼ ])?[a-zA-Zа-яА-ЯЇїЄєІіҐґ'’ʼ]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                autoFocus
                onFocus={evt => evt.target.select()}
                onBlur={evt => {
                  !evt.target.validity.patternMismatch &&
                    this.setState({ name: evt.target.value });
                }}
              />
              <input
                type="tel"
                name="number"
                className={css.numberInput}
                defaultValue={number}
                autoComplete="off"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onFocus={evt => evt.target.select()}
                onBlur={evt => {
                  !evt.target.validity.patternMismatch &&
                    this.setState({ number: evt.target.value });
                }}
              />
            </span>
            <button
              type="submit"
              className={[css.button, css.saveButton].join(' ')}
              onClick={() => {
                this.handleSaveClick();
                dispatch(
                  changeContact({
                    id,
                    name: this.state.name,
                    number: this.state.number,
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
