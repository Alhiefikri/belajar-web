/* Object di Javascirpt */

// ⁡⁣⁢⁢Pengertian Object,⁡ ⁡⁣⁣⁢Object di JavaScript adalah tipe data yang digunakan untuk menyimpan koleksi data dan entitas yang lebih kompleks. Sebuah object adalah pasangan antara key dan value (disebut juga properti).⁡

// Membuat Object
// 1. Object.Literal
let mobil = {
  merk: "Toyota",
  model: "Avanza",
  tahun: "2014",
};
// console.log(mobil);

// 2. Menggunakan Constructor new Object()
let buku = new Object();
buku.judul = "Belajar Javascript";
buku.penulis = "Alhie Fikri";
// console.log(buku);

let mahasiswa = {
  nama: "Alhie",
  umur: 21,
  jurusan: "Teknik Informatika",
};

// Mengakses Properti Object
// 1. Menggunakan Notasi Titik (Dot Notation)
console.log(mahasiswa.nama);

// 2. Menggunakan Notasi Kurung (Bracket Notation):
console.log(mahasiswa["jurusan"]); // biasanya dipakai untuk mengambil key jika menggunakan spasi atau dua kata (bracket Ofition)

// Menambah dan Mengubah Properti
//1. Menambah Properti:
mahasiswa.alamat = "Balantak";
// console.log(mahasiswa); output : Object { nama: "Alhie", umur: 21, jurusan: "Teknik Informatika", alamat: "Balantak" }

// 2. Mengubah Properti:
mahasiswa.nama = "Fikri";
console.log(mahasiswa); // Output : Object { nama: "Fikri", umur: 21, jurusan: "Teknik Informatika", alamat: "Balantak" }

// 3. Menghapus Properti
delete mahasiswa.alamat;
console.log(mahasiswa); // Output: Object { nama: "Fikri", umur: 21, jurusan: "Teknik Informatika" }

// Nested Object
let universitas = {
  nama: "ITB",
  fakultas: {
    nama: "Faltas Ilmu Komputer",
    jurusan: "Teknik Informatika",
  },
};
console.log(universitas); //

// Destructuring Object
let { nama, umur } = mahasiswa; // mempermudah dalam hal pengembanga
console.log(umur);
