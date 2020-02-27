var theta = 0;
var gifLength = 500


function setup() {
  createCanvas(400, 400, SVG);
  // var p5canvas = createCanvas(400, 400);
  // canvas = p5canvas.canvas;
  background(0)
  // capturer.start()
}

function draw() {
  //background(0)
  stroke(255);
  strokeWeight(1);
  noFill()
  translate(width / 2, height / 2);
  var r1 = 0
  var r2 = 0
  var r3 = 0

  for (var a = 0; a < TWO_PI*50; a += 0.15){
    for (var c = 1; c < 2; c += 1) {
      var x = a*c * cos(a+theta)
      var y = a*c * sin(a+theta)
      ellipse(x,y, 1,1)
    }
  }
  theta -= 0.015
  save("mySVG.svg");


  //   if(frameCount < gifLength) {
      // capturer.capture(canvas);
  // }else if(frameCount === gifLength){
    // capturer.stop();
    // capturer.save();
   noLoop();
  // }
}
