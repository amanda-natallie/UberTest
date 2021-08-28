import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Navigation from './routes';
import './app.css';


const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
    );


export default App;
