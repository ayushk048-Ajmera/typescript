"use strict";
// iterator and Generator
/*

forof loop
forin loop

*/
var arr = [1, 2, 3, 4, 5, 8, 6, 9, 10, 7];
var sum = 0;
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var x_1 = arr_1[_i];
    sum += x_1;
}
console.log(arr);
console.log("sum of all elements in array " + sum);
console.log(arr.sort(function (a, b) { return a - b; }));
var obj = {
    name: "john doe",
    age: 51,
};
for (var key in obj) {
    console.log(key);
}
