# README: Materi Abstraksi dalam Pemrograman

## Pengantar

Abstraksi adalah konsep penting dalam pemrograman berorientasi objek (OOP) yang berfungsi untuk menyembunyikan detail implementasi dari pengguna, sehingga mereka hanya dapat berinteraksi dengan esensi atau fitur dari objek tersebut. Dalam konteks JavaScript, kita dapat menyimulasikan abstraksi menggunakan kelas dan pewarisan.

## Konsep Abstraksi

### Penjelasan

Abstraksi memungkinkan programmer untuk membuat model yang lebih sederhana dari sistem yang kompleks. Dengan menggunakan kelas abstrak dan metode abstrak, kita dapat mendefinisikan kontrak yang harus diikuti oleh kelas turunan, sementara detail implementasi disembunyikan.

### Analogi Sederhana

Bayangkan Anda memiliki sebuah remote control untuk TV. Anda tidak perlu mengetahui cara kerja internal dari TV untuk mengubah saluran atau mengatur volume. Anda hanya perlu tahu tombol mana yang harus ditekan. Ini adalah contoh dari abstraksi—di mana detail implementasi disembunyikan dan hanya antarmuka yang relevan yang ditampilkan.

## Penjelasan Kode

Berikut adalah contoh kode yang mendemonstrasikan konsep abstraksi dalam JavaScript:

```javascript
// Abstraksi adalah proses menyembunyikan detail implementasi dari pengguna
// dan hanya menampilkan esensi atau fitur.

class Shape {
  constructor(name) {
    // Mencegah instansiasi kelas Shape secara langsung
    if (this.constructor === Shape) {
      throw new Error("Cannot instantiate abstract class");
    }
    this.name = name;
  }

  // Metode abstrak yang harus diimplementasikan oleh subclass
  calculateArea() {
    throw new Error("Abstract method must be implemented");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    // Memanggil constructor dari kelas Shape
    super("Rectangle");
    this.width = width;
    this.height = height;
  }

  // Implementasi dari metode calculateArea
  calculateArea() {
    return this.width * this.height; // Menghitung luas persegi panjang
  }
}

// Membuat objek Rectangle
let myRect = new Rectangle(10, 4);

// Menampilkan luas persegi panjang
console.log(myRect.calculateArea()); // Output: 40
```

### Penjelasan Kode

1. **Kelas Shape**:

   - Ini adalah kelas abstrak yang tidak dapat diinstansiasi secara langsung. Jika ada usaha untuk menginstansiasi kelas ini, akan muncul error.
   - Metode `calculateArea()` dideklarasikan tetapi tidak diimplementasikan, menandakan bahwa kelas turunan harus menyediakan implementasinya.

2. **Kelas Rectangle**:

   - Mengextends (pewarisan) kelas Shape dan menyediakan implementasi untuk `calculateArea()`.
   - Dalam constructor, kita memanggil `super()` untuk menginisialisasi properti yang ada di kelas induk.

3. **Objek myRect**:
   - Membuat instance dari Rectangle dan memanggil `calculateArea()`, yang menghitung dan mengembalikan luas persegi panjang.

## Kapan Kode Dipakai

Konsep abstraksi sering digunakan dalam situasi di mana kita memiliki beberapa objek yang memiliki fitur atau perilaku yang mirip tetapi implementasi detailnya berbeda. Misalnya:

- Dalam aplikasi grafis, semua bentuk (Shape) dapat memiliki metode untuk menghitung area, tetapi setiap bentuk (segi empat, lingkaran, segitiga) memiliki rumus berbeda untuk menghitung luasnya.
- Dalam pengembangan perangkat lunak yang kompleks, seperti sistem manajemen data atau game, di mana berbagai entitas perlu berinteraksi tetapi tidak perlu tahu tentang detail implementasi masing-masing.

## Penggunaan di Proyek Nyata

Di dunia nyata, abstraksi digunakan dalam:

- **Framework dan Library**: Menyediakan antarmuka yang bersih untuk pengguna tanpa mengungkapkan detail implementasi.
- **API**: Mengizinkan pengguna untuk berinteraksi dengan sistem tanpa perlu tahu cara kerjanya di belakang layar.
- **Pengembangan Game**: Mengelompokkan berbagai jenis objek dengan perilaku serupa di bawah kelas dasar untuk menjaga kode tetap terstruktur dan terorganisir.

## Kesimpulan

Abstraksi adalah alat yang kuat dalam pemrograman yang membantu kita menyederhanakan interaksi dengan objek yang kompleks. Dengan menggunakan kelas abstrak dan pewarisan, kita dapat menciptakan model yang lebih jelas dan terorganisir, yang pada gilirannya memudahkan pemeliharaan dan pengembangan kode di masa depan. Memahami dan menerapkan konsep ini akan sangat meningkatkan kualitas dan efisiensi proyek pemrograman Anda.
