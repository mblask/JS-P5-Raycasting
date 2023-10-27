class Wall {

	constructor(x1, y1, x2, y2) {
		this.a = new createVector(x1, y1);
		this.b = new createVector(x2, y2);
	}

	show() {
		stroke(255);
		line(this.a.x, this.a.y, this.b.x, this.b.y);
	}

}