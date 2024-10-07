class Customer {
  firstName;
  lastName;
  balance = 0;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {}
}

const ali = new Customer("Alhie", "Fikri");
console.info(ali);
