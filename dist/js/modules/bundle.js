(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by suibobuzhuliu on 16/5/18.
 */
function generateRandom() {
    return Math.random();
}

function sum(a, b) {
    return a + b;
}

exports.generateRandom = generateRandom;
exports.sum = sum;
},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by suibobuzhuliu on 16/5/18.
 */
function isWeChat() {
    var ua = navigator.userAgent;
    if (/MicroMessenger/.test(ua)) {
        return true;
    } else {
        return false;
    }
}

exports.isWeChat = isWeChat;
},{}],3:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

/**
 * Created by suibobuzhuliu on 16/5/18.
 */

var Utils = _interopRequireWildcard(require("../common/utility"));

var Math = _interopRequireWildcard(require("../common/math"));

document.getElementById("cell_iswx").value = Utils.isWeChat();
document.getElementById("cell_random").value = Math.generateRandom();

console.log(Math.generateRandom());
console.log(Math.sum(1, 2));
},{"../common/math":1,"../common/utility":2}]},{},[3]);
