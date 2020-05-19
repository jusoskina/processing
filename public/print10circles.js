let x = 0
let y = 0
let spacing = 10
prob = 0

function setup() {
  createCanvas(840, 594, SVG);
  // background(0)
}

function draw() {
  stroke(0)
  if(random(1) > prob){
    //line(x,y,x+spacing,y+spacing)
    arc(x,y, spacing, spacing, 0, HALF_PI)
    arc(x+spacing,y+spacing, spacing, spacing, PI, PI + HALF_PI)
  }else{
    //line(x,y+spacing,x+spacing,y)
    arc(x+spacing,y, spacing, spacing, HALF_PI, PI)
    arc(x,y+spacing, spacing, spacing, PI + HALF_PI, 2*PI)
  }
  x = x+spacing
  if (x > width){
    x = 0
    y = y + spacing
    prob = prob + (1/(height/spacing))
    console.log(prob)
  }

  if(y > height){
    // save("10print.svg");
    noLoop()
  }

}