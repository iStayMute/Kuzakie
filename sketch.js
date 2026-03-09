//The setup function only happens once
let x;
let y;

function setup() {
  createCanvas(500, 500);
  x = width/2;
  y = height/2;
}

function draw() {
  background(0,0,0);

  stroke(57,255,20);
  fill(0,217,255);

  ellipse(x, y, 200, 200);
}

function mousePressed() {
  x = random(100,400);
  y = random(100,400);
}
