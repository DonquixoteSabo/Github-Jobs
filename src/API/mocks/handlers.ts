import { ALL_ORIGIN } from 'API/allOrigin';
import { rest } from 'msw';
import { Api_data } from 'types/ApiData';
//types
import { Job } from 'types/Job';
import { jobs } from './mockedJobs';

export const handlers = [
  rest.get('/jobs/all', async (req, res, ctx) => {
    return res(ctx.json(jobs));
  }),
];
