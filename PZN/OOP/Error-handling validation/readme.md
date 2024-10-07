Berikut adalah penjelasan mengenai materi **Error Handling Validation** dengan struktur yang jelas dan sederhana:

# Error Handling Validation

## Deskripsi

Materi ini membahas tentang bagaimana menangani error dalam program JavaScript, khususnya dalam konteks validasi input menggunakan class dan error handling dengan `try`, `catch`, dan `finally`.

## Kode Contoh

```javascript
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
  }
}

class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new ValidationError(
        "Total parameter harus lebih dari 0",
        "Numbers"
      );
    }

    let total = 0;
    for (const number of numbers) {
      total += number; // Menjumlahkan semua angka
    }
    return total; // Mengembalikan total
  }
}

try {
  console.info("Mencoba menjumlahkan..."); // Log untuk debugging
  console.info(MathUtil.sum()); // Memanggil method tanpa parameter
  console.info("Ali"); // Tidak akan dijalankan jika terjadi kesalahan
} catch (error) {
  if (error instanceof ValidationError) {
    console.info(
      `Terjadi error di field ${error.field} dengan error ${error.message}`
    );
  } else {
    console.info(`Terjadi error : ${error.message}`);
  }
} finally {
  console.info(`Program Selesai`); // Ini selalu dijalankan
}
```

## Penjelasan Kode

1. **Kelas `ValidationError`**:

   - Mewarisi dari `Error` untuk menambahkan konteks pada kesalahan.
   - Menyimpan informasi tentang field yang bermasalah.

2. **Kelas `MathUtil`**:

   - Memiliki metode `sum` yang menjumlahkan parameter yang diberikan.
   - Melempar `ValidationError` jika tidak ada parameter yang diberikan.

3. **Blok `try`**:

   - Mencoba menjalankan kode yang mungkin menghasilkan error.
   - Memanggil `MathUtil.sum()` tanpa argumen yang akan melempar error.

4. **Blok `catch`**:

   - Menangkap error yang dilempar.
   - Memeriksa tipe error untuk memberikan pesan yang lebih spesifik.

5. **Blok `finally`**:
   - Menjalankan kode ini terlepas dari apakah error terjadi atau tidak, biasanya digunakan untuk membersihkan atau menutup koneksi.

## Analogi Sederhana

Bayangkan Anda sedang mengerjakan tugas:

- **Kelas `ValidationError`**: Seperti guru yang memberi tahu Anda ketika tugas Anda tidak lengkap.
- **Kelas `MathUtil`**: Seperti buku panduan yang memberikan instruksi tentang cara menghitung.
- **Blok `try`**: Seperti saat Anda mencoba menghitung, tetapi mungkin salah.
- **Blok `catch`**: Seperti saat guru memberi tahu Anda tentang kesalahan yang Anda buat.
- **Blok `finally`**: Seperti saat Anda menyerahkan tugas, tidak peduli apakah Anda melakukan kesalahan atau tidak.

## Kapan Menggunakan

- **Validasi Input**: Memastikan input dari pengguna adalah valid sebelum diproses.
- **Mengakses API**: Menangani kesalahan saat mengambil data dari API.
- **Operasi File**: Menangani kesalahan saat membuka, membaca, atau menulis file.

---
