const person = {
  firstName: "Alhie", // Properti firstName
  lastName: "Fikri", // Properti lastName
  address: {
    // Objek nested dengan informasi alamat
    country: "Indonesia",
    city: "Banggai",
  },
  hobbies: ["Coding", "Game", "Traveling"], // Array hobi
};

// Mengubah objek person menjadi string JSON
const json = JSON.stringify(person);
console.info(json); // Menampilkan string JSON dari objek person

// Mengubah array yang berisi objek person menjadi string JSON
const jsonArray = JSON.stringify([person]);
console.info(jsonArray); // Menampilkan string JSON dari array objek

// Mengubah string JSON kembali menjadi objek JavaScript
const jsonObject = JSON.parse(json);
console.info(jsonObject); // Menampilkan objek yang dihasilkan dari string JSON
