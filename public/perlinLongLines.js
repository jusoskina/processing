var t;

function setup() {
  createCanvas(840, 594, SVG);
  stroke(0, 18);
  noFill();
  t = 0;
  m = 0
}

function draw() {
  var x1 = width * noise(t + 15);
  var x2 = width * noise(t + 25);
  var x3 = width * noise(m + 35);
  var x4 = width * noise(m + 45);
  var y1 = height * noise(t + 55);
  var y2 = height * noise(t + 65);
  var y3 = height * noise(m + 75);
  var y4 = height * noise(m + 85);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  // line(x1,y1,x2,y2)

  // t += 0.001;
  if(frameCount < 250){
  m += 0.005
  } else if (frameCount < 500){
    t += 0.005
  } else if (frameCount < 750){
    m += 0.005
  }  else  if (frameCount < 1000){
    t += 0.005
  }  else  if (frameCount < 1250){
    m += 0.005
  }  else  if (frameCount < 1500){
    t += 0.005
  }  else  if (frameCount < 1750){
    m += 0.005
  }  else  if (frameCount < 2000){
    t += 0.005
  } else {
    m += 0.005
  }

  // clear the background every 500 frames using mod (%) operator
  if (frameCount % 2250 == 0) {
  //background(255);
  save("besier.svg");
  noLoop();
  }
}