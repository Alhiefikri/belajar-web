// ⁡⁢⁣⁢𝘙𝘦𝘤𝘶𝘳𝘴𝘪𝘰𝘯 𝘥𝘪 𝘑𝘢𝘷𝘢𝘴𝘤𝘳𝘪𝘱𝘵⁡

// Recursion terjadi ketika sebuah function memanggil dirinya sendiri secara langsung atau tidak langsung untuk memnyelesaikan sebagian masalah yang diberikan. Setiap panggilan recursion membawa masalah tersebut lebih dekat ke kondisi dasar (base case), yaitu kondisi di mana recursion berhenti.

/*
    Struktur Recursion
    Recursion terdiri dari dua bagian penting:
    1. Base Case (Kondisi Dasar): Bagian dari function yang menghentikan recursion.. ini adalah kondisi di mana masalah tidak lagi memerlukan panggilan function secara rekursif

    2. Recursive Case: Bagian dari function yang memecah masalah menjadi sub masalah yang lebih kecil dan memanggil dirinya sendiri.

*/

// Contoh Recursion: FAktorial
// Faktorial dari sebuah bilangan adalah hasil kali dari bilangan tersebut dengan semua bilangan bulat positif di bawahnya. faktorial dari n ditulis sebagai n!. sebagai contoh, 5! (diabca "5 Faktorial") adalah 5 * 4 * 3 * 2 *1, yang sama dengan 120

function faktorial(n) {
  // Base Case
  if (n === 0) {
    return 1;
  }
  // Reculsive akan memanggil dirinya sendiri
  console.log(n);
  return n * faktorial(n - 1);
}
console.log(faktorial(5));
// Gunakan recursion saat masalah dapat dipecah menjadi sub-masalah yang lebih kecil, ketika bekerja dengan struktur data seperti pohon, atau saat algoritma backtracking diperlukan. Namun, selalu pertimbangkan kinerja dan resiko overflow sebelum menggunakan recursion
