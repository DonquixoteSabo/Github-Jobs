import { rest } from 'msw';
import { jobs } from './mockedJobs';

export const mockedDataHandlers = [
  rest.get('/jobs', async (req, res, ctx) => {
    return res(ctx.json(jobs));
  }),
];
