/* Math Object */

// Apa itu Math Object, Math Object di Javascript adalah objek bawaan yang berisi berbagai properti dan metode ntuk melakukan operasi matematika

// Properti Math

// * Math.PI : mengembalikan phi (3.14159...),
// * Math.E; mengembalikan nilai konstanta Euler (2.718...),
console.log(Math.PI);
console.log(Math.E);

// Metode Math
console.log(Math.abs(-7));
console.log(Math.pow(2, 5)); //untuk memangkatkan jadi 2**5 : 32
console.log(Math.sqrt(16)); // untuk mencari Akar
console.log(Math.cbrt(27)); // ntuk mencari akar pangkat 3
console.log(Math.max(1, 13, 89, 2, 75)); //mencari nilai maximum
console.log(Math.min(9, 8, 10, 60, 89)); // mencari nilai minimum

// Pembulatan ANgka
console.log(Math.round(3.6)); // membulatkan nilai
console.log(Math.ceil(4.1)); // selalu membulatkan ke atas
console.log(Math.floor(3.9)); // selalu membulatkan ke bawah
console.log(Math.trunc(4.9)); // selalu menghapus koma tetap menjadi nilai utama tidak membulatkan sebuah nilai

// Random Number

console.log(Math.random() * 100); // mendapatkan nilai random dibawah 1
console.log(Math.round(Math.random() * 100)); //kombinasi untuk mendapatkan nilai bukan float dan dibulatkan ke atas jika mulai dari .5
