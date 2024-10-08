````markdown
# README.md

## Apa itu Number?

`Number` adalah tipe data primitif dalam JavaScript yang digunakan untuk merepresentasikan angka. Objek ini menyediakan berbagai metode dan properti untuk melakukan operasi numerik, konversi, dan validasi angka.

## Fungsi dari Number

- **Konversi**: Mengubah string yang merepresentasikan angka menjadi tipe data `number`.
- **Validasi**: Memeriksa apakah suatu nilai adalah bilangan bulat atau `NaN`.
- **Representasi**: Menyediakan cara untuk menampilkan angka dalam format yang berbeda.
- **Batasan**: Menyediakan informasi tentang nilai-nilai numerik ekstrem dalam JavaScript.

## Kapan Number Dipakai

- **Pengolahan Data**: Saat menerima input dari pengguna dalam bentuk string.
- **Validasi Input**: Untuk memastikan data yang diterima merupakan angka yang valid.
- **Format Angka**: Saat menampilkan angka dalam format yang lebih mudah dibaca.
- **Menghindari Kesalahan**: Menggunakan `Number.MIN_SAFE_INTEGER` dan `Number.MAX_SAFE_INTEGER`.

## Analogi Sederhana

Bayangkan angka sebagai alat ukur. Objek `Number` dalam JavaScript berfungsi seperti penggaris yang bisa mengukur, mengubah angka ke dalam berbagai satuan, dan memeriksa validitas pengukuran.

## Penjelasan Kode

```javascript
const input = "12345";
const number = Number(input);
```
````

Mengonversi string `"12345"` menjadi angka.

```javascript
console.info(typeof input);
console.info(typeof number);
console.info(number);
```

Menampilkan tipe dari `input` dan `number`, serta nilai dari `number`.

```javascript
console.info(Number("salah"));
```

Mengonversi string yang tidak dapat diubah menjadi angka, menghasilkan `NaN`.

### Static Property

```javascript
console.info(Number.MIN_VALUE);
console.info(Number.MAX_VALUE);
console.info(Number.MIN_SAFE_INTEGER);
console.info(Number.MAX_SAFE_INTEGER);
console.info(Number.NaN);
```

- `Number.MIN_VALUE`: Nilai terkecil yang dapat direpresentasikan.
- `Number.MAX_VALUE`: Nilai terbesar yang dapat direpresentasikan.
- `Number.MIN_SAFE_INTEGER`: Bilangan bulat terkecil yang dapat diwakili dengan aman.
- `Number.MAX_SAFE_INTEGER`: Bilangan bulat terbesar yang dapat diwakili dengan aman.
- `Number.NaN`: Konstanta yang menunjukkan "Not-a-Number".

### Number Static Method

```javascript
const data = Number("ali");
console.info(Number.isInteger(data));
console.info(Number.isNaN(data));
```

- `Number.isInteger(data)`: Mengecek apakah `data` adalah bilangan bulat.
- `Number.isNaN(data)`: Mengecek apakah `data` adalah `NaN`.

### Number Instance Method

```javascript
const value = Number("12345");
console.info(value.toString(2));
console.info(value.toLocaleString("id-ID"));
console.info(value.toLocaleString("en-US"));
```

- `value.toString(2)`: Mengonversi angka ke representasi biner.
- `value.toLocaleString("id-ID")`: Mengonversi angka menjadi format string sesuai locale Indonesia.
- `value.toLocaleString("en-US")`: Mengonversi angka menjadi format string sesuai locale Amerika Serikat.
