class Employee {}

class Manager extends Employee {}

const budi = new Employee();
const ali = new Manager();

console.info(typeof budi);
console.info(typeof ali);

console.info(budi instanceof Employee); // true
console.info(budi instanceof Manager); // false

console.info(ali instanceof Employee); // false
console.info(ali instanceof Manager); // true
