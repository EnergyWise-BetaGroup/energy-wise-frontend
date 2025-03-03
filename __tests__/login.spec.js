const { renderDOM } = require('./helpers');

let dom;
let document;

describe('Login Page - login.html', () => {
  beforeEach(async () => {
    dom = await renderDOM('../login.html'); // Load the login page
    document = await dom.window.document;
  });

  it('has a login form', () => {
    const form = document.querySelector('form');
    expect(form).toBeTruthy();
  });

  it('has a username input field', () => {
    const usernameInput = document.querySelector('input[type="text"]');
    expect(usernameInput).toBeTruthy();
  });

  it('has a password input field', () => {
    const passwordInput = document.querySelector('input[type="password"]');
    expect(passwordInput).toBeTruthy();
  });

  it('has a login button', () => {
    const loginButton = document.querySelector('button[type="submit"]');
    expect(loginButton).toBeTruthy();
    expect(loginButton.innerHTML).toBe('Login');
  });

  it('prevents form submission with empty fields', async () => {
    const form = document.querySelector('form');
    form.dispatchEvent(new dom.window.Event('submit'));

    // Expect no redirect and an alert to show
    expect(window.location.href).not.toContain('stats.html');
  });
  

});


/*

it('calls the login function and sends request to API', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ token: 'fakeToken123' })
      })
    );

    const form = document.querySelector('form');
    const usernameInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');

    usernameInput.value = 'testUser';
    passwordInput.value = 'password123';

    form.dispatchEvent(new dom.window.Event('submit'));

    expect(fetch).toHaveBeenCalledWith('http://energywise.ddns.net/users/login', expect.any(Object));
  });


  it('displays an error if login fails', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ error: 'Invalid credentials' })
      })
    );

    window.alert = jest.fn(); // Mock alert function

    const form = document.querySelector('form');
    const usernameInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');

    usernameInput.value = 'wrongUser';
    passwordInput.value = 'wrongPassword';

    form.dispatchEvent(new dom.window.Event('submit'));

    expect(window.alert).toHaveBeenCalledWith('Invalid credentials');
  });

*/