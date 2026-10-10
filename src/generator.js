import parseClass from "./parser.js";
import { getUtilityInfo } from "./utilities.js";
import { valueResolvers } from "./values.js";

// Class name (no prefix) -> [[cssProperty, value], ...]; empty if unknown.
function getDeclarations(className) {
  const { utility, value } = parseClass(className);
  const candidates = getUtilityInfo(utility);

  for (const { property, type, extra } of candidates || []) {
    const resolvedValue = valueResolvers[type]?.(value || utility);

    if (resolvedValue) {
      return [
        ...property.split(", ").map((name) => [name, resolvedValue]),
        ...Object.entries(extra || {}),
      ];
    }
  }

  return [];
}

function generateCSS(className) {
  const declarations = getDeclarations(className).map(
    ([name, value]) => `  ${name}: ${value};`,
  );

  if (declarations.length === 0) {
    return "";
  }

  return `.${className} {\n${declarations.join("\n")}\n}\n`;
}

export { getDeclarations, generateCSS };
