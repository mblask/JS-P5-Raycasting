class Ray{

	constructor(p, angle) {
		this.pos = createVector(p.x, p.y);
		this.dir = p5.Vector.fromAngle(angle);
	}

	show() {
		stroke(255);
		line(this.pos.x, this.pos.y, this.pos.x + this.dir.x * 10, this.pos.y + this.dir.y * 10);
	}

	lookAt(dirX, dirY) {
		this.dir.x = dirX - this.pos.x;
		this.dir.y = dirY - this.pos.y;
		this.dir.normalize();
	}

	intersect(wall) {
		const x1 = wall.a.x;
		const y1 = wall.a.y;
		const x2 = wall.b.x;
		const y2 = wall.b.y;

		const x3 = this.pos.x;
		const y3 = this.pos.y;
		const x4 = this.pos.x + this.dir.x;
		const y4 = this.pos.y + this.dir.y;

		const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
		if (denominator == 0) {
			return false;
		}

		const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denominator;
		const u = ((x1 - x3) * (y1 - y2) - (y1 - y3) * (x1 - x2)) / denominator;

		if (t > 0 && t < 1 && u > 0) {
			let ix = x1 + t*(x2 - x1);
			let iy = y1 + t*(y2 - y1);
			stroke(255);
			ellipse(ix, iy, 10);
			return true;
		}
		else {
			return false;
		}
	}

}