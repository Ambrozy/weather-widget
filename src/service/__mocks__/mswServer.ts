import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll } from "vitest";

export const getGetSuccessHandler = <T extends object>(
  url: string,
  response: T,
) => http.get(url, () => HttpResponse.json(response));
export const getGetErrorHandler = (url: string) =>
  http.get(url, () => HttpResponse.error());
export const startMockServer = () => {
  const server = setupServer();

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  return server;
};
