class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName; // Menginisialisasi property firstName
    this.lastName = lastName; // Menginisialisasi property lastName
  }

  // Getter untuk fullName
  get fullName() {
    return `${this.firstName} ${this.lastName}`; // Mengembalikan nama lengkap
  }

  // Setter untuk fullName
  set fullName(value) {
    const result = value.split(" "); // Memisahkan nama lengkap
    this.firstName = result[0]; // Mengatur firstName
    this.lastName = result[1]; // Mengatur lastName
  }
}

// Membuat objek dari kelas Person
const ali = new Person("Alhie", "Fikri");
console.info(ali); // Output: Person { firstName: 'Alhie', lastName: 'Fikri' }
console.info(ali.fullName); // Output: Alhie Fikri

// Mengubah nama lengkap menggunakan setter
ali.fullName = "Budi Nugraha";
console.info(ali); // Output: Person { firstName: 'Budi', lastName: 'Nugraha' }
