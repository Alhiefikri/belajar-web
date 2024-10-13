# README: Konsep Encapsulation dalam OOP (Object-Oriented Programming)

## Pendahuluan

Encapsulation adalah salah satu prinsip dasar dalam pemrograman berorientasi objek (OOP) yang bertujuan untuk membatasi akses ke data dan metode dari sebuah objek. Dengan menggunakan encapsulation, kita dapat melindungi data dari pengubahan yang tidak diinginkan dan memastikan bahwa data hanya dapat diakses melalui metode tertentu.

## Kapan Kode Ini Dipakai

Kode ini digunakan dalam situasi di mana Anda ingin membuat objek yang memiliki data sensitif atau penting yang tidak boleh diubah secara langsung oleh kode luar. Contohnya adalah aplikasi perbankan, di mana saldo rekening bank harus dijaga kerahasiaannya dan hanya dapat diubah melalui metode yang terkontrol.

## Penjelasan Kode

Berikut adalah kode contoh yang menunjukkan implementasi encapsulation dalam JavaScript:

```javascript
class BankAccount {
  #balance; // Private property menggunakan private fields (ES2022)

  constructor(owner, balance) {
    this.owner = owner; // Property publik
    this.#balance = balance; // Property privat
  }

  deposit(amount) {
    // Menambahkan jumlah ke saldo
    this.#balance = this.#balance + amount;
  }

  getBalance() {
    // Menampilkan saldo saat ini
    console.log(`Saldo: ${this.#balance}`);
  }
}

// Membuat objek akunBank
let akunAlhie = new BankAccount("Alhie", 1000);
akunAlhie.deposit(500); // Menyetor uang
akunAlhie.getBalance(); // Menampilkan saldo yang baru
```

### Komentar Kode

1. **Private Field `#balance`**:

   - Dengan menggunakan simbol `#`, kita mendefinisikan property `#balance` sebagai privat. Ini berarti bahwa property ini tidak dapat diakses dari luar kelas `BankAccount`.

2. **Constructor**:

   - Metode `constructor` digunakan untuk membuat instance baru dari kelas `BankAccount`. Di sini, kita menetapkan pemilik akun dan saldo awal.

3. **Metode `deposit`**:

   - Metode ini digunakan untuk menambahkan sejumlah uang ke saldo akun. Akses ke saldo dilakukan secara aman melalui metode ini.

4. **Metode `getBalance`**:
   - Metode ini menampilkan saldo akun saat ini. Pengguna hanya bisa melihat saldo, tetapi tidak bisa mengubahnya langsung.

### Analogi Sederhana

Bayangkan Anda memiliki brankas di rumah untuk menyimpan uang Anda. Anda tidak ingin orang lain bisa membuka brankas dan mengambil uang sesuka hati. Jadi, Anda hanya memberikan kunci kepada diri sendiri dan satu atau dua orang tepercaya. Dengan cara ini, hanya Anda yang dapat mengakses dan mengubah jumlah uang di dalam brankas. Inilah cara kerja encapsulation dalam pemrograman.

## Kesimpulan

Encapsulation adalah teknik penting dalam OOP yang membantu melindungi data dari akses yang tidak diinginkan. Dengan menggunakan property privat dan metode untuk mengubah dan mengakses data, kita dapat menjaga integritas objek. Penggunaan encapsulation meningkatkan keamanan dan menjaga kode tetap terorganisir dengan baik.
