
let gifLength = 400;
let canvas;


let xoff = 0;
let yoff = 5;
paintColour = 255;
additionPaint = 1;


function setup() {
  var p5canvas = createCanvas(400, 400);
  canvas = p5canvas.canvas;
    background(0,179,255);
  
  capturer.start();

}

function draw() {
  
  background(204, 153, 255);
  stroke(paintColour);
    rx = map(noise(xoff), 0, 1, 0, 100);
    ry = map(noise(yoff), 0, 1, 0, 100);
    for (i = 0; i < 20; ++i){
      for (j = 0; j < 20; ++j){
          ellipse(i*50,j*50,rx,ry)
          ellipse(i*50,j*50,ry,rx)
      }
    }

    if(frameCount < gifLength/2) {
      xoff += 0.01
      yoff += 0.01
    }else if(frameCount < gifLength){
      xoff -= 0.01
      yoff -= 0.01
    }

    if(frameCount < gifLength) {
      capturer.capture(canvas);
    }else if(frameCount === gifLength){
      capturer.stop();
      capturer.save();
      noLoop();
    }
}