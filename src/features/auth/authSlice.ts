import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type UserRole = 'admin' | 'viewer' | 'none';

const ROLES_WITH_PHASE_CHANGE: UserRole[] = ['admin'];

interface AuthState {
  role: UserRole;
}

const initialState: AuthState = {
  role: 'admin',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRole(state, action: PayloadAction<UserRole>) {
      state.role = action.payload;
    },
  },
});

export const { setRole } = authSlice.actions;
export { ROLES_WITH_PHASE_CHANGE };
export default authSlice.reducer;
