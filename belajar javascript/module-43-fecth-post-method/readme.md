# README: Menggunakan Fetch Data dengan Promise dan POST Method di JavaScript

## Pengertian

`fetch` adalah API modern di JavaScript untuk melakukan permintaan jaringan. Ini mendukung penggunaan Promise, sehingga memungkinkan penanganan respons dan error dengan cara yang lebih bersih dan lebih mudah. Selain metode GET, `fetch` juga mendukung metode lain seperti POST, PUT, dan DELETE.

## Penjelasan Cara Kerja Kode

### Contoh Kode: Mengambil Data (GET)

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

### Komentar Penjelasan Tiap Baris (GET)

- `fetch("https://jsonplaceholder.typicode.com/posts/1")`

  - Mengirimkan permintaan GET ke URL yang diberikan untuk mengambil data dari server.

- `.then((res) => { ... })`

  - Menangani respons dari permintaan. Parameter `res` adalah objek Response yang dikembalikan oleh server.

- `if (!res.ok) { ... }`

  - Memeriksa apakah respons dari server berhasil. Jika tidak, melempar error.

- `throw new Error("Network response not ok");`

  - Menghasilkan error jika respons tidak OK.

- `return res.json();`

  - Mengonversi respons menjadi format JSON.

- `.then((data) => { ... })`

  - Menangani data yang diterima setelah respons dikonversi menjadi JSON.

- `console.log(data);`

  - Menampilkan data di konsol.

- `.catch((error) => { ... })`
  - Menangani error yang mungkin terjadi selama permintaan atau saat mengonversi respons.

### Contoh Kode: Mengirim Data (POST)

```javascript
const postData = {
  title: "Post Baru",
  body: "Ini adalah body dari post baru",
  userId: 1,
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST", // Mengatur metode ke POST
  headers: {
    "Content-type": "application/json", // Menentukan jenis konten
  },
  body: JSON.stringify(postData), // Mengonversi objek menjadi JSON
})
  .then((response) => response.json()) // Mengubah respons menjadi JSON
  .then((data) => console.log("Data posted: ", data)) // Menampilkan data yang diposting
  .catch((error) => {
    console.log("Error posting data: ", error); // Menangani error
  });
```

### Komentar Penjelasan Tiap Baris (POST)

- `const postData = { ... };`

  - Mendefinisikan objek yang berisi data yang akan dikirim ke server.

- `fetch("https://jsonplaceholder.typicode.com/posts", { ... })`

  - Mengirimkan permintaan POST ke URL yang diberikan untuk mengirim data.

- `method: "POST"`

  - Mengatur metode permintaan menjadi POST.

- `headers: { "Content-type": "application/json" }`

  - Menentukan header untuk menunjukkan bahwa konten yang dikirim adalah JSON.

- `body: JSON.stringify(postData)`

  - Mengonversi objek `postData` menjadi string JSON agar dapat dikirim ke server.

- `.then((response) => response.json())`

  - Mengubah respons dari server menjadi format JSON.

- `.then((data) => { ... })`

  - Menangani data yang diterima setelah respons dikonversi menjadi JSON.

- `console.log("Data posted: ", data);`

  - Menampilkan data yang diposting di konsol.

- `.catch((error) => { ... })`
  - Menangani error yang mungkin terjadi selama permintaan.

## Kapan Kode Ini Dipakai

Kode ini digunakan saat Anda perlu:

- Mengambil data dari API menggunakan metode GET.
- Mengirim data ke server menggunakan metode POST.

## Penggunaan di Proyek Nyata

- **Mengambil Data dari API**: Kode ini dapat digunakan dalam aplikasi web untuk mengambil data dari server dan menampilkannya kepada pengguna.
- **Mengirim Data ke API**: Berguna saat aplikasi perlu mengirim data baru ke server, seperti mengirim postingan baru atau menyimpan informasi pengguna.

## Analogi Sederhana

Bayangkan Anda mengirimkan permintaan ke restoran untuk memesan makanan (GET). Setelah makanan siap, Anda menerimanya. Sekarang, bayangkan Anda juga bisa mengirimkan resep makanan baru ke restoran (POST) untuk mereka coba. Dalam kedua kasus, Anda berkomunikasi dengan pihak yang sama, tetapi dengan tujuan yang berbeda.

## Kesimpulan

Menggunakan `fetch` untuk melakukan permintaan GET dan POST adalah cara yang efisien dan modern untuk berinteraksi dengan API. Dengan dukungan promise, Anda dapat menangani respons dan error dengan cara yang terstruktur, memungkinkan Anda untuk membangun aplikasi web yang responsif dan interaktif.
