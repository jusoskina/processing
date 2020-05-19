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
    line(x,y,x+spacing,y+spacing)
  }else{
    line(x,y+spacing,x+spacing,y)
  }
  x = x+spacing
  if (x > width){
    x = 0
    y = y + spacing
    prob = prob + (1/(height/spacing))
    console.log(prob)
  }

  if(y > height){
    save("10print.svg");
    noLoop()
  }

}