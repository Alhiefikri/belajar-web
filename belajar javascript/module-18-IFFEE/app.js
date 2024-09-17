// IIFE (Immediately Invoked FUnction Expression)

//  IIFE adalah function yang dipanggil langsung setelah dibuat. ini berguna untuk mengisolasi variable dan memncegahnya mengganggu kode lain.

(function () {
  console.log("IIFE dipanggil");
})();

const appConfig = (function () {
  const apiKey = "1234";
  const apiUrl = "https://api.example.com";

  return {
    getAPiKey: function () {
      return apiKey;
    },
    getAPiURL: function () {
      return apiUrl;
    },
  };
})();

console.log(appConfig.getAPiKey());
console.log(appConfig.getAPiURL());
