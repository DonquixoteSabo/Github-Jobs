import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Job } from 'types/Job';

export const jobsApi = createApi({
  reducerPath: 'jobsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/jobs/' }),
  endpoints: (builder) => ({
    getJobs: builder.query<Job[], string>({
      query: (search) => (search.length ? `?search=${search}` : '/all'),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetJobsQuery } = jobsApi;
