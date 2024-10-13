# README untuk Materi Error Handling

## 1. Deskripsi Materi

Error handling adalah teknik dalam pemrograman yang digunakan untuk menangani kesalahan atau kondisi yang tidak terduga dalam aplikasi. Dengan menggunakan error handling, pengembang dapat mengontrol alur program ketika terjadi kesalahan, sehingga aplikasi dapat tetap berjalan dengan baik tanpa crash. Dalam materi ini, kita akan membahas penggunaan blok `try`, `catch`, dan `finally` serta cara melempar (throw) error dengan menggunakan contoh kode.

## 2. Struktur Kode

### 2.1. Blok `try`, `catch`, dan `finally`

- **Fungsi**: Memungkinkan pengembang untuk menangani kesalahan dengan aman saat menjalankan kode.
- **Kode**:

  ```javascript
  let number = 124;

  try {
    if (number == 123) {
      throw new Error("Nomor 123 tidak diperbolehkan");
    }
    console.log(number);
  } catch (error) {
    console.error(`Error Terjadi : ${error.message}`);
  } finally {
    console.log("ini akan selalu dijalankan");
  }
  ```

- **Penjelasan**:
  - `try`: Blok ini mencoba untuk menjalankan kode yang mungkin menyebabkan kesalahan.
  - `throw`: Menghasilkan error jika kondisi tertentu (di sini, jika `number` sama dengan 123).
  - `catch`: Menangkap error yang terjadi dan menjalankan kode untuk menangani kesalahan tersebut.
  - `finally`: Blok ini selalu dieksekusi, terlepas dari apakah error terjadi atau tidak.
- **Kapan Dipakai**: Digunakan saat ada kemungkinan terjadinya kesalahan saat menjalankan kode, seperti validasi input pengguna.
- **Contoh Penggunaan di Proyek**: Misalnya, saat memvalidasi data yang diterima dari pengguna sebelum menyimpannya ke database.

### 2.2. Menggunakan `throw` untuk Membuang Error

- **Fungsi**: Melempar error secara manual ketika terjadi kondisi tertentu.
- **Kode**:

  ```javascript
  function divide(a, b) {
    if (b == 0) {
      throw new Error("Pembagian dengan nol tidak diperbolehkan");
    }
    return a / b;
  }

  try {
    let result = divide(10, 2);
    console.log(result);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
  ```

- **Penjelasan**:
  - Fungsi `divide` memeriksa apakah `b` adalah nol. Jika ya, maka fungsi melempar error.
  - Jika tidak, fungsi mengembalikan hasil pembagian.
- **Kapan Dipakai**: Saat fungsi melakukan operasi yang tidak valid, seperti pembagian dengan nol.
- **Contoh Penggunaan di Proyek**: Digunakan dalam aplikasi yang melakukan perhitungan matematis di mana pembagian bisa berisiko.

## 3. Analogi Sederhana

Bayangkan Anda sedang mengemudikan mobil. Saat berkendara, Anda perlu memperhatikan jalan. Jika ada rintangan (kesalahan), Anda perlu mengambil tindakan (error handling) untuk menghindari kecelakaan (crash). Blok `try` adalah saat Anda mengemudikan mobil, `catch` adalah saat Anda menanggapi rintangan dengan mengubah arah, dan `finally` adalah tindakan terakhir Anda untuk memastikan mobil tetap berjalan dengan aman, seperti memeriksa apakah semua sistem berfungsi.

## 4. Kesimpulan

Error handling adalah komponen penting dalam pengembangan perangkat lunak yang memungkinkan aplikasi untuk menangani kesalahan dengan cara yang terkontrol. Dengan menggunakan blok `try`, `catch`, dan `finally`, pengembang dapat menjaga stabilitas aplikasi dan memberikan pengalaman pengguna yang lebih baik. Memahami dan menerapkan teknik error handling dengan baik dapat membantu mengurangi bug dan meningkatkan kualitas kode secara keseluruhan.
