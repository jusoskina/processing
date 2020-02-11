
var inc = 0.1;
var scl = 10;
var cols, rows;
var zoff = 0;
  var particles = []
  var flowField

function setup() {
  //createCanvas(200, 200, SVG);
  background(255)
  createCanvas(200, 200);
  //pixelDensity(1);
  cols = floor(width/scl)
  rows = floor(height/scl)

  flowField = new Array(cols*rows)
  for(var i = 0; i < 200; ++i){
    particles[i] = new Particle()
  }
}

function draw() {
  randomSeed(10)
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols
      var angle = noise(xoff, yoff,zoff) * TWO_PI*4
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1)
      flowField[index] = v
      xoff += inc;
      // stroke(0,50);
      // strokeWeight(1)
      // push();
      // translate(x*scl, y*scl);
      // rotate(v.heading());
      // line(0,0,scl,0);
      // pop()
    }
    yoff += inc;
    zoff += 0.0004;
  }

  for(var i = 0; i < particles.length; ++i){
    particles[i].follow(flowField)
    particles[i].update()
    particles[i].show()
    particles[i].edges()
  }
  //save("mySVG.svg");
  //noLoop()
}