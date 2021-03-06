// Daniel Shiffman
// http://codingtra.in
// Mathematical Roses
// Video: https://youtu.be/f5QBExMNB1I
// Based on: https://en.wikipedia.org/wiki/Rose_(mathematics)

var d = 18;
var n = 7;
var sliderD;
var sliderN;

function setup() {
  createCanvas(400, 400, SVG);
//   sliderD = createSlider(1, 20, 10, 1);
//   sliderN = createSlider(1, 20, 10, 1);
//   sliderD.input(draw);
//   sliderN.input(draw);
}

function draw() {
//   d = sliderD.value();
//   n = sliderN.value();
//   console.log("d is: " + d + ", n is: " + n)
  var k = n / d;
  background(51);
  push();
  translate(width / 2, height / 2);

  beginShape();
  stroke(255);
  noFill();
  strokeWeight(1);
  for (var a = 0; a < TWO_PI * reduceDenominator(n, d); a += 0.02) {
    var r = 200 * cos(k * a);
    var x = r * cos(a);
    var y = r * sin(a);
    if (r >150) {
        vertex(x, y);
    } else {
        vertex(-x,-y)
    }
  }
  endShape(CLOSE);
  pop();
  save("mySVG.svg");
  noLoop();
}

function reduceDenominator(numerator, denominator) {
  function rec(a, b) {
    return b ? rec(b, a % b) : a;
  }
  return denominator / rec(numerator, denominator);
}