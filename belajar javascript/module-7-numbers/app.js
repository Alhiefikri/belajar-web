/* Numbers di Javascript */
/* Di Javascript, tipe data Number digunakan untuk merepresentasikan angka. Angka ini bisa berupa bilangan bulat (integet), pecahan (floating point), atau bilangan khusus seperti Infinity dan NaN (Not-a-Number). */

//contoh pengggunaan numbers
let bilanganBulat = 26;
let bilanganPecahan = 27.5;
let bilanganNegative = -7;
let infinityValue = Infinity; // bisa negatif dan positif
let notANumber = NaN;
// console.log(notANumber);

//Javascript menyediakan beberapa properti pad aobjek Number yang berguna:

// 1. Number.MAX_VALUE
console.log(Number.MAX_VALUE);

// 2. Number.MIN_VALUE
console.log(Number.MIN_VALUE);

// 3. Number.POSITIVE_INFINITY
console.log(Number.POSITIVE_INFINITY);

// 4. Number.NEGATIVE_INFINITY
console.log(Number.NEGATIVE_INFINITY_INFINITY);

/// 5. Number.NaN
console.log("abc" / 0);

// Metode Bawaan Number

//1. toSTring(), Mengubah ANgka menjadi string
let num = 732.9;
let str = num.toString();
console.log(str, typeof str);

// 2. toFixed(digits), Mengubah angka menjadi string dengan jumlah digit desimal yang ditentukan
let floating = 3.1239484;
console.log(floating.toFixed(2), typeof floating.toFixed(4));

// 3. toPecision(digits), mengubah angka menjadi sring dengan panjang total yang ditentunkan
let float = 3.14249087;
console.log(float.toPrecision(5));

// 4. parseInt() dan parseFloat(), Mengubah string angka integer atau floating point.

let str2 = "123";
let int = parseInt(str2); // bisa pakai parseFloat atau parseInt sesuai kebutuhan
console.log(int);
