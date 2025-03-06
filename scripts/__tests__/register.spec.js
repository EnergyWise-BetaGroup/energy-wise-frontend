const { beforeEach, describe, it, expect } = require("@jest/globals");
const { renderDOM } = require("./helpers");

let dom;
let document;

describe("register.html", () => {
  beforeEach(async () => {
    dom = await renderDOM("./register.html"); // Ensure correct path
    document = dom.window.document;
  });

  it("has a first name input field", () => {
    const firstNameInput = document.querySelector("#first-name");
    expect(firstNameInput).toBeTruthy();
    expect(firstNameInput.tagName).toBe("INPUT");
    expect(firstNameInput.type).toBe("text");
  });

  it("has a username input field", () => {
    const usernameInput = document.querySelector("#username");
    expect(usernameInput).toBeTruthy();
    expect(usernameInput.tagName).toBe("INPUT"); 
    expect(usernameInput.type).toBe("text"); 
  });

  it("has an email input field", () => {
    const emailInput = document.querySelector("#email");
    expect(emailInput).toBeTruthy();
    expect(emailInput.tagName).toBe("INPUT"); 
    expect(emailInput.type).toBe("email"); 
  });  

  it("has a password input field", () => {
    const passwordInput = document.querySelector("#password");
    expect(passwordInput).toBeTruthy();
    expect(passwordInput.tagName).toBe("INPUT"); 
    expect(passwordInput.type).toBe("password");  
  });

  it("has a repeat password input field", () => {
    const repeatPasswordInput = document.querySelector("#repeat-password");
    expect(repeatPasswordInput).toBeTruthy();
    expect(repeatPasswordInput.tagName).toBe("INPUT"); 
    expect(repeatPasswordInput.type).toBe("password");  
  });

  it("postcode input field", () => {
    const postcodeInput = document.querySelector("#postcode");
    expect(postcodeInput).toBeTruthy();
    expect(postcodeInput.tagName).toBe("INPUT"); 
    expect(postcodeInput.type).toBe("text");  
  });

  it("household size input field", () => {
    const householdSizeInput = document.querySelector("#household-size");
    expect(householdSizeInput).toBeTruthy();
    expect(householdSizeInput.tagName).toBe("INPUT"); 
    expect(householdSizeInput.type).toBe("text");  
  });

});
