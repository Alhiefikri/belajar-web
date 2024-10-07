# README: Penggunaan Metode `some` dan `every` di JavaScript

## Pengertian `some`

Metode `some` dalam JavaScript digunakan untuk memeriksa apakah setidaknya satu elemen dalam array memenuhi kondisi tertentu. Metode ini mengembalikan nilai `true` jika ada satu elemen yang memenuhi kriteria yang ditentukan, dan mengembalikan `false` jika tidak ada elemen yang memenuhi.

### Contoh Penggunaan `some`

```javascript
const animes = [
  { title: "Attack on Titan", year: 2013 },
  { title: "Demon Slayer", year: 2019 },
  { title: "My Hero Academia", year: 2016 },
];

// Mengecek apakah ada anime yang dirilis setelah tahun 2020
const isAnimeListNew = animes.some((anime) => anime.year > 2020);
```

## Pengertian `every`

Metode `every` dalam JavaScript digunakan untuk memeriksa apakah semua elemen dalam array memenuhi kondisi tertentu. Metode ini mengembalikan nilai `true` jika semua elemen memenuhi kriteria yang ditentukan, dan mengembalikan `false` jika ada satu elemen yang tidak memenuhi.

### Contoh Penggunaan `some`

const examScore = [80, 85, 79, 90, 93, 77];

```javascript
const examScore = [80, 85, 79, 90, 93, 77];

// Mengecek apakah semua skor ujian >= 75
const isGraduate = examScore.every((score) => score >= 75);
```
