class Employee {
  constructor(firstName) {
    this.firstName = firstName;
  }

  sayHello(name) {
    console.info(`Hello ${name}, my name is employee ${this.firstName}`);
  }
}

class Manager extends Employee {
  constructor(firstName, lastName) {
    super(firstName);
    this.lastName = lastName;
  }
  sayHello(name) {
    console.info(
      `Hello ${name}, my name is Manager ${this.firstName} ${this.lastName}`
    );
  }
}

const budi = new Employee("Budi");
budi.sayHello("Joko");

const ali = new Manager("Alhie", "Fikri");
ali.sayHello("Joko");

console.info(budi);
console.info(ali);
