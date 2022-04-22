import React from 'react';
import './App.css';
import store from './store/index';
import { Provider } from 'react-redux';
import AppRouter from './router';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
