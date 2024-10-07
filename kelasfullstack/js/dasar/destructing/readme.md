Berikut adalah isi lengkap `README.md` yang mencakup pengertian tentang destructuring, contoh kode, cara kerjanya, serta situasi di mana teknik ini sering digunakan.

````markdown
# README: Penggunaan Destructuring di JavaScript

## Pengertian Destructuring

Destructuring adalah fitur di JavaScript yang memungkinkan Anda untuk mengekstrak nilai dari array atau properti dari objek ke dalam variabel yang terpisah dengan cara yang lebih ringkas. Ini membuat kode lebih bersih dan lebih mudah dibaca.

### Sintaks

- **Destructuring Array**:

```javascript
const [var1, var2, ...rest] = array;
```
````

- **Destructuring Object**:

```javascript
const { prop1, prop2, defaultValue = default } = object;
```

## Contoh Kode

```javascript
const nama = ["alhie", "Bimo", "cila", "Danu", "Eka", "fani"];

// Destructuring array
// const [gold, silver, bronze, ...peserta] = nama;

const user = {
  name: "alhie",
  email: "alhie@gmail.com",
  role: "Admin",
};

// Destructuring object dengan alias dan default value
const { name: namasaya, email, phone = "08292938" } = user;

const userAndRole = ({ name, role }) => {
  return `${name} ${role}`;
};

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

// Menggunakan destructuring dalam fungsi
const anime = animes.map(({ title, year, rating }) => {
  return `${title} (${year}) rating ${rating}`;
});
```

## Cara Kerja Kode

1. **Destructuring Array**:

   - Dalam contoh yang di-comment, array `nama` dapat dipecah menjadi beberapa variabel, seperti `gold`, `silver`, dan `bronze`, sedangkan sisa elemen lainnya dapat dikumpulkan dalam array `peserta`.

2. **Destructuring Object**:

   - Dari objek `user`, kita menggunakan destructuring untuk mengambil properti `name` dan `email` serta memberikan alias `namasaya` untuk `name`.
   - Jika properti `phone` tidak ada, maka akan diberikan nilai default "08292938".

3. **Destructuring dalam Fungsi**:

   - Fungsi `userAndRole` mengambil objek sebagai argumen dan melakukan destructuring untuk mendapatkan `name` dan `role`.

4. **Menggunakan Destructuring dalam Array Objek**:
   - Pada bagian akhir, kita menggunakan destructuring untuk mengambil properti `title`, `year`, dan `rating` dari setiap objek dalam array `animes` untuk menghasilkan string yang menampilkan informasi tentang anime.

## Situasi di Mana Destructuring Sering Digunakan

Destructuring sering digunakan dalam situasi di mana:

- Anda ingin mengambil beberapa nilai dari array atau objek dengan cara yang lebih bersih.
- Anda bekerja dengan data kompleks, seperti objek yang memiliki banyak properti atau array yang memiliki banyak elemen.
- Anda ingin meningkatkan keterbacaan kode dengan mengurangi jumlah kode yang diperlukan untuk mengambil nilai dari objek atau array.

## Kesimpulan

Destructuring adalah fitur yang sangat berguna dalam JavaScript yang membantu dalam mengekstrak nilai dari array dan objek dengan cara yang lebih efisien dan mudah dibaca. Memahami cara kerjanya akan membuat Anda lebih produktif dalam menulis kode JavaScript.
