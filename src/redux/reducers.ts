import { createSlice } from '@reduxjs/toolkit';
//thunks
import { fetchAllJobs } from 'API/fetchAllJobs';
//types
import { Job } from 'types/Job';

interface State {
  jobs: Job[];
  filteredJobs: Job[];
}

const initialState = { jobs: [], filteredJobs: [] } as State;

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    filterJobs(state) {
      //yo
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllJobs.fulfilled, (state, action) => {
      state.jobs = action.payload;
      state.filteredJobs = action.payload;
    });
  },
});

export const { filterJobs } = jobSlice.actions;
export { fetchAllJobs };
export default jobSlice.reducer;
