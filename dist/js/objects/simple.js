"use strict";

var _defineProperty = function (obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); };

/* jshint esnext: true */
var colors = require("colors");
console.log("objects/simple.js".gray);

// Objects have new shorthands and conveniences in ES6.

var log = console.log;
var myName = "Carl";
var propName = "name";

var object = _defineProperty({
  // shorthand for `log: log`
  log: log,
  // shorthand for `method: function() {}`
  method: function method() {
    console.log("This is a function of `object`.");
  } }, propName, myName);

console.log(object);

// create a property with a dynamic field.