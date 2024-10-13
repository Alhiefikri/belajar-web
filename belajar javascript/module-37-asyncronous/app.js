// Synchronous
console.log("start"); // Menampilkan "start" di konsol
for (let i = 0; i < 1000; i++) {
  // Mengulangi dari 0 hingga 999
  console.log(i); // Menampilkan nilai i di konsol
}
console.log("End"); // Menampilkan "End" di konsol

// Asynchronous
console.log("start"); // Menampilkan "start" di konsol
setTimeout(() => {
  // Menjalankan fungsi setelah delay
  console.log("ini adalah Asynchronous code"); // Menampilkan pesan setelah 5 detik
}, 5000);
console.log("end"); // Menampilkan "end" di konsol
