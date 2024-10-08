````markdown
# Array Filter di JavaScript

## Pengertian

Array filter adalah metode dalam JavaScript yang digunakan untuk membuat array baru yang hanya berisi elemen-elemen yang memenuhi kondisi tertentu. Metode ini berguna untuk menyaring data dalam array.

## Penjelasan Kode

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Menyaring angka ganjil
const ganjil = numbers.filter((value) => value % 2 === 1);

// Menyaring angka genap
const genap = numbers.filter((value) => value % 2 === 0);

console.info(numbers);
console.info(ganjil);
console.info(genap);
```
````

1. `numbers`: Array awal yang berisi angka dari 1 hingga 10.
2. `ganjil`: Array baru yang berisi hanya angka ganjil dari array `numbers`.
3. `genap`: Array baru yang berisi hanya angka genap dari array `numbers`.

## Kapan Kode Ini Bagusnya Digunakan

Kode ini ideal digunakan ketika Anda ingin menyaring data berdasarkan kondisi tertentu, seperti memisahkan angka genap dan ganjil.

## Biasanya Dipakai untuk Proyek Apa

Metode filter sering digunakan dalam aplikasi analisis data, pemrosesan daftar, dan saat mengelola data yang perlu dikategorikan.

## Analogi Sederhana

Bayangkan Anda sedang menyortir buah dalam keranjang. Metode `filter` seperti meminta seseorang untuk hanya mengambil buah-buah yang berwarna merah dari keranjang tersebut.

## Kesimpulan

Metode filter pada array di JavaScript memungkinkan Anda untuk dengan mudah membuat subset data berdasarkan kondisi tertentu. Memahami dan menggunakan metode ini dapat meningkatkan efisiensi dalam pengelolaan data.
