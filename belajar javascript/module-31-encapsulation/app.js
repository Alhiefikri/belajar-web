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
