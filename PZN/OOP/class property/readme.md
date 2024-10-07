# Penjelasan tentang Property di JavaScript

## Apa itu Property?

Property adalah atribut atau nilai yang terkait dengan objek. Dalam konteks class di JavaScript, property didefinisikan di dalam constructor menggunakan kata kunci `this`. Property dapat menyimpan data yang relevan untuk objek tersebut dan dapat diakses atau dimodifikasi di kemudian hari.

## Mengapa Menggunakan Property?

1. **Menyimpan Data**: Property memungkinkan Anda untuk menyimpan informasi yang berkaitan dengan objek.
2. **Membuat Objek Lebih Deskriptif**: Dengan property, objek dapat menyimpan informasi yang membuatnya lebih informatif dan mudah dipahami.
3. **Mendukung Interaksi**: Property memungkinkan Anda untuk berinteraksi dengan objek dan mengubah statusnya.

## Contoh Kode

Mari kita lihat contoh kode menggunakan property dalam class:

```javascript
class Person {
  constructor(name) {
    this.name = name; // Menginisialisasi property name
  }
}

// Membuat objek dari kelas Person
const ali = new Person("Ali");
console.info(ali); // Output: Person { name: 'Ali' }
console.info(ali.name); // Output: Ali

const budi = new Person("Budi");
console.info(budi); // Output: Person { name: 'Budi' }
```

### Penjelasan Kode

1. **Definisi Class**: `class Person` mendefinisikan kelas `Person`.

2. **Constructor**:

   - `constructor(name)` adalah metode yang dijalankan saat objek baru dibuat.
   - `this.name = name;` menetapkan property `name` dengan nilai yang diberikan saat objek dibuat.

3. **Membuat Objek**:

   - `const ali = new Person("Ali");` membuat objek baru dengan nama "Ali".
   - `const budi = new Person("Budi");` membuat objek baru dengan nama "Budi".

4. **Menampilkan Objek**:
   - `console.info(ali);` menampilkan objek `ali`, yang menunjukkan bahwa ia memiliki property `name` dengan nilai "Ali".
   - `console.info(ali.name);` mengakses dan mencetak nilai property `name` dari objek `ali`, menghasilkan output "Ali".
   - `console.info(budi);` menampilkan objek `budi`, yang menunjukkan bahwa ia memiliki property `name` dengan nilai "Budi".

## Kapan Menggunakan Property?

- Ketika Anda perlu menyimpan informasi yang berkaitan dengan objek.
- Saat Anda ingin objek dapat berinteraksi dan menyimpan status.
- Ketika membangun objek yang lebih kompleks, di mana informasi tambahan diperlukan.

## Kesimpulan

Property adalah elemen penting dalam class di JavaScript yang memungkinkan objek untuk menyimpan informasi dan berfungsi secara lebih interaktif. Dengan menggunakan property, Anda dapat mengatur data yang relevan dan membuat objek lebih deskriptif dan bermanfaat dalam konteks aplikasi Anda.
