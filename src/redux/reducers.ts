import { createSlice } from '@reduxjs/toolkit';
//types
import { Job } from 'types/Job';
//I will change that later;
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
});

export const { filterJobs } = jobSlice.actions;
export default jobSlice.reducer;
