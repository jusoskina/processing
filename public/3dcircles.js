var sets = 4;
var x;
var y;
var circles;
var spots = 400;

function setup(){
  createCanvas(800, 800, SVG);
    noStroke();
  //fill(255)
  noFill()
  //background(255);
}

function draw(){
    var diameter = 300
    var xSquare = 200
    var ySquare = 400
    var squareSize = 150

    x = width*2/3
    y = height/3
    var xS, yS
    var randR, randAng
    stroke(0)
    ellipse(x,y, diameter, diameter)
    
    translate(x,y)
    for(var i = 0; i < spots; ++i){
      randR = randomGaussianPos(0,diameter/5, diameter/2)
      randAng = Math.random() * 2*Math.PI
      randL = Math.random()*PI/2
      xS = randR*Math.cos(randAng)
      yS = randR*Math.sin(randAng)
      xSL = randR*Math.cos(randAng+randL)
      ySL = randR*Math.sin(randAng+randL)
        arc(0,0, randR*2, randR*2, randAng, randAng + randL)
    }
    translate (-x, -y)

    x = width/3
    y = height/3
    translate(x,y)
    for(var i = 0; i < spots; ++i){
      randR = randomGaussianPos(0,diameter/5, diameter/2)
      randAng = Math.random() * 2*Math.PI
      randL = Math.random()*PI/2
      xS = randR*Math.cos(randAng)
      yS = randR*Math.sin(randAng)
      xSL = randR*Math.cos(randAng+randL)
      ySL = randR*Math.sin(randAng+randL)
        arc(0,0, randR*2, randR*2, randAng, randAng + randL)
    }
    translate (-x, -y)

    x = width*2/3
    y = height*2/3
    translate(x,y)
    for(var i = 0; i < spots; ++i){
      randR = randomGaussianPos(0,diameter/5, diameter/2)
      randAng = Math.random() * 2*Math.PI
      randL = Math.random()*PI/2
      xS = randR*Math.cos(randAng)
      yS = randR*Math.sin(randAng)
      xSL = randR*Math.cos(randAng+randL)
      ySL = randR*Math.sin(randAng+randL)
        arc(0,0, randR*2, randR*2, randAng, randAng + randL)
    }
    translate (-x, -y)

    x = width/3
    y = height*2/3
    translate(x,y)
    for(var i = 0; i < spots; ++i){
      randR = randomGaussianPos(0,diameter/5, diameter/2)
      randAng = Math.random() * 2*Math.PI
      randL = Math.random()*PI/2
      xS = randR*Math.cos(randAng)
      yS = randR*Math.sin(randAng)
      xSL = randR*Math.cos(randAng+randL)
      ySL = randR*Math.sin(randAng+randL)
        arc(0,0, randR*2, randR*2, randAng, randAng + randL)
    }
    translate (-x, -y)


  save("fourCircles.svg");
  noLoop()
}

function randomGaussianPos(mean, theta, radius){
  var r = randomGaussian(mean, theta)
  if (r <= 0 || r > radius) return randomGaussianPos(mean, theta, radius)
  return radius - r
}