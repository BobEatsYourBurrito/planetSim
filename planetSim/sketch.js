let ps, player, gravity;
let stars = [];
let planets = [];

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  player = new Player();
  player.update();
  ps = new ParticleSystem(player.pos.x ,player.pos.y);
  for(var i = 0; i < 300; i++) {
    stars.push(createVector(random(width),random(height)));
  }
  for(var i = 0; i < 10; i++) {
    planets.push(new Planet(random(200, windowWidth - 200), random(200, windowHeight- 200), random(20, 40)));
  }
}

function mouseDragged() {
  let mouse = createVector(mouseX, mouseY);
  let force = p5.Vector.sub(mouse, player.pos);
  let strength = .2;
  force.setMag(strength);
  player.applyForce(force);
}

function keyPressed() {
  if(keyCode === 87) {
    let force = createVector(0, -.7);
    player.applyForce(force)}
  if(keyCode === 83) {
    let force = createVector(0, .7);
    player.applyForce(force)}
  if(keyCode === 68) {
    let force = createVector(.7, 0);
    player.applyForce(force)}
  if(keyCode === 65) {
    let force = createVector(-.7, 0);
    player.applyForce(force)}
}

function draw() {
  background(0);
  for(var i = 0; i < stars.length; i++) {
    stroke(255)
    ellipse(stars[i].x, stars[i].y, random(0.5, 2.5));
  }
  for(var i = 0; i < planets.length; i++) {
    planets[i].render();
    player.attract(planets[i]);
  }

  ps.addParticle(1)
  ps.run();
  player.edges();
  player.update();
  player.render();
}
