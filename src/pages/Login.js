import React from 'react';
import LayoutWrapper from '../components/LayoutWrapper';

const Login = () => {
  const handleLogin = () => true;

  return (
    <LayoutWrapper>
      <div>Login Page :)</div>
      <button onClick={() => handleLogin()}>Oie</button>
    </LayoutWrapper>
  );
};

export default Login;
