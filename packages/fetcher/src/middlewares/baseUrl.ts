import { createMiddleware } from './middleware';

const normalizeUrl = (url: string) =>
  url.endsWith('/') ? url.substring(0, url.length - 1) : url;

export const baseUrl = (url: string) => {
  const normalizedBaseUrl = normalizeUrl(url);

  return createMiddleware((next) => (request) => {
    const normalizedUrl = request.url.startsWith('/')
      ? request.url.substring(1, request.url.length)
      : request.url;

    request.url = `${normalizedBaseUrl}/${normalizedUrl}`;

    return next(request);
  });
};
