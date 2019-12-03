//Connor Spackman's Program

var ball;
var ship;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBall();
  loadShip();
}

function draw() {
background(0,0,0);
ball.run();
ship.run();
}

function loadBall(){
  ball = new Ball(random(0,10),random(0,10));
}
function loadShip(){
  ship = new Ship(random(width),random(height),random(0,10),random(0,10));
}
