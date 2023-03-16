import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Layout from './Layout/Layout';
import RegisterForm from './RegisterForm/RegisterForm';
import LoginForm from './LoginForm/LoginForm';
import Contacts from './Contacts/Contacts';
import Home from './Home/Home';
import { fetchContacts } from 'redux/contacts/operations';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
