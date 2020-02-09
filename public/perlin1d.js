
let gifLength = 400;
let canvas;

start = 0;
inc = 0.007;
let from;
let to;
var p5canvas;


let xoff = 0;
let yoff = 5;
paintColour = 0;
additionPaint = 1;

prevY = new Array(innerWidth).fill(0);


function setup() {
  from = color(0, 0, 255);
  to = color(204, 255, 255);
  colorMode(RGB); // Try changing to HSB.

  p5canvas= createCanvas(400, 400);
  canvas = p5canvas.canvas;
    background(32,	223,	110);
  
  // capturer.start();


}

function draw() {
  
  background(0, 0, 255);
  stroke(paintColour);
  //noFill();
 
  xoff = start;


  for (l = 0; l < 20; ++l){
    if(l%2 === 0) {
      fill(paintColour);
    }else{
      fill(lerpColor(from, to, 1/20*l));
    }
    beginShape();

    vertex(innerWidth-1, innerHeight-1);
    vertex(0, innerHeight-1);

    for(x = 0; x < innerWidth; ++x) {
      var y = noise(xoff) * innerHeight/10 + prevY[x];
      vertex(x,y);

      xoff += inc;
      prevY[x] = y;
      
    }
    vertex(innerWidth-1, innerHeight-1);

    endShape()
  }
  saveCanvas(p5canvas, 'myCanvas', 'jpg');
  noLoop()
  start += inc;



   
    // if(frameCount < gifLength) {
    //   capturer.capture(canvas);
    // }else if(frameCount === gifLength){
    //   capturer.stop();
    //   capturer.save();
    //   noLoop();
    // }
}