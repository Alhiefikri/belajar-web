# Penjelasan tentang Super Constructor di JavaScript

## Apa itu Super Constructor?

Super constructor adalah metode yang digunakan dalam kelas anak (subclass) untuk memanggil constructor dari kelas induk (superclass). Dalam JavaScript, Anda menggunakan kata kunci `super()` untuk memanggil constructor dari kelas induk. Ini diperlukan ketika Anda ingin menginisialisasi properti yang diwarisi dari kelas induk saat membuat instance baru dari kelas anak.

## Mengapa Menggunakan Super Constructor?

1. **Menginisialisasi Properti Induk**: Anda perlu menggunakan `super()` untuk memastikan bahwa semua properti yang didefinisikan dalam constructor kelas induk diinisialisasi dengan benar.
2. **Memastikan Pewarisan yang Benar**: Dengan memanggil constructor kelas induk, Anda menjaga integritas objek dan memastikan bahwa semua fitur dari kelas induk tersedia dalam kelas anak.
3. **Mendukung Ekstensi Fungsionalitas**: Anda dapat menambahkan lebih banyak logika atau properti dalam kelas anak setelah memanggil `super()`.

## Contoh Kode

Mari kita lihat contoh kode menggunakan super constructor:

```javascript
class Employee {
  constructor(firstName) {
    this.firstName = firstName; // Menginisialisasi property firstName
  }

  sayHello(name) {
    console.info(`Hello ${name}, my name is employee ${this.firstName}`);
  }
}

class Manager extends Employee {
  constructor(firstName, lastName) {
    super(firstName); // Memanggil constructor kelas Employee
    this.lastName = lastName; // Menginisialisasi property lastName
  }

  sayHello(name) {
    console.info(
      `Hello ${name}, my name is Manager ${this.firstName} ${this.lastName}`
    ); // Mengubah pesan sapaan
  }
}

// Membuat objek dari kelas Employee
const budi = new Employee("Budi");
budi.sayHello("Joko"); // Output: Hello Joko, my name is employee Budi

// Membuat objek dari kelas Manager
const ali = new Manager("Alhie", "Fikri");
ali.sayHello("Joko"); // Output: Hello Joko, my name is Manager Alhie Fikri

// Menampilkan objek
console.info(budi); // Output: Employee { firstName: 'Budi' }
console.info(ali); // Output: Manager { firstName: 'Alhie', lastName: 'Fikri' }
```

### Penjelasan Kode

1. **Definisi Kelas Induk**: `class Employee` mendefinisikan kelas `Employee` dengan constructor yang menerima `firstName` dan menyimpannya sebagai property.

2. **Definisi Kelas Anak**:

   - `class Manager extends Employee` mendefinisikan kelas `Manager` yang mewarisi dari `Employee`.
   - Constructor `Manager` menerima `firstName` dan `lastName`. `super(firstName)` memanggil constructor dari `Employee`, sehingga `firstName` diinisialisasi dengan benar. Kemudian, `this.lastName = lastName;` menetapkan property `lastName`.

3. **Method**:

   - `sayHello(name)` dalam kelas `Manager` mengubah pesan sapaan untuk menampilkan nama lengkap (firstName dan lastName).

4. **Membuat Objek**:

   - `const budi = new Employee("Budi");` membuat objek dari kelas `Employee`.
   - `const ali = new Manager("Alhie", "Fikri");` membuat objek dari kelas `Manager`, yang menginisialisasi kedua property (`firstName` dan `lastName`).

5. **Menampilkan Objek dan Memanggil Method**:
   - `budi.sayHello("Joko");` menghasilkan output "Hello Joko, my name is employee Budi".
   - `ali.sayHello("Joko");` menghasilkan output "Hello Joko, my name is Manager Alhie Fikri".
   - `console.info(budi);` dan `console.info(ali);` mencetak masing-masing objek dengan property yang telah diatur.

## Kapan Menggunakan Super Constructor?

- Saat Anda membangun kelas anak yang memerlukan properti dari kelas induk.
- Ketika Anda ingin mempertahankan dan menginisialisasi sifat dan metode dari kelas induk dalam kelas anak.
- Jika Anda ingin memperluas fungsionalitas dari kelas induk tanpa mengubah kelas tersebut.

## Kesimpulan

Super constructor adalah fitur penting dalam pemrograman berorientasi objek yang memungkinkan pewarisan yang benar di JavaScript. Dengan menggunakan `super()`, Anda dapat memastikan bahwa semua properti dari kelas induk diinisialisasi dengan benar saat membuat instance dari kelas anak. Ini membantu menjaga integritas objek dan memudahkan pengembangan sistem yang kompleks.
