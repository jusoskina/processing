
var inc = 0.2;
var scl = 50;
var cols, rows;
var zoff = 0;
  var particles = []
  var flowField
  gifLength = 300
  let canvas;


function setup() {
  createCanvas(400, 400, SVG)
  //createCanvas(400, 400);
  // var p5canvas = createCanvas(400, 400);
  // canvas = p5canvas.canvas;
  background(255)


  //pixelDensity(1);
  cols = floor(width/scl)
  rows = floor(height/scl)

  flowField = new Array(cols*rows)
  for(var i = 0; i < 10; ++i){
    particles[i] = new Particle()
  }

  //capturer.start();
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
    zoff += 0.0008;
  }

  for(var i = 0; i < particles.length; ++i){
    particles[i].follow(flowField)
    particles[i].update()
    particles[i].edges()
    particles[i].show()
  }

  if(frameCount === 200){
    noLoop();
    save("mySVG.svg");
  }

  // if(frameCount < gifLength) {
  //   console.log(frameCount)
  //     capturer.capture(canvas);
  // }else if(frameCount === gifLength){
  //   capturer.stop();
  //   capturer.save();
  //   noLoop();
  // }
}