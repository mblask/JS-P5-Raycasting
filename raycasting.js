let walls = [];
let particle;

function setup() {
	createCanvas(1200, 800);

	let numOfWalls = 10;
	for (let i = 0; i < numOfWalls; i++) {
		let wall = new Wall(random(width) + 100, random(height) + 100, random(width) + 50, random(height) + 50);
		walls.push(wall);
	}

	let leftWall = new Wall(0, 0, 0, height);
	let topWall = new Wall(0, height, width, height);
	let bottomWall = new Wall(width, height, width, 0);
	let rightWall = new Wall(0, 0, width, 0);

	walls.push(leftWall);
	walls.push(topWall);
	walls.push(rightWall);
	walls.push(bottomWall);

	particle = new RayParticle(width / 2, height / 2);
}

function draw() {
	background(0);

	for (let i = 0; i < walls.length; i++) {
		walls[i].show();
	}

	particle.show();
	particle.update(mouseX, mouseY);
	particle.raycast(walls);
}