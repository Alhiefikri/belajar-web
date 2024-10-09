# README: Node, Node Property, dan Node Method dalam DOM di JavaScript

## Pengertian

Dalam konteks DOM, **Node** adalah representasi dari setiap elemen dalam struktur dokumen. Setiap elemen, atribut, dan teks dianggap sebagai node. Ada beberapa jenis node, tetapi yang paling umum adalah elemen node (misalnya, `<div>`, `<p>`, dll.).

## Fungsi Code

```javascript
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
```

## Kapan Metode Ini Dipakai

Metode dan properti pada Node sering digunakan saat kita perlu:

- Mengakses elemen yang berhubungan dengan elemen lainnya (sibling).
- Mengambil teks yang ada dalam elemen.
- Menghapus elemen dari DOM ketika tidak lagi diperlukan.

## Biasanya Metode Ini Dipakai Dalam Real Projects Apa

- **Menu Navigasi**: Saat kita ingin mengubah atau menghapus item dalam menu.
- **Aplikasi Berbasis Daftar**: Untuk mengelola item dalam daftar, seperti menambah atau menghapus tugas.
- **Pengeditan Konten Dinamis**: Misalnya, dalam aplikasi blog atau forum yang memungkinkan pengguna untuk mengedit atau menghapus komentar.

## Analogi Sederhana

Bayangkan sebuah pohon. Setiap cabang adalah node, dan daun di setiap cabang adalah child node. Jika kita mengambil cabang tertentu, kita bisa melihat semua daun (child nodes) yang ada di cabang tersebut. Ketika kita menggunakan `removeChild`, itu seperti memotong daun dari cabang tanpa merusak cabangnya.

## Kesimpulan

Node, beserta properti dan metode yang terkait, adalah bagian penting dari manipulasi DOM di JavaScript. Dengan memahami cara kerja node, kita dapat lebih mudah mengelola dan mengubah struktur halaman web, menciptakan pengalaman pengguna yang lebih baik dan interaktif.
