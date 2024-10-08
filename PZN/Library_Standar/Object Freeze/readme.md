# README: Object Freeze dan Object Seal

## Pengertian

`Object.freeze` dan `Object.seal` adalah metode dalam JavaScript yang digunakan untuk mengontrol modifikasi objek. `Object.freeze` mengunci objek agar tidak dapat diubah, sedangkan `Object.seal` mengizinkan perubahan pada properti yang ada tetapi mencegah penambahan atau penghapusan properti.

## Penjelasan mengenai Code

Berikut adalah penjelasan mengenai code yang disertakan:

```javascript
const person = {
  firstName: "Alhie",
  lastName: "Fikri",
};

// Object.freeze(person);
Object.seal(person);

person.firstName = "Budi";
person.middleName = "Kurniawan";
delete person.lastName;

console.info(person);
```

Dalam code ini, kita mendefinisikan objek `person` dengan dua properti: `firstName` dan `lastName`. Setelah itu, kita menggunakan `Object.seal` pada objek `person`. Ini berarti kita masih dapat mengubah nilai dari `firstName`, tetapi tidak dapat menambahkan `middleName` atau menghapus `lastName`. Dengan demikian, hasil dari `console.info(person)` akan menunjukkan bahwa `firstName` telah diubah, tetapi `lastName` tetap ada dan `middleName` tidak ditambahkan.

## Kapan Code Ini Digunakan

Code ini biasanya digunakan dalam situasi di mana Anda ingin melindungi struktur objek dari modifikasi yang tidak diinginkan. Misalnya, dalam aplikasi yang memiliki data sensitif, Anda mungkin ingin memastikan bahwa objek tertentu tidak dapat diubah secara tidak sengaja.

## Analogi Sederhana

Anda dapat membayangkan `Object.freeze` dan `Object.seal` seperti memasukkan dokumen penting ke dalam amplop. Dengan `Object.freeze`, amplop tersebut disegel rapat sehingga tidak bisa dibuka atau diubah isinya. Sedangkan dengan `Object.seal`, amplopnya masih bisa dibuka, tetapi Anda tidak dapat menambahkan kertas baru ke dalamnya atau mengeluarkan kertas yang sudah ada.

## Kesimpulan

Secara keseluruhan, `Object.freeze` dan `Object.seal` adalah metode penting dalam JavaScript untuk mengontrol modifikasi objek. Dengan menggunakan `Object.seal`, kita dapat mengubah nilai properti yang ada, tetapi tidak dapat menambah atau menghapus properti tersebut. Memahami cara kerja kedua metode ini dapat membantu dalam menjaga integritas data dalam aplikasi Anda.
