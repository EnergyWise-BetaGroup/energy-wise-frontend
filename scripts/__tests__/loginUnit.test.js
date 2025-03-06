const { beforeEach, describe, it, expect } = require("@jest/globals");
const { renderDOM } = require("./helpers");

let dom;
let document;
let login;

describe("login functionality", () => {
    beforeEach(async () => {
        dom = await renderDOM("./login.html"); // Use the actual HTML file, not the JS file
        document = dom.window.document;

        // Now require login.js after the DOM is set up
        ({ login } = require("../login"));
    });

    it("has a login function", () => {
        expect(login).toBeDefined();
    });

    
});
