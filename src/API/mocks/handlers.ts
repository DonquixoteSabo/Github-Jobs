import { rest } from 'msw';
//data
import { jobs } from './mockedJobs';

// TODO
// REFACTOR ENDPOINTS
// instead of /jobs/:searchValue use /jobs?search=?value
// to show only fulltime jobs use /jobs?fulltime
// to filter by city, state or country use /jobs?city=value
// to use dots under location input use /jobs?location=value
//ofc at the very end it may look like: /jobs?search=example&fulltime%city=442&location=new-york
// TODO

// Due to changes in github API I decide to mock jobs response
export const handlers = [
  rest.get('/jobs/all', (req, res, ctx) => res(ctx.json(jobs))),
  rest.get('/jobs', (req, res, ctx) => {
    const value = req.url.searchParams.get('search');
    console.log(value);
    const filteredJobs = jobs.filter((job) =>
      job.title.toLowerCase().includes(value!)
    );

    return res(ctx.json(filteredJobs));
  }),
];
