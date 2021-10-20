import { configureStore } from '@reduxjs/toolkit';
import { jobsApi } from './jobs';

export const store = configureStore({
  reducer: {
    [jobsApi.reducerPath]: jobsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobsApi.middleware),
});
