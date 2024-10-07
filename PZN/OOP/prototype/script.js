function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    console.info(`Hello ${name}, my name is ${this.firstName}`);
  };
}

Person.prototype.sayBye = function () {
  console.info("Good Bye");
};

Person.prototype.run = function () {
  console.info(`${this.firstName} is running`);
};

const ali = new Person("Ali", "Fikri");
const budi = new Person("Budi", "Muliadi");

console.log(ali);
console.log(budi);
