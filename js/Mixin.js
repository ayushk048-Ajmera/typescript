"use strict";
//Mixin
//use to mix class
var fireStarter = /** @class */ (function () {
    function fireStarter() {
    }
    fireStarter.prototype.fire = function () {
        console.log("fire");
    };
    return fireStarter;
}());
var healer = /** @class */ (function () {
    function healer() {
    }
    healer.prototype.heal = function () {
        console.log("heal");
    };
    return healer;
}());
var mixer = /** @class */ (function () {
    function mixer() {
    }
    return mixer;
}());
// applyMixins(mixer, [fireStarter, healer]);
var myspace;
(function (myspace) {
    var x = "hello";
})(myspace || (myspace = {}));
var yourspace;
(function (yourspace) {
    var x = 6;
})(yourspace || (yourspace = {}));
