# README: Memahami Async/Await di JavaScript

## Pengertian

**Async/Await** adalah sintaks yang memungkinkan penanganan operasi asynchronous dengan cara yang lebih sederhana dan mirip dengan kode synchronous. Dengan menggunakan `async` sebelum fungsi dan `await` sebelum panggilan Promise, Anda dapat menulis kode asynchronous yang lebih mudah dibaca dan dipahami.

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

async function main() {
  try {
    const data = await checkStock("Laptop"); // Menunggu hasil dari checkStock
    console.log(data); // Menampilkan pesan jika sukses
  } catch (error) {
    console.log(error); // Menampilkan error jika ada
  }
}

main();
```

### Komentar Penjelasan Tiap Baris

- `function checkStock(product) { ... }`

  - Mendefinisikan fungsi `checkStock` yang mengembalikan Promise untuk memeriksa stok produk.

- `return new Promise((resolve, reject) => { ... })`

  - Mengembalikan objek Promise yang akan diselesaikan atau ditolak.

- `console.log(`Checking stock for ${product}`);`

  - Menampilkan pesan di konsol bahwa stok produk sedang diperiksa.

- `setTimeout(() => { ... }, 2000);`

  - Simulasi pengecekan stok yang dijadwalkan setelah 2 detik.

- `const stockAvailable = false;`

  - Simulasi kondisi stok; dalam contoh ini, stok tidak tersedia.

- `if (stockAvailable) { ... }`

  - Mengecek apakah stok tersedia.

- `resolve(`${product} is available in stock`);`

  - Menjalankan `resolve` jika stok tersedia.

- `reject(`${product} is out of stock`);`

  - Menjalankan `reject` jika stok tidak tersedia.

- `async function main() { ... }`

  - Mendefinisikan fungsi asynchronous `main`.

- `try { ... }`

  - Mencoba untuk menjalankan blok kode di dalamnya, yang dapat menghasilkan error.

- `const data = await checkStock("Laptop");`

  - Menggunakan `await` untuk menunggu hasil dari `checkStock`, yang akan mengembalikan nilai setelah Promise diselesaikan.

- `console.log(data);`

  - Menampilkan hasil jika operasi berhasil.

- `catch (error) { ... }`

  - Menangani error jika terjadi saat menunggu hasil.

- `main();`
  - Memanggil fungsi `main` untuk menjalankan kode.

## Kapan Kode Ini Dipakai

Async/await digunakan dalam situasi di mana Anda ingin menangani operasi asynchronous dengan cara yang lebih bersih dan terstruktur, seperti:

- Mengambil data dari API.
- Melakukan operasi file.
- Menangani interaksi pengguna yang memerlukan waktu.

## Penggunaan di Proyek Nyata

- **Pengambilan Data**: Ketika aplikasi perlu mengambil data dari server, async/await membuat kode lebih bersih dan mudah dibaca.
- **Operasi Jaringan**: Menggunakan async/await untuk menangani hasil dari panggilan API, mengurangi kompleksitas penanganan Promise.

## Analogi Sederhana

Bayangkan Anda memesan makanan di restoran dan duduk sambil menunggu. Ketika makanan siap, pelayan akan membawakan makanan tersebut kepada Anda (menunggu hasil). Dengan async/await, Anda tidak perlu memikirkan banyak hal; Anda hanya fokus pada makanan yang Anda pesan.

## Kesimpulan

Async/await adalah cara yang efektif untuk menangani operasi asynchronous di JavaScript dengan sintaks yang lebih bersih dan mudah dimengerti. Dengan memahami cara kerja async/await, Anda dapat menulis kode yang lebih terstruktur dan mengelola proses asynchronous dengan lebih baik.
