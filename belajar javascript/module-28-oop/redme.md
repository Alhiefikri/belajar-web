# README: Pemrograman Berbasis Objek (OOP) di JavaScript

## Deskripsi

Dokumen ini menjelaskan konsep Pemrograman Berbasis Objek (OOP) di JavaScript dengan contoh kode yang mendemonstrasikan cara membuat dan menggunakan objek, fungsi konstruktor, dan pewarisan prototipe.

## Apa itu OOP?

Pemrograman Berbasis Objek (OOP) adalah paradigma pemrograman yang menggunakan "objek" untuk mewakili data dan fungsionalitas. Dengan OOP, kita dapat memodelkan elemen dunia nyata, yang membuat kode lebih mudah dipahami dan dikelola.

## Dasar-Dasar Objek di JavaScript

Di JavaScript, objek adalah kumpulan pasangan kunci-nilai (key-value pairs) yang dapat menyimpan data dan perilaku. Objek dapat dibuat dengan cara yang sederhana.

### Contoh Membuat Objek

```javascript
let mobil = {
  merk: "Toyota",
  model: "Avanza",
  tahun: 2021,
  start: function () {
    console.log("Mobil dimulai");
  },
  info: function () {
    console.log(`Mobil: ${this.merk} ${this.model}`);
  },
};

// Memanggil metode start
mobil.start();
```

- **Penjelasan**: Di atas, kita membuat objek `mobil` yang memiliki atribut `merk`, `model`, dan `tahun`. Objek ini juga memiliki dua metode: `start`, yang mencetak pesan bahwa mobil dimulai, dan `info`, yang mencetak informasi tentang mobil.

## Konstruktor Function

Fungsi konstruktor adalah cara untuk membuat objek baru dengan properti yang sama. Kita dapat menggunakan `new` untuk membuat instance baru dari objek tersebut.

### Contoh Fungsi Konstruktor

```javascript
function Mobil(merk, model, tahun) {
  this.merk = merk;
  this.model = model;
  this.tahun = tahun;

  this.start = function () {
    console.log("Mobil dimulai");
  };
  this.info = function () {
    console.log(`Mobil: ${this.merk} ${this.model}`);
  };
}

let mobil1 = new Mobil("Toyota", "Avanza", 2021);
let mobil2 = new Mobil("Honda", "Civic", 2020);

// Menampilkan mobil1
console.log(mobil1);
```

- **Penjelasan**: Di sini, kita mendefinisikan fungsi konstruktor `Mobil` yang menerima parameter `merk`, `model`, dan `tahun`. Kita kemudian membuat dua instance baru, `mobil1` dan `mobil2`, menggunakan `new Mobil()`. Setiap instance memiliki metode `start` dan `info`.

## Konsep Pewarisan Prototipe

JavaScript menggunakan pewarisan prototipe, yang memungkinkan objek mewarisi properti dan metode dari objek lain. Prototipe adalah objek dari mana objek lain mewarisi properti dan metode.

### Contoh Pewarisan Prototipe

```javascript
function Hewan(nama, jenis) {
  this.nama = nama;
  this.jenis = jenis;
}

// Menambahkan metode ke prototipe Hewan
Hewan.prototype.makan = function () {
  console.log(`${this.nama} makan`);
};

// Membuat instance Hewan
let kucing = new Hewan("Kitty", "Anggora");

// Memanggil metode makan
kucing.makan();
```

- **Penjelasan**: Dalam contoh ini, kita mendefinisikan konstruktor `Hewan` yang memiliki atribut `nama` dan `jenis`. Kita menambahkan metode `makan` ke prototipe `Hewan`, sehingga semua instance `Hewan` dapat mengakses metode ini. Kita membuat instance `kucing` dan memanggil metode `makan`, yang mencetak nama kucing yang sedang makan.

## Kesimpulan

Pemrograman Berbasis Objek di JavaScript memungkinkan kita untuk mengorganisir kode dengan lebih baik melalui penggunaan objek, konstruktor, dan pewarisan prototipe. Dengan memahami dasar-dasar ini, Anda dapat membangun aplikasi yang lebih kompleks dan terstruktur.
