
function setup() {

 createCanvas(400, 400, SVG);
}

function draw() {
  
  stroke(0);
  strokeWeight(1)
  noFill();
 
  var lines = 20;
  var space = width/lines

  for (x = 0; x < lines; ++x){
    for (y = 0; y < lines; ++y){
      if(y%2 == x%2){
        stroke(0);

        if((y+1)*space+(space*0.8) < height){
          //line(x*space,y*space+(space*0.2),x*space,(y+1)*space+(space*0.8))
          line(x*space+2,y*space+(space*0.2),x*space+2,(y+1)*space+(space*0.8))
          line(x*space-2,y*space+(space*0.2),x*space-2,(y+1)*space+(space*0.8))
        }
        if((x+1)*space+(space*0.8) < width && (y+1)*space+2 < height){
          //line(x*space+(space*0.2),(y+1)*space,(x+1)*space+(space*0.8),(y+1)*space)
          line(x*space+(space*0.2),(y+1)*space+2,(x+1)*space+(space*0.8),(y+1)*space+2)
          line(x*space+(space*0.2),(y+1)*space-2,(x+1)*space+(space*0.8),(y+1)*space-2)
        }
      }
      if(y == 0 && x%2 == 1) {
        colorMode(HSB);
        stroke(255, 204, 100);
        //line(x*space,y*space+(space*0.2),x*space,(y+1)*space/2+(space*0.8)/2)
        line(x*space+2,y*space+(space*0.2),x*space+2,(y+1)*space/2+(space*0.8)/2)
        line(x*space-2,y*space+(space*0.2),x*space-2,(y+1)*space/2+(space*0.8)/2)
      }

      if(x == 0 && y%2 == 1 && (y+1)*space+2 < height) {
        //colorMode(HSB);
        //stroke(255, 204, 100);
        //line(x*space,(y+1)*space,(x+1)*space/2+(space*0.8)/2,(y+1)*space)
        line(x*space,(y+1)*space+2,(x+1)*space/2+(space*0.8)/2,(y+1)*space+2)
        line(x*space,(y+1)*space-2,(x+1)*space/2+(space*0.8)/2,(y+1)*space-2)
      }

    }
  }
  save("weave.svg");
  noLoop()
}