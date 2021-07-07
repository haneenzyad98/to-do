import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';

import LoginProvider from './components/auth/setting';


const Main = () => <App />;


const rootElement = document.getElementById('root');
ReactDOM.render(
  <LoginProvider>
    <Main />
  </LoginProvider>,
  rootElement,
);