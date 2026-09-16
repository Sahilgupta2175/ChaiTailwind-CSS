import extractClassesFromHTML from "./extractor.js";
import { generateCSS } from "./generator.js";

function compile(html) {
  if (typeof html !== "string") {
    throw new TypeError("compile(html) expects html to be a string");
  }

  const classes = extractClassesFromHTML(html);

  return classes
    .map((className) => generateCSS(className))
    .join("\n");
}

const generateCSSFromHTML = compile;

export { compile, generateCSSFromHTML };