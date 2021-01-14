// soal 1
var increment = 2;

console.log("LOOPING PERTAMA");
while (increment <= 20) {
  console.log(increment + " - I love coding");
  increment += 2;
}

var decrement = 20;

console.log("LOOPING KEDUA");
while (decrement >= 2) {
  console.log(decrement + " - I will become a frontend developer");
  decrement -= 2;
}

console.log("\n");

//soal 2
for (var i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 2 === 1) {
    console.log(i + " - I Love Coding");
  } else if (i % 2 === 0) {
    console.log(i + " - Berkualitas");
  } else if (i % 2 === 1) {
    console.log(i + " - Santai");
  }
}

console.log("\n");

// soal 3
var s = "";

for (var i = 0; i < 7; i++) {
  for (var j = 0; j <= i; j++) {
    s += "#";
  }
  s += "\n";
}

console.log(s);

// soal 4
var kalimat = "saya sangat senang belajar javascript";
console.log(kalimat.split(" "));

console.log("\n");

// soal 5
var daftarBuah = [
  "2. Apel",
  "5. Jeruk",
  "3. Anggur",
  "4. Semangka",
  "1. Mangga",
];
daftarBuah.sort();

for (var daftarBuahIndex = 0;daftarBuahIndex < daftarBuah.length;daftarBuahIndex++) {
  console.log(daftarBuah[daftarBuahIndex]);
}
