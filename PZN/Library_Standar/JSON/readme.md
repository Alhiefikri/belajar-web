# README: Object JSON

## Pengertian

`JSON` (JavaScript Object Notation) adalah format pertukaran data yang mudah dibaca dan ditulis oleh manusia serta mudah diuraikan dan dihasilkan oleh mesin. Dalam JavaScript, objek dapat diubah menjadi format JSON menggunakan `JSON.stringify`, dan sebaliknya, format JSON dapat diubah kembali menjadi objek JavaScript menggunakan `JSON.parse`.

## Penjelasan mengenai Code

Berikut adalah penjelasan mengenai code yang disertakan:

```javascript
const person = {
  firstName: "Alhie", // Properti firstName
  lastName: "Fikri", // Properti lastName
  address: {
    // Objek nested dengan informasi alamat
    country: "Indonesia",
    city: "Banggai",
  },
  hobbies: ["Coding", "Game", "Traveling"], // Array hobi
};

// Mengubah objek person menjadi string JSON
const json = JSON.stringify(person);
console.info(json); // Menampilkan string JSON dari objek person

// Mengubah array yang berisi objek person menjadi string JSON
const jsonArray = JSON.stringify([person]);
console.info(jsonArray); // Menampilkan string JSON dari array objek

// Mengubah string JSON kembali menjadi objek JavaScript
const jsonObject = JSON.parse(json);
console.info(jsonObject); // Menampilkan objek yang dihasilkan dari string JSON
```

Dalam code ini, kita mendefinisikan objek `person` yang memiliki berbagai properti, termasuk objek nested dan array.

1. `JSON.stringify(person)` mengubah objek `person` menjadi string JSON, menghasilkan format yang bisa dikirim melalui jaringan atau disimpan.
2. `JSON.stringify([person])` mengubah array yang berisi objek `person` menjadi string JSON.
3. `JSON.parse(json)` mengubah string JSON kembali menjadi objek JavaScript, memungkinkan kita untuk mengakses nilai-nilai dalam objek tersebut.

## Kapan Code Ini Digunakan

Code ini biasanya digunakan dalam berbagai situasi, seperti:

1. **Pertukaran Data**: Saat mengirim data antara server dan klien melalui API, data sering kali diubah menjadi format JSON.

2. **Penyimpanan Data**: Data dapat disimpan dalam format JSON dalam file atau database, membuatnya mudah untuk dibaca dan ditulis.

3. **Pengolahan Data**: Saat Anda ingin memanipulasi atau mengubah data yang diterima dari sumber eksternal, Anda dapat mengubahnya dari format JSON menjadi objek JavaScript untuk pemrosesan lebih lanjut.

## Analogi Sederhana

Anda dapat membayangkan JSON seperti kotak penyimpanan yang rapi. Ketika Anda menyimpan barang (data) ke dalam kotak (JSON), semua barang tersebut terorganisir dengan baik dan mudah untuk diambil kembali. Mengubah objek menjadi JSON adalah seperti mengemas barang dengan rapi, sedangkan mengubah JSON kembali menjadi objek adalah seperti membuka kotak dan mengambil barang yang Anda butuhkan.

## Kesimpulan

Secara keseluruhan, `JSON` adalah alat yang sangat berguna dalam JavaScript untuk mengelola data dalam format yang mudah dibaca dan ditransmisikan. Dengan menggunakan `JSON.stringify` dan `JSON.parse`, Anda dapat dengan mudah beralih antara objek JavaScript dan format JSON, memungkinkan pengelolaan data yang lebih efisien dalam aplikasi Anda.
