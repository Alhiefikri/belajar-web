# README: Memahami Promise di JavaScript

## Pengertian

**Promise** adalah objek yang mewakili penyelesaian (atau kegagalan) dari operasi asynchronous dan nilai yang dihasilkannya. Promise memiliki tiga status:

1. **Pending**: Status awal, saat operasi belum selesai.
2. **Fulfilled**: Operasi selesai dengan sukses, dan nilai hasil tersedia.
3. **Rejected**: Operasi selesai tetapi gagal, dan alasan kegagalan tersedia.

## Penjelasan Cara Kerja Kode

### Contoh Kode

```javascript
function checkStock(product) {
  return new Promise((resolve, reject) => {
    console.log(`Checking stock for ${product}`);

    // simulasi mengecek stok (butuh 2 detik)
    setTimeout(() => {
      const stockAvailable = false; // Simulasi kondisi stok

      if (stockAvailable) {
        resolve(`${product} is available in stock`);
      } else {
        reject(`${product} is out of stock`);
      }
    }, 2000); // Menambahkan delay 2 detik
  });
}

// Menggunakan Promise
checkStock("laptop")
  .then((message) => {
    console.log(message); // Menampilkan pesan jika sukses
  })
  .catch((error) => {
    console.error(error); // Menampilkan error jika ada
  });
```

### Komentar Penjelasan Tiap Baris

- `function checkStock(product) { ... }`

  - Mendefinisikan fungsi `checkStock` yang menerima argumen `product`.

- `return new Promise((resolve, reject) => { ... })`

  - Mengembalikan objek Promise yang menerima dua argumen: `resolve` dan `reject`.

- `console.log(`Checking stock for ${product}`);`

  - Menampilkan pesan di konsol yang menunjukkan bahwa stok untuk produk sedang diperiksa.

- `setTimeout(() => { ... }, 2000);`

  - Simulasi pengecekan stok yang akan dieksekusi setelah 2 detik.

- `const stockAvailable = false;`

  - Simulasi kondisi stok; dalam contoh ini, stok tidak tersedia.

- `if (stockAvailable) { ... }`

  - Mengecek apakah stok tersedia.

- `resolve(`${product} is available in stock`);`

  - Menjalankan `resolve` dengan pesan jika stok tersedia.

- `reject(`${product} is out of stock`);`

  - Menjalankan `reject` dengan pesan jika stok tidak tersedia.

- `checkStock("laptop")`

  - Memanggil fungsi `checkStock` dengan argumen "laptop".

- `.then((message) => { ... })`

  - Menangani hasil yang berhasil dengan menampilkan pesan jika operasi berhasil.

- `.catch((error) => { ... })`
  - Menangani error dengan menampilkan pesan jika operasi gagal.

## Kapan Kode Ini Dipakai

Promise digunakan dalam situasi di mana Anda ingin menangani operasi asynchronous, seperti:

- Mengambil data dari API.
- Melakukan operasi file.
- Menangani interaksi pengguna yang memerlukan waktu.

## Penggunaan di Proyek Nyata

- **Pengambilan Data**: Ketika aplikasi perlu mengambil data dari server, Promise memungkinkan Anda untuk menangani hasilnya dengan cara yang bersih dan terstruktur.
- **Operasi Jaringan**: Menggunakan Promise untuk menangani hasil dari panggilan API, memberikan kemampuan untuk mengelola kesalahan dengan lebih baik.

## Analogi Sederhana

Bayangkan Anda memesan makanan di restoran. Saat Anda memesan (pending), Anda menunggu (waiting) sampai makanan Anda siap (fulfilled) atau jika restoran kehabisan bahan (rejected). Anda hanya perlu menunggu dan tidak perlu melakukan hal lain sampai restoran memberi tahu hasilnya.

## Kesimpulan

Promise adalah alat yang sangat penting dalam JavaScript untuk menangani operasi asynchronous dengan cara yang lebih terstruktur dan mudah dibaca. Memahami cara kerja Promise membantu Anda mengelola kode asynchronous dengan lebih efektif, memungkinkan aplikasi yang lebih responsif dan efisien.
