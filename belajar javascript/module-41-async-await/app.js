function checkStock(product) {
  return new Promise((resolve, reject) => {
    console.log(`Checking stock for ${product}`);

    // simulasi mengecek stok (butuh 2 detik)
    setTimeout(() => {
      const stockAvailable = false; // Simulasi kondisi stok

      if (stockAvailable) {
        resolve(`${product} is available in stock`);
      } else {
        reject(`${product} is out of stock`);
      }
    }, 2000); // Menambahkan delay 2 detik
  });
}

async function main() {
  try {
    const data = await checkStock("Laptop");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

main();

// // Menggunakan Promise
// checkStock("laptop")
//   .then((message) => {
//     console.log(message); // Menampilkan pesan jika sukses
//   })
//   .catch((error) => {
//     console.error(error); // Menampilkan error jika ada
//   });
