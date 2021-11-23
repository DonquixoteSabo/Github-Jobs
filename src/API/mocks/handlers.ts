import { rest } from 'msw';
//data
import { jobs } from './mockedJobs';

const filterJobs = ({
  location,
  isFullTime,
  value = null,
}: {
  location: string | null;
  isFullTime: string | null;
  value?: string | null;
}) => {
  let filteredJobs = jobs;

  if (location) {
    filteredJobs = filteredJobs.filter((job) =>
      job.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  if (isFullTime) {
    filteredJobs = filteredJobs?.filter((job) => job.type === 'Full Time');
  }

  if (value) {
    filteredJobs = filteredJobs.filter((job) =>
      job.title.toLowerCase().includes(value!.toLowerCase())
    );
  }

  return filteredJobs;
};

enum Params {
  fulltime = 'fulltime',
  location = 'location',
  value = 'search',
}

// Due to changes in github API I decide to mock jobs response
export const handlers = [
  rest.get('/jobs/all', (req, res, ctx) => {
    const isFullTime = req.url.searchParams.get(Params.fulltime);
    const location = req.url.searchParams.get(Params.location);
    let filteredJobs = filterJobs({ isFullTime, location });

    return res(ctx.json(filteredJobs));
  }),
  rest.get('/jobs', (req, res, ctx) => {
    const value = req.url.searchParams.get(Params.value);
    const isFullTime = req.url.searchParams.get(Params.fulltime);
    const location = req.url.searchParams.get(Params.location);
    let filteredJobs = filterJobs({ isFullTime, location, value });

    return res(ctx.json(filteredJobs));
  }),
  rest.get('/jobs/job/:id', (req, res, ctx) => {
    const { id } = req.params;
    const job = jobs.filter((job) => job.id.toString() === id);
    console.log(job);
    return res(ctx.json(job[0]));
  }),
];
