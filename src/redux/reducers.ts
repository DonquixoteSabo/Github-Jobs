import { createSlice } from '@reduxjs/toolkit';
//types
import { Job } from 'types/Job';

const mockedJob = {
  companyLogo:
    'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaDZpIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--fe7f469e66f2c1e1811cbf7ab809c29c18998d89/Corporate%20Logo.png',
  createdAt: 'Tue Apr 27 21:48:01 UTC 2021',
  company: 'Vista Higher Learning',
  id: '8c35f2eb-7f9b-4c3d-8b9b-afbd3bb73fd4',
  type: 'Full Time',
  location: 'Boston, MA, USA',
  title: 'Senior Software Engineer',
};
interface State {
  jobs: Job[];
  filteredJobs: Job[];
}

const initialState = { jobs: [mockedJob], filteredJobs: [] } as State;

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
