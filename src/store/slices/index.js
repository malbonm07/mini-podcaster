import { combineReducers } from '@reduxjs/toolkit';
import podcasts from './podcasts';

const rootReducer = combineReducers({
    podcasts
});

const createRootReducer = (
  state,
  action,
) => {
  return rootReducer(state, action);
};

export default createRootReducer;