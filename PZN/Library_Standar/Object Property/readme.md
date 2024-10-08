Berikut adalah README untuk materi mengenai `Object.values` dan `Object.getOwnPropertyNames` dalam JavaScript:

# README: Object Property Names dan Values

## Pengertian

`Object.values` dan `Object.getOwnPropertyNames` adalah metode dalam JavaScript yang digunakan untuk mendapatkan nilai properti dan nama properti dari suatu objek. `Object.values` mengembalikan array yang berisi nilai dari semua properti yang dapat enumerasi pada objek, sedangkan `Object.getOwnPropertyNames` mengembalikan array yang berisi semua nama properti dari objek, baik yang dapat enumerasi maupun tidak.

## Penjelasan mengenai Code

Berikut adalah penjelasan mengenai code yang disertakan:

```javascript
const person = {
  firstName: "Alhie", // Objek dengan properti firstName
  lastName: "Fikri", // Objek dengan properti lastName
};

console.info(Object.values(person)); // Menampilkan nilai dari semua properti dalam objek
console.info(Object.getOwnPropertyNames(person)); // Menampilkan semua nama properti dalam objek
```

Dalam code ini, kita mendefinisikan objek `person` dengan dua properti: `firstName` dan `lastName`.

- `Object.values(person)` akan mengembalikan array berisi nilai dari properti objek, yaitu `["Alhie", "Fikri"]`.
- `Object.getOwnPropertyNames(person)` akan mengembalikan array berisi nama properti, yaitu `["firstName", "lastName"]`.

## Kapan Code Ini Digunakan

Code ini biasanya digunakan dalam situasi di mana Anda perlu:

1. **Mengambil Nilai Properti**: Saat Anda ingin mendapatkan semua nilai dari properti dalam objek untuk digunakan lebih lanjut, misalnya dalam pengolahan data.

2. **Mengetahui Struktur Objek**: Untuk mendapatkan daftar semua nama properti dari objek, termasuk properti yang tidak dapat enumerasi, yang berguna dalam debugging atau saat memanipulasi objek.

3. **Iterasi**: Dalam beberapa kasus, Anda mungkin ingin melakukan iterasi terhadap nilai atau nama properti untuk keperluan pengolahan data atau pemrograman fungsional.

## Analogi Sederhana

Anda dapat membayangkan `Object.values` dan `Object.getOwnPropertyNames` seperti membuka buku catatan. `Object.values` memberi Anda semua isi catatan (nilai), sedangkan `Object.getOwnPropertyNames` memberi Anda daftar semua judul catatan (nama properti), baik yang tertulis besar maupun kecil.

## Kesimpulan

Secara keseluruhan, `Object.values` dan `Object.getOwnPropertyNames` adalah metode yang sangat berguna dalam JavaScript untuk mengakses nilai dan nama properti dari objek. Dengan memahami cara kerja kedua metode ini, Anda dapat lebih efektif dalam mengelola dan memanipulasi data dalam aplikasi Anda.
