import { fetcher } from '../src/fetcher';
import { composeMiddleware } from '../src/middlewares';

describe('.fetcher', () => {
  const client = fetcher();
  const path = 'http://app.acmec.com';

  afterEach(() => {
    fetchMock.resetMocks();
  });

  describe('calls the fetch client', () => {
    it('with the global client', async () => {
      await client(path);
      expect(fetchMock.mock.calls[0][0].method).toEqual('GET');
    });

    it('with the provided client', async () => {
      const fetchSpy = jest.fn();
      await fetcher({
        fetch: fetchSpy,
      })(path);

      expect(fetchSpy).toHaveBeenCalled();
    });
  });

  it('calls the middleware', async () => {
    const middleware = jest.fn((next) => next);
    fetcher({
      middleware: composeMiddleware(middleware),
    });
    expect(middleware).toBeCalled();
  });
});
