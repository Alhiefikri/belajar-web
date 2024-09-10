/* IF-Else Statement di Javascrpt */

// ⁡⁣⁢⁢if-else statement⁡ ⁡⁣⁣⁢adalah salah satu struktur kontrol yang paling dasar di JavaScript. Ini digunakan untuk membuat keputusan berdasarkan kondisi tertentu. Jika kondisi tersebut benar (true), blok kode tertentu akan dijalankan. Jika salah (false), kode lain dapat dijalankan.⁡

//Sintaks Dasar
// if (kondisi){
//     // Kode yang dijalankan jika kondisi benar (true)
// } else{
//     // Kode yang dijalankanjika kondisi salah (false)
// }

let age = 18;

if (age >= 18) {
  console.log("Kamu sudah Cukup Umur untuk memilih ");
} else {
  console.log("Kamu Belum Cukup Umur untuk Memilih");
}

// if-else if digunakan untuk memeriksa beberapa kondisi secara berururtan. Blok kode pertama yang kondisinya benar (true) akan dijalankan, daneksekusi akanberhenti setelah itu.

// if (kondisi) {
//   // Kode jika kondisi 1 benar (true)
// } else if (kondisi2) {
//   // Kode jika kondisi 2 benar (true)
// } else {
//   // Kode jika semua kondisi salah (false)
// }

let score = 75;
if (score >= 90) {
  console.log("Grade : A");
} else if (score >= 80) {
  console.log("Grade : B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// output : Grade : C = karena score 75 jadi kondisi ke tiga yang memenuhi karena 75 > 70

// Nested If-Else (If-Else Bertingkat), Kita juga bisa menempatkan if-else di dalam blok if-else lainnya. ini disebut sebagai nested if-else atau if-else bersarang

// if (kondisi1) {
//   if (kondisi2) {
//     // Kode jika kondisi1 dan kondisi benar
//   } else {
//     // Kode jika kondisi1 benar tapi kondisi 2 salah
//   }
// } else {
//   // Kode jika kondisi1 salah
// }

let num = 1;
if (num > 0) {
  if (num % 2 == 0) {
    console.log("Number ini positif dan dia bilangan genap");
  } else {
    console.log("Number ini Positive dan bilangan ganjil");
  }
} else {
  console.log("Number ini bilangan negative");
}

let angka = -1;

if (angka > 0) {
  if (angka % 2 == 0) {
    console.log(
      "angka tersebut positi dan lebih besar dari 0 dan angka tersebut genap"
    );
  } else {
    console.log(
      "angka tersebut positi dan lebih besar dari 0 dan angka tersebut ganjil"
    );
  }
} else if (angka == 0) {
  console.log("angka tersebut merupakan 0");
} else {
  console.log("angka tersebut negative");
}
