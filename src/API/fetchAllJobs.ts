import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
//constants
import { ALL_ORIGIN } from './allOrigin';
//types
import { Api_data } from 'types/ApiData';

export const fetchAllJobs = createAsyncThunk('jobs/fetchAllJobs', async () => {
  const response = await axios.get(
    `${ALL_ORIGIN}https://jobs.github.com/positions.json?description=ruby&page=1`
  );

  const data = response.data;
  // Our api uses snake case instead of camel case so we have to change it in this awful way.
  const jobs = data.map((job: Api_data) => ({
    company: job.company,
    companyLogo: job.company_logo,
    createdAt: job.created_at,
    id: job.id,
    location: job.location,
    title: job.title,
    type: job.type,
  }));
  return jobs;
  // const response = await axios.get('/jobs');
  // const data = await response.data;
  // return data;
});
