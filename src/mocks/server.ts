export * from 'msw';
import { setupServer } from 'msw/node';
import { handlers } from './handlers';
/**
 * Sets up a mock server with the provided handlers.
 *
 * @param handlers - The handlers to be used by the server.
 * @returns The worker instance.
 */
export const server = setupServer(...handlers);