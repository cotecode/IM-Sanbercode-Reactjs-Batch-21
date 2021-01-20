var readBooksPromise = require("./promise.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

readBooksPromise(10000,books[0]).then(
  function(bukuBaru){
    readBooksPromise(bukuBaru, books[1]).then(
      function(bukuBaru){
        readBooksPromise(bukuBaru, books[2]).then(
          function(bukuBaru){
          }
        ).catch(function(err){
          console.log(err)
        })
      }
    )
  }
)

// let index = 0;
// let time = 10000;

// function execute(time) {
//   readBooksPromise(time, books[index])
//     .then(function (time) {
//       if (time > 0) {
//         index++;
//         execute(time);
//       }
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// }

// execute(time);