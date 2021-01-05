var spots = []
var img

function preload() {
  img = loadImage('assets/giraffe.png');
}

function setup() {
  createCanvas(img.width, img.height, SVG);
  var density = displayDensity();
  var k = 0
  pixelDensity(1);
  img.loadPixels()
  console.log(img.width)
  console.log(img.height)

  for (var x = 0; x < img.width; x+=10){
    for (var y = 0; y < img.height; y+=10){
      var index = x + y*img.width
      var c = img.pixels[index*4]
      var rgb = img.pixels[index*4-1]
      if(rgb == 0){
        if (c < 100){
        //var b = brightness([c])
        // console.log(x + ' ' + y + ' ' + c)
        //if(c < 100){
          // if(k < 1000){
            spots.push(createVector(x, y));
            // console.log(x, y)
          // }
        //}
      }
      }
    }
  }
  //console.log(spots)
	};

	function draw() {
    console.log('bumface :)')
    //image(img, 0, 0);
    // for (var i = 0; i < 100; i++) {
      for( var i = 0; i < spots.length; ++i){
      // var rand = int(random(0, spots.length))
      noFill();
      strokeWeight(1.5);
      stroke(0,0,0);
      ellipse(spots[i].x, spots[i].y, 10);
    }
      noLoop()
	};