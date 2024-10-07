# Penjelasan tentang Static Class Field di JavaScript (Dengan Analogi)

## Apa itu Static Class Field?

Static class field adalah properti yang dimiliki oleh kelas itu sendiri, bukan oleh instance dari kelas. Ini memungkinkan Anda untuk menyimpan data atau metode yang sama untuk semua instance tanpa harus membuat objek dari kelas tersebut. Anda dapat mengakses static field menggunakan nama kelas diikuti dengan nama field.

## Analogi Sederhana

Bayangkan Anda memiliki sebuah **konfigurasi aplikasi**. Konfigurasi ini berisi informasi yang sama untuk semua pengguna aplikasi, seperti:

- **Nama Aplikasi**: Nama dari aplikasi yang digunakan.
- **Versi Aplikasi**: Versi terkini dari aplikasi.
- **Pengembang Aplikasi**: Nama pengembang atau pembuat aplikasi.

Informasi ini bersifat global dan tidak berubah dari satu pengguna ke pengguna lainnya.

### Dalam Analogi:

- **Konfigurasi Aplikasi**: Kelas yang mendefinisikan informasi global.
- **Nama, Versi, dan Pengembang**: Static field yang menyimpan informasi tersebut.

### Di dalam kode:

```javascript
class Configuration {
  static name = "Belajar Javascript OOP"; // Static field untuk nama aplikasi
  static version = 1.0; // Static field untuk versi aplikasi
  static author = "Alhiefikri"; // Static field untuk pengembang
}

const config = new Configuration(); // Membuat instance (tidak perlu untuk mengakses static field)
console.info(config); // Output: Configuration {}

// Mengubah static field
Configuration.author = "Alhie Fikri";

// Mengakses static field tanpa membuat instance
console.info(Configuration.name); // Output: "Belajar Javascript OOP"
console.info(Configuration.version); // Output: 1.0
console.info(Configuration.author); // Output: "Alhie Fikri"
```

### Penjelasan Kode

1. **Definisi Kelas**:

   - `class Configuration` mendefinisikan kelas yang menyimpan informasi konfigurasi aplikasi.

2. **Static Field**:

   - `static name`, `static version`, dan `static author` adalah static fields yang menyimpan nama aplikasi, versi, dan pengembang.

3. **Membuat Objek**:

   - `const config = new Configuration();` membuat instance dari kelas, tetapi instance ini tidak perlu untuk mengakses static fields.

4. **Mengubah Static Field**:

   - `Configuration.author = "Alhie Fikri";` mengubah nilai dari static field `author`.

5. **Mengakses Static Field**:
   - Anda bisa mengakses static fields langsung dari kelas tanpa membuat instance, menggunakan `Configuration.name`, `Configuration.version`, dan `Configuration.author`.

## Kapan Menggunakan Static Class Field?

- Ketika Anda perlu menyimpan informasi atau metode yang bersifat global untuk kelas.
- Jika Anda ingin menghindari penggunaan properti instance yang tidak perlu ada dalam setiap objek.
- Saat Anda perlu mengelola data yang relevan untuk seluruh kelas, bukan untuk setiap instance.

## Contoh Kasus Penggunaan

Penggunaan static class field sering ditemui dalam berbagai konteks, termasuk:

1. **Pengaturan Global**: Menyimpan informasi yang relevan untuk seluruh aplikasi, seperti nama aplikasi dan versi.

2. **Konstanta Kelas**: Menyimpan nilai tetap yang tidak berubah, seperti batasan atau konfigurasi default.

3. **Metode Utilitas**: Menyimpan metode yang tidak memerlukan data instance dan dapat digunakan langsung dari kelas.

4. **Statistik Kelas**: Mengelola data yang menghitung atau menyimpan statistik untuk kelas tertentu, seperti jumlah instance yang dibuat.

## Kesimpulan

Static class field di JavaScript adalah cara yang efisien untuk menyimpan informasi dan metode yang terkait dengan kelas, bukan dengan instance. Dengan menggunakan static field, Anda dapat menjaga data yang relevan untuk seluruh kelas terorganisir dan mudah diakses. Analogi konfigurasi aplikasi membantu menggambarkan bagaimana static field berfungsi untuk menyimpan informasi global. Penggunaan static field dapat meningkatkan keterbacaan dan efisiensi dalam pengembangan aplikasi.
