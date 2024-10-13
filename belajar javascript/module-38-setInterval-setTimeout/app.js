// console.log("Mulai");
// setTimeout(() => {
//   console.log("kode ini dijeda 3 detik");
// }, 3000);
// console.log("Selesai, akan muncul sebelum delay");
let timer = 0;
const intervalId = setInterval(() => {
  timer += 1;
  console.log(`Timer: ${timer} detik`);

  if (timer == 5) {
    clearInterval(intervalId);
    console.log("Timer Berhenti");
  }
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
