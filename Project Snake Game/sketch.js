var snake1;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
snake1 = new snake(100,100);
frameRate(10);
}

//  The draw function is called @ 30 fps
function draw() {
snake1.run();
}

function runFood(){

  var f1 = new food()
}
