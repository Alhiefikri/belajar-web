# Penjelasan tentang Error Handling dengan Finally di JavaScript (Dengan Analogi)

## Apa itu Finally?

Dalam konteks error handling, `finally` adalah blok kode yang selalu dieksekusi setelah blok `try` dan `catch`, tidak peduli apakah terjadi kesalahan atau tidak. Ini berguna untuk mengeksekusi kode pembersihan atau tindakan terakhir yang perlu dilakukan, seperti menutup koneksi, mengatur status, atau mencetak pesan.

## Analogi Sederhana

Bayangkan Anda sedang **membaca buku**. Saat membaca, mungkin Anda menemukan **halaman yang robek** (kesalahan) yang mengganggu pemahaman. Anda bisa mencoba memperbaikinya (menangani kesalahan), tetapi setelah selesai membaca, Anda pasti akan menutup buku itu (blok `finally`).

### Dalam Analogi:

- **Membaca Buku**: Eksekusi program.
- **Halaman Robek**: Kesalahan yang muncul.
- **Menutup Buku**: Tindakan yang perlu dilakukan terlepas dari hasil pembacaan.

### Di dalam kode:

```javascript
class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new Error("Total parameter harus lebih dari 0"); // Lempar kesalahan jika tidak ada parameter
    }

    let total = 0;
    for (const number of numbers) {
      total += number; // Menjumlahkan semua angka
    }
    return total; // Mengembalikan total
  }
}

try {
  console.info(MathUtil.sum()); // Mencoba memanggil sum tanpa parameter
  console.info("Ali"); // Ini tidak akan dijalankan jika terjadi kesalahan
} catch (error) {
  console.info(`Terjadi error: ${error.message}`); // Menangkap dan menampilkan pesan kesalahan
} finally {
  console.info("Program selesai"); // Ini selalu dijalankan
}

console.info("Fikri"); // Ini akan tetap dijalankan
```

### Penjelasan Kode

1. **Definisi Kelas**:

   - `class MathUtil` mendefinisikan kelas yang menyimpan metode utilitas matematika.

2. **Static Method**:

   - `static sum(...numbers)` adalah static method yang menerima sejumlah argumen.

3. **Pemeriksaan Parameter**:

   - Jika tidak ada parameter yang diberikan, method akan melempar kesalahan.

4. **Try-Catch**:

   - Kode dalam blok `try` mencoba untuk menjalankan `MathUtil.sum()`. Jika kesalahan terjadi, eksekusi berpindah ke blok `catch`.

5. **Menangkap Kesalahan**:

   - Dalam blok `catch`, kesalahan yang dilempar ditangkap dalam variabel `error`, dan Anda dapat mengakses pesan kesalahan menggunakan `error.message`.

6. **Finally**:

   - Blok `finally` selalu dieksekusi, terlepas dari apakah terjadi kesalahan atau tidak. Ini digunakan untuk mengeksekusi kode pembersihan atau tindakan terakhir, seperti mencetak "Program selesai".

7. **Menjaga Eksekusi Berlanjut**:
   - Kode di luar blok `try-catch-finally` tetap akan dieksekusi. Jadi, `console.info("Fikri");` tetap akan dijalankan.

## Kapan Menggunakan Finally?

- Saat Anda perlu mengeksekusi kode tertentu terlepas dari hasil dari blok `try` dan `catch`.
- Untuk melakukan pembersihan, seperti menutup koneksi, melepaskan sumber daya, atau mengeksekusi tindakan lain yang perlu dilakukan di akhir.

## Contoh Kasus Penggunaan

Penggunaan `finally` sering ditemui dalam berbagai konteks, termasuk:

1. **Menutup Koneksi**: Mengelola koneksi database atau API, memastikan koneksi ditutup setelah operasi selesai.

2. **Melepaskan Sumber Daya**: Mengatur kembali status aplikasi, seperti melepaskan file yang dibuka.

3. **Pemberian Umpan Balik**: Menyediakan umpan balik kepada pengguna atau log aktivitas, terlepas dari apakah operasi berhasil atau tidak.

## Kesimpulan

Error handling dengan blok `finally` di JavaScript memungkinkan Anda untuk mengeksekusi kode terakhir yang penting terlepas dari apakah terjadi kesalahan. Ini meningkatkan kontrol dan manajemen alur program Anda. Analogi menutup buku setelah membaca membantu menggambarkan tindakan yang perlu dilakukan di akhir, apapun hasilnya. Penggunaan `finally` meningkatkan stabilitas dan keteraturan aplikasi Anda.
