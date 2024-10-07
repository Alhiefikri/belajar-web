### Penjelasan tentang Prototype dalam OOP (Pemrograman Berorientasi Objek)

**Prototype** adalah konsep penting dalam JavaScript yang memungkinkan objek untuk mewarisi properti dan metode dari objek lain. Dalam konteks OOP, prototype memungkinkan kita untuk menghindari duplikasi kode dengan mendefinisikan metode di satu tempat dan berbagi di antara semua instance objek.

#### Contoh Kode

Berikut adalah contoh penggunaan prototype dalam definisi objek `Person`:

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    console.info(`Hello ${name}, my name is ${this.firstName}`);
  };
}

// Menambahkan metode ke prototype Person
Person.prototype.sayBye = function () {
  console.info("Good Bye");
};

Person.prototype.run = function () {
  console.info(`${this.firstName} is running`);
};

// Membuat instance dari Person
const ali = new Person("Ali", "Fikri");
const budi = new Person("Budi", "Muliadi");

console.log(ali); // { firstName: 'Ali', lastName: 'Fikri', sayHello: [Function] }
console.log(budi); // { firstName: 'Budi', lastName: 'Muliadi', sayHello: [Function] }
```

#### Penjelasan Kode

1. **Konstruktor `Person`**: Ini adalah fungsi yang digunakan untuk membuat objek baru. Setiap objek yang dibuat dengan `new Person` memiliki properti `firstName` dan `lastName`, serta metode `sayHello`.

2. **Prototype**: Metode `sayBye` dan `run` ditambahkan ke `Person.prototype`. Ini berarti semua objek `Person` (seperti `ali` dan `budi`) dapat mengakses metode ini tanpa mengulangi definisi metode tersebut di dalam konstruktor.

3. **Instance**: `ali` dan `budi` adalah dua instance dari objek `Person`, yang masing-masing memiliki properti dan dapat menggunakan metode yang ditentukan di prototype.

### Kapan Materi Ini Sering Digunakan

Konsep prototype sering digunakan dalam:

1. **Inheritance (Pewarisan)**: Prototype memungkinkan objek untuk mewarisi dari objek lain, memudahkan pembuatan hierarki objek yang kompleks.

2. **Optimalisasi Memori**: Dengan menggunakan prototype, kita dapat menghemat memori karena metode hanya didefinisikan satu kali di prototype daripada di setiap instance.

3. **Pengembangan Framework dan Library**: Banyak framework JavaScript (seperti jQuery) menggunakan prototyping untuk menambah fungsi pada objek bawaan, membuatnya lebih kuat.

### README yang Mudah Dipahami

````markdown
# Prototype dalam OOP di JavaScript

## Apa itu Prototype?

Prototype adalah fitur dalam JavaScript yang memungkinkan objek untuk berbagi metode dan properti. Ini penting untuk efisiensi dan pengorganisasian kode.

## Mengapa Menggunakan Prototype?

- **Penghematan Memori**: Metode disimpan di satu tempat, bukan di setiap instance objek.
- **Pewarisan**: Memungkinkan objek untuk mewarisi sifat dari objek lain, sehingga lebih mudah untuk membuat hierarki objek.

## Contoh Kode

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    console.info(`Hello ${name}, my name is ${this.firstName}`);
  };
}

Person.prototype.sayBye = function () {
  console.info("Good Bye");
};

Person.prototype.run = function () {
  console.info(`${this.firstName} is running`);
};

const ali = new Person("Ali", "Fikri");
const budi = new Person("Budi", "Muliadi");

ali.sayHello("John"); // "Hello John, my name is Ali"
ali.sayBye(); // "Good Bye"
ali.run(); // "Ali is running"
```
````

## Kapan Digunakan?

Prototype sering digunakan dalam:

- Membangun aplikasi yang memerlukan objek kompleks.
- Mengembangkan framework dan library JavaScript.
- Menerapkan prinsip OOP dalam JavaScript.

## Kesimpulan

Dengan memahami prototype, Anda dapat membuat kode yang lebih efisien, terorganisir, dan mudah dirawat.
