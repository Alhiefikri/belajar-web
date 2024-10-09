# README: Pengertian dan Implementasi `callback` dengan `setInterval` dalam JavaScript

## Pengertian Materi

`setInterval` adalah fungsi bawaan dalam JavaScript yang digunakan untuk menjalankan fungsi tertentu secara berulang pada interval waktu yang ditentukan. Dalam konteks ini, kita akan membahas bagaimana `callback` berfungsi bersama `setInterval` untuk menjalankan kode secara berkala.

## Penjelasan Code

Berikut adalah contoh kode HTML dan JavaScript yang menggunakan `setInterval`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Set Interval</title>
  </head>
  <body>
    <h1 id="header"></h1>
    <script>
      function setTime() {
        const header = document.getElementById("header");
        header.textContent = new Date().toString();
      }

      setInterval(setTime, 1000);
      console.info("Program Selesai");
    </script>
  </body>
</html>
```

### Penjelasan Kode

- **HTML Struktur**: Kode ini membuat elemen `h1` dengan id `header` yang akan menampilkan waktu saat ini.
- **Fungsi `setTime`**:
  - Mengambil elemen dengan id `header`.
  - Mengubah konten teks elemen tersebut menjadi waktu saat ini menggunakan `new Date().toString()`.
- **`setInterval(setTime, 1000)`**:
  - Menjalankan fungsi `setTime` setiap 1000 milidetik (1 detik).
- **Console Info**: `console.info("Program Selesai");` mencetak pesan ke konsol untuk menandakan bahwa program telah dimulai.

## Kapan Code Dipakai

Kode ini digunakan ketika kita ingin memperbarui tampilan waktu atau informasi lain secara otomatis di halaman web tanpa memerlukan interaksi dari pengguna.

## Penjelasan Biasanya di Real Projek Dipakai untuk Apa

`setInterval` dan callback sering digunakan dalam berbagai aplikasi web, seperti:

- Menampilkan waktu nyata pada jam digital.
- Memperbarui data dari server secara berkala (misalnya, notifikasi atau feed berita).
- Menciptakan efek animasi yang perlu diperbarui pada interval tertentu.

## Analogi Sederhana Mengenai Materi Itu

Bayangkan Anda memiliki sebuah jam dinding yang berdetak setiap detik. Setiap kali jam itu berdetak, ia memperbarui tampilan waktu. Di sini, jam adalah `setInterval` yang memanggil fungsi untuk memperbarui waktu setiap detik, sama seperti fungsi `setTime` yang dipanggil setiap 1000 milidetik.

## Kesimpulan

`setInterval` adalah alat yang kuat dalam JavaScript untuk menjalankan fungsi secara berulang pada interval waktu yang ditentukan. Dengan menggunakan callback, kita dapat membuat aplikasi web yang responsif dan dinamis, memungkinkan pembaruan konten secara otomatis dan meningkatkan pengalaman pengguna.
