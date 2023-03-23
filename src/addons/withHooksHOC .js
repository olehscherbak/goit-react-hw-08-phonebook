import { useDispatch } from 'react-redux';

export const withHooksHOC = Component => {
  return props => {
    const dispatch = useDispatch();

    return <Component dispatch={dispatch} {...props} />;
  };
};
