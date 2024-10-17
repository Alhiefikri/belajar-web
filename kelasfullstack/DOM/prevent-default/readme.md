### README: Penggunaan `preventDefault` dalam JavaScript

#### Deskripsi

`preventDefault` adalah metode yang digunakan untuk mencegah perilaku default dari suatu event. Dalam konteks formulir HTML, ini sering digunakan untuk menghentikan pengiriman formulir sehingga kita dapat menangani data sebelum mengirimnya ke server.

#### Kode

```javascript
const form = document.querySelector("#form");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah pengiriman formulir
  console.log("submitted form"); // Menampilkan pesan di konsol
  console.log("submitted"); // Menampilkan pesan di konsol
});
```

#### Penjelasan Kode

1. **`const form = document.querySelector("#form");`**

   - **Penjelasan**: Baris ini mencari elemen HTML dengan ID `form` dan menyimpannya dalam variabel `form`.
   - **Kapan Digunakan**: Ketika Anda ingin merujuk ke elemen formulir dalam DOM untuk menambah event listener.

2. **`form.addEventListener("submit", function (e) {`**

   - **Penjelasan**: Baris ini menambahkan event listener pada elemen `form` untuk mendengarkan event `submit`.
   - **Kapan Digunakan**: Ketika Anda ingin melakukan tindakan tertentu saat formulir disubmit.

3. **`e.preventDefault();`**

   - **Penjelasan**: Metode ini mencegah tindakan default dari event, dalam hal ini, menghentikan formulir dari pengiriman dan refresh halaman.
   - **Kapan Digunakan**: Digunakan saat Anda ingin memproses data dari formulir sebelum melakukan pengiriman ke server.

4. **`console.log("submitted form");`**

   - **Penjelasan**: Baris ini mencetak pesan ke konsol yang menunjukkan bahwa formulir telah disubmit.
   - **Kapan Digunakan**: Berguna untuk debugging dan memastikan bahwa event listener berfungsi dengan benar.

5. **`console.log("submitted");`**
   - **Penjelasan**: Baris ini juga mencetak pesan ke konsol untuk menunjukkan bahwa fungsi telah dieksekusi.
   - **Kapan Digunakan**: Sama seperti sebelumnya, membantu dalam proses debugging.

#### Cara Kerja Kode

Ketika pengguna mengisi formulir dan mengklik tombol submit, event listener akan memicu. `preventDefault` akan mencegah pengiriman formulir secara otomatis, sehingga Anda bisa menangani data formulir sesuai keinginan (misalnya, validasi data, mengirim data via AJAX, dll.).

#### Kapan Kode Ini Dipakai

Kode ini biasanya dipakai dalam situasi di mana Anda perlu memproses data formulir tanpa melakukan refresh halaman, seperti:

- Aplikasi web satu halaman (SPA).
- Validasi data sebelum pengiriman.
- Mengirim data formulir menggunakan AJAX.

#### Analogi Sederhana

Bayangkan Anda sedang mengisi formulir di bank. Saat Anda menekan tombol "Kirim", petugas (event listener) menghentikan proses pengiriman (preventDefault) untuk memeriksa apakah semua informasi yang Anda berikan sudah benar. Jika semuanya baik, mereka baru akan mengirimkan formulir ke sistem bank.

#### Kesimpulan

Penggunaan `preventDefault` sangat penting dalam pengembangan web modern, terutama ketika bekerja dengan formulir. Ini memberi pengembang kendali penuh terhadap bagaimana dan kapan data dari formulir akan dikirim, memungkinkan untuk penanganan yang lebih baik dan pengalaman pengguna yang lebih mulus.
