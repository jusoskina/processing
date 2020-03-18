function setup() {
  createCanvas(400, 400, SVG);
  let s = 'The quick brown fox jumped over the lazy dog.';
//fill(50);
textSize(8)
fill(50);
stroke(0)
text(s, 10, 10); // Text wraps within text box
save("text.svg");

}
