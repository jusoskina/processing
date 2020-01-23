// lines drawn diagonally

let x1 = 0;
let y1 = 0;
let x2 = 10;
let y2 = 10;


function setup() {
  createCanvas(400, 400);
    background(0);

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
  
}