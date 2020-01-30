// lines drawn diagonally

let gifLength = 1800;
let canvas;

// let x1 = 0;
// let y1 = 0;
// let x2 = 30;
// let y2 = 30;

let xoff = 0;
let yoff = 5;
paintColour = 255;
additionPaint = 1;


function setup() {
  var p5canvas = createCanvas(400, 400);
  canvas = p5canvas.canvas;
    background(0,179,255);
  
  //capturer.start();

}

function draw() {
  background(204, 153, 255);
  stroke(paintColour);
    strokeWeight(2); // Thicker
    rx = map(noise(xoff), 0, 1, 0, 100);
    ry = map(noise(yoff), 0, 1, 0, 100);
    for (i = 0; i < 10; ++i){
      for (j = 0; j < 10; ++j){
        if((i%2===0 && j%2!==0) || (i%2!==0 && j%2===0)){
          ellipse(i*100,j*100,rx,ry)
        }else{
          ellipse(i*100,j*100,ry,rx)
        }
      }
    }

    //console.log(r)
    xoff += 0.01
    yoff += 0.01
}