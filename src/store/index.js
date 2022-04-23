import { configureStore } from '@reduxjs/toolkit';
import createRootReducer from './slices';

const store = configureStore({
  reducer: createRootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  // middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware({
  //   immutableCheck: false,
  //   serializableCheck: false,
  // }),
  enhancers: [],
});

export default store;