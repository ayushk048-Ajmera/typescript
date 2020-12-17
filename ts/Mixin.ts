//Mixin
//use to mix class

class fireStarter {
  fire() {
    console.log("fire");
  }
}
class healer {
  heal() {
    console.log("heal");
  }
}

interface mixer extends fireStarter, healer {}
class mixer {}

// applyMixins(mixer, [fireStarter, healer]);

namespace myspace {
  let x: string = "hello";
}
namespace yourspace {
  const x: number = 6;
}
