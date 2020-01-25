// lines drawn diagonally

let gifLength = 180;
let canvas;

let x1 = 0;
let y1 = 0;
let x2 = 10;
let y2 = 10;


function setup() {
  var p5canvas = createCanvas(400, 400);
  canvas = p5canvas.canvas;
    background(0);
  
  capturer.start();

}

function draw() {
  stroke(255);
    line(x1, y1, x2, y2);
  if(x1 < 390) {
    x1 = x1+10;
  } else {
    x1 = 0;
  }
  if(y1 < 390){
    y1 = y1+1;
  }else{
    y1 = 0;
  }
    y2 = y1+10;
    x2 = x1+10;
  
    if(frameCount < gifLength) {
      capturer.capture(canvas);
    }else if(frameCount === gifLength){
      capturer.stop();
      capturer.save();
    }

}