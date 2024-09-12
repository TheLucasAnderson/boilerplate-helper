import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://fake-json-api.mock.beeceptor.com/users', () => {
    return HttpResponse.json([{
        name: 'Msw is Running'
      }],
    );
  }),
];
