# Dokumentasi Kode OOP JavaScript

## Deskripsi

Kode ini merupakan contoh implementasi pemrograman berorientasi objek (OOP) menggunakan fungsi konstruktor di JavaScript.

## Struktur Kode

### Fungsi Konstruktor Person

- **Fungsi**: `Person(firstName, lastName)`
  - **Parameter**:
    - `firstName`: Nama depan orang, digunakan untuk menginisialisasi properti `firstName`.
    - `lastName`: Nama belakang orang, digunakan untuk menginisialisasi properti `lastName`.
  - **Properti**:
    - `this.firstName`: Menyimpan nama depan yang diterima dari parameter.
    - `this.lastName`: Menyimpan nama belakang yang diterima dari parameter.
  - **Metode**:
    - `sayHello(name)`: Menampilkan sapaan dengan nama yang diberikan sebagai parameter.

## Contoh Penggunaan

```javascript
const ali = new Person("Alhie", "Fikri");
ali.sayHello("Fajri");

const budi = new Person("Budi", "Nugraha");
budi.sayHello("Raka");
Menampilkan Objek

Kode ini juga menampilkan objek ali dan budi di konsol:

javascript
Copy code
console.log(ali);
console.log(budi);
Penjelasan Singkat

Parameter: Variabel yang digunakan dalam fungsi untuk menerima nilai saat fungsi dipanggil. Dalam Person, firstName dan lastName adalah parameter.
Properti: Karakteristik dari objek. Dalam Person, this.firstName dan this.lastName adalah properti yang menyimpan nama depan dan belakang.
Metode: Fungsi yang menjadi bagian dari objek. Dalam Person, sayHello adalah metode yang digunakan untuk berinteraksi dengan objek dan menampilkan pesan.
Catatan

Gunakan konstruktor ini untuk membuat instansi baru dari objek Person dan memanggil metode sayHello untuk berinteraksi dengan objek.
```
