import { combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from '../features/counter';
import { phaseReducer } from '../features/phase';

export const rootReducer = combineReducers({
  counter: counterReducer,
  phase: phaseReducer,
});
