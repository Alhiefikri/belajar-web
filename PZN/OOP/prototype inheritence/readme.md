# Penjelasan tentang Prototype Inheritance di JavaScript

## Apa itu Prototype Inheritance?

Prototype inheritance (pewarisan prototipe) di JavaScript adalah cara untuk membuat objek baru berdasarkan objek yang sudah ada. Ini memungkinkan kita untuk berbagi metode dan properti antar objek. Dalam JavaScript, setiap objek memiliki properti yang disebut `prototype`. Ketika kita mencoba mengakses suatu properti yang tidak ada di objek itu sendiri, JavaScript akan mencarinya di objek `prototype` dan seterusnya.

## Mengapa Menggunakan Prototype Inheritance?

1. **Penghematan Memori**: Dengan berbagi metode antara objek, kita tidak perlu menduplikasi kode. Ini menghemat memori.
2. **Organisasi Kode**: Menyusun kode dengan cara ini membuatnya lebih terstruktur dan mudah dipelihara.
3. **Fleksibilitas**: Kita dapat menambahkan atau mengubah perilaku objek di kemudian hari dengan mudah.

## Contoh Kode

Mari kita lihat contoh kode untuk memahami lebih lanjut tentang prototype inheritance:

```javascript
function Employee(name) {
  this.name = name;
}

function Manager(name) {
  Employee.call(this, name); // Memanggil konstruktor Employee
}

// Menggunakan Object.create untuk mengatur prototype
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager; // Memperbaiki referensi konstruktor

// Menambahkan metode ke prototype Manager
Manager.prototype.sayHello = function (name) {
  console.info(`Hello ${name}, my name is Manager ${this.name}`);
};

// Menambahkan metode ke prototype Employee
Employee.prototype.sayHello = function (name) {
  console.info(`Hello ${name}, my name is Employee ${this.name}`);
};

// Membuat objek Employee dan Manager
const employee = new Employee("Alhie");
employee.sayHello("Joko"); // Output: Hello Joko, my name is Employee Alhie

const manager = new Manager("Budi");
manager.sayHello("Joko"); // Output: Hello Joko, my name is Manager Budi

// Menampilkan objek
console.info(employee); // Output: Employee { name: 'Alhie' }
console.info(manager); // Output: Manager { name: 'Budi' }
```

### Penjelasan Kode

1. **Konstruktor `Employee`**: Menciptakan objek `Employee` dengan nama.
2. **Konstruktor `Manager`**: Menciptakan objek `Manager` yang mewarisi dari `Employee`. Kita memanggil `Employee.call(this, name)` untuk memastikan bahwa nama diatur dengan benar.
3. **Mengatur Prototype**: Kita menggunakan `Object.create(Employee.prototype)` untuk membuat `Manager.prototype` mewarisi dari `Employee.prototype`. Ini adalah cara yang benar untuk mengatur pewarisan.
4. **Menambahkan Metode**: Kita menambahkan metode `sayHello` ke `Manager.prototype` dan `Employee.prototype`. Metode ini akan mencetak pesan dengan nama yang diberikan.
5. **Membuat Objek**: Kita membuat objek dari `Employee` dan `Manager`, lalu memanggil metode `sayHello` untuk masing-masing objek.

## Kapan Menggunakan Prototype Inheritance?

- Ketika Anda perlu membuat objek yang memiliki kesamaan tetapi juga memiliki perilaku spesifik.
- Ketika Anda ingin berbagi metode antar banyak objek untuk menghemat memori.
- Saat membangun sistem yang kompleks, seperti aplikasi web, di mana Anda perlu mengorganisir kode secara efisien.

## Kesimpulan

Prototype inheritance di JavaScript adalah alat yang kuat untuk membangun objek dengan cara yang terstruktur dan efisien. Dengan memanfaatkan pewarisan prototipe, Anda dapat membuat kode yang lebih bersih, lebih mudah dipelihara, dan lebih hemat memori.
