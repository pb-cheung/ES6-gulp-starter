/* jshint esnext: true */
"use strict";

var colors = require("colors");
console.log("destructuring/simple.js".gray);

// Destructuring means extracting pieces of an array or object.
// A "destructuring assignment" is a variable assignment that
// uses destructuring to save parts of an object or array into
// new variables.

// As it's put in http://raganwald.com/2015/02/02/destructuring.html,
// it is a convenience more than anything else, but it enables
// a coding style "that resembles the data it consumes."

// ==================================================
// OBJECT DESTRUCTURING ASSIGNMENTS
console.log("Object Destructuring Assignments".green);
// ==================================================

// We can assign multiple variables at once by
// using the new "destructuring assignment" feature.

var options = {
  name: "Carl",
  color: "red",
  location: {
    city: "Vancouver"
  }
};

// The ES5 way.
var userName = options.name,
    userColor = options.color;

// The ES6 way.
var userName = options.name;
var userColor = options.color;

// If we want to create local versions of the variables
// without changing the variable names, it gets even shorter.
var name = options.name;
var color = options.color;

console.log("{ name, color }".gray, "\n  ", name, color);

// We can create variables using nested properties as well.
// In this example `location` itself is not defined, only `city`.
var name = options.name;
var color = options.color;
var city = options.location.city;

console.log("{ name, color, location: { city } }".gray, "\n  ", name, color, city);

// But what if the value doesn't exist in the object?
// We can set defaults.
var name = options.name;
var color = options.color;
var _options$nonexistant = options.nonexistant;
var nonexistant = _options$nonexistant === undefined ? 5 : _options$nonexistant;

console.log("{ name, color, nonexistant = 5 }".gray, "\n  ", name, color, nonexistant);

// ==================================================
// ARRAY DESTRUCTURING ASSIGNMENTS
console.log("\nArray Destructuring Assignments".green);
// ==================================================

// Similarly, we can extract values from an array by
// using array brackets in a left-hand assignment.

var values = [0, 1, 2, 3];

// The ES5 way.
var first = values[0],
    second = values[1];

// The ES6 way.
var first = values[0];
var second = values[1];

console.log("[ first, second ]".gray, "\n  ", first, second);

// We can skip some values by leaving empty space between commas.
var first = values[0];
var third = values[2];

console.log("[ first, , third ]".gray, "\n  ", first, third);

// We can use the `...` spread operator to collect the rest
// of an array past a certain point of interest.
// More on spread in the /spread section of the examples.

var first = values[0];
var rest = values.slice(1);

console.log("[ first, rest ]".gray, "\n  ", first, rest);