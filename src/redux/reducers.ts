import { createSlice } from '@reduxjs/toolkit';

//I will change that later;
interface State {
  jobs: any[];
  filteredJobs: any[];
}

const initialState = { jobs: [], filteredJobs: [] } as State;

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    getJobs(state) {
      state.jobs = ['siema'];
    },
    addJob(state) {
      state.jobs.push('siema');
    },
  },
});

export const { getJobs, addJob } = jobSlice.actions;
export default jobSlice.reducer;
