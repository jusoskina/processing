var circles;
var img;
var maxR = 6


function preload() {
  img = loadImage("assets/birthOfVenus.jpg");
}

function setup() {
  createCanvas(img.width, img.height, SVG)
  var density = displayDensity();
  pixelDensity(1);
  img.loadPixels();
  circles = [];

  console.log(img.width);
  console.log(img.height);
  console.log("pixels", img.pixels.length);
  console.log(density)
}

function draw() {
  background(0);

  var total = 20;
  var count = 0;
  var attempts = 0;

  while (count < total) {
    var newC = newCircle();
    if (newC !== null) {
      circles.push(newC);
      count++;
    }
    attempts++;
    if (attempts > 1000) {
      for (var i = 0; i < circles.length; i++) {
        var c = circles[i];
        c.show();
      }
      save("venus.svg");
      noLoop();
      console.log("finished");
      break;
    }
  }

  for (var i = 0; i < circles.length; i++) {
    var circle = circles[i];

    if (circle.growing) {
      if (circle.edges()) {
        circle.growing = false;
      } else {
        for (var j = 0; j < circles.length; j++) {
          var other = circles[j];
          if (circle !== other) {
            var d = dist(circle.x, circle.y, other.x, other.y);
            var distance = circle.r + other.r;

            if (d - 1 < distance) {
              circle.growing = false;
              break;
            }
          }
        }
      }
      if (circle.r > maxR){
        //console.log(c.r)
        circle.growing = false
      }
    }

    // circle.show();
    circle.grow();
  }
}

function newCircle() {
  var x = random(0, img.width);
  var y = random(0, img.height);

  var valid = true;
  for (var i = 0; i < circles.length; i++) {
    var circle = circles[i];
    var d = dist(x, y, circle.x, circle.y);
    if (d - 2 < circle.r - 0.1) {
      valid = false;
      break;
    }
  }
  if (valid) {
    var index = (int(x) + int(y) * img.width) * 4;
    var r = img.pixels[index];
    var g = img.pixels[index+1];
    var b = img.pixels[index+2];
    var c = color(r,g,b);
    return new Circle(x, y, color(c));
  } else {
    return null;
  }
}

// Circle object
function Circle(x, y, color) {
  this.x = x;
  this.y = y;
  this.r = 2;
  this.color = color;
  this.growing = true;

  this.grow = function() {
    if (this.growing) {
      this.r += 0.5;
    }
  }

  this.show = function() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  this.edges = function() {
    return (this.x + this.r >= width || this.x - this.r <= 0 || this.y + this.r >= height || this.y - this.r <= 0)
  }
}