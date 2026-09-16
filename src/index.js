import generateCSSFromHTML from "./compiler.js";

const htmlInput = document.querySelector('html').outerHTML;

console.log(generateCSSFromHTML(htmlInput));