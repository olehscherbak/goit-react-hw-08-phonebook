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
    nameError: false,
    numberError: false,
  };

  render() {
    const { id, name, number, dispatch, contacts } = this.props;
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
                onChange={evt => {
                  const isPatternError = evt.target.validity.patternMismatch;
                  isPatternError
                    ? (evt.target.style.outline = '2px solid red')
                    : (evt.target.style.outline = 'none');
                  isPatternError
                    ? this.setState({ nameError: true })
                    : this.setState({ nameError: false });
                }}
                onBlur={evt => {
                  if (!evt.target.validity.patternMismatch) {
                    this.setState({ name: evt.target.value });
                  } else {
                    evt.target.focus();
                  }
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
                onChange={evt => {
                  const isPatternError = evt.target.validity.patternMismatch;
                  isPatternError
                    ? (evt.target.style.outline = '2px solid red')
                    : (evt.target.style.outline = 'none');
                  isPatternError
                    ? this.setState({ numberError: true })
                    : this.setState({ numberError: false });
                }}
                onBlur={evt => {
                  if (!evt.target.validity.patternMismatch) {
                    this.setState({ number: evt.target.value });
                  } else {
                    evt.target.focus();
                  }
                }}
              />
            </span>
            <button
              type="button"
              disabled={this.state.nameError || this.state.numberError}
              className={[css.button, css.saveButton].join(' ')}
              onClick={evt => {
                if (
                  contacts.some(
                    contact =>
                      contact.name === this.state.name && contact.id !== id
                  )
                ) {
                  return toast.warn(
                    `${this.state.name} is already in contacts`
                  );
                } else {
                  this.setState({ isEditing: false });
                  dispatch(
                    changeContact({
                      id,
                      name: this.state.name,
                      number: this.state.number,
                    })
                  );
                }
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
              onClick={() => {
                this.setState({ isEditing: true });
              }}
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
