
var count = 0; // initialize a counter variable
var tamn = 100;

function setup() {
  createCanvas(450, 450);
  rectMode(CENTER);
}

function draw() {
	background(1, 186, 240);
	// declaration of variables
	var x = width / 2;
	var y = height / 2;
	// increment the size with the current frameCount value
	
	console.log(tamn);

	if(count === 0){

		if(tamn < 400){

			tamn++;

			if(tamn === 400){count = 400;}

		}

	}

	if(count === 400){

		tamn--;

		if(tamn === 100){count = 0;}		

	}

	// circle
	fill(237, 34, 93);
	noStroke();
	ellipse(x, y, tamn, tamn);
	// rectangle
	fill(255);
	rect(x, y, tamn*0.75, tamn*0.15);
}

