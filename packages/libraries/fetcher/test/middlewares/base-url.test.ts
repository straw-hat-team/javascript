import { fetcher } from '../../src/index';
import { baseUrl } from '../../src/middlewares/base-url';

describe('.baseUrl', () => {
  const client = fetcher({
    middleware: baseUrl('http://api.acmec.com/v2'),
  });
  const path = '/vapid/rfis';

  afterEach(() => {
    fetchMock.resetMocks();
  });

  it('sets the base url to the path', async () => {
    await client(path);
    expect(fetchMock.mock.calls[0][0].url).toBe(
      'http://api.acmec.com/v2/vapid/rfis'
    );
  });

  it('removes the backslash from the base url', async () => {
    const localClient = fetcher({
      middleware: baseUrl('http://api.acmec.com/v2/'),
    });

    await localClient(path);
    expect(fetchMock.mock.calls[0][0].url).toBe(
      'http://api.acmec.com/v2/vapid/rfis'
    );
  });
});
