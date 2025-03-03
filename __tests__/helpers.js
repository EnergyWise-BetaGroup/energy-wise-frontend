const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

// Polyfill TextEncoder and TextDecoder
if (typeof global.TextEncoder === 'undefined') {
  const { TextEncoder, TextDecoder } = require('util');
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}

// Modify `renderDOM` to ignore CSS files
const renderDOM = async (filename) => {
  const filePath = path.join(process.cwd(), filename);
  
  const dom = await JSDOM.fromFile(filePath, {
    runScripts: 'dangerously',
    resources: 'usable',
    pretendToBeVisual: true,
    beforeParse(window) {
      // Prevent JSDOM from throwing errors due to missing stylesheets
      window.document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => link.remove());
    }
  });

  return new Promise((resolve) => {
    dom.window.document.addEventListener('DOMContentLoaded', () => {
      resolve(dom);
    });
  });
};

module.exports = { renderDOM };
