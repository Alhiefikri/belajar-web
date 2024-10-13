### Pengertian OOP dan Inheritance

OOP adalah paradigma pemrograman yang menggunakan objek untuk merepresentasikan data dan perilaku. Inheritance adalah mekanisme di mana satu kelas dapat mewarisi sifat dan metode dari kelas lain. Dalam contoh ini, kita memiliki kelas `Hewan` yang merupakan kelas induk, dan kelas `Kucing` yang mewarisi dari kelas `Hewan`.

### Penjelasan Kode

```javascript
class Hewan {
  constructor(nama, jenis) {
    this.nama = nama; // Menyimpan nama hewan
    this.jenis = jenis; // Menyimpan jenis hewan
  }

  makan() {
    return `${this.nama} sedang makan`; // Metode untuk menampilkan pesan makan
  }
}
```

1. **Kelas `Hewan`**:
   - Memiliki konstruktor yang menerima dua parameter: `nama` dan `jenis`.
   - Memiliki metode `makan()` yang mengembalikan string dengan nama hewan yang sedang makan.

```javascript
class Kucing extends Hewan {
  constructor(nama, warna) {
    super(nama, "Kucing-Kucingan"); // Memanggil konstruktor kelas induk
    this.warna = warna; // Menyimpan warna kucing
  }

  kucingMakan() {
    console.log(super.makan()); // Memanggil metode makan dari kelas induk
    console.log("Makannya lahap sekali"); // Menampilkan pesan tambahan
  }
}
```

2. **Kelas `Kucing`**:
   - Mewarisi dari kelas `Hewan` dengan menggunakan kata kunci `extends`.
   - Konstruktor `Kucing` menerima parameter `nama` dan `warna`, memanggil `super()` untuk menginisialisasi `nama` dan menetapkan jenis sebagai "Kucing-Kucingan".
   - Memiliki metode `kucingMakan()` yang memanggil metode `makan()` dari kelas induk dan menampilkan pesan tambahan.

```javascript
let Kitty = new Kucing("Kitty", "Orange");
```

3. **Membuat Objek `Kitty`**:
   - Menggunakan kelas `Kucing` untuk membuat objek baru dengan nama "Kitty" dan warna "Orange".

```javascript
console.log(Kitty.jenis); // Menampilkan jenis hewan
console.log(Kitty.kucingMakan()); // Memanggil metode kucingMakan
```

4. **Mengakses Properti dan Metode**:
   - `console.log(Kitty.jenis);` akan mencetak "Kucing-Kucingan".
   - `console.log(Kitty.kucingMakan());` akan menjalankan metode `kucingMakan()`, yang mencetak pesan tentang Kitty yang sedang makan.

### Analogi Sederhana

Bayangkan kita memiliki kelas umum `Hewan`, seperti semua jenis hewan. Kelas `Kucing` adalah spesifikasi dari kelas `Hewan`, sama seperti bagaimana kucing adalah jenis hewan. Setiap kucing memiliki nama dan warna, tetapi semua hewan dapat melakukan tindakan seperti makan.

### Kapan Kode Ini Dipakai

Kode ini sering digunakan dalam aplikasi yang memerlukan model objek yang kompleks, seperti permainan, aplikasi manajemen hewan peliharaan, atau sistem yang melibatkan hierarki objek.

### Kesimpulan

Kode ini menunjukkan cara menggunakan inheritance dalam OOP dengan JavaScript. Kelas `Kucing` mewarisi dari kelas `Hewan`, sehingga dapat menggunakan dan memperluas fungsionalitas yang ada. Pendekatan ini membantu dalam mengorganisasi kode dan menghindari pengulangan, menjadikan pengembangan lebih efisien.
