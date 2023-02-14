import { rest } from 'msw';

export const handlers = [
  rest.post('/login', (request, response, context) => {
    console.log(request);
    localStorage.setItem('is-authenticated', 'true');

    return response(context.status(200));
  }),
  rest.get('/user', (request, response, context) => {
    console.log(request);
    const isAuthenticated = localStorage.getItem('is-authenticated');

    if (!isAuthenticated) {
      return response(
        context.status(403),
        context.json({
          errorMessage: 'Not authorized',
        })
      );
    }

    return response(
      context.status(200),
      context.json({
        username: 'admin',
      })
    );
  }),
];
