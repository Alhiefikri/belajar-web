````markdown
# README.md

## Apa itu String?

`String` adalah tipe data primitif dalam JavaScript yang digunakan untuk merepresentasikan teks. Objek `String` menyediakan berbagai metode untuk memanipulasi, memformat, dan mengelola data teks dengan cara yang efisien.

## Fungsi dari String

- **Manipulasi Teks**: Mengubah, memformat, dan memecah teks.
- **Pengukuran**: Menghitung panjang string.
- **Format**: Mengubah huruf menjadi kapital atau huruf kecil.
- **Penghapusan Spasi**: Menghilangkan spasi yang tidak perlu di sekitar teks.

## Kapan String Dipakai

Objek `String` sering digunakan dalam situasi berikut:

- **Pengolahan Teks**: Ketika menerima atau menampilkan data berupa teks.
- **Validasi Input**: Memeriksa dan memformat data yang diinput pengguna.
- **Pencarian dan Penggantian**: Menemukan bagian tertentu dari teks untuk manipulasi lebih lanjut.

## Analogi Sederhana

Bayangkan string sebagai kalimat yang ditulis di atas kertas. Objek `String` dalam JavaScript berfungsi seperti alat tulis yang memungkinkan kamu untuk mengubah, memformat, dan memecah kalimat menjadi kata-kata, serta menghapus bagian yang tidak perlu seperti spasi.

## Penjelasan Kode

```javascript
const name = "Alhie Fikri";
```
````

Mendefinisikan variabel `name` yang menyimpan string `"Alhie Fikri"`.

```javascript
console.info(name.length);
```

Menampilkan panjang string `name`, yaitu jumlah karakter yang terdapat di dalamnya.

```javascript
console.info(name.toLowerCase());
```

Mengubah semua huruf dalam string `name` menjadi huruf kecil.

```javascript
console.info(name.toUpperCase());
```

Mengubah semua huruf dalam string `name` menjadi huruf kapital.

```javascript
console.info(name.split(" "));
```

Memecah string `name` menjadi array berdasarkan spasi, menghasilkan `["Alhie", "Fikri"]`.

### Penghapusan Spasi

```javascript
const input = "              input data           ";
console.info(input.trim());
```

Menghilangkan spasi yang tidak perlu di sekitar string `input`, menghasilkan `"input data"`.
