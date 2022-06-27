class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-0.4, 0.4), random(-0.4, 0.4));
    this.acc = createVector();
    this.lifespan = 255;
    this.heat = random(200, 255);
    gravity = createVector(0, .1);
  }

  render() {
    noStroke();
    fill(this.heat, random(10, 69), 0, this.lifespan);
    ellipse(this.pos.x, this.pos.y, 4);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.lifespan -= 3;
    this.heat -= 3

//    this.acc.add(gravity);
  }

  isDead() {
    if(this.lifespan < 0) {
      return true;
    } else {return false}
  }

  applyForce(force) {
    this.acc.add(force)
  }
}
