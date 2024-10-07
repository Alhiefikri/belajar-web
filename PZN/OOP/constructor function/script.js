function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    console.info(`Hello ${name}, my name is ${this.firstName}`);
  };
}

const ali = new Person("Alhie", "Fikri");
// ali.firstName = "Alhie";
// ali.lastName = "Fikri";
ali.sayHello("Fajri");

const budi = new Person("Budi", "Nugraha");
// budi.firstName = "Budi";
// budi.lastName = "Nugraha";
budi.sayHello("Raka");

console.log(ali);
console.log(budi);
