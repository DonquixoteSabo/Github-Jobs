import { rest } from 'msw';

export const handlers = [
  rest.get('/jobs', (req, res, ctx) => {
    return;
  }),
];
