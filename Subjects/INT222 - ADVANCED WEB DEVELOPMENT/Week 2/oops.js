// class Custom {
//   a;
//   b;

//   constructor(a = 2, b = 3) {
//     this.a = a;
//     this.b = b;
//   }

//   add() {
//     console.log(this.a + this.b);
//   }
// }

// let custom = new Custom();
// console.log(custom);
// custom.add();

class Animal {
  name;

  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} is speaking`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} is barking`);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} is meowing`);
  }
}

let cat = new Cat("Olivia");
cat.speak();

