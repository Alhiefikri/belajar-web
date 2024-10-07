# Penjelasan tentang Setter dan Getter di JavaScript (Dengan Analogi dan Contoh Penggunaan)

## Apa itu Setter dan Getter?

Setter dan getter adalah metode khusus dalam sebuah kelas yang memungkinkan Anda untuk mendefinisikan perilaku saat mengakses atau memodifikasi properti objek. Dalam JavaScript, Anda menggunakan kata kunci `get` dan `set` untuk mendefinisikan properti yang dapat diakses seperti atribut, tetapi dengan logika tambahan di baliknya.

## Analogi Sederhana

Bayangkan Anda memiliki sebuah **buku** yang berisi informasi tentang seseorang. Buku ini memiliki dua halaman: satu halaman untuk nama depan (first name) dan satu halaman untuk nama belakang (last name).

- **Halaman Nama Depan**: Ini adalah tempat Anda menulis nama depan orang tersebut.
- **Halaman Nama Belakang**: Ini adalah tempat Anda menulis nama belakang orang tersebut.

Sekarang, Anda ingin membuat metode untuk melihat nama lengkap (full name) dan juga metode untuk memperbarui nama lengkap tanpa harus mengubah kedua halaman secara terpisah.

### Dalam Analogi:

- **Buku**: Kelas yang menyimpan informasi.
- **Halaman**: Properti dalam objek (first name dan last name).
- **Metode**: Cara untuk membaca dan mengubah informasi.

### Di dalam kode:

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName; // Menulis nama depan di halaman
    this.lastName = lastName; // Menulis nama belakang di halaman
  }

  // Getter untuk fullName
  get fullName() {
    return `${this.firstName} ${this.lastName}`; // Menggabungkan nama depan dan belakang
  }

  // Setter untuk fullName
  set fullName(value) {
    const result = value.split(" "); // Memisahkan nama lengkap
    this.firstName = result[0]; // Menulis nama depan baru di halaman
    this.lastName = result[1]; // Menulis nama belakang baru di halaman
  }
}

// Membuat objek dari kelas Person
const ali = new Person("Alhie", "Fikri");
console.info(ali); // Output: Person { firstName: 'Alhie', lastName: 'Fikri' }
console.info(ali.fullName); // Output: Alhie Fikri

// Mengubah nama lengkap menggunakan setter
ali.fullName = "Budi Nugraha"; // Mengupdate kedua halaman sekaligus
console.info(ali); // Output: Person { firstName: 'Budi', lastName: 'Nugraha' }
```

### Penjelasan Kode

1. **Definisi Kelas**: `class Person` mendefinisikan kelas buku yang menyimpan nama depan dan belakang.

2. **Getter**:

   - `get fullName()` adalah metode yang mengembalikan nama lengkap dengan menggabungkan nama depan dan belakang. Ketika Anda mengakses `ali.fullName`, Anda memanggil metode ini untuk melihat informasi yang ada di buku.

3. **Setter**:

   - `set fullName(value)` adalah metode yang menerima satu parameter, nama lengkap. Metode ini memisahkan nama dan memperbarui kedua halaman (nama depan dan belakang) dengan menggunakan `split()`.

4. **Membuat Objek**:

   - `const ali = new Person("Alhie", "Fikri");` membuat objek baru dari kelas `Person`, seperti menulis informasi di buku.

5. **Mengakses Getter**:

   - `console.info(ali.fullName);` memanggil getter `fullName` dan menampilkan "Alhie Fikri", seperti membaca informasi dari buku.

6. **Mengubah dengan Setter**:
   - `ali.fullName = "Budi Nugraha";` memanggil setter `fullName`, yang memperbarui kedua halaman di buku dengan nama baru.
   - Setelah itu, `console.info(ali);` menunjukkan bahwa informasi di buku sekarang memiliki `firstName` "Budi" dan `lastName` "Nugraha".

## Kapan Menggunakan Setter dan Getter?

- Ketika Anda perlu mengontrol akses ke properti objek, seperti memeriksa apakah nama depan dan belakang sesuai.
- Jika Anda ingin menambahkan logika untuk memvalidasi data sebelum disimpan.
- Saat Anda ingin membuat antarmuka yang bersih dan intuitif untuk berinteraksi dengan data dalam objek.

## Contoh Kasus Penggunaan

Setter dan getter sering digunakan dalam berbagai jenis proyek, termasuk:

1. **Form Validasi**: Dalam aplikasi web, Anda dapat menggunakan setter untuk memvalidasi data yang dimasukkan oleh pengguna sebelum menyimpannya ke dalam objek. Misalnya, Anda dapat memeriksa format email atau panjang password.

2. **Data Binding**: Dalam framework seperti Vue.js atau React, setter dan getter dapat digunakan untuk mengikat data secara otomatis. Ketika data berubah, tampilan dapat diperbarui secara otomatis.

3. **Pengaturan Konfigurasi**: Dalam aplikasi yang memerlukan konfigurasi, Anda dapat menggunakan setter untuk memvalidasi nilai yang ditetapkan dalam konfigurasi, memastikan bahwa hanya nilai yang valid yang disimpan.

4. **Model Data**: Dalam aplikasi berbasis model, setter dan getter memungkinkan pengembang untuk mengontrol bagaimana data diambil dan diperbarui, membantu menjaga konsistensi dan integritas data.

## Kesimpulan

Setter dan getter di JavaScript adalah alat yang berguna untuk mengelola akses dan modifikasi properti dalam objek. Dengan menggunakan setter dan getter, Anda dapat melindungi data, menambahkan logika validasi, dan menjaga kode Anda tetap bersih dan terstruktur. Analogi buku membantu menggambarkan bagaimana Anda dapat dengan mudah mengubah dan mengakses data menggunakan antarmuka yang sederhana. Penggunaan yang tepat dari setter dan getter dapat meningkatkan kualitas dan keandalan kode dalam proyek Anda.
