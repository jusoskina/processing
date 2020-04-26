var sets = 4;
var x;
var y;
var circles;
var spots = 400;

function setup(){
  createCanvas(840, 594, SVG);
    noStroke();
  //fill(255)
  noFill()
  //background(255);
}

function draw(){
  for(var c = 0; c < 20; ++c){
    var diameter = Math.random()*840/2
    x = Math.random()*width
    y = Math.random()*height
    var xS, yS
    var randR, randAng
    var sd = Math.ceil(Math.random() * 7)
    stroke(0)
    //ellipse(x,y, diameter, diameter)
    translate(x,y)
    for(var i = 0; i < spots; ++i){
      randR = randomGaussian(diameter/2,sd)
      randAng = Math.random() * 2*Math.PI
      xS = randR*Math.cos(randAng)
      yS = randR*Math.sin(randAng)
      ellipse(xS, yS, 2, 2)
     // console.log(randR)
    }
    translate(-x,-y)
  }
  save("coffeeStains.svg");
  noLoop()
}