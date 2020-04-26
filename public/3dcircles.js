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
    // x = 200
    // y = 200
    // var xS, yS
    // var randR, randAng
    // stroke(0)
    // ellipse(x,y, diameter, diameter)
    // translate(x,y)
    // for(var i = 0; i < spots; ++i){
    //   randR = randomGaussianPos(0,10, diameter/2)
    //   randAng = Math.random() * 2*Math.PI
    //   xS = randR*Math.cos(randAng)
    //   yS = randR*Math.sin(randAng)
    //   ellipse(xS, yS, 2, 2)
    // // console.log(randR)
    // }
    // translate (-x, -y)


    // x = 400
    // y = 400
    // var xS, yS
    // var randR, randAng
    // stroke(0)
    // ellipse(x,y, diameter, diameter)
    // translate(x,y)
    // for(var i = 0; i < spots; ++i){
    //   randR = randomGaussianPos(0,10, diameter/2)
    //   randAng = Math.random() * 2*Math.PI
    //   xS = randR*Math.cos(randAng)
    //   yS = randR*Math.sin(randAng)
    //   rect(xS-2, yS-2, 4, 4)
    // // console.log(randR)
    // }
    // translate (-x, -y)


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
      //line(xS-2, yS-2, 4, 4)
      arc(0,0, randR*2, randR*2, randAng, randAng + randL)
      //arc(0,0, diameter/2, diameter/2, 0, PI)
    // console.log(randR)
    }
    translate (-x, -y)

  // save("coffeeStains.svg");
  noLoop()
}

function randomGaussianPos(mean, theta, radius){
  var r = randomGaussian(mean, theta)
  if (r <= 0 || r > radius) return randomGaussianPos(mean, theta, radius)
  return radius - r
}