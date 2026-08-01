import { combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from '../features/counter';

export const rootReducer = combineReducers({
  counter: counterReducer,
});
