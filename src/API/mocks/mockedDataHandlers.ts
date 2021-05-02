import { rest } from 'msw';
//types
import { Job } from 'types/Job';

export const mockedDataHandlers = [
  rest.get('/jobs', async (req, res, ctx) => {
    const jobs: Job[] = [
      {
        id: '7e95bae3-1a81-40e8-b254-c73db01770ae',
        type: 'Full Time',
        createdAt: 'Fri Apr 30 19:14:11 UTC 2021',
        company: 'Bonanza.com, Inc.',
        location: 'Seattle, WA',
        title: 'Senior Rails Developer',
        companyLogo:
          'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbXlpIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8c12840bb800d886f0ce1a0213ea27b68e17cf61/bonz_green_square.png',
      },
      {
        id: '8c35f2eb-7f9b-4c3d-8b9b-afbd3bb73fd4',
        type: 'Full Time',
        createdAt: 'Tue Apr 27 21:48:01 UTC 2021',
        company: 'Vista Higher Learning',
        location: 'Boston, MA, USA',
        title: 'Senior Software Engineer',
        companyLogo:
          'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaDZpIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--fe7f469e66f2c1e1811cbf7ab809c29c18998d89/Corporate%20Logo.png',
      },
    ];
    return res(ctx.json(jobs));
  }),
];
