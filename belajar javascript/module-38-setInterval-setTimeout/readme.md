# README: Memahami `setTimeout` dan `setInterval` di JavaScript

## Pengertian

`setTimeout` dan `setInterval` adalah dua fungsi yang digunakan dalam JavaScript untuk mengatur penundaan eksekusi kode.

- **`setTimeout`**: Menjalankan fungsi setelah periode waktu tertentu (dalam milidetik).
- **`setInterval`**: Menjalankan fungsi secara berulang pada interval waktu tertentu.

## Penjelasan Cara Kerja Kode

### Contoh Kode

```javascript
// Memulai log di konsol
console.log("Mulai");

// Menjalankan fungsi setelah 3 detik
setTimeout(() => {
  console.log("kode ini dijeda 3 detik");
}, 3000);

// Menampilkan pesan bahwa eksekusi selesai
console.log("Selesai, akan muncul sebelum delay");

// Inisialisasi timer
let timer = 0;

// Mengatur interval untuk menjalankan fungsi setiap 1 detik
const intervalId = setInterval(() => {
  timer += 1; // Menambah timer setiap detik
  console.log(`Timer: ${timer} detik`); // Menampilkan timer di konsol

  // Jika timer mencapai 5 detik, hentikan interval
  if (timer == 5) {
    clearInterval(intervalId); // Menghentikan interval
    console.log("Timer Berhenti"); // Menampilkan pesan bahwa timer berhenti
  }
}, 1000);

// Menghentikan interval setelah 5 detik
setTimeout(() => {
  clearInterval(intervalId); // Menghentikan interval
}, 5000);
```

### Komentar Penjelasan Tiap Baris

- `console.log("Mulai");`

  - Menampilkan pesan "Mulai" di konsol untuk menunjukkan bahwa eksekusi kode telah dimulai.

- `setTimeout(() => { ... }, 3000);`

  - Mengatur fungsi anonim untuk dijalankan setelah 3000 milidetik (3 detik). Fungsi ini akan menampilkan pesan di konsol.

- `console.log("Selesai, akan muncul sebelum delay");`

  - Menampilkan pesan "Selesai" yang menunjukkan bahwa kode ini dieksekusi segera, sebelum penundaan dari `setTimeout`.

- `let timer = 0;`

  - Menginisialisasi variabel `timer` untuk menghitung waktu.

- `const intervalId = setInterval(() => { ... }, 1000);`

  - Mengatur fungsi untuk dijalankan setiap 1000 milidetik (1 detik). Ini menciptakan interval yang akan terus berjalan sampai dihentikan.

- `timer += 1;`

  - Menambah nilai `timer` setiap kali interval dijalankan.

- `console.log(`Timer: ${timer} detik`);`

  - Menampilkan nilai `timer` saat ini di konsol.

- `if (timer == 5) { ... }`

  - Mengecek apakah timer telah mencapai 5 detik.

- `clearInterval(intervalId);`

  - Menghentikan interval jika timer mencapai 5 detik.

- `setTimeout(() => { clearInterval(intervalId); }, 5000);`
  - Sebuah `setTimeout` yang berfungsi untuk memastikan interval dihentikan setelah 5 detik, meskipun fungsi di dalam `setInterval` telah menghentikannya.

## Kapan Kode Ini Dipakai

- **`setTimeout`**: Ketika Anda ingin menunda eksekusi suatu fungsi, misalnya menunggu respon dari pengguna atau memberi efek jeda dalam animasi.
- **`setInterval`**: Saat Anda perlu menjalankan fungsi berulang kali, seperti dalam game, timer, atau penghitungan mundur.

## Penggunaan di Proyek Nyata

- **`setTimeout`**: Menunggu beberapa detik sebelum menampilkan notifikasi kepada pengguna.
- **`setInterval`**: Menghitung mundur waktu untuk sebuah event, misalnya pengunduran waktu sebelum sebuah penawaran berakhir.

## Analogi Sederhana

Bayangkan Anda mengatur pengingat untuk mematikan kompor. Anda bisa menggunakan `setTimeout` seperti mengatakan "Setelah 10 menit, matikan kompor". Sementara `setInterval` seperti seorang asisten yang setiap 5 menit memberi tahu Anda "Kompor masih menyala!".

## Kesimpulan

`setTimeout` dan `setInterval` adalah alat yang sangat berguna dalam JavaScript untuk mengatur penundaan dan pengulangan eksekusi fungsi. Memahami cara kerjanya membantu Anda membuat aplikasi yang lebih responsif dan interaktif. Dengan menerapkan kode yang telah dijelaskan, Anda dapat menangani berbagai skenario dalam pemrograman berbasis waktu.
