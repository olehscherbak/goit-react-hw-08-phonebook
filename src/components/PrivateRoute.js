import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  // console.log('isLoggedIn :', isLoggedIn);
  // console.log('isRefreshing :', isRefreshing);
  // console.log('shouldRedirect :', shouldRedirect);
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
