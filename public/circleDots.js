var incR1 = 1;
var incR2 = 2;
var incR3 = 3;
var incR4 = 4;


function setup() {
  createCanvas(400, 400);
  background(0)
}

function draw() {
  stroke(255);
  strokeWeight(1);
  translate(width / 2, height / 2);
  var r1 = 0
  var r2 = 0
  var r3 = 0

  for (var a = 0; a < TWO_PI*100; a += 0.15){
    for (var c = 1; c < 2; c += 1) {
      var x = a*c * cos(a)
      var y = a*c * sin(a)
      point(x,y)
    }
  }

}
