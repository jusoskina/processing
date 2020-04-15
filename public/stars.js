nStars = 100
var z = 400
var x1
var y1
var starsX = []
var starsY = []


function setup() {
  createCanvas(400, 400, SVG);
  stroke(1)
  noFill()
  for(let i = 0; i < nStars; ++i){
    starsX[i] = Math.random()*400
    starsY[i] = Math.random()*400
  }
}

function draw() {

  var x2
  var y2
 for(let i = 0; i < nStars; ++i){
  z = 400
  var length = Math.random()*100+50
  for(let j = 0; j < length; ++j){
  sx = map(starsX[i]/z, 0, 1, 0, width)
  sy = map(starsY[i]/z, 0, 1, 0, height)
  ellipse(sx,sy,4,4)
  z = z-2
  }
 }
   save("stars.svg");
  noLoop()
}