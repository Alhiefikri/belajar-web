Tentu! Berikut adalah contoh README yang terperinci mengenai penggunaan `fetch` untuk melakukan GET dan POST menggunakan async/await.

---

# README: Menggunakan Fetch untuk GET dan POST dengan Async/Await

## Deskripsi

Dokumen ini menjelaskan cara menggunakan `fetch` untuk melakukan permintaan GET dan POST ke API menggunakan JavaScript dengan pendekatan async/await. Contoh yang digunakan adalah API JSONPlaceholder, yang menyediakan endpoint untuk melakukan simulasi permintaan HTTP.

## Daftar Isi

1. [Pengertian](#pengertian)
2. [Cara Kerja Kode](#cara-kerja-kode)
3. [Kapan Kode Ini Dipakai](#kapan-kode-ini-dipakai)
4. [Analogi Sederhana](#analogi-sederhana)
5. [Kesimpulan](#kesimpulan)

## Pengertian

- **GET**: Metode HTTP yang digunakan untuk mengambil data dari server.
- **POST**: Metode HTTP yang digunakan untuk mengirim data ke server.
- **Async/Await**: Cara untuk menangani operasi asynchronous di JavaScript yang membuat kode lebih mudah dibaca dan ditulis.

## Cara Kerja Kode

### GET Menggunakan Async/Await

```javascript
async function getPost() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!res.ok) {
      throw new Error("Network response not ok");
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

getPost(); // Memanggil fungsi
```

- **Penjelasan**:
  - `async function getPost()`: Mendeklarasikan fungsi asynchronous untuk mengambil data.
  - `await fetch(...)`: Menunggu hasil dari permintaan fetch.
  - `if (!res.ok)`: Memeriksa apakah respons berhasil.
  - `const data = await res.json()`: Mengonversi respons menjadi JSON.

### POST Menggunakan Async/Await

```javascript
async function post() {
  try {
    const postData = {
      title: "Post Baru",
      body: "Ini adalah body dari post baru",
      userId: 1,
    };

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (!res.ok) {
      throw new Error("Network response not ok");
    }

    const data = await res.json();
    console.log("Data posted: ", data);
  } catch (error) {
    console.log("Error posting data: ", error);
  }
}

post(); // Memanggil fungsi
```

- **Penjelasan**:
  - Mempersiapkan objek `postData` yang berisi data yang akan dikirim.
  - Menggunakan `fetch` dengan metode POST untuk mengirim data.
  - Memeriksa respons dan mengonversi respons menjadi JSON jika berhasil.

## Kapan Kode Ini Dipakai

- Kode ini digunakan saat Anda ingin mengambil atau mengirim data ke API dalam aplikasi web.
- Cocok untuk aplikasi yang memerlukan interaksi dengan backend, seperti aplikasi CRUD (Create, Read, Update, Delete).

## Analogi Sederhana

Bayangkan Anda mengirim surat (POST) kepada teman (server) yang meminta informasi (GET). Anda perlu memastikan alamat (URL) dan isi surat (body) sudah benar agar teman Anda dapat membacanya dengan baik. Jika alamat salah, surat tidak akan sampai (res.ok tidak true).

## Kesimpulan

Kode di atas menunjukkan bagaimana cara melakukan permintaan GET dan POST menggunakan `fetch` dengan async/await di JavaScript. Pendekatan ini membuat kode lebih terstruktur dan mudah dibaca. Dengan menggunakan teknik ini, Anda dapat mengelola data dengan lebih efisien dalam aplikasi web Anda.
