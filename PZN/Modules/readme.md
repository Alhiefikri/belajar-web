```markdown
# Penggunaan Module dalam JavaScript

## Pengertian

Module dalam JavaScript adalah cara untuk membagi kode menjadi bagian-bagian yang lebih kecil dan terpisah. Dengan menggunakan module, kita dapat mengorganisir kode agar lebih mudah dipahami dan dikelola. Module memungkinkan kita untuk mengimpor dan mengekspor fungsi, objek, atau nilai dari satu file ke file lainnya, sehingga menciptakan struktur kode yang lebih bersih.

## Struktur Folder

Berikut adalah struktur folder yang digunakan dalam contoh ini:
```

/project
├── index.html
└── script
└── say.js

````

### Penjelasan Struktur Folder
- **index.html**: Ini adalah file HTML utama yang memuat skrip JavaScript dengan tipe module.
- **/script/say.js**: Ini adalah file JavaScript yang berisi definisi fungsi dan variabel yang akan diekspor untuk digunakan di file lain.

## Contoh Kode

### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>With Modules</title>
    <script type="module" src="script/say.js"></script>  <!-- Memuat module say.js -->
  </head>
  <body>
    <script type="module">  <!-- Menandakan bahwa ini adalah script type module -->
      import { sayHello, sayGoodBye, name } from "./script/say.js";  // Mengimpor fungsi dan variabel dari say.js

      sayHello("Alhie");  // Memanggil fungsi sayHello dengan argumen "Alhie"
      sayGoodBye("Alhie");  // Memanggil fungsi sayGoodBye dengan argumen "Alhie"

      console.info(name);  // Mencetak nilai dari variabel name ke konsol
    </script>
  </body>
</html>
````

### /script/say.js

```javascript
// Fungsi untuk menyapa pengguna
export function sayHello(user) {
  // Mengekspor fungsi sayHello
  console.log(`Hello, ${user}!`); // Mencetak sapaan
}

// Fungsi untuk mengucapkan selamat tinggal kepada pengguna
export function sayGoodBye(user) {
  // Mengekspor fungsi sayGoodBye
  console.log(`Goodbye, ${user}!`); // Mencetak ucapan selamat tinggal
}

// Variabel untuk menyimpan nama
export const name = "Alhie"; // Mengekspor variabel name
```

## Kapan Metode Ini Digunakan

Metode module digunakan ketika:

- Kode mulai menjadi besar dan sulit dikelola.
- Kita ingin membagi fungsionalitas menjadi beberapa bagian untuk memudahkan pemeliharaan dan kolaborasi.
- Kita ingin menggunakan kembali kode di berbagai bagian aplikasi tanpa mengulangnya.

## Penggunaan dalam Proyek Nyata

Dalam proyek nyata, module sering digunakan untuk:

- Mengorganisir kode berdasarkan fitur atau modul tertentu, seperti autentikasi, pengolahan data, atau interaksi dengan API.
- Memudahkan tim dalam berkolaborasi, karena setiap anggota dapat bekerja pada module yang berbeda tanpa konflik.

## Analogi Sederhana

Bayangkan Anda sedang membangun rumah. Setiap ruangan (dapur, kamar tidur, ruang tamu) dapat dianggap sebagai module. Anda bisa membangun setiap ruangan secara terpisah, dan kemudian menghubungkannya saat rumah sudah selesai. Ini memudahkan Anda untuk fokus pada satu ruangan tanpa mengganggu yang lain.

## Kesimpulan

Module dalam JavaScript adalah alat yang sangat berguna untuk mengorganisir dan memelihara kode. Dengan menggunakan module, kita dapat meningkatkan keterbacaan dan keteraturan kode, serta memudahkan kolaborasi dalam tim. Memahami cara kerja module adalah keterampilan penting bagi setiap pengembang web modern.
