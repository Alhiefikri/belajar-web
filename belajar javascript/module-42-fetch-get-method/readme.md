# README: Menggunakan GET Method API dengan Fetch di JavaScript

## Pengertian

`fetch` adalah API JavaScript yang digunakan untuk melakukan permintaan jaringan (network request). Ini mendukung promise dan memudahkan untuk mengambil data dari server dengan cara yang lebih sederhana daripada metode sebelumnya seperti `XMLHttpRequest`. Dengan `fetch`, Anda dapat melakukan berbagai jenis permintaan HTTP, termasuk GET, POST, PUT, dan DELETE.

## Penjelasan Cara Kerja Kode

### Contoh Kode

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Network response not ok");
    }
    return res.json(); // Mengubah response menjadi JSON
  })
  .then((data) => {
    console.log(data); // Menampilkan data yang diterima
  })
  .catch((error) => {
    console.error(`error : ${error}`); // Menangani error
  });
```

### Komentar Penjelasan Tiap Baris

- `fetch("https://jsonplaceholder.typicode.com/posts/1")`

  - Mengirimkan permintaan GET ke URL yang diberikan untuk mengambil data dari server.

- `.then((res) => { ... })`

  - Menangani respons dari permintaan. Parameter `res` adalah objek Response yang dikembalikan oleh server.

- `if (!res.ok) { ... }`

  - Memeriksa apakah respons dari server berhasil. Jika tidak, melempar error.

- `throw new Error("Network response not ok");`

  - Menghasilkan error jika respons tidak OK (misalnya, status 404 atau 500).

- `return res.json();`

  - Mengonversi respons menjadi format JSON. Ini juga mengembalikan promise, yang akan diselesaikan dengan data JSON.

- `.then((data) => { ... })`

  - Menangani data yang diterima setelah respons dikonversi menjadi JSON.

- `console.log(data);`

  - Menampilkan data di konsol.

- `.catch((error) => { ... })`

  - Menangani error yang mungkin terjadi selama permintaan atau saat mengonversi respons.

- `console.error(`error : ${error}`);`
  - Menampilkan pesan error di konsol jika terjadi kesalahan.

## Kapan Kode Ini Dipakai

Kode ini digunakan saat Anda perlu mengambil data dari API menggunakan metode GET. Contohnya:

- Mengambil daftar produk dari server.
- Mengambil informasi pengguna.
- Mengambil postingan di blog atau artikel.

## Penggunaan di Proyek Nyata

- **Mengambil Data dari API**: Kode ini dapat digunakan dalam aplikasi web untuk mengambil data dari server dan menampilkannya kepada pengguna.
- **Integrasi dengan Backend**: Sangat berguna saat berinteraksi dengan backend untuk mengambil data yang diperlukan untuk tampilan atau analisis.

## Analogi Sederhana

Bayangkan Anda mengirimkan surat ke perpustakaan untuk meminta buku tertentu. Anda menunggu hingga pustakawan menjawab dan mengirimkan buku tersebut (mengambil data dari API). Jika ada masalah dengan surat Anda (seperti alamat yang salah), pustakawan akan memberi tahu Anda bahwa ada kesalahan.

## Kesimpulan

Menggunakan `fetch` untuk melakukan permintaan GET adalah cara yang efisien dan modern untuk mengambil data dari server. Dengan sintaks yang bersih dan dukungan promise, Anda dapat menangani respons dan error dengan cara yang lebih terstruktur. Memahami cara menggunakan `fetch` adalah keterampilan penting dalam pengembangan web saat ini.
