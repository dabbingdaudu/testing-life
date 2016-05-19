
// The setup function runs once
function setup() {
  
  createCanvas(windowWidth, windowHeight);
  background(100,73,120);
  frameRate(7);
}

//The draw function runs many times per second. The default rate is 60 frames per second!
function draw() {
 	var randomRed = random(0,255);
	var randomGreen = random(0,255);
	var randomBlue = random(0,255);
	var newColor = color(randomRed, randomGreen, randomRed)
 	fill(randomRed,randomGreen,randomBlue);
	stroke (randomRed,randomGreen,randomBlue);
	rect(mouseX, mouseY, 65, 86, 129);
	fill(253,51,70);
	stroke(253,51,70);
	{if (mouseIsPressed)
		ellipse(45,760,30,60); 

	else
		rect(343,45,45,505);
}



 

}
