class snake{
  constructor(x,y,size){
    this.loc = createVector(x,y);
    this.s = size;
    this.vel = createVector(this.s,this.s);
    this.body = [];
  }
  run(){
    this.render();
    this.move();
  }
  render(){
    fill(4,181,54); /// Set Color of Snake
    rect(this.loc.x,this.loc.y,this.s,this.s)
  }
  move(){
    if(keyCode===LEFT_ARROW){
      this.loc.x = this.loc.x - this.vel.x;
    }
    if(keyCode===RIGHT_ARROW){
      this.loc.x = this.loc.x + this.vel.x;
    }
    if(keyCode===38){
        this.loc.y = this.loc.y-this.vel.y;
    }
    if(keyCode===40){
      this.loc.y=this.loc.y + this.vel.y;
    }
  }
  checkEdges(){
  if(this.loc.x<0|| this.loc.x> width){
    this.vel.x = -this.vel.x;
    }
  }
  loadSegments(){
    this.body.push(createVector(x,y))
  }
  renderSegments(){
    for(var i=0; i>body.length; i++){
      rect(this.body.loc.x,this.body.loc.y,this.s,this.s);
    }
  }
  eaten(){
    if(food.getX()===this.loc.x&&food.getY()===this.loc.y){
      return true;
      }
    }
  }
