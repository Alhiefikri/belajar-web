````markdown
# README: Penggunaan Rest Parameter di JavaScript

## Pengertian Rest Parameter

Rest parameter dalam JavaScript adalah sintaks yang digunakan untuk mengumpulkan argumen yang tidak terdefinisi ke dalam array. Ini memungkinkan fungsi untuk menerima jumlah argumen yang tidak terbatas dan mengelompokkannya menjadi satu array.

### Sintaks

```javascript
function functionName(param1, param2, ...restParams) {
  // Operasi fungsi
}
```
````

- **restParams**: Parameter yang akan mengumpulkan semua argumen tambahan yang tidak ditentukan sebelumnya dalam bentuk array.

## Contoh Kode

```javascript
// Fungsi untuk menjumlahkan semua angka
// const sumAll = (...nums) => {
//   return nums.reduce((total, el) => total + el);
// };

const nama = ["alhie", "Bimo", "cila", "Danu", "Eka", "fani"];

// Fungsi untuk mencetak pemenang
const pemenang = (gold, silver, bronze, ...sisa) => {
  console.log(`Medali Emas diraih: ${gold}`);
  console.log(`Medali Silver diraih: ${silver}`);
  console.log(`Medali Bronze diraih: ${bronze}`);
  console.log(`Peserta lainnya: ${sisa}`);
};
```

## Cara Kerja Kode

1. **Definisi Fungsi `pemenang`**:

   - Fungsi ini memiliki tiga parameter tetap: `gold`, `silver`, dan `bronze`, serta satu parameter rest `...sisa`.
   - Parameter rest `sisa` akan mengumpulkan semua argumen tambahan yang diberikan saat pemanggilan fungsi ke dalam bentuk array.

2. **Memanggil Fungsi**:
   - Ketika Anda memanggil fungsi `pemenang` dengan nama pemenang, parameter `gold`, `silver`, dan `bronze` akan menerima nilai sesuai urutan, sedangkan semua argumen tambahan lainnya akan dikelompokkan ke dalam array `sisa`.
   - Fungsi kemudian mencetak nama pemenang medali dan peserta lainnya ke konsol.

## Situasi di Mana Rest Parameter Sering Digunakan

Rest parameter sering digunakan dalam situasi di mana:

- Anda ingin membuat fungsi yang dapat menerima jumlah argumen yang bervariasi tanpa perlu mendefinisikan setiap parameter secara terpisah.
- Anda ingin mengelompokkan argumen tambahan ke dalam array untuk memprosesnya lebih lanjut, seperti dalam kasus fungsi agregasi atau pengolahan data.

## Kesimpulan

Rest parameter adalah fitur yang kuat dalam JavaScript yang memungkinkan Anda untuk membuat fungsi yang lebih fleksibel dan dinamis. Dengan menggunakan rest parameter, Anda dapat dengan mudah menangani berbagai jumlah argumen tanpa mengubah definisi fungsi.
