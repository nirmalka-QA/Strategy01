import { combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from '../features/counter';
import { phaseReducer, phaseApi } from '../features/phase';
import { authReducer } from '../features/auth';

export const rootReducer = combineReducers({
  counter: counterReducer,
  phase: phaseReducer,
  auth: authReducer,
  [phaseApi.reducerPath]: phaseApi.reducer,
});
