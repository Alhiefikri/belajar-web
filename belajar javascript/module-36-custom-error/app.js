let num = 123;

// Mendefinisikan class CustomError yang mewarisi dari class Error
class CustomError extends Error {
  constructor(message) {
    super(message); // Memanggil constructor dari Error
    this.name = "Custom Error"; // Menetapkan nama kesalahan
  }
}

// Blok try-catch untuk menangani kesalahan
try {
  if (num === 123) {
    // Mengecek apakah num sama dengan 123
    throw new CustomError("Num tidak boleh bernilai 123"); // Melempar CustomError
  }
} catch (error) {
  console.error(`Error: ${error.name}`); // Menampilkan nama kesalahan di konsol
}
