var sets = 4;
var x;
var y;
var circles;
var spots = 400;

function setup(){
  createCanvas(840, 594);
    noStroke();
  //fill(255)
  noFill()
  //background(255);
}

function draw(){
    var diameter = 400
    var xSquare = 200
    var ySquare = 400
    var squareSize = 150

    x = width/2
    y = height/2
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
      //line(xS-2, yS-2, 4, 4)
      //console.log(xS+width/2)
      if (xS+width/2 >= xSquare&& xS+width/2 <= xSquare+squareSize && yS+ height/2 >= ySquare && yS+ height/2 <= ySquare + squareSize) {
        console.log(xS)
      } else if (xSL+width/2 >= xSquare&& xSL+width/2 <= xSquare+squareSize && ySL+ height/2 >= ySquare && ySL+ height/2 <= ySquare + squareSize){}
      
      else{
        arc(0,0, randR*2, randR*2, randAng, randAng + randL)
      }
      //arc(0,0, diameter/2, diameter/2, 0, PI)
    // console.log(randR)
    }
    translate (-x, -y)


    rect(xSquare, ySquare, squareSize, squareSize);
    translate(x,y)
    for(var i = 0; i < spots; ++i){
      randR = randomGaussianPos(0,diameter/5, diameter/2+100)
      randAng = Math.random() * 2*Math.PI
      randL = Math.random()*PI/2
      xS = randR*Math.cos(randAng)
      yS = randR*Math.sin(randAng)
      //line(xS-2, yS-2, 4, 4)
      if (xS >= xSquare && xS <= xS + squareSize && yS >= ySquare && ys <= ySquare + squareSize) {
        console.log(xS)
        arc(0,0, randR*2, randR*2, randAng, randAng + randL)
      }
      //arc(0,0, diameter/2, diameter/2, 0, PI)
    // console.log(randR)
    }

  // save("coffeeStains.svg");
  noLoop()
}

function randomGaussianPos(mean, theta, radius){
  var r = randomGaussian(mean, theta)
  if (r <= 0 || r > radius) return randomGaussianPos(mean, theta, radius)
  return radius - r
}