/* Tipe data Primitive */

//String
const nama = "Alhie";
const negara = "Indonesia";
const domisili = `${nama} Balantak`;

// Number
const umur = 26.5;

//Boolean
const isMarried = false;

// Undefined
let x;

//null
const person = null;

//Symbol
const symbol1 = Symbol("description 1");

// BigInt
const bigInt = 29389389238983928398938928392839283n;

/* Tipe data Reference */

// Object
const orang = {
  nama: "Ali",
  umur: 26,
  negara: "Indonesia",
};

// Array
const hobby = ["Basket", "Catur"];

// Function
function sayHello() {
  return "Hello from kenapa coding";
}

const output = sayHello;
console.log(output, typeof output);

/* Perbedaan tipe data primitive dan reference */

// tipe data primitive
let a = 10;
let b = a; // 'b' menyimpan nilai salinan dari a, b = 10

a = 20;

console.log(b); // output: 10

// tipe data reference

let obj1 = { nama: "Ali" };
let obj2 = obj1; //obj2 akan memnyimpan referensi yang sama dengan obj1

obj1.nama = "budiman";
console.log(obj2);
