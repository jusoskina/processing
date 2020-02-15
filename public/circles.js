// lines drawn diagonally

let gifLength = 1800;
let canvas;

let x1 = 0;
let y1 = 0;
let x2 = 30;
let y2 = 30;
paintColour = 255;
additionPaint = 1;


function setup() {
  var p5canvas = createCanvas(400, 400);
  canvas = p5canvas.canvas;
    background(0,179,255);
  
  capturer.start();

}

function draw() {
  stroke(paintColour);
    strokeWeight(2); // Thicker
    line(x1, y1, x2, y2);
  if(x1 < 390) {
    x1 = x1+30;
  } else {
    x1 = 0;
  }
  if(y1 < 390){
    y1 = y1+3;
  }else{
    y1 = 0;
  }
    y2 = y1+30;
    x2 = x1+30;

    if(paintColour === 0 || paintColour === 255){
      additionPaint = additionPaint * -1;
    }
    paintColour = paintColour+additionPaint;

  
    if(frameCount < gifLength) {
      capturer.capture(canvas);
    }else if(frameCount === gifLength){
      capturer.stop();
      capturer.save();
    }
}