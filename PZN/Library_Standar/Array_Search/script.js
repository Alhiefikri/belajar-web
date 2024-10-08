// array Search

const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

console.info(source.find((value) => value > 3));
console.info(source.findIndex((value) => value > 3));
console.info(source.includes(7));
console.info(source.indexOf(5));
console.info(source.lastIndexOf(5));
