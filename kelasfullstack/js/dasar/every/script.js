const examScore = [80, 85, 79, 90, 93, 77];
const isGraduate = examScore.every((score) => score >= 75);

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

const isAnimeListNew = animes.some((anime) => anime.year > 2020);
