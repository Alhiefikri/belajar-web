// ⁡⁢⁣⁢𝗢𝗢𝗣 𝗱𝗶 𝗝𝗮𝘃𝗮𝘀𝗰𝗿𝗶𝗽𝘁⁡

// ⁡⁣⁢⁣Pemrograman Berbasis Obkek (OOP)⁡ ⁡⁣⁣⁢adalah paradigma pemrograman yang berfokus pada penggunaan "objek" untuk mewakili data dan fungsionalitas dalam program. Konsep OOP memungkinkan anda untuk memodelkan elemen-elemen dunia nyata kode, membuatnya lebih mudah dipahami dan dikelola⁡.

// ⁡⁣⁢⁣Dasar-Dasar Objek di Javascript⁡, ⁡⁣⁣⁢Objek adlaah kumpulan pasangan kunci-nilai (key-value pairs) yang dapat mewakili data dan perilaku. di Javascript, objek bisa dibuat dengan cara yang sederhana.⁡

// let mobil = {
//   merk: "Toyota",
//   model: "Avanza",
//   Tahun: 2021,
//   start: function () {
//     console.log("Mobil dimulai");
//   },
//   info: function () {
//     console.log(`Mobil:${this.merk} ${this.model}`);
//   },
// };

// mobil.start();

// ⁡⁣⁢⁣Construktor Function⁡
function Mobil(merk, model, tahun) {
  this.merk = merk;
  this.model = model;
  this.tahun = tahun;

  this.start = function () {
    console.log("Mobil dimulai");
  };
  this.info = function () {
    console.log(`Mobil:${this.merk} ${this.model}`);
  };
}

let mobil1 = new Mobil("Toyota", "Avanza", 2021);
let mobil2 = new Mobil("Honda", "Civic", 2020);

// console.log(mobil1);

// ⁡⁣⁢⁣Konsep Prototype Inheritence⁡
// ⁡⁣⁣⁢Javascript menggunakan prototype inheritence yang berarti objek dapat mewarisi property dan method dari objek LargestContentfulPaint.

// Prorotype adalah objek dari mana objek lain mewarisi property dan method⁡

function Hewan(nama, jenis) {
  this.nama = nama;
  this.jenis = jenis;
}

Hewan.prototype.makan = function () {
  console.log(`${this.nama} makan`);
};

let kucing = new Hewan("Kitty", "Anggora");

kucing.makan();
