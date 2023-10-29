class RayParticle {

	constructor(x, y) {
		this.pos = createVector(x, y);
		this.rays = [];
		
		let numOfParticles = 60;
		let angle = 0;
		for (let i = 0; i < numOfParticles; i++) {
			this.rays.push(new Ray(this.pos, angle));
			angle += 2 * PI / numOfParticles;
		}
	}

	update(x, y) {
		this.pos = createVector(x, y);

		for (let i = 0; i < this.rays.length; i++) {
			this.rays[i].update(x, y);
		}
	}

	show() {
		stroke(255);
		strokeWeight(4);
		point(this.pos.x, this.pos.y);

		strokeWeight(1);
		for (let i = 0; i < this.rays.length; i++) {
			this.rays[i].show();
		}
	}

	raycast(walls) {
		for (let i = 0; i < this.rays.length; i++) {
			let ray = this.rays[i];
			let record = Infinity;
			let closest = null;
			for (let j = 0; j < walls.length; j++) {
				let wall = walls[j];
				let interPt = ray.intersect(wall);
				if (interPt) {
					let distance = dist(this.pos.x, this.pos.y, interPt.x, interPt.y);
					if (distance < record){
						record = distance;
						closest = interPt;
					}
				}
			}

			if (closest){
				line(this.pos.x, this.pos.y, closest.x, closest.y);
			}
		}
	}

}