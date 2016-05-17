/* jshint esnext: true */
"use strict";

var colors = require("colors");
console.log("templateStrings/practical.js".gray);

// We can render bits of markup using literals.
function render(name, age) {
  return "\n  <div class=\"person\">\n    <div class=\"name\">" + name + "</div>\n    <div class=\"age\">" + age + "</div>\n  </div>\n  ";
}

console.log(render("Carl", 30));