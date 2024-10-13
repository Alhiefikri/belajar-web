# README: ES6 Classes di JavaScript

## Deskripsi

Dokumen ini menjelaskan konsep ES6 Classes di JavaScript, cara modern untuk membuat fungsi konstruktor dalam Pemrograman Berbasis Objek (OOP). Kita akan melihat perbandingan antara cara lama menggunakan fungsi konstruktor dan cara baru menggunakan kelas.

## Apa itu ES6 Classes?

ES6 (ECMAScript 2015) memperkenalkan sintaks `class` yang memberikan cara yang lebih intuitif untuk membuat objek dan mengelola pewarisan dalam JavaScript. Dengan menggunakan kelas, kode menjadi lebih mudah dibaca dan dipahami.

## Analogi Sederhana

Bayangkan Anda seorang arsitek yang mendesain rumah. Dalam hal ini:

- **Kelas** adalah cetak biru (blueprint) rumah.
- **Objek** adalah rumah yang dibangun berdasarkan cetak biru tersebut.

Saat Anda membuat beberapa rumah (objek) menggunakan cetak biru yang sama (kelas), setiap rumah bisa memiliki karakteristik yang sama (seperti ukuran, warna, dan desain), tetapi setiap rumah adalah entitas yang terpisah.

## Sebelumnya: Fungsi Konstruktor

Sebelum ES6, kita menggunakan fungsi konstruktor untuk membuat objek. Berikut adalah contoh bagaimana kita mendefinisikan objek `Mobil` menggunakan fungsi konstruktor.

### Contoh Fungsi Konstruktor

```javascript
// Mendefinisikan fungsi konstruktor Mobil
function Mobil(merk, model, tahun) {
  this.merk = merk; // Menyimpan merk mobil
  this.model = model; // Menyimpan model mobil
  this.tahun = tahun; // Menyimpan tahun pembuatan mobil

  // Metode untuk memulai mobil
  this.start = function () {
    console.log("Mobil dimulai");
  };

  // Metode untuk menampilkan informasi mobil
  this.info = function () {
    console.log(`Mobil: ${this.merk} ${this.model}`);
  };
}

// Membuat instance baru dari objek Mobil
let mobil1 = new Mobil("Toyota", "Avanza", 2021);
let mobil2 = new Mobil("Honda", "Civic", 2020);
```

- **Penjelasan**: Di atas, kita mendefinisikan fungsi `Mobil` yang berfungsi sebagai konstruktor. Dengan `new Mobil()`, kita membuat dua instance objek `mobil1` dan `mobil2`, masing-masing dengan atribut dan metode yang sama.

## Metode Class

Dengan ES6, kita dapat mendefinisikan kelas dengan cara yang lebih sederhana dan bersih. Berikut adalah cara mendefinisikan kelas `Mobil` menggunakan sintaks ES6.

### Contoh Kelas

```javascript
// Mendefinisikan kelas Mobil
class Mobil {
  // Metode constructor untuk inisialisasi objek
  constructor(merk, model, tahun) {
    this.merk = merk; // Menyimpan merk mobil
    this.model = model; // Menyimpan model mobil
    this.tahun = tahun; // Menyimpan tahun pembuatan mobil
  }

  // Metode untuk memulai mobil
  start() {
    console.log("Mobil dimulai");
  }

  // Metode untuk menampilkan informasi mobil
  info() {
    console.log(`Mobil: ${this.merk} ${this.model}`);
  }
}

// Membuat instance baru dari kelas Mobil
let mobil1 = new Mobil("Toyota", "Avanza", 2021);
let mobil2 = new Mobil("Honda", "Civic", 2020);

// Memanggil metode start dan info
mobil1.start(); // Output: Mobil dimulai
mobil1.info(); // Output: Mobil: Toyota Avanza
```

- **Penjelasan**: Di sini, kita mendefinisikan kelas `Mobil` dengan menggunakan kata kunci `class`. Kelas ini memiliki metode `constructor` untuk menginisialisasi properti `merk`, `model`, dan `tahun`. Metode `start` dan `info` didefinisikan di dalam kelas, memberikan cara yang lebih terstruktur untuk mengelola fungsi objek.

## Konsep Kelas

- **Kelas**: Kelas adalah cetak biru (blueprint) untuk membuat objek.
- **Constructor**: Metode `constructor` adalah metode khusus yang digunakan untuk menginisialisasi objek baru. Saat kita membuat objek baru menggunakan `new Mobil()`, metode `constructor` otomatis dipanggil.

## Kesimpulan

Dengan ES6 Classes, JavaScript menyediakan cara yang lebih modern dan mudah dipahami untuk menerapkan Pemrograman Berbasis Objek. Sintaks yang bersih dan terstruktur membuat kode lebih mudah dibaca dan dikelola, serta memudahkan pengembang dalam membangun aplikasi yang kompleks.
