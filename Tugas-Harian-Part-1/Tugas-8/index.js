var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];

readBooks(10000, books[0], function (bukuBaru) {
  readBooks(bukuBaru, books[1], function (bukuBaru1) {
    readBooks(bukuBaru1, books[2], function (bukuBaru2) {
      readBooks(bukuBaru2, books[3], function (bukuBaru3) {
        return bukuBaru3;
      });
    });
  });
});
