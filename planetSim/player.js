class Player {
  constructor() {
    this.pos = createVector(450, 200);
    this.vel = createVector(0, 0);
    this.acc = createVector(4, 0);
    this.maxSpeed = 2;

  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.vel.limit(this.maxSpeed);
    this.acc.mult(0);
  }

  render(){
    beginShape();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading() + PI /2);
    noStroke()
    fill(200);
    vertex(0, -18);
    vertex(6, 2);
    vertex(-6, 2);
    endShape();
    stroke(0)
    line(0,2,0,-17);
  }

  applyForce(force) {
    this.acc.add(force);

  }

  attract(target) {
    let force = p5.Vector.sub(target.pos, this.pos);
    if(force.mag() < 300 && force.mag() > target.r) {
      let g = force.mag();
      let dSq = force.magSq();
      let strength = g * 1.5 / dSq;
      force.setMag(strength);
      this.applyForce(force);
    }
  }

  edges() {
    if(this.pos.x > width) {
      this.pos.x = 0
    } else if (this.pos.x < 0) {
      this.pos.x = width}
    if(this.pos.y > height) {
      this.pos.y = 0
    } else if (this.pos.y < 0) {
      this.pos.y = height
    }
  }
}
