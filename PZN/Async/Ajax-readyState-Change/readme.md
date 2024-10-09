# README: AJAX dengan `readyState` dalam JavaScript

## Pengertian Materi

`readyState` adalah properti dari objek `XMLHttpRequest` yang menunjukkan status permintaan. Dengan memantau perubahan `readyState`, kita dapat mengetahui tahap mana permintaan saat ini berada dan mengambil tindakan yang sesuai.

## Penjelasan Code

Berikut adalah contoh kode yang menggunakan AJAX dan memantau `readyState`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <!-- Mengatur karakter encoding menjadi UTF-8 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Mengatur viewport untuk responsivitas -->
    <title>Ajax with readyState</title>
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
      ajax.onreadystatechange = function () {
        // Menambahkan event listener untuk perubahan readyState
        console.info(`Ready State Change ${ajax.readyState}`); // Mencetak status readyState ke konsol
      };
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
- **Memantau `readyState`**:
  - `ajax.onreadystatechange = function () { ... };` menambahkan listener untuk menangani perubahan `readyState`.
  - `console.info(`Ready State Change ${ajax.readyState}`);` mencetak nilai `readyState` ke konsol setiap kali berubah.
- **Membuka Koneksi**: `ajax.open("GET", "api/salah.json");` mengatur metode permintaan (GET) dan URL (api/salah.json) untuk mengambil data.
- **Menangani Respons**:
  - `ajax.addEventListener("load", function () { ... });` menambahkan listener untuk menangani event ketika permintaan selesai.
  - Memeriksa status respons dan menampilkan data atau pesan kesalahan sesuai dengan hasilnya.
- **Mengirim Permintaan**: `ajax.send();` mengirim permintaan ke server.

## Kapan Code Dipakai

Kode ini digunakan ketika kita ingin memantau status permintaan dan mengambil tindakan berdasarkan status tersebut, seperti memberikan umpan balik kepada pengguna.

## Penjelasan Biasanya di Real Projek Dipakai untuk Apa

Pemantauan `readyState` sering digunakan dalam aplikasi web untuk:

- Menampilkan indikator pemuatan (loading) saat menunggu respons dari server.
- Mengambil tindakan tertentu pada setiap perubahan status, misalnya, memperbarui UI.

## Analogi Sederhana Mengenai Materi Itu

Bayangkan Anda memesan makanan di restoran. Saat Anda menunggu, pelayan memberi tahu Anda bahwa makanan Anda sedang diproses (readyState). Dengan mengetahui status ini, Anda dapat mempersiapkan diri untuk menyambut makanan ketika tiba. Dengan cara yang sama, `readyState` memberi tahu kita status permintaan data.

## Kesimpulan

Menggunakan `readyState` dalam AJAX memungkinkan kita untuk memantau dan menangani status permintaan dengan lebih baik. Ini meningkatkan interaksi pengguna dengan memberikan informasi yang tepat tentang proses yang sedang berlangsung.
