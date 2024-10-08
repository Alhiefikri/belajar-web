# README: Object.assign

## Pengertian

`Object.assign` adalah metode dalam JavaScript yang digunakan untuk menyalin nilai properti dari satu atau lebih objek sumber ke objek target. Metode ini mengembalikan objek target setelah menyalin properti, dan properti yang ada di target akan ditimpa jika ada properti dengan nama yang sama di sumber.

## Penjelasan mengenai Code

Berikut adalah penjelasan mengenai code yang disertakan:

```javascript
const target = {
  firstName: "Alhie", // Objek target dengan properti firstName
};

const source = {
  lastName: "Fikri", // Objek sumber dengan properti lastName
};

// Menyalin properti dari objek source ke objek target
Object.assign(target, source);

console.info(target); // Menampilkan objek target setelah penyalinan
console.info(source); // Menampilkan objek sumber yang tetap tidak berubah
```

Dalam code ini, kita memiliki objek `target` yang memiliki properti `firstName` dan objek `source` yang memiliki properti `lastName`. Dengan menggunakan `Object.assign(target, source)`, properti dari `source` disalin ke `target`. Setelah eksekusi, `target` akan memiliki kedua properti: `firstName` dan `lastName`. Namun, `source` tetap tidak berubah.

## Kapan Code Ini Digunakan

Code ini biasanya digunakan dalam beberapa situasi, antara lain:

1. **Menggabungkan Objek**: Ketika Anda ingin menggabungkan beberapa objek menjadi satu objek baru. Misalnya, menggabungkan pengaturan default dan pengaturan pengguna dalam aplikasi.

2. **Memperbarui Objek**: Saat Anda perlu memperbarui properti objek yang sudah ada dengan nilai baru dari objek lain.

3. **Membuat Objek Baru**: Anda dapat menggunakan `Object.assign` untuk membuat salinan objek yang dangkal, berguna dalam pemrograman fungsional atau saat bekerja dengan state di aplikasi.

4. **Pengaturan Konfigurasi**: Menggunakan `Object.assign` untuk menggabungkan berbagai pengaturan atau konfigurasi dari beberapa sumber sebelum digunakan dalam aplikasi.

## Analogi Sederhana

Anda dapat membayangkan `Object.assign` seperti menempelkan label baru pada sebuah kotak. Ketika Anda menempelkan label baru (dari objek sumber) pada kotak yang sudah ada (objek target), label tersebut akan ditambahkan ke kotak, dan jika label yang sama sudah ada, label tersebut akan diperbarui dengan yang baru.

## Kesimpulan

Secara keseluruhan, `Object.assign` adalah metode yang sangat berguna dalam JavaScript untuk menggabungkan atau memperbarui objek. Dengan menyalin properti dari objek sumber ke objek target, Anda dapat dengan mudah mengelola dan memodifikasi data dalam aplikasi Anda. Memahami cara kerja `Object.assign` dapat membantu dalam pengembangan aplikasi yang lebih efisien dan terstruktur.
