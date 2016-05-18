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