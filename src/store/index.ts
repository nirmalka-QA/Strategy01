import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { phaseApi } from '../features/phase';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(phaseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
