import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllJobs = createAsyncThunk('jobs/fetchAllJobs', async () => {
  const response = await axios.get('/jobs');
  const data = await response.data;
  return data;
});
