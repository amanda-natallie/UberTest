import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LayoutWrapper, Input, Button, Divider } from '../../components';
import { setAuthenticated } from '../../store/modules/auth/actions';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = () => {
    dispatch(setAuthenticated(true));
    history.push('/home');
  };

  return (
    <LayoutWrapper>
      <Divider height={200} />
      <img src="https://static.tvmaze.com/images/tvm-header-logo.png" alt="logo" />
      <h1>Sign In</h1>
      <form className="form-wrapper">
        <div className="form-group">
          <span>Your email / username</span>
          <Input setValue={(e) => setLogin(e.target.value)} value={login} type="text" />
        </div>
        <div className="form-group">
          <span>Your password</span>
          <Input setValue={(e) => setPassword(e.target.value)} value={password} type="password" />
        </div>
        <Button
          text="Sign In"
          action={() => handleLogin()}
          type="button"
          disabled={!login || !password}
        />
      </form>

    </LayoutWrapper>
  );
};

export default Login;
