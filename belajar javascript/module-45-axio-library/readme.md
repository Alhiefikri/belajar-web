# README: Menggunakan Axios untuk Mengambil Data

## Deskripsi

Dokumen ini menjelaskan cara menggunakan Axios, sebuah library HTTP berbasis promise, untuk melakukan permintaan GET di JavaScript. Contoh yang digunakan adalah API JSONPlaceholder, yang menyediakan endpoint untuk melakukan simulasi permintaan HTTP.

## Daftar Isi

1. [Pengertian](#pengertian)
2. [Cara Kerja Kode](#cara-kerja-kode)
3. [Kapan Kode Ini Dipakai](#kapan-kode-ini-dipakai)
4. [Analogi Sederhana](#analogi-sederhana)
5. [Kesimpulan](#kesimpulan)

## Pengertian

- **Axios**: Library HTTP berbasis promise untuk melakukan permintaan HTTP yang lebih mudah dibandingkan dengan menggunakan `fetch`. Axios secara otomatis mengonversi respons menjadi JSON.
- **GET**: Metode HTTP yang digunakan untuk mengambil data dari server.

## Cara Kerja Kode

### GET Menggunakan Axios dengan Promise

```javascript
axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => {
    console.log(res.data); // Menampilkan data yang diterima
  })
  .catch((error) => {
    console.error(`error : ${error}`); // Menangani error
  });
```

- **Penjelasan**:
  - `axios.get(...)`: Melakukan permintaan GET ke URL yang diberikan.
  - `then((res) => {...})`: Menangani respons yang diterima dari server.
  - `catch((error) => {...})`: Menangani error jika terjadi saat melakukan permintaan.

### GET Menggunakan Axios dengan Async/Await

```javascript
async function getPost() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log(res.data); // Menampilkan data yang diterima
  } catch (error) {
    console.error(`Error: ${error}`); // Menangani error
  }
}

getPost(); // Memanggil fungsi
```

- **Penjelasan**:
  - `async function getPost()`: Mendeklarasikan fungsi asynchronous untuk mengambil data.
  - `const res = await axios.get(...)`: Menunggu hasil dari permintaan GET.
  - `console.log(res.data)`: Menampilkan data yang diterima.

## Kapan Kode Ini Dipakai

- Kode ini digunakan saat Anda ingin mengambil data dari API dalam aplikasi web.
- Cocok untuk aplikasi yang memerlukan interaksi dengan backend dan ingin memanfaatkan kemudahan yang ditawarkan oleh Axios, seperti pengelolaan error yang lebih baik dan otomatisasi konversi respons menjadi JSON.

## Analogi Sederhana

Bayangkan Anda meminta buku (GET) dari perpustakaan (server). Dengan menggunakan Axios, proses permintaan dan penerimaan buku menjadi lebih cepat dan lebih mudah, karena Axios secara otomatis mengurus semua rincian yang diperlukan.

## Kesimpulan

Kode di atas menunjukkan bagaimana cara melakukan permintaan GET menggunakan Axios. Pendekatan ini membuat kode lebih sederhana dan lebih bersih dibandingkan menggunakan `fetch`, serta memberikan kemudahan dalam menangani respons dan error. Menggunakan Axios adalah pilihan yang baik untuk proyek yang memerlukan interaksi dengan API.
