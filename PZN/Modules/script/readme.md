```markdown
# Folder Script dalam Proyek

## Struktur Folder

Berikut adalah struktur folder yang berisi file JavaScript:
```

/project
├── index.html
└── script
└── say.js

````

### Penjelasan Struktur Folder
- **index.html**: File HTML utama yang memuat skrip JavaScript.
- **/script/say.js**: File JavaScript yang berisi fungsi dan variabel yang diekspor untuk digunakan di file lain.

## Isi /script/say.js
File `say.js` berisi fungsi-fungsi dan variabel yang diekspor agar dapat digunakan di file lain. Berikut adalah penjelasan mengenai masing-masing bagian:

```javascript
// Fungsi untuk menyapa pengguna
export function sayHello(name) {
  console.info(`Hello ${name}`);  // Mencetak sapaan kepada pengguna
}

// Fungsi untuk mengucapkan selamat tinggal kepada pengguna
export function sayGoodBye(name) {
  console.info(`Goodbye ${name}`);  // Mencetak ucapan selamat tinggal
}

// Variabel untuk menyimpan nama
export const name = "Alhie";  // Menyimpan nama dan diekspor
````

### Penjelasan Fungsi dan Variabel

1. **sayHello(name)**:

   - Fungsi ini menerima satu parameter, `name`, dan mencetak pesan sapaan ke konsol.
   - Contoh penggunaan: `sayHello("Alhie");` akan mencetak `Hello Alhie`.

2. **sayGoodBye(name)**:

   - Fungsi ini juga menerima satu parameter, `name`, tetapi mencetak ucapan selamat tinggal ke konsol.
   - Contoh penggunaan: `sayGoodBye("Alhie");` akan mencetak `Goodbye Alhie`.

3. **name**:
   - Variabel ini menyimpan string `"Alhie"` yang dapat digunakan di bagian lain dari aplikasi.
   - Misalnya, jika diimpor, kita dapat menggunakan nilai ini dalam logika lainnya.

## Kapan Metode Ini Digunakan

Penggunaan module seperti ini cocok ketika:

- Kita perlu mendefinisikan fungsionalitas spesifik yang dapat digunakan di banyak tempat dalam aplikasi.
- Kita ingin menjaga kode tetap terorganisir dan modular.

## Penggunaan dalam Proyek Nyata

Di proyek nyata, file seperti `say.js` sering digunakan untuk:

- Mengelompokkan fungsi yang terkait dengan interaksi pengguna, seperti menyapa atau memberikan pesan.
- Memudahkan pengelolaan dan pemeliharaan kode, karena fungsi-fungsi ini bisa dipanggil dari berbagai tempat.

## Analogi Sederhana

Bayangkan Anda memiliki buku resep. Setiap resep adalah fungsi yang memberikan instruksi untuk membuat hidangan tertentu. Anda dapat menggunakan resep yang sama berulang kali tanpa harus menulis ulang semua instruksi.

## Kesimpulan

Folder `script` berisi file `say.js`, yang merupakan contoh penggunaan module dalam JavaScript. Dengan mendefinisikan dan mengekspor fungsi dan variabel, kita dapat mengorganisir kode dengan baik, meningkatkan keterbacaan, dan memudahkan pemeliharaan. Memahami penggunaan module adalah keterampilan penting dalam pengembangan aplikasi web modern.
