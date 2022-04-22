import { configureStore } from '@reduxjs/toolkit';
import createRootReducer from './slices';

const store = configureStore({
  reducer: createRootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [],
});

export default store;