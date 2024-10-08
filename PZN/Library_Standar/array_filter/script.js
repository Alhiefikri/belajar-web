// array filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ganjil = numbers.filter((value) => value % 2 === 1);
const genap = numbers.filter((value) => value % 2 === 0);

console.info(numbers);
console.info(ganjil);
console.info(genap);
