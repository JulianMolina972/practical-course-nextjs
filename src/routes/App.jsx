import React from 'react';
import { Home } from '@pages/Home';
import { Login } from '@pages/Login';
import { Layout } from '@containers/Layout';
import { Orders } from '@pages/Orders';
import { Checkout } from '@pages/Checkout';
import { NotFound } from '@pages/NotFound';
import { MyAccount } from '@pages/MyAccount';
import { SendEmail } from '@pages/SendEmail';
import { NewPassword } from '@pages/NewPassword';
import { CreateAccount } from '@pages/CreateAccount';
import { PasswordRecovery } from '@pages/PasswordRecovery';
import { BrowserRouter, Routes ,Route } from 'react-router-dom' ;
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/global.css';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/password-recovery" element={<PasswordRecovery />} />
            <Route path="/send-email" element={<SendEmail />} />
            <Route path="/new-password" element={<NewPassword />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/singup" element={<CreateAccount />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;