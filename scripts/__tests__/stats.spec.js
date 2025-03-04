// const { beforeEach, describe, it, expect } = require("@jest/globals");
const { renderDOM } = require("./helpers");
// const { fetchChart } = require("../stats");


let dom;
let document;

describe("Stats Page - Charts Fetching", () => {
   

    beforeEach(async () => {
        dom = await renderDOM("./stats.html"); // Load the actual HTML file
        document = dom.window.document; // Get document from JSDOM
    });
    

    it("Has a main element", () => {
        const main = document.querySelector("main")
        expect(main).toBeTruthy
    })

    it("has a heading My footprint", () => {
        const h2 = document.querySelector(".background-div > h2")
        expect(h2).toBeTruthy
        expect(h2.innerHTML).toContain("My footprint")
    })

});
