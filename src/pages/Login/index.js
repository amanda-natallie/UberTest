import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LayoutWrapper, Input, Button, Divider } from '../../components';
import { setAuthenticated } from '../../store/modules/auth/actions';
import './styles.css';

const Login = () => {
  const { user: u, password: p } = useSelector(state => state.auth);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = () => {
    if (u === login && p === password) {
      dispatch(setAuthenticated(true));
      history.push('/');
      setShowMessage(false);
    } else {
      setShowMessage(true);
    }
  };

  const resetForm = () => {
    if (showMessage) {
      setLogin('');
      setShowMessage(false);
      setPassword('');
    }
  };

  return (
    <LayoutWrapper>
      <Divider height={200} />
      <img src="https://static.tvmaze.com/images/tvm-header-logo.png" alt="logo" />
      <h1>Sign In</h1>
      <form className="form-wrapper">
        <div className="form-group">
          <span>Your username</span>
          <Input
            isValid={!showMessage}
            onFocus={() => resetForm()}
            setValue={(e) => setLogin(e.target.value)}
            value={login}
            type="text"
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <span>Your password</span>
          <Input
            setValue={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            isValid={!showMessage}
            onFocus={() => resetForm()}
            placeholder="Enter your password"
          />
        </div>
        {showMessage && <span className="error-message">Your credentials are not valid. Try again</span>}
        <Button
          text="Sign In"
          action={() => handleLogin()}
          type="button"
          disabled={!login || !password || showMessage}
        />
      </form>

    </LayoutWrapper>
  );
};

export default Login;
