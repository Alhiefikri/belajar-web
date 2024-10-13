# README: Custom Error in JavaScript

## Penjelasan Materi

Custom Error di JavaScript memungkinkan kita untuk membuat jenis kesalahan (error) yang lebih spesifik daripada yang sudah ada dalam built-in `Error` class. Dengan membuat Custom Error, kita bisa memberikan informasi yang lebih jelas mengenai kesalahan yang terjadi di dalam aplikasi kita.

## Fungsi pada Code

```javascript
let num = 123;

// Mendefinisikan class CustomError yang mewarisi dari class Error
class CustomError extends Error {
  constructor(message) {
    super(message); // Memanggil constructor dari Error
    this.name = "Custom Error"; // Menetapkan nama kesalahan
  }
}

// Blok try-catch untuk menangani kesalahan
try {
  if (num === 123) {
    // Mengecek apakah num sama dengan 123
    throw new CustomError("Num tidak boleh bernilai 123"); // Melempar CustomError
  }
} catch (error) {
  console.error(`Error: ${error.name}`); // Menampilkan nama kesalahan di konsol
}
```

## Penjelasan Code

1. **Deklarasi Variabel**: `let num = 123;` — mendeklarasikan variabel `num` dengan nilai 123.
2. **Class CustomError**:

   - Mewarisi dari `Error` class.
   - Menggunakan `super(message)` untuk memanggil constructor `Error`, sehingga pesan kesalahan juga bisa disimpan.
   - Menetapkan nama kesalahan menjadi "Custom Error" agar lebih spesifik.

3. **Try-Catch Block**:
   - Memeriksa apakah `num` sama dengan 123.
   - Jika benar, melemparkan `CustomError` dengan pesan yang relevan.
   - Menangkap kesalahan dan mencetak nama kesalahan ke konsol.

## Kapan Code Dipakai

Kode ini digunakan ketika kita perlu menangani kesalahan dengan lebih spesifik dalam aplikasi kita. Misalnya, dalam situasi di mana input dari pengguna atau data yang diambil dari database perlu diverifikasi untuk memenuhi kriteria tertentu.

## Di Real Projek Dipakai Untuk Apa

Dalam proyek nyata, Custom Error sering digunakan dalam:

- Validasi input pengguna, seperti memastikan bahwa angka tidak berada dalam rentang tertentu.
- Penanganan kesalahan dalam API yang memberikan feedback yang lebih jelas kepada pengguna atau developer.
- Pembuatan log yang lebih terstruktur untuk analisis kesalahan.

## Analogi Sederhana Mengenai Materi

Bayangkan Anda adalah seorang guru yang memberikan tugas kepada siswa. Jika seorang siswa mengerjakan tugas dengan cara yang salah, Anda tidak hanya mengatakan "salah". Sebaliknya, Anda memberi tahu siswa tersebut mengapa itu salah dan bagaimana cara yang benar. Custom Error berfungsi dengan cara yang sama—memberikan informasi yang lebih mendalam tentang kesalahan yang terjadi.

## Kesimpulan

Custom Error di JavaScript sangat berguna untuk memberikan informasi yang lebih jelas tentang kesalahan dalam aplikasi. Dengan membuat jenis kesalahan yang khusus, kita dapat menangani berbagai situasi dengan lebih efektif dan membantu pengguna memahami apa yang salah dan bagaimana cara memperbaikinya. Menerapkan Custom Error dalam pengembangan perangkat lunak dapat meningkatkan pengalaman pengguna dan mempermudah debugging bagi developer.
