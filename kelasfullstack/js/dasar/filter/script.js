// Mendefinisikan array objek anime
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
  {
    title: "Jujutsu Kaisen",
    rating: 8.7,
    year: 2020,
  },
];

// Menggunakan filter untuk mendapatkan anime dengan rating >= 8.5
const animeBagus = animes.filter((anime) => anime.rating >= 8.5);

// Menggunakan filter dan map untuk mendapatkan judul anime dengan rating >= 9.0
const judulAnimeBagus = animes
  .filter((anime) => anime.rating >= 9.0) // Filter anime dengan rating >= 9.0
  .map((anime) => anime.title); // Ambil hanya judulnya

// Menggunakan filter untuk mendapatkan anime dengan rating < 8.5
const animeCukupBagus = animes.filter((anime) => anime.rating < 8.5);

// Menggunakan filter untuk mendapatkan anime yang dirilis setelah tahun 2010
const animeBaru = animes.filter((anime) => anime.year > 2010);
