import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

/**
 * Sets up a worker for handling network requests in the browser.
 *
 * @param handlers - The request handlers to be used by the worker.
 * @returns The worker instance.
 */
export const worker = setupWorker(...handlers);