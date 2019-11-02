import { compose, Dispatch, Middleware } from './middlewares';
import { asNativeRequest, HttpRequest } from './request';

export type Fetch = typeof fetch;
export type Path = string;

export interface IClientConfiguration {
  middleware?: Middleware<any>;
  fetch?: Fetch;
}

function dispatcher(client: Fetch = fetch): Dispatch<Response> {
  return (request: HttpRequest) => client(asNativeRequest(request));
}

export const withDefaults = (
  request: Partial<HttpRequest>
): Partial<HttpRequest> => ({
  context: {},
  credentials: 'same-origin',
  headers: new Headers(),
  mode: 'same-origin',
  ...request,
});

export function fetcher(opts: IClientConfiguration = {}) {
  const dispatchRequest = dispatcher(opts.fetch);

  const dispatch = opts.middleware
    ? opts.middleware(dispatchRequest)
    : dispatchRequest;

  const executeRequest = compose(
    dispatch,
    withDefaults
  );

  return <T = any>(
    path: Path,
    options: Partial<HttpRequest> = {}
  ): Promise<T> =>
    executeRequest({
      ...options,
      url: path,
    }) as Promise<T>;
}
