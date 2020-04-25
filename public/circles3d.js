var sets = 4;
var x;
var y;
var circles;
var spots = 400;

function setup(){
  createCanvas(400,400);
  noStroke();
  //fill(255)
  noFill()
  background(255);
}

function draw(){
  var diameter = 100
  x = 200
  y = 200
  var xS, yS
  var randR, randAng
  stroke(0)
  ellipse(x,y, diameter, diameter)
  translate(200,200)
  for(var i = 0; i < spots; ++i){
    randR = randomGaussian(diameter/2,2)
    randAng = Math.random() * 2*Math.PI
    xS = randR*Math.cos(randAng)
    yS = randR*Math.sin(randAng)
    ellipse(xS, yS, 2, 2)
    console.log(randR)
  }

  noLoop()
}

function randn_bm() {
  let u = 0, v = 0;
  while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while(v === 0) v = Math.random();
  let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0) return randn_bm(); // resample between 0 and 1
  if (num < 0.5) return num + 0.5
  if (num >= 0.5) return num - 0.5
  //return num;
}