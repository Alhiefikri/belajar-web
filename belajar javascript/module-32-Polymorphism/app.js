// ⁡⁣⁢⁣𝗣𝗼𝗹𝘆𝗺𝗼𝗿𝗽𝗵𝗶𝘀𝗺⁡

// ⁡⁣⁣⁢Polymorphism memungkinkan anda untuk menggunakan method dengan nama yang sama pada objek yang berbeda.Polymorphism⁡

class Hewan {
  bersuara() {
    console.log("Hewan Bersuara");
  }
}

class Kucing extends Hewan {
  bersuara() {
    super.bersuara();
    console.log("Miaaw");
  }
}

let hewan = new Hewan();
let kucing = new Kucing();

// hewan.bersuara();
kucing.bersuara();

// ⁡⁣⁣⁢Method bersuara() digunakan pada semua class, tetapi memberikan output yang berbeda sesuai dengan class-nya.⁡
