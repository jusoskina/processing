function setup() {
  createCanvas(400, 400, SVG);
}

function draw() {
  //background(220);
  x_c = width/2
  y_c = height/2
  r = 180
  rand_cutoff = 0.98
  stroke(1)
  noFill()
  //ellipse(x_c, y_c, r,r)
  for(let x=0; x<400; x+=10){
    for(let y=0; y<400; y+=10){
      r1 = Math.random()
      r2 = Math.random()
      r3 = Math.random()

      if((x-x_c)*(x-x_c)+(y-y_c)*(y-y_c) < r*r) {
        if(int(y/10)%2==0){
          if(r1 > rand_cutoff) line(x, y+2, x, y+8);
          if(r2 > rand_cutoff) line(x, y+8, x+5, y+12);
          if(r3 > rand_cutoff) line(x, y+8, x-5, y+12);        
        } else {
          if(r1 > rand_cutoff) line(x+5, y+2, x+5, y+8);
          if(r2 > rand_cutoff) line(x+5, y+8, x, y+12);
          if(r3 > rand_cutoff) line(x+5, y+8, x+10, y+12);        
        }
    }
    }
  }
  save("honeycomb.svg");
  noLoop()
}