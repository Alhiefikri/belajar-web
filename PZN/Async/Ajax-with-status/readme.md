# README: AJAX dengan Status dalam JavaScript

## Pengertian Materi

AJAX dengan status memungkinkan kita untuk menangani respons dari server dengan memeriksa kode status HTTP. Ini memberi kita kemampuan untuk mengetahui apakah permintaan berhasil atau terjadi kesalahan, serta untuk menampilkan pesan yang sesuai.

## Penjelasan Code

Berikut adalah contoh kode yang menggunakan AJAX untuk mengambil data dan menangani status respons:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <!-- Mengatur karakter encoding menjadi UTF-8 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Mengatur viewport untuk responsivitas -->
    <title>Ajax with status</title>
    <!-- Judul halaman -->
  </head>
  <body>
    <h1 id="response"></h1>
    <!-- Elemen untuk menampilkan respons dari server -->
    <script>
      function displayResponse(json) {
        const header = document.getElementById("response"); // Mengambil elemen dengan id 'response'
        header.textContent = json.response; // Menampilkan data yang diambil dalam elemen 'response'
      }

      const ajax = new XMLHttpRequest(); // Membuat objek XMLHttpRequest untuk melakukan permintaan
      ajax.open("GET", "api/salah.json"); // Mengatur metode GET dan URL sumber data
      ajax.addEventListener("load", function () {
        // Menambahkan event listener untuk menangani respons
        if (ajax.status === 200) {
          // Memeriksa apakah status respons adalah 200 (OK)
          const json = JSON.parse(ajax.responseText); // Mengonversi respons JSON menjadi objek JavaScript
          displayResponse(json); // Menampilkan data yang diambil
        } else {
          displayResponse({
            response: `Terjadi Kesalahan dengan status ${ajax.status}`, // Menampilkan pesan kesalahan
          });
        }
      });
      ajax.send(); // Mengirim permintaan ke server
    </script>
  </body>
</html>
```

### Penjelasan Kode

- **Fungsi `displayResponse`**: Mengambil elemen dengan id `response` dan menampilkan data yang diambil dari server.
- **Membuat Objek AJAX**: `const ajax = new XMLHttpRequest();` menciptakan objek untuk melakukan permintaan HTTP.
- **Membuka Koneksi**: `ajax.open("GET", "api/salah.json");` mengatur metode permintaan (GET) dan URL (api/salah.json) untuk mengambil data.
- **Menangani Respons**:
  - `ajax.addEventListener("load", function () { ... });` menambahkan listener untuk menangani event ketika permintaan selesai.
  - `if (ajax.status === 200) { ... }` memeriksa apakah status respons adalah 200 (OK).
  - Jika sukses, respons JSON diubah menjadi objek dan ditampilkan; jika gagal, pesan kesalahan ditampilkan.
- **Mengirim Permintaan**: `ajax.send();` mengirim permintaan ke server.

## Kapan Code Dipakai

Kode ini digunakan ketika kita ingin mengambil data dari server dan ingin memeriksa status respons untuk menangani kesalahan dengan tepat.

## Penjelasan Biasanya di Real Projek Dipakai untuk Apa

AJAX dengan status sering digunakan dalam aplikasi web untuk:

- Menangani kesalahan dengan lebih baik, misalnya ketika data tidak ditemukan (404) atau kesalahan server (500).
- Memberikan umpan balik yang jelas kepada pengguna tentang status permintaan mereka.

## Analogi Sederhana Mengenai Materi Itu

Bayangkan Anda menghubungi layanan pelanggan dan menunggu balasan. Jika mereka menjawab dengan informasi yang Anda butuhkan, Anda senang. Namun, jika mereka memberi tahu Anda bahwa ada masalah, Anda ingin tahu apa yang salah. AJAX dengan status memungkinkan kita untuk melakukan hal ini dengan permintaan data dari server.

## Kesimpulan

Menggunakan AJAX dengan status memungkinkan kita untuk menangani respons dengan lebih baik dalam aplikasi web. Dengan memeriksa kode status HTTP, kita dapat memberikan informasi yang tepat kepada pengguna tentang keberhasilan atau kegagalan permintaan mereka.
