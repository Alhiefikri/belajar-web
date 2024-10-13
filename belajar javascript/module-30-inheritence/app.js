class Hewan {
  constructor(nama, jenis) {
    this.nama = nama;
    this.jenis = jenis;
  }

  makan() {
    return `${this.nama} sedang makan`;
  }
}

class Kucing extends Hewan {
  constructor(nama, warna) {
    super(nama, "Kucing-Kucingan");
    this.warna = warna;
  }
  kucingMakan() {
    console.log(super.makan());
    console.log("Makannya lahap sekali");
  }
}

let Kitty = new Kucing("Kitty", "Orange");

console.log(Kitty.jenis);

// console.log(Kitty.makan());
console.log(Kitty.kucingMakan());
