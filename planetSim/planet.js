class Planet {
  constructor(x, y, radius) {
    this.pos = createVector(x, y)
    this.r = radius;
    this.red = random(255);
    this.blue = random(255);
    this.green = random(255);
  }

  render() {
    noStroke();
    fill(this.red, this.green, this.blue, 255);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }

}
