import { createMiddleware } from './middleware';

export const defaultHeaders = (headers: Record<any, any>) =>
  createMiddleware(next => async request => {
    Object.entries(headers).forEach(([name, value]) =>
      request.headers.append(name, value)
    );

    return next(request);
  });
