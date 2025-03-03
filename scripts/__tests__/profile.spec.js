const { beforeEach, describe, it, expect } = require("@jest/globals");
const { renderDOM } = require("./helpers");

let dom;
let document;

describe("profile.html", () => {
  beforeEach(async () => {
    dom = await renderDOM("./profile.html"); // Ensure correct file path
    document = dom.window.document;
  });

  it("has a small header with the EnergyWise logo", () => {
    const header = document.querySelector(".header-sm h1");
    expect(header).toBeTruthy();
    expect(header.textContent).toMatch(/EnergyWise/i);
  });

  it("has a profile image with alt text", () => {
    const profileImg = document.querySelector(".round-image");
    expect(profileImg).toBeTruthy();
    expect(profileImg.getAttribute("alt")).toBe("Profile picture");
  });

  it("displays user information fields", () => {
    const infoSection = document.querySelector(".white-box-1");
    expect(infoSection).toBeTruthy();
    
    const expectedLabels = ["Email:", "Account Number:", "Address:", "D.O.B.:", "Household Size:", "Type of Residence:"];
    expectedLabels.forEach(label => {
      expect(infoSection.textContent).toContain(label);
    });
  });

  it("displays tariff details", () => {
    const tariffSection = document.querySelector(".white-box-2");
    expect(tariffSection).toBeTruthy();
    
    const expectedLabels = ["Provider:", "Tariff Name:", "Account:", "API Key:"];
    expectedLabels.forEach(label => {
      expect(tariffSection.textContent).toContain(label);
    });
  });

  it("has a functional bottom navigation bar", () => {
    const navLinks = [
      { selector: "a[href='/']", text: "Home" },
      { selector: "a[href='actions.html']", text: "Actions" },
      { selector: "a[href='profile.html']", text: "Profile" },
      { selector: "a[href='stats.html']", text: "Stats" },
      { selector: "a[href='logout.html']", text: "Logout" },
    ];

    navLinks.forEach(({ selector, text }) => {
      const link = document.querySelector(selector);
      expect(link).toBeTruthy();
      expect(link.textContent).toContain(text);
    });
  });
});
