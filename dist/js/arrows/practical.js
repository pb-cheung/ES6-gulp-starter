/* jshint esnext: true */
"use strict";

var colors = require("colors");
console.log("arrows/practical.js".gray);

// Arrow functions don't have their own scope.

var outerScope = undefined;

setTimeout(function () {
  console.log(this === outerScope);
}, 0);

setTimeout(function () {
  console.log(undefined === outerScope);
}, 0);