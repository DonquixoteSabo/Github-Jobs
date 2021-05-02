import { createAction } from '@reduxjs/toolkit';

export const filterJobs = createAction<string>('filterJobs');
