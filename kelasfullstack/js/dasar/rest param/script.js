// Fungsi untuk menjumlahkan semua angka
// const sumAll = (...nums) => {
//   return nums.reduce((total, el) => total + el);
// };

const nama = ["alhie", "Bimo", "cila", "Danu", "Eka", "fani"];

// Fungsi untuk mencetak pemenang
const pemenang = (gold, silver, bronze, ...sisa) => {
  console.log(`Medali Emas diraih: ${gold}`);
  console.log(`Medali Silver diraih: ${silver}`);
  console.log(`Medali Bronze diraih: ${bronze}`);
  console.log(`Peserta lainnya: ${sisa}`);
};
