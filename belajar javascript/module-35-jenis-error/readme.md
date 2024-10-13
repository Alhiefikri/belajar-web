# README untuk Jenis-Jenis Error dalam JavaScript

## 1. Deskripsi Materi

Dalam pemrograman JavaScript, terdapat berbagai jenis error yang dapat terjadi selama eksekusi kode. Memahami jenis-jenis error ini penting untuk melakukan error handling yang efektif dan menjaga stabilitas aplikasi.

## 2. Jenis-Jenis Error

### 2.1. Syntax Error

- **Fungsi**: Terjadi ketika ada kesalahan dalam sintaks kode yang menyebabkan interpreter tidak dapat memahami kode tersebut.
- **Kode**:
  ```javascript
  console.log("Hello World"
  ```
- **Penjelasan**: Kode ini menyebabkan `SyntaxError` karena tanda kurung tutup setelah string tidak ada. Kesalahan ini ditemukan saat kode dijalankan.
- **Kapan Dipakai**: Terjadi saat menulis kode dan biasanya terdeteksi sebelum eksekusi.
- **Contoh Penggunaan di Proyek**: Kesalahan penulisan fungsi, penggunaan tanda kurung, atau tanda kutip yang tidak seimbang.

### 2.2. Type Error

- **Fungsi**: Terjadi ketika operasi dilakukan pada tipe data yang tidak sesuai.
- **Kode**:
  ```javascript
  let kosong = null;
  kosong.toString();
  ```
- **Penjelasan**: Kode ini menyebabkan `TypeError` karena mencoba memanggil metode `toString()` pada `null`, yang bukan objek.
- **Kapan Dipakai**: Umumnya muncul saat mengakses properti atau metode dari nilai yang tidak sesuai.
- **Contoh Penggunaan di Proyek**: Mengakses metode pada objek yang tidak terdefinisi atau null.

### 2.3. Reference Error

- **Fungsi**: Terjadi ketika mencoba mengakses variabel yang belum dideklarasikan.
- **Kode**:
  ```javascript
  console.log(kosog);
  ```
- **Penjelasan**: Kode ini menyebabkan `ReferenceError` karena `kosog` tidak dideklarasikan sebelumnya. Ini menunjukkan bahwa variabel tidak dikenali dalam konteks tersebut.
- **Kapan Dipakai**: Muncul saat mencoba menggunakan variabel yang tidak ada dalam scope saat itu.
- **Contoh Penggunaan di Proyek**: Kesalahan penulisan nama variabel atau mencoba mengakses variabel di luar scope-nya.

## 3. Kesimpulan

Memahami jenis-jenis error seperti `SyntaxError`, `TypeError`, dan `ReferenceError` adalah penting untuk meningkatkan kualitas kode dan efektivitas error handling. Dengan mengenali kesalahan ini, pengembang dapat dengan cepat memperbaiki masalah dan mencegah terjadinya crash pada aplikasi.
