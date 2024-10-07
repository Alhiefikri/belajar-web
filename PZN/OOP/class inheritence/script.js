class Employee {
  sayHello(name) {
    console.info(`Hello ${name}, my name is employee ${this.name}`);
  }
}

class Manager extends Employee {
  sayHello(name) {
    console.info(`Hello ${name}, my name is Manager ${this.name}`);
  }
}

const budi = new Employee();
budi.name = "Budi";
budi.sayHello("Joko");

const ali = new Manager();
ali.name = "Ali";
ali.sayHello("Joko");

console.info(budi);
console.info(ali);
