import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type NavigationPage =
  | 'discovery'
  | 'requirements'
  | 'generation'
  | 'evaluation'
  | 'implementation'
  | 'settings';

interface NavigationState {
  activePage: NavigationPage;
}

const initialState: NavigationState = {
  activePage: 'discovery',
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    navigateTo(state, action: PayloadAction<NavigationPage>) {
      state.activePage = action.payload;
    },
  },
});

export const { navigateTo } = navigationSlice.actions;
export default navigationSlice.reducer;
