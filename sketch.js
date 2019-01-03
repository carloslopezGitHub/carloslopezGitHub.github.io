
var count = 0; // initialize a counter variable

function setup() {
  createCanvas(800, 300);
  textAlign(CENTER, CENTER);
  frameRate(6);

}

function draw() {
  background(220);
  fill(150, 34, 93);
  textSize(36);
  // get the current frame rate as an integer.
  text("frameCount: " + frameCount, width/2, height/2);
}

