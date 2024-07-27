var barco, fondo, ship, ground;

function preload(){
ship = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
ground = loadAnimation("sea.png");
}

function setup(){
  createCanvas(400,400);

  fondo = createSprite(200,100,200,200);
  fondo.addAnimation("piso",ground);
  fondo.x = fondo.width/2;
  fondo.velocityX = -8;


  barco = createSprite(200,200);
  barco.addAnimation("move", ship);
  barco.scale = 0.2;
}

function draw() {
  background("lightblue");

  if (fondo.x < 0) {
    fondo.x = fondo.width/2;
  }

  drawSprites();
}