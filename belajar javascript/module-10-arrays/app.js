/* Array di Javascript */
// Apa itu Array?, Array adalah struktur data yang digunakan untuk menyimpan koleksi elemen, seperti aangka atau string, dalam satu variabel. Di Javascript, array dapat menyimpan berbagai tipe data sekaligus memiliki indeks yang dimulai dari 0,

// Membuat Array

//1. Menggunakan notasi array literal
let fruits = ["banana", "apple", "manggo"];
// console.log(fruits);

// 2. Menggunakan new Array

let num = new Array(1, 2, 3, 4, 5);
// console.log(num);

// Mengakses elemen Array
// console.log(fruits[0]);
// console.log(fruits[2]);

// Menambah atau Mengubah Elemen Array
fruits[3] = "strawberry";
fruits[0] = "Orange";
// console.log(fruits);

// Manipulasi Array

let numbers = [1, 2, 3];
// numbers.push(4); // menambah nilai array : output [1,2,3,4]
// numbers.pop(); // menghapus nilai terakhir dari array output : [1,2,3]
// numbers.shift(); // menghapus nilai element pertama output [2,3]
// numbers.unshift(5); // menambah nilai element pertama. output [5,2,3]
// console.log(numbers);

let numbers2 = [4, 2];
let newnumber = numbers.concat(numbers2); // menggabungkan kedua array menjadi satu
// console.log(newnumber);
newnumber.splice(2, 1, 9); // menghapus nilai dan menambah, 0 untuk menghapus, 1 untuk jumlah yang mau di tambah, 9 nilai yang akan di tambahkan
// console.log(newnumber);
console.log(newnumber.indexOf(9)); // mencari nilai index berapa

console.log(newnumber.includes(5)); // mencari apakah ada nilai di dalam suatu array??

// console.log(newnumber.slice(2)); // menampilkan nilai yang dimulai sesuai index

// Multidimensional Array (Array of Arrays)
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[1][2]); // menampilkan array multidimensional array [1] untuk index array keberapa [2] mau menampilkan di index berapa
