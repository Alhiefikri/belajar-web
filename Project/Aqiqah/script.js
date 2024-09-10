const rootElement = document.querySelector(":root");
const audioIconWrapper = document.querySelector(".audio-icon-wrapper");
const audioIcon = document.querySelector(".audio-icon-wrapper i");
const song = document.querySelector("#song");
let isPlaying = false;

// Menonaktifkan scroll
function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };

  rootElement.style.scrollBehavior = "auto";
}
1;

// Mengaktifkan scroll dan memulai audio
function enableScroll() {
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = "smooth";
  playAudio();
}

// Memutar audio
function playAudio() {
  audioIconWrapper.style.display = "flex";
  song.play();
  isPlaying = true;
}

// Menangani klik pada ikon audio
audioIconWrapper.onclick = function () {
  if (isPlaying) {
    song.pause();
    audioIcon.classList.remove("bi-disc");
    audioIcon.classList.add("bi-pause-circle");
  } else {
    song.play();
    audioIcon.classList.add("bi-disc");
    audioIcon.classList.remove("bi-pause-circle");
  }

  isPlaying = !isPlaying;
};

// Menonaktifkan scroll saat halaman dimuat
disableScroll();

// Menampilkan Nama dari URL dan Mengisi Input
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("n") || ""; // Mengambil nama dari parameter url
const pronoun = urlParams.get("p") || "Bapak/Ibu/Saudara/i"; // Mengambil kata ganti dari parameter URL
const namaContainer1 = document.querySelector(".hero p span");
const namaContainer2 = document.querySelector(".hero h4 span");
namaContainer1.innerText = `${pronoun}`.replace(/ ,$/, "");
namaContainer2.innerText = `${nama}`.replace(/ ,$/, ","); // Menampilkan nama dan kata ganti di elemen

document.querySelector("#nama").value = nama; // Mengiis nilai input dengan nama
