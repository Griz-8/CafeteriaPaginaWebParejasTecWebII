import { initMenuFilters } from "./menu.js";
import { initOrderButtons } from "./order.js";
import { initNavbar } from "./nav.js";

document.addEventListener("DOMContentLoaded", () => {
  initMenuFilters();
  initOrderButtons();
  initNavbar();
});