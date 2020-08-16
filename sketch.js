var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50,200,25,25);
  bullet.shapeColor = "white"
  wall = createSprite(1200,200,thickness,height/2);
  bullet.velocityX = speed;
  wall.thickness = random(22,83);
  wall.shapeColor = color(80,80,80);

}

function draw() {
  background(12,12,12);  
  if(wall.x-bullet.x < bullet.width/2+wall.width/2){
  bullet.velocityX=0;
  var damage = 0.5*weight*speed*speed/110
  if (damage < 10) {
  bullet.shapeColor="red"
  }
  if (damage < 10 && damage > 5){
  bullet.shapeColor="yellow"
  }
  if (damage > 5){
  bullet.shapeColor="red";
  }
  }
  drawSprites();
}
