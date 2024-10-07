class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
  }
}

class MathUtil {
  // Perbaikan nama kelas
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
  console.info("Mencoba menjumlahkan..."); // Tambahan
  console.info(MathUtil.sum()); // Ini harus melempar error
  console.info("Ali"); // Ini tidak akan dijalankan jika terjadi kesalahan
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
