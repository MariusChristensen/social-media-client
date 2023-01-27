import { logout } from './logout';

const lsRemoveItem = jest.fn();
// eslint-disable-next-line no-undef
global.localStorage = {
  removeItem: lsRemoveItem,
};

describe('logout', () => {
  it('clears token and profile', () => {
    logout();
    expect(lsRemoveItem).toHaveBeenNthCalledWith(1, 'token');
    expect(lsRemoveItem).toHaveBeenNthCalledWith(2, 'profile');
  });
});
