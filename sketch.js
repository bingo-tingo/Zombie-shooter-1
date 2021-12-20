var bg, bgImg;
var shooter,shooterImg,shooterShooting;

function preload () {
  bgImg = loadImage("assets/bg.jpeg");
  shooterImg = loadImage("assets/shooter_1.png");
  shooterShooting = loadImage("assets/shooter_3.png");
}

function setup () {
   createCanvas(windowWidth,windowHeight);

   // adding a background image
   bg = createSprite(displayWidth/2 - 20,displayHeight/2 - 20,200,200);
   bg.addImage(bgImg);
   bg.scale = 0.5;

   // creating player/shooter sprite
   shooter = createSprite(displayWidth - 1150,displayHeight - 300,50,50);
   shooter.addImage(shooterImg);
   shooter.scale = 0.5;

}

function draw () {
  background(0);

  // moving the shooter in up and down direction
  if (keyDown("UP_ARROW") || touches.length > 0) {
    shooter.y = shooter.y-30 ;
  }

  drawSprites();


}

