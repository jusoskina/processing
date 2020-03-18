const url = 'https://quickdrawfiles.appspot.com/drawing/tornado?isAnimated=false&format=json&origin=*&key='
let rootNum1 = 21
let rootNum2 = 29
let count = 0
let cats = []

function setup() {
  //createCanvas(400, 400, SVG);
    createCanvas(210, 297);

  index = 0
  for(let h = 0; h < rootNum1; ++h){
    for(let w = 0; w < rootNum2; ++w){
      drawCat(cats[index], h, w)
      ++index
    }
  }
  //save("honeycomb.svg");
}

function preload(){
  for(let h = 0; h < rootNum1; ++h){
    for(let w = 0; w < rootNum2; ++w){
      newDrawing()
    }
  }
}

function newDrawing() {
  let apiKey = 'AIzaSyCLxdiMV5-46xuFWFbdDhVoJi7DMwe-H9Q'; // keyInput.value();
  loadJSON(url + apiKey, gotDrawing);
}

function gotDrawing(data) {
  drawing = data.drawing;
  cats[count] = drawing
  count = count+1;
}

function drawCat(drawing, h, w) {
  console.log(drawing)
  push()
  strokeWeight(2)
  translate(width/rootNum*w, height/rootNum*h)
  scale(1/(rootNum1))
  if (drawing) {
    for(let path of drawing) {
      noFill()
      stroke(0)
      beginShape()
      for(let i = 0; i < path[0].length; ++i){
        let x = path[0][i]
        let y = path[1][i]
        vertex(x,y)
      }
      endShape()
    }
  }
  pop()
}

function draw() {
}
