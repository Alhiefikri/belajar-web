// FUnction di Javascript

// // Function di javascript adalah blok kode

// Membuat Function, untuk membuat function gunakan kata kucni function diikuti dengan nama function, parameter (jika ada), dan blok kode yang akan dijalankan

//

// function namaFunction parameter1, parameter2, ...namaFunction.{
//     // blok kode yang akan dijalankan
// }

function sapaPengguna(nama) {
  console.log(`Halo, ${nama} !`);
  // console.log("Halo " + nama + "!");
}

function sapaSemua() {
  console.log(`Halo Semuanya`);
}

// Memanggil Function, Untuk menjalankan function, cukup panggil dengan menyebutkan nama function diikuti dengan tanda kurung, serta masukkan nilai untuk parameternya (jika ada)

sapaPengguna("Budi");
sapaSemua();

// Parameter dan Argumen, Parameter adalah variabel yang didefinisikan dalam deklarasi function. Argumen adalah nilai yang diberikan saat function dipanggil

function tambah(a, b) {
  console.log(a + b);
}

tambah(3, 5);

// Di sini, a dan b adalah parameter, sedangkan 5 dan 3 adlah argumen.

// REturn Statement, FUnction mengembalikan nilai menggunakan return. Setelah return dieksekusi, eksekusi function akan berhenti.

function kuadrat(num) {
  if (num > 0) {
    return num * num;
  }
  return "negatif tidak bisa";
}
// console.log(kuadrat(4));

let kuadrat4 = kuadrat(4);
console.log(kuadrat4);

/* 
1. b
2. a
3. a
4. b


*/

// Challenge
function kali(a, b) {
  console.log(a * b);
}

kali(5, 3);

// jawaban yang benar

function kali(a, b) {
  return a * b;
}

// Memanggil function kali
let hasil = kali(4, 5);
console.log(hasil); // Output: 20
