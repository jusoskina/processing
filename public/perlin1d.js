
let gifLength = 400;
let canvas;

start = 0;
inc = 0.008;


let xoff = 0;
let yoff = 5;
paintColour = 255;
additionPaint = 1;

prevY = new Array(innerWidth).fill(0);


function setup() {
  var p5canvas = createCanvas(400, 400);
  canvas = p5canvas.canvas;
    background(0,179,255);
  
  // capturer.start();

}

function draw() {
  
  background(204, 153, 255);
  stroke(paintColour);
  noFill();
 
  xoff = start;


  for (l = 0; l < 20; ++l){
    beginShape();
    for(x = 0; x < innerWidth; ++x) {
      stroke(paintColour);
      var y = noise(xoff) * innerHeight/10 + prevY[x];
      vertex(x,y);

      xoff += inc;
      prevY[x] = y;
      
    }
    endShape()
  }
  
  noLoop()
  //start += inc;

   
    // if(frameCount < gifLength) {
    //   capturer.capture(canvas);
    // }else if(frameCount === gifLength){
    //   capturer.stop();
    //   capturer.save();
    //   noLoop();
    // }
}