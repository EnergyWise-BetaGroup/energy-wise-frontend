const { beforeEach, describe, it, expect } = require("@jest/globals");
const { renderDOM } = require('./helpers');

// let dom;
// let document;

// describe('login.html', () => {
//   beforeEach(async () => {
//     dom = await renderDOM('./login.html');
//     document = await dom.window.document;
//   })
  
//     it("has a username input field", () => {
//         const usernameInput = document.querySelector("#username");
//         expect(usernameInput).toBeTruthy();
//         expect(usernameInput.tagName).toBe("INPUT"); 
//         expect(usernameInput.type).toBe("text"); 
//     });

//     it("has a password input field", () => {
//         const passwordInput = document.querySelector("#password");
//         expect(passwordInput).toBeTruthy();
//         expect(passwordInput.tagName).toBe("INPUT"); 
//         expect(passwordInput.type).toBe("password");  
//     });

//     it("has a login form", () => {
//         const loginForm = document.querySelector("#login-form");
//         expect(loginForm).toBeTruthy();
//         expect(loginForm.tagName).toBe("FORM"); 
//     });

//     it("has a submit button with the correct label", () => {
//         const submitButton = document.querySelector('button[type="submit"]');
//         expect(submitButton).toBeTruthy();
//         expect(submitButton.innerHTML.trim()).toBe("Login"); 
//     });

// });

// const { renderDOM } = require('../../__tests__/helpers');
 
let dom;

let document;
 
describe('Login Page - login.html', () => {
   

  beforeEach(async () => {

    dom = await renderDOM('login.html'); 

    document = dom.window.document;

    global.localStorage = {
        store: {},
        getItem: jest.fn((key) => global.localStorage.store[key] || null),
        setItem: jest.fn((key, value) => {
          global.localStorage.store[key] = value;
        }),
        removeItem: jest.fn((key) => {
          delete global.localStorage.store[key];
        }),
        clear: jest.fn(() => {
          global.localStorage.store = {};
        }),
      };
 
    // Mock fetch globally

    jest.spyOn(global, 'fetch').mockImplementation(() =>

      Promise.resolve({

        ok: true,

        json: async () => ({ token: 'mockedToken123' }),

      })

    );
 
    // Mock localStorage

    // jest.spyOn(Storage.prototype, 'setItem');
 
    // Mock window.location.assign to prevent navigation

    delete dom.window.location;

    // dom.window.location = { assign: jest.fn() };

  });
 
  afterEach(() => {

    jest.restoreAllMocks();

  });
 
  it('sends a login request and stores the token on success', async () => {

    const form = document.querySelector('form');

    const usernameInput = document.querySelector('input[type="text"]');

    const passwordInput = document.querySelector('input[type="password"]');
 
    usernameInput.value = 'testuser';

    passwordInput.value = 'password123';
 
    // Dispatch submit event

    const submitEvent = new dom.window.Event('submit', { bubbles: true, cancelable: true });

    form.dispatchEvent(submitEvent);
 
    // Wait for async operations

    await new Promise(setImmediate);
 
    // Extract the URL used in the fetch call

    const fetchUrl = fetch.mock.calls[0]; // First argument in first fetch call
    console.log(fetchUrl)
 
    // Verify fetch was called with the correct parameters

    expect(fetchUrl).toMatch(/http:\/\/energywise\.ddns\.net:\d+\/users\/login/);

    expect(fetch).toHaveBeenCalledWith(

      expect.any(String),

      expect.objectContaining({

        method: 'POST',

        headers: expect.objectContaining({ 'Content-Type': 'application/json' }),

        body: JSON.stringify({ username: 'testuser', password: 'password123' }),

      })

    );
 
    // Verify token storage

    expect(localStorage.setItem).toHaveBeenCalledWith('token', 'mockedToken123');
 
    // Verify page redirection

    expect(window.location.assign).toHaveBeenCalledWith('stats.html');

  });

});

 