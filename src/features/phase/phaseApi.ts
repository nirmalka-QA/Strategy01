import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { PhaseStatus } from './phaseSlice';

interface UpdatePhaseStatusRequest {
  phaseId: string;
  status: PhaseStatus;
}

export const phaseApi = createApi({
  reducerPath: 'phaseApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    updatePhaseStatus: builder.mutation<void, UpdatePhaseStatusRequest>({
      query: ({ phaseId, status }) => ({
        url: `/phases/${phaseId}/status`,
        method: 'PATCH',
        body: { status },
      }),
    }),
  }),
});

export const { useUpdatePhaseStatusMutation } = phaseApi;
