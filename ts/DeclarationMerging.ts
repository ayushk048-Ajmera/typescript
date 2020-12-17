//Declaration merging

interface Shape {
  name: string;
}

interface Shape {
  width: number;
  height: number;
}

let circle: Shape = {
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

function Circle(this: any): void {
  this.radius;
}
namespace Circle {
  export let radius: number;
}

//merging namescape

namespace Animals {
  export class Zebra {}
}

namespace Animals {
  export interface Legged {
    numberOfLegs: number;
  }
  export class Dog {}
}
