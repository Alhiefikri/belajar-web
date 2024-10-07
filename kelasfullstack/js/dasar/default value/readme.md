Berikut adalah isi lengkap `README.md` yang mencakup pengertian tentang default value dalam fungsi JavaScript, contoh kode yang Anda berikan, cara kerjanya, serta situasi di mana default value sering digunakan.

````markdown
# README: Penggunaan Default Value dalam Fungsi JavaScript

## Pengertian Default Value

Default value dalam JavaScript adalah nilai yang ditetapkan untuk parameter fungsi jika argumen yang sesuai tidak diberikan saat pemanggilan fungsi. Dengan menggunakan default value, kita dapat memastikan bahwa fungsi tetap berfungsi dengan baik bahkan jika tidak semua argumen disediakan.

### Sintaks

```javascript
function functionName(parameter1 = defaultValue1, parameter2 = defaultValue2) {
  // Operasi fungsi
}
```
````

- **parameter1**: Parameter pertama dengan default value `defaultValue1`.
- **parameter2**: Parameter kedua dengan default value `defaultValue2`.

## Contoh Kode

```javascript
function lemparDadu(sisi) {
  return Math.floor(Math.random() * sisi * 1);
}

// Menggunakan default value
function lemparDadu(sisi = 6) {
  return Math.floor(Math.random() * sisi * 1);
}

function sapa(name = "User", msg = "Bekerja") {
  console.log(`${name} ${msg}`);
}
```

## Cara Kerja Kode

1. **Fungsi `lemparDadu`**:

   - Fungsi ini pertama kali didefinisikan tanpa nilai default untuk parameter `sisi`. Jika dipanggil tanpa argumen, hasilnya akan menjadi `NaN` karena `Math.random()` tidak bisa dikalikan dengan undefined.
   - Pada definisi kedua, parameter `sisi` diberikan nilai default 6. Dengan cara ini, jika tidak ada argumen yang diberikan, dadu akan memiliki 6 sisi secara default.

2. **Fungsi `sapa`**:
   - Fungsi ini memiliki dua parameter: `name` dan `msg`, dengan nilai default "User" dan "Bekerja".
   - Jika fungsi `sapa` dipanggil tanpa argumen, maka akan menampilkan "User Bekerja".

## Situasi di Mana Default Value Sering Digunakan

Default value sering digunakan dalam situasi di mana:

- Parameter memiliki nilai umum yang sering digunakan, sehingga tidak perlu selalu ditentukan.
- Meningkatkan fleksibilitas dan keterbacaan fungsi dengan mengurangi kebutuhan untuk memeriksa argumen yang tidak diberikan.
- Menghindari kesalahan atau hasil yang tidak diinginkan ketika argumen tidak disediakan, seperti pada fungsi `lemparDadu` yang bisa menghasilkan nilai `NaN` tanpa default value.

## Kesimpulan

Penggunaan default value dalam fungsi JavaScript membantu membuat kode lebih bersih, lebih mudah dibaca, dan lebih tahan terhadap kesalahan saat pemanggilan fungsi. Dengan memahami cara kerjanya, Anda dapat membuat fungsi yang lebih fleksibel dan mudah digunakan.

```

```
