Tentu! Berikut adalah struktur `README.md` yang diperbarui sesuai permintaanmu:

````markdown
# Dokumentasi Kode OOP JavaScript

## Pengertian

Pewarisan (Inheritance) adalah konsep dalam pemrograman berorientasi objek (OOP) yang memungkinkan satu kelas (subclass) untuk mewarisi sifat (properti) dan metode (fungsi) dari kelas lain (superclass). Ini membantu dalam menciptakan hierarki kelas yang lebih terorganisir dan memudahkan reusabilitas kode.

## Cara Kerja Kode

### Fungsi Konstruktor Employee

- **Fungsi**: `Employee(firstName)`
  - **Parameter**:
    - `firstName`: Nama depan orang, digunakan untuk menginisialisasi properti `firstName`.
  - **Properti**:
    - `this.firstName`: Menyimpan nama depan yang diterima dari parameter.
  - **Metode**:
    - `sayHello(name)`: Menampilkan sapaan dengan nama yang diberikan sebagai parameter.

### Fungsi Konstruktor Manager

- **Fungsi**: `Manager(firstName, lastName)`
  - **Parameter**:
    - `firstName`: Nama depan orang, diteruskan ke konstruktor `Employee`.
    - `lastName`: Nama belakang orang, digunakan untuk menginisialisasi properti `lastName`.
  - **Pewarisan**:
    - Memanggil `Employee.call(this, firstName)` untuk mewarisi properti `firstName` dari `Employee`.

### Contoh Penggunaan

```javascript
const ali = new Manager("Alhie", "Fikri");
console.info(ali);
```
````

- Kode di atas membuat objek baru bernama `ali` dari konstruktor `Manager` dan menampilkan informasi objek tersebut.

## Kegunaan Inheritance

Pewarisan sering digunakan untuk:

- **Menyusun Kode**: Membuat hierarki yang jelas antara kelas-kelas yang berkaitan, sehingga lebih mudah dipahami.
- **Reusabilitas**: Menghindari duplikasi kode dengan membagikan metode dan properti umum ke dalam kelas induk.
- **Ekstensi**: Memungkinkan pengembang untuk memperluas fungsionalitas kelas induk tanpa mengubah kode yang sudah ada.

## Catatan

- Gunakan konstruktor ini untuk membuat instansi baru dari objek `Manager` yang mewarisi sifat dari objek `Employee`.
