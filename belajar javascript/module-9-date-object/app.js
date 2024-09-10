/* Date Object di Javascript */

// Apa itu Date Object, Date Object di Javacript digunakan untuk bekerja dengan tanggal dan waktu. objek ini memungkinka kita mendapatkan, mengatur, dan memanipulasi tanggal dan waktu.

//Membuat Date Object

// Tanggal dan waktu saat ini
let now = Date();

// menggunakan string
let spesificDate = new Date("September 08, 2024 10:30:000");
// console.log(spesificDate);

// Memggunakan parameter (tahun, bulan, hari, jam, menit, detik, milidetik)
let customDate = new Date(2024, 8, 20, 10, 30);
// console.log(customDate);

// Bulan ke-8 (September, karena bulan dimulai dari 0)
let today = new Date();
// console.log(today.getFullYear());
// console.log(today.getMonth());
// console.log(today.getDate());
// console.log(today.getDay()); // hari dimulai dari minggu: minggu = 0 dst
// console.log(today.getHours());
// console.log(today.getMinutes());
// console.log(today.getSeconds());
// console.log(today.getMilliseconds());
// console.log(today.getTime());

// Mengatur Tanggal dan Waktu

let date = new Date();

// Mengatur tahun menjadi 2025
date.setFullYear(2025);
// console.log(date);

//mengatur bulan menjadi Desember(11, karena bulan dimulai dari 0)
date.setMonth(11);
// console.log(date);

// Mengatur hari menjadi 25
date.setDate(29);
// console.log(date);

// Perhitungan WAktu dengan Date Object
let startDate = new Date(2024, 7, 20, 10, 30);
let endDate = new Date(2024, 8, 3, 10, 30);

let diff = endDate - startDate;
console.log(diff); //miliseconds

let diffIndays = diff / (1000 * 3600 * 24);
console.log(diffIndays);
