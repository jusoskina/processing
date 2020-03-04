
function setup() {

 createCanvas(400, 400);

}

function draw() {
  
  stroke(0);
  noFill();
 
  var lines = 20;
  var space = width/lines

  for (x = 0; x < lines; ++x){
    for (y = 0; y < lines; ++y){
      //vertical
      line(x*space,y*space+(space*0.2),x*space,y*space+(space*0.8))
      //horizonal
      line(x*space+(space*0.2),y*space,x*space+(space*0.8),y*space)

    }
  }
  //save("lines.svg");
  noLoop()
}