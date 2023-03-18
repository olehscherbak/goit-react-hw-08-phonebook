import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RiContactsBook2Fill } from 'react-icons/ri';

import { fetchContacts } from 'redux/contacts/operations';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import css from './Contacts.module.css';

export default function Contacts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className={css.title}>
        Phonebook &nbsp;
        <RiContactsBook2Fill color="#787" />
      </h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
