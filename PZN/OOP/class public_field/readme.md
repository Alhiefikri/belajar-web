# Penjelasan tentang Public Field di JavaScript (Dengan Analogi)

## Apa itu Public Field?

Public field adalah cara untuk mendefinisikan properti dalam sebuah kelas yang dapat diakses secara langsung oleh semua instance dari kelas tersebut. Dalam JavaScript, Anda dapat mendeklarasikan public field langsung di dalam tubuh kelas, di luar constructor. Public field bersifat publik, artinya dapat diakses dari luar kelas.

## Analogi Sederhana

Bayangkan Anda memiliki sebuah **kelas di sekolah** yang memiliki beberapa **murid**. Setiap murid memiliki nama depan (first name), nama belakang (last name), dan saldo (balance) yang menunjukkan jumlah uang saku mereka.

- **Nama Depan dan Nama Belakang**: Ini adalah informasi dasar tentang setiap murid.
- **Saldo**: Ini adalah informasi yang menunjukkan berapa banyak uang saku yang dimiliki murid tersebut.

Ketika Anda membuat murid baru, Anda ingin dapat mengakses semua informasi tersebut dengan mudah.

### Dalam Analogi:

- **Kelas**: Kelas yang mendefinisikan murid.
- **Murid**: Instance dari kelas yang menyimpan informasi murid.
- **Informasi Murid**: Public fields yang dapat diakses secara langsung.

### Di dalam kode:

```javascript
class Customer {
  firstName; // Public field untuk nama depan
  lastName; // Public field untuk nama belakang
  balance = 0; // Public field dengan nilai default 0

  constructor(firstName, lastName) {
    this.firstName = firstName; // Mengatur nama depan saat membuat objek
    this.lastName = lastName; // Mengatur nama belakang saat membuat objek
  }

  sayHello() {
    console.info(`Hello, my name is ${this.firstName} ${this.lastName}.`);
  }
}

// Membuat objek dari kelas Customer
const ali = new Customer("Alhie", "Fikri");
console.info(ali); // Output: Customer { firstName: 'Alhie', lastName: 'Fikri', balance: 0 }
```

### Penjelasan Kode

1. **Definisi Kelas**: `class Customer` mendefinisikan kelas yang menyimpan informasi tentang pelanggan.

2. **Public Fields**:

   - `firstName` dan `lastName` dideklarasikan sebagai public fields yang menyimpan nama depan dan belakang pelanggan.
   - `balance` dideklarasikan dengan nilai default `0`.

3. **Constructor**:

   - `constructor(firstName, lastName)` digunakan untuk mengatur nilai `firstName` dan `lastName` saat objek `Customer` dibuat.

4. **Metode `sayHello`**:

   - Metode ini mencetak salam dengan menggunakan nama lengkap pelanggan.

5. **Membuat Objek**:
   - `const ali = new Customer("Alhie", "Fikri");` membuat objek baru dari kelas `Customer`.
   - `console.info(ali);` menunjukkan semua public fields dari objek `ali`, termasuk `firstName`, `lastName`, dan `balance`.

## Kapan Menggunakan Public Field?

- Ketika Anda ingin menyimpan informasi yang dapat diakses secara langsung dari luar kelas tanpa perlu menggunakan getter atau setter.
- Jika Anda ingin menyederhanakan kode dengan mengurangi penggunaan constructor untuk mendeklarasikan properti yang hanya menyimpan nilai.
- Saat Anda ingin memiliki nilai default untuk properti, seperti saldo awal yang biasanya dimulai dari nol.

## Contoh Kasus Penggunaan

Public field sering digunakan dalam berbagai aplikasi, termasuk:

1. **Aplikasi E-commerce**: Di mana Anda mungkin memiliki kelas untuk produk atau pelanggan yang menyimpan informasi dasar yang perlu diakses secara langsung.

2. **Sistem Manajemen Pengguna**: Kelas yang menyimpan data pengguna, seperti nama, email, dan status pengguna, sehingga informasi ini dapat diakses dan dimodifikasi dengan mudah.

3. **Game**: Dalam game, Anda bisa memiliki kelas untuk karakter yang menyimpan atribut seperti nama, kesehatan, dan level, yang dapat diakses secara langsung selama permainan.

4. **Formulir Pengguna**: Dalam aplikasi web, public fields dapat digunakan untuk menyimpan informasi pengguna yang dimasukkan dalam formulir, sehingga dapat diakses dan diproses dengan mudah.

## Kesimpulan

Public field di JavaScript adalah cara yang sederhana dan efektif untuk mendefinisikan properti dalam kelas. Dengan menggunakan public field, Anda dapat menyimpan informasi yang dapat diakses secara langsung oleh semua instance dari kelas tersebut, membuat kode Anda lebih bersih dan mudah dipahami. Analogi kelas dan murid membantu menjelaskan bagaimana public field berfungsi dalam menyimpan dan mengakses informasi dengan cara yang intuitif. Penggunaan public field dapat meningkatkan efisiensi dalam pengembangan aplikasi, terutama ketika menyimpan data dasar yang sering diakses.
