const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nama = ["alhie", "Bimo", "Cici", "Delila", "Felix"];

const Campuran = [...angka, ...nama];

const user = {
  name: "alhie",
  email: "alhiefikri@example.com",
};

const credential = {
  password: "password",
  token: "2374837jh3jh384734",
};

const userBaru = { ...user, ...credential };
