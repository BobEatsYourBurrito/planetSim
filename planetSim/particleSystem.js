class ParticleSystem {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.particles = [];
  }

  addParticle(particleAmount) {
  //  for(let i = 0; i < particleAmount; i++) {
      this.particles.push(new Particle(player.pos.x, player.pos.y));
    //}
  }

  run() {
    for(let i = 0; i < this.particles.length-1; i++) {
      let p = this.particles[i]; {
        this.particles[i].applyForce(player.vel * -1);
        this.particles[i].update();
        this.particles[i].render();

        if (this.particles[i].isDead()) {
          this.particles.splice(i, 1)
        }
      }
    }
  }
}
