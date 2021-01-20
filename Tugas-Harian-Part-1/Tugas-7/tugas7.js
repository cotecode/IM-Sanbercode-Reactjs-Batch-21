// soal 1
// release 0
console.log("----SOAL 1----");
console.log("----Release 0----");
class Animal {
  constructor(name, legs = 4, cold_blooded = false) {
    this.name = name;
    this.legs = legs;
    this.cold_blooded = cold_blooded;
  }

  get animalName() {
    return this.name;
  }

  get kakiDua() {
    return this.legs;
  }

  set kakiDua(legsDua) {
    this.legs = legsDua;
  }
}

let sheep = new Animal("shaun");
console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

// release 1
console.log("----Release 1----");
class Ape extends Animal {
  constructor(name) {
    super(name);
  }

  yell() {
    return "Auooo";
  }
}

let sungokong = new Ape("kera sakti");
console.log(sungokong.yell());
console.log(sungokong.name);
console.log((sungokong.kakiDua = 2));
console.log(sheep.cold_blooded);

class Frog extends Animal {
  constructor(name) {
    super(name);
  }

  jump() {
    return "hop hop";
  }
}

let kodok = new Frog("buduk");
console.log(kodok.jump());
console.log(kodok.name);
console.log(kodok.legs);
console.log(kodok.cold_blooded);

console.log();

// soal 2
console.log("----SOAL 2----");
class Clock {
  constructor({ template }, timer) {
    this.timer = timer;
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.timer = setInterval(this.render.bind(this), 1000);
  }
}

let clock = new Clock({ template: "h:m:s" });
clock.start();
