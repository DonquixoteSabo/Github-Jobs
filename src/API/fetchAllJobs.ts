import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllJobs = createAsyncThunk('jobs/fetchAllJobs', async () => {
  //Right now im too tired to work with it. I will think about it few days laters. Right now I dont really care what will I do before deployment and how this endpoint will word.
  const response = await axios.get('/jobs');
  const data = await response.data;
  return data;
});
