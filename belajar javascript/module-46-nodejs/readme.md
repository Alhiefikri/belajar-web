# JavaScript Modules

## Deskripsi

Proyek ini menggunakan JavaScript Modules untuk mengorganisir kode dengan cara yang lebih modular. Modul ini memungkinkan kita untuk memisahkan fungsi-fungsi terkait ke dalam file terpisah dan mengimpor serta mengekspor fungsi tersebut sesuai kebutuhan.

## Daftar Isi

1. [Fitur](#fitur)
2. [Teknologi yang Digunakan](#teknologi-yang-digunakan)
3. [Penjelasan Kode](#penjelasan-kode)
4. [Penggunaan](#penggunaan)
5. [Kesimpulan](#kesimpulan)

## Fitur

- Menggunakan module untuk fungsi matematika dasar (penjumlahan dan pengurangan).
- Mengimpor fungsi menggunakan cara statis dan dinamis.
- Memisahkan logika aplikasi untuk kemudahan pengelolaan.

## Teknologi yang Digunakan

- JavaScript ES6
- HTML

## Penjelasan Kode

Berikut adalah penjelasan dari kode yang digunakan dalam proyek ini:

```javascript
// Import/export named function
import greet, { add as tambah, subtract as kurang } from "./math.js";

// Menggunakan fungsi yang diimpor
console.log(tambah(10, 20)); // Menjumlahkan 10 dan 20
console.log(kurang(30, 20)); // Mengurangkan 30 dengan 20

greet("Alhie"); // Memanggil fungsi greet untuk menyapa

// Dynamic Import
document.getElementById("addButton").addEventListener("click", async () => {
  const mathOperation = await import("./math.js"); // Mengimpor modul math.js secara dinamis
  const result = mathOperation.add(5, 3); // Menggunakan fungsi add dari modul
  console.log(result); // Menampilkan hasil penjumlahan
});

document
  .getElementById("subtractButton")
  .addEventListener("click", async () => {
    const mathOperation = await import("./math.js"); // Mengimpor modul math.js secara dinamis
    const result = mathOperation.subtract(5, 3); // Menggunakan fungsi subtract dari modul
    console.log(result); // Menampilkan hasil pengurangan
  });
```

### Penjelasan Kode:

1. **Import dan Export**:

   - Mengimpor fungsi `greet`, `add`, dan `subtract` dari modul `math.js`.
   - `add` di-referensikan sebagai `tambah` dan `subtract` sebagai `kurang` untuk memberikan nama yang lebih deskriptif.

2. **Penggunaan Fungsi**:

   - Menggunakan fungsi `tambah` dan `kurang` untuk melakukan operasi matematika dan mencetak hasilnya ke konsol.
   - Memanggil fungsi `greet` untuk menampilkan pesan sapaan.

3. **Dynamic Import**:
   - Menambahkan event listener pada tombol "addButton" dan "subtractButton".
   - Ketika tombol ditekan, modul `math.js` diimpor secara dinamis menggunakan `await import()`.
   - Menggunakan fungsi yang diimpor untuk melakukan penjumlahan atau pengurangan berdasarkan input pengguna dan mencetak hasilnya ke konsol.

## Penggunaan

1. Pastikan Anda memiliki file `math.js` yang berisi fungsi `greet`, `add`, dan `subtract`.
2. Salin kode di atas ke dalam file JavaScript.
3. Buat elemen HTML dengan id `addButton` dan `subtractButton` untuk memicu operasi.
4. Buka file HTML di browser untuk mencoba fungsi-fungsi yang diimpor.

## Kesimpulan

Penggunaan JavaScript Modules memungkinkan pengorganisasian kode yang lebih baik, meningkatkan keterbacaan dan pemeliharaan aplikasi. Dengan teknik impor dinamis, aplikasi dapat memuat modul hanya saat dibutuhkan, yang dapat mengoptimalkan performa.
