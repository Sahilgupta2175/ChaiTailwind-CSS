import assert from "node:assert/strict";
import { getDeclarations } from "./src/generator.js";

const d = (c) => JSON.stringify(getDeclarations(c));
assert.equal(d("p-2"), '[["padding","2px"]]');
assert.equal(d("bg-red"), '[["background-color","red"]]');
assert.equal(d("text-center"), '[["text-align","center"]]');
assert.equal(d("text-red"), '[["color","red"]]');
assert.equal(d("text-lg"), '[["font-size","18px"]]');
assert.equal(d("flex"), '[["display","flex"]]');
assert.equal(d("flex-col"), '[["flex-direction","column"]]');
assert.equal(d("border-2"), '[["border-width","2px"],["border-style","solid"]]');
assert.equal(d("border-red"), '[["border-color","red"]]');
assert.equal(d("nope-1"), "[]");
console.log("ok");
