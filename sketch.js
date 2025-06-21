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

    drawScene1();
  
}

function drawScene1() {
  background(255);

  // Tło
  image(tlo, width / 2, height / 2, width, height);

  // Przycisk na środku – mniejszy
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
      // Kliknięto przycisk – zmień scenę
      scene = 2;
      window.location.href = "https://used2rack.github.io/Temu/"; // Możesz wpisać adres URL jeśli chcesz przekierować gdzieś zewnętrznie
    }
  }
}
