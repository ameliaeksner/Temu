let tlo, przycisk, reka;
let t = 0;
let scene = 1; // początkowa scena

function preload() {
  tlo = loadImage("reklama temo.png");
  przycisk = loadImage("logo (3).png");
  reka = loadImage("Ręka (2).png");
}

function setup() {
  createCanvas(960, 540);
  imageMode(CENTER);
}

function draw() {
  if (scene === 1) {
    drawScene1();
  } else if (scene === 2) {
    drawScene2();
  }
}

function drawScene1() {
  background(255);

  // Tło
  image(tlo, width / 2, height / 2, width, height);

  // Przycisk na środku – o połowę mniejszy
  image(przycisk, width / 2, height / 2, przycisk.width / 2, przycisk.height / 2);

  // Noise + ruch ręki
  let xOffset = map(noise(t), 0, 1, -30, 30);
  let yOffset = map(noise(t + 100), 0, 1, -30, 30);
  t += 0.03;

  let skala = 0.48; // Pomniejszona o 20%
  let szer = reka.width * skala;
  let wys = reka.height * skala;
  let x = width * 0.70 + 150 + xOffset;
  let y = height * 0.65 - 50 + yOffset;

  image(reka, x, y, szer, wys);
}

function drawScene2() {
  background(50, 100, 200);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(40);
  text("To jest scena 2 🚀", width / 2, height / 2);
}

function mousePressed() {
  if (scene === 1) {
    // Sprawdź, czy kliknięto w obszar przycisku (na środku)
    let przyciskX = width / 2;
    let przyciskY = height / 2;
    let przyciskW = przycisk.width / 2;
    let przyciskH = przycisk.height / 2;

    if (
      mouseX > przyciskX - przyciskW / 2 &&
      mouseX < przyciskX + przyciskW / 2 &&
      mouseY > przyciskY - przyciskH / 2 &&
      mouseY < przyciskY + przyciskH / 2
    ) {
      scene = 2; // zmień scenę
      window.location.href(""); // zostaw puste lub dodaj URL, jeśli chcesz przejście
    }
  }
}

function mouseMoved() {
  if (scene === 1) {
    let przyciskX = width / 2;
    let przyciskY = height / 2;
    let przyciskW = przycisk.width / 2;
    let przyciskH = przycisk.height / 2;

    if (
      mouseX > przyciskX - przyciskW / 2 &&
      mouseX < przyciskX + przyciskW / 2 &&
      mouseY > przyciskY - przyciskH / 2 &&
      mouseY < przyciskY + przyciskH / 2
    ) {
      cursor('pointer');
    } else {
      cursor('default');
    }
  } else {
    cursor('default');
  }
}

