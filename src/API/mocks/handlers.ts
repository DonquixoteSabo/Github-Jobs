import { ALL_ORIGIN } from 'API/allOrigin';
import { rest } from 'msw';
import { Api_data } from 'types/ApiData';
//types
import { Job } from 'types/Job';

export const handlers = [
  rest.get('/jobs', async (req, res, ctx) => {
    const response: Response = await ctx.fetch(
      `${ALL_ORIGIN}https://jobs.github.com/positions.json?description=ruby&page=1`
    );
    const data: Api_data[] = await response.json();
    // Our api uses snake case instead of camel case so we have to change it in this awful way.
    const jobs: Job[] = data.map((job) => ({
      company: job.company,
      companyLogo: job.company_logo,
      createdAt: job.created_at,
      id: job.id,
      location: job.location,
      title: job.title,
      type: job.type,
    }));
    return res(ctx.json(jobs));
  }),
];
