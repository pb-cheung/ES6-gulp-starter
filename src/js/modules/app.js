/**
 * Created by suibobuzhuliu on 16/5/18.
 */
import * as Utils from "../common/utility"
import * as Math from "../common/math"

document.getElementById("cell_iswx").value = Utils.isWeChat();
document.getElementById("cell_random").value = Math.generateRandom();

//console.log(Math.generateRandom());
console.log(Math.sum(1, 2));
