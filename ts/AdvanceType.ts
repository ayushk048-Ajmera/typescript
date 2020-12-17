//advance type
//Type Guards and Differentiating Types

//User-Defined Type Guards

// use of is and as key word

function log(a: string | number) {
  if (typeof a === "string") {
    console.log(a.substr(5));
  } else {
    console.log(a.toFixed());
  }
}

log("hello world");
log(5.49);

/*
    instanceof
*/
class Some {
  some = "some";
  val = 123;
}

class Thing {
  thing = "thing";
  val = 456;
}

function instanceGard(x: Thing | Some) {
  if (x instanceof Thing) {
    console.log(x.thing, " things ", x.val);
  } else {
    console.log(x.some, x.val);
  }
}

let s = new Some();
s.some = "semi";
s.val = 528;

instanceGard(s);

/*
    is
*/

let isThing = (arg: any): arg is Thing => {
  return arg.thing !== undefined;
};

function inGard(x: Thing | Some) {
  //if ("thing" in x) {
  if (isThing(x)) {
    console.log(x.thing);
  } else {
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

function props<T, K extends keyof T>(o: T, properties: K[]): T[K][] {
  return properties.map((prop) => o[prop]);
}

interface Car {
  manufacturer: string;
  model: string;
  year: number;
}

let maruti800: Car = {
  manufacturer: "maruti suzuki",
  model: "800ac",
  year: 2000,
};

console.log(props(maruti800, ["year", "model"]));

/*
Index types and index signatures
 */
interface Dictionary<T> {
  [key: string]: T;
}

let keys: keyof Dictionary<number> = 5;
let value: Dictionary<number> = { num: 1 };

console.log(keys);
console.log(value);
