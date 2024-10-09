# README: Element Property dalam DOM di JavaScript

## Pengertian

**Element Properties** adalah atribut yang dapat diakses pada elemen HTML melalui objek DOM. Dengan menggunakan properti ini, kita dapat mendapatkan informasi penting tentang elemen, seperti ID, nama kelas, dan jenis tag. Ini memungkinkan kita untuk berinteraksi dan memanipulasi elemen dengan lebih efektif.

## Fungsi Code

```javascript
// Mengambil elemen dengan ID "content"
const content = document.getElementById("content");

// Menampilkan ID dari elemen "content"
// Element Property: id
console.info(content.id); // Menampilkan ID elemen

// Menampilkan nama kelas dari elemen "content"
// Element Property: className
console.info(content.className); // Menampilkan nama kelas elemen

// Menampilkan tag name dari elemen "content"
// Element Property: tagName
console.info(content.tagName); // Menampilkan nama tag elemen
```

## Kapan Properti Ini Dipakai

Element properties biasanya digunakan ketika kita ingin:

- Mengambil atau memeriksa informasi spesifik dari elemen HTML.
- Mengubah gaya atau perilaku elemen berdasarkan kelas atau ID.
- Mengidentifikasi jenis elemen yang sedang dihadapi untuk keperluan interaksi.

## Biasanya Properti Ini Dipakai Dalam Real Projects Apa

- **Website Dinamis**: Untuk menampilkan informasi atau mengubah elemen berdasarkan kondisi tertentu.
- **Aplikasi Web**: Saat mengelola elemen interaktif, seperti tombol dan input form.
- **Pengaturan CSS**: Untuk menerapkan gaya yang berbeda berdasarkan ID atau kelas.

## Analogi Sederhana

Bayangkan setiap elemen di halaman web sebagai sebuah barang di etalase toko. ID adalah label harga yang menunjukkan identitas barang, nama kelas adalah kategori barang (seperti pakaian atau elektronik), dan tag name adalah jenis barang tersebut (seperti kaos atau laptop). Dengan menggunakan properti ini, kita bisa mengenali dan mengelola setiap barang dengan mudah.

## Kesimpulan

Element properties adalah alat penting dalam manipulasi DOM yang memungkinkan kita untuk mengakses informasi penting tentang elemen HTML. Dengan memahami dan menggunakan properti ini, kita dapat meningkatkan interaksi dan responsivitas halaman web, menciptakan pengalaman pengguna yang lebih baik.
