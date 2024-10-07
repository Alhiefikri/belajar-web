# Penjelasan tentang Class Method di JavaScript

## Apa itu Class Method?

Class method adalah fungsi yang didefinisikan di dalam sebuah class dan dapat dipanggil pada instance objek dari class tersebut. Method memungkinkan objek untuk melakukan tindakan atau berperilaku dengan cara tertentu. Dalam JavaScript, Anda mendefinisikan method di dalam class tanpa menggunakan kata kunci `function`.

## Mengapa Menggunakan Class Method?

1. **Menentukan Perilaku Objek**: Method memungkinkan Anda untuk menentukan tindakan yang dapat dilakukan oleh objek.
2. **Membuat Kode Lebih Terstruktur**: Dengan menggunakan method, Anda dapat mengelompokkan logika terkait dalam satu tempat, membuat kode lebih mudah dipahami.
3. **Reusabilitas**: Anda dapat memanggil method dari banyak objek yang dibuat dari class yang sama, tanpa harus menduplikasi kode.

## Contoh Kode

Mari kita lihat contoh kode menggunakan class method:

```javascript
class Person {
  constructor(name) {
    this.name = name; // Menginisialisasi property name
  }

  sayHello(name) {
    console.info(`Hello ${name}, my name is ${this.name}`); // Menyapa dengan nama
  }
}

// Membuat objek dari kelas Person
const ali = new Person("Ali");
console.info(ali); // Output: Person { name: 'Ali' }
ali.sayHello("Joko"); // Output: Hello Joko, my name is Ali

const budi = new Person("Budi");
console.info(budi); // Output: Person { name: 'Budi' }
budi.sayHello("Joko"); // Output: Hello Joko, my name is Budi
```

### Penjelasan Kode

1. **Definisi Class**: `class Person` mendefinisikan kelas `Person`.

2. **Constructor**:

   - `constructor(name)` adalah metode yang dijalankan saat objek baru dibuat.
   - `this.name = name;` menetapkan property `name` dengan nilai yang diberikan saat objek dibuat.

3. **Method**:

   - `sayHello(name)` adalah method yang didefinisikan di dalam class. Method ini mengambil parameter `name` dan mencetak pesan sapaan menggunakan `console.info()`.

4. **Membuat Objek**:

   - `const ali = new Person("Ali");` membuat objek baru dengan nama "Ali".
   - `const budi = new Person("Budi");` membuat objek baru dengan nama "Budi".

5. **Menampilkan Objek dan Memanggil Method**:
   - `console.info(ali);` menampilkan objek `ali`.
   - `ali.sayHello("Joko");` memanggil method `sayHello` dari objek `ali`, menghasilkan output "Hello Joko, my name is Ali".
   - `console.info(budi);` menampilkan objek `budi`.
   - `budi.sayHello("Joko");` memanggil method `sayHello` dari objek `budi`, menghasilkan output "Hello Joko, my name is Budi".

## Kapan Menggunakan Class Method?

- Ketika Anda ingin menentukan perilaku atau tindakan yang dapat dilakukan oleh objek.
- Jika Anda memiliki logika yang terkait dengan objek dan ingin mengelompokkannya dalam satu tempat.
- Saat Anda ingin meningkatkan reusabilitas kode dengan mendefinisikan fungsi yang dapat dipanggil oleh banyak instance objek.

## Kesimpulan

Class method di JavaScript adalah cara yang efisien untuk mendefinisikan tindakan yang dapat dilakukan oleh objek. Dengan menggunakan method, Anda dapat membuat objek yang lebih interaktif dan fungsional, serta menjaga kode Anda terorganisir dan mudah dipahami. Method adalah bagian integral dari pemrograman berorientasi objek yang membantu mendefinisikan perilaku objek dengan jelas.
