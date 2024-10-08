const names = "Alhie Fikri".split(" ");
const namesUpper = names.map((value) => value.toLocaleUpperCase());
console.info(namesUpper);

const namesReduce = names.reduce((before, value) => before + " " + value);
console.info(namesReduce);

const namesRight = names.reduceRight((before, value) => before + " " + value);
console.info(namesRight);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const total = numbers.reduce((before, value) => before + value);
console.info(total);
