import React from 'react';
import './App.css';
import store from './store/index';
import { Provider } from 'react-redux';
import AppRouter from './router';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 62.5%;
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
`;

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <AppRouter />
    </Provider>
  );
}

export default App;
