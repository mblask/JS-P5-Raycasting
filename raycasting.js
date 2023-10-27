let walls = [];
let rays = [];

function setup(){
	createCanvas(1200, 800);

	let numOfWalls = 5;
	for (var i = 0; i < numOfWalls; i++) {
		let wall = new Wall(random(width) + 100, random(height) + 100, random(width) + 50, random(height) + 50);
		walls.push(wall);
	}

	let angle = 0;
	let numOfRays = 1;
	for (var j = 0; j < numOfRays; j++) {
		let position = createVector(width/2, height/2);
		let ray = new Ray(position, angle);
		rays.push(ray);
	}
}

function draw(){
	background(0);
	
	for (var i = 0; i < walls.length; i++) {
		walls[i].show();
	}

	for (var j = 0; j < rays.length; j++) {
		rays[j].show();
		rays[j].lookAt(mouseX, mouseY);
	}

	for (var i = 0; i < rays.length; i++) {
		for (var j = 0; j < walls.length; j++) {
			rays[i].intersect(walls[j]);
		}
	}
}