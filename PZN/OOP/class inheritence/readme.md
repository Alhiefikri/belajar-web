# Penjelasan tentang Class Inheritance di JavaScript

## Apa itu Class Inheritance?

Class inheritance (pewarisan kelas) adalah mekanisme yang memungkinkan sebuah class (kelas anak) untuk mewarisi sifat dan perilaku dari class lain (kelas induk). Dengan inheritance, Anda dapat membuat hierarki class, di mana kelas anak dapat menggunakan atau mengubah metode dan property dari kelas induknya.

## Mengapa Menggunakan Class Inheritance?

1. **Reusabilitas Kode**: Anda dapat menghindari duplikasi kode dengan mewarisi properti dan metode dari kelas induk.
2. **Organisasi Kode**: Inheritance membantu dalam mengelompokkan class yang memiliki kesamaan perilaku, membuat kode lebih terstruktur.
3. **Fleksibilitas**: Anda dapat mengubah atau menambah perilaku pada kelas anak tanpa memodifikasi kelas induk.

## Contoh Kode

Mari kita lihat contoh kode menggunakan class inheritance:

```javascript
class Employee {
  sayHello(name) {
    console.info(`Hello ${name}, my name is employee ${this.name}`);
  }
}

class Manager extends Employee {
  sayHello(name) {
    console.info(`Hello ${name}, my name is Manager ${this.name}`);
  }
}

// Membuat objek dari kelas Employee
const budi = new Employee();
budi.name = "Budi"; // Menetapkan property name
budi.sayHello("Joko"); // Output: Hello Joko, my name is employee Budi

// Membuat objek dari kelas Manager
const ali = new Manager();
ali.name = "Ali"; // Menetapkan property name
ali.sayHello("Joko"); // Output: Hello Joko, my name is Manager Ali

// Menampilkan objek
console.info(budi); // Output: Employee { name: 'Budi' }
console.info(ali); // Output: Manager { name: 'Ali' }
```

### Penjelasan Kode

1. **Definisi Kelas Induk**: `class Employee` mendefinisikan kelas `Employee` yang memiliki method `sayHello()`. Method ini mencetak pesan sapaan menggunakan property `name`.

2. **Definisi Kelas Anak**:

   - `class Manager extends Employee` mendefinisikan kelas `Manager` yang mewarisi dari `Employee`.
   - Kelas `Manager` memiliki method `sayHello()` sendiri yang mengubah pesan sapaan untuk mencetak "Manager".

3. **Membuat Objek**:

   - `const budi = new Employee();` membuat objek baru dari kelas `Employee` dan menetapkan property `name` menjadi "Budi". Ketika `budi.sayHello("Joko");` dipanggil, outputnya adalah "Hello Joko, my name is employee Budi".
   - `const ali = new Manager();` membuat objek baru dari kelas `Manager` dan menetapkan property `name` menjadi "Ali". Ketika `ali.sayHello("Joko");` dipanggil, outputnya adalah "Hello Joko, my name is Manager Ali".

4. **Menampilkan Objek**:
   - `console.info(budi);` dan `console.info(ali);` mencetak masing-masing objek, menunjukkan property `name` yang telah diatur.

## Kapan Menggunakan Class Inheritance?

- Ketika Anda memiliki beberapa kelas dengan perilaku yang sama, dan Anda ingin berbagi metode dan properti antar kelas.
- Jika Anda ingin memperluas atau mengubah perilaku dari kelas yang sudah ada.
- Ketika Anda membangun sistem yang kompleks dengan hierarki objek.

## Kesimpulan

Class inheritance di JavaScript adalah alat yang kuat untuk membangun objek yang lebih kompleks dan terorganisir. Dengan menggunakan inheritance, Anda dapat mengurangi duplikasi kode, meningkatkan reusabilitas, dan menjaga struktur kode Anda lebih bersih. Ini memungkinkan Anda untuk menciptakan hubungan antara objek yang berbeda, membuat kode lebih mudah dikelola dan diperluas.
