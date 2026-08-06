import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type PhaseStatus = 'Not Started' | 'In Progress' | 'Complete';

interface Phase {
  id: string;
  name: string;
  status: PhaseStatus;
}

interface PhaseState {
  currentPhase: Phase;
}

const initialState: PhaseState = {
  currentPhase: {
    id: 'PHASE-001',
    name: 'Discovery Phase',
    status: 'In Progress',
  },
};

const phaseSlice = createSlice({
  name: 'phase',
  initialState,
  reducers: {
    updatePhaseStatus(state, action: PayloadAction<PhaseStatus>) {
      state.currentPhase.status = action.payload;
    },
  },
});

export const { updatePhaseStatus } = phaseSlice.actions;
export default phaseSlice.reducer;
