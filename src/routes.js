import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import SearchResult from './pages/SearchResult';
import Login from './pages/Login';

const Navigation = () => {
  const isAuthorized = false;


  return (
    <BrowserRouter>
      <Switch>
        {isAuthorized ? (
          <>
            <Route path="/search-results"><SearchResult /></Route>
            <Route path="/search"><Search /></Route>
            <Route path="/" ><Home /></Route>
            <Redirect to="/" />

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

