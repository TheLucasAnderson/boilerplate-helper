import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithThemeProvider } from '../../utils/tests';
import { server, http, HttpResponse } from '../../mocks/server';
import { Home } from '.';

describe('Home', () => {
  const messageMock = 'Msw is running';

  it('renders a heading with the correct text', async () => {
    server.use(
      http.get('https://fake-json-api.mock.beeceptor.com/users', () => HttpResponse.json([{ message: messageMock }]))
    );

    renderWithThemeProvider(<Home />);

    screen.debug();

    // @TODO - Fix this test - Need to wait for the data to be fetched
    // await waitFor(() => expect(screen.getByText(messageMock)).toBeFalsy());
  });
});
