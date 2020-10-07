var moveitrect, fixitrect;
var hi,bye,why;

function setup() {
  createCanvas(800,400);
  fixitrect= createSprite(400, 200, 50, 50);
  moveitrect= createSprite (200,200,50,50);
  hi = createSprite (200,100,50, 50);
  bye= createSprite (300,100,50,50);
  why = createSprite (400,100,50,50);
  fixitrect.shapeColor = "black"
  moveitrect.shapeColor = "black"
  hi.shapeColor = "black"
  bye.shapeColor = "black"
  why.shapeColor = "black"
}

function draw() {
  background(255,255,255); 
  if (IsTouching(why, moveitrect)) {
  moveitrect.shapeColor = "blue"
  why.shapeColor = "blue"
  }
  else {
    moveitrect.shapeColor = "black"
    why.shapeColor = "black"
  }
  moveitrect.x = World.mouseX
  moveitrect.y = World.mouseY
  drawSprites();
}

function IsTouching(obj1, obj2) {
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2 &&
    obj2.x - obj1.x < obj2.width/2 + obj1.width/2 &&
    obj1.y - obj2.y < obj2.height/2 + obj1.height/2 &&
    obj2.y - obj1.y < obj2.height/2 + obj1.height/2 ){
   return true
  }
  else {
    return false
  }
}