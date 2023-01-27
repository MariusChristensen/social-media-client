import { login } from './login';

const lsSetItem = jest.fn();
// eslint-disable-next-line no-undef
global.localStorage = {
  setItem: lsSetItem,
};

// eslint-disable-next-line no-undef
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ accessToken: 'TOKEN', userName: 'foo' }),
    ok: true,
    statusCode: 200,
  })
);

describe('login', () => {
  it('stores token when valid credentials', async () => {
    await login('foo@bar.com', 'password');
    expect(lsSetItem).toHaveBeenNthCalledWith(
      1,
      'token',
      JSON.stringify('TOKEN')
    );
  });
});
