# README: AJAX Send JSON dalam JavaScript

## Pengertian Materi

AJAX (Asynchronous JavaScript and XML) memungkinkan pengiriman dan penerimaan data dari server secara asynchronous tanpa memuat ulang halaman. Dalam konteks ini, kita akan fokus pada pengiriman data dalam format JSON menggunakan metode POST.

## Penjelasan Code

```javascript
function doLogin() {
  const ajax = new XMLHttpRequest(); // Membuat objek XMLHttpRequest untuk melakukan permintaan
  ajax.open("POST", "https://eozvauwhn3zfdc4.m.pipedream.net"); // Mengatur metode POST dan URL endpoint

  ajax.onload = function () {
    // Menentukan fungsi yang akan dijalankan saat permintaan selesai
    const response = document.getElementById("response"); // Mengambil elemen dengan id 'response'
    response.innerText = ajax.responseText; // Menampilkan respons dari server dalam elemen 'response'
  };

  ajax.setRequestHeader("Content-Type", "application/json"); // Mengatur header untuk mengirim data dalam format JSON

  const json = {
    // Membuat objek JSON yang akan dikirim
    username: document.getElementById("username").value, // Mengambil nilai username dari input
    password: document.getElementById("password").value, // Mengambil nilai password dari input
  };

  ajax.send(JSON.stringify(json)); // Mengirim permintaan dengan data JSON yang telah dikonversi menjadi string
}

document.getElementById("login").onclick = doLogin; // Menetapkan fungsi doLogin pada event click tombol login
```

### Penjelasan Kode

- **Membuat Objek AJAX**: `const ajax = new XMLHttpRequest();` menciptakan objek untuk melakukan permintaan HTTP.
- **Membuka Koneksi**: `ajax.open("POST", "https://eozvauwhn3zfdc4.m.pipedream.net");` mengatur metode POST dan URL yang dituju.
- **Menangani Respons**:
  - `ajax.onload = function () { ... };` mendefinisikan apa yang terjadi setelah permintaan selesai.
  - Mengambil elemen untuk menampilkan respons dari server.
- **Mengatur Header**: `ajax.setRequestHeader("Content-Type", "application/json");` memberitahu server bahwa data yang dikirim dalam format JSON.
- **Membuat JSON**: Objek JSON yang berisi username dan password diambil dari input pengguna.
- **Mengirim Data**: `ajax.send(JSON.stringify(json));` mengirimkan data yang telah dikonversi menjadi string JSON ke server.
- **Event Listener**: `document.getElementById("login").onclick = doLogin;` menetapkan fungsi `doLogin` untuk dijalankan saat tombol login diklik.

## Kapan Code Dipakai

Kode ini biasanya digunakan dalam aplikasi web yang memerlukan otentikasi pengguna, seperti sistem login, untuk mengirim data secara aman ke server.

## Penjelasan Biasanya di Real Projek Dipakai untuk Apa

Pengiriman data JSON menggunakan AJAX sering digunakan dalam:

- Sistem login dan registrasi.
- Mengambil dan mengirim data dalam aplikasi web interaktif.
- Berkomunikasi dengan API untuk melakukan operasi CRUD (Create, Read, Update, Delete).

## Analogi Sederhana Mengenai Materi Itu

Bayangkan Anda mengirim surat ke teman. Anda menuliskan pesan (data), memasukkannya ke dalam amplop (JSON), dan mengirimnya ke alamat (server). Teman Anda kemudian membuka surat dan membaca pesan tersebut (respons).

## Kesimpulan

Menggunakan AJAX untuk mengirim data dalam format JSON memungkinkan interaksi yang lebih dinamis dan responsif antara klien dan server, meningkatkan pengalaman pengguna secara keseluruhan.
