const examScore = [80, 85, 70, 90, 94, 77];

// Menghitung total skor menggunakan reduce
const total = examScore.reduce((total, score) => {
  return total + score; // Menjumlahkan setiap skor ke dalam total
});

// Array anime
const animes = [
  {
    title: "Attack on Titan",
    rating: 9.0,
    year: 2013,
  },
  {
    title: "Demon Slayer",
    rating: 8.6,
    year: 2019,
  },
  {
    title: "My Hero Academia",
    rating: 8.3,
    year: 2016,
  },
  {
    title: "Fullmetal Alchemist: Brotherhood",
    rating: 9.1,
    year: 2009,
  },
  {
    title: "Death Note",
    rating: 8.6,
    year: 2006,
  },
  {
    title: "Jujutsu Kaisen",
    rating: 9.5,
    year: 2020,
  },
  {
    title: "One Piece",
    rating: 8.5,
    year: 1999,
  },
  {
    title: "Your Name",
    rating: 8.9,
    year: 2016,
  },
  {
    title: "Sword Art Online",
    rating: 7.9,
    year: 2012,
  },
  {
    title: "Tokyo Ghoul",
    rating: 7.8,
    year: 2014,
  },
];

// Mencari anime terbaik menggunakan reduce
const bestAnime = animes.reduce((bestAnime, currAnime) => {
  // Fungsi reduce digunakan untuk mengakumulasi nilai dari elemen array menjadi satu nilai
  // `bestAnime` adalah akumulator yang menyimpan anime terbaik sejauh ini
  // `currAnime` adalah anime yang sedang diproses
  if (currAnime.rating > bestAnime.rating) {
    return currAnime; // Jika rating currAnime lebih tinggi, kembalikan currAnime
  }
  return bestAnime; // Jika tidak, tetap gunakan bestAnime
});

// Mencari anime terendah menggunakan reduce
const lowAnime = animes.reduce((bestAnime, currAnime) => {
  // Sama seperti di atas, tetapi mencari anime dengan rating terendah
  if (currAnime.rating < bestAnime.rating) {
    return currAnime; // Jika rating currAnime lebih rendah, kembalikan currAnime
  }
  return bestAnime; // Jika tidak, tetap gunakan bestAnime
});
