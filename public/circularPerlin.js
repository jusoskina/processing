var t;
var listX = []
var listY = []
var xoff = 0.1
var tvar = 0.01

function setup() {
  createCanvas(840, 594, SVG);
  stroke(0, 255);
  noFill();
}

function draw() {
  for(var h = 0; h < 2; ++h){
    for(var w = 0; w < 3; ++w){
      t = 0
      push();
      translate(width*(1+w*2)/6, height*(1+h)/3)
      drawBlob()
      pop()
      xoff = xoff + 0.01
      tvar = tvar + 0.005
    }
  }
  noLoop()
  save("blobs.svg");
}

function drawBlob(){
  for (var k = 0; k < 50; ++k){
    beginShape();
    for (var i = 0; i < 102; i++) {
      var ang = map(i, 0, 200, 0, TWO_PI);
      var rad = 150 * noise(i * xoff, t * tvar);
      var x = rad * cos(ang);
      var y = rad * sin(ang);
      listX[i] = x
      listY[i] = y
      curveVertex(x, y);
    }
    for (var i = 0; i < 102; i++) {
      curveVertex(listX[101-i], -listY[i])
    }
    endShape(CLOSE);
    t += 1;
  }
}