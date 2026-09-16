import fs from "node:fs/promises";
import path from "node:path";
import { compile } from "./src/compiler.js";

async function compileFile(inputFile, outputFile) {
  const html = await fs.readFile(inputFile, "utf8");
  const css = compile(html);

  await fs.writeFile(outputFile, css + "\n");
  console.log(`Compiled ${inputFile} -> ${outputFile}`);
}

async function main() {
  const argumentsList = process.argv.slice(2);
  const inputFile = argumentsList[0] || "input.html";
  const outputFile = argumentsList[1] || "style.css";

  if (argumentsList.includes("--help")) {
    console.log("Usage: chai-tailwind [input.html] [style.css]");
    return;
  }

  try {
    await compileFile(inputFile, outputFile);
  } catch (error) {
    console.error(`Compilation failed: ${error.message}`);
    process.exitCode = 1;
  }
}

main();