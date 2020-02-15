var sets = 100;
var x;
var y;
var circles;

function setup(){
  createCanvas(400,400,SVG);
  noStroke();
  fill(255)
  background(255);
}

function draw(){
  for(var i = 0; i < sets; ++i){
    x = Math.floor(Math.random()*width);
    y = Math.floor(Math.random()*height);
    multiplier = Math.floor(Math.random()*30)
    x_off = Math.floor(Math.random()*6-3)
    y_off = Math.floor(Math.random()*6-3)

    //number of circles
    circles = Math.floor(Math.random()*10);
    //for each circle
    for (var total = 0; total < circles; total = total+1) {
      //compute circle diameter based on reverse index (circles-total) (or max-current)
      var diameter = (circles-total) * multiplier;
      //fill(total * 30);
      stroke(0)
      //render the circle
      ellipse(x,y, diameter, diameter);
      x = x+x_off
      y = y+y_off
      
    }
  }
  save("mySVG.svg");
  noLoop()
}