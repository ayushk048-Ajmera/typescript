"use strict";
//Declaration merging
var circle = {
    name: "circle",
    height: 5,
    width: 6,
};
console.log(circle);
// Declaration Type	Namespace	Type	Value
// Namespace	  X		   X
// Class		                    X	    X
// Enum		                      X	    X
// Interface		                X
// Type Alias		                X
// Function			                      X
// Variable			                      X
function Circle() {
    this.radius;
}
(function (Circle) {
})(Circle || (Circle = {}));
//merging namescape
var Animals;
(function (Animals) {
    var Zebra = /** @class */ (function () {
        function Zebra() {
        }
        return Zebra;
    }());
    Animals.Zebra = Zebra;
})(Animals || (Animals = {}));
(function (Animals) {
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        return Dog;
    }());
    Animals.Dog = Dog;
})(Animals || (Animals = {}));
