import { compose, Dispatch, Middleware } from './middlewares/middleware';
import { asNativeRequest, HttpRequest } from './request';

export type Fetch = typeof fetch;
export type Path = string;

export interface ClientConfiguration {
  middleware?: Middleware<any>;
  fetch?: Fetch;
}

function dispatcher(client: Fetch = fetch): Dispatch<Response> {
  return (request: HttpRequest) => client(asNativeRequest(request));
}

export function withDefaults(
  request: Partial<HttpRequest>
): Partial<HttpRequest> {
  return {
    context: {},
    credentials: 'same-origin',
    headers: new Headers(),
    mode: 'same-origin',
    ...request,
  };
}

export function fetcher(opts: ClientConfiguration = {}) {
  const dispatchRequest = dispatcher(opts.fetch);

  const dispatch = opts.middleware
    ? opts.middleware(dispatchRequest)
    : dispatchRequest;

  const executeRequest = compose(dispatch, withDefaults);

  return <T = any>(
    path: Path,
    options: Partial<HttpRequest> = {}
  ): Promise<T> =>
    executeRequest({
      ...options,
      url: path,
    }) as Promise<T>;
}
