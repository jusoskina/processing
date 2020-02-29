// Daniel Shiffman
// http://codingtra.in
// Mathematical Roses
// Video: https://youtu.be/f5QBExMNB1I
// Based on: https://en.wikipedia.org/wiki/Rose_(mathematics)

var d = 31;
var n = 2;
var sliderD;
var sliderN;

function setup() {
  createCanvas(400, 400, SVG);
  angleMode(DEGREES)

  // sliderD = createSlider(1, 40, 10, 1);
  // sliderN = createSlider(1, 20, 10, 1);
  // sliderD.input(draw);
  // sliderN.input(draw);
}

function draw() {
  // d = sliderD.value();
  // n = sliderN.value();
  console.log("d is: " + d + ", n is: " + n)
  //var k = n / d;
  background(51);
  push();
  translate(width / 2, height / 2);

  beginShape();
  stroke(255);
  noFill();
  strokeWeight(1);
 
  for (let i = 0; i < 361; i++) {
    let k = i * d;
    let r = 200 * sin(n*k);
    // r = abs(r);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x,y);    
  }
  endShape(CLOSE);
  pop();

   push();
  translate(width / 2, height / 2);
  beginShape();
  stroke(255,0,255);
  noFill();
  strokeWeight(2);

  for (let i = 0; i < 361; i++) {
    let k = i;
    let r = 200 * sin(n*k);
    // r = abs(r);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x,y);    
  }
  endShape(CLOSE);
  pop()
  //pop()
  save("mauer.svg");
  noLoop();
}

function reduceDenominator(numerator, denominator) {
  function rec(a, b) {
    return b ? rec(b, a % b) : a;
  }
  return denominator / rec(numerator, denominator);
}