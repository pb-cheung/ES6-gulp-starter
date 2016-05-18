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