var street,streetImg;
var player,playerImg;
var theif,theif_running

function preload(){
streetImg=loadImage("bg.jpg");
playerImg=loadImage("player.png")
theif_running=loadAnimation("theif1.png","theif2.png","theif3.png","theif4.png")
}

function setup() {
  createCanvas(800,400);

  street=createSprite(250,100);
  street.addImage("street",streetImg);
  street.scale=0.6;
  street.velocityX=-1.6;

  player=createSprite(100,260,20,20);
  player.addImage("player",playerImg);
  player.scale=0.7

  theif=createSprite(760,260,20,20);
  theif.addAnimation("theif",theif_running);
  theif.scale=0.5;
}

function draw() {
  background(streetImg); 
  
  if(street.x<300){
    street.x=width/2;
  }

createEdgeSprites()

  drawSprites();
}