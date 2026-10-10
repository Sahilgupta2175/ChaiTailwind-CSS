import { getDeclarations } from "./generator.js";

const PREFIX = "chai-";

function applyChai(root = document) {
  root.querySelectorAll('[class*="chai-"]').forEach((element) => {
    [...element.classList]
      .filter((name) => name.startsWith(PREFIX))
      .forEach((name) => {
        const declarations = getDeclarations(name.slice(PREFIX.length));

        if (declarations.length === 0) {
          console.warn(`ChaiTailwind: unknown utility "${name}"`);
        }

        declarations.forEach(([property, value]) =>
          element.style.setProperty(property, value),
        );
        element.classList.remove(name);
      });

    if (element.classList.length === 0) {
      element.removeAttribute("class");
    }
  });
}

export { applyChai };
