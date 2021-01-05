var spots = []
var img
let angle = 0;
let r = 0;

function preload() {
  img = loadImage('assets/giraffe.png');
}

function setup() {
  createCanvas(img.width, img.height, SVG);
  var density = displayDensity();
  pixelDensity(1);
  img.loadPixels()

  // for (var x = 0; x < img.width; x+=1){
  //   for (var y = 0; y < img.height; y+=1){
  //     var index = x + y*img.width
  //     var c = img.pixels[index*4]
  //     var rgb = img.pixels[index*4-1]
  //     if(rgb != 0){
  //       if (c < 100){
  //         spots.push(createVector(x, y));
  //       }
  //     }
  //   }
  // }
  //translate(img.width/2, img.height/2); // translate to middle of screen

  //console.log(spots)
	};

	function draw() {
    //   for( var i = 0; i < spots.length; ++i){
    //     noFill();
    //     strokeWeight(1.5);
    //     stroke(0,0,0);
    //     ellipse(spots[i].x, spots[i].y, 10);
    // }

    // for(var i = 0; i < 100; ++i){
      strokeWeight(1.5);
      stroke(0,0,0);
      noFill();
	
    let x = int(r * cos(angle)) + img.width/2
    let y = int(r * sin(angle)) + img.height/2

    var index = x + y*img.width
    var c = img.pixels[index*4]
    var rgb = img.pixels[index*4-1]

    if(rgb != 0){
      console.log(x + y)


    // for(var i = 0; i < spots.length; ++i){
    //   console.log(spots)
    //   if(spots[i].x == int(x) && spots[i].y == int(y)){
    //     console.log(int(x))
        ellipse(x,y,3);
      //   break;
      // }
    }
    
    angle += 0.1;
    r += 0.1;
  // }
  //   noLoop()
	};