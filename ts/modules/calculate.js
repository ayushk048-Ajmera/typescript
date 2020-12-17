"use strict";
exports.__esModule = true;
exports.sum = void 0;
var sum = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var s = 0;
    for (var _a = 0, a_1 = a; _a < a_1.length; _a++) {
        var iterator = a_1[_a];
        s += iterator;
    }
    return s;
};
exports.sum = sum;
