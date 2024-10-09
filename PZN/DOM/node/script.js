// Mengambil elemen dengan ID "menu"
const menu = document.getElementById("menu");
console.info(menu); // Menampilkan elemen menu

// Menampilkan semua child nodes dari elemen menu
console.info(menu.childNodes); // Menampilkan semua node anak dari menu

// Mengambil elemen dengan ID "second"
const second = document.getElementById("second");
console.info(second); // Menampilkan elemen kedua

// Node Property
console.info(second.textContent); // Menampilkan teks yang ada dalam elemen "second"

// Mengakses sibling dari elemen "second"
console.info(second.previousSibling.previousSibling); // Node sebelum "second"
console.info(second.nextSibling.nextSibling); // Node setelah "second"

// Node Method
menu.removeChild(document.getElementById("first")); // Menghapus elemen dengan ID "first" dari menu
menu.removeChild(document.getElementById("second")); // Menghapus elemen dengan ID "second" dari menu
menu.removeChild(document.getElementById("third")); // Menghapus elemen dengan ID "third" dari menu
