const { renderDOM } = require('../../__tests__/helpers');

let dom;
let document;

describe('Login Page - login.html', () => {
  beforeEach(async () => {
    dom = await renderDOM('login.html'); // Ensure correct path
    document = await dom.window.document;

    // Mock fetch globally for all tests
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: async () => ({ token: 'mockedToken123' }),
      })
    );
  });

  afterEach(() => {
    jest.restoreAllMocks(); // Cleanup mocks after each test
  });

  it('fetches data successfully and sends API request', async () => {
    const form = document.querySelector('form');
    const usernameInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');

    usernameInput.value = 'testuser';
    passwordInput.value = 'password123';

    // Dispatch a submit event
    form.dispatchEvent(new dom.window.Event('submit'));

    // Expect fetch to have been called with the correct API URL
    expect(fetch).toHaveBeenCalledWith(
      'http://energywise.ddns.net/users/login',
      expect.any(Object)
    );
  });
});
