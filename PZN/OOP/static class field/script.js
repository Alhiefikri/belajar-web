class Configuration {
  static name = "Belajar Javascript OOP";
  static version = 1.0;
  static author = "Alhiefikri";
}

const config = new Configuration();
console.info(config);

Configuration.author = "alhie fikri";

console.info(Configuration.name);
console.info(Configuration.version);
console.info(Configuration.author);
