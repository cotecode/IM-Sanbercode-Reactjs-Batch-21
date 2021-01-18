// soal 1
/*
    Keliling lingkaran = 2*phi*r
    Luas Lingkaran = phi * r^2

*/
console.log("---- soal 1 ----");

const phi = 3.14;
// keliling
const kelilingLingkaran = (r) => {
  return 2 * phi * r;
};

console.log(`Keliling lingkaran = ${kelilingLingkaran(7)} cm`);

// luas
const luasLingkaran = (r) => {
  return phi * Math.pow(r, 2);
};
console.log(`Luas lingkaran = ${luasLingkaran(7)} cm`);

console.log();

// soal 2
console.log("---- soal 2 ----");
let kalimat = "";

const tambahKalimat = (newKalimat) => {
  kalimat += `${newKalimat} `;
};

tambahKalimat("saya");
tambahKalimat("adalah");
tambahKalimat("seorang");
tambahKalimat("frontend");
tambahKalimat("developer");

console.log(kalimat);
console.log();

// soal 3
console.log("---- soal 3 ----");
const newFunction = function literal(firstName, lastName) {
  return {
    firstName,
    lastName,
    fullName: function () {
      console.log(`${firstName} ${lastName}`);
    },
  };
};

//Driver Code
newFunction("William", "Imoh").fullName();
console.log();

// soal 4
console.log("---- soal 4 ----");
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!",
};

const { firstName, lastName, destination, occupation, spell } = newObject;

// Driver code
console.log(firstName, lastName, destination, occupation, spell);
console.log();

// soal 5
console.log("---- soal 5 ----");
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];

console.log(combined);
