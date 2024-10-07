// Fungsi Konstruktor Employee
function Employee(firstName) {
  this.firstName = firstName; // Menetapkan nama depan
  this.sayHello = function (name) {
    console.log(`Hello ${name}, My name is ${this.firstName}`); // Metode untuk menyapa
  };
}

// Fungsi Konstruktor Manager
function Manager(firstName, lastName) {
  this.lastName = lastName; // Menetapkan nama belakang
  Employee.call(this, firstName); // Memanggil konstruktor Employee
}

// Membuat objek dari kelas Manager
const ali = new Manager("Alhie", "Fikri");
console.info(ali); // Menampilkan informasi objek ali
