class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello(name) {
    console.info(`Hello ${name}, my name is ${this.name}`);
  }
}

const ali = new Person("Ali");
console.info(ali);
ali.sayHello("Joko");

const Budi = new Person("Budi");
console.info(Budi);
Budi.sayHello("Joko");
