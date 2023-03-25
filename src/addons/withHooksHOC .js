import { useDispatch, useSelector } from 'react-redux';
import { getItems } from 'redux/contacts/selectors';

export const withHooksHOC = Component => {
  return props => {
    const dispatch = useDispatch();
    const contacts = useSelector(getItems);
    return <Component dispatch={dispatch} contacts={contacts} {...props} />;
  };
};
