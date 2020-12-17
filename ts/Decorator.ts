//Decorators
function f() {
  console.log("f(): evaluated");
  return function (
    target: any,
    propertyKey: string, // name of the method
    descriptor: PropertyDescriptor //it is actual method body which we are override using discriptor
  ) {
    console.log(
      "f(): called :",
      "name of actual method name : " + propertyKey,
      "in method : " + JSON.stringify(descriptor),
      "actual method contain log : " + descriptor.value
    );
  };
}

function g() {
  console.log("g(): evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("g(): called");
  };
}

class C {
  @f()
  @g()
  flex() {
    return 5;
  }
}
