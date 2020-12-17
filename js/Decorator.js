"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decorators
function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey, // name of the method
    descriptor //it is actual method body which we are override using discriptor
    ) {
        console.log("f(): called :", "name of actual method name : " + propertyKey, "in method : " + JSON.stringify(descriptor), "actual method contain log : " + descriptor.value);
    };
}
function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("g(): called");
    };
}
var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.flex = function () {
        return 5;
    };
    __decorate([
        f(),
        g()
    ], C.prototype, "flex", null);
    return C;
}());
