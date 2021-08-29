/* eslint-disable no-console */
import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import Login from './pages/Login';

const Navigation = () => {
  const { isAuthenticated } = useSelector(state => state.auth);

  return (
    <BrowserRouter>
      <Switch>
        {isAuthenticated ? (
          <>
            <Route path="/home" ><Home /></Route>
            <Redirect to="/home" />
          </>
      ) : (
        <>
          <Route exact path="/login"><Login /></Route>
          <Redirect to="/login" />
        </>
          )}
      </Switch>
    </BrowserRouter>

  );
};

export default Navigation;

