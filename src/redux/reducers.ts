import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//thunks
import { fetchAllJobs } from 'API/fetchAllJobs';
//types
import { Job } from 'types/Job';
import { filterJobs } from './actions';

interface State {
  jobs: Job[];
  filteredJobs: Job[];
}

const initialState = { jobs: [], filteredJobs: [] } as State;

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(filterJobs, (state, action: PayloadAction<string>) => {
        const filtered = state.jobs.filter(
          (job: Job) =>
            job.company.toLowerCase().includes(action.payload.toLowerCase()) ||
            job.title.toLowerCase().includes(action.payload.toLowerCase()) ||
            job.type.toLowerCase().includes(action.payload.toLowerCase()) ||
            job.location.toLowerCase().includes(action.payload.toLowerCase())
        );
        state.filteredJobs = filtered;
      })
      .addCase(fetchAllJobs.fulfilled, (state, action) => {
        state.jobs = action.payload;
        state.filteredJobs = action.payload;
      });
  },
});

// export const { filterJobs } = jobSlice.actions;
export { fetchAllJobs };
export default jobSlice.reducer;
