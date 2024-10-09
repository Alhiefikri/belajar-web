# README: Pengambilan Data Menggunakan AJAX dalam JavaScript

## Pengertian Materi

Pengambilan data menggunakan AJAX memungkinkan kita untuk mendapatkan data dari server secara asinkron dan menampilkannya di halaman web tanpa perlu memuat ulang. Ini meningkatkan pengalaman pengguna dengan memberikan respons yang lebih cepat.

## Penjelasan Code

Berikut adalah contoh kode yang menggunakan AJAX untuk mengambil data dan menampilkannya di halaman:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <!-- Mengatur karakter encoding menjadi UTF-8 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Mengatur viewport untuk responsivitas -->
    <title>Get Data Ajax</title>
    <!-- Judul halaman -->
  </head>
  <body>
    <h1 id="response"></h1>
    <!-- Elemen untuk menampilkan respons dari server -->
    <script>
      const ajax = new XMLHttpRequest(); // Membuat objek XMLHttpRequest untuk melakukan permintaan
      ajax.open("GET", "api/hello.json"); // Mengatur metode GET dan URL sumber data
      ajax.addEventListener("load", function () {
        // Menambahkan event listener untuk menangani respons
        const json = JSON.parse(ajax.responseText); // Mengonversi respons JSON menjadi objek JavaScript

        const header = document.getElementById("response"); // Mengambil elemen dengan id 'response'
        header.textContent = json.response; // Menampilkan data yang diambil dalam elemen 'response'
      });
      ajax.send(); // Mengirim permintaan ke server
    </script>
  </body>
</html>
```

### Penjelasan Kode

- **Membuat Objek AJAX**: `const ajax = new XMLHttpRequest();` menciptakan objek untuk melakukan permintaan HTTP.
- **Membuka Koneksi**: `ajax.open("GET", "api/hello.json");` mengatur metode permintaan (GET) dan URL (api/hello.json) untuk mengambil data.
- **Menangani Respons**:
  - `ajax.addEventListener("load", function () { ... });` menambahkan listener untuk menangani event ketika permintaan selesai.
  - `const json = JSON.parse(ajax.responseText);` mengonversi teks respons JSON menjadi objek JavaScript.
  - `header.textContent = json.response;` menampilkan data yang diambil di elemen dengan id `response`.
- **Mengirim Permintaan**: `ajax.send();` mengirim permintaan ke server.

## Kapan Code Dipakai

Kode ini digunakan ketika kita ingin mengambil data dari server dan menampilkannya di halaman web tanpa perlu memuat ulang, seperti menampilkan pesan atau informasi dinamis.

## Penjelasan Biasanya di Real Projek Dipakai untuk Apa

Pengambilan data menggunakan AJAX sering digunakan dalam aplikasi web untuk:

- Memuat informasi pengguna atau konten baru berdasarkan permintaan.
- Mengambil data dari API untuk ditampilkan dalam aplikasi (misalnya, cuaca, berita, dsb.).
- Mengupdate tampilan berdasarkan data yang diterima dari server secara real-time.

## Analogi Sederhana Mengenai Materi Itu

Bayangkan Anda mengirim pesan teks untuk meminta informasi, dan setelah beberapa saat, Anda menerima balasan. Anda tidak perlu menghentikan aktivitas Anda; Anda hanya menunggu informasi tersebut dan menggunakannya ketika diterima. AJAX berfungsi dengan cara yang sama, memungkinkan kita untuk mengirim permintaan dan menerima respons tanpa gangguan.

## Kesimpulan

Penggunaan AJAX untuk mengambil data secara asinkron adalah cara yang efektif untuk meningkatkan interaksi pengguna dalam aplikasi web. Dengan menggunakan teknik ini, kita dapat memperbarui konten halaman secara dinamis dan memberikan pengalaman yang lebih responsif.
