var t = 0;
function setup() {
		createCanvas(840, 594, SVG);
		// background(255, 255, 255);
		noFill();
    stroke(0);
    // t = 0;
    // frameRate(100);
    translate(width / 2, height / 2);

	};

	function draw() {
    t = t + 3;
    // console.log(t)

    // var x1 = width * noise(t + 15);
    // var x2 = width * noise(t + 25);
    // var x3 = width * noise(t + 35);
    // var x4 = width * noise(t + 45);
    // var y1 = height * noise(t + 55);
    // var y2 = height * noise(t + 65);
    // var y3 = height * noise(t + 75);
    // var y4 = height * noise(t + 85);
  
    // bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    // noLoop()

    console.log(tan(t / 300) * (t / 10))
    if(tan(t / 300) * (t / 10) > -width/2 && tan(t / 300) * (t / 10) < width/2){
      ellipse(tan(t / 300) * (t / 10),cos(t / 300) * (t / 10), 3,3);
    }
    if(tan(t / 200) * (t / 10) > - width/2 && tan(t / 200) * (t / 10) < width/2){
      ellipse(tan(t / 200) * (t / 10), cos(t / 200) * (t / 10), 3,3);
    }
    if(tan(t / 50) * (t / 10) > - width/2 && tan(t / 50) * (t / 10) < width/2){
      ellipse(tan(t / 50) * (t / 10), cos(t / 50) * (t / 10), 3,3);
    }
    if(tan(t / 100) * (t / 10) > - width/2 && tan(t / 100) * (t / 10) < width/2){
      ellipse(tan(t / 100) * (t / 10), cos(t / 100) * (t / 10), 3,3);
    }
 
    
    if(t > 2000){
      save("tanLines.svg");
      noLoop()
    }


		// ellipse(tan(t / 50) * (t / 10), cos(t / 50) * (t / 10), cos(t) / tan(t), tan(t) / sin(t));
		// ellipse(tan(t / 100) * (t / 10), cos(t / 100) * (t / 10), sin(t) / tan(t), tan(t) / cos(t));
		// ellipse(tan(t / 200) * (t / 10), cos(t / 200) * (t / 10), cos(t) / tan(t), tan(t) / sin(t));
		// ellipse(tan(t / 300) * (t / 10), cos(t / 300) * (t / 10), sin(t) / tan(t), tan(t) / cos(t));
		// ellipse(tan(t / 50) * (t / 10), cos(t / 50) * (t / 10), tan(t) / sin(t), cos(t) / tan(t));
		// ellipse(tan(t / 100) * (t / 10), cos(t / 100) * (t / 10), tan(t) / cos(t), sin(t) / tan(t));
		// ellipse(tan(t / 200) * (t / 10), cos(t / 200) * (t / 10), tan(t) / sin(t), cos(t) / tan(t));
		// ellipse(tan(t / 300) * (t / 10), cos(t / 300) * (t / 10), tan(t) / cos(t), sin(t) / tan(t));
	};