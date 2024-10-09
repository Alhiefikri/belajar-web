# README: Document, Document Property, dan Document Method dalam DOM di JavaScript

## Pengertian

**DOM (Document Object Model)** adalah representasi struktur dari dokumen HTML atau XML yang dapat dimanipulasi dengan JavaScript. `document` adalah objek utama yang mewakili keseluruhan dokumen. Melalui objek `document`, kita bisa mengakses dan mengubah konten serta struktur halaman web.

## Fungsi Code

```javascript
// Menampilkan informasi tentang objek document
console.info(document);

// Menampilkan properti dari document
console.info(document.title); // Judul halaman
console.info(document.head); // Elemen <head> dari halaman
console.info(document.body); // Elemen <body> dari halaman
console.info(document.images); // Koleksi semua gambar dalam halaman
console.info(document.contentType); // Jenis konten dokumen

// Menggunakan metode untuk mengambil elemen dengan ID "tulisan"
const tulisan = document.getElementById("tulisan");
console.info(tulisan); // Menampilkan elemen dengan ID "tulisan"
```

## Kapan Metode Ini Dipakai

Metode dan properti pada objek `document` sering digunakan saat kita ingin:

- Mengambil atau memperbarui konten dan elemen pada halaman web.
- Mengakses elemen tertentu untuk interaksi, seperti tombol atau input.
- Mengubah tampilan halaman secara dinamis berdasarkan interaksi pengguna.

## Biasanya Metode Ini Dipakai Dalam Real Projects Apa

- **Website Interaktif**: Ketika kita ingin menambahkan efek atau mengubah konten berdasarkan input pengguna.
- **Aplikasi Web**: Untuk mengambil data dan menampilkannya dalam format yang mudah dibaca.
- **Game Browser**: Mengelola elemen game dan antarmuka pengguna (UI) dalam game berbasis web.

## Analogi Sederhana

Bayangkan halaman web seperti sebuah buku. Objek `document` adalah buku itu sendiri, dan setiap properti seperti `document.title`, `document.body`, dan `document.images` adalah bagian-bagian dari buku tersebut. Misalnya, `document.title` adalah judul buku, `document.body` adalah isi buku, dan `document.images` adalah gambar-gambar yang terdapat dalam buku. Ketika kita menggunakan metode seperti `getElementById`, kita sedang mencari halaman tertentu dalam buku untuk mengubah atau melihat kontennya.

## Kesimpulan

Objek `document` dalam DOM adalah alat penting dalam JavaScript yang memungkinkan kita untuk mengakses dan memanipulasi elemen-elemen dalam halaman web. Dengan memahami dan menggunakan `document`, kita dapat membuat halaman yang lebih interaktif dan responsif sesuai kebutuhan pengguna.
