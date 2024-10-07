function Employee(name) {
  this.name = name;
}

function Manager(name) {
  this.name = name;
}

// Manager.prototype = Employee.prototype;  salah
Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.sayHello = function (name) {
  console.info(`Hello ${name}, my name is Manager ${this.name}`);
};

Employee.prototype.sayHello = function (name) {
  console.info(`Hello ${name}, my name is Employee ${this.name}`);
};

const employee = new Employee("Alhie");
employee.sayHello("JOKO");

const manager = new Manager("Budi");
manager.sayHello("Joko");

console.info(employee);
console.info(manager);
