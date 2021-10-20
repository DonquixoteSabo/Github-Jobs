import { rest } from 'msw';
//data
import { jobs } from './mockedJobs';

export const handlers = [
  // Due to changes in github API I decide to mock jobs response
  rest.get('/jobs/:searchValue', async (req, res, ctx) => {
    const { searchValue } = req.params;
    const filteredJobs = jobs.filter((job) =>
      job.title.toLowerCase().includes(searchValue)
    );
    console.log(searchValue);
    return res(ctx.json(filteredJobs));
  }),
];
