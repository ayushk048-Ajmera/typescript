"use strict";
//advance type
//Type Guards and Differentiating Types
//User-Defined Type Guards
// use of is and as key word
function log(a) {
    if (typeof a === "string") {
        console.log(a.substr(5));
    }
    else {
        console.log(a.toFixed());
    }
}
log("hello world");
log(5.49);
/*
    instanceof
*/
var Some = /** @class */ (function () {
    function Some() {
        this.some = "some";
        this.val = 123;
    }
    return Some;
}());
var Thing = /** @class */ (function () {
    function Thing() {
        this.thing = "thing";
        this.val = 456;
    }
    return Thing;
}());
function instanceGard(x) {
    if (x instanceof Thing) {
        console.log(x.thing, " things ", x.val);
    }
    else {
        console.log(x.some, x.val);
    }
}
var s = new Some();
s.some = "semi";
s.val = 528;
instanceGard(s);
/*
    is
*/
var isThing = function (arg) {
    return arg.thing !== undefined;
};
function inGard(x) {
    //if ("thing" in x) {
    if (isThing(x)) {
        console.log(x.thing);
    }
    else {
        console.log(x.some);
    }
    console.log(x.val);
}
inGard(new Thing());
inGard(new Some());
/*
index type

extends keyof T
all keys of Object

 */
function props(o, properties) {
    return properties.map(function (prop) { return o[prop]; });
}
var maruti800 = {
    manufacturer: "maruti suzuki",
    model: "800ac",
    year: 2000,
};
console.log(props(maruti800, ["year", "model"]));
var keys = 5;
var value = { num: 1 };
console.log(keys);
console.log(value);
