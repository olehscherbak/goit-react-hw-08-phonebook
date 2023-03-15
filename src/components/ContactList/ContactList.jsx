import { useSelector } from 'react-redux';

import * as selectors from 'redux/selectors';
import ContactItem from 'components/ContactItem/ContactItem';
import Loader from 'components/Loader/Loader';
import css from './ContactList.module.css';

export default function ContactList() {
  const items = useSelector(selectors.getItems);
  const isLoading = useSelector(selectors.getIsLoading);
  const error = useSelector(selectors.getError);
  const filter = useSelector(selectors.getFilter);
  const filteredContacts =
    items.length > 0
      ? items.filter(item =>
          item.name.toLowerCase().includes(filter.toLowerCase())
        )
      : [];
  return (
    <>
      {isLoading && !error && <Loader />}
      {error && (
        <>
          <p style={{ textAlign: 'center', margin: 0, paddingTop: '0.7em' }}>
            Oops, something went wrong :(
          </p>
          <p style={{ textAlign: 'center', margin: 0 }}>{error}</p>
        </>
      )}
      <ul className={css.list}>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </>
  );
}
