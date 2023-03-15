import { useSelector, useDispatch } from 'react-redux';

import { AiFillFolderAdd } from 'react-icons/ai';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './ContactForm.module.css';
import * as selectors from 'redux/selectors';
import { addContact } from 'redux/operations';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.getItems);

  const handleSubmit = evt => {
    evt.preventDefault();
    const name = evt.target.name.value;
    const number = evt.target.number.value;
    const newContact = {
      name,
      number,
    };
    if (contacts.some(contact => contact.name === name)) {
      evt.target.name.focus();
      return toast.warn(`${name} is already in contacts`);
    } else {
      dispatch(addContact(newContact));
    }
    evt.target.reset();
    evt.target.name.focus();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.container}>
        <div className={css.inputsWraper}>
          <label className={css.label}>
            Name
            <input
              className={css.input}
              type="text"
              name="name"
              autoComplete="off"
              pattern="^[a-zA-Zа-яА-ЯЇїЄєІіҐґ'’ʼ]+(([' -][a-zA-Zа-яА-ЯЇїЄєІіҐґ'’ʼ ])?[a-zA-Zа-яА-ЯЇїЄєІіҐґ'’ʼ]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label className={css.label}>
            Number
            <input
              className={css.input}
              type="tel"
              name="number"
              autoComplete="off"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        </div>

        <button type="submit" className={css.addBtn}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}
          >
            <AiFillFolderAdd size="1.5em" color="#777" />
            <span>Add </span>
          </div>
          <span>contact</span>
        </button>
      </div>
      <ToastContainer />
    </form>
  );
}
