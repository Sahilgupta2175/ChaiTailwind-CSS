import { applyChai } from "./engine.js";

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => applyChai());
} else {
  applyChai();
}
