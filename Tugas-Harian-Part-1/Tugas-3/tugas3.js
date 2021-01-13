// soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var result = kataPertama
  .concat(" ")
  .concat(kataKedua.charAt(0).toUpperCase() + kataKedua.substr(1).toLowerCase())
  .concat(" ")
  .concat(kataKetiga)
  .concat(" ")
  .concat(kataKeempat.toUpperCase());

console.log(result);

// soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var intKataPertama = parseInt(kataPertama);
var intKataKedua = parseInt(kataKedua);
var intKataKetiga = parseInt(kataKetiga);
var intKataKeempat = parseInt(kataKeempat);

console.log(intKataPertama + intKataKedua + intKataKetiga + intKataKeempat);

// soal 3
var kalimat = "wah javascript itu keren sekali";

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14); // do your own!
var kataKetiga = kalimat.substring(15, 18); // do your own!
var kataKeempat = kalimat.substring(19, 24); // do your own!
var kataKelima = kalimat.substring(25, 31); // do your own!

console.log("Kata Pertama: " + kataPertama);
console.log("Kata Kedua: " + kataKedua);
console.log("Kata Ketiga: " + kataKetiga);
console.log("Kata Keempat: " + kataKeempat);
console.log("Kata Kelima: " + kataKelima);

// soal 4
var nilai = 79;

if (nilai >= 80) {
  console.log("indeksnya A");
} else if (nilai >= 70 && nilai < 80) {
  console.log("indeksnya B");
} else if (nilai >= 60 && nilai < 70) {
  console.log("indeksnya C");
} else if (nilai >= 50 && nilai < 60) {
  console.log("indeksnya D");
} else {
  console.log("indeksnya E");
}

// soal 5
var tanggal = 14;
var bulan = 11;
var tahun = 2000;

switch (bulan) {
  case 1: {
    bulan = "Januari";
    break;
  }
  case 2: {
    bulan = "Februari";
    break;
  }
  case 3: {
    bulan = "Maret";
    break;
  }
  case 4: {
    bulan = "April";
    break;
  }
  case 5: {
    bulan = "Mei";
    break;
  }
  case 6: {
    bulan = "Juni";
    break;
  }
  case 7: {
    bulan = "Juli";
    break;
  }
  case 8: {
    bulan = "Agustus";
    break;
  }
  case 9: {
    bulan = "September";
    break;
  }
  case 10: {
    bulan = "Oktober";
    break;
  }
  case 11: {
    bulan = "November";
    break;
  }
  case 12: {
    bulan = "Desember";
    break;
  }
  default: {
    console.log("bulan tidak ditemukan");
  }
}

console.log(tanggal + " " + bulan + " " + tahun);
