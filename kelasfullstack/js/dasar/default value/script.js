function lemparDadu(sisi) {
  return Math.floor(Math.random() * sisi * 1);
}

// Menggunakan default value
function lemparDadu(sisi = 6) {
  return Math.floor(Math.random() * sisi * 1);
}

function sapa(name = "User", msg = "Bekerja") {
  console.log(`${name} ${msg}`);
}
