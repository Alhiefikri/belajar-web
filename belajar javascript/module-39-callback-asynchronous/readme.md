# README: Memahami Callback Asynchronous di JavaScript

## Pengertian

**Callback asynchronous** adalah fungsi yang diberikan sebagai argumen kepada fungsi lain dan dieksekusi setelah operasi asynchronous selesai. Ini adalah pola umum dalam JavaScript untuk menangani operasi yang memerlukan waktu, seperti pengambilan data dari server.

## Penjelasan Cara Kerja Kode

### Contoh Kode

```javascript
// Fungsi untuk menyelesaikan tugas dan menjalankan callback setelahnya
function selesaikanTugas(tugas, callback) {
  console.log(`Menyelesaikan Tugas : ${tugas}`);
  callback(); // Menjalankan callback setelah tugas selesai
}

// Fungsi callback yang menunjukkan bahwa tugas telah selesai
function tugasSelesai() {
  console.log("Tugas telah selesai !");
}

// Memanggil fungsi selesaikanTugas dengan tugas dan callback
selesaikanTugas("Informatika", tugasSelesai);

// Fungsi untuk mengambil data pengguna secara asynchronous
function getUserData(callback) {
  console.log("Fetching user data . . .");

  setTimeout(() => {
    const userData = {
      id: 1,
      name: "Alhie",
      email: "alhiepedia@gmail.com",
    };

    callback(null, userData); // Menjalankan callback dengan data pengguna
  }, 2000); // Mengatur jeda 2 detik sebelum menjalankan callback
}

// Fungsi untuk menampilkan data pengguna
function displayUserData(error, userData) {
  if (error) {
    console.error("Error fetching user data: ", error); // Menampilkan pesan error jika ada
  } else {
    console.log("User Data: ", userData); // Menampilkan data pengguna
  }
}

// Memanggil fungsi getUserData dengan displayUserData sebagai callback
getUserData(displayUserData);
```

### Komentar Penjelasan Tiap Baris

- `function selesaikanTugas(tugas, callback) { ... }`

  - Mendefinisikan fungsi yang menerima `tugas` dan `callback` sebagai argumen.

- `console.log(`Menyelesaikan Tugas : ${tugas}`);`

  - Menampilkan pesan di konsol tentang tugas yang sedang dikerjakan.

- `callback();`

  - Menjalankan fungsi callback setelah tugas selesai.

- `function tugasSelesai() { ... }`

  - Mendefinisikan fungsi callback yang menampilkan pesan bahwa tugas telah selesai.

- `selesaikanTugas("Informatika", tugasSelesai);`

  - Memanggil fungsi `selesaikanTugas` dengan nama tugas dan fungsi callback.

- `function getUserData(callback) { ... }`

  - Mendefinisikan fungsi untuk mengambil data pengguna secara asynchronous.

- `console.log("Fetching user data . . .");`

  - Menampilkan pesan di konsol bahwa proses pengambilan data dimulai.

- `setTimeout(() => { ... }, 2000);`

  - Mengatur jeda 2 detik sebelum menjalankan fungsi di dalamnya.

- `const userData = { ... };`

  - Membuat objek yang berisi data pengguna.

- `callback(null, userData);`

  - Menjalankan fungsi callback dengan `null` sebagai error dan `userData` sebagai data.

- `function displayUserData(error, userData) { ... }`

  - Mendefinisikan fungsi callback untuk menampilkan data pengguna atau error.

- `if (error) { ... }`

  - Mengecek apakah ada error saat mengambil data.

- `console.log("User Data: ", userData);`

  - Menampilkan data pengguna di konsol.

- `getUserData(displayUserData);`
  - Memanggil fungsi `getUserData` dengan `displayUserData` sebagai callback untuk menangani hasilnya.

## Kapan Kode Ini Dipakai

Callback asynchronous digunakan dalam berbagai situasi, termasuk:

- Mengambil data dari API.
- Menangani event seperti klik atau pengisian form.
- Melakukan operasi yang memerlukan waktu, seperti pengolahan file.

## Penggunaan di Proyek Nyata

- **Pengambilan Data**: Ketika aplikasi web mengambil data pengguna dari server, callback digunakan untuk memastikan data ditampilkan setelah selesai diambil.
- **Operasi IO**: Menggunakan callback untuk menangani hasil operasi file atau database yang memakan waktu.

## Analogi Sederhana

Bayangkan Anda memesan makanan di restoran. Anda memberi tahu pelayan (fungsi) bahwa Anda ingin pizza (tugas), dan pelayan akan kembali kepada Anda (callback) ketika pizza sudah siap. Selama waktu menunggu, Anda dapat melakukan hal lain.

## Kesimpulan

Callback asynchronous adalah konsep kunci dalam JavaScript yang memungkinkan penanganan operasi yang memerlukan waktu tanpa menghalangi eksekusi kode lainnya. Dengan memahami cara kerja callback, Anda dapat membuat aplikasi yang lebih responsif dan efisien.
