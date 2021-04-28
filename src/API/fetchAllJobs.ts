import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
//constants
import { ALL_ORIGIN } from './allOrigin';

interface Api_data {
  company: string;
  company_logo: string;
  created_at: string;
  id: string;
  location: string;
  title: string;
  type: string;
}

export const fetchAllJobs = createAsyncThunk('jobs/fetchAllJobs', async () => {
  const response = await axios(
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
});
