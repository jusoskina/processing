
let gifLength = 400;
let canvas;

start = 0;
inc = 0.001;
let from;
let to;
var p5canvas;


let xoff = 0;
let yoff = 10;

prevY = new Array(innerWidth).fill(0);


function setup() {

 createCanvas(400, 400, SVG);



}

function draw() {
  
  stroke(0);
  noFill();
 
  xoff = start;


  for (l = 0; l < 20; ++l){
 
    beginShape();

    // vertex(innerWidth-1, innerHeight-1);
    // vertex(0, innerHeight-1);

    for(x = 0; x < innerWidth; ++x) {
      var y = noise(xoff) * innerHeight/10 + prevY[x];
      vertex(x,y);

      xoff += inc;
      prevY[x] = y;
      inc = inc+0.00002
      
    }
    // vertex(innerWidth-1, innerHeight-1);

    endShape()
  }
  save("lines.svg");
  noLoop()
  start += inc;
}