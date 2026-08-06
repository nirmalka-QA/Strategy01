import { combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from '../features/counter';
import { phaseReducer, phaseApi } from '../features/phase';
import { authReducer } from '../features/auth';
import { navigationReducer } from '../features/navigation';

export const rootReducer = combineReducers({
  counter: counterReducer,
  phase: phaseReducer,
  auth: authReducer,
  navigation: navigationReducer,
  [phaseApi.reducerPath]: phaseApi.reducer,
});
