// Loop di Javascript

// loop digunakan untuk menjalankan blok kode berulang kali selama kondisi tertentu terpenuhi. Javascript menudukung beberapa jenis loop: for, while, dan do-while. setiap jenis loop memiliki kegunaan sendiri, tergentung pada kebutuhan.

// For Loop

// for (inisialisasi; kondisi; perubahan){
//     // kode yang dijalankan selama kondisi benar
// })

// for (let i = 1; i <= 5; i++) {
//   console.log(`Iterasi ke-${i}`);
// }

// WHile Loop

//  While (kondisi){
//  kode yang dijalankan selama kondisi benar
// }

// let y = 1;
// while (y <= 5) {
//   console.log(`iterasi ke-${y} dengan while loop`);
//   y++;
// }

// Do-While Loop

// do {
//     // koed yang dijalankan
// }while (kondisi);

// let z = 1;
// do {
//   console.log(`Iterasi ke ${z} dengan do-while`);
//   z++;
// } while (z <= 5);

// For-In Loop

// const object = { nama: "Alhie", umur: 21 };

// for (let property in object) {
//   console.log(property);
//   console.log(object[property]);
// }

// For-Of Loop
// let sum = 0;
// const array = [1, 2, 3, 4, 5];
// for (let nilai of array) {
//   sum = sum + nilai;
// }

// console.log(sum);

// challenge
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(`Iterasi ke-${i}`);
}
