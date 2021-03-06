// 8 nights of Hanukkah 2016 Examples
// Night 7: Animated Circle Packing
// Expansion of: https://youtu.be/XATr_jdh-44
// Daniel Shiffman
// http://codingrainbow.com/

// All the circles
var circles = [];
var spots = []
k = 0
var img
var maxR = 10

function preload() {
  img = loadImage('assets/hedgehog.png');

}

function setup() {
  createCanvas(img.width, img.height, SVG);
  var density = displayDensity();
  pixelDensity(1);
  img.loadPixels()
  for (var x = 0; x < img.width; ++x){
    for (var y = 0; y < img.height; ++y){
      var index = x + y*img.width
      var c = img.pixels[index*4]
      if(c != null){
        //var b = brightness([c])
        // console.log(x + ' ' + y + ' ' + c)
        if(c < 100){
          spots.push(createVector(x, y));
        }
      }
    }
  }
  console.log(spots)
}

function draw() {
  // background(img)
  k = k+1

  // All the circles
  for (var i = 0; i < circles.length; i++) {
    var c = circles[i];
    
    // Is it a growing one?
    if (c.growing) {
      c.grow();
      // Does it overlap any previous circles?
      for (var j = 0; j < circles.length; j++) {
        var other = circles[j];
        if (other != c) {
          var d = dist(c.x, c.y, other.x, other.y);
          if (d - 1 < c.r + other.r) {
            c.growing = false;
          }
        }
        if (c.r > maxR){
          //console.log(c.r)
          c.growing = false
        }
      }
      
      // Is it stuck to an edge?
      if (c.growing) {
        c.growing = !c.edges();
      }
    }
  }
  
  // Let's try to make a certain number of new circles each frame
  // More later
  var target = 1 + constrain(floor(frameCount / 120), 0, 20);
  // How many
  var count = 0;
  // Try N times
  for (var i = 0; i < 1000; i++) {
    if (addCircle()) {
      count++;
    }
    // We made enough
    if (count == target) {
      break;
    }
  }
  
  // We can't make any more
  if (count < 1) {
    for (var i = 0; i < circles.length; i++) {
      var c = circles[i];
      c.show();
    }
    save("hedgehog.svg");
    noLoop();
    console.log("finished");

  }
}


// Add one circle
function addCircle() {
  // Here's a new circle
  var r = int(random(0, spots.length))
  var spot = spots[r];
  var x = spot.x;
  var y = spot.y;
  var newCircle = new Circle(x, y, 1);
  // Is it in an ok spot?
  for (var i = 0; i < circles.length; i++) {
    var other = circles[i];
    var d = dist(newCircle.x, newCircle.y, other.x, other.y);
    if (d < other.r + 4) {
      newCircle = undefined;
      break;
    }
  }
  // If it is, add it
  if (newCircle) {
    circles.push(newCircle);
    return true;
  } else {
    return false;
  }
}

// Circle object
function Circle(x, y, r) {
  this.growing = true;
  this.x = x;
  this.y = y;
  this.r = r;
}

// Check stuck to an edge
Circle.prototype.edges = function() {
  return (this.r > width - this.x || this.r > this.x || this.r > height - this.y || this.r > this.y);
}

// Grow
Circle.prototype.grow = function() {
  this.r += 0.5;
}

// Show
Circle.prototype.show = function() {
  noFill();
  strokeWeight(1.5);
  stroke(0,0,0);
  ellipse(this.x, this.y, this.r * 2);
}