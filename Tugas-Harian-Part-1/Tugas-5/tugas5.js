console.log("=== SOAL 1 ===");
// soal 1
function halo() {
  return "Halo Sanbers!";
}

console.log(halo());

console.log("=== SOAL 2 ===");
// soal 2
var num1 = 12;
var num2 = 4;

function kalikan() {
  return num1 * num2;
}

var hasilKali = kalikan(num1, num2);
console.log(hasilKali);

console.log("=== SOAL 3 ===");
// soal 3
var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

function introduce(name, age, address, hobby) {
  return (
    "Nama saya " +
    name +
    ", umur saya " +
    age +
    " tahun, alamat saya di " +
    address +
    ", dan saya punya hobby yaitu " +
    hobby +
    "!"
  );
}

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);

console.log("=== SOAL 4 ===");
// soal 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992];
var objDaftarPeserta = {
  nama: arrayDaftarPeserta[0],
  "jenis kelamin": arrayDaftarPeserta[1],
  hobi: arrayDaftarPeserta[2],
  "tahun lahir": arrayDaftarPeserta[3],
};

console.log(objDaftarPeserta);

console.log("=== SOAL 5 ===");
// soal 5
var fruits = [
  { nama: "strawberry", warna: "merah", "ada bijinya": "tidak", harga: 9000 },
  { nama: "jeruk", warna: "oranye", "ada bijinya": "ada", harga: 8000 },
  {
    nama: "Semangka",
    warna: "Hijau & Merah",
    "ada bijinya": "ada",
    harga: 10000,
  },
  { nama: "Pisang", warna: "Kuning", "ada bijinya": "tidak", harga: 5000 },
];

console.log(fruits[0]);

console.log("=== SOAL 6 ===");
// soal 6
var dataFilm = [];

function addDataFilm(nama, durasi, genre, tahun) {
  return {
    nama: nama,
    durasi: durasi,
    genre: genre,
    tahun: tahun,
  };
}

dataFilm.push(addDataFilm("LOTR", "2 jam", "action", "1999"));
dataFilm.push(addDataFilm("avenger", "2 jam", "action", "2019"));
dataFilm.push(addDataFilm("spiderman", "2 jam", "action", "2004"));
dataFilm.push(addDataFilm("juon", "2 jam", "horror", "2004"));

console.log(dataFilm);
