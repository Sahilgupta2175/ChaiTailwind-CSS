import parseClass from "./parser.js";
import { getUtilityInfo } from "./utilities.js";
import { valueResolvers } from "./values.js";

function generateCSS(className) {
  const { utility, value } = parseClass(className);
  const utilityInfo = getUtilityInfo(utility);

  if (!utilityInfo) {
    return "";
  }

  const { property, type } = utilityInfo;

  const resolver = valueResolvers[type];

  if (!resolver) {
    return "";
  }

  const resolvedValue = resolver(value || utility);

  if (!resolvedValue) {
    return "";
  }

  const declarations = property
    .split(", ")
    .map((name) => `  ${name}: ${resolvedValue};`);

  return `.${className} {\n${declarations.join("\n")}\n}\n`;
}

function generateCSSForClasses(classNames) {
  const classArray = classNames.split(" ");

  return classArray.map(generateCSS).join("\n");
}

export { generateCSS, generateCSSForClasses };