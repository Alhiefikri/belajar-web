# README: Konsep Polymorphism dalam OOP (Object-Oriented Programming)

## Pendahuluan

Polymorphism adalah salah satu prinsip dasar dalam pemrograman berorientasi objek (OOP) yang memungkinkan metode dengan nama yang sama digunakan pada objek yang berbeda. Dengan polymorphism, kita dapat mengubah perilaku metode tergantung pada objek yang memanggilnya, sehingga meningkatkan fleksibilitas dan extensibility kode.

## Kapan Kode Ini Dipakai

Kode ini digunakan ketika Anda memiliki beberapa kelas yang memiliki metode dengan nama yang sama tetapi dengan implementasi yang berbeda. Contohnya adalah ketika Anda ingin membuat berbagai jenis hewan yang memiliki suara yang berbeda, tetapi Anda tetap ingin menggunakan metode yang sama untuk memanggil suara tersebut.

## Penjelasan Kode

Berikut adalah contoh implementasi polymorphism dalam JavaScript:

```javascript
class Hewan {
  bersuara() {
    console.log("Hewan Bersuara");
  }
}

class Kucing extends Hewan {
  bersuara() {
    super.bersuara(); // Memanggil metode bersuara() dari kelas induk
    console.log("Miaaw"); // Suara khusus untuk kucing
  }
}

// Membuat objek dari kelas Hewan dan Kucing
let hewan = new Hewan();
let kucing = new Kucing();

// Memanggil metode bersuara
// hewan.bersuara(); // Output: Hewan Bersuara
kucing.bersuara(); // Output: Hewan Bersuara \n Miaaw
```

### Komentar Kode

1. **Kelas `Hewan`**:

   - Kelas dasar yang memiliki metode `bersuara()`. Metode ini menampilkan pesan umum bahwa hewan bersuara.

2. **Kelas `Kucing`**:

   - Kelas turunan dari `Hewan`. Di sini, kita mengoverride metode `bersuara()`, yang memungkinkan kita untuk menambah perilaku khusus (suara kucing).

3. **`super.bersuara()`**:

   - Dengan menggunakan `super`, kita dapat memanggil metode dari kelas induk (`Hewan`) sebelum menambahkan perilaku spesifik untuk kucing.

4. **Instansiasi Objek**:
   - Kita membuat objek dari kelas `Hewan` dan `Kucing`. Kemudian, kita memanggil metode `bersuara()` pada objek `kucing`, yang menghasilkan output yang berbeda dari objek `hewan`.

### Analogi Sederhana

Bayangkan Anda memiliki beberapa alat musik: piano, gitar, dan biola. Ketika Anda meminta semua alat musik untuk "bermain", setiap alat akan mengeluarkan suara yang berbeda meskipun perintahnya sama. Piano akan bermain lagu piano, gitar akan bermain lagu gitar, dan biola akan memainkan melodi biola. Inilah cara kerja polymorphism dalam pemrograman.

## Kesimpulan

Polymorphism adalah konsep yang memungkinkan penggunaan metode dengan nama yang sama di berbagai kelas dengan perilaku yang berbeda. Dengan polymorphism, kode menjadi lebih fleksibel dan mudah diperluas, karena Anda dapat menambahkan jenis objek baru tanpa mengubah kode yang ada. Ini merupakan salah satu cara untuk mendukung prinsip DRY (Don't Repeat Yourself) dalam pemrograman berorientasi objek.
