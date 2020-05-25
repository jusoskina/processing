//Lescano Carlos Daniel 2015
//Use the mouse buttons and numbers from 2 to 9
var base = 5;
function setup() {
  createCanvas(800, 800, P2D);
  background(0, 100, 100);
  smooth();
    text("Use the mouse buttons and numbers from 2 to 9", 25, 25);
    text("Utiliza los botones del mouse y los números del 2 to 9", 50,50);
}

function draw() {

  if (mousePressed == true) {
    basevariable();
    if (mouseButton == RIGHT) {
      rotate(PI/base);
      translate(-width/2, -height/2);
      basevariable();
    }
  } else {

    stroke(255, random(255), random(255));
  }
}


function basevariable() {
  lineavariable(mouseX, mouseY, pmouseX, pmouseY);
  lineavariable(((width/2) - mouseX) + width/2, mouseY, ((width/2) - pmouseX) + width/2, pmouseY);
  translate(width/2, height/2);
  for (var i = 1; i < base; i += 1) {
    rotate(TWO_PI/base);
    lineavariable(mouseX-(width/2), mouseY-(height/2), pmouseX-(width/2), pmouseY-(height/2));
    lineavariable(((width/2) - mouseX), mouseY-(height/2), ((width/2) - pmouseX), pmouseY-(height/2));
  }
}

function lineavariable( x,  y,  px,  py) {
  var speed = abs(x-px) + abs(y-py);
//  ellipse(x, y, speed, speed);
  strokeWeight(speed/4);
  line(x, y, px, py);
}

function keyPressed() {
  if        (key == '9') {        base = 9;
  } else if (key == '8') {        base = 8;
  } else if (key == '7') {        base = 7;
  } else if (key == '6') {        base = 6;
  } else if (key == '5') {        base = 5;
  } else if (key == '4') {        base = 4;
  } else if (key == '3') {        base = 3;
  } else if (key == '2') {        base = 2;
  }
}


