const url = 'https://quickdrawfiles.appspot.com/drawing/cat?isAnimated=false&format=json&origin=*&key='
let rootNum = 2
let count = 0
let cats = []

function setup() {
  createCanvas(400, 400);
  index = 0
  for(let h = 0; h < rootNum; ++h){
    for(let w = 0; w < rootNum; ++w){
      drawCat(cats[index], h, w)
      ++index
    }
  }
}

function preload(){
  for(let h = 0; h < rootNum; ++h){
    for(let w = 0; w < rootNum; ++w){
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
  scale(1/rootNum)
  translate(width/rootNum*w, height/rootNum*h)
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
