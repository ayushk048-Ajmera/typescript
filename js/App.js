"use strict";
function pattern(x) {
    var n = x;
    var y = "";
    for (var i = 0; i < n; i++) {
        for (var j = n; j >= n - i; j--) {
            if (j % 2 === 0)
                y = y + starRepeat(j / 2);
            else
                y = y + (" " + j);
        }
        console.log(y);
        y = "";
    }
}
pattern(5);
function starRepeat(x) {
    var s = "";
    for (var i = 0; i < x; i++)
        s += " *";
    return s;
}
