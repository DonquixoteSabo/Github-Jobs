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
    filterJobs(state) {
      //yo
    },
  },
});

export const { filterJobs } = jobSlice.actions;
export default jobSlice.reducer;
