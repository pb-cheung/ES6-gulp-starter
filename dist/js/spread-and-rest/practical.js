/* jshint esnext: true */
"use strict";

var colors = require("colors");
console.log("spread-and-rest/practical.js".gray);

// We can use gathering (rest parameters) as an alternative
// for the `arguments` keyword, which gives us a real array.

function doubleItems() {
  for (var _len = arguments.length, items = Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }

  return items.map(function (item) {
    return item * 2;
  });
}

console.log(doubleItems(1, 2, 3, 4, 5));

// todo: better examples